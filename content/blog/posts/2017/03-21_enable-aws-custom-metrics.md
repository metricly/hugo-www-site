---
author: "Mike Mackrory"
date: "2017-03-21"
title: "Making Monitoring Your Own with AWS Custom Metrics"
description: "Let’s look at reasons to include AWS custom metrics in your monitoring strategy, which metrics you can define, and how to extract them for better analysis."
category: "Cloud Monitoring"
url: "/enable-aws-custom-metrics/"
layout: "single"
---
Anyone who has used Amazon's Web Services (AWS) should be familiar with CloudWatch, a powerful tool to monitor your services in the cloud. But did you know that since 2011, CloudWatch has been able to integrate custom metrics into the collection of data it gathers from your resources?

Let's look at reasons why you might want to include AWS custom metrics in your [monitoring strategy](https://www.metricly.com/evaluate-monitoring-strategy), what kind of metrics you could define, and how you can extract them to provide better analysis of what your resources are doing.

Why AWS Custom Metrics?
-----------------------

Just because you can do something doesn't necessarily mean that you should. So before we get too excited about the ability to include custom metrics, let's consider what we might include and what value it could provide to your monitoring strategy.

In a standard configuration, you have access to all the metrics CloudWatch collects.

Some examples of AWS custom metrics you might want to consider including in your monitoring strategy are:

-   Customer-specific business metrics such as purchase size, frequency, or regional information.
-   Processing results, such as the file size reduction in images resized in a Lambda.

How Do I Include These Custom Metrics?
--------------------------------------

When publishing AWS custom metrics, you can do so either [through an API](https://www.metricly.com/inside-netuitive-api) or the AWS Command Line Interface (CLI) with the put-metric-data command. A custom metric is defined with a metricname, a namespace, and then dimensions.

Selecting a relevant and meaningful name will make it easier to find the metric, and more importantly, make it self-explanatory when others are looking for it.

A namespace allows you to categorize your metrics. If you are collecting a metric specific to a type of AWS resource, you can store the metric within the namespace for the type, such as ***AWS/EC2***, or you can make up your own namespace, such as ***Customer/PurchaseData***.

Finally, a dimension is simply a name and value pair that holds the data you wish to include. A single metric can have between one and ten dimensions included in it.

If we were to use one of the previous examples, and include some business-specific metrics, we could do so with the following CLI call.

> aws cloudwatch put-metric-data --namespace Customer/PurchaseData --metric-name PurchaseInfo --purchaseAmount 197.00 --state OR --referredBy website --purchaseTimeStamp 2017-02-14T00:00:00Z

You can find additional information about AWS custom metrics in the AWS CloudWatch documentation under [Publish Custom Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html).

Where Do They Go, and How Can I Access Them?
--------------------------------------------

Your custom metrics will then be saved in CloudWatch, and you can access them by logging into the AWS Console and navigating to the [CloudWatch page](https://us-west-2.console.aws.amazon.com/cloudwatch). Towards the top of the page is a button to ***Browse Metrics*** and a search box. You can either navigate to the metrics page or simply type your metricname in the search box and hit Enter.

[![AWS Custom Metrics: Search for Metrics](https://www.metricly.com/wp-content/uploads/2017/07/Search-For-Custom-Metrics.png)](https://www.metricly.com/wp-content/uploads/2017/07/Search-For-Custom-Metrics.png)

Partnering with a Monitoring Solution Provider
----------------------------------------------

CloudWatch provides a lot of information based on the metrics, both standard and custom, as well as ways to visualize and alert on that data. However, to truly revolutionize your monitoring approach; you'll want to leverage the power of a monitoring solution such as [Netuitive](https://www.metricly.com/product). I like Netuitive because for many of the metrics you import into their system, a great deal of the configuration has already been done, and with the selection of a few options, your monitoring plan will be iterations ahead of anything you may have already set up with CloudWatch.

If you already have a Netuitive account, and your data is being read and analyzed by Netuitive, then you're ready to go. If this isn't the case, then you'll want to set up an account before proceeding through this article. Netuitive offers a 21-day free trial which you can sign up for [here](https://www.metricly.com/signup).

Integrating Your Custom Metrics into Netuitive
----------------------------------------------

If you log into your Netuitive account, you'll want to navigate to the [Integrations](https://www.metricly.com/integrations) page and select the **Amazon Web Services** integration.

[![AWS Custom Metrics: Integration](https://www.metricly.com/wp-content/uploads/2017/07/AWS-Integration.png)](https://www.metricly.com/wp-content/uploads/2017/07/AWS-Integration.png)

Unless you already have it set up, you'll need to configure AWS integration on your account. This will allow metrics data to be read from your AWS account and make it viewable in Netuitive. I prefer the IAM role integration, but you can also integrate via an AWS Access Key. Both are explained with step-by-step directions [here](https://help.app.netuitive.com/Content/Integrations/aws.htm).

Once your access is set up, you'll need to scroll down on the AWS Setup page to include the [Custom CloudWatch Metric](https://www.metricly.com/introducing-aws-cloudwatch-custom-metrics-integration) Type. Additional options are available if you click the plus sign to the right of the metric, such as filtering by namespace.

[![Enable AWS Custom Metrics](https://www.metricly.com/wp-content/uploads/2017/07/AWS-Custom-Metrics.png)](https://www.metricly.com/wp-content/uploads/2017/07/AWS-Custom-Metrics.png)

With AWS custom metrics enabled, you can now navigate to the Inventory Management page and use the AWS custom metric to develop dashboards, and if appropriate, create policies and events.

Ready to bring the power of Netuitive's anomaly detection to your AWS custom metrics? Get started with our [21-day, fully-featured free trial](https://www.metricly.com/signup).
