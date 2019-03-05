---
Author: "Bob Farzami"
date: "2015-01-14"
title: "DevOps Best Practices with David Linthicum"
description: "I spoke with David and got his perspective on best practices as a cloud architect, and shared what Metricly is doing with analytics delivery in the cloud."
category: "DevOps"
url: "/devops-best-practices-david-linthicum/"
layout: "single"
---


I had an interesting conversation recently with [David Linthicum](https://www.cloudtp.com/who-we-are/our-people/) of [Cloud Technology Partners](https://www.cloudtp.com/). He has been helping enterprise customers design auto-provisioned, self-healing, and auto-scaling cloud solutions for many years, and also helping software development organizations write applications that leverage cloud services.

I was interested to learn about the best practices he has compiled over the years and that are used at CTP Labs to optimize application performance. We shared ideas about the virtues of continuous delivery with [Chef](https://www.chef.io/), [Puppet](https://puppet.com/), [Bamboo](https://www.atlassian.com/software/bamboo), and [SaltStack](https://saltstack.com/), and how DevOps teams can be confident that their workloads have sufficient capacity and performance through multiple code pushes during a given day, week or month.

We discussed how the DevOps community overcomes those challenges by closely watching key metrics in the dashboard of open source tools such as [Graphite](https://graphite.readthedocs.io/en/latest/) that have an impressive market share, as well as setting thresholds on key metrics such as latency and error rate.

We agreed that the challenge then becomes how do you scale as your environment grows? How do you eyeball so many graphs and triage false alarms? How do you separate capacity issues from performance issues?

The current practice seems to project graphs on the operations center walls, and configure sophisticated triage and escalation alert policies.

Similar to a [blog ](https://www.metricly.com/devops-moving-advanced-analytics)that [Betsy Nichols](https://www.metricly.com/about-us), our chief data scientist, wrote based on a similar consultation with [Gene Kim](http://www.realgenekim.me/) --- to tackle these scaling challenges, the topic of analytics has been gradually bubbling up at conferences such as [Monitorama ](http://monitorama.com/)and pursued in open source projects such as [Skyline](https://github.com/etsy/skyline).

After all, DevOps is about automation so why not automate the process of performance analysis and capacity management using algorithms?

It was great speaking with David and hearing his perspective as a cloud architect.  I also shared with him what Netuitive is doing with delivery of analytics in the cloud as well as a free Beta program to invite DevOps community feedback on new ideas.

Here is a visual to summarize some of the concepts:

[![Blog Visual (Best Practices)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/visual.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/visual.png)
