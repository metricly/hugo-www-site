---
date: "2017-07-06"
title: "Analyze AWS RDS Costs with Netuitive’s RDS Cost Report"
description: "Our new RDS cost report brings automated capacity and cost analysis to our robust AWS monitoring. See where you can save!"
category: "Cloud Cost Management"
url: "/rds-cost-report/"
layout: "single"
---
You may already be familiar with Netuitive's [EC2 Cost reports](/updated-ec2-cost-report), which bring together capacity and cost data to identify under- and over-utilized EC2 instances to help you [save on your AWS bill.](/ec2-cost-analysis-recommendations) Recently, our team applied these reporting concepts to RDS database instances, to automate RDS cost and capacity analysis while preserving the same familiar user interface.

![RDS Cost Report: RDS Integrations List](/wp-content/uploads/2017/07/RDS-Integrations-List-1024x94.png)

AWS's Relational Database Service (RDS) supports a number of different database engines (including Amazon Aurora and MySQL), and provides for each a set of performance and capacity metrics for analysis via the AWS CloudWatch API. We've taken these metrics a step further and created a cost report with unique insights into your AWS RDS instances. Our new RDS report is very easy to activate, and then you're on your way!

The diagram below shows the main page of our new RDS cost report. Check out the features available to users for filtering, sorting and aggregating data:

![RDS Cost Report: RDSCostReport](/wp-content/uploads/2017/07/RDSCostReport-1024x655.png)

The left Y-axis in the chart measures cost, and the right Y-axis measures the utilization aggregated over selectable time periods such as one day, one week, or the previous calendar month. This utilization data can be aggregated using different statistical aggregation methods, including average, mean, 95 percentile, or maximum. A number of [capacity utilization metrics](/3-ways-to-get-capacity-plans-wrong) are also available in this report:

![RDS Cost Report: Aggregate Metrics](/wp-content/uploads/2017/07/MetricAggregations.png)  ![RDS Cost Report: Capacity Utilization Metrics](/wp-content/uploads/2017/07/Utilization-Metrics.png)

This capacity and cost data can also be aggregated in many different dimensions so that you can check the day to day change of your cost and utilization, or separate them by tag, application or department:

![RDS Cost Report: Group Data](/wp-content/uploads/2017/07/Group-Metrics.png)

In the report view below, the change of data is observed over the last 30 days, grouped by week:

![RDS Cost Report: 30 Day Cost Report](/wp-content/uploads/2017/07/30DayCostReport-1024x690.png)

Our new RDS cost report brings automated capacity and cost analysis to our robust [AWS monitoring](/product), which provides preset summary dashboards of your key performance indicators, and leverages behavior learning technology along with pre-configured alerting policies. Ready to see your RDS costs? It's [free for 21 days.](/signup)
