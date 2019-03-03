---
author: "Christina DiSomma"
date: "2017-01-25"
title: "How to View and Manage Individual AWS EC2 Costs"
description: "Metricly's report has 5 different views of your EC2s, comparing key performance metrics with cost on an instance-by-instance basis for easy cost savings."
category: "Cloud Cost Management"
url: "/view-manage-individual-aws-ec2-costs/"
layout: "single"
---
***Note****: If you haven't seen my colleague Andrew Paine's [blog on demystifying your EC2 reporting](https://www.metricly.com/demystify-your-ec2-cost-analysis), you may want to start there first. This blog is a much deeper dive and builds on many of the points he makes in his blog.*

Individual EC2 costs are often very difficult to quantify -- but they also have a huge impact on overall AWS spend. Amazon offers a breakdown of EC2 costs, but the detailed report with resources and tags is so in-depth it's almost unusable.

![](https://www.metricly.com/wp-content/uploads/2017/01/EC2Billingreedited-1024x626.png)

Even if you *could* look through all those rows, further metric data is needed to create actionable insights.

Exploring Individual AWS EC2 Costs
----------------------------------

To solve this issue, [Netuitive](https://www.metricly.com/product) offers a [detailed EC2 cost report](https://help.netuitive.com/Content/Reports/ec2_cost_report.htm) that offers five different views of the cost *and* utilization of your EC2 instances. When key performance metrics are compared with cost on an instance-by-instance basis, it's easy to spot cost-saving and other optimization opportunities.

Here are the five views contained in the report:

| **Report Name** | **Purpose** |
| --- | --- |
| Cost By Element (Default View) | Displays the cost for each EC2 Element in your environment broken down into easy to understand categories. |
| Cost By Instance Type | Shows the cost breakdown by each type of EC2 instance used in your environment (m4.2xlarge vs. t2.small, for example.) |
| Cost by Tag | Displays the cost for all grouped by tag. |
| Total Cost Pareto | Pareto chart representation of the EC2 cost categories in use in your environment. |
| Cost vs. Utilization Scatter | Scatterplot displaying the cost of each instance set against a choice of utilization dimensions for that instance. |

For the most precise metric data, we recommend you set up an AWS Cost Savings instance, which will pull your AWS billing data into Netuitive. If you choose not to do this, you can still use the EC2 cost report -- but the data will be an estimate and won't include data transfer costs or discounts for reserved instances etc.

All of these reports use CPU Utilization Percentage data as a default metric. You can also choose the Active Hours metric or, if you have a Netuitive agent installed on your EC2 instances, you can also choose Memory Utilization Percent, Disk I/O Percent or Network I/O Percent.

### Cost By Element

[![Manage Individual AWS EC2 Costs: Cost By Element](https://www.metricly.com/wp-content/uploads/2017/07/Cost-By-ElementGIF.gif)](https://www.metricly.com/wp-content/uploads/2017/07/Cost-By-ElementGIF.gif)

In this view, cost levels are plotted against the left axis, and [utilization](https://www.metricly.com/subtleties-ec2-cpu-utilization) plotted against the right. In the default view, these instance are sorted according to highest cost, with utilization represented by the black dots. Each instance is represented by the shaded bars, and each color is used to represent a different cost source (on-demand instance, data costs, etc.)

[![Manage Individual AWS EC2 Costs: Utilization Metric Highlight](https://www.metricly.com/wp-content/uploads/2017/07/UtilizationRightSide.png)](https://www.metricly.com/wp-content/uploads/2017/07/UtilizationRightSide.png)

If you hover over selected elements, the report displays more specific metric values. In this case, ele04 has spent $357.07 total in the last week, with $286.44 being spent on hourly on-demand instance fees.

### Cost By Instance Type

This report is similar to the Cost by Element Report, except your elements are grouped by instance type. It's worth noting that in all of the views you can filter the elements that are shown by name, attributes, tags and more.

Like the Cost by Element view, the Cost by Instance Type view offers a deeper dive when you hover over an element:

[![Manage Individual AWS EC2 Costs: Cost by Instance Type](https://www.metricly.com/wp-content/uploads/2017/07/Cost-by-InstanceGIF.gif)](https://www.metricly.com/wp-content/uploads/2017/07/Cost-by-InstanceGIF.gif)

### Cost By Tag

The cost by tag view is very powerful. By using AWS tags on your EC2 instances or custom tags created in Netuitive you can create your own custom dimension by which to group the costs. For example, if you have a 'department' tag you can show costs allocated per department. Similarly, if you have an environment tag you can see how much you are spending in each environment.

[![Manage Individual AWS EC2 Costs: Cost by Tag](https://www.metricly.com/wp-content/uploads/2017/07/Cost-by-TagEdited-1024x455.gif)](https://www.metricly.com/wp-content/uploads/2017/07/Cost-by-TagEdited.gif)

In addition to the graph, the table above shows how many instances are included under a given tag as well cost and utilization metrics for all elements with that tag.

Here, the EC2s tagged as "UIUX" spend the most, but also utilize far more CPU than servers tagged "aic", which spend only slightly less. In that case, you may want to look at the intended functionality for the latter group of servers and decide if this constitutes a cost-saving measure or not.

### Total Cost Pareto

This view shows a Pareto chart of the costs. The bars show cumulative costs by category and the line shows the cumulative percentage. Pareto analysis is useful to find the most significant among a set of factors contributing to a whole -- in our case cost.

[![Manage Individual AWS EC2 Costs: Total Cost Pareto](https://www.metricly.com/wp-content/uploads/2017/07/Pareto1-1024x528.png)](https://www.metricly.com/wp-content/uploads/2017/07/Pareto1.png)

In the above report, for example, on-demand instances account for 41.72% of cumulative costs. We can also see that just the first three categories contribute nearly 60% of the overall costs. Here's a clearer picture:

[![Manage Individual AWS EC2 Costs: Pareto View](https://www.metricly.com/wp-content/uploads/2017/07/Pareto2-1024x294.png)](https://www.metricly.com/wp-content/uploads/2017/07/Pareto2.png)

### Cost vs. Utilization Scatter

Like several of the other reports in this group, cost is compared with utilization -- in this case, 95^th^ percentile CPU Utilization Percent.

[![Manage Individual AWS EC2 Costs: Cost vs. Utilization](https://www.metricly.com/wp-content/uploads/2017/07/costvsutilization.jpg)](https://www.metricly.com/wp-content/uploads/2017/07/costvsutilization.jpg)

Like the Cost By Tag view, in this view you can choose a tag to group the elements. Elements with the same tag are given the same shape (see the key above; aic is a blue diamond while analytics is a purple circle).

The chart makes it easy to visualize which elements are under-utilized and costly (at the top left) vs well-utilized and less expensive (at the bottom right). It is particularly useful if you have a large number of elements and can clearly show the relative costs of 1,000s of instances at once.

This report view is also excellent for discovering outliers. For example, take a look at where all of the blue diamonds are located: in the top left corner. We had already noted in the Cost by Tag section that aic elements had higher costs and lower utilization than the other groups, but now we also know that the issue isn't isolated to just one element in that group. That's a bit of additional context that can help you pinpoint real AWS cost savings.

Also, take a look at the brown diamonds representing 'acs'. Three of them are clustered together but one is off to the left indicating it has a lower utilization despite having a similar cost. It might be worth investigating this element further to see why it is behaving differently from its peers.

Ideally, these reports have given you some actionable insights into your EC2 costs. If you're ready to see these reports with your own data, check out Netuitive's [21-day free trial](https://www.metricly.com/signup). We'd be happy to walk you through these reports and discover any possible [cost savings](https://www.metricly.com/ec2-cost-analysis-recommendations) your team can expect.
