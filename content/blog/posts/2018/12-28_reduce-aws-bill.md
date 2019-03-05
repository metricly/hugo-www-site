---
author: "Mike Mackrory"
date: "2018-12-28"
title: "Want to Reduce Your AWS Bill? Here’s 7 Practical Ways to Do It"
category: "Cloud Cost Management"
url: "/reduce-aws-bill/"
layout: "single"
featured-image: "reduce-bill.png"
thumbnail-image: true
featured: true
---

Companies begin using Amazon Web Services (AWS) to provide their IT infrastructure because of the ability to grow and expand their capabilities without a substantial capital investment, and because they only pay for the resources they need and use.

An unfortunate side effect of this approach is that small expenses often go unnoticed and can add up over time, leading to high monthly bills. Whether you're trying to reduce expenses or you want to begin the new year with heightened fiscal responsibility, the following seven practices help limit your AWS expenditures and protect your bottom line.

Related Articles:

-   [EC2 Instance Types -- What To Know](/ec2-instance-types/)
-   [Guide to AWS Lambda Cost](/aws-lambda-cost/)
-   [Using AWS Pricing API to Predict and Control Costs](/aws-pricing-api/)  

### 1\. Delete Unattached EBS Volumes

The Elastic Block Storage (EBS) service provides storage space for your [Elastic Cloud Compute (EC2) instances](/ec2-instances/). A notable advantage of separating the storage resource from the compute instance is that you can detach the storage volume and attach it to a new instance if the need arises. Because terminating an EC2 instance will not automatically delete associated EBS volumes, it is common for accounts to contain unattached volumes. Finding and deleting the volumes reduces spending.

You can view the number of EBS volumes you have in use for each region by logging into your AWS account and viewing the [EC2 Dashboard](https://console.aws.amazon.com/ec2). If you're concerned that you may need access to the contents of the volume at a later time, you can create an EBS snapshot and quickly restore it as required.

![EC2 Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/12/Screenshot-70.png)

Viewing Active Volumes from the EC2 Dashboard.

Larger organizations can benefit from setting up automated processes to search for and [delete unattached volumes](/support/reports/unattached-resources/). These processes can confirm that the volumes have had no activity for a determined period before they're deleted.  

### 2\. Eliminate Unused Capacity

Just because you can run your application or service on a large and powerful instance type, it doesn't mean you should. You might be spending additional money on unused capacity, and the instance type might not be the best match for the performance profile of your application.

AWS offers instances across a variety of [EC2 instance types](/ec2-instance-types/), from general-purpose computing to compute, memory and storage-optimized instances. Within each family, different types and generations offer different configurations to meet the needs of your application.

By understanding the performance needs of your application, you can match it with a more specialized instance type that is a better fit, which means you'll get better performance and more reliability at a lower cost per hour. I wrote an article (which you can read [here](/ec2-instance-types/)) that discusses what factors you should consider when selecting the right instance type for your application, and it includes links to tools and utilities to help you right-size your instances.  

### 3\. Reserve the Right Instances

AWS offers their customers the ability to prepay for EC2 Reserved Instances (RI) and offers significant discounts relative to their On-Demand pricing. Some discounts may be as much as 75% off regular price. RI purchases come with commitments and require research and planning before you commit. You'll want to avoid getting into a commitment that costs you more over the long term.

Andrew Paine has written an excellent article about [common mistakes to avoid](/aws-reserved-instances-mistake/) when purchasing Reserved Instances. Depending on how many RIs you need, how flexible you need the reservations to be, and whether your instances need to be available around the clock or only in specific time windows, AWS offers different RI types with varying discounts and terms.

New RI requests can now apply to different-sized instance types within the same type, which helps offset some of the risks if your needs change. Reservations can also be made against Relational Database Services (RDS), data transfer bandwidth, and provisioned read and write capacity on DynamoDB tables.  

### 4\. Strategic Use of Spot Instances

Spot Instances allow AWS to allocate their unused capacity to users at reduced rates, with conditions surrounding their continued availability. Users of Spot Instances can access compute resources at a discount of up to 90% off regular prices. This discount can give you access to higher capacity than your budget might otherwise allow. Spot Instances can be terminated with two minutes of notification and returned to AWS as the capacity is needed.

Applications and services built with the cloud in mind are designed to be fault-tolerant. This fault-tolerance allows systems to self-heal as instances are terminated and to continue their tasks on new instances as they become available. If your system involves the use of containerized systems like Docker, stateless web servers or other high-performance or Big Data systems, then Spot Instances may help reduce your costs.

AWS offers a series of presentations on [Spot Best Practices](https://aws.amazon.com/ec2/spot/getting-started/#bestpractices) which are useful to review if you would like to learn more about using Spot Instances. You may also want to investigate [AWS Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet.html). Spot Fleet allows you to define a capacity pool which can include Spot and On-Demand capacity. Different options allow you to always select the lowest-priced instances, or you can choose more capacity based on weighted preferences.  

### 5\. Automate Down-Scaling During Off-Hours

We've already talked about identifying unused capacity within instances, but what about when the instances themselves aren't in use at all? Your organization may have EC2 instances which support applications that only need to be accessible during business hours. Likewise, you might have dependencies on Amazon's Relational Database Service (RDS) which only exist at specific times during the workday.

[AWS Instance Scheduler](https://aws.amazon.com/answers/infrastructure-management/instance-scheduler/) allows you to create a schedule on which to start and stop EC2 and RDS instances. Even if your applications and data sources are required to run around the clock, there may be periods during the day and over weekends with dramatically reduced demand. You can schedule down-scaling for these off-hours to reduce the costs of maintaining a full complement of infrastructure resources.

Development infrastructure such as CI/CD resources and test environments are excellent candidates for automated scaling solutions.

![AWS scaler](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/12/instance-scheduler-architecture.727e008ced5a4b1b656b5c22afb4a2dfc32d7c33.png)

Components of the AWS Instance Scaler Solution.

As shown above, the Instance Scaler solution involves creating an AWS Lambda which is triggered by timer events originating from Amazon CloudWatch. Amazon DynamoDB is the source for scaling configurations, and the Lambda function then scales your EC2 and RDS infrastructure based on the same.  

### 6\. Tune Your Scaling

Once you've automated the scaling-down of your infrastructure during off-hours, if your applications and services have been running for more than a couple of weeks, you can use the usage history to identify usage patterns and identify areas for additional tuning. There are different approaches you can take, depending on whether you scale your infrastructure horizontally by adding additional instances of the same service, or vertically by increasing the size of the instance running your application.

For horizontal scaling, there are many options to choose from. AWS offers [scheduled](https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html) and [dynamic](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html) scaling, which can scale your Auto Scaling Group (ASG) in response to a schedule or in response to traffic and resource usage. Third-party solutions are also available if you have more specialized scaling needs. Online retailers such as Ticketmaster, for example, can anticipate an increase in demand due to the scheduled release of tickets for popular events, and employ custom solutions to scale their infrastructure out ahead of the demand.

For vertical scaling, an [AWS CloudFormation](https://aws.amazon.com/cloudformation/) template can be used to automate the process of stopping an application and restarting it on a different instance size to handle an increase or decrease in demand. While this process may take a few minutes to execute, it allows you to automate the change, and execute on a schedule.

CloudFormation is AWS's solution for Infrastructure as code and provides users with a common language for defining and describing infrastructure, which is then executed to affect the infrastructure changes. The CloudFormation template contains the details for an infrastructure "stack" and can be stored alongside your code in a code repository, allowing changes to be versioned and deployment information packaged alongside the code.  

### 7\. Identify Changes to Cost When They Happen

A final way you can control and reduce your AWS bill has to do with visibility. Understanding what changes are happening in your environment and connecting those changes to those who are financially responsible helps you identify changes early and reduces the chances of a big surprise in the bill at the end of the month.

The hardest part is identifying all deployed resources and identifying who is responsible for them. I wrote an article a few months ago which described [AWS tagging best practices](/aws-tagging-best-practices/). I've personally implemented these practices on all my AWS projects: tagging resources by the associated application, sponsoring department and owner from the smallest project to large-scale interdepartmental project, and they've been well worth the effort.

Once your infrastructure is tagged appropriately, you can use [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) to view costs and arrange them from highest to lowest for each tagging group. Additional tools allow you to identify changes to the infrastructure relative to the previous month, and alerting thresholds allow you to configure when to receive notifications about changes which affect cost by a certain percentage or dollar amount.  

### Bringing It Together

Some of the practices above can be implemented in a few minutes, while others may take some research and resource planning. As you implement these, you might identify additional cost-saving measures specific to your organization. Vigilance and visibility into the infrastructure are your best weapons in the battle to optimize your applications and services and ensure you protect your organization's bottom line.
