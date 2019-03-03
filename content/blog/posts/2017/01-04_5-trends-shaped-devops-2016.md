---
author: "Twain Taylor"
date: "2017-01-04"
title: "5 Trends that Shaped DevOps in 2016"
description: "From major updates to infrastructure technologies like Docker, and new workflow strategies like ChatOps, 2016 has been an eventful year in the DevOps world. "
category: "Devops"
url: "/5-trends-shaped-devops-2016/"
layout: "single"
---

From major updates to infrastructure technologies like Docker, and new workflow strategies like ChatOps, 2016 has been an eventful year in the DevOps world. Below, I take a look back at some of the most significant DevOps developments of 2016, and consider how they might impact the future of DevOps going into the new year.

[![Five Trends Shaping Devops](https://www.metricly.com/wp-content/uploads/2017/07/5-Trend-Option-4.png)](https://www.metricly.com/wp-content/uploads/2017/07/5-Trend-Option-4.png)

1\. Docker 1.12 Adds Built-in Orchestration
-------------------------------------------

[![](https://www.metricly.com/wp-content/uploads/2017/07/large_h-trans-1-1024x352.png)](https://www.metricly.com/wp-content/uploads/2017/07/large_h-trans-1.png)

Docker has become one of the most widely used [DevOps tools](https://www.metricly.com/devops-tools-stacking-up-for-success) since its launch in 2013. Like all new technologies, Docker has had its share of growing pains. Container security and the orchestration of container clusters at scale were among the top reasons organizations avoided deploying containers in production initially.

Acting on user feedback, Docker has made great progress since its introduction, leading to the crucial version 1.12 release back in July 2016. This release not only fixed stability issues, but also introduced major new features and integrations.

With Docker 1.12, a native container Swarm option was made available with the docker swarm command. [Orchestration built-in](https://blog.docker.com/2016/06/docker-1-12-built-in-orchestration/) makes Docker a more complete offering. Security was also tightened by using TLS encryption between nodes by default. Along with a host of other features, Docker became more self-sufficient with features baked-in, decreasing reliability on third-party tools.

Also worth noting is the alliance Docker formed with Microsoft to add native support for [Docker containers in Windows Server 2016](https://blog.docker.com/2016/09/dockerforws2016/). This brings the commercially supported Docker Engine to Windows Server customers at no extra charge. With this move, Microsoft reaps the benefit of having the hottest new technology deeply integrated into Windows Server (albeit with a few caveats, like the fact that networking support for Docker containers on Windows remains a work in progress). At the same time, Docker gains a foothold with the large enterprise customer base of Microsoft.

These updates make Docker ready for its next big challenge---driving adoption in large enterprises.

2\. Netflix Completes Its Move to the Cloud
-------------------------------------------

[![DevOps Trends: Netflix](https://www.metricly.com/wp-content/uploads/2017/07/Netflix_2015_logo.png)](https://www.metricly.com/wp-content/uploads/2017/07/Netflix_2015_logo.png)

Netflix has set many benchmarks over the years for what a reliable online service should be like. In January of 2016, [Netflix completed its move](https://media.netflix.com/en/company-blog/completing-the-netflix-cloud-migration) towards a cloud infrastructure, a journey it began all the way back in 2008.

While it may not seem like a big deal for a company to use the cloud these days, there is something to be learned from the fact that a service provider as large as Netflix was able to move its *entire* infrastructure to the cloud. It doesn't mean the days of on-premises computing are numbered, but it is encouraging for DevOps teams wondering whether they will ever be able to migrate fully to cloud-based infrastructure.

3\. AWS Lambda Begins the Serverless Revolution
-----------------------------------------------

When [AWS Lambda](https://www.metricly.com/best-practices-aws-lambda-monitoring) was launched back in 2014, there was some speculation about how ready we are for a serverless computing platform. In 2015, many developers dabbled with AWS Lambda, and found it promising. In 2016, Lambda adoption has exploded, making it the fastest growing product of AWS this year.

[![DevOps Trends: Lambda](https://www.metricly.com/wp-content/uploads/2017/07/Search-Volume-Lambda.png)](https://www.metricly.com/wp-content/uploads/2017/07/Search-Volume-Lambda.png)

Google search volume for AWS Lambda (Source: Google Trends)

At the Re:invent conference, AWS made [significant announcements](https://venturebeat.com/2016/12/01/aws-enhances-lambda-with-step-functions-cloudfront-compute-capability-c-support/) around Lambda, including support for C#, Greengrass for IoT devices, and Step Functions to manage your application using visual workflows. With developers showing eagerness for serverless computing, and AWS doubling down on updates, 2017 is set to be another year of explosive growth for AWS Lambda. If you haven't already, you should consider starting a pilot project with AWS Lambda. It's a taste of how apps will be built in the not-too-distant future.

4\. DevOps Monitoring Got Smarter
---------------------------------

DevOps [monitoring](https://www.metricly.com/adding-analytics-to-devops-model) is more complex than traditional monitoring. The DevOps process involves faster deployment of microservices on distributed infrastructure using a completely new toolkit of cloud services. To cope with this complexity, monitoring tools across the board are betting big on machine learning. Splunk, Sumo Logic, and [Netuitive](https://www.metricly.com/how-to-leverage-machine-learning-for-proactive-monitoring-alerts), to name a few, have invested in building algorithms that reduce the manual effort in monitoring.

Machine learning algorithms can process large volumes of performance data in much quicker time than a human can. An intelligent monitoring tool like Netuitive can observe performance trends over time, and [spot anomalies](https://www.metricly.com/what-is-anomaly-detection) that fall outside the range of normal behavior. This enables you to spot issues even before the rest of the system is affected. This kind of [proactive monitoring](https://www.metricly.com/how-to-leverage-machine-learning-for-proactive-monitoring-alerts) was not possible with traditional monitoring tools. In 2016, tools like Netuitive have set a new standard for DevOps monitoring---one that's driven by machine learning.

[![DevOps Trends: Monitoring](https://www.metricly.com/wp-content/uploads/2016/05/whynetuitive-anomalydetection.png)](https://www.metricly.com/wp-content/uploads/2016/05/whynetuitive-anomalydetection.png)

5\. Increasing Use of Containers on Bare Metal
----------------------------------------------

Something to watch out for in 2017 is the use of containers on bare metal servers. With container technology maturing and replacing VMs for many workloads, Joyent, [Ubuntu](https://www.ubuntu.com/containers/lxd), and OpenStack are among the few that have been looking to reverse what VMs did by making it possible to run workloads on bare metal once again, without sacrificing the portability of virtual machines.

The main reason to run applications on bare metal is to achieve lower latency and better performance. Compute-intensive processes can be held back by the hypervisor layer of VMs, and now that Docker has provided a way to avoid the hypervisor altogether, running on bare metal is a more likely possibility. Mobile advertising company [Taptica](https://thenewstack.io/in-defense-of-bare-metal/) switched from cloud to bare metal servers with Internap, and reports being happy with the performance boost it has achieved.

Bare metal can be harder to manage than VMs, but vendors are finding ways to provide VM-like flexibility for bare metal. While this may not result in a complete shift away from VMs, it provides added flexibility to your infrastructure.

Conclusion
----------

2016 has been a year of consolidation and maturation for many of the vendors and tools in the DevOps space. From becoming more robust with native functionality to expanding their feature set with third-party [integrations](https://www.metricly.com/integrations), and even exploring new and better ways to architect infrastructure, the DevOps ecosystem is constantly redefining how modern apps are built and shipped. Organizations that adopt these trends early will outpace their competition as we enter 2017.
