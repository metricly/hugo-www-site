---
author: "Lawrence Lane"
date: "2019-01-30"
title: "AWS Cost Analysis: Exploring Your Cost Deltas"
description: "Learn the best AWS cost analysis techniques, and best-practices in this step-by-step guide. Understand large rises in your AWS spend, and find the root cause of cost delta."
category: "Cloud Cost Management"
url: "/aws-cost-analysis/"
layout: "single"
featured-image: "cost-analysis.png"
thumbnail-image: true
featured: true
---

### Analyzing AWS Cost Deltas

Cost deltas are noticeable rises in resource cost discovered when comparing two distinct time periods in your AWS billing history. This might seem like an obvious place to start when analyzing your bill, however many people do not know their average application workload costs---especially not on a per-instance level. Being familiar with that information is step one. With Metricly, you can take that step and a few more by setting up a daily cost email update in the AWS Services Cost report.

Don't have a Metricly account? Sign up for a [free 21-day trial.](/signup)

### Leveraging Metricly's Cost Reports

Metricly's [AWS Services Cost report](https://docs.metricly.com/reports/reports-aws-services-cost/) is a powerful cost and usage report that leverages data from the [AWS Cost Explorer API](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-api.html) to create a better cost-management experience. In this article, we'll show you how to use this report's Period Comparison functionality to expose unwanted (and surprising) cost deltas.

It's simple: to find the root cause of cost deltas, you have to analyze AWS cost and usage. You can try out several unique combinations of grouping and filtering, but we suggest you start with the scenarios listed below.

Note: this article assumes you are already familiar with the AWS Services Cost report. For a thorough breakdown of all its features, see the [documentation](https://docs.metricly.com/reports/reports-aws-services-cost/).

### AWS Cost Analysis by Service

If just one service is showing a large delta and you want to learn more:

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2019/01/word-image-3.png "post-image")

AWS Cost Period Comparison Grouped by Service

1.  Filter to the service in question.
2.  Change grouping to one that provides more insight.
3.  Add filters to reduce scope.
4.  Repeat steps 2-3 to refine your findings.

Grouping becomes more refined and useful each time you filter to reduce scope.

### Add Next-Level Filters

If you have discovered a significant cost delta but don't know what the money was spent on, group by attributes like *Usage Type* or *Operation*. Doing so enables you to better interpret the *EC2 -- Other *cost category, which captures most--but not all--of the non-instance running EC2 costs.

##### Usage Type

*Usage Type* is the next level of granularity below Service. Usage type attributes are typically prefixed with the region in which usage occurred; they can also be prefixed with multiple regions in cases such as data transfers.

-   Single-Region Prefix: USW2-EBS:VolumeUsage.gp2
-   Multi-Region Prefix: USE1-CAN1-AWS-Out-Bytes

![AWS Services Cost Report: Period Comparison Grouped by Usage Type](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2019/01/word-image-4.png)

AWS Services Cost Report: Period Comparison Grouped by Usage Type

Being familiar with the AWS services involved is important to fully understanding the descriptions provided. Use the regions mentioned to narrow your scope even more. For example, if you have large cost deltas with a usage type prefix of *USW2, *add the REGION *us-west-2* attribute filter to the report to hide usage types for other regions.

#### Operations

Operations are another granular dimension of cost that indicate the specific API action that took place.

| Service | Usage Type | Operation |
| EC2 -- Other | [REGION]-EBS:VolumeUsage | CreateVolume |
|  | [REGION]-EBS:SnapshotUsage | CreateSnapshot |
| CloudWatch | [REGION]-CW:Requests | GetMetricStatistics |
|  |  | ListMetrics |
|  |  | PutMetricData |

![AWS Cost Analysis: Period Comparison Grouped by Operation](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2019/01/word-image-5.png)

AWS Cost Analysis: Period Comparison Grouped by Operation

#### Purchase Type

Usually the Usage Type or Operation attribute is enough to determine the source of the cost delta. If not, another useful dimension to check is the *Purchase Type*. Very large deltas in *EC2 -- Other *costs are often due to upfront reserved instance costs. The *Purchase Type* attribute splits the costs into reserved, on-demand, and spot costs.

### Other Grouping Options

#### Group by Day

Group by day if you know what the money was spent on but need to know when it was spent. This will give you a time series showing the delta on each day in the period which can be very useful comparing the values across a month.

#### Group by Tag

Group by tag If you know what the money was spent on but need to know where it was spent or by whom. These are cost allocation tags that have been enabled in your AWS account. If there isn't a cost allocation tag that helps, enable a tag in the AWS billing preferences. You may even want to add new tags.

Grouping then filtering by Account ID can also help here: first group by account ID to find an account you're interested in then add a filter to reduce the scope to just that account, then switch the grouping back to the tag.

### Some Tips

-   Hide different series in the chart by clicking on the legend. Notice that the grand totals update.
-   Zoom into the charts by clicking and dragging in the chart window.
-   Sort the chart and table data by clicking on a table column.
-   Download the data as a CSV for further analysis in a spreadsheet.
-   Save your report. It may be useful to return to later.
-   Set up a daily email on your favorite saved reports to stay on top of cost changes as they occur.
