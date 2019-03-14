---
author: "Mike Mackrory"
date: "ADD DATE"
description: "Understand the basics of what an EC2 reserved instance is, and the types available. Learn Reserved Instance use cases that can lead to real cost benefits, as well as ones that are a poor use of Reserved Instances."
title: "EC2 Reserved Instances—Understanding The Basics"
category: "Cloud Cost Management"
url: "/ec2-reserved-instance-basics/"
layout: "single"
featured-image: ""
thumbnail-image: true
featured: false
draft: true
---

Amazon EC2 Reserved Instances, which offer a discount of up to 75% over regular On-Demand Instances, are an attractive option for AWS users. However, to make the most of Reserved Instances, it's critical to understand the terms, conditions, and restrictions that impact the discounted price of Reserved Instances.

We're going to tackle that topic in this article. We'll look at the different types of Reserved Instances which are available, and then talk about Reserved Instance use cases that can lead to real cost benefits, as well as ones that are a poor use of Reserved Instances.

### What Exactly Is a Reserved Instance?

Elastic Cloud Computing, or EC2, allows an AWS user to provision a virtual server with configurations of memory, processing power, storage, and network capacity. These instances are usually provisioned using the On-Demand pricing tier. An On-Demand instance provides the user with their instances for as long as they are required. On-Demand instances are billed based on hourly usage of the instance.

Spot instances allow users to take advantage of increased capacity at a reduced price. Unlike On-Demand instances, the Spot instance is only available as long as AWS has excess capacity. AWS may terminate Spot instances following 10-second notification if needed.

Reserved Instances allow users to take advantage of a reduced hourly rate, and have access to guaranteed capacity. Customers are billed for Reserved Instance usage, whether the customer uses the capacity or not. Despite the reduced price, Reserved Instances are non-refundable, and improper planning can result in Reserved Instances costing the consumer more than On-Demand instances.

When you purchase a reserved instance, the discount is applied immediately to on-demand instances which match the criteria of the reservation. You can reserve instances within an Availability Zone (AZ) or a Region. Both types offer unique advantages. We'll look at each in turn after we review the options available when you search for Reserved Instances to purchase.

### Zonal Reserved Instances

When a Reserved Instance is assigned to a specific Availability Zone, it is designated as a Zonal Reserved Instance. Zonal Reserved Instances ensure that AWS sets aside the reserved capacity within the AZ, but the instance must match the exact type and size of the reservation to be eligible for the discount.

For example, if I purchase eight m4.medium instances in the US-East-1C, then I can only receive the discount on eight m4.medium instances in the "C" AZ. My monthly invoice includes the hourly contract rate on eight m4.medium instances, whether or not they were up and running in the AZ during the month.

You can learn more about Zonal Reserved Instances and their effect on your account in the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/apply_ri.html#apply-zonal-ri).

One use case where companies might decide to use Zonal Reserved Instances is for backup capacity in case of Zonal and Regional outages. If I host my applications in the US-West region, and a regional outage forces me to redirect traffic to US-East, I'll be competing with other organizations utilizing the same backup strategy. Having Zonal Reserved Instances affords me the assurance that I'll have capacity available as others compete for the remaining capacity.

Organizations which use this approach typically purchase Reserved Instances with the prepay model, securing their backup capacity with the lowest possible price, and using it as an insurance policy of sorts.

### Regional Reserved Instances

When a Reserved Instance is assigned to a region, it is designated as a Regional Reserved Instance, and has slightly different characteristics than its Zonal cousin. Regional Reserved Instances do not guarantee access to capacity, although they do prioritize access within a region based on available capacity.

Regional Instances are flexible within the instance type, which allows you to scale your application horizontally, without being restricted to a specific instance size within the type.

If I purchase eight m4.medium instances in the US-East region, I can use different sizes based on the normalization factor assigned to the size purchased. Medium-sized instances are given a normalization factor of 2, whereas a small instance has a factor of 1, and a 2xlarge has a factor of 16. I can run a single m4.2xlarge at the same discounted rate as my original eight medium instances, or sixteen m4.small instances.

The normalization factor table is shown below, and if you want to learn more about Regional Reserved Instances, check out the AWS documentation describing [How Regional Reserved Instances Are Applied](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/apply_ri.html#apply-regional-ri).

<script>$(document).ready(function () {
  $(".post-content table").addClass("table").addClass("table-striped");
});</script>

Instance Size | Normalization Factor
--------------|---------------------
nano  | 0.25
micro  | 0.5
small  |  1
medium  | 2
large  | 4
xlarge  |  8
2xlarge  | 16
4xlarge  | 32
8xlarge  | 64
9xlarge  | 72
10xlarge  | 80
12xlarge  | 96
16xlarge  | 128
18xlarge  | 144
24xlarge  | 192  
32xlarge  | 256

Regional Reserved Instances are appropriate when your applications are receiving consistent usage, and you would like to reduce your costs without limiting yourself to a single instance type and size. Regional Reserved Instances allow you to reduce costs while planning for growth and demand requirements.

### Learning More

The ability to reduce costs is an attractive proposition, and implementing strategic purchases of Reserved Instances can reduce your bottom line. Purchasing Reserved Instances without a plan or fully understanding the terms of the agreement can also turn into a very costly mistake.

Recently, Andrew Paine wrote an excellent post about [Mistakes to Avoid with AWS Reserved Instances](/aws-reserved-instances-mistake/), which is a must-read before deciding on a final strategy. You also need to understand your current and historical usage patterns and requirements. The [EC2 Recommendation Report](https://docs.metricly.com/reports/reports-ec2-recommendations/) is an excellent source of data and a useful tool in determining what instance types best fit your usage model.
