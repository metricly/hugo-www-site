---
author: "Mike Mackrory"
date: "2016-12-06"
title: "Best Practices for AWS Lambda Monitoring"
description: "AWS Lambda functions are part of a new serverless paradigm. Here's which life cycle aspects and best practices are best to use for Lambda monitoring."
category: "DevOps"
url: "/best-practices-aws-lambda-monitoring/"
layout: "single"
---
Serverless architectures represent a new frontier in the age of cloud computing, and as such, require a different model for monitoring than traditional server-based architectures. [Lambda functions](https://www.metricly.com/monitoring-aws-lambda-netuitive) from Amazon Web Services (AWS) are part of this new paradigm, and this article will discuss what aspects of a Lambda's lifecycle should be monitored and what Lambda monitoring best practices can be employed to ensure optimal performance.

What Metrics Can We Gather From a Lambda?
-----------------------------------------

With the infrastructure behind Lambda functions abstracted away, we are left with the following metrics that are available to monitor. These metrics are:

-   Invocations, or request count
-   Error count
-   Resources required for execution
-   Duration, or time required for execution. (Measured in milliseconds.)
-   Throttles, or count of invocation requests, which failed due to limits on the account.

As the provider of a Lambda function, we have two responsibilities. We need to consider the experience of those using the Lambda, and the associated cost to the organization which provides the Lambda.

**Critical Lambda Monitoring Metrics For User Experience**

In order to provide the optimal user experience, the key metrics to monitor are:

-   Error counts
-   Execution time
-   Throttles

Users, whether external or internal, actual human beings or services, expect your Lambda function to respond with accurate results in a reasonable amount of time. In order to measure this experience, your monitoring approach needs to take into consideration the error count in relation to the number of requests, and the execution time for the function.

[![Lambda Monitoring: AWS Lambda Execution Time](https://www.metricly.com/wp-content/uploads/2017/07/MonitoringLambdaExecutionTime.jpg)](https://www.metricly.com/wp-content/uploads/2017/07/MonitoringLambdaExecutionTime.jpg)

In a perfect world, your error count should be at zero, so any increase in the error count should be investigated and rectified as soon as possible. Error cases which are outside the control of the function should be appropriately handled either through validation or by appropriate error handling to prevent an error from being passed back to the calling service.

[![Lambda Monitoring: Error count and rate](https://www.metricly.com/wp-content/uploads/2017/07/MonitoringLambdaErrorCountandRate-1024x335.jpg)](https://www.metricly.com/wp-content/uploads/2017/07/MonitoringLambdaErrorCountandRate.jpg)

In addition, you should also monitor whether requests to your Lambda are being throttled due to limits on the number of concurrent functions which can be executed. While these may trigger a retry attempt and succeed, it is important to be aware of this limit and the impact on the end user.

**Key Lambda Monitoring Metrics for Cost and Efficiency**

From the perspective of the organization which owns and supports the Lambda function, the key metrics are:

-   Resources used for execution
-   Execution time

Costs for Lambda functions are charged on a per-request basis. The cost is a product of the resources used and the duration of that usage. Duration is measured in 100ms intervals. It is possible to increase resources available to the function in order to reduce the time taken to perform whatever processing is required, but this in turn would increase the resource cost. Reducing resources would likely increase the duration of the processing. For a cost-effective Lambda, the goal should be to find the sweet spot between resources used and time required for processing.

Getting Started
---------------

The first step in any Lambda monitoring project is to determine how you are going to track the required metrics and establish a connection between your monitoring solution and your AWS environment. In a subsequent article, I'll focus on establishing this connection and configuring a monitoring solution for your Lambdas using [Netuitive's monitoring solution](https://www.metricly.com/product).

With the connection to AWS enabled, the next step is to put together a method of monitoring each of the key metrics. In the case of Netuitive you'll want to set up the [dashboard](https://www.metricly.com/product/dashboards-and-reports) to display each of the key metrics previously identified. These are:

-   Request count vs error count over time
-   Error count
-   Memory usage
-   Duration of requests

The next step is to determine a baseline for each of these metrics, and then configure a series of alerts to notify you or your team if the deviation from the baseline exceeds a certain threshold.

Best Practices for Lambda Monitoring
------------------------------------

To wrap this discussion up, here is what I would recommend for a successful [monitoring solution](https://www.metricly.com/) for your Lambda functions.

-   Determine a monitoring solution for your Lambda functions which assesses and reports each of the key metrics:
    -   Invocations or count of requests
    -   Count of errors
    -   Average duration of Lambda execution
    -   Resources for execution of the Lambda
    -   Throttling of Lambda requests
-   Perform necessary tuning of the Lambda function to ensure optimal performance in terms of stability, responsiveness, and resources used for execution. Your goal is to be both performant and efficient.
-   Establish a baseline for each of the key metrics and determine an acceptable range of values for each.
-   Set up alerts to notify you or the teams responsible for maintaining the Lambda whenever the metrics stray from the determined baseline and range of acceptable values.
