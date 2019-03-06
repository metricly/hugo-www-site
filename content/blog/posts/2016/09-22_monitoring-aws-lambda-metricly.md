---

date: "2016-09-22"
title: "Monitoring AWS Lambda with Metricly"
description: "Monitoring AWS Lambda is as simple as clicking the AWS integration card in the Metricly UI, and checking the Lambda checkbox to enable data collection."
category: "Cloud Monitoring"
url: "/monitoring-aws-lambda-metricly/"
layout: "single"
---
AWS Lambda allows you to define and execute snippets of code in the cloud without having to build any of the infrastructure around it.  These functions can be written in Python, Node.js, or Java.  Once they have been written, Amazon takes care of all the infrastructure needed to support them; all you need to do is start using them....and monitoring their performance! Here's how to begin monitoring AWS Lambda in Metricly:

How to Collect AWS Lambda Metrics
---------------------------------

Enabling data collection for AWS Lambda is as simple as clicking the AWS integration card in the Metricly UI, and then checking the Lambda checkbox.  If you don't wish to monitor all of your Lambda functions, you can use a regular expression to specify which ones should be included or which ones should be excluded.

[![Monitoring AWS Lambda: Enabling Data Collection](https://www.metricly.com/wp-content/uploads/2016/09/Lambda1.jpg)](https://www.metricly.com/wp-content/uploads/2016/09/Lambda1.jpg)

Figure 1: Enabling Data Collection for AWS Lambda in Metricly

Once data collection for Lambda has been enabled, performance metrics from CloudWatch will begin to flow into Metricly.  CloudWatch makes four metrics available:

-   *duration* -- represents the average execution time for calls to the Lambda function across the time interval
-   *errors* -- the number of calls for which the Lambda function itself returned an error
-   *invocations* -- the number of calls to the Lambda function which were *not* throttled
-   *throttles* -- the number of calls to the Lambda function which *were* throttled

Each Lambda function will be represented as a separate element within Metricly, containing the above four metrics.

Additionally, the Metricly package for monitoring AWS Lambda will be auto-provisioned upon activation of Lambda data collection.  As we discussed in [a previous blog](/aws-monitoring-best-practices/), a Metricly package contains pre-configured dashboards, computed metrics, policies, and analytics configurations, all based on industry best practices.

Let's take a look at some of what's included in the Lambda package.

AWS Lambda Dashboards and Visualizations
----------------------------------------

[Dashboards](https://www.metricly.com/product/dashboards-and-reports) provide a high-level view of the operation of the components in your infrastructure.  While you can always create your own, Metricly provides default dashboards that can serve as a starting point. This enables you to start monitoring your infrastructure immediately.

Metricly provides two dashboards for monitoring AWS Lambda.  The first is a Summary Dashboard, which shows the top 5 Lambda functions from both an invocation perspective as well as a latency perspective:

[![Monitoring AWS Lambda: Summary Dashboard](https://www.metricly.com/wp-content/uploads/2016/09/Lambda2.jpg)](https://www.metricly.com/wp-content/uploads/2016/09/Lambda2.jpg)

The second type of dashboard is the Element Detail Dashboard.  Clicking on an element in the Inventory list will give you the option to view the element details, the first of which is the detail dashboard.  This view gives you immediate insights into the behavior of any specific Lambda function over a period of time.

[![Monitoring AWS Lambda: Element Detail Dashboard](https://www.metricly.com/wp-content/uploads/2016/09/Lambda3-1024x507.jpg)](https://www.metricly.com/wp-content/uploads/2016/09/Lambda3.jpg)

Identifying AWS Lambda Issues and Triggering Alerts with Metricly Policies
---------------------------------------------------------------------------

While dashboards are a quick way to help you visualize and summarize your data and its behavior across your environment, they are also a commodity feature in monitoring tools these days. Metricly's packages go beyond this to create a number of other important artifacts, most notably alerting policies.

A policy in Metricly defines the condition under which events or alarms will be raised. Typically, these policies look for metrics which are behaving in ways that are [out of the norm](/monitoring/), based upon their historical behavior and/or behavior with respect to other, related metrics.  The events which are raised can be Informational, Warning, or Critical.  By auto-provisioning policies that detect the most common scenarios plaguing DevOps teams, users immediately have access to the dashboards they need to provide visibility and the policies they need to detect problems.

For AWS Lambda, Metricly currently has two out-of-the-box policies:

-   *AWS Lambda -- Elevated Invocation Count*; and
-   *AWS Lambda -- Elevated* *Latency*

These policies look for deviations from the norm in their respective metrics.

As an example, here is a Lambda function from one of our customers. The red points on the graph indicate where the data deviates from the expected values, represented by the colored bands of learned behavior.  Over the course of several days, invocations were pretty constant, but then they experienced a sudden jump, with many deviations occurring on the right-hand side of the graph.

[![Monitoring AWS Lambda: Unusually High Lambda Invocation Count](https://www.metricly.com/wp-content/uploads/2016/09/Lambda4-1024x338.jpg)](https://www.metricly.com/wp-content/uploads/2016/09/Lambda4.jpg)

A couple of points are worth mentioning here:

1.  A policy doesn't need to raise an alert as soon as a single deviation occurs; Metricly's packaged Lambda policies, for example, are configured to start firing after 30 minutes of deviating values, which helps to eliminate false positives.
2.  No static thresholds were needed to catch this incident; this is critical. Since not all Lambda functions will have the same behavioral characteristics, static thresholds would have to be set and maintained for each function separately, which is not scalable.

As a final example, here is a case where the *AWS Lambda -- Elevated* *Latency* policy was firing:

[![Lambda AWS Monitoring: High Latency](https://www.metricly.com/wp-content/uploads/2016/09/Lambda5-1024x347.jpg)](https://www.metricly.com/wp-content/uploads/2016/09/Lambda5.jpg)

As with the other policy, the user need do nothing to set up this monitoring -- it happens automatically when they start bringing Lambda metrics into Metricly.

Start Monitoring AWS Lambda with Metricly
------------------------------------------

When it comes to monitoring AWS Lambda, Metricly aims to get users up and running quickly.  By providing a pre-defined set of dashboards, policies, computed metrics, and analytics configurations, built using best practices learned over years of experience, you have everything you need to go beyond dashboards and static thresholds.
