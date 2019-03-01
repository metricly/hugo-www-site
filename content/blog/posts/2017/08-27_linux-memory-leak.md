---
author: "Brian Conn"
date: "2017-08-27"
title: "Linux Memory Leaks: A Lesson in Debugging"
description: "Recently, we began getting reports that our Dockerized agent had a Linux memory leak leading to ~600MB growth over two weeks. Here's how we debugged."
category: "Product Updates"
url: "/linux-memory-leak/"
layout: "single"
---

Many of the tools and problems in this post will seem obvious to seasoned Python devs and those who have worked with these tools before, and even those who have worked extensively with performance issues. Unfortunately I am not a Python developer and did not start this journey with that knowledge. Hindsight is 20/20.

The Problem
-----------

Metricly's Linux agent is a packaged up version of our Diamond project fork as well as a couple other smaller libraries. This agent [sends performance data to Metricly](https://www.metricly.com/agent-based-monitoring) including CPU, network, disk, and memory usage. We also have a Dockerized agent which is the same agent in a Docker image, which is useful for [monitoring Docker containers](https://www.metricly.com/container-monitoring-netuitive) on the same host. A couple of months ago we started getting reports that this Docker agent had a slow memory leak leading to ~600MB growth over two weeks. Because the reports were only for the Dockerized agent we initially thought the issue was only with Dockerized environments.

Initial Tests
-------------

Our initial theory was that the Dockerized agent was leaking in highly volatile environments. If hundreds or thousands of Docker containers were coming and going then the agent would be sending in data for thousands of unique metric names (each metric is prefixed by the container ID), so somehow those unique metrics could be getting stored somewhere leading to growth. To test I ran the following command locally and watched the memory usage of the agent container:

| #!/bin/bash |

|\
 |

| docker run -d --name agent -e APIKEY=<api-key> -v /var/run/docker.sock:/var/run/docker.sock netuitive/docker-agent |

| while true; do docker run --rm alpine sleep 10; sleep 5; done |

[view raw](https://gist.github.com/cdisomma1/e3295010318adca448de79110a743ed1/raw/421e25d8b8cf07bb694aa60215797d061dc8d5d1/initial-test) [initial-test](https://gist.github.com/cdisomma1/e3295010318adca448de79110a743ed1#file-initial-test) hosted with ![❤](https://s.w.org/images/core/emoji/11/svg/2764.svg) by [GitHub](https://github.com)

Over a couple hours there was no noticeable memory growth of the container, so we put the theory to rest.

Around the time of the initial tests a support engineer discovered that the memory leak was also present on a natively installed Linux agent in our lab environment. This meant the Linux memory leak was not just a Docker agent issue, so we expanded our search to the core of our Linux agent: the Diamond project.

The Diamond Project
-------------------

I had very little experience with our Diamond project fork when I first dove into it, so most of my time initially was spent getting up to speed with the structure. I found that the main three components of the project are:

-   Collectors for collecting data from various systems (CPU, memory, disk, network, Docker, etc)
-   Handlers for shipping that data off to various systems (log files, Graphite, Metricly, CloudWatch, etc)
-   A scheduler to loop through 1) all enabled collectors to collect data, then 2) all handlers to ship off the data

Each of the collectors has a collect method which is called by the scheduler (CPU example) which publishes metrics though a method from the collector parent class. The publishing method calls the process method on each handler which results in sample batching and flushing. Overall the core workflow of the project is fairly simple and extensible.

The Metricly fork changes boil down to:

-   A Metricly handler for sending data to Metricly
-   Additional collectors from which we need to collect data
-   Smaller internal changes such as thread naming

So our fork has no major architectural changes, just additions on the fringes for both collectors and handlers.

Now that I was familiar with the project I could dig in.

Testing Linux Memory Leaks from the Outside
-------------------------------------------

My first attempts to replicate the memory leak were all from the outside looking in. I tried with little success to wire in Pympler (a Python memory profiler), but Diamond's scheduling aspect made it difficult to test memory usage at concrete points in time. I wasn't able to find a way to test a single collector or handler in isolation, so I paused on Pympler and decided to create as small a minified test case as I could.

To facilitate this testing I built all these test cases inside [Docker containers](https://www.metricly.com/monitor-performance-docker-containers) and ran them with Docker Compose. [Full source can be found here](https://github.com/Netuitive/linux-agent-memory-leak-tests), if you'd like to follow along or replicate the memory leak issues yourself.

My test cases (after many false starts) became:

-   Run a container with a fresh install of Diamond (not the Metricly fork) with only the default collectors and the archive handler (vanilla/ in the test repo)
-   Run a container with a fresh install of Diamond with the Metricly handler and only the default collectors (vanilla-handler/ in the test repo)
-   Run a container with a fresh install of diamond, the Metricly handler, and the Metricly Docker collector (docker/ in the test repo)
-   Run a Docker container generator (similar to my simple while loop above) which would generate ephemeral containers for collection by the Docker collector (docker-generator/ in the test repo)

I let these containers run over the weekend and when I came back I analyzed the results. Lo and behold I saw what could be a leak in the last case with both the Metricly handler and the Docker collector using the regular Diamond project as a base. Finally, a lead: the combination of the handler and Docker collector is causing issues.

Client Library Breakthrough
---------------------------

Through all this testing I was not working alone. Multiple other engineers and support engineers helped brainstorm theories about what could be happening. One engineer noted that the Metricly handler really doesn't do much except package up samples and send them to our Metricly [Python client library](https://www.metricly.com/python-monitoring). He mentioned that there had been issues with this library before, so we decided it was a good place to start digging into again.

Our Python client library has a handy example script for testing. The best part is that it's a small, terminating script which means we could break out Pympler again to track memory usage -- a far smaller test case than the entire Diamond project. I wrote a small test script from the example file and ran it to get the following output.

| import netuitive |

| import time |

| import os |

|\
 |

| from pympler import tracker |

|\
 |

| tr = tracker.SummaryTracker() |

|\
 |

| ApiClient = netuitive.Client(url=os.environ.get('API_URL'), api_key=os.environ.get('CUSTOM_API_KEY')) |

|\
 |

| MyElement = netuitive.Element() |

|\
 |

| counter = 0 |

|\
 |

| while True: |

| timestamp = int(time.mktime(time.localtime())) |

| MyElement.add_sample('app.error-' + str(counter), timestamp, 1, host='appserver01') |

|\
 |

| ApiClient.post(MyElement) |

|\
 |

| MyElement.clear_samples() |

|\
 |

| tr.print_diff() |

|\
 |

| counter += 1 |

| Raw |

[view raw](https://gist.github.com/cdisomma1/76b565d645a5b401c4b344076f19b9db/raw/5fcdf0a6ebc06ef6038b8b207a37d33ad623dd25/python-client-test.py) [python-client-test.py](https://gist.github.com/cdisomma1/76b565d645a5b401c4b344076f19b9db#file-python-client-test-py) hosted with ![❤](https://s.w.org/images/core/emoji/11/svg/2764.svg) by [GitHub](https://github.com)

| types | # objects | total size |

| =================================== | =========== | ============ |

| list | 1301 | 133.17 KB |

| str | 1320 | 73.91 KB |

| dict | 21 | 10.24 KB |

| int | 153 | 3.59 KB |

| wrapper_descriptor | 9 | 720 B |

| _sre.SRE_Pattern | 3 | 668 B |

| instance | 9 | 648 B |

| getset_descriptor | 4 | 288 B |

| weakref | 3 | 264 B |

| member_descriptor | 3 | 216 B |

| <class 'urlparse.SplitResult | 2 | 208 B |

| function (store_info) | 1 | 120 B |

| cell | 2 | 112 B |

| <class 'netuitive.element.Element | 1 | 64 B |

| <class 'threading._RLock | 1 | 64 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| list | 5 | 480 B |

| str | 7 | 414 B |

| int | 2 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 48 B |

| list | 0 | 32 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| list | 0 | 64 B |

| str | 1 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 48 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 49 B |

| types | # objects | total size |

| ======= | =========== | ============ |

| str | 1 | 49 B |

| types | # objects | total size |

[view raw](https://gist.github.com/cdisomma1/0aad510ece8f53aa7a9096f4324e813b/raw/543c088ac378530bb7e2dff38ccc00f78d2e12ed/python-client-test.txt) [python-client-test.txt](https://gist.github.com/cdisomma1/0aad510ece8f53aa7a9096f4324e813b#file-python-client-test-txt) hosted with ![❤](https://s.w.org/images/core/emoji/11/svg/2764.svg) by [GitHub](https://github.com)

On each loop, after clearing the element samples, we have a single string leaking. Digging in we find that there is an array of distinct metrics in netuitive/client.py which is never cleared. There's our leak. The more distinct metrics collected, the faster the leak.

Wait, wasn't this our original theory? Didn't we test this already?

The sad fact is that our earlier test glazed over some subtle details which we only realized at the end:

-   The default collection interval for the Docker agent is 60 seconds meaning our original test created many containers which lived and died inside the collection interval, so the Docker collector never saw them, never created distinct metrics for them, and therefore never leaked their metrics.
-   The leak was, as originally reported, extremely slow. I thought my rapid creation of Docker containers would greatly accelerate the leak (making it fast enough to notice within a couple hours), but in fact it would have taken much longer to see a leak large enough to stand out from the normal memory volatility of a collecting agent.
-   It's just very tough to confirm a Linux memory leak looking from the outside in. A project as large Diamond means memory usage will be fluctuating too much during normal usage to confirm or deny a leak.

Once again, hindsight is 20/20. I made a branch removing the metric array and kicked off another two overnight tests: one with the modified-agent in the test repo, and another with the regular Docker agent in the test repo, to compare their performance. The test results were pretty clear.

![Linux Memory Leak: Results](https://www.metricly.com/wp-content/uploads/2017/08/Results-1024x217.png)

I created a PR to the client library, built a release candidate agent, tested one more time overnight with the new agent (agent-rc/ in the test repo), and confirmed the same results. A patched Linux agent and Docker agent went out the next day. Memory leak solved.

Conclusions
-----------

As frustrating as this whole endeavor was (especially having come full circle when identifying the root cause), we were able to learn a lot about Python, the Diamond project, and debugging Linux memory leaks. Much of what we learned is translatable to other languages if we run into other leaks. It was also interesting to work on a bug which was entirely performance based instead of the normal broken functionality bugs. It gives the phrase "test case" a whole new meaning. One feeling which didn't change throughout this whole process, however, is how much I dislike memory leaks.
