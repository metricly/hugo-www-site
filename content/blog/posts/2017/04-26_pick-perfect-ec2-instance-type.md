---
author: "Mike Mackrory"
date: "2017-04-26"
title: "Pick the Perfect EC2 Instance Type with One Click"
description: "Picking the perfect EC2 instance type doesn't have to be overwhelming! Put Metricly's EC2 Recommendation report to work for you."
category: "Cloud Cost Management"
url: "/pick-perfect-ec2-instance-type/"
layout: "single"
---
After much research and deliberation, you've decided to embrace Amazon Web Services as the provider of cloud services for your business or application. Everything seems to be going swimmingly. Your first project is ready to deploy, and you navigate to the EC2 home page and click on **Launch Instance**. The page appears, allowing you to choose an Amazon Machine Image (AMI)---So far so good! You pick the AMI required for your particular deployment and click **Select**.

![Pick Perfect EC2 Instance: Choose Type](/wp-content/uploads/2017/07/Choose-Instance-Type.png)

And now, all of a sudden, things get tricky. You have to make a choice about EC2 instance type, which has important ramifications for how your cloud environment will perform and how cost-efficient it will be. With so many [EC2 instance types available](https://aws.amazon.com/ec2/instance-types/), this may seem like a difficult choice to make.

Naturally, you want to ensure that you select the right type of instance to support your application, and allow it to be both performant and cost effective. But with so many options, which instance type is the right choice?

[Metricly can help you](/product) make that decision. We'll show how in this article, which discusses the considerations that you need to take into account with EC2 instance type selection, as well as how to measure those aspects and the impact those choices have on cost. We'll use Metricly's AWS monitoring metrics to assist in measuring these factors. I'll also show you how to leverage a couple of [automated EC2 cost reports](/ec2-cost-analysis-recommendations) the researchers at Metricly developed to give you access to all of this with a few clicks of your mouse.

The Source of EC2 Instance Costs
--------------------------------

The overwhelming benefit of using a cloud-based service is that you only pay for the capacity you use. Additionally, that [capacity can be expanded and contracted](/3-ways-to-get-capacity-plans-wrong) to meet demand on your application. Properly managed, the effect on the bottom line can be exceedingly positive; conversely, improper management can lead to an expensive bottom line. To fully understand the costs associated with AWS instances, let's itemize the costs you might incur.

**Hourly EC2 Instance Usage Costs**

Instances are each assigned a base cost, which depends on:

-   The type of instance, which is determined by a configuration of:
    -   Number and type of virtual CPUs
    -   Memory
    -   Instance Storage
-   Which region the instance is hosted in.
    -   Whether the instances are [on-demand, spot, reserved or dedicated](/demystifying-terminology-aws-instances).

**Data Transfer**

There are costs associated with data moving to and from an instance, and these costs are also affected by how the data is transferred and the destination or source.

**Elastic Block Storage**

AWS [Elastic Block Storage](/iops-calculator-for-ebs-volumes) (EBS) provides block storage volumes to your instances. The volumes are automatically replicated to provide highly available and durable storage to your instances. Pricing is based on the type of EBS added, a combination of the amount of data stored, and the duration of that storage.

**EBS Optimized Usage**

If you add EBS to your instance, you can elect to use one of a subset of instance types which are EBS-optimized. This optimization enables instances to take full advantage of these volumes, but it does affect the base cost per hour.

**AWS Cloudwatch**

Cloudwatch is Amazon's monitoring service which allows for the collection and analysis of metrics from AWS entities such as EC2 instances. Pricing depends on the number of metrics collected, frequency of the collection, and additional costs for custom metrics, log storage, dashboards, and events and alerts.

**AWS Elastic Load Balancing**

[Elastic Load Balancing (ELB)](/optimize-aws-route53-elb) allows you to distribute traffic between multiple instances and is priced based on an hourly rate, and on the amount of traffic which is transferred.

**Efficiency of Resource Utilization**

If you focus specifically on the costs for the EC2 instance itself, it is imperative that you select an instance which can handle the tasks assigned to it, but is not overly provisioned so as to provide processing power and memory which is underutilized.

Back when I first started on a team that was making use of AWS to support its services, I was assigned the task of determining the appropriate instance type and [Auto Scaling Group (ASG)](/optimize-auto-scale-groups-asg-tuning-report) configuration for our production environment. To accomplish my task, I began a series of tests comprised of the execution of defined load tests against a consistently sized ASG, and monitoring of the impact on each instance through a monitoring solution.

The specific metrics I monitored for each test were:

-   The percentage of available processing capacity.
-   The percentage of memory usage.
-   Apdex scores and response times.
-   Metrics specific to the technology used.
-   It was a Java-based application, so I looked at thread usage, GC frequency and duration, and heap usage.

Following each test, I would create a new ASG with a different instance type, and repeat the process. After several weeks of testing, I eventually determined which instance type was the optimal choice for each of the applications. Those determinations were further tested as we introduced production traffic to the services and continued to monitor them, making adjustments along the way.

It was a very labor-intensive project, and unfortunately, within a few months of continued development, the recommendations were rendered all but useless. Determining resource utilization over time is critical in the appropriate instance type selection and overall AWS configuration for your applications. My experience in this area served only to confirm the fact that what is required for a manual effort is incredibly expensive at first, and simply not sustainable over time.

Choose the Better Path for Resource Utilization Monitoring
----------------------------------------------------------

Measurement of capacity resource utilization over time is necessary for selection of the correct instance type and size for your application. While my approach above contained all the right elements, necessity requires a better and more efficient method. Let's begin by looking at Metricly as an [AWS monitoring solution](/getting-started-netuitive-aws), and taking the initial step in the process of gathering the required data.

I won't spend too much time on the setup and configuration of your Metricly account, as that information is freely available in other articles on this site. If you are in need of an account, they offer a 21-day free trial that you can sign up for [here](/signup). Additionally, you'll want to ensure that you [install the appropriate agent](/integrations) on your instances depending on your operating system. Detailed installation instructions are provided for each respectively.

If you want to follow along in the next section with your data, you'll need to set up the appropriate integrations and get your EC2 instance data flowing into Metricly. It is a relatively simple process, and it opens the doors to all the analysis you need to make cost-effective decisions regarding your AWS account.

Two Clicks to All the Information You Need!
-------------------------------------------

Once you have data flowing into your Metricly account, it takes just two clicks to access all the information you need. We started this article off by looking at the costs associated with deploying your applications into AWS using EC2 instances. Log in to your account, navigate to **Reports**, and then select the **EC2 Cost** report.

![Pick Perfect EC2 Instance: Select Cost Report](/wp-content/uploads/2017/07/Select-EC2-Cost.png)

The EC2 cost report shows [total costs for all EC2 instances](/demystify-your-ec2-cost-analysis) that are reported to Metricly. Filters and view options allow you to customize views to report the information you need. At the top right of the report is a **Report View** option. Click on the dropdown, and select ***Cost by Instance Type***. This view breaks down costs based on the type of instance. Stacked bars show the total cost for the instance itself, costs for data traffic transferred to and from the instance, and other costs like EBS optimization charges.

Change the **Report View** option to ***Cost by Tag***. This option assumes you have tagged each of your instances to denote the application deployed, or other discerning property. The result is a report showing the costs across your environment based on application or another tag.

For additional analysis, a **Download** link is provided at the top right corner of the data section below the graphic. This downloads a CSV file to your workstation, with the cost breakdown, based on the current Report View. The report allows you to see at a glance the total cost for your EC2 instances, and extract detailed information on how those costs are derived.

![Pick Perfect EC2 Instance: Cost By Tag](/wp-content/uploads/2017/07/Costs-By-Tag-1024x479.png)

The second report we're going to look at is my personal favorite. Navigate to the Reports menu again, and select the **EC2 Recommendation** report.

![Pick Perfect EC2 Instance: EC2 Recommendation](/wp-content/uploads/2017/07/EC2-Recommendation.png)

This report was developed by the researchers at Metricly as a means to display cost data, and offer [recommendations for AWS cost savings](/optimize-aws-instance-types). The report also answers the all-important question "What EC2 instance type should I pick?"

As I mentioned before, a complete picture of resource utilization for an EC2 instance requires measurement of metrics over time. Because of this, you may not be able to make immediate use of this report, but once a week or more of data has been gathered, it will prove to be invaluable.

The report provides the user with the opportunity to optimize based on allowable risk, preferred maximum use of CPU and Memory Utilization, and even lets you indicate if you would like instance type recommendations to be kept within the same family of instances. An example graph might look similar to the one shown below.

![Pick Perfect EC2 Instance: Recommendation Graph](/wp-content/uploads/2017/07/EC2-Recommendation-Graph-1024x459.png)

Before we look at the actual data in the report, look at the top right corner. (**Estimated weekly instance savings $682.41**.) By implementing the recommendations in this report, we can not only increase our resource utilization but also save a significant amount of money. Let's look at how.

Considering the top-most point, a solid blue dot on the graph, we can hover over and see a basic summary of information. The instance is ***win01* **and is costing us $161.58 per week. You'll notice that the dot is joined to another open dot with a dotted line. This line represents the recommendation. The result is a decrease in cost and an increase in CPU utilization. Let's find the element in the data table below to see how this is possible.

![Pick Perfect EC2 Instance: Recommendation Details](/wp-content/uploads/2017/07/EC2-Reocmmendation-Details-1024x169.png)

The first entry in the table references the EC2 instance we were looking at in the graph. This instance is currently deployed as an m4.2xlarge. The cost is $161.58 per week, and hidden on the right-hand side is CPU utilization at 8.3% and Memory Utilization at 7%. The recommendation is to change this to a t2.medium instance type for a projected savings of 92% and improved CPU and Memory Utilization.

After gathering as little as one week of data, this report accomplished an almost impossible task of identifying resource usage and recommended EC2 instance types for your applications. Even better, as your applications evolve and traffic into your applications increases, you can open the report at any time to get an instant view into your costs, and validate that your configuration is as optimized as possible.

You can learn more about these reports by reading the documentation provided by Metricly, including instructions on customizing the reports to better meet your needs.
