---
date: "2017-11-06"
title: "October 2017 Release Highlights"
description: "Metricly rolled out several new features in October, and we are incredibly excited to share them with you."
category: "Product Updates"
url: "/october-2017-release-highlights/"
layout: "single"
---

October we released several larger features and capabilities to help [take your monitoring to the next level](https://www.metricly.com/evaluate-monitoring-strategy)! Not yet setup with Metricly? [Start a free 21-day trial](https://www.metricly.com/signup) to see all the latest features in action!

Backfill historical data on tenant creation
-------------------------------------------

With the new backfill feature, Metricly can load the last four hours of AWS CloudWatch data when a new tenant account is created. So users can now see their AWS data in preset dashboards and metrics page within minutes after creating a new account. But there are several other cool advantages that we get by backfilling the data such as identifying recent performance problems in your environment based on our [default alerting policies](https://www.metricly.com/support/events/policies/default-policies) which trigger during the backfill process. The other added benefit of processing the last four hours of data is a head-start for Metricly's behavior learning engine. This feature set is the beginning of some exciting architectural changes that will support new concepts such simulating alerts based on historic data. Alert simulation is the ability to set up a policy, then play back the historic data through that policy to conduct what-if analysis before enabling that policy.

![Backfill Data](https://www.metricly.com/wp-content/uploads/2017/11/timeSeriesImage-1024x503.png)

Backfill Time Series Image

New aggregation method on dashboards
------------------------------------

Users can now aggregate multiple metric into a single time series metric on the dashboards. For example, a user can pick all the CPU metrics across a cluster of servers and see the average value. Or aggregating read-right latency across a group of volumes and aggregating them to see the maximum value across all disks. This new feature can be found on the multiple metric dashboard widget. Just select a group of elements, pick a metric, and select the aggregation type. The preview pain with show the user in real time the changes. Below is a great example of selecting the CPU utilization across a cluster of 91 EC2 servers (left side graph) and then seeing the overall average CPU utilization across all 91 servers (right side graph).

![aggregation method on dashboards](https://www.metricly.com/wp-content/uploads/2017/10/aggWidgetsFull-1024x503.png)

aggregation method on dashboards

Updated help system
-------------------

The help system has been moved to our corporate site to bring together more content in a single location. As part of the project we simplified the taxonomy of the content, updated the search engine, and streamlined some of the sections. The goal is to make it even easier to find the appropriate help pages. Also the help system is still dynamically linked in the product, so users can navigate right from the product pages to the relevant help page in context. Over the next few months Metricly will publish more content, examples, and blogs to help our users become more self-sufficient with our product. We are always looking for feedback, so please open a support ticket with your suggestions and ideas.

![New Help Site](https://www.metricly.com/wp-content/uploads/2017/11/helpPage-1024x645.png)

New Help Site
