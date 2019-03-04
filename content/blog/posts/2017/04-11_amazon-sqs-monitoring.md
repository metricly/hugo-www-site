---
author: "Zachary Flower"
date: "2017-04-11"
title: "Amazon SQS Monitoring with Metricly"
description: "Stay on top of your SQS queues with Metricly's Amazon SQS monitoring. Easy to install & use, Metricly offers unmatched insight into your AWS architecture."
category: "Cloud Monitoring"
url: "/amazon-sqs-monitoring/"
layout: "single"
---

I remember the first time I had an opportunity to use a worker queue system.

It seems silly now, but at the time it felt like one of the most innovative technologies in the world. Being able to isolate resource-intensive processes away from the end-user completely changed the way I thought about usability and scalability. While message queues are a widely-used feature in many applications, there are a ton of possible ways to implement them, one of the most popular of which is [Amazon Simple Queue Service](https://aws.amazon.com/sqs/) (SQS).

An Introduction to Amazon SQS Monitoring
----------------------------------------

The beauty of using a message queue, and Amazon SQS in particular, is that it gives you the ability to decouple the individual components of an application by giving them a reliable, agnostic way to communicate with each other. SQS is a highly available service, which means that separate application components are not bottlenecked by each other's availability. This ensures that even when one service goes down, the others are minimally affected.

Despite the advantages SQS offers, it isn't perfect. Nothing is. Things can go wrong, both in-transit and at both ends of the communication stream. One of the most common issues I've seen with message queues is stalled or slow workers. Like any queue, both digital and physical, when a worker gets backed up, the queue stops moving.

Amazon SQS Monitoring
---------------------

While sometimes proper log monitoring can catch this (say, for example, if the worker crashes altogether), at other times it can take a while to detect. The biggest indicator of a stuck queue is an increasing number of pending messages. When a worker stops doing its job, the queue will continue to grow until it is noticed, at which time getting caught up can become very expensive.

Stuck queues aren't the only problem to watch out for. Slow queues can be just as troublesome, but can take a significantly longer time to diagnose. The reason for this is that a slow queue may not grow as quickly as a stuck one, which can make it more difficult to detect when something is wrong.

These are just a few examples of how any standard message queuing system can go wrong. But when something bad happens, what can we do about it? Better yet, how do we identify and resolve problems before they have a significant impact?

With Netuitive's Amazon SQS monitoring integration, staying on top of the health of your SQS queues is incredibly easy. Netuitive's [integrations](/integrations) are easy to install and use, and they pack a powerful punch, giving you incredible transparency into your application architecture.

But, before we get into what we can [monitor with Netuitive](/product), let's first touch on how to set up Netuitive's Amazon SQS monitoring integration.

![SQS Monitoring: AWS Integration](/wp-content/uploads/2017/07/SetUpAWSIntegration-1024x304.png)

To get started with Netuitive's SQS integration, the first thing we need to do is head on over to the "Integrations" tab and click on the "Amazon Web Services" integration.

![SQS Monitoring: Setup AWS Integration](/wp-content/uploads/2017/07/SetUpAWSIntegration2.png)

Integrating[ AWS with Netuitive](/getting-started-netuitive-aws) is a relatively straightforward process, but we first need to configure the appropriate IAM role in AWS. Before moving forward, however, take note of the "Account ID" and "External ID" settings. They will be needed.

Configuring SQS Permissions
---------------------------

IAM stands for Identity and Access Management, and an IAM role is what Netuitive needs to communicate with an AWS account. To set this up, head on over to the Identity and Access Management dashboard within your Amazon Web Services account and click on "Roles" in the sidebar.

![SQS Monitoring: Set IAM Roles](/wp-content/uploads/2017/07/IAMRoles-1024x156.png)

If you haven't set up any IAM roles before, you should see a screen that looks pretty similar to the one above. From here, click on the "Create New Role" button.

![SQS Monitoring: Role Name](/wp-content/uploads/2017/07/Role-Name.png)

Next, we need to select a role type. This part can be confusing, as there is a pretty big list of role types. Netuitive's AWS integration requires a cross-account access role. To select this, drop- down the "Role for Cross-Account Access" section, and select "Provide access between your AWS account and a 3rd party AWS account."

![SQS Monitoring: Establish Trust](/wp-content/uploads/2017/07/Establish-Trust-1024x171.png)

Creating a role for 3rd-party cross-account access requires the Account ID and External ID we took note of above. This setting gives Netuitive's AWS account access to the Netuitive role in our account.

![SQS Monitoring: Attach Policy](/wp-content/uploads/2017/07/AttachPolicy-1024x585.png)

The final step in creating an IAM role is attaching a policy. Netuitive's [AWS integration](/aws-monitoring-best-practices-using-pre-configured-dashboards) only requires read-only access, which is named "ReadOnlyAccess" (obviously) in this case.

![SQS Monitoring: Review](/wp-content/uploads/2017/07/Review.png)

Integrating SQS with Netuitive
------------------------------

Once our new IAM role is ready to go, the role creation wizard will give us a final confirmation page before creating it. It is important here to copy the contents of the "Role ARN" field, as we will need that information to complete the SQS-Netuitive integration.

![SQS Monitoring: Setup AWS Integration](/wp-content/uploads/2017/07/SetUpAWSIntegration2.png)

Going back to the AWS Setup form in Netuitive, take the "Role ARN" we copied above and paste it into the "IAM Role ARN" field. This is essentially the reverse step of putting the Account ID and External ID in the IAM Role field; it tells Netuitive which IAM role it has access to. Finally, we need to select which services we want to monitor using Netuitive. (For the purposes of this demo, I've only checked the "SQS" monitoring type.)

SQS Metrics
-----------

Now that we've set up Amazon SQS monitoring with Netuitive, let's take a look at exactly what metrics we receive from it. If you're new to Netuitive, you can find all of your available AWS metrics under the "Metrics" tab.

![SQS Monitoring Metrics](/wp-content/uploads/2017/07/SQS-Metrics-1024x717.png)

In the case of Amazon SQS monitoring, there are 13 different metrics that can be gathered with Netuitive. I won't go into the details of each one, but let's take a look at the arrival rate and completion rate metrics, and evaluate how they can be used to identify slow queue workers.

SQS Policies
------------

![SQS Monitoring: Queue Falling Behind](/wp-content/uploads/2017/07/SQS-Queue-Falling-Behind.png)

The true power of Netuitive's monitoring solution is [policies](/reduce-alert-multi-criteria-policies). To demonstrate how useful policies are, Netuitive automatically creates an SQS policy for detecting when a queue is falling behind. The gist of this policy---If the queue's arrival rate is more than the completion rate for a sustained period of two hours, then the queue is considered to be falling behind.

While this is just a basic example, you can easily see how those 13 metrics can be used to build incredibly powerful alerts to ensure you are always aware of the health of your message queues. Policies built around things like the total messages in a queue, or the approximate age of the oldest message can be used to quickly identify stuck workers and stale queues.

**Default SQS Dashboard**

![SQS Monitoring Dashboard](/wp-content/uploads/2017/07/SQS-Dashboard-1024x537.png)

In addition to an example policy, Netuitive also creates a [summary dashboard](/devops-dashboard-best-practices) for a high-level view of your SQS queue. This default dashboard shows basic information like metric aggregates, peak message arrival and completion rates, and some basic queue data, but can be updated to provide any information you need based off of the available metrics data.

It is important to note that the Netuitive dashboards are *separate* from policies. While dashboards provide passive data presented in a way that can be used to identify high-level trends over time, policies are rules that can be used for sending alerts when specific events happen.

While the examples provided here are demonstrative by design, the transparency that Netuitive provides into the health of Amazon SQS should be pretty clear. When it comes to infrastructure monitoring, two things are important: data and analysis. And Netuitive's Amazon SQS monitoring integration provides more than enough of both to ensure a healthy and happy system. With some good data and a little bit of foresight, you can easily stay ahead of issues in your application architecture, and ensure that problems are resolved quickly and efficiently.
