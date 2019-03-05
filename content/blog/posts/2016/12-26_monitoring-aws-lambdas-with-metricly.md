---
author: "Mike Mackrory"
date: "2016-12-26"
title: "Monitoring AWS Lambdas with Metricly"
description: "We’ll walk step-by- step through the process of configuring Metricly for monitoring AWS Lambdas, including dashboards and alerting policies."
category: "Cloud Monitoring"
url: "/monitoring-aws-lambdas-with-metricly/"
layout: "single"
---

In a previous article, I discussed the key metrics and best practices that should be employed when monitoring AWS Lambdas. In this article, we'll walk step-by- step through the process of configuring a Netuitive monitoring solution for AWS Lambdas. We'll cover the connection between AWS and Netuitive, review the Lambda dashboard, and the configuration of policies to alert you so you know when the Lambda isn't performing as expected.

Before You Start
----------------

If you don't have a Netuitive account already, you'll want to set up an account before proceeding through this article. Netuitive offers a 21-day free trial which you can sign up for from [this link](/signup). As part of the signup process, you will have the opportunity to watch a video containing an overview of Netuitive from the co-founder, Bob Farzami. I would highly recommend watching this to get a broad understanding of the environment and capabilities of the product. You can also watch the [Netuitive overview video here](/netuitive-overview).

You will also want to have an AWS environment configured which includes the Lambda functions that you would like to monitor. AWS currently offers new users a year of access to the AWS free tier, which includes the ability to create and execute Lambda functions. Configuration of this environment and the creation of Lambda functions is well beyond the scope of this post, but excellent documentation is available from AWS which will assist with both.

[Amazon Web Services Free Tier](https://aws.amazon.com/free/)

[AWS Lambda Getting Started Guide](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

Integration Between Netuitive and Your AWS Account
--------------------------------------------------

The first thing we need to do is create a connection, or integration between Netuitive and our AWS account. Log in to your Netuitive account and navigate to the [Integrations](https://app.netuitive.com/#/integrations) home page. You'll have a wide range of integrations to choose from, and you'll want to click the first option, Amazon Web Services.

Determine and enter a name for your integration, ensure that the Data Collection option is checked, and then decide on the method of authentication to AWS. There are two ways to connect the accounts. The first is by creating an IAM role in your AWS account, and the second is to create a new user with read-only access in your AWS account. I would recommend the IAM role approach, although both are clearly explained in the detailed instructions provided by Netuitive.

[IAM Role](https://hlp.app.netuitive.com/Content/Datasources/Netuitive/aws.htm#installation-via-iam-role)[--](https://hlp.app.netuitive.com/Content/Datasources/Netuitive/aws.htm#installation-via-iam-role)[Based Integration](https://hlp.app.netuitive.com/Content/Datasources/Netuitive/aws.htm#installation-via-iam-role) (Recommended)

[AWS User](https://hlp.app.netuitive.com/Content/Datasources/Netuitive/aws.htm#installation-via-access-key)[--](https://hlp.app.netuitive.com/Content/Datasources/Netuitive/aws.htm#installation-via-access-key)[Based Integration](https://hlp.app.netuitive.com/Content/Datasources/Netuitive/aws.htm#installation-via-access-key)

If you're using the recommended IAM role approach, you should have an ARN to paste into the appropriate field on the page. The final step is to ensure that the Lambda type is included in the Integration. It is not checked by default, so you'll want to scroll down the list of types and ensure that it is checked. With that complete, your screen should look similar to the image below, and you can click on Save.

[![Monitoring AWS Lambdas: Setup](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/AWS-Setup.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/AWS-Setup.png)

AWS Lambda Summary Dashboard
----------------------------

Netuitive automatically generates a simple Lambda dashboard for you named "AWS Lambda Summary." This [dashboard](/product/dashboards-and-reports) includes widgets which show:

-   The top five functions based on count of invocations during the time period.
-   The top five functions with the highest latency, or duration.
-   Events, showing events related to policies, which we'll discuss shortly.

Your dashboard may look similar to the one shown below. I have two Lambdas currently active in my account. From what I have observed, metrics are gathered from AWS every five minutes, and may take an additional minute or two for processing. (Also note that the graphs may not populate until two data points are available.)

[![Monitoring AWS Lambdas: Summary Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Lambda-Summary-Dashboard.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Lambda-Summary-Dashboard.png)

In addition to the graph view, each of the widgets also has a "Table" view which will list the specific lambdas being shown with the corresponding values.

[![Monitoring AWS Lambdas: Dashboard Table View](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Lambda-Monitoring-Dashboard-Table-View.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Lambda-Monitoring-Dashboard-Table-View.png)

Element Detail Dashboard
------------------------

Netuitive also provides an Element Detail dashboard for each Lambda function which can be accessed through the [Inventory](https://help.netuitive.com/Content/Inventory/inventory_explorer.htm) option on the navigation panel at the top of the page.

By selecting a specific element from the list of elements, you will be taken to a detailed view of the Lambda function which shows both the current state of the function in terms of Invocations and Latency, and the state of each of those metrics over time.

[![Monitoring AWS Lambdas: Detailed Element Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Detailed-Element-Dashboard.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Detailed-Element-Dashboard.png)

The dashboard above shows the metrics for a simple Lambda, which I created to accept a request, wait for a random time period between 0 and 300ms, and return a true response. I call the Lambda by executing the aws invoke-async command on my local workstation. Two key metrics are shown in each graphic. The light grey/blue color indicates the average for the metric being displayed, but the darker and more distinct line indicates the current state of the Lambda, or at least the current state over the preceding five minutes.

How to Know When Things Go Awry
-------------------------------

Dashboards are great to look at, but not if you have to watch them continuously, looking for anomalies. We need a way to automate the process of monitoring AWS Lambdas so that we can focus on other tasks, but still know when something is happening which demands our attention. Netuitive Policies fill that need, and the key policies have already been created for you.

While looking at the Detailed Element Report, you should notice a Policies link right above the graphics. You can also access these by clicking on the [Policies](https://help.netuitive.com/Content/Policies/policies.htm) option on the navigation panel at the top of the page.

[![Monitoring AWS Lambdas: Lambda Policy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Element-Detail-Policies.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Element-Detail-Policies.png)

Three policies are provided for you automatically by Netuitive. The descriptions are taken from the Policy summary for each, and provided for convenience here.

| Monitoring Policy | Description |
| --- | --- |
| AWS Lambda -- Depressed Invocation Count | The number of calls to the function (invocations) have been lower than expected for at least the last 10 minutes. |
| AWS Lambda -- Elevated Invocation Count | The number of calls to the function (invocations) have been greater than expected for at least the last 30 minutes. |
| AWS Lambda -- Elevated Latency | The average duration per function call (latency) has been higher than expected for at least the past 30 minutes. |

Each of the policies can be viewed in more detail by clicking on the policy name. Some of the aspects which can be configured include:

-   Scope, which can be used to filter which elements this policy will be applied to.
-   Conditions, which specify the duration of a condition that qualifies as an alertable event, as well as the conditions themselves.
-   Description
-   Notifications, which are not configured by default, but can be configured to produce notifications through:
    -   Email
    -   HipChat
    -   [OpsGenie](https://www.opsgenie.com/)
    -   PagerDuty
    -   SNS
    -   Slack
    -   Webhook

[![Monitoring AWS Lambdas: Test Notification](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Test-Notification.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Test-Notification.png)

Going Beyond Monitoring AWS Lambdas
-----------------------------------

Hopefully this article provides enough information to get started with monitoring AWS Lambdas using [Netuitive](/product). What I've covered here barely scratches the surface of what Netuitive offers in terms of monitoring and alerting. Aside from the integration and monitoring of Lambdas, EC2 instances, and other offerings of the AWS ecosystem, one thing which really impressed me with Netuitive is the content and the quality of the context-specific help system. Clicking on the Help link in the top right corner of each page opens a new tab with definitions, screenshots, and helpful tips related to the topic you're viewing.
