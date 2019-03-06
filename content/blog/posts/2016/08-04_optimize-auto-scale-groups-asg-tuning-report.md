---
author: "Andrew Paine"
date: "2016-08-04"
title: "Optimize Your Auto Scale Groups With ASG Tuning Report"
description: "AWS auto scaling groups (ASGs) are a great way to automatically manage EC2 capacity to meet fluctuations in demand, but it is all too easy to over-provision capacity."
category: "Cloud Monitoring"
url: "/optimize-auto-scale-groups-asg-tuning-report/"
layout: "single"
---


AWS [auto scaling groups](https://help.netuitive.com/Content/Misc/Datasources/AWS/new_aws_datasource.htm#auto-scaling-groups) (ASGs) are a great way to automatically manage [EC2 capacity](https://help.netuitive.com/Content/Misc/Datasources/AWS/new_aws_datasource.htm?#ec2) to meet fluctuations in demand, but it is all too easy to over-provision capacity, resulting in unused resources and too much spend on redundant EC2 instances.

Common auto scaling use cases
-----------------------------

A typical ASG use-case is to link to a [load balancer (ELB).](https://help.netuitive.com/Content/Misc/Datasources/AWS/new_aws_datasource.htm#elb) If traffic to the ELB is low, then just one or two EC2 instances may be sufficient to share the load. If there is a regular pattern in workload where  requests to the ELB increase at particular times of day, then an ASG scaling policy can be used to automatically increase the number of EC2 instances in the ASG so that traffic is shared accordingly. The policy can return the instance count back to the normal level when traffic returns to lower levels.. If an unexpected increase in traffic occurs, a CloudWatch alarm may be triggered and an ASG scaling policy can be linked to the alarm to automatically increase the EC2 instance count. Another policy could scale back the EC2 instance count again once the alarm has cleared.

ASGs need not always be linked to ELBs; load can also be distributed between EC2s by, for instance:

-   Each EC2 instance pulling work requests from a message queue
-   Resource managers such as Yarn
-   Custom software load balancing built into applications

Another common use case is to create an ASG with no scaling policies but instead with a fixed number of instances designed to meet worst-case load conditions. In this case, the capacity is guaranteed to be available whenever it is needed.  That's the good news.  The bad news is that the capacity is being paid for whether or not it is needed.

Auto Scaling in the Real World
------------------------------

Observing actual ASG usage in *Metricly* over several months we have seen some interesting patterns:

-   Only a third of ASGs have been observed to scale in or out at all
-   Over half of all ASGs are of fixed size at 1 or 2 EC2 instances
-   The remaining 13% are of a fixed size of 3 or more instances, with 3% of all ASGs fixed at 5 or more EC2s

[![AutoScaleGroups1](https://www.metricly.com/wp-content/uploads/2016/08/AutoScaleGroups1.png)](https://www.metricly.com/wp-content/uploads/2016/08/AutoScaleGroups1.png)

The first two examples fit well with the most common uses cases. However, many of the larger sized ASGs we have observed have highly variable load. Significant cost savings could be made if only they scaled-in during periods of light usage. Many of the ASGs that adjust size by just 1 or 2 instances are over-provisioned too.

In many cases ASGs are misconfigured simply because the scaling policies have never been reviewed. Setting up good scaling policies when first creating the group is difficult because the data on past performance is not available. Reviewing and adjusting scaling policies later on is difficult because of a lack of tools to visualize long term-usage patterns.

Introducing the ASG Tuning Report
---------------------------------

The new [*Metricly ASG Tuning Report*](https://help.netuitive.com/Content/Reports/asg_tuning_report.htm) offers a new approach to meet the problems of visualizing and configuring auto scaling rules.

The report provides the tools needed for AWS customers to effectively monitor their overall ASG estate, identify over (and under) provisioned ASGs, trial 'what-if' configuration settings to see how different scaling strategies will affect projected utilization, and model potential cost savings.

**Visualize Past Performance**

[![Visualize Past Auto Scale Group Performance](https://www.metricly.com/wp-content/uploads/2016/08/Visualize-Past-Performance.png)](https://www.metricly.com/wp-content/uploads/2016/08/Visualize-Past-Performance.png)

-   Identify over/under provisioned ASGs
-   Visualize Regular load patterns
-   Understand load volatility over time
-   View overall ASG estate and EC2 instance hours
-   Find cost reduction opportunities

**Tune and optimize**

[![Tune and Optimize Auto Scale Groups](https://www.metricly.com/wp-content/uploads/2016/08/Tune-and-Optimize.png)](https://www.metricly.com/wp-content/uploads/2016/08/Tune-and-Optimize.png)

-   Optimize for regular or irregular load
-   Model for different target utilizations
-   Choose scale-in/scale-out rates according to load
-   Choose more aggressive or conservative scaling rules to balance utilization vs cost savings

The Metricly [ASG Tuning report](https://help.netuitive.com/Content/Reports/asg_tuning_report.htm) generates continually-adjusted recommendations for sizing the ASG. Recommended instance counts, based on your tuning strategies and historical ASG performance, can be combined with advanced policies to leverage real-time changes in utilization and other metrics. This allows you to generate [notifications](https://help.netuitive.com/Content/Misc/notifications.htm) or [webhooks](https://help.netuitive.com/Content/Misc/API/webhook_endpoint.htm) for automating workload-driven adjustments to the number of EC2s (up or down) in the ASG.

* * * * *

*Ready to see if you're over-provisioning your ASGs? Metricly offers a [21-day, no-obligation free trial.](https://www.metricly.com/signup)*
