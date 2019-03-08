---
Author: "Bob Farzami"
date: "2015-06-24"
title: "Anomaly Detection with Dynamic Policies"
description: "Are your static thresholds creating false alarms while real problems fly under the radar? See what anomaly detection with dynamic policies can do for you!"
category: "DevOps"
url: "/reduce-false-alarms/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

Cloud environments are significantly more dynamic than their predecessors and the application of static thresholds to monitor and trigger alerts doesn't cut it. They result in a lot of alarm noise and your team spending time chasing false alarms.  Even worse, you may not see performance problems that are flying under the radar until they spike and cause system downtime.

To address this, Metricly has created **dynamic policies** for cloud monitoring and advanced anomaly detection. The combination of industry best practices in systems administration and behavior learning technology helps automate common monitoring tasks, reduce noise, and provide earlier notification of performance issues.

[![Dynamic Policies Chart](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/dynamic-policies-anomaly-detection.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/dynamic-policies-anomaly-detection.png)

Below we've answered common questions about Metricly's dynamic policies and behavior learning technology.

What is a dynamic policy?
-------------------------

A dynamic policy is a set of conditions that when collectively violated generate an event and possibly an alarm.  Instead of referencing singular, static requirements, each condition leverages real-time statistical analysis and behavior learning data.  This technology allows Metricly to learn and adapt to your unique environment over time and understand normal values for metrics throughout the day and night. Dynamic policies alert only when behaviors are anomalous to what is expected for that time frame.

What is behavior learning technology?
-------------------------------------

Metricly's Behavior Learning Engine analyzes system and automatically determines a range of acceptable performance metrics for a given point of time. This technology employs a patented blend of advanced analytics and statistical analysis.  This is how Metricly creates the green and purple contextual bands or **automatic** **thresholds** that visualize normal deviations of values for a particular time frame.

Why isn't statistical analysis enough?
--------------------------------------

Even with the most sophisticated technology, you will detect anomalies that are not actionable or require immediate attention. For example, some solutions allow you to manually configure and account for the impact of a scheduled maintenance window or load-balancing and clustering.  This alone is not enough to avoid false positives and alert noise.

Anomalies regularly occur in all types of systems.  These deviations (anomalies) do not always require operational attention but can generate a lot of noise.  However, if multiple metrics are deviating outside the learned behavior coupled with domain knowledge, then the resulting combination requires operational attention.  For example, we could be experiencing a performance issue if the percent CPU used is deviating outside the learned bands and the processor run queue is more than twice the number of processors.  By automatically layering on best practices to detection in our policies, Metricly is able to alert on a real anomaly instead of a false alarm.

Do I have to configure dynamic policies myself?
-----------------------------------------------

The short answer is: No.  Metricly has standard out-of-the-box dynamic policies that take advantage of proprietary self-learning correlation technology.

This core engine automatically discovers relationships between various metrics and detects anomalies. Dynamic policies then utilize this information for elements such as the Linux operating system, an AWS Elastic Load Balancer or a relational database to deliver actionable events.

With this approach to monitoring, you get the ultimate combination: anomaly detection and industry best practices.

* * * * *\
*Set up your own data sources and see how behavior learning technology starts processing information immediately. Metricly offers a [no-obligation, 21-day trial with full featured access.](/signup)*
