---
author: "Christina DiSomma"
date: "2017-09-22"
title: "3 Ways to Reduce Alert Noise in Monitoring"
description: "Improving signal-to-noise ratio is likely to always be a work in progress, but here are three monitoring best practices to reduce alert noise."
category: "Cloud Monitoring"
url: "/3-ways-reduce-alert-noise/"
layout: "single"
---



In our last blog, we explored the different types of alerts, and the impact they have on signal-to-noise ratio. Improving your signal-to-noise ratio is likely to always be a work in progress, but here are three monitoring best practices you can use to reduce alert noise and ensure important alarms rise above the rest.

Generate One Alert for One System Versus One Metric
---------------------------------------------------

Traditional monitoring tools set a [static threshold](https://help.netuitive.com/Content/Performance/Analytics/static_thresholds.htm) for each metric. Every time that threshold is breached, you received one alert. This can add up to having too many alerts.

A better approach is to generate one alert for a group of metrics associated with a system or application -- like a host or a database.

With traditional alerting, if a particular host is running out of memory and has unusually high I/O and a high CPU, you'll receive three alerts -- one for each metric. Monitoring with [multi-criteria alerting](https://www.metricly.com/understanding-alert-noise-monitoring), by contrast, will generate one alert describing the unusual values for all three metrics.. Receiving one alert instead of three by grouping them by system or application is more effective and more efficient.

This concept is at the core of Netuitive's approach to alert generation -- by alerting on a per-system basis, you get all the same information, but alarm noise is reduced and there's additional context to help you troubleshoot.

Use Analytics to Learn Normal Behavior
--------------------------------------

Machine learning techniques can be applied to your monitoring data to offer you an idea of how your environment normally performs, making it easier to separate true alerts from false ones. Netuitive's [advanced analytics](https://www.metricly.com/adding-analytics-to-devops-model) are built on more of a decade of experience in IT statistical analysis and monitoring, with proven success at improving your metrics and signal-to-noise ratio. Our [computed metrics](https://help.netuitive.com/Content/Metrics/computed_metrics.htm) combine two or more metrics (like memory usage, CPU utilization, or latency) in functions that provide valuable data on the utilization and performance of your elements. An example of a computed metric is IOPS Utilization, which compares the current number of IOPS a disk is performing to the total IOPS capacity, yielding a percent representation of an EBS volume's utilization.

[![Reduce Alert Noise: EBS IOPS 5](https://www.metricly.com/wp-content/uploads/2016/09/EBS05IOPS.png)](https://www.metricly.com/wp-content/uploads/2016/09/EBS05IOPS.png)

For example, in the image above, we're running 1050 IOPS against a volume whose capacity is 3000 IOPS, so the IOPS Utilization for this instance is 35%. IOPS Utilization values help you identify over- and under-utilized EBS volumes, thereby identifying either cost-saving opportunities in over-utilized volumes and preventing future performance problems in under-provisioned volumes.

Improve Alerting with Multi-Criteria Alerting Policies
------------------------------------------------------

The final step to improving your signal-to-noise ratio is utilizing multi-criteria alerting. In short, by increasing the number of specific conditions you set on an alert rule, the less likely it is to trigger.

For example, you might want to set an alerting policy for CPU utilization to tell you any time utilization falls outside of the norm. This seems like a great idea, until you're swarmed with alarms every time you scale your environment (because utilization for some elements is above or below previous levels!)

[![Reduce Alert Noise: Multi-Criteria Policy](https://www.metricly.com/wp-content/uploads/2016/09/Policy-1024x560.png)](https://www.metricly.com/wp-content/uploads/2016/09/Policy.png)

However, if you set a multi-criteria alerting policy to only trigger you *IF* CPU is outside the norm *AND* total CPU is above 50%, you'll receive significantly fewer false alarms while maintaining those alerts that could indicate a significant issue. If you wanted to make sure that the alert is definitely actionable, you could add a third condition that looks for normalized average load (number of processes waiting to run divided by the number of CPUs) to be more than 2. If all three conditions are breached then the alert is most definitely actionable. This type of multi-criteria alerting, combined with advanced analytics, is key to improving your signal-to-noise ratio and reducing alert noise.

Success in monitoring relies heavily on adding context and conditions to existing data, and improving signal-to-noise ratio is no exception.

* * * * *

*Ready to be free of alert noise? Check out Netuitive's [21-day, no-obligation free trial](https://www.metricly.com/signup).*
