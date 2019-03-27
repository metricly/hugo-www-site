---

date: "2014-11-13"
title: "AWS Cloudwatch™ vs. Collectd?"
description: "Today AWS users have a nice way to collect metrics from their infrastructure - but is Collectd better than CloudWatch™ for collecting AWS metrics?"
category: "DevOps"
url: "/aws-cloudwatch-vs-collectd/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

Collectd -- a metrics collection daemon!
---------------------------------------

Today AWS users have a nice way to collect metrics from their AWS infrastructure with CloudWatch.  Metricly currently leverages this data source via the CloudWatch API to pull in key metrics.  Unfortunately, CloudWatch is limited in several key areas -- metrics, consistency, cost, and frequency. (Note that we're referring to monitoring an EC2 versus other AWS components such as ELB, EBS, and RDS for which a more comprehensive set of metrics are available within CloudWatch.)

An easy and popular improvement lies in combining the open source tool Collectd with Metricly's analytics. Out-of-the-box, Collectd comes with "plug-ins" that enable users to collect performance metrics from the OS that resides inside the EC2 element. By editing a configuration file, users can select how often Collectd collects metrics, determine which plug-ins are enabled, and how to export the collected metrics (output plug-ins). Metricly is an IT analytics platform that leverages Behavior Learning technology to enable highly accurate alarming.

The benefits of Collectd over AWS CloudWatch show up in several areas of comparison:

-   CloudWatch supports a limited set of metrics for monitoring and EC2 (e.g. there are no metrics around memory), while Collectd supports not only several memory-related metrics but also a much more detailed view of the workload, performance, and status of an OS.

-   Cloudwatch runs on the "eventually consistent" principle -- meaning that not all metrics will be available consistently and thus you may miss important events.

-   While there is a free tier when using the AWS API to collect Cloudwatch metrics, it's easy to exceed the limit of free monthly API calls and be subject to rising costs.

-   CloudWatch provides options for metrics to be available every five minutes or one minute. Collectd gives you the ability to collect metrics in sub-minute cycles.

-   While the metrics available from CloudWatch are limited to what AWS decides to provide, the set of metrics available via Collectd can be extended by the end user.

|               | Collectd for OS                                            | CloudWatch for EC2                                   |
|---------------|------------------------------------------------------------|------------------------------------------------------|
| Metrics       | Dozens                                                     | Approximately 10                                     |
| Consistency   | All the time                                               | Eventually                                           |
| Cost          | Open source                                                | Pricing                                              |
| Frequency     | Every 10 seconds (default) or 60 seconds (best practice)   | Every 5 minutes on free tier, 1 minute for paid tier |
| Extensibility | Users can write and deploy plug-ins for additional metrics | No open source community for creating plug-ins       |

___
Collectd and Metricly...How does it work?
----------------------------------------

Collectd comes out-of-the-box with the http_write plugin.

Metricly's API is ready to receive metrics directly from the http_write plugin. To get your Collectd metrics into Metricly, all you need to do is add a few lines to your existing Collectd configuration file.

        Plugin write_http

        URL "https://api.uat.netuitive.com/ingest/collectd/{customer API key}"

        Format "JSON"

        /URL

        /Plugin

Collectd's simplicity combined with [Metricly's analytics](/) enables a much richer set of metrics at a higher frequency, at the same (or in some cases lower) cost.

CloudWatch™ is a trademark of Amazon Web Services.

* * * * *
*Want to see Metricly at work in your own environment? We offer a [21-day, no-obligation free trial.](/signup)*
