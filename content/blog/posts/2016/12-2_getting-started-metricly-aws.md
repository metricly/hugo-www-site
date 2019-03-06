---
author: "Steve Tidwell"
date: "2016-12-02"
title: "Getting Started with Metricly and AWS"
description: "Metricly gathers all of your AWS services into easy-to-use monitoring dashboards so you can have better insight into your application stack."
category: "DevOps"
url: "/getting-started-metricly-aws/"
layout: "single"
---

Monitoring multiple services and hosts on AWS and correlating events between them can be time consuming and difficult. Metricly can help by gathering all of your AWS services into easy-to-use-dashboards so you can have better insight into your application stack.

Recently, I was given an introduction to Metricly by Bob Farzami, CEO and Co-Founder of Metricly, who invited me to share my experience as an outside perspective. In this post, I'm going to give a high-level overview of how to get started with Metricly to monitor AWS, and cover a few of the basic features available when you initially set it up.

Overview
--------

Metricly provides multiple integrations to monitor your stack, including integrations with Linux, MySQL, Nginx, and Hadoop, or other status and monitoring software such as Icinga, StatsD, and collectd.

In this case, we're going to focus on using the Amazon Web Services integration to monitor a small production stack on EC2 that is also using Elastic Load Balancer (ELB) and Elastic Block Store (EBS).

Getting Started
---------------

To get started, first and foremost read the [Metricly Overview page](https://www.metricly.com/netuitive-overview) and watch the introductory video. It's only about six minutes and will give a high-level review of what's possible with Metricly.

Next, you'll want to sign up for a 21 day free [trial account](https://www.metricly.com/signup). Once the required fields are filled out and you click "Sign Up," you will receive a verification email.After you have your trial account created, review the introductory "[Where to Start" slideshow](https://hlp.app.netuitive.com/Content/where_to_start.htm) to get going.

Then, after activating your Metricly account and logging in via <https://app.netuitive.com>, you will be presented with a helpful tutorial explaining the steps needed to set up a new datasource. Each of the Metricly menu options presents a similar tutorial outlining how each feature works.

If you have any questions about how to set up a particular integration or other feature, you can find answers on the [Metricly help page](https://help.netuitive.com/Content/home.htm). For our purposes, we will be referencing the AWS integration [documentation](https://help.netuitive.com/Content/Datasources/Netuitive/aws.htm). It is strongly suggested that you review this documentation *prior* to beginning setup of your new integration. This can save you from having to troubleshoot potential problems a bit later down the road.

Setup
-----

Now that you've logged in, if you aren't immediately presented with the list of integrations available with Metricly, click *Integrations* from the menu bar at the top of the page. Next, click *Amazon Web Services* from the list.

At this point, you will want to log in to your own Amazon Web Services dashboard in a separate tab. It is suggested that you use the [Installation Via IAM Role instructions](https://help.netuitive.com/Content/Datasources/Netuitive/aws.htm#installation-via-iam-role) to configure the integration.

For this article, I created a [Read Only Role (with full permissions)](https://help.netuitive.com/Content/Datasources/Netuitive/aws.htm#creating-a-read-only-role-with-full-permissions). This will allow us to monitor all of the AWS services that Metricly supports. If you wish to limit the permissions your new IAM role has available to monitor your AWS infrastructure, consider using the [Creating a Read Only Role (with limited permissions)](https://help.netuitive.com/Content/Datasources/Netuitive/aws.htm#creating-a-read-only-role-with-limited-permissions).

The initial setup is fairly straightforward and it took me about 10 minutes to create an AWS IAM role and connect Metricly to our AWS infrastructure using the Metricly AWS documentation. When creating the integration, I selected EC2, EBS, and ELB, as shown in the image below. Once all of the fields are filled out, click *Save*.

[![aws-setup](https://www.metricly.com/wp-content/uploads/2017/07/AWS-Setup.jpg)](https://www.metricly.com/wp-content/uploads/2017/07/AWS-Setup.jpg)

Dashboards
----------

Metricly provides a default set of [dashboards to help visualize your data](https://help.netuitive.com/Content/Dashboards/dashboards.htm?Highlight=dashboards) once an integration has been created. To access your dashboards, click *Dashboards*, then click *All* on the menu bar at the top of the page.

You can favorite a particular dashboard you frequently access by clicking the star icon to the left of the dashboard name.

To start, we will be looking at the *AWS Overview* dashboard, as shown below.

[![awsdashboards](https://www.metricly.com/wp-content/uploads/2017/07/awsdashboards-1024x517.png)](https://www.metricly.com/wp-content/uploads/2017/07/awsdashboards.png)

### EC2

The widget on the top left shows aggregated metrics for our EC2 instances. In this case, there are seven hosts being monitored. There are four metrics available in this widget:

-   *avg(avg(aws.ec2.cpuutilization))* -- This indicates the average CPU usage across the monitored EC2 instances as a percentage.
-   *avg(avg(aws.ec2.networkin))* -- This is the average number of bytes *received* by all network interfaces across the monitored instances.
-   *avg(avg(aws.ec2.networkout))* -- This is the average number of bytes *sent* by all network interfaces across the monitored instances.
-   *avg(avg(netuitive.aws.ec2.disktotalops))* -- This is the total number of read and write operations against the ephemeral disks of the monitored instances. As the infrastructure we are currently monitoring only uses EBS volumes and not ephemeral disks, it is expected to be zero in this case. Your use case may vary.

The widget on the upper right shows the five instances with the highest CPU Utilization. As can be seen from the graph, one of our monitored instances is showing somewhat higher CPU Utilization than the others. You can hover over the graph and a popup will appear indicating each of the monitored instance names and their respective utilization.

### AWS EBS Instances

The widget on the middle left shows aggregated metrics for our EBS volumes. Here we are monitoring seven EBS volumes, which correspond with the number of monitored EC2 instances. There are three metrics available with this widget:

-   *avg(avg(netuitive.aws.ebs.averagelatency))* -- This is the average latency per EBS operation across the monitored instances described in milliseconds.
-   *avg(avg(netuitive.aws.ebs.iopsutilization))* -- This shows a comparison of the current IOPS compared to the provisioned IOPS, expressed as a percentage, averaged across all of the monitored instances.
-   *avg(avg(netuitive.aws.ebs.queuelengthdifferential))* -- This measures the difference between the actual EBS queue length and the "ideal" queue length according to Amazon. The queue length is the number of pending IO requests waiting for a storage volume. Amazon describes the "ideal" queue length as 1 for every 200 IOPS. This number shows the actual queue length divided by 200, as an average across all of the instances. A more thorough explanation for this metric can be found in the Metricly [EBS documentation](https://help.netuitive.com/Content/Datasources/Netuitive/aws.htm?Highlight=disktotalops#ebs-1).

The widget on the middle right shows the five volumes with the highest IOPS utilization. Again, you can hover over the graph to see the instance names and their respective utilization.

### AWS ELB Instances

The widget on the lower left shows aggregated metrics for our ELB instances. In this case, we are only monitoring a single ELB with relatively low traffic. There are four metrics available with this widget:

-   *avg(avg(aws.elb.healthyhostcount))* -- This is the average number of healthy hosts behind the ELB. As we currently have a single host sitting behind the load balancer, it is expected to be 1.
-   *avg(avg(aws.elb.unhealthyhostcount))* -- This is the number of unhealthy hosts behind the ELB. In a perfect world, this would be zero, but hosts have a tendency to fail and this is a good indication of the health of your infrastructure behind the load balancer.
-   *avg(avg(aws.elb.requestcount))* -- This is the number of requests completed or connections made by the ELB during a period of time averaged across all monitored instances. The time interval in this case is five minutes.
-   *avg(avg(aws.elb.latency))* -- This shows the elapsed time between when a request leaves the load balancer and when a response is received, as measured in seconds as an average across all monitored ELB instances. The lower the latency, the better.

The widgets on the lower middle and lower right show the five ELBs with the highest request count and latency, respectively. We are currently monitoring only a single ELB, so as expected, this shows just a single instance.

For more information about configuring your AWS integration, and how to interpret metrics, see the Metricly AWS integration [documentation](https://help.netuitive.com/Content/Datasources/Netuitive/aws.htm).

Pricing
-------

Pricing for Metricly is simple and straightforward. Currently, it is priced at $15 per host for all services or applications monitored on a host on an annual contract. The cost is $18 per host for a month-to-month commitment. A detailed explanation with FAQ can be found on the [Metricly pricing page](https://www.metricly.com/pricing).

Conclusion
----------

In this article, we covered how to get started with Metricly monitoring AWS, and gave a high-level overview of the AWS dashboard and the metrics displayed there. I hope this helps to get you up and running using Metricly and gives you greater visibility into your AWS infrastructure.
