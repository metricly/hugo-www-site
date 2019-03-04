---
author: "Mike Mackrory"
date: "2017-01-17"
title: "Optimize AWS Instance Types with the EC2 Recommendation Report"
description: "The EC2 Recommendation report provides tools to optimize AWS instances based on your priorities, such as performance, availability, cost, or other factors."
category: "Cloud Cost Management"
url: "/optimize-aws-instance-types/"
layout: "single"
---

There are a lot of questions that arise when you're deploying applications out in the AWS Cloud. Answers to questions pertaining to the optimal instance type for your particular application usually involve a fair amount of testing, experimenting and trial and error, and even that won't guarantee the best decision will be made.

But that's so 2016. There has to be a better way!

Fortunately, there is an easier way to figure out what instance type best fits your application, and it comes in the form of the new EC2 Recommendation Report from Netuitive. The report analyzes the performance of the instances running your applications, offers recommendations for improved resource utilization, and reduces costs. Additionally, the report provides tools to optimize the proposals based on your priorities, such as performance, availability, cost, and other relevant factors.

How to Get Set Up with Netuitive So You Can Use the Report
----------------------------------------------------------

If you already have a Netuitive account, and your data is being read and analyzed by Netuitive, then you're ready to go. If this isn't the case, then you'll want to set up an account before proceeding through this article. Netuitive offers a 21-day free trial which you can sign up for from this link: (</signup>). As part of the signup process, you will have the opportunity to watch a video containing an overview of Netuitive from the co-founder, Bob Farzami. I would highly recommend watching the video to get a broad understanding of the environment and capabilities of the product. You can also watch the [Netuitive overview video here](/netuitive-overview).

An additional step is to install an agent on your instances in order to better report metadata and metrics. This isn't required, but will improve the accuracy of your reporting metrics, and thus the recommendations. Unfortunately the installation of agents is outside the scope of this article, but you can find more information the Linux agent [here](https://help.netuitive.com/Content/Datasources/Netuitive/linux.htm) and the Windows agent [here](https://help.netuitive.com/Content/Integrations/windows.htm).

Where Do I Find the Report, and How Does it Work?
-------------------------------------------------

At the time of writing, the report was still in its beta phase, and could be accessed by logging into your Netuitive account, and clicking on your email address at the top right of the screen. On the dropdown menu which appeared, you would click on **Beta**, and then click on the EC2 Recommendation Report. Alternately, you could navigate to the report directly with this [link](https://app.netuitive.com/#/reports/ec2recommendation/latest).

![Optimize AWS Instances - The EC2 Recommendation Report](/wp-content/uploads/2017/07/Fig1-The-EC2-Recommendation-Report-1024x573-1024x573.png)

How Much Money is the Report Going to Save Me?
----------------------------------------------

Fortunately, the answer to this question is presented in bold, right at the top of the report.

[![Optimize AWS Instances: Estimated Savings](/wp-content/uploads/2017/07/Estimated-Savings.png)](/wp-content/uploads/2017/07/Estimated-Savings.png)

The actual amount being saved will vary based on your setup, and will change further based on what priorities you would like your particular deployment strategy to include.

Optimize AWS Instances
----------------------

The larger objective of the report is to assist you in selecting instance types which maximize the usage of memory and processing power on the instance based on current usage statistics. The report itself is divided into several sections. At the very top of the report, you have the option to select the number of recommendations shown, and the date range for the report. Sometimes the best way to start looking at optimizations is one part at a time. I'd recommend setting the report to look at the top five or 10 saved, and working from there.

The date range represents the time period for which you would like to analyze instance data. As this is the data used to determine usage and propose changes, a longer time period is preferable. You'll want to include a large enough sampling of data to determine normal usage of your application.

The next section of the report includes various options which you can select to customize the report. We'll talk about these more shortly, and how they can be used to tune the report to optimize your deployments and meet the needs of your organization and its customers.

The third section features a graph which shows solid symbols for existing instances, and open symbols represent the recommendation for that particular instance. If the agent is installed on the instance, the symbol shown is a blue circle. If you don't have the agent installed the symbol will be an orange triangle. The two symbols are connected by a dotted line which represents the changes being suggested. The closer together the symbols are, the closer your existing configuration is to the recommendations of the report. Conversely, the further the symbols are from each other, the further they are from optimal, based on the options selected.

The **Chart View** at the top of the report can be used to toggle between Cost vs. CPU Utilisation, Cost vs. Memory Utilisation, and CPU Utilisation vs. Memory Utilization. The two cost-related views show cost decreases by means of a downward line from the existing to the proposed state of the instance. An upward line represents a cost increase.

[![Optimize AWS Instances: 5 Improvements](/wp-content/uploads/2017/07/Five-Proposed-Improvements.png)](/wp-content/uploads/2017/07/Five-Proposed-Improvements.png)

In the above image, five instances are shown. The three instances identified by orange triangles show a decrease in cost based on a type change, with little or no change in processing ability. The two instances identified by blue dots show both a decrease in cost and an improvement in processing utilization by almost 25%.

The fourth and final section of the report lists the instances included in the report. Elements are listed with the current type and cost, and their recommended change is provided with its associated cost and performance metrics. For further analysis, the report can also be downloaded into a csv file.

[![Optimize AWS Instances: Proposed Changes](/wp-content/uploads/2017/07/proposed-changes-1024x95.png)](/wp-content/uploads/2017/07/proposed-changes.png)

Optimizing the Report Based on Needs and Risk Tolerance
-------------------------------------------------------

Based on your risk tolerance, there are a number of configurations you can make to the report to better fit your needs. Let's look at the top of the report, and examine the options available to tune it.

**Metric Statistic**

The metric statistic is what the report uses to determine the optimal instance for each recommendation. Options range from Maximum**,** the most conservative option, to Minimum, which is the most aggressive. If Maximum is selected, then the report will ensure that the memory and processing usage of the proposed instances will always be able to handle the maximum observed rate based on the current data set.

**Family Constraint**

This option determines what instance types will be selected. If Any Family is selected, the report may suggest any of the instance types available from AWS. If an m4.large instance is analyzed, and the report determines that a t2.small can handle the requirements, then that is what will be suggested.

If Same Family is selected, then an m4.large instance could be analyzed, and a more appropriately sized m3 or m4 instance could be proposed if it would better handle the load.

Finally, if Same Family *and* Generation is selected, then an m4.large will only have m4 instances proposed if they better fit the needs of the application based on the data.

**Maximum CPU and Memory Utilization**

I've grouped these two options together because they are similar in the way they are configured. Unlike the Metric statistic, the degree of risk with these options decreases in correlation with the percentage selected. For example, selecting 90% from either list will result in the proposed instances being selected so that either memory or CPU usage will reach a maximum of 90%.

**Assumed Memory**

This option is used when no agent is installed on the instance, and therefore, no memory usage data can be selected. The possible options for this setting range from 100% to 50%. Selecting 100% configures the report to assume that memory usage at some point during the date range being analyzed peaked at 100%. This is the most conservative setting.

The most aggressive setting is 50%, leading the report to assume that memory usage attained a maximum of 50% during the period being analyzed.

**Iterative Changes and Constant Vigilance**

The one constant we all face in this field is change, whether in the ability to evolve better tools, like EC2 Recommendation reports, or to handle a dynamic service which grows and shrinks based on the needs of our consumers. The EC2 Recommendation Report definitely makes the ability to adapt to change easier, but it's not a one-time report. As professionals in a DevOps era, it is incumbent upon us to continually monitor and improve our services and configurations. The EC2 Recommendation Report just makes that task significantly easier.
