---

date: "2016-06-14"
title: "AWS Monitoring Best Practices Using Pre-Configured Dashboards"
description: "AWS monitoring is time-consuming, and it only gets worse as you scale up your cloud environment. Luckily, we have these best practices to make life easier."
category: "Cloud Monitoring"
url: "/aws-monitoring-best-practices/"
layout: "single"
---

AWS monitoring is time-consuming, and it only gets worse as you scale up your cloud environment. Simply configuring the monitoring for each element or instance is complicated, to say nothing of writing policies and setting thresholds. Discovering best practices and figuring out what works best for your environment takes research and a certain amount of trial and error. Having a DevOps model ourselves, we recognized this problem early -- so we put our certified research team to work designing pre-configured monitoring packages, so you don't have to! Here's how these packages work.

When you first create a [Metricly datasource](https://www.metricly.com) to bring in metrics for Linux, AWS monitoring, or one of many other supported systems, a number of other features and configuration settings are activated as well. Brought in by pre-configured monitoring packages, these additional components create best practice monitoring dashboards and suggested alerting policies that ensure that you can start getting value from Metricly right away.

*If you want to see these Linux or AWS monitoring packages in action, [try our free demo](https://www.metricly.com/signup).*

Inside Our AWS Monitoring and Other Packages
--------------------------------------------

Pre-configured monitoring packages are maintained in repositories in the [Metricly Community Packages GitHub organization](https://github.com/netuitive-community-packages). Each package consists of the following components:

-   Metric Configurations
-   Policies
-   Dashboards

Let's take a look at each of these in turn.

Metric Configurations

Metric configurations define the behavior of the metrics being collected and how [Metricly's analytics](https://www.metricly.com/support/metrics/analytics) should be applied. They also define the formulas for any computed metrics; for example, an error rate might be computed from the number of calls and an error count.

Some of the key properties that can be defined for each metric are:

-   **Baselined** -- whether or not historical baselines are computed. This applies machine learning to detect deviation from historic behavior.
-   **Correlated** -- whether or not the metric is correlated with other metrics (for example: CPU correlating with network activity). This applies machine learning to discover correlations automatically and detect deviations from expected behavior as defined by other inter-dependent metrics.
-   **Valid minimum and maximum values** -- for example: 0-100 for a percentage.
-   **Units** -- for example: percent, bytes, pages per second, etc.
-   **Statistic** -- how the metric should be aggregated (sum, average, min, max, etc.);
-   **Sparse Data Strategy** -- value to use when the metric is missing data (none, zero, last, etc.)
-   **Tags** -- any tags that the metric may have (for example: the utilization tag, which can be used to mark a metric as representing some form of resource utilization such as CPU, memory, etc.)

In the Metricly UI, when you click on a metric name, you get a pop-up showing meta-data details about the metric, including most of the information provided by the configurations.

[![Collected Metric Popup](https://www.metricly.com/wp-content/uploads/2016/06/Collected-Metric-Popup.png)](https://www.metricly.com/wp-content/uploads/2016/06/Collected-Metric-Popup.png)

Policies

[Policies](https://www.metricly.com/support/events/policies) define the criteria by which Metricly will decide to generate an event. Each Metricly package comes with multiple pre-defined policies based on industry best practices, designed specifically to detect meaningful events from the metrics in that package. The policies look for a combination of deviations and best practices that together identify a particular type of performance problem.

For example, the Linux package comes with the following policies:

-   CPU Threshold Exceeded
-   Elevated System CPU
-   Elevated User CPU
-   Heavy CPU Load
-   Heavy Disk Load
-   Heavy Disk Load with Slow Performance
-   Memory Utilization Exceeded

Dashboards

The final component of a package is a set of one or more dashboards. These dashboards present you with an overall summary view of a set of elements in your environment. For example, when you activate a datasource for AWS monitoring, one of the several pre-configured dashboards is the EC2 Summary, which shows how many EC2s are in the environment, what types they are, which ones have the highest CPU utilization, and which have the highest network activity.

[![EC2 Summary Dashboard](https://www.metricly.com/wp-content/uploads/2016/06/EC2-Summary-Dashboard-1024x471.png)](https://www.metricly.com/wp-content/uploads/2016/06/EC2-Summary-Dashboard.png)

Our monitoring packages also contain a special type of dashboard, the "[element detail summary](https://www.metricly.com/support/inventory#element-detail-panel)." These do not show up under the "Dashboards" menu. Rather, when you select an element from your inventory, you can choose to view "Element Details"; this will bring up a dashboard like the one below, showing a summary of the particular element you have selected. This summary will include key performance metrics, tags, attributes, and any recent events associated with the element.

[![Linux Server Element Detail Policy](https://www.metricly.com/wp-content/uploads/2016/06/Linux-Server-Element-Detail-Policy-1024x481.jpg)](https://www.metricly.com/wp-content/uploads/2016/06/Linux-Server-Element-Detail-Policy.jpg)

Easy Monitoring Setup with Packages
-----------------------------------

You don't have to do anything special to install the Metricly packages. The first time you create a datasource, all packages associated with that datasource will automatically be provisioned. This means that you'll have a rich set of metric definitions, default policies for common scenarios of interest, and useful dashboards right from the start. And as new versions of the packages are released, they will be provisioned to your account, ensuring that you always have the latest and greatest.

* * * * *

Want to see these packages in action, within your own environment? Metricly offers a [no-obligation free trial](https://www.metricly.com/signup) for 21 days.
