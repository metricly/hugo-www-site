---
author: "Twain Taylor"
date: "2016-12-15"
title: "Dedicated, On-Demand, Reserved and Spot— Demystifying the Terminology of AWS Instances"
description: "This post highlights the various options you have with AWS instances, so you can make an informed decision about which should be part of your AWS stack."
category: "DevOps"
url: "/demystifying-terminology-aws-instances/"
layout: "single"
---


So you've got an app ready for launch, and unlike in the past where you simply ran it on-premises, this time you want to try the cloud. You know AWS is the leading cloud platform, and decide to give it a go. The first thing you'll bump into as you learn about AWS is the various options of cloud instances available with AWS EC2. This post highlights the various options you have with AWS instances, so you can make an informed decision about which of them should be part of [your first cloud stack with AWS](/getting-started-metricly-aws/).

[![AWS Instance Cost Graphic](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Cloud-Graphictransparent.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Cloud-Graphictransparent.png)

What Is An Instance?
--------------------

An AWS EC2 Instance is nothing but a server in the cloud. Just like your physical server, it comes with varying specs for compute, memory, networking, and storage. There are a total of [11 instance types](https://aws.amazon.com/ec2/instance-types/) for all types of workloads. Choosing between these instance types is a topic for another post. Here, we'll cover something even more basic---understanding how to strike the right balance between performance and price of AWS instances.

Types of AWS Instances
----------------------

[![AWS Instances: EC2 Types](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ec2.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ec2.png)

#### Regular EC2 Instances

These are the default AWS instances that most applications use. They are instances in the cloud that are shared between multiple AWS customers. AWS provides isolation between each user's data. However, multi-tenancy normally comes with the "noisy neighbor" issue, where neighboring instances could affect the performance of your app if they hog up resources on the same host as you. To counter this problem, you have a couple of options.

#### Dedicated Instances

These are virtual private cloud (VPC) instances that are blocked for use by a single customer. They are Isolated at the host level, so all instances running on the host would be reserved for a single customer. But there's another option if you want even more isolation and control over your infrastructure.

#### Dedicated Hosts

Dedicated Hosts enable the same level of isolation as Dedicated Instances, but additionally, they give you visibility into the physical host. This is required if your applications use libraries and frameworks with licensing terms that restrict them to a single server. Or some applications may need to be hosted on a dedicated server for compliance purposes. In these cases, a Dedicated Instance is your only option.

Dedicated Instances are billed by the number of instances, whereas Dedicated Hosts are billed by the host, irrespective of the number of instances you run on each host. With that in mind, we're ready to move to the next important section, understanding the various [pricing options](/demystify-your-ec2-cost-analysis) for AWS instances.

AWS Instance Pricing
--------------------

The kind of pricing you choose will greatly decide your TCO.

#### On-Demand Pricing

With on-demand pricing, you pay by the hour for usage of an AWS instance. This is the benchmark pricing for AWS instances---meaning that you compare other pricing models with this one when deciding which is best for you. The benefit of on-demand pricing is that you don't have to plan in advance how many instances you need. This gives you maximum flexibility. However, it comes at a cost. On-demand pricing is the highest of the lot.

#### Spot Instances

With Spot Instances, users bid for the price of spare EC2 Instances. There's a market price for spare instances, and only if this market price meets your instance will you be allotted the instance. Similarly, when the market price reduces, you'll automatically lose your instance so your charge doesn't shoot up. This model is a bit more complex than on-demand pricing, but it could save 50-90% of your total costs.

#### Reserved Instances

Finally, if you can reliably predict approximately how much compute resources your applications need in advance, you should consider Reserved Instances (RIs). In this model, users lock in

AWS instances for a span of 1 or 3 years, and get a significant discount as compared to on-demand prices. Reserved Instances are assigned to specific Availability Zones, so if you need control over your app's performance globally, this may be a drawback.

If your concern is that your compute requirements may change over 3 years, AWS allows you to choose convertible Reserved Instances, so you can switch between instance types---for example, from an M3 to a C4. However, you can shift down to a small instance like a T2.

You can even opt for scheduled RIs, so you reserve instances only during specific hours or days, depending on your usage. This gives you more flexibility with RIs.

Factors That Will Influence Your Mix
------------------------------------

#### Scalability & Flexibility

The biggest reason you move to the AWS cloud is to take advantage of its scalability. So, as you start, you may want to enjoy this flexibility to the max by taking just a part of your workload to the cloud, and keeping it on-demand. This is a great option, especially if you're a startup, or if you've got a new app and you're not sure what kind of load to expect. You don't want the commitment and overhead that comes with Dedicated Instances, and Reserved Instances. Regular EC2 Instances with on-demand pricing is the way to go.

#### Cost

The next biggest reason to move to the cloud is to save on server costs. If this is your biggest consideration, you should probably take a good look at Spot Instances and Reserved Instances. Fortunately, there is a [calculator](https://awstcocalculator.com/) to help you estimate cost savings with either option.

#### Isolation & Control

If you're affected by the "noisy neighbor" syndrome, Dedicated Instances are a great option for mature apps that need consistent performance. For large enterprises that need to comply with regulations or licensing terms, Dedicated Hosts are the way to go.

The right place to start is to list your application's requirements. You can then [consider all the AWS options](/aws-monitoring-best-practices/), and mix and match them to your liking. The best part is that you're never really locked in. Even if you don't need your Dedicated Hosts that are reserved, you can always sell them on the AWS marketplace. Unlike your on-prem servers, AWS gives you a lot of room to expand or shrink your cloud as your requirements change.
