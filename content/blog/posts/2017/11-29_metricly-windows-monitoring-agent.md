---
author: "Mike Mackrory"
date: "2017-11-29"
title: "Discover the Metricly Windows Monitoring Agent"
description: "Learn about the Metricly Windows monitoring agent, and discover how to use the agent to push metric data into the platform."
category: "Product Updates"
url: "/metricly-windows-monitoring-agent/"
layout: "single"
---

When you're supporting computer systems, insights into what is happening within the system are crucial in the quest to ensure that everything is running efficiently---with warnings if conditions begin to degrade. If you're supporting Linux-based systems, you use CollectD or a similar metrics agent to monitor the machine and to report key metrics about the performance of the instance, the state of the system, and your applications themselves. But if you're trying to monitor Windows, Collectd isn't an option. There is, however, another solution: the [Metricly Windows monitoring agent](https://www.metricly.com/support/integrations/windows).

In this article, I'll introduce you to the Metricly Windows monitoring agent, and show you how to use the agent to push metric data into the [Metricly platform](https://www.metricly.com/product). I'm also going to walk you through why using the Metricly platform will make your jobs as an engineer significantly easier through Metricly's [preconfigured dashboards and policies](https://www.metricly.com/aws-monitoring-best-practices) to monitor Windows.

Finally, we'll talk about how you can customize each of those to provide a level of comfort with your support duties allowing you and your team to sleep peacefully at night, and focus on developing better applications during the day.

About The Windows Monitoring Agent
----------------------------------

When the folks at Metricly wanted to provide a Windows monitoring agent for customers, they began a search for an existing agent that they could build functionality around. After months of searching, experimenting and testing they decided to base their agent on the CollectdWin agent.

Collectd, the de facto industry leader in system statistics collection, is not supported on Windows systems. To rectify this, the developers of [CollectdWin](https://github.com/bloomberg/collectdwin) developed it as a Windows based alternative to Collectd. The developers and maintainers of this open source project are technologists associated with Bloomberg. If you haven't heard of Bloomberg, or are unsure of why they are a credible source for technology, consider this:

###### *"We operate one of the largest private networks in the world, and it powers and connects our more than 325,000 subscribers in over 180 countries. More than 60 billion market ticks pass through the Bloomberg Professional service each day."*

*<https://www.techatbloomberg.com/about/>*

Metricly forked the CollectdWin project and added additional functionality beyond the system performance counters for collection and monitoring. Since beginning development on their version of the agent in mid-2015, the engineers at Metricly have added:

-   The collection of non-numeric values in addition to numeric values already collected
-   Plugins to read in Windows events and attributes
-   Plugins to write to both the Metricly platform and StatsD

License For Customization, Prerequisites And Compatibility
----------------------------------------------------------

The Metricly Windows agent is written in C# and is licensed under the Apache License, Version 2.0. The license allows for commercial use, modification and distribution, provided the original license and copyright notice remain intact.

The agent can be installed and executed on the following editions of Windows.

-   Windows 7
-   Windows 8
-   Windows 8.1
-   Windows Server 2012
-   Windows Server 2012 R2

Older versions of Windows and Windows Server may also be compatible, provided you install version 3.5 or 4.5 of the .NET Framework.

The agent allows for the [collection of custom metrics](https://www.metricly.com/support/api/metrics) in addition to those which are gathered natively. However, if you need additional customization, you can download the source code, and build a custom version of the agent to meet your needs.

Metrics Gathered by the Agent
-----------------------------

The Metricly agent supports the most common Windows services natively, including Microsoft SQL Server, IIS and .NET.

The [metrics collected](https://www.metricly.com/support/integrations/windows-metrics) include a selection from each of the following key areas:

-   Logical Disk
-   Memory
-   Network Interface
-   Physical Disk
-   Processor
-   System
-   IIS Monitoring
-   .NET Framework
-   SQL Server

In addition to those collections of metrics, the Metricly platform generates an additional collection of metrics, computed from combinations of the imported metrics to provide an additional level of insight into the state of the system.

Now, I enjoy talking about metrics as much as the next guy, but if we want to get to know the Metricly Windows agent, the best way is to experience it.

Why Use Metricly to Monitor Windows?
------------------------------------

Let's start by talking about why you should consider Metricly as a tool to collect, analyze and help you monitor Windows data.

Metricly is not only a comprehensive monitoring and analytics platform---They have also invested heavily in providing tools to leverage your data and provide you with dashboards, anomaly detection and policies designed to alert you to problems before they become critical.

All of those tools are available for you to use the instant you set up an account on their system and configure an agent to import your metrics. If you don't already have an account, you can sign up for a [21-day free trial here](https://www.metricly.com/signup).

With minimal effort, you'll be able to access recommendations to optimize cost, performance, and reliability, and make decisions based on easy-to-understand and actionable data. To illustrate what I mean, let's spin up a new AWS EC2 Windows Instance, install the agent, and see what we get by default.

Installation and Configuration
------------------------------

Before following the steps I've described below, I created a new t2.micro instance, using the Microsoft Windows Server 2016 Base AMI. Once the instance was initialized, I connected using RDP from my local workstation.

![Starting with a Clean Slate: Microsoft Windows Server 2016](https://www.metricly.com/wp-content/uploads/2017/11/1-Microsoft-Windows-Server-Metricly.png)

Starting with a Clean Slate: Microsoft Windows Server 2016

With an active connection to a clean Windows instance, return to your local workstation and log into your Metricly account. Navigated to the **Integrations** page and select **Windows** from the list of available integrations.

![](https://www.metricly.com/wp-content/uploads/2017/11/2-Metricly-Windows-Inetgration.png)

Windows Integration

You'll be taken to the Windows Integration page, which will include your Metricly API key and a personalized install command. At the top of the page, you'll notice a couple of toggle controls.

The first option, **Packages**, initiates the creation of preconfigured dashboards and policies when you install the integration. You'll want to ensure you have this enabled.

The second option, **API Key**, will become enabled once you have the integration successfully installed and running on your target machine.

![Monitor windows with metricly](https://www.metricly.com/wp-content/uploads/2017/11/3-Metricly-Windows-Agent-Installation.png)

Personalized Agent Installation Instructions

Starting with step one, navigate to the list of agent distributions and select the latest version for your particular instance type. It is important to choose the most current version of the agent to ensure that you get the latest updates and enhancements to the agent.

Copying the URL, return to your RDP session and open Internet Explorer. Paste the URL in, and download the MSI file.

Once you have downloaded the file, open up a **Windows PowerShell** terminal, change to the Downloads folder, and run the command provided in step 3.

![Executing the Install Command for windows the monitoring agent in PowerShell](https://www.metricly.com/wp-content/uploads/2017/11/4-Executing-the-Install-Command-in-PowerShell.png)

Executing the Install Command in PowerShell

If you don't have a proxy enabled in your environment, you can skip step 4, but if your environment includes a web proxy, you can follow the instructions [here](https://www.metricly.com/support/integrations/windows#proxy-configuration) to configure the proxy.

Once the agent is installed and the optional step of configuring the proxy is completed, you just need to start the service.

Open the **Windows Task Manager** and click on the **Services** tab. You'll be looking for a service called *CollectdWinService* or a variant depending on the version of the agent installed. Right-click the service and select **Start**. If you need to make additional changes to the configuration of the agent, you'll want to come back to the task manager and restart the service using the same steps.

![Starting the windows monitoring agent in Task Manager](https://www.metricly.com/wp-content/uploads/2017/11/Starting-the-Agent-in-Task-Manager.png)

Starting the Agent in Task Manager

Exploring the Preconfigured Dashboards and Policies
---------------------------------------------------

It will take a few minutes before metrics will begin to flow from the instance to Metricly for analysis. Navigate to the **Metrics** page, and from the **Quick Filter** option for Windows, select **All Windows Metrics**.

![Windows Quick Metrics Filter](https://www.metricly.com/wp-content/uploads/2017/11/Windows-Quick-Metrics-Filter.png)

Windows Quick Metrics Filter

And just like that, you'll see statistics for memory and CPU usage already being collected and analyzed.

![Monitor Windows WIth Basic Metrics for CPU and Memory Usage](https://www.metricly.com/wp-content/uploads/2017/11/Basic-Metrics-for-CPU-and-Memory-Usage.png)

Basic Metrics for CPU and Memory Usage

Let's navigate over to the Inventory page, and have a look at what other metrics are available. A list of all available sources will appear on the left of the screen. I had some other AWS resources visible on mine, but was able to identify my particular instance by its AWS name. Clicking on it, you'll be able to see a summary of the available metrics, and a link to ***View all Metrics for this Element****.*

![Inventory Summary for a Windows Element](https://www.metricly.com/wp-content/uploads/2017/11/Inventory-Summary-for-a-Windows-Element-e1511792005524.png)

Inventory Summary for a Windows Element

For a different view of these metrics, let's navigate to the **Dashboards** page. You'll observe that you have a new dashboard available called ***Windows Summary***, created by research@metricly.com. Let's check it out and see what it displays.

![Preconfigured Dashboard for Windows Servers](https://www.metricly.com/wp-content/uploads/2017/11/Preconfigured-Dashboard-for-Windows-Servers.png)

Preconfigured Dashboard for Windows Servers

The default dashboard includes:

-   Count of servers
-   Average processor times across all servers
-   Average count of system processes
-   Average percentage of logical disks which are free
-   Any events which have occurred in the time frame (one hour)
-   Top five instances with highest CPU usage (one shown)
-   Disk usage by instance (one shown for both disk reads and disk writes)

Let's leave this dashboard and navigate to the **Policies** page to see what other preconfigured tools we have by default. If you scroll down, you should see a list of related policies to monitor Windows.

![Policies Configured Automatically for Windows Instances](https://www.metricly.com/wp-content/uploads/2017/11/Policies-Configured-Automatically-for-Windows-Instances.png)

Policies Configured Automatically to monitor Windows Instances

If we click into one of these policies, we can learn more about it, and set up a notification to alert us when a critical error is encountered. We'd like to be notified if the server experiences unusually heavy CPU Load, so let's click on ***Windows -- Heavy CPU Load***. This Policy has a red dot indicating that it is a critical event, rather than an informational event.

This particular policy illustrates the power of Metricly very nicely. We all know that what indicates a problem for one instance running a particular service might be expected for another instance running an entirely different service. You can set specific thresholds as conditions, but the approach Metricly takes is to look for anomalies and conditions which occur outside the expected range of values. For this policy, let's look at the description.

*High CPU values by themselves are not always a good indicator of a server being under heavy load. This policy looks for upper deviations not only in CPU but in run queue size (system.processor_queue_length) and context switches as well. Taken together, upper deviations in all three of these key metrics are a good indication of an overloaded server.*

If you click on the Conditions tab, you can see how these conditions are configured for this particular policy.

Clicking on the Notifications tab, you may **Add a Notification**. [Monitoring Notifications](https://www.metricly.com/support/events/notifications) can be sent via email, Slack, HipChat, SNS, and WebHook, among others. A notification can take the form of an actual notification to a real person, or you can use the Webhook option to invoke a call to an external service to automatically correct a specific situation.

Organizing AWS Data
-------------------

Finally, if you host instances in the AWS Cloud, an additional benefit of Metricly is that the agent includes tag information in the metrics collected. By including these tags, you can filter your metrics by tags and by attributes such as region, availability zone, and state. If you would like to know more about tagging AWS instances, the [Best Practices](https://www.metricly.com/best-practices-tagging-aws-instances) guide is an excellent place to start.
