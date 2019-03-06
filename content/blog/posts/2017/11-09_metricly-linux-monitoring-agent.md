---
author: "Mike Mackrory"
date: "2017-11-09"
title: "Exploring Metricly’s Linux Monitoring Agent"
description: "A deep dive on Metricly's Linux monitoring agent, deployment options, and how to effectively gather metrics creating a robust monitoring setup."
category: "Product Updates"
url: "/metricly-linux-monitoring-agent/"
layout: "single"
---

Software engineers can only solve problems they know about. And they can only know if their proposed solutions actually resolve problems by being able to see and measure the results. Timely access to data and the ability to analyze and understand that information is critical to success. The capacity to provide solutions which help in this is what makes the products offered by organizations like Metricly so valuable. In this article, we're going to take a deep dive into the Linux monitoring agent used by [Metricly](/product) to gather key metrics.

We're going to look at the origins of the agent and discuss how to extend the agent and deploy it onto your Linux machines. We'll look at adding readily available collectors to gather metrics from a variety of applications, as well as [custom metrics](/enable-aws-custom-metrics). Finally, we'll look at how Metricly compiles and organizes this data into preconfigured dashboards and provides you with the tools to debug, [detect anomalies](/what-is-anomaly-detection), and ensure that your applications are running smoothly without needing to keep an eye on them constantly.

History of the Metricly Linux Monitoring Agent
----------------------------------------------

The Metricly Linux monitoring agent is a fork of the widely adopted Diamond agent. Diamond is a Python daemon which gathers metrics from the machine which it is running on. System details which are collected include:

-   CPU Usage
-   Memory Usage
-   Network Traffic
-   Disk Usage

The Diamond project itself is open source and hosted on GitHub at: <https://github.com/python-diamond/Diamond>. Written in Python and implementing an API means that the agent can be easily extended to gather metrics from almost any source.

The Metricly fork, named netuitive-diamond, is hosted at: <https://github.com/Netuitive/netuitive-diamond>. The project is an integral part of the Netuitive Linux Agent Omnibus project, through which the netuitive-diamond project is combined with other libraries to create a solution which users can deploy on different Linux platforms.

The Metricly agent contains all the necessary libraries to allow for rapid integration into Metricly's platform, reducing the complexity of the process users need to follow to import their metrics for analysis.

Why Metricly?
-------------

Before we continue with the different deployment options, extensions, and explore ways to analyze and expose your data, we need to talk about why you should consider Metricly as a tool to collect, analyze and help you monitor your data.

Metricly is not only a comprehensive monitoring and analytics platform---They have also invested heavily in providing tools to leverage your data and provide you with dashboards, anomaly detection and policies designed to alert you to problems before they become critical.

All of those tools are available for you to use the instant you set up an account on their system and configure an agent to import your metrics. If you don't already have an account, you can sign up for a [21-day free trial here](/signup).

With minimal effort, you'll be able to access recommendations to optimize cost, performance, and reliability, and make decisions based on easy-to-understand and actionable data.

Linux Monitoring Agent Installation
-----------------------------------

Metricly provides detailed instructions for [installing the Metricly Linux monitoring agent](https://docs.metricly.com/integrations/linux) on your server. They walk you through the process of downloading, installing, and configuring the agent with additional information about Docker container installation, troubleshooting, and upgrading.

Installing the Linux monitoring agent on a couple of servers is the perfect way to see what the agent can do and let you experiment with what metrics are available. To fully appreciate the value of what the agent can do and how Metricly can analyze and report on data, however, you need to have the agent deployed on all machines in your deployment. In the past, the Diamond agent has been successfully installed across [a thousand worker nodes, reporting three million data points each minute](https://answers.launchpad.net/graphite/+question/178969), so it's very scalable if you have a system to handle it.

If you're going to deploy the agent at anything approaching that scale, you're going to need to automate the installation of the agent. Below are links to playbooks, cookbooks and other instructions for several types of scripted installation of the agent.

-   Ansible -- <https://github.com/Netuitive/ansible-netuitive-agent>
-   Chef -- <https://github.com/Netuitive/chef-netuitive>
-   Salt -- <https://docs.metricly.com/integrations/saltstack>

Extending the Agent to Gather Additional Metrics
------------------------------------------------

The Linux agent will collect a plethora of metrics from your system which can be useful in troubleshooting, monitoring performance, and identifying potential problems with your application.

If you want to gather additional metrics from your applications, there are two options available to collect those extra data points.

Your first choice is to find one of the Integrations that Metricly has developed and provides on their site. An overwhelming benefit of this approach is that any configuration, including access keys, account IDs and the like are included as part of the scripts used in the installation. You can access a full listing of the Integrations available on the [Integrations page](https://docs.metricly.com/integrations/) in the Help Documentation.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/11/Screen-Shot-2017-11-08-at-2.43.24-PM-1024x642.png)

Metricly Integrations Page

Your second choice is to extend the agent with one of many collectors which have been developed for different applications. The [metricly-diamond project](https://github.com/Netuitive/netuitive-diamond/tree/master/src/collectors) contains more than 125 collectors, including the following popular packages:

-   Docker
-   ElasticSearch
-   Hadoop
-   Apache
-   MongoDB
-   NGINX

You can view all of the collectors by visiting: <https://github.com/Netuitive/netuitive-diamond/tree/master/src/collectors>

Collecting Custom Data
----------------------

If you've been involved in monitoring, DevOps, or development for the cloud, you've probably already heard about the StatsD daemon developed at Etsy. The Metricly Linux agent includes a StatsD server so that you can implement the StatsD client library in your application, and your custom metrics will be collected by the agent, together with all the system data.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/11/Screen-Shot-2017-11-08-at-3.01.17-PM.png)

The Metricly documentation explains how to [configure the StatsD integration](https://docs.metricly.com/integrations/metricly-statsd) to report metrics into your account- if you would like to know more about the inclusion of StatsD within the Metricly Linux Agent, you can find that information, including examples in the support documentation.

Leveraging the Power of Metricly
--------------------------------

Remember back at the beginning of this article when we talked about all the advantages of using Metricly to collect your data? Let's explore some of those now.

To illustrate the ease of setup, I have yet to include the Linux agent on any instances in my Metricly account. I created an EC2 instance in AWS and started a small web service on that instance.

I then [logged into my Metricly account](https://app.netuitive.com/#/login), navigated to [Integrations](https://app.netuitive.com/#/integrations), and clicked on the Linux integration. (Or you can view in our [public demo environment](https://public.netuitive.com/#/integrations).)

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/11/linux-integration-e1510174373579-300x122.png)

The Linux Integration displays my API KEY and provides me a command to run on the instance in question. The screen is shown below, without my private API KEY of course!

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/11/installing-linux-agent.png)

Install and Configuration Information for the Linux Agent

If I navigate to the [Dashboards page](https://app.netuitive.com/#/dashboards/management) in the Metricly app ([view in public demo](https://public.netuitive.com/#/dashboards/management)), I have a dashboard available called ***Linux Summary***, created by <research@metricly.com>. Let's check it out and see what I get. Before looking at the dashboard, I generated a few calls to the web service. Below are the results, without any configuration other than that mentioned above.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/11/linux-dashboard.png)

Preconfigured Dashboard for Linux Servers

The default dashboard includes:

-   Count of servers
-   Average bytes sent and received through the network connection across all servers
-   Average bytes which were written to and read from disk across all servers
-   Any events which have occurred in the time frame (one hour)
-   Top five instances with highest CPU usage (one shown)
-   Top five instances regarding memory usage (one shown)
-   Network usage by instance (one shown for both network traffic in and network traffic out)
-   Disk usage by instance (one shown for both disk reads and disk writes)

Let's leave this dashboard and navigate to the [Policies page](https://app.netuitive.com/#/policies) to see what other preconfigured tools we have by default. ([View in public demo](https://public.netuitive.com/#/policies).) If you scroll down, you should see a list of Linux-related policies.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/11/automatic-linux-policies.png)

Policies Configured Automatically for Linux Instances

If we click into one of these policies, we can learn more, and set up a notification to alert us when a critical error is encountered. Let's click on ***Linux -- CPU Threshold Exceeded***. This policy has a red dot indicating that it is a critical event, rather than an informational event.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/11/edit-policy-in-metricly.png)

View Details and Editing a Critical Event Policy

Clicking on the Notifications tab, you may **Add a Notification**. Notifications can be sent via email, Slack, HipChat, SNS, and WebHook, among others. A notification can take the form of an actual notification to a real person, or you can use the Webhook option to invoke an AWS Lambda or other web service to automatically correct a specific situation.

Organizing AWS Data
-------------------

Finally, if you host instances in the AWS Cloud, an additional benefit of Metricly is that the agent includes tag information in the metrics collected. By including these tags, you can filter your metrics by tags and by attributes such as region, availability zone, and state. If you would like to know more about tagging AWS instances, the following [Best Practices](/aws-tagging-best-practices/) guide is an excellent place to start.
