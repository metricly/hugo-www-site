---
author: "Chris Tozzi"
date: "2017-01-11"
title: "Five Trends that Will Define DevOps in 2017"
description: "Here’s a look at five trends in practices, technologies and culture that are poised to reshape DevOps in 2017 as we enter a new year."
category: "DevOps"
url: "/five-trends-define-devops-2017/"
layout: "single"
---
The DevOps movement is [almost a decade old](http://itrevolution.com/the-history-of-devops/), but it continues to evolve at a dizzying pace. Here's a look at five trends that are poised to reshape DevOps practices, technologies and culture as we enter a new year.

DevOps in 2017: Serverless Computing
------------------------------------

[![DevOps in 2017 Predictions: Serverless](/wp-content/uploads/2017/07/Serverless.png)](/wp-content/uploads/2017/07/Serverless.png)

[AWS Lambda](/best-practices-aws-lambda-monitoring), which was introduced in 2014, is old news by now. But other serverless computing technologies are taking off, too. [Azure Functions](/introducing-microsoft-azure-integration) became generally available late last year. IBM began aggressively promoting [OpenWhisk](http://openwhisk.incubator.apache.org/) around the same time.

Expect the momentum of the serverless computing trend to continue in 2017. As Corne Kloppers [notes](https://www.planittesting.com/us/Insights/2016/DevOps-In-2017), serverless architectures are a key component of infrastructure modernization. Like microservices and next-generation cluster management tools, serverless computing functions help DevOps teams build modern infrastructures that are more agile and make more efficient use of resources.

Containers and Virtual Machines Working Together
------------------------------------------------

Since [Docker](/monitor-performance-docker-containers)'s explosion onto the DevOps scene in 2013, discussion of containers and virtual machines has mostly focused on whether you should replace the latter with the former. (In other words, people have been thinking of containers and virtual machines as an either-or proposition.)

Going into 2017, that is starting to change. DevOps teams are now realizing that containers and virtual machines can complement each other. That's especially true in cases where virtual machines can serve as the foundation for agile, containerized infrastructure.

VMware is working to make the implementation of such infrastructure easier through [vSphere Integrated Containers](https://blogs.vmware.com/vsphere/2015/10/vsphere-integrated-containers-technology-walkthrough.html) (essentially a Containers-as-a-Service, or CaaS platform, built using VMware virtual machines). The VIC Engine has been around since 2015, but VMware recently expanded it significantly by adding components like a registry (Harbor) and a management tool (Admiral).

Meanwhile, Canonical has been quietly promoting LXD, a hypervisor that was released in stable form last spring, as an [ideal solution for hosting Docker](https://stgraber.org/2016/04/13/lxd-2-0-docker-in-lxd-712/). Because LXD is built using Linux containers, LXD is not a traditional virtual machine platform. But when it comes to hosting Docker, it achieves the same effect as virtual machines from VMware or other traditional virtualization platforms.

The maturation of hypervisors as solutions for hosting Docker will make it easier in 2017 for DevOps teams to make containers and hypervisors work together, rather than thinking of them as competing technologies.

Optimizing DevOps Communication
-------------------------------

[![DevOps in 2017 Predictions: DevOps Communication](/wp-content/uploads/2017/07/ChatOps.png)](/wp-content/uploads/2017/07/ChatOps.png)

In multiple ways, communication for DevOps teams is on its way to reaching a new level of efficiency in 2017.

One of those ways is more ChatOps. ChatOps integrations have already been improving communication for DevOps teams for some time. But ChatOps has now transformed from a nice-to-have feature to one that is being embraced by enterprises, as George Hume [wrote](https://devops.com/4-essential-practices-succeeding-chatops/) on DevOps.com in November.

Meanwhile, developers are finding new ways to insert communication optimizations into DevOps tools. Consider, for example, the latest version of [PagerDuty's monitoring](/combining-netuitive-and-pagerduty-for-monitoring-alarms) and incident management platform, which offers communication features like "suppression." Suppression lets incident management teams monitor to collect information about an outage without being alerted about it immediately. This is just one example of the trend toward providing a more nuanced and flexible---or more agile---approach to communication.

Expect these trends to continue in 2017 as the DevOps world seeks even leaner and meaner ways of sharing information.

More Security Automation
------------------------

Securing data and systems has traditionally involved a fair amount of manual effort. Sure, it's possible to provide an automated security layer by running things like antivirus software. But when investigating breaches or drilling down deeply into data to find security vulnerabilities, security analysts have had to perform tedious analysis by hand.

As TechTarget [notes](http://searchsecurity.techtarget.com/feature/DevOps-security-requires-new-mindset-and-tools-for-visibility-automation), however, that is changing. DevOps teams are now building automated security technologies into their continuous deployment pipelines. They are doing this in order to streamline security operations and break down the silo that has typically separated security teams from the rest of the organization.

The advent of DevOps-friendly next-generation security tools is making integrations like these easier. If you look only at the container ecosystem, for example, lots of new security solutions---from the [Clair](https://github.com/coreos/clair) image scanner to [Aquasec](https://www.aquasec.com/)'s holistic container security platform---have now emerged that can make continuous deployment more secure.

Embrace of Open Standardization
-------------------------------

![](/wp-content/uploads/2017/01/large_h-trans-1-1024x352.png)

2016 was a somewhat rocky year within the DevOps community when it came to defining open standards and assuring interoperability. Tensions came to a head toward the end of the summer, when talk emerged of forking Docker largely in response to worries that Docker was evolving  too fast to respect community-defined container standards. A fork never materialized, but some people [saw Red Hat's OCID project](http://www.infoworld.com/article/3123412/application-development/new-red-hat-project-looks-a-lot-like-a-docker-fork.html), essentially, as a Docker fork.

However, things are looking better for fans of open standards and interoperability in 2017. Docker's recent decision to [open source containerd](https://www.linux.com/news/docker-containerd-ups-open-source-container-management-ante) sends a message that the project is committed to open code and open standards after all. The bickering last summer seems more like the growing pains that tend to accompany any major open source project. (Anyone remember the [glibc fork](https://en.wikipedia.org/wiki/GNU_C_Library#Fork_.22Linux_libc.22) back in the 1990s, which was caused by disagreement over how the Linux and GNU developer communities should cooperate?) The more recent arguments are more likely a product of change rather than a harbinger of fragmentation within the DevOps world.
