---
author: "Zachary Flower"
date: "2017-10-17"
title: "ChatOps Primer for Cloud Monitoring and Automation"
description: "Learn how to use chatops to automate your AWS monitoring, and reduce your workload. Get feature-rich notifications about your AWS stack using Metricly."
category: "DevOps"
url: "/chatops-primer-cloud-monitoring/"
layout: "single"
---

For an engineer, multitasking is a necessary part of the job. At any given moment you could be reading an email, debugging an issue, writing code, parsing logs, deploying a new feature, or running a test suite---to name just a *few* things. But just because multitasking is necessary doesn't mean it has to be difficult. ChatOps can help you to multitask better by enabling conversation-driven development.

Rather than managing continuous integration, log analysis, and issue tracking in three disparate toolsets, an automated tool (typically a chatbot) can be used to streamline the most mundane parts of each process in the same real-time chat your team is already using. This post explains what ChatOps is and how to leverage it.

ChatOps. Defined.
-----------------

To better understand the value of ChatOps, let's first think of it from the perspective of DevOps. Where DevOps is the practice of *programmatically* automating and managing operations---Think resources, infrastructure, deployment pipelines (you know, all that pesky stuff code actually *runs on*). ChatOps is the process of *conversationally* automating and managing operations.

By streamlining the monitoring and management of software systems and environments, ChatOps provides an easily accessible interface for controlling software, while also making communication more transparent. This not only helps keep everyone in the loop on the health and status of your application, but also serves to eliminate knowledge silos across your organization. When system automation and operations are done within the context of a group chat room, it's all right there for *everyone* to see. This helps to keep the tools you need to solve problems at your fingertips while you are discussing those problems with members of your team.

Since everyone on your team sees what goes on in the chat room, they are more easily able to learn to complete IT tasks more efficiently. Experts have the opportunity to teach new team members retroactively by performing tasks via an easily reviewable chat log, without having to stop and take time out to explain. ChatOps can also eliminate the need to remember commands you issued, or search through a CLI command history to trace how you or someone else resolved a problem.

ChatOps, Slack, and You
-----------------------

While there are a handful of real-time communication platforms available, one of the most common is Slack. One of the biggest advantages of Slack over other providers is their extensive [public API](https://api.slack.com/slack-apps). With it, you and other third-party vendors can create new applications that integrate directly with Slack, allowing you to display notifications and web-based alerts, invoke complex workflows on external systems from a chat via text-based commands, and create secure system integrations.

One of the most useful functions of Slack's API is the ability to define message buttons so you can easily and deliberately take action from messages within a channel. These actions include---to provide a quick example---two-way integration between Slack and your systems through the buttons that invoke complex workflows, like automated garbage collection.

![ChatOps in Slack Explained](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/ChatOps-in-Slack-Explainedpng-1.png)


ChatOps
------------------------------------------------------------------------

Slack alerts can go beyond text, and vendors such as Metricly offer feature-rich notifications to convey more information. For example, a graph showing Java heap usage quickly outlines a problem as predefined thresholds are crossed, without having to read through the details. In this case, the graph shows just how urgent the situation is.

![Chatops slack notifications in Metricly](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/Chatops-slack-notifications-in-Metricly.png)

Metricly graphical alert in Slack

Metric charts become especially useful with external tools and environments, such as the cloud. This integrates the additional data you need in the form of graphs, and opens the door to new functionality beyond troubleshooting. One cost-savings example is the ability to turn off a metered cloud instance that has been idle for a specified amount of time.

Amazon Web Service (AWS) Monitoring with ChatOps
------------------------------------------------

With Metricly and Slack, you can easily create and integrate Incoming WebHooks to support notifications from web-based applications such as those in AWS. To do this, we first must begin by [connecting Metricly with Slack](https://docs.metricly.com/alerts-notifications/notifications/notifications-slack/), and then configure it to post events to the appropriate channels. Direct integration with AWS is enabled by adding a Metricly role in the *AWS Identity and Access Management (IAM) Roles* configuration.

![ChatOps setup on AWS](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/ChatOps-setup-on-AWS.png)

AWS Metricly IAM role

Setting up an AWS integration is a relatively straightforward process. First, you begin by choosing the pre-built AWS integration; next, you create an AWS read-only role (see above), and finally, you select the services you wish to monitor and control.

![Metricly AWS Setup](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/Metricly-AWS-Setup.png)

Metricly AWS setup

While this integration will be enough for 90% of standard use cases, if needed, you can also create a custom integration using Metricly's API and JSON to perform application monitoring (such as the Java heap example above), or even CPU monitoring:

![Metricly Chatops Custom Integration](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/Metricly-Chatops-Custom-Integration.png)

Metricly custom integration

The Metricly [Ingest API Documentation](https://docs.metricly.com/api/api-metrics/#create-a-data-sample) describes how to define a custom integration data sample to ingest into Slack or other ChatOps tools. For more manual interactions, Slack also allows you to define what are called [Slash Commands](https://api.slack.com/slash-commands) to trigger actions. By integrating various tools (Metricly, Slack, and AWS, for example), you can trigger commands that can be sent to an application or service. All you need to do is define the Slack command, the URL where you host the integration (inside Metricly, for instance) and a custom icon as a visual cue within the Slack channel. You then add your new Slack commands to a custom Slack app to complete the integration.

Taking ChatOps Further
----------------------

One pleasant ChatOps side effect is how it eases message fatigue and other challenges related to the organization of information. The advantage of using chat over email is that it encourages everyone to take part in a constant stream of useful information as it relates to your systems. The downside to communicating synchronously, however, is that people may turn their attention elsewhere and miss important bits of real-time information as messages scroll down the screen. Fortunately, a combination of channel reorganization and alert tuning can go a long way towards mitigating this problem.

This is because the chatbot itself effectively becomes the interface engineers interact with. Regardless of how individual teams and members use their chat tool (e.g. via the cloud, installed locally, mobile or desktop, etc.), ChatOps helps to integrate all of them. In another example, mobile collaboration can be naturally integrated into your team discussions via a combination of the rich mobile applications available for both Slack and HipChat, their messaging APIs, and vendor tools such as Metricly. Whether you use Slack, HipChat, or a mixture, ChatOps is an abstraction that levels the playing field, enhancing collaboration while offering its own set of automated tasks and alerts.

Metricly currently offers [over 65 pre-built integration points](https://docs.metricly.com/integrations/) with external tools and systems. This includes very specific integrations (such as with Slack, Chef, Docker, GitHub, and more) and broader integrations, such as with AWS, Java, Red Hat, Windows, and so on. With these, you can gather a wide range of full-stack metrics, including end-user browser statistics, Java VM and application instrumentation, OS-level monitoring, and custom application data gathering that you define.

While the benefits are pretty self-evident, ChatOps requires some work for the integration between the group chat facility (e.g. Slack) and the rest of your infrastructure and processes. Some use repositories such as Git, scripting languages, or even products such as Amazon Echo for voice input. For most, the best approach is to use a standard interface for integration, such as JSON or XML. Additionally, a pre-packaged solution such as Metricly, [which offers hooks](https://docs.metricly.com/api/api-webhooks/) to integrate with common IT systems through standard interfaces, is often the best way to start.

When it comes to ChatOps, Metricly's solution set is the culmination of years of [advanced machine learning](/machine-learning-monitoring-alerts) expertise, deployed as a SaaS offering, and is targeted at the rapidly growing market of public cloud computing. Machine learning helps to provide [smart alerts and monitoring](/reduce-alert-multi-criteria-policies), alerting you to the most important events first, based on past occurrences. Analytics and intelligence inform you of future issues before they occur, forecast future needs based on growth patterns, and reduce noisy alerts that result in wasted time. By combining performance, capacity, and cloud cost analysis, Metricly learns the behavior and workload patterns of your environment to optimize your resource utilization, reduce your cloud spending, and identify performance anomalies that matter to your business.
