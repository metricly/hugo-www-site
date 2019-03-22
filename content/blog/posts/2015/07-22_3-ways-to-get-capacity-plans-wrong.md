---
Author: "Jason Simpson"
date: "2015-07-22"
title: "3 Ways to Get Capacity Utilization Wrong"
description: "Are you getting the most out of your AWS environment? It's easy to get capacity utilization wrong! Here are three common mistakes to avoid."
category: "DevOps"
url: "/3-ways-to-get-capacity-plans-wrong/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

How could anyone get capacity utilization wrong with dynamic environments, auto-provisioning, auto-scaling, etc.?  The short answer is: easily. Today, systems are not leveraging analytics; "automation" is done by setting static thresholds; and capacity utilization calculations are inaccurate.

It's important to know the difference between these components before we dive in:

-   **Capacity Utilization Metric** -- A metric used to measure the rate at which potential output levels are being met or used

-   **Capacity Utilization Rate** -- Usually expressed as a percentage, it is computed by dividing the total capacity with the portion being utilized

This is an example of a basic capacity calculation:

[![Capacity Utilization Metric](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Capacity_Utilization_Example1.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Capacity_Utilization_Example1.png)

It seems simple, but it's when you scale capacity calculations across elements, different units of metrics, and multiple environments, things start to get tricky.  Here are three ways to get capacity utilization wrong:

1) Monitor a single metric

Some people think, "I just need to find one good KPI like CPU to monitor."  Everyone knows 100% CPU utilization means there is no longer capacity in our system. In this simple use case, however, trying to understand capacity utilization of a host is incorrect. CPU is a good metric, but that does not show us when the disk is full.  To understand the utilization of a particular host or any element, you need a combination of metrics that will accurately define capacity utilization.

2) Ignore the need for metadata

The next step to improve our situation is to start monitoring multiple metrics.  For an operating system, these are usually CPU, memory, disk, and network.  For an application, you might monitor average response times, errors per minute, and thread counts.  But do you know the total capacity of each of these elements to plug into a calculation?  Understanding the high watermark for each metric is essential when calculating capacity.

To solve this you need to pull in attributes about the metric or note other times the metric will need to be observed.  For example, we can know the metadata (the total RAM available) for a given host, but transactions per minute for a billing application would typically be an observed metric. Leveraging performance management tools can help obtain those high watermarks.  It's important to note, when using observed high watermarks you need to normalize the values across all nodes of that type.

3) Monitor only observed metrics

Systems are complex and require subject matter experts to do fine tuning. One technique to help with this is to create computed metrics. These are additional calculations which take into account the systems parameters or known limitations.

For example, a standard/magnetic elastic block storage (EBS) supports up to 300 IOPS.  By looking at a ratio of our IOPS/sec compared to 300 IOPS/sec you can get a utilization percentage and tell if you are in a normal range.

**(X IOPS/sec / 300 total IOPS/sec ) = Y (%) Utilization**

Taking this a step further, you can create another computed metric to better understand when you are running out of compute resources.

**(Z Run Queue / (X CPU#)*2))*100 = Y (%) Utilization**

For example, seeing a processor run queue length more than double the number of CPUs indicates a pending capacity issue. While this is not the high watermark for the processor run queue, it is a good indicator you are running out of CPU.

These are easy pitfalls to avoid when determining your systems capacity utilization, however, it's easy to fall into old habits of over-provisioning infrastructure, applications, and services; but this doesn't always protect us from issues. You can avoid this by creating a capacity plan, deploying some real-time monitoring solutions like [Metricly](/), and effectively right-sizing your environment.

* * * * *
*See how real-time monitoring with Metricly can help you right-size your environment. [Try us free for 21 days.](/signup)*
