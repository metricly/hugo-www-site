---
author: "Steve Tidwell"
date: "2017-02-24"
title: "Monitor AWS Kinesis Streams with Metricly"
description: "Here's how to use Metricly's Quick Start Monitoring Package to monitor AWS Kinesis, and what those metrics might look like on your Metricly dashboard."
category: "DevOps"
url: "/monitor-aws-kinesis/"
layout: "single"
---


This post is Part 2 of a two part series on how to monitor AWS Kinesis Streams. In Part 1 of this series, [Best Practices for Kinesis Streams Monitoring](/analyzing-aws-kinesis-streams-metrics), we discussed [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/streams/), and how it is a managed service hosting by AWS. Kinesis provides a pipeline for continuous streaming of various types of data between data producers and data consumers. Also discussed were the various metrics provided by Kinesis and [Metricly](/product), and what they mean when monitoring Amazon Kinesis.

In this post, we're going to cover using Metricly to monitor AWS Kinesis Streams; including how to configure Metricly AWS integration; a few tips around that configuration; and what Kinesis metrics might look like on your Metricly dashboard while running Kinesis Streams in your application stack.

Prerequisites
-------------

If you're planning on trying out Amazon Kinesis Streams along with Metricly, there are a couple of prerequisites you'll need to fulfill prior to proceeding.

First, you'll need an Amazon Web Services account. If you don't already have one, now is a good time to sign up if you intend to follow along.

Second, you should also consider taking a few minutes to familiarize yourself with Amazon Kinesis Streams, how it works, and what it can do for you. Amazon helpfully provides [Youtube videos](https://www.youtube.com/watch?v=7bhXafN9uNg) of various conferences where they discuss Kinesis Streams, and the [Amazon Kinesis Developer Guide](http://docs.aws.amazon.com/streams/latest/dev/introduction.html) covers the subject in great detail.

Third, to try out Metricly, you can sign up for a [21-day free trial](/signup). To learn a little more about Metricly and what it does, watch the [What is Metricly](/netuitive-overview) overview video. The [Metricly Blog](/blog) also provides helpful posts about monitoring with Metricly.

Metricly AWS Integration
-------------------------

Now that you've created your Metricly account, you'll need to create a [Metricly integration](/integrations) with your AWS account. One advantage of using Metricly as your monitoring solution is that you can integrate it with other services you are using and see all of your metrics in a single place.

The Metricly help documentation provides [detailed instructions](https://help.app.netuitive.com/Content/Integrations/aws.htm) for creating an AWS integration. The recommended method for creating this integration is covered under "Installation Via IAM Role".

Be sure you select **Kinesis Stream** as an option when you create your integration, as illustrated below.

[![Monitor AWS Kinesis: Setup](/wp-content/uploads/2017/07/Screen-Shot-2017-02-24-at-9.48.31-AM.png)](/wp-content/uploads/2017/07/Screen-Shot-2017-02-24-at-9.48.31-AM.png)

Kinesis Streams Setup
---------------------

There are many different use cases for Amazon Kinesis Streams, and an equally large number of ways to set up an application stack that utilizes Kinesis. In order to generate the graphs shown in the illustrations, we set up a demo application using Amazon Kinesis and Cloudformation.

Amazon helpfully provides detailed instructions for doing so in their [Tutorial: Visualizing Web Traffic Using Amazon Kinesis Streams](http://docs.aws.amazon.com/streams/latest/dev/kinesis-sample-application.html). We recommend this method if you want to get up and running quickly to test Kinesis with Metricly.

Once you've setup your Kinesis Stream using the tutorial referenced above, your data will be visualized via a URL pointing to the EC2 instance that was created when you initialized the Cloudformation template. Instructions for viewing the visualization are in the tutorial. It should look something like the illustration below.

[![Monitor AWS Kinesis: Application Front End](/wp-content/uploads/2017/07/Screen-Shot-2017-02-24-at-9.54.27-AM-1024x653.png)](/wp-content/uploads/2017/07/Screen-Shot-2017-02-24-at-9.54.27-AM.png)

Now that you've seen what the data looks like on the front end of the application, it's time to take a look at what's happening behind the scenes using Metricly.

Monitor AWS Kinesis Streams
---------------------------

Metricly includes a number of packages that are automatically provisioned when you create an integration with a given service. There is a [Quick Start Package for Kinesis](https://github.com/netuitive-community-packages/netuitive-packages-aws-kinesis) to help you get started. It should automatically provision to your account when you enable the AWS integration.

A default set of metrics is available in the Metricly app when clicking **Metrics**, then **Kinesis**.

[![Monitor AWS Kinesis: QuickStart Monitoring Package](/wp-content/uploads/2017/07/Screen-Shot-2017-02-24-at-10.02.18-AM-1024x494.png)](/wp-content/uploads/2017/07/Screen-Shot-2017-02-24-at-10.02.18-AM.png)

You'll want to pay attention to a few things when monitoring your streams.

-   Latency can happen on both sides of your stream, as measured by GetRecords.Latency, PutRecord.Latency, and PutRecords.Latency. Higher latency can indicate possible issues either writing data to--or reading data from--a stream.

-   Maximum age of records. If you see older records not being read from your stream, as indicated by GetRecords.IteratorAgeMilliseconds, then your data consumers are not caught up reading the stream. This metric should be as close to zero as possible.

-   Sudden changes with the flow of data in or out of a stream can also indicate potential issues. Two key metrics to watch for are IncomingBytes and IncomingRecords. Watch these to know whether your data producers are seeing an increase or decrease in demand on your stack; or, that they are having trouble writing data to the stream.

The Metricly [Quick Start Package for Kinesis](https://github.com/netuitive-community-packages/netuitive-packages-aws-kinesis) provides some basic components to configure your integration monitoring. They are metric configurations, policies, and dashboards.

-   Metric configurations define how metrics are collected and analyzed by Metricly.

-   Policies are the criteria upon which Metricly will generate an event.

-   Dashboards display the monitoring information in an easy to use format.

These are covered in greater details in the Metricly post [AWS Monitoring Best Practices Using Pre-Configured Dashboards](/aws-monitoring-best-practices-using-pre-configured-dashboards).

Tips
----

-   Dashboards, Manage Dashboards, Star the Kinesis Dashboard to have it show up in the list at the top. See screenshot.

-   Click the link to the Kinesis Dashboard to see aggregated metrics for your Kinesis Streams. See screenshot.

-   From the Kinesis Dashboard, you can drill down to see both Metrics and Element Details.

-   From Element Details, click on Policies and you will be taken to a list of policies.
    -   Notifications can be configured for a given policy by clicking a given policy, then **Add a notification**.
    -   Select a **Notification Type**, such as Email, or Slack, and configure accordingly.

Conclusion
----------

In this post, we've covered configuring Metricly to monitor AWS Kinesis Streams, setting up a demo Kinesis Streams application, viewing that information using Metricly, and some key metrics to watch when monitoring Kinesis.

If you'd like to give Metricly a try, start with the [21-day free trial](/signup).
