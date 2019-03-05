---

date: "2015-07-29"
title: "The Power of Computed Metrics"
description: "A computed metric is derived via streaming calculations performed on collections of other pre-existing data. Here are some Netuitive computed metrics."
category: "DevOps"
url: "/the-power-of-computed-metrics/"
layout: "single"
---


A computed metric is a value derived via streaming calculations performed on collections of other pre-existing data. By creating new metrics from existing metrics, we can learn more about the relationships between them. Computed metrics can be used for simply converting units of measure, such as converting a count to a percentage, or for more complex calculations that implement sophisticated models.

Netuitive's computed metrics are powerful tools that allow users to go beyond visualizing raw collected data. Raw data observations are transformed into more useful expressions of the changing state of the environment. When available, computed metrics can be visualized on dashboards and are fed into the full range of Netuitive analytics. The results of the analytics can be used in Netuitive policies to detect anomalous behaviors and alarm on relevant system events.

Here are some examples of Netuitive computed metrics:

Queue Length Differential

Monitoring queue length is critical for ensuring high disk performance. However, knowing the length of the queue is, by itself, insufficient. The queue length differential computed metric is based upon best practice recommendations from AWS engineers. It represents the difference between the actual queue length and the optimal queue length based on current IOPS. By finding deviations early, teams can quickly identify when disks are becoming saturated, avoid false alarms, and address issues before a possible system outage.

HTTP Error Rate

A common use case for computed metrics is transforming aggregated counts into percentages or rates. Netuitive can take a captured count of HTTP errors and compute the error rate as a percentage of the total requests. A raw count of errors does not necessarily give an accurate picture. For example, if one observes 200 HTTP errors, it makes a huge difference if the total number of requests were 201 or 2 million!

IOPS Utilization

For monitoring disk volume performance, Netuitive's IOPS Utilization computed metric expresses the actual observed operations per second against the volume's IOPS capacity. This enables users to define policies that issue events when utilization is abnormal. It also enables reports that help identify over- and under-utilized instances or instances that have highly unpredictable workload. For Amazon customers, this metric can be combined with AWS pricing data to help identify cost savings.

* * * * *\
*Want to see computed metrics at work in your own environment? We offer a 21-day, no-obligation [free trial of Netuitive.](/signup)*
