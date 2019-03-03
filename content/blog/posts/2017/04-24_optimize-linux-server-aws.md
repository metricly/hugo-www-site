---
author: "Brena Monteiro"
date: "2017-04-24"
title: "How to Optimize Linux Server Performance on AWS"
description: "To optimize Linux server performance, you need to consider two main factors. Find out what they are and how they impact your Linux servers."
category: "Cloud Cost Management"
url: "/optimize-linux-server-aws/"
layout: "single"
---

Linux itself may be (usually) free, but the server resources you host it on are not. For that reason (not to mention maximizing application performance and stability), it's essential to make sure your Linux server is consuming resources as efficiently as possible.

To optimize Linux server performance, you need to consider two main factors. First, you'll want to consider which resources are not being fully utilized, and could therefore be scaled back to save money and maintenance overhead. Second, you'll need to consider which resources need to be increased in order for critical apps and services to run faster.

In this article, we'll use[ Netuitive](https://www.metricly.com/product) to collect data and analyze it in order to optimize Linux server performance. Specifically, we'll focus on optimizing a virtual Linux server hosted on AWS.

Prerequisites: Setting Up Accounts and a Linux Server
-----------------------------------------------------

To start collecting data, we first need to set up an AWS account host on our server, and a Netuitive account. In the AWS account, we need to create an IAM Role and then associate it with Netuitive. You can follow [these steps](https://help.app.netuitive.com/Content/Integrations/aws.htm) to create and associate it.

You also need to set up a Linux server to monitor on AWS, of course. Feel free to use any flavor of Linux that you like; the instructions below apply to any Linux-based OS. For the purposes of this article, we'll use an AWS instance with Ubuntu 16.04.2 LTS, the latest version available on AWS.

Once your Linux server is set up, you need to install Netuitive's Linux integration. You can do this by following [these simple steps](https://help.netuitive.com/Content/Integrations/linux.htm). After installation, you'll start receiving data metrics about virtual memory statistics, network, memory, load average, heartbeat, disk usage, disk space and CPU in Netuitive.

Netuitive has a [customized dashboard](https://www.metricly.com/netuitive-dashboard-upgrades) dedicated to showing data collected from your Linux server on EC2. In this dashboard, you can monitor the data sources outlined above---network performance, CPU, and so on. You can also create customized metrics not available in Netuitive by default.

EC2 Metrics Aggregation
-----------------------

The default metrics in AWS EC2 show values like utilization of CPU, disk, and network, as well as information about status checks. You can also monitor the [credit usage of each CPU](https://www.metricly.com/subtleties-ec2-cpu-utilization), and check when you are getting near the limits defined on AWS by each type of instance. The image below shows the visualization of some EC2 Metrics. With this information, you can tweak the AWS ELB based on whichever you choose to monitor.

![Optimize Linux: EC2 Metric Aggregation](https://www.metricly.com/wp-content/uploads/2017/07/EC2-Metric-Aggregation-1024x509.png)

Linux Metrics
-------------

Now that we've gotten an overview of [monitoring a server on AWS](https://www.metricly.com/getting-started-netuitive-aws), let's take a look at some specific metrics you can collect and monitor in Netuitive to help get the most performance out of your Linux servers.

**cpu.total.idle**

A key metric to monitor is cpu.total.idle. This will tell us the percentage of the processor's capacity that isn't being used. If this metric is near zero for a long period, you'll want to figure out what is causing the CPU to constantly run. It could be an under-provisioned server, or a bug in your software.

If, alternatively, cpu.total.idle frequently surpasses 100%, then it's a pretty safe bet that your server capacity is being underutilized. In that case, you should downgrade the cores of your EC2 instance in order to save money.

**cpu.total.iowait**

Another metric worth tracking closely is cpu.total.iowait, which measures process duration. It's normal to see some elevation of this metric, as long as the elevated period is short and the metric returns to its baseline quickly. If this metric stays unusually high for a long time, however, it probably means that there is either a problem with the process in question, or possibly an issue with a disk (since slow IO could result from problems writing to disk).

Keep in mind, by the way, that while disk issues are not often a concern on AWS (we're talking about the cloud here, after all, and disks are supposed to fail over automatically), it's still always possible that you have a filesystem issue getting in the way of reliable disk writes.

The image below shows cpu.total.idle, cpu.total.iowait and the [critical events that Netuitive highlights](https://www.metricly.com/how-to-leverage-machine-learning-for-proactive-monitoring-alerts) when CPU threshold is exceeded. In this case, the critical events were generated by a processor that was running a long task; as you can see, the idle metric in this example is near zero over a long period of time. Netuitive is telling you you have a problem and should fix it.

 ![Optimize Linux: CPU IO Wait](https://www.metricly.com/wp-content/uploads/2017/07/CPU-IO-Wait-1024x582.png)

How to Use Netuitive to Optimize Linux Server Performance
---------------------------------------------------------

Above, we learned how to view data about specific metrics in Netuitive. But how can you translate that data to action in order to optimize your server?

With the data collected from the Linux server, as well as the AWS EC2 environment metrics, you can see in detail where bottlenecks on the server lie and which resources are being underutilized. Each Linux metric offers multiple options for retrieving more aggregated data that will help to identify where exactly to intervene in order to optimize performance.

The [Utilization Boxplot Report](https://www.metricly.com/product/dashboards-and-reports) helps to identify what resources could be optimized by observation of the median utilization of each element. The *netuitive.linux.cpu.total.utilization.percent* utilization metric shows that the minimum, the lower quartile, the median, the upper quartile, and the maximum CPU has been used in a selected time period. In the image below, we can observe that almost 70% of the time, our server, *linux-ubuntu-aws-ec2*, has reached the upper quartile of CPU time. In cases like this, we need to add more processors to this Linux server instance because the current configuration is not enough to guarantee uptime.

![Optimize Linux Server Performance](https://www.metricly.com/wp-content/uploads/2017/07/Optimize-Performance-1024x303.png)

Another useful resource provided by Netuitive is Policies. In AWS EC2, [you can use policies](https://www.metricly.com/reduce-alert-multi-criteria-policies) to monitor elevated CPU activity and network activity. This is particularly helpful when your Linux server is a web server, because in this scenario, an increase in processing normally accompanies an increase in traffic---but when you see an increase of one of these metrics in the absence of the other, that could be a sign of a problem.

Netuitive also allows you to define notifications to be sent when a policy reaches a predetermined condition. These notifications can be sent by email or webhook, or can be integrated with ChatOps apps. You can [read more about all of the available default policies](https://help.netuitive.com/Content/Policies/DefaultPolicies/default_policies.htm) in the documentation. The image below illustrates one of the available visualizations of policies, showing the events that were generated when the policy conditions were reached.

![](https://www.metricly.com/wp-content/uploads/2017/07/Events-1024x568.png)

Conclusion
----------

Making the most of your Linux virtual server on AWS EC2 requires optimizing server performance so that your server remains stable and highly available. At the same time, you also want to be cost-efficient by avoiding over-provisioning of the server.

Netuitive is a [complete monitoring tool](https://www.metricly.com/evaluate-monitoring-strategy) that helps you achieve both goals. Netuitive supports specialized design to help you understand what's happening under the hood of your Linux server, and how it relates to common use cases for a Linux server environment.
