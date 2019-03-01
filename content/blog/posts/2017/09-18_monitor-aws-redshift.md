---
author: "Zachary Flower"
date: "2017-09-18"
title: "AWS Redshift Monitoring"
description: "Redshift is a scalable, managed data storage and analytics service available from the AWS cloud."
category: "DevOps"
url: "/monitor-aws-redshift/"
layout: "single"
---

When you truly have *a lot* of data, a managed data storage service is almost a necessity. Amazon Redshift offers such a service. Redshift is a scalable, managed data storage and analytics service available from the AWS cloud.

Redshift can support workloads ranging from a few gigabytes of data to more than a petabyte, and is designed to provide an easy path to data analytics for businesses seeking to make sense of all of the data they generate.

While it is relatively easy to set up, using Redshift effectively and cost-efficiently requires you to use an [AWS monitoring platform like Metricly](https://www.metricly.com/product). I explain how in this article.

What is Amazon Redshift?
------------------------

Amazon Redshift is a distributed data warehouse created and maintained by Amazon, but beyond simple storage, data within can be queried against using SQL, and used for analysis, trend creation, and reporting.

Through the use of standard ODBC or JDBC protocols, accessing data is as straightforward as any other supported data store. This allows for commonly used business applications to access massive amounts of data without any additional overhead.

Here's a quick chart, to give a better idea of how Redshift works under the hood:

![](https://www.metricly.com/wp-content/uploads/2017/09/Redshift-Data-Distribution.png)\
*Source: docs.aws.amazon.com*

As you can see, stored data is distributed across multiple nodes within a data warehouse cluster. In order to facilitate connections, a leader node provides a consistent endpoint for database applications to communicate with. This allows your data store to increase drastically in size without any visible change on the client side.

Monitoring Redshift with Metricly
---------------------------------

Despite the standards-compliant communication protocol, all of the complexity behind the curtain generates a lot of data. While not every data point is valuable on its own, comparing and contrasting the metrics as a whole can help identify bottlenecks and trends in order to better manage the health of your cluster.

While Amazon does have its own monitoring tools, [they have a tendency to be inflexible](https://www.metricly.com/aws-cloudwatch-vs-collectd), and not necessarily provide the information you *want* or *need*. This is where Metricly comes into play. Amazon Redshift has a set of objects in its operation that is part of the Metricly monitoring routine. If fragmented or global monitoring is necessary, because Redshift is inherently a cluster, it is possible to make several monitoring configurations to handle things more appropriately. This allows us to keep track of everything from CPU, latency, transfer rate, to access ports, and more.

Before we get into the data analysis, though, let's first take a look at how to actually start collecting metrics in Metricly. To begin, first pull up the **Integrations** page within your Metricly dashboard and select the **Amazon Web Services** integration.

![Metricly Integrations Page AWS](https://www.metricly.com/wp-content/uploads/2017/09/Metricly-Integrations-Page-AWS.png)\
*Metricly Integrations Page*

Next, we need to tell Metricly which AWS services we want to collect data from. But before we can do this, we first must give Metricly access to our AWS account. At a high level, all that is required is a read-only IAM role for Metricly to use to gather data with. However, if this is a relatively new process to you, then I highly recommend reading [Metricly's own documentation on AWS authorization](https://help.app.netuitive.com/Content/Integrations/aws.htm). Once we've given Metricly access to AWS, we need to tell it to collect data from Redshift. This can be set up by checking the "Redshift" box underneath the Advanced section of the AWS Integration Configuration page:

![Metricly AWS Integration Configuration](https://www.metricly.com/wp-content/uploads/2017/09/Metricly-AWS-Integration-Configuration.png)\
*AWS Integration Configuration*

With Redshift and Metricly firmly coupled, we can now start to monitor our environment and clusters. After a few minutes, we should start seeing data trickle into our Metricly account, and once Metricly starts receiving data, a pre-generated dashboard will appear on your Metricly Dashboards page.

![Metricly Preconfigured Redshift Dashboard](https://www.metricly.com/wp-content/uploads/2017/09/Metricly-Preconfigured-Redshift-Dashboard-1024x296.png)\
M*etricly Dashboards*

While you can always create your own custom dashboard within Metricly, the pre-generated dashboards are an excellent way to kick-start your Redshift monitoring with minimal configuration and overhead. This allows you to quickly set up alerting policies and keep an eye on the health of your cluster in a matter of minutes.

*![Metricly Preconfigured Redshift Dashboard Closeup](https://www.metricly.com/wp-content/uploads/2017/09/Metricly-Preconfigured-Redshift-Dashboard-2.png)\
Metricly Redshift Dashboard*

At a high level, the AWS Redshift dashboard shows the basic health of your cluster: CPU usage, database connection, system health, maintenance status, network sending and receiving, disk space, IOPS reading and writing, latency, etc. To better understand the metrics generated by Redshift, however, pull up the **Metrics** page within your Metricly dashboard and select **Redshift** underneath the Amazon Web Services section:

*![Metricly Redshift Metrics](https://www.metricly.com/wp-content/uploads/2017/09/Metricly-Redshift-Metrics-1024x420.png)\
Metricly Redshift Metrics*

The Metrics page lets us [view overviews for each individual metric](https://www.metricly.com/feature-highlight-metric-explorer) gathered by Metricly. This allows us to see a more detailed view of all of the data available to us, and is a great jumping-off point for [creating your own dashboards](https://www.metricly.com/devops-dashboard-best-practices). From here, we can choose which metric unit we want to monitor, with a number of units of measurement, such as percentage, metric scale of computing, mileage, weight, and dollar, among others, which makes monitoring much more effective in cases where we want to monitor cost or electric consumption.

*![Metricly allows a wide variety of metric units such as percentage, bytes/sec, watt-hour, mileage, weight, dollar, etc.](https://www.metricly.com/wp-content/uploads/2017/09/Metricly-Metric-Units.png)\
Metricly Metric Units*

Conclusion
----------

Redshift is an awesome distributed data store hidden behind a simple single point of entry, but with that obfuscation comes a level of complexity that can make monitoring all the more important. While using Redshift isn't very complicated, working with Big Data calls for an [appropriate monitoring platform](https://www.metricly.com/evaluate-monitoring-strategy) in order to stay on top of the health of your infrastructure.

Metricly is an excellent solution for this type of monitoring, as it can work with not only Redshift, but the other services it can rely on as well. This allows for an awesome, centralized repository of infrastructure metrics and analytics, which lets you to focus on the things that matter---such as building a scalable, sustainable business.
