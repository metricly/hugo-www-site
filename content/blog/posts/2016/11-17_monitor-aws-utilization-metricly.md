---
author: "Christina DiSomma"
date: "2016-11-17"
title: "How to Monitor AWS Utilization with Metricly"
description: "The key to keeping costs in check while maintaining performance is utilization: specifically, the ability to identify over- and under-provisioned instances."
category: "Cloud Monitoring"
url: "/monitor-aws-utilization-metricly/"
layout: "single"
---


There is a fine line between ensuring optimal infrastructure and application performance and controlling AWS costs. Recognizing the tension between these two objectives, our team created a monitoring tool that can do both. The key to keeping costs in check while maintaining performance is utilization -- specifically, the ability to identify over- and under-provisioned instances and translate those findings into actionable insights.

Read on to find out how to obtain actionable AWS utilization insights with Metricly's utilization reports.

Why AWS Utilization Monitoring Matters
--------------------------------------

When optimizing your AWS environment, simply reducing cost isn't always the answer. Taking out necessary, but expensive, instances could easily wind up costing you more in the form of serious performance problems or even an outage. If you really do need it, it might be worth the cost. The place to start, then, is with utilization.

Utilization metrics tell more about your environment and its performance than perhaps any other. Powerful in their own right, utilization calculations combined with insights on your specific infrastructure and applications take your monitoring to the next level. However, there are several pitfalls that can leave you coming up short.

Common AWS Utilization Monitoring Mistakes
------------------------------------------

There are several tools and reports out there that claim to help you monitor and report on AWS utilization. In order to pick the best one, it helps to be informed about common mistakes or misconceptions when producing or interpreting the data.

**1) Relying on CPU utilization (or any one metric) alone.**

One metric can't explain an entire environment's utilization. Monitoring CPU utilization alone won't tell you when the disk is full or approaching full. In this case, utilization-related performance problems might occur despite the fact that the single utilization metric hasn't reached alarming levels.

**2) Calculating utilization without understanding the limitations of the infrastructure.**

For example, you could have one EC2 that averages 1.5MB/second received via the network. By itself, that metric doesn't tell the full story -- you need additional information on the capacity of the server's network connection, as well as the larger environment, to determine whether an adjustment is needed.

Metricly created a system of computed metrics designed to meet this need. These computed metrics offer an additional layer of context to commonly used monitoring metrics, to allow users to make more informed capacity decisions. For more on these unique metrics and the value they add to your monitoring, [read this blog](/the-power-of-computed-metrics).

**3) Ignoring external factors**

Monitoring utilization metrics without understanding the outside factors that impact utilization is like driving a car with blinders on.. You can see straight ahead, but are completely oblivious to other outside circumstances. In one case, a Metricly user spent hours trying to reconcile discrepancies in utilization and performance. In the end, it wasn't a capacity or utilization issue at all, but an internal AWS feature that had been causing the problem the whole time. (We wrote a [short piece on the issue](/subtleties-ec2-cpu-utilization) if you want to read more about it.) Ignoring small factors like these can have a huge impact on your system's performance.

Metricly's AWS Utilization Reports
-----------------------------------

So how do you avoid making the above mistakes? A good utilization monitoring structure is the best place to start.

Metricly offers an in-depth utilization reporting structure across your entire infrastructure. On AWS, metrics are available for EC2, EBS, and RDS instances, as well Auto Scale Groups (ASGs.) Two types of reports are available: utilization by instance and a utilization boxplot view.

### AWS Utilization by Instance

The first is a report showing utilization for each instance over a given time period. This report offers the minimum, maximum, and average utilization values for the time period, plus the 5^th^ and 95^th^ percentile values:

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/11/UtilizationReport1Edited-1024x507.png)

This report offers a holistic view of the utilization of your entire environment, as well as allowing you to consider more than one utilization metric. Additionally, the metrics take into account the overall capacity of the instance in question by representing utilization as a percentage. Many of Metricly's computed metrics are also represented in this report, providing valuable additional context.

### AWS Utilization Boxplot Report

The second report is a Utilization Boxplot which adds context to your data by offering a slightly different view of the data. Here's an example of the report:

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/11/UtilizationReport2Edited-1024x529.png)

For more information on this report, [see our blog](/capacity-utilization-with-box-and-whisker-plots-is-the-cats-meow).

Like the standard utilization report, the boxplot report provides utilization metrics within the broader context of each instance's overall capacity.

AWS Utilization Policies and Alerts
-----------------------------------

Smart policies are the final step to optimizing your utilization monitoring. As we noted above, utilization monitoring will not be successful if you're relying on one metric alone. This is where Metricly's [multi-criteria policies](/reduce-alert-multi-criteria-policies) come in.

Metricly has an out-of-the-box policy for when an EC2 is experiencing elevated CPU utilization, but normal network activity (reads and writes). Contrary to traditional monitoring, which alarms whenever CPU utilization breaches a certain threshold, this policy bases its thresholds on contextual bands that conform to the normal behavior of the instance. If your EC2 usually operates close to capacity (75% utilization), the policy may fire at 85% utilization or above, while an instance that usually operates at 20% utilization would cause it to fire at a much lower level.

Additionally, this policy only fires when CPU utilization is abnormal AND network levels are within the normal range; another policy is used for when the network levels are abnormally high. By setting an alarm based on two factors instead of one, this policy offers the context needed to decide whether additional capacity is needed, or if the network is experiencing unusually high activity.

Metricly Utilization Reports and Free Trial
--------------------------------------------

You can access these reports and others in a 21-day, fully-featured [free trial](/signup) of Metricly.
