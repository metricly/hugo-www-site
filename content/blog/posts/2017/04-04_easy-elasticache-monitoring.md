---
author: "Mike Mackrory"
date: "2017-04-04"
title: "Amazon ElastiCache Monitoring Made Easy"
description: "Achieve the most from your investment in the AWS ecosystem with Elasticache monitoring based on industry best practices for policies and dashboards."
category: "Cloud Monitoring"
url: "/easy-elasticache-monitoring/"
layout: "single"
---
Amazon ElastiCache was first released as a service of Amazon Web Services (AWS) in August of 2011. The service provides users with a managed in-memory data store that can provide applications with a highly performant data backend for their services. Currently provided using either Memcached or Redis, the service has been shown to help organizations reduce their [![Elasticache Monitoring: AWS Elasticache](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ElasticacheIcon.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ElasticacheIcon.png)dependence on slower disk-based datastores, and can be leveraged during periods of high traffic to reduce load.

The configuration of ElastiCache clusters on AWS, and how to monitor their default functionality, has been written about a great deal. This article is going to go beyond that and explore the work the engineers and researchers at Metricly have been doing. We'll look at Metricly's Quick Start Package for AWS ElastiCache, and explore their configurations for dashboards, reports and [alert policies](/reduce-alert-multi-criteria-policies). These configurations have been designed to make it easier for engineers and operations support teams to implement industry best practices in Elasticache monitoring, and achieve the most from their organizations' investments in the Amazon ecosystem.

What to Monitor on Amazon ElastiCache
-------------------------------------

We all know that monitoring is essential to a well-maintained environment, and that tools such as [those offered by Metricly](/product) make that task significantly easier. Before we look at Metricly in-depth and examine exactly how easy it makes setting up a world class monitoring solution, let's start at ground level and consider some of the Elasticache monitoring metrics we need to be concerned with, and why.

-   CPU Utilization
    -   At this most basic level, this is a measure of how much of the available processing power of the host machine is being used to support the datastore. The optimal level for this depends on whether you've implemented your ElastiCache using Memcache or Redis, and their distinctly different implementations of thread utilization.
-   SwapUsage
    -   This metric is a reflection of the amount of swap space being used. Swap space is used when available memory on the machine has been fully utilized and is significantly slower than dedicated memory.
-   Evictions
    -   Both implementations used to back ElastiCache implement a form of cache eviction to remove old data and free up cache space as the limits of datastore memory are reached. A high rate of evictions is a sign that the maximum limit on memory for the cluster has been reached.
-   CurrConnections
    -   CurrConnections is a count of the number of client connections to the data store and does not include connections between the different nodes within either the Redis or Memcache clusters. Ideally, this number should remain constant, and an increasing number may indicate a potential problem.

Determining Baselines and Limits in Elasticache Monitoring
----------------------------------------------------------

A possible approach to determine the baseline numbers and limits for your installation is to set up a cluster, establish the necessary setup to monitor the cluster, and then either wait for traffic or load test your system to see how it performs. Most monitoring tools provide integrations that allow you to connect directly into AWS, and if you're lucky, they may even provide a basic dashboard with the metrics listed above.

You could further enhance this with research into what performance could be expected from your configuration, and perhaps even consult with those who have successfully navigated these waters themselves.

Or you could skip all of that and take advantage of industry best practices, and leverage the research of experts in this field.

Metricly Community Packages
----------------------------

Now that we've spent some time delving into the realm of ElastiCache monitoring, and how to better monitor your clusters, let's look at the Metricly Community Packages. Available for view on the [Metricly GitHub](https://github.com/netuitive-community-packages), these packages each consist of a collection of configurations, policies, dashboards and reports based on services available to be integrated into their monitoring system. Packages exist for Linux, DynamoDB, ElasticSearch, and complimentary to this discussion, ElastiCache!

When you first define a Metricly data source to bring your metrics into your account, your metrics collection isn't the only thing that's integrated. Concurrent to the ingestion of data, Metricly also activates a collection of features and configuration settings. The net result is that you get a head start on organizing your data, and putting a comprehensive Elasticache monitoring [plan](/evaluate-monitoring-strategy) in place.

Specifically, there are three configurations which Metricly includes:

-   Metric Configurations
-   Policies
-   Dashboards

Exploring the ElastiCache Community Package
-------------------------------------------

The package containing the metric configurations, policies and pre-defined dashboards for ElastiCache monitoring is located on the Metricly Github. A couple of things you may notice are a well-documented history of updates and improvements. At time of writing, the last commit to the repository had been within a few days. You can find more information about the packages, including an in-depth description of what is included (and why) in this [article](/aws-monitoring-best-practices/), but I'll provide a high-level overview below.

What is a Metric Configuration, and Why Do I Need It?
-----------------------------------------------------

![Elasticache: Metric Configuration](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/MetricConfiguration.png)

When you have a single cluster, or a whole army of ElastiCache clusters operating in your AWS account, each will be sending a whole slew of metrics to CloudWatch. The problem with data in CloudWatch isn't a lack of data, but rather knowing how to correlate, aggregate and transform the data into meaningful information which can be reported on and used to set up thresholds and limits for alerting.

The metric configurations developed by the engineers at Metricly describe these metrics through the use of JSON files, and are used to make the metrics available in a meaningful way, as well as define which Elasticache monitoring metrics may be correlated with each other to provide better insights into the performance of your clusters.

Policy-driven Events
--------------------

An event in the Metricly system is a direct response to environmental changes which violate any of the policies that have been enabled for the account. Policies are a set of rules which are defined to identify desired behavior, and indicate when conditions within a service or application fall outside those predetermined constraints.

A policy consists of four distinct parts:

-   Scope
-   Conditions
-   Duration
-   Notifications

Let's consider how each of these would apply to a policy, such as CPU utilization on an ElastiCache cluster supported by Memcached.

The **scope** defines the purview of the policy. The scope can be inclusive, or exclusive, or a combination of the two. It can also be used to filter the monitored resources by type and by tag. For our policy, the scope would define the node type as Memcached, and if we have a specific tag with our key production clusters, we could include that as well.

**Conditions** specify the criteria which define the limits or restrictions of the policy. In the case of CPU monitoring policies on ElasticCache nodes, this might be, for instance, the condition where the utilization of the CPU exceeds 90% usage, where the node types are defined as Memcached. It may also leverage Metricly's [behavior learning technology](/3-ways-reduce-alert-noise) to detect a deviation from an expected range of values as established by the baseline band of normalcy (derived from historic behavior for a given day and time) of the contextual band of normalcy (derived from correlating time series data).

**Duration** defines a period during which the policy conditions will need to be violated. It might be possible for CPU utilization to spike above 90% for a few seconds given a combination of events, but if it settles back down to within the normal range, we need to respond to a [PagerDuty alert](/metricly-pagerduty-monitoring-alarms/), only to find out everything is fine. Perhaps for our policy, we could set this to 30 minutes, thus ensuring that a potentially dangerous condition exists before alerts are triggered.

**Notifications** are the reason why we have policies. We want to be notified when things go awry. A violated policy will trigger an event, and an event can be tied to a specific notification type. Metricly supports a variety of integrations with third-party notifications, as evidenced below.

Removing Complexity Through Pre-configured Dashboards
-----------------------------------------------------

The configurations take the complexity away from importing your data, and the provided policies take away much of the guesswork when you need to decide how and when to be notified about undesirable conditions with your cluster. The final part is being able to package your information into a clean and easily readable dashboard. Fortunately, the last part of the provided packages takes care of this for you. Metricly provides a summary Elasticache monitoring dashboard for your clusters, and two additional dashboards which provide more detail at the cluster level---and then, at the node level for both Memcached and Redis, depending on which you've elected to implement.

Saving the Best for Last
------------------------

We've talked about all the amazing benefits provided by the community package available for ElastiCache monitoring, and I mentioned it above, but it bears repeating as we conclude this discussion. The hard work has been done, and the calculations, configurations, and dashboards are all there, ready for you to use. You only need to [integrate your metrics](https://docs.metricly.com/integrations/) into Metricly, and they'll be ready and waiting for you as soon as the data starts to flow.
