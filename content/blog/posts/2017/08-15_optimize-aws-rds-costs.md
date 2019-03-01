---
author: "Mike Mackrory"
date: "2017-08-15"
title: "How to Optimize Your AWS RDS Costs with RDS Cost Reports"
description: "Use our RDS cost report to determine your approach to RDS costs, how much risk you’re willing to assume, and right-size your RDS instances. Read More"
category: "Cloud Cost Management"
url: "/optimize-aws-rds-costs/"
layout: "single"
---

Amazon Relational Database Service, or RDS, is the Amazon Web Services (AWS) solution for organizations that need a highly scalable, highly available relational database, and don't want to have to invest in personnel to manage and support that database. RDS supports Amazon Aurora, PostgreSQL, MySQL, Oracle and Microsoft SQL Server, among others.

In addition to managing, patching and handling the scalability of your database needs, AWS only charges you for the resources you need. The most important question at this point is: What resources do you need for your database solution?

In this article, we're going to look at what options you can choose between for your RDS solution. We're also going to look at tools available to better understand your RDS costs, and then use analysis from those tools to explore ways to optimize your solution and effectively manage your costs.

Factors that Affect Your RDS Costs
----------------------------------

The costs associated with your RDS solution are based on a combination of factors. The first important factor is the type of instance which is used to host your database service. Options range from the micro *db.t2.micro* with a single virtual CPU and 1 GiB of memory to a memory- optimized *db.r3.2xlarge* with eight virtual CPUs and 244 GiB of memory.

The second significant factor is the combination of which database engine you elect to use, and in which AWS region it is hosted. The six database engines available are:

-   AWS Aurora
-   PostgreSQL
-   MySQL
-   MariaDB
-   Oracle
-   Microsoft SQL Server

The final factor is whether you elect to use Amazon Reserved Instances. While RDS resources are offered at an On-Demand price, customers can elect to reserve and even prepay for the use of an instance in exchange for discounts ranging from 19% to 64% depending on the instance size, term and how much is paid for upfront.

Additional RDS costs are also incurred for data ingress and egress from the database instance, as well as the type of storage used.

Ideally, selecting the right configuration for your database deployment is the best way to reduce your costs and optimize the use of the database, but with all of these factors, determining what the right configuration is can be the most challenging part.

Fortunately, there is an easy way to both analyze your current database usage, and use that analysis to guide you in the selection of the optimal configuration for your needs. Let's look at the Metricly RDS Cost Report.

Gaining Insight into Cost Factors
---------------------------------

The RDS Cost Report is currently offered for Beta testing as part of the Metricly application. If you don't already have an account, they offer a 21-day free trial that you can sign up for [here](https://www.metricly.com/signup).

Once you've logged into your account, you can navigate to the report by clicking on the reports tab and navigating to the RDS Reports Card.

![RDS Costs: RDS Cost Card](https://www.metricly.com/wp-content/uploads/2017/08/Pasted-image-at-2017_08_15-03_40-PM.png)

Please note the warning that this is an experimental feature, and may evolve as the folks at Metricly receive feedback and refine and improve the report. Despite its being in development, there is still a wealth of information which can be gleaned from this report.

The specific report we're going to look at is reporting on two PostgreSQL instances hosted on *db.m3.large* instances, named *rds01* and *rds02* respectively. Before we look at the report data itself, let's look at some of the options available to focus on the specific data you're looking at for the specific time and instances you're interested in.

![RDS Costs: FilterBar](https://www.metricly.com/wp-content/uploads/2017/08/FilterBar.png)

At the top left-hand corner of the screen, you'll have access to the filters for the report itself. The first field is a simple element name filter. The next filter option is *Type*, which may provide additional options. The *More* option allows you to add additional filters, which you can use to segregate your data based on how your organization organizes its AWS resources.

-   Element
-   Attribute
-   Tag
-   Collector

![Manage RDS Costs: Date Selection Options](https://www.metricly.com/wp-content/uploads/2017/08/Date-Selection-Options.png)

Moving to the top right-hand corner of the report, you'll see the date selector. This allows you to select from a couple of different date ranges. Depending on whether you are looking for data points over a specific period, or just over the last day, you can make that selection here.

Once you've selected the appropriate group of resources to analyze and the right date range, you can tune the report to display appropriate metrics based on your specific needs. You can learn more about those metrics by visiting this introduction to the [RDS Cost Report](https://www.metricly.com/rds-cost-report).

For our example, we'll set the following options:

-   **Report View**: Grouped By Day
-   **Utilization Metric**: CPU Utilization %
-   **Metric Statistic**: Maximum of Element 95th Percentiles
-   **Sort**: By Total Cost in Ascending Order

![Manage RDS Costs: Report Sorted By Cost](https://www.metricly.com/wp-content/uploads/2017/08/Report-Sorted-By-Cost-1024x539.png)

By grouping our report by day, and sorting by total cost, we can see our daily RDS costs, with the most expensive days sorted to the right-hand side of our graph. Once we have this view, we can toggle cost elements on and off to see what the breakdown of each is.

There seems to be a large proportion of RDS costs allocated to instance costs (both Reserved and On-Demand instance costs). Let's toggle off all costs except these two.

![Manage RDS Costs: Report Sorted By Instance Cost](https://www.metricly.com/wp-content/uploads/2017/08/Report-Sorted-By-Instance-Cost-1024x575.png)

We now have an accurate picture of our instance costs for the past month, sorted by cost, and shown relative to the 95th Percentile of CPU Utilization. Let's look at ways in which we can use this information to optimize our RDS costs, while still maintaining a performant and reliable database solution.

Using the Report to Create an Actionable Plan
---------------------------------------------

In addition to discussing instance costs which were highlighted above, we're also going to talk about options for data transfer and storage. Combined, these two aspects will likely have the biggest impact on your RDS costs.

Let's look at each of these aspects in more detail, and discuss how they can be configured to help you find a balance between cost, and performance and reliability.

### Instance Costs

Much like AWS EC2 instances, the cost of RDS instances is directly correlated to the provisioned resources for the instance itself. Ensuring that the instances you're using are right-sized will have a significant impact on your RDS costs. Additionally, for a long-term solution with predictable traffic patterns, you could consider reserving an instance for a lower overall cost and pre-paying for an additional discount.

### Data Transfer and SSD Storage, Including the Option for Provisioned IOPS

Let's start by looking at Provisioned IOPS. Provisioned IOPS is SSD storage with a guaranteed throughput. For environments with high throughput, and the need for high-performing and consistent response time, Provisioned IOPS may be the answer. However, there is an additional cost to configure these on your account. Users of Provisioned IOPS pay for both the amount of storage used, as well as their selected Provisioned IOPS rate.

Another option is General Purpose Storage, which is also SSD storage. For this storage option, users are charged for the amount of storage consumed, but not necessarily for reads and writes to and from that storage.

### Data Transfer and Magnetic Storage

Users may also elect to connect their database instances to magnetic storage instead of the two SSD options discussed previously. For magnetic storage, the user is charged for the volume of storage, together with a per request fee which is usually charged in batches of one million requests.

Moving Forward Proactively to Manage RDS Costs
----------------------------------------------

The ability to see how each of these costs affects your overall RDS costs is an excellent place to start when analyzing costs and determining how to optimize your RDS deployment. By using these results to determine your approach, how much risk you're willing to assume, and then right-sizing the RDS instances, you should have your environment configured correctly in short order.

At this point in the process, the real power of Metricly can be brought to bear on your RDS deployment. Metricly can help you see where you're at, but you don't want to have to run a report on a periodic basis to ensure that everything is functioning as expected. Metricly's real power and advantage come from the ability to automate the monitoring of your environment, and apply smart alerts to identify when performance anomalies and resource limitations have or are about to occur---and then take an appropriate action.

Actions can include alerting DevOps engineers through various mediums, triggering webhooks into tools to automatically adapt the environment to changing needs.

You can create a solution such as this for yourself by implementing policies into your Metricly account. The documentation on [default policies](https://help.netuitive.com/Content/Policies/DefaultPolicies/default_policies.htm) will be an invaluable resource in the pursuit of this, as well as articles featured on the Metricly website.

* * * * *

*Ready to manage your RDS costs? Start today with Metricly's [21-day, no-obligation free trial.](http://app.netuitive.com/signup)*
