---
author: "Bob Farzami"
date: "2016-06-29"
title: "How To Monitor The Performance of Docker Containers"
description: "Docker containers can be complicated when it comes to monitoring, so we've put together this guide to getting the most out of monitoring Docker."
category: "Cloud Monitoring"
url: "/monitor-performance-docker-containers/"
layout: "single"
---

Docker has taken the DevOps world by storm, enabling developers and IT admins to build and ship applications at a previously-unheard of rate. As with most progress, however, [Docker containers](https://www.docker.com/) come with their own set of potential issues and quirks, especially when it comes to monitoring, so we've put together this quick-and-easy guide to getting the most out of monitoring your Docker containers.

What is a Docker container?
---------------------------

[![small_v-trans](https://www.metricly.com/wp-content/uploads/2016/06/small_v-trans.png)](https://www.metricly.com/wp-content/uploads/2016/06/small_v-trans.png)

Docker is a packaging platform for software that relies on containers. Each container uses the Linux host's operating system kernel but self-contains the files that make up its configuration and environmental dependencies. Anything you could install on a server, can also be placed in a Docker container. This allows developers to push software to production environment while preserving the same exact run-time environment used during the development cycle.\
These containers have become the standard for DevOps teams who need to produce software that is scalable, ships quickly, and can run on any environment.

What is the difference between a container and a more traditional VM?
---------------------------------------------------------------------

Containers are more lightweight and make much more efficient use of the always-limited memory. Because all containers are daemons that leverage the same OS kernel, they start up much faster than VMs, each of which would require its own guest OS. You can see in the graphic below how much "lighter" Docker containers are than traditional VMs:

[![dockergraphic1](https://www.metricly.com/wp-content/uploads/2016/06/dockergraphic1.png)](https://www.metricly.com/wp-content/uploads/2016/06/dockergraphic1.png)

What particular monitoring problems do Docker Containers pose?
--------------------------------------------------------------

1) Monitoring Perspectives\
One host runs many containers. To have a true perspective on health and performance for containerized environments, administrators have to monitor both the host and the containers. There are multiple options for monitoring. You can install an agent on the host and monitor each container via the Docker API, or you could install an agent inside each container for detailed visibility inside each container. The easiest agents are pre-installed in a container and can be installed with a single command -- with Netuitive, all you need to do is [activate a datasource and install the agent](https://help.netuitive.com/Content/Misc/Datasources/Netuitive/integrations/new_netuitive_datasource_via_docker.htm?Highlight=docker).

2) Tracking Metrics\
Containers may live for seconds, minutes, hours or days. You have to decide when to stop tracking metrics from containers that have disappeared. If you do it right away, then you are not leaving a troubleshooting trail. If you keep them too long, you will be accumulating hundreds if not thousands of metrics over time. A reasonable approach would be to have a time-to-live (TTL) for the metrics in your monitoring environment.

3) Dynamic Naming\
Your monitoring rules require the support of wild carding and dynamic scoping. Your metric names will change as your new containers are launched, so your monitoring tool's alerting policies must be able to isolate the right metrics from the containers according to tags and metric naming conventions. Otherwise, you won't be able to enforce standard alerting policies in a dynamic environment.

4) Behavior Learning\
In a rapidly changing environment where containers can have vastly different workloads and functionality, [your alerting rules cannot be static.](https://www.metricly.com/3-types-anomaly-detection-monitoring-tools) On the other hand, when your containers live only for a short time then you won't have enough time to learn their behavior. So what to do? An effective monitoring solution would apply learned behavior profiles to new containers so that learning does not start from scratch each time a type of container is launched. The learned behavior profiles would be assigned according to images, naming convention or tags.

5) Resource Contention\
One of the downsides of containerization is that resources are not partitioned and can cause contention and performance problems. The host resources are limited yet shared dynamically. Your monitoring solution must measure the resource utilization of your Docker containers from multiple perspectives such as CPU, memory, disk I/O, network, disk space. Each utilization index would need to be measured separately and be made visible in reports so that you can easily identify the containers that cause slow-down of applications running on separate containers on the same host.

* * * * *

Ready to start monitoring your Docker containers with Netuitive? We offer a [no-obligation, 21-day free trial](https://www.metricly.com/signup).
