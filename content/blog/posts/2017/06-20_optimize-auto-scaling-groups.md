---
author: "Mike Mackrory"
date: "2017-06-20"
title: "Optimize AWS Auto Scaling Groups with Metricly"
description: "Are you making these common mistakes with your AWS Auto Scaling Groups? Read on to see some best practices for optimizing."
category: "DevOps"
url: "/optimize-auto-scaling-groups/"
layout: "single"
---
If you use Amazon Web Services (AWS), chances are you've set up Auto Scaling Groups (ASGs) for your EC2 instances, and if you've set up ASGs, there is a good chance you could optimize the process of creating and managing them. The beauty of having your applications supported in the cloud is that you don't have to be perfect on day one. Deploying your services to the cloud is an iterative process, allowing for continuous improvement over time.

I'd like to share some of the more common misconceptions, mistakes and less optimal things that many of us do when deploying our applications to the cloud, and in particular, when setting up an Auto Scaling Group. Let's list them, and then go through each, considering how to optimize and improve our processes.

1.  Misunderstanding the volatility of resources in the cloud
2.  Performing manual management of infrastructure
3.  Providing only superficial health checks
4.  Scaling reactively and not proactively
5.  Engaging monitoring and analysis to optimize machine usage

### The Cloud is Volatile

![Optimize Auto Scaling Groups: Volatile Cloud](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Asset-1.png)Before the advent of the cloud, applications were typically hosted on a long-lived physical server, either in a personal data center or a hosted data center. One could argue that AWS is simply another data center where apps are hosted, but the key difference is in the ephemeral nature of the virtual machines on which applications are deployed.

While this may seem like an argument against cloud computing, it is in fact what makes cloud computing so valuable. In the past, you would need to account for a sudden increase in traffic by incorporating additional hardware, and server upgrades would typically require the server to be taken offline for the upgrade.

In the cloud, when additional capacity is needed, you can simply increase the number of instances included in your Auto Scaling Group. An increase in capacity can be accomplished in minutes, instead of hours and days, and when the need has passed, the number of instances can be reduced, limiting the associated cost in turn.

Likewise, when new deployments are required, or updates to the underlying infrastructure are required, a new ASG can be created with updated instances, and as the new instances come online, the old instance can be disabled and destroyed, providing users with a seamless experience.

### The Pitfalls of Manually Managing Infrastructure

In most environments where I have worked, creating a new Auto Scaling Group has been accomplished by clicking around within either the AWS console or another cloud management solution. You select the name, choose the size, select the AMI to use, set the SSH key and security group...

I suspect I probably forgot something important on that list, and that is one of the fundamental problems you may run into when manually managing your infrastructure deployments. In addition to forgetting key elements, mistyping a name, adding an old AMI, or another oversight, there is no easy way to reproduce the same steps again in the future.

[AWS CloudFormation](https://aws.amazon.com/cloudformation/) provides a way for you to create and manage AWS resources by describing these resources, their provisioning, and security concerns in a single template. In addition to specifying all aspects of your deployment, you can also apply version control to your AWS infrastructure in the same manner in which you version your code. [Infrastructure as Code](https://martinfowler.com/bliki/InfrastructureAsCode.html) is a concept which will pay out dividends that will far exceed your initial investment.

### The Worth of a Superficial Health Check

*"Tis but a scratch!" **~ The Black Night*

AWS manages Auto Scaling Groups by periodically requesting a health check from each instance. Additionally, these checks may be used to determine the state of the instance for purposes of registering it with load balancers or services registries. I don't know about you, but when I look at the health checks on most projects, they consist of an endpoint which has been hard-coded to return an *HTTP 200 -- OK* response.

The benefit of such an approach is that your instance can return a healthy status rapidly, and quickly begin accepting traffic. But that isn't a good thing. If the thread pool to a dependant service has exceeded its capacity, if attempts to connect to a database are unsuccessful, or other critical components of your system are absent, your health check endpoint will likely continue to return a "healthy" response.

A few notes before we continue:

-   The health check endpoint needs to be performant.
-   Failure to return a healthy status will cause the instance to be flagged as unhealthy.
-   Unhealthy instances which remain unhealthy are unregistered and may be replaced according to the policies in place.

When you develop a new application, or you're updating an existing application, spare some time to look at the health check endpoint. The status returned should be more than just a hard-coded value. Add checks to validate that connections to dependent services and data sources are active and functioning as expected. If the health check is likely to exceed the time AWS will wait, consider implementing a pattern to periodically check these independently of the health check, and update a property which can be quickly validated.

### Proactive vs. Reactive Scaling in Your Auto Scaling Groups

Auto Scaling Groups don't scale dynamically unless they have been configured to do so. Typically a policy will need to be enabled which monitors [CloudWatch metrics from the server](/aws-cloudwatch-metrics-integration/) and triggers a resize of the group based on certain thresholds.

As an example, an ASG may have a policy which increases the size or desired number of instances in the ASG by 20% if CPU usage exceeds 80% for more than one minute. Once an ASG has been notified of a change in the desired number of instances, the process of adding instances will begin, and within a few minutes, those extra instances will be available.

If your web application receives a sudden influx of traffic, there is a good chance that by the time the Auto Scaling Group has been resized, the peak will either have passed or additional capacity may be required, and the process begins again. In the worst-case scenario, the existing instances may become overloaded, causing their health check endpoints to begin returning a response of "unhealthy," and AWS may determine that the existing services should be replaced with new instances, resulting in a complete failure of the website.

When all's said and done, in the world of cloud computing, it makes sense to take a proactive approach to scaling cloud infrastructure in anticipation of sudden spikes in traffic, rather than being purely reactive.

Metricly provides an excellent [suite of monitoring reports](/) to help you better optimize your Auto Scaling Group. We'll discuss these in more depth in the next section.

### Comprehensive Monitoring of Auto Scaling Groups

As I mentioned previously, you don't have to get your infrastructure configured perfectly up front. The cloud is a dynamic environment, much like the traffic patterns our applications might expect. For your cloud endeavors to be successful, it is important to make incremental improvements over time, monitor and evaluate those improvements, and then adjust further, or move on to the next improvement.

As a service, Metricly is the gold standard for [monitoring your cloud services and applications](/product). As useful as that is, however, the real power lies in the analysis and reporting provided. I've written about some of the available reports in the past, but they bear mentioning again because of their relevance to this discussion.

**EC2 Cost and EC2 Recommendation Reports**

![Optimize Auto Scaling Groups: EC2 Recommendation](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2-Recommendation-1024x576.png)

Some time ago, I wrote some articles about Metricly's [EC2 Cost and EC2 Recommendation Reports](/pick-perfect-ec2-instance-type), and how they can be used to optimize costs and ensure you've used the correct instance types for your deployments. One of the primary benefits of these reports that I particularly like is the ability to [set a risk tolerance level](/optimize-aws-instance-types). I can determine how much optimization I want, and how much risk I'm willing to assume as far as sufficient capacity.

**The ASG Tuning Report**

![Optimize Auto Scaling Groups: Auto Scale Group Tuning](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Auto-Scale-Group-1024x597.png)

This report presents the user with historical data based on past usage of the service, and then allows the user to [create policies to automatically resize ASGs](/optimize-auto-scale-groups-asg-tuning-report) based on those traffic patterns.

Auto Scaling Groups are easy to learn to use, and unfortunately, many of us jump right in and begin creating and using Auto Scaling Groups without a full understanding of what they have to offer. The collection of optimizations mentioned here is not an exhaustive list of all that you could be doing to [optimize your AWS environment](/optimize-aws-route53-elb), but it does represent some best practices that will get you headed in the right direction.
