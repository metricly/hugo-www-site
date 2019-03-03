---
author: "Vince Power"
date: "2017-03-14"
title: "Agent-Based Monitoring: Why Metricly?"
description: "For real-world production environments, agent-based monitoring is the only way to get detailed visibility and analytics-based insights. Here's why."
category: "Cloud Monitoring"
url: "/agent-based-monitoring/"
layout: "single"
---

The IT world is changing fast. Containers, immutable infrastructure, and software-defined everything are reshaping the way we compute. The practices and technologies that are mainstream today may be thrown out the window tomorrow. Not everything is changing, however. Some best practices and core concepts will continue to carry forward and actually increase in value, even as everything else is reshaped. Agent-based [monitoring](https://www.metricly.com/inside-netuitive-api) is a prime example of one of these long-lasting trends. Even as your infrastructure changes, you can still expect to rely on agents to monitor it.

In this post, I take a look at what makes agent-based monitoring so important, and explain why it will remain crucial even on next-generation infrastructure and technologies.

I Already Use CloudWatch. Why Isn't That Enough?
------------------------------------------------

[![Agent-Based Monitoring: Amazon CloudWatch](https://www.metricly.com/wp-content/uploads/2016/04/integrations-amazon-web-services.png)](https://www.metricly.com/wp-content/uploads/2016/04/integrations-amazon-web-services.png)

CloudWatch is a useful tool, but on their own, built-in monitoring solutions are not enough.

The free CloudWatch tier polls once every five minutes, and the premium (paid) tier polls every minute. CloudWatch currently has just over 100 available metrics it can watch. There are quite a few metrics that will get you started, and give you a feel for how your AWS components are functioning.

But agent-based solutions go much further. They give you:

-   Increased flexibility in creating notification alerts based on custom alarms. For example, Netuitive has a wide variety of [preset policies and alarms](https://help.netuitive.com/Content/Policies/DefaultPolicies/default_policies.htm).
-   Better [out-of-the-box dashboards](https://www.metricly.com/aws-monitoring-best-practices-using-pre-configured-dashboards), which are fed by [analytics](https://hlp.app.netuitive.com/Content/Metrics/Analytics/analytics.htm) based on trends around how the entire solution and infrastructure behave over time. CloudWatch doesn't provide in-depth analytics.

Agentless Monitoring Is More Complex Than It Seems
--------------------------------------------------

You may also be thinking that agentless monitoring is a better approach than agent-based monitoring because there is no additional software to install on all your servers, and you can still use rsyslog to push core system events to a central syslog server.

True. But what if you want more information than just syslog entries? For instance, what if you want to track ongoing CPU and memory usage? You could set up SNMP to be polled, but that is an additional service that is now running, and another port to open inbound to your server. Other monitoring platforms remotely connect via SSH every few minutes, run a few commands and gather the output, like 'uptime', 'free', and 'df.' Plus, things like collecting application logs for analysis via SCP/FTP are not an efficient way to transfer them or process them.

So yes, you could collect detailed metrics using an agentless solution. But in order to get detailed monitoring results, you will end up with more overhead, complexity and tacked-on components than you would if you'd just used a dedicated agent-based monitoring tool.

Areas Where Agent-based Monitoring Excels
-----------------------------------------

Now that we've dispelled some common objections to agent-based monitoring, let's consider where agent-based monitoring tools do really well. They excel in the following areas.

**1\. Polling Frequency**

Many services that offer remote monitoring, like CloudWatch, have preset intervals---often defaulting to five minutes, with options to increase that frequency to as often as once per minute. This is to reduce network congestion and make it manageable from a platform point of view.

Once per minute may seem quite frequent, and it's the default for almost every agent I have ever worked with (from OpenView to Netuitive), but depending on your use case, you may not be catching all the peaks in your CPU and I/O metrics without going to sub-minute intervals (perhaps as often as every 10 seconds). This does add one or two percent to the base load on the server. It is more than worth it if you start to catch 30-second spikes that were previously missed on high-volume systems, especially ones dealing with IoT devices.

**2\. System Statistics**

[![Agent-Based Monitoring: CPU Utilization](https://www.metricly.com/wp-content/uploads/2017/07/Screen-Shot-2017-03-14-at-2.51.05-PM-1024x282.png)](https://www.metricly.com/wp-content/uploads/2017/07/Screen-Shot-2017-03-14-at-2.51.05-PM.png)

As a result of its placement on the server, the agent has access to all of the system metrics, all the time. This allows the agent to report on all aspects of network I/O (in, out, and errors), [CPU utilization](https://www.metricly.com/subtleties-ec2-cpu-utilization), memory usage (free, committed, and reserved), and disk I/O (including I/O waits), and not just what can be easily queried every five minutes by a remote agent running a few commands and reporting back.

**3\. Add-ons for Application, Database, and Middleware Products**

With the agent on the server and always running, vendors offer the ability to extend what the agents report back through pre-built add-ons for common third-party products that send the metrics their customers get the most value out of. There's also the ability to have [custom metrics](https://www.metricly.com/inside-netuitive-api) backed by bespoke scripts that you can use for lesser-known or proprietary technology that is specific to your company, or even your industry.

For Netuitive, it offers out of the box add-ons ("integrations" in Netuitive's terms) for MySQL, RabbitMQ, Docker, and [an ever-growing list](https://www.metricly.com/integrations) of others.

An additional nice feature of Netuitive's agent is that it can [collect data from any StatsD- compatible application or service](https://www.metricly.com/using-statsd-with-netuitive-for-advanced-monitoring) on the server. This can be easily leveraged by your in-house applications to directly report the metrics that matter the most to the monitoring service, without needing to write out to logs and then worry about parsing them later---from claims processed per minute at an insurance company to the average number of steps reported on a fitness tracking application.

**4\. Network and Security Model**

Depending on the type of business, the solution you are supporting will have a wide range of regulatory and security requirements it has to satisfy. Agent-based monitoring has a very large advantage in this area.

For example, agents on a server push data to the central monitoring server. One benefit of this push is that data is delivered in order and on time. Secondly, during the push of data, the agent will only send the data that is required and compress and encrypt it, providing an extra layer of security while reducing your overall traffic and bandwidth requirements for each monitored node. On a platform like [AWS](https://www.metricly.com/getting-started-netuitive-aws) or DigitalOcean, that can lead to actual money saved at the end of the month.

The other benefit of having the server agent push data from a network security profile is that there are less open ports required on the server, and on the inbound network entry point and/or firewall. This may not seem like a big deal, but when your customers' personal information and your corporate secrets are on the line, every entrance (however small and "secure") that you can eliminate makes your solution that much more impenetrable.

Conclusion
----------

So there you have it. Agent-based monitoring is not the *only* way to monitor. In very simplistic scenarios, you might be able to get away without an agent-based monitoring tool. But for large-scale, real-world production environments, agent-based monitoring is really the only way to get detailed, valuable visibility and analytics-based insights in an efficient fashion.
