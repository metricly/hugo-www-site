---
author: "Christina DiSomma"
date: "2016-09-12"
title: "How to Reduce Alert Noise with Multi-Criteria Policies"
description: "Metricly's engineers have all suffered from alert fatigue – which is why our multi-condition alerting is so important! Read on:"
category: "Cloud Monitoring"
url: "/reduce-alert-multi-criteria-policies/"
layout: "single"
---


As DevOps and IT Ops teams well know, most monitoring systems send alerts -- a LOT of alerts. So many, in fact, that alarm noise and alert fatigue are routinely listed as one of the key problems facing the industry. Our own engineering team is full of people who have suffered from too much alarm noise -- which is why they consider our multi-criteria alerting policies so important! Read on to see how these policies improve accuracy and reduce alarm noise.

What is multi-criteria alerting?
--------------------------------

In Metricly, multi-criteria alerting policies contain sets of conditions that generate a single alert when the conditions are collectively breached. One policy consists of either several conditions applied to the same metric, or of multiple individual metrics.

For instance, Metricly has a default policy to alert on elevated browser response time. This policy applies two conditions to a single metric, *netuitive.rum.totalresponsetime*. The two conditions are that the metric should not have an upper deviation from its baseline band of normalcy (defined as learned behavior based on historic values) or an upper deviation from its contextual band of normalcy (defined as learned behavior based multi-metric statistical analysis). These concepts are expanded upon further in this blog.

[![Multi-Criteria Alerting: Browser Policy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image1-1024x535.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image1.png)

Metricly also has a default policy to alert on [elevated EC2 network activity.](https://docs.metricly.com/alerts-notifications/policies/default-policies/#ec2) This policy consists of two metrics (read operations, and write operations), each with two conditions: values outside the baseline and contextual bands.

[![Multi-Criteria Alerting: EC2 Policy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image2-1024x531.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image2.png)

Each of these are multi-criteria alerting policies.

What is the value of multi-criteria, policy-based alerting?
-----------------------------------------------------------

**1) Adding multiple criteria aggregates alerts, reducing alarm noise.**

If you have 3 metric conditions in one policy, then you receive a third of the number of alerts as compared to alerting by metric. Take our network activity policy above for example. Without multi-criteria alerting, you'd need two policies, one for the read operations metric and one for write operations -- and you would need to manually make the connection when they alert at the same time.

**2) Including multiple criteria promotes alert accuracy.**

You can have much more control when you evaluate multiple conditions at the same time. Let's say you have a policy set to alert when the backend error rate is [elevated on an ELB instance](https://docs.metricly.com/alerts-notifications/policies/default-policies/#elbGlobalPolicies). With a traditional policy, you could set a single condition -- for example, that the error rate is more than 2%. Depending upon the instance in question (as well as time of day, expected load, etc.), an error rate of 2% may or may not be worrisome, but you'll receive an alert every time it occurs regardless. With multi-condition alerting, you can add in other factors that could affect the error rate, such as total request count:

[![Multi-Criteria Alerting: Elevated Error Rate Policy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image3-1024x531.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image3.png)

Multi-criteria policies by themselves greatly improve alarm quality and cut noise, but they're still not entirely perfect. Let's look at a few ways to make them even better.

How you can improve multi-criteria policies?
--------------------------------------------

**1) Use anomaly detection to refine the conditions themselves.**

Multi-criteria policies can consist solely of a set of [static thresholds](https://docs.metricly.com/data-visualization/analytics/static-thresholds/), but anomaly detection and advanced analytics add a whole new level of precision to your monitoring.

Metricly's EC2 network activity policy, for example, relies on conditions related to the baseline and contextual thresholds of read and write metrics. These thresholds, or bands of normalcy, are built by our behavior learning engine, which applies advanced analytics to an element's historical performance data. These dynamic bands provide a level of improved accuracy as they conform to the normal behavior of each element.

Where anomaly detection really shines, however, is in combination with static thresholds. Take Metricly's policy on ELB latency, for instance. Predictably, it looks for instances where latency is deviating from the norm for both the baseline and contextual thresholds -- but it also requires that request count be above 1,000. In this way, it catches abnormal behavior while preventing the user from receiving a major alarm at a time when it may be less critical to address the issue.

**2) Create new, computed metrics to bring additional insight to your environment.**

By applying mathematical expressions to multiple metrics, you can create a new [computed metric that is insightful for anomaly detection](/the-power-of-computed-metrics).

For example, Metricly provides a pre-configured policy for Linux servers, "[Heavy CPU Load](https://docs.metricly.com/alerts-notifications/policies/default-policies/diamond-linux-policies/)," that includes two conditions: the first looks for an upper deviation from learned behavior on CPU utilization, while the second condition looks for normalized load average (defined as load average/# of CPUs) greater than 2.  The combination of the two conditions detects a condition definitely worthy of operational attention.

[![Multi-Criteria Alerting: Heavy CPU Policy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image4-1024x531.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/09/Image4.png)

Another example of this is the queue length differential, which we discuss in context with [detecting performance issues on EBS volumes](/detecting-performance-issues-on-ebs-volumes).

**3) Employ Webhooks when a policy is triggered for automated action taking.**

When a policy is violated, you can send a notification to a member of the operations team, but you can also use a [Webhook](https://en.wikipedia.org/wiki/Webhook) to trigger an automated script.  For example, you could use a webhook to restart a service that is having latency issues or automatically add another EC2 to expand server capacity temporarily.

Alarm noise and alert fatigue is a major problem for IT Ops and DevOps, but multi-criteria alerting policies can help curb the noise. Metricly's alerting policies are based on industry best practices, helping you aggregate your alerts and improve alarm accuracy. Adding [anomaly detection](/monitoring/) and advanced analytics (including computed metrics) further refines your alerts, and with the implementation of Webhooks for automatically firing scripted response, you might just get that extra hour a day you've been hoping for.

* * * * *

*Ready to free yourself from overwhelming alarm noise? See the difference multi-criteria alerting can make in your own environment with Metricly's [21-day, no-obligation free trial.](/signup)*
