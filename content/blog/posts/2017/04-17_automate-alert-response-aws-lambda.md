---
author: "Mike Mackrory"
date: "2017-04-17"
title: "Using AWS Lambda and Webhooks to Automate Responses to Monitoring Alerts"
description: "Learn how to automatically trigger an alarm response tailored to different alerting situations with AWS Lambda and a webhook."
category: "Cloud Monitoring"
url: "/automate-alert-response-aws-lambda/"
layout: "single"
---

By now, you've probably heard of AWS Lambda functions. They've become famous as the go-to solution for compute-intensive tasks like resizing photos.

But did you know you can also make Lambda a powerful part of your monitoring routine? By using webhooks to trigger Lambda functions in response to [monitoring alerts,](/understanding-alert-noise-monitoring) you can. Below, I'll show you how, using [Netuitive](/product).

Intro to AWS Lambda
-------------------

AWS Lambda is a [serverless computing platform](/best-practices-aws-lambda-monitoring) that AWS introduced in 2014. The platform is event-driven and can respond to any amount of events numbering between zero and into the thousands without any user intervention. These properties make AWS Lambda useful in responding to events such as:

-   Processing uploaded images
-   Validating new or updated data
-   Performing regular scheduled maintenance or processes

Let's consider a slightly different scenario, though. Your application is running in the AWS ecosystem. Hosting is provided by EC2 instances, supported by SQS queues and backed with DynamoDB tables. You have a [comprehensive monitoring plan](/evaluate-monitoring-strategy) in place, and alerts set to be triggered when demand exceeds capacity. Unfortunately, with this system, you still need an operator to respond to the alert and adjust your environment accordingly.

But what if you didn't need that operator? What if you could automatically trigger an action that would know what to do in different situations? All this is possible with AWS Lambda, and the use of webhooks to provide the trigger mechanism.

What Are We Going to Accomplish?
--------------------------------

We can use AWS Lambda to affect change in the AWS environment. Some of these changes could include:

-   Fluctuating numbers of requests to your application, requiring the scaling up or scaling down of EC2 instances.
-   Throttling of [DynamoDB  reads and writes](/dynamodb-monitoring-plan) due to traffic which exceeds the provisioned capacity

The second situation is the one we'll explore as an example in this article. We're going to start by setting up a simple AWS [Lambda function](/monitoring-aws-lambda-netuitive) which will increase the provisioned capacity for a DynamoDB table. With a Lambda in place, we're going to work backward. We'll cover how to trigger the action, and how to activate that trigger through a Netuitive alert.

There is one limitation which is important to note before we embark on this particular project. AWS allows the capacity of a DynamoDB table to increase multiple times during a single day. Unfortunately, decreases in capacity are limited to four times in a 24-hour period. Our Lambda today is only going to focus on increasing capacity. It would be prudent to pair this with a Lambda that examines usage every six hours and decreases capacity accordingly, but that is outside the scope of this article.

We'll need to take care of some basic setup before we start with this example. The following assumes that the user has basic knowledge of the AWS environment, and you'll need access to the AWS environment. If you don't already have access, you can [sign up for a free account](https://aws.amazon.com/free/).

Creating and deploying this example shouldn't cost you much if anything from within the free tier; however, please ensure that you are aware of and understand what charges you may incur by using AWS. This article is provided only as a demonstration of potential uses.

Log into the AWS Console, and complete the following steps.

The DynamoDB Capacity Lambda
----------------------------

The Lambda I created for this example is simple, and is not to be considered a production-ready application. The intent is to illustrate what can be done, and provides a base on which you can build your own Lambda to manage DynamoDB capacity. The [code is available here](https://github.com/echovue/dynamo_capacity_updater), and I deployed it using the [AWS Lambda Tutorial](http://docs.aws.amazon.com/toolkit-for-eclipse/v1/user-guide/lambda-tutorial.html) as a guide. Two potential obstacles which you may encounter can be avoided by:

-   Ensuring that the IAM role you use for the Lambda has rights to perform the *"dynamodb:UpdateTable"* action.
-   Ensuring that you specify the region where the table is located, either as a property in the handler, or passed in parameter.

> package com.echovue.dynamoCapacityUpdater;
>
> import com.amazonaws.regions.Region;\
> import com.amazonaws.regions.Regions;\
> import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;\
> import com.amazonaws.services.dynamodbv2.document.DynamoDB;\
> import com.amazonaws.services.dynamodbv2.document.Table;\
> import com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;\
> import com.amazonaws.services.lambda.runtime.Context;\
> import com.amazonaws.services.lambda.runtime.LambdaLogger;\
> import com.amazonaws.services.lambda.runtime.RequestHandler;\
> import com.echovue.dynamoCapacityUpdater.model.CapacityConfigEvent;
>
> public class DynamoCapacityUpdater implements RequestHandler<CapacityConfigEvent, String> {\
> private AmazonDynamoDBClient amazonDynamoDBClient;\
> private DynamoDB dynamoDB;\
> private Region region = Region.getRegion(Regions.US_WEST_2);
>
> @Override\
> public String handleRequest(CapacityConfigEvent event, Context context) {\
> LambdaLogger logger = context.getLogger();\
> Table table = getDynamoDB().getTable(event.getDynamoDBTableName());\
> ProvisionedThroughput provisionedThroughput = new ProvisionedThroughput()\
> .withReadCapacityUnits(event.getReadCapacityUnits())\
> .withWriteCapacityUnits(event.getWriteCapacityUnits());\
> logger.log("Updating " + event.getDynamoDBTableName() + " in region " +\
> region.toString());\
> table.updateTable(provisionedThroughput);
>
> return "Scaled Table (" + event.getDynamoDBTableName()\
> + ") to [" + event.getReadCapacityUnits() + ":"\
> + event.getWriteCapacityUnits() + "]";\
> }
>
> private DynamoDB getDynamoDB() {\
> if (amazonDynamoDBClient == null || dynamoDB == null) {\
> amazonDynamoDBClient = new AmazonDynamoDBClient().withRegion(region);\
> dynamoDB = new DynamoDB(amazonDynamoDBClient);\
> }\
> return dynamoDB;\
> }\
> }

The handler accepts a custom event object, which includes the name of the table to be updated, and values for the new read and write capacities. Accessor functions are excluded from the code below for brevity.

> package com.echovue.dynamoCapacityUpdater.model;
>
> import com.amazonaws.services.lambda.runtime.events.ConfigEvent;
>
> public class CapacityConfigEvent extends ConfigEvent {\
> private String dynamoDBTableName;\
> private Long readCapacityUnits;\
> private Long writeCapacityUnits;

Enabling Access Through the API Gateway
---------------------------------------

We now need to enable access to our Lambda, and we can do this by creating an API in the Amazon API Gateway. Log in to the AWS Console, and navigate to the [API Gateway homepage](https://console.aws.amazon.com/apigateway/).

Click the **Create API** button.

Choose the New API option, and enter a name and description.

 ![AWS Lambda Automated Response: Create API](/wp-content/uploads/2017/07/Create-New-API.png)

Once the API is created, click on **Actions** in the Resources column, and choose **Create Method**. Then, from the resultant dropdown, Select **POST** and click on the checkmark.

![AWS Lambda Automate Response: Add Endpoint 1](/wp-content/uploads/2017/07/Post-endpoint-1.png) ![AWS Lambda Automate Response: Add Endpoint 2](/wp-content/uploads/2017/07/Post-endpoint-2.png)

The Integration type for this endpoint is a Lambda Function. You'll need to select the Lambda Region, and then type in the name of your Lambda Function. The region into which your Lambda is deployed isn't easily identifiable when you're deploying your Lambda, so you might have to do a little hunting. Fortunately, you'll get a notification when you select a region that has no Lambda functions deployed in it.

![AWS Lambda Automate Response: Endpoint Configuration](/wp-content/uploads/2017/07/Post-Endpoint-Configuration.png)

When you click on the **Save** button, you'll receive a notification asking you to confirm that this API will be granted permission to invoke your Lambda function. Click OK to grant the permission.

![AWS Lambda Automate Response: Endpoint Graphical Display](/wp-content/uploads/2017/07/Post-Endpoint-Graphical-Display.png)

Your Lambda is now configured and can be tested, secured and deployed. To test your API, click on the **Test** box, and then enter a test payload for the API. I used the following JSON object to test both my Lambda function and this API.

> {\
> "dynamoDBTableName": "My_Dynamo_Table",\
> "readCapacityUnits": 1,\
> "writeCapacityUnits": 1\
> }

Once your API is tested and working, you'll want to secure it. You have some options, which should be reviewed to select the best one for your situation. Configuration for access controls is done through the **Authorizers** option under the name of your API in the left-most column.

With your API secure, you can now deploy it. Click on the name of your API, and then select **Deploy API** from the list of options. Select **[New Stage]** from Deployment stage, and then enter the details for the deployment.

![Automate AWS Lambda: Complete Deployment Detail](/wp-content/uploads/2017/07/Complete-Deployment-Details.png)

Clicking the **Deploy** button will deploy your API and provide you with a URL to use to invoke your API, a host of other options for additional configuration, and publishing of your API. For this example, all you will need is the URL.

Creating a Webhook from Netuitive
---------------------------------

If you already have a Netuitive account, and your data is being read and analyzed by Netuitive, then you're ready to go. But if this isn't the case, then you'll want to set up an account before proceeding through this section. Netuitive offers a 21-day free trial which you can sign up for [here](/signup).

One of the many benefits of choosing Netuitive as your AWS monitoring provider is that they possess a great collection of [multi-criteria policies](/reduce-alert-multi-criteria-policies) for you to work with. Navigate to the Policies page. We're going to create our Webhook on the AWS DynamoDB -- Elevated Read Capacity Utilization policy. Locate this policy and click on it.

![AWS Lambda Automate Responses: Edit DynamoDB policy](/wp-content/uploads/2017/07/Edit-DynamoDB-policy.png)

Click on the **Notifications** option, and then click the **Add Notification** button. For **Notification Type**, select **Webhook**, and then select **New Webhook**.

The configuration of the Webhook is fairly straightforward. You'll need a name and the URL created for the API. I selected the custom payload option, and then entered the following as my payload, which will set the capacity of my table to one read and write per second, simply to demonstrate the functionality.

> {\
> "dynamoDBTableName": "${elementId}",\
> "readCapacityUnits": 1,\
> "writeCapacityUnits": 1\
> }

![AWS Lambda Automate Response: Configure Webhook](/wp-content/uploads/2017/07/Webhook-Configuration-768x448.png)

Click **Test and Save** and your webhook will be configured and ready for action.

Additional Resources
--------------------

Unfortunately with a topic this broad, I have only been able to touch on the very basic steps in the process covered here. To find out more about the capabilities offered by Netuitive for monitoring, and especially those for creating alerts and notifications, check out the excellent [Netuitive Help system](https://help.netuitive.com/Content/home.htm).

The AWS documentation is an invaluable resource if you would like additional information on [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html) and the [AWS API Gateway](http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html).
