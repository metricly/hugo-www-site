---
author: "Christina DiSomma"
date: "2016-11-01"
title: "The Benefits of Computed Metrics in Monitoring"
description: "In this blog, we’ll review some of Metricly’s computed metrics and discuss how these unique metrics improve DevOps monitoring."
category: "Cloud Monitoring"
url: "/computed-monitoring-metrics/"
layout: "single"
---
Metricly divides metrics for each monitored element into two categories: collected metrics and computed metrics. In this blog, we'll review some of [Metricly's](https://www.metricly.com/) unique computed metrics and discuss the value of computed metrics in regards to monitoring.

What are collected monitoring metrics?
--------------------------------------

Collected metrics are the metrics being provided by your infrastructure, middleware, and applications. For example, from Linux servers you might collect metrics such as memory usage, disk utilization, or I/O. These metrics are the backbone of monitoring -- the basic layer of insight into what's going on in your environment.

What are computed monitoring metrics?
-------------------------------------

Computed metrics are typically calculated using multiple collected metrics from a given datasource.  Some computed metrics are just simple conversions (for example, converting a count into a percentage), but some are complex calculations intended to provide much deeper insight into an element's performance. In order to differentiate these in the Metricly platform, all computed metrics have names beginning with *netuitive*.

What are some examples of computed metrics?
-------------------------------------------

**EC2 Bytes In per Second and EC2 Bytes Out per Second**

AWS offers raw data on bytes in and bytes out, but the real value in these metrics is knowing the rate per second at which bytes are being received and written. To meet that need, Metricly created two metrics, which capture the raw data provided by AWS and compute it against a given time period (in this case, seconds.)

The first metric, *netuitive.aws.ec2.bytesinpersec*, displays the number of network bytes received by a given EC2 instance in one second. The second, *netuitive.aws.ec2.bytesoutpersec*, displays the number of network bytes written by an EC2 instance in one second. Viewed together, these metrics offer you a full view of your EC2's network performance, allowing you to pinpoint issues by time of day or specific instance and optimize where necessary.

**EBS IOPS Utilization**

This metric (*netuitive.aws.ebs.iopsutilization*) is extremely useful for determining over- and under-provisioned EBS volumes. IOPS utilization is a comparison between the current number of IOPS being performed by the disk and the total IOPS capacity of the volume.

For example, let's say you have an EBS volume for which Amazon is providing 600 IOPS capacity. Metricly will add the read ops and write ops metric values to obtain the current total IOPS, and divide by 600 (the given capacity). In this scenario then, a volume with a current IOPS value of 400 and an IOPS capacity of 600 would have an IOPS utilization of 66%.

[![Computed Metrics: IOPS Utilization](https://www.metricly.com/wp-content/uploads/2017/07/IOPSUtilizationPSD.png)](https://www.metricly.com/wp-content/uploads/2017/07/IOPSUtilizationPSD.png)

Dale V. Georg, our Principal Data Scientist, [wrote a wonderfully in-depth piece](https://www.metricly.com/iops-calculator-for-ebs-volumes) on EBS IOPS utilization and its usefulness in AWS monitoring. [Read it here](https://www.metricly.com/iops-calculator-for-ebs-volumes) for more detail.

**Linux Load Average Normalized**

Computed metrics aren't just for AWS instances -- Metricly creates them for other aspects of your environment as well. Our computed metrics for Linux include the normalized load average (*netuitive.linux.loadavg.05.normalized*), which divides the average server load (a measure of run queue size) by the number of CPUs.

Normalized load is important because different servers can have drastically different numbers of CPUs, making the acceptable load for each server very different. This poses a major problem for alerting policies -- you either need to set a different one for each server or be ready to accept alert noise and/or monitoring risk. Normalized load average takes into account the number of CPUS, making meaningful policies much easier to set.

The load can be averaged over one minute, five minutes, or fifteen minutes, depending upon your use case (the above metric is the five minute average.) Consider a scenario in which you have 32CPUs on a Linux server. A good rule of thumb is that your normalized load average should be no greater than 2 per CPU.  If your load average over 5 minutes in this example was 30, you would have a normalized load average of just under 1, well within the acceptable .

[![normalizedloadlinux](https://www.metricly.com/wp-content/uploads/2017/07/NormalizedLoadLinux.png)](https://www.metricly.com/wp-content/uploads/2017/07/NormalizedLoadLinux.png)

The Value of Computed Metrics
-----------------------------

Computed metrics save you the time it takes to manually normalize load average or figure out whether your IOPS levels are worrisome, but they can have a much broader impact on your monitoring.

Here are 2 examples of where computed metrics bring additional monitoring value:

**AWS Utilization and Cost Reporting**

Computed metrics are extremely useful for figuring out which parts of your environment are over- and under-provisioned. For example, Metricly creates a percent disk space used metric for RDS volumes that compares the amount of disk space used with the total amount available -- this results in a usage percentage. Metricly's utilization reports then provide the min,  5^th^ percentile, max, 95^th^ percentile, and average values for this metric over  a given time period.

If you combine AWS EC2 utilization data with AWS EC2 cost data, you can map out a cost vs. utilization scatter plot like this:

[![Computed Metrics: AWS Cost vs. Utilization](https://www.metricly.com/wp-content/uploads/2017/07/costvsutilization-1024x691.png)](https://www.metricly.com/wp-content/uploads/2017/07/costvsutilization.png)

As you can see, most of the high-cost EC2s also have high utilization metrics (which is likely good -- you're getting a lot of bang for your buck!) However, there is one all the way to the left which has lower-than-average utilization while spending about the same as the others on the graph. That instance could be an opportunity to save on your AWS without sacrificing performance or capacity.

**Accurate Alerting Policies**

Computed metrics also add immeasurable value to Metricly monitoring policies. We've written previously on [multi-criteria alerting policies](https://www.metricly.com/reduce-alert-multi-criteria-policies) and the impact they have on reducing alert noise; the addition of computed metrics to those policies makes them even more precise.

For example, Metricly creates a computed metric for the (*netuitive.aws.ebs.queuelengthdifferential*). Instead of looking simply at disk queue length, this computed metric calculates the difference between actual queue length and the ideal queue length for the volume based on Amazon best practices for EBS volumes (read about this in greater detail in [this blog](https://www.metricly.com/detecting-performance-issues-on-ebs-volumes).)

Here is an example of a policy that uses this metric:

[![Computed Metrics: EBS Queue Length Differential Policy](https://www.metricly.com/wp-content/uploads/2017/07/EBSPOlicy-1024x507.png)](https://www.metricly.com/wp-content/uploads/2017/07/EBSPOlicy.png)

As you can see, this policy looks for above-normal values for the queue length differential, as well as above-normal values for average EBS latency (another computed metric!) Using standard monitoring, this type of monitoring policy would be impossible.

You *could* break down the various aspects of each of these computed metrics and set an alarm for individual values above a certain threshold, but to do so would be time-consuming and likely incredibly noisy. Additionally, it would be a struggle to determine when all of those alerts are firing in conjunction with one another, and when only one or two are exceeding set levels. With Metricly, though, it's all wrapped up in one neat package -- saving your time and sanity!

Final Notes
-----------

Computed metrics are the backbone of what makes quality, functional monitoring by helping to transform raw data into useful and actionable data points. However, they are often a key missing ingredient in comprehensive monitoring solutions in many operational environments.  Perhaps you're computing them manually or relying on static thresholds on multiple metrics to try and get the same results?

If you're ready to gain further insights into your environment while reducing alarm noise, there's just no substitute. You can see these computed metrics, and others, in action with your own environmental data using Metricly. We offer a [21-day free trial](https://www.metricly.com/signup) here.
