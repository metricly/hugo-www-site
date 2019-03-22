---
author: "Andrew Paine"
date: "2016-12-12"
title: "EC2 Cost Analysis and Savings Recommendations"
description: "The new EC2 Recommendation report takes EC2 cost analysis one step further by offering detailed cost-savings recommendations tailored to your environment."
category: "Cloud Cost Management"
url: "/ec2-cost-analysis-recommendations/"
layout: "single"
---

Our research team embarked on a new mission: design a cost report that can not only display your current EC2 cost data, but make recommendations on cost savings as well. Metricly's new [EC2 Recommendation](https://docs.metricly.com/reports/reports-ec2-recommendations/) report (beta) is the product of that mission.

See Also: [The Ultimate Guide to EC2 Instances](/ec2-instances/)

Recommended EC2 Cost Changes to Your AWS Environment
----------------------------------------------------

The EC2 Recommendation Report begins with a lot of the same data as our other EC2 cost [reports](/demystify-your-ec2-cost-analysis): your own AWS billing data, as well as information on pricing for the thousands of different permutations of EC2 type, region, operating system, and so on. The key difference is in the purpose of the report.

Our EC2 cost reports break down your billing data in detail, by element, instance type, or tag. This group of reports also includes a report that compares the cost of each element with that element's [utilization](/subtleties-ec2-cpu-utilization).

[![EC2 Cost Reports](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2ReportsEdited-1024x528.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2ReportsEdited.png)

The new EC2 Recommendation report takes it one step further by offering detailed cost-savings recommendations tailored to your environment. Taking your performance data into account, the report suggests alternative EC2 instance types which may offer similar levels of performance at a lower cost.

For example, in an instance with 8 CPUs but only 10% maximum CPU utilization, the report may recommend an instance with just one CPU. It works the same way for memory, recommending configurations that safely reduce memory capacity to more closely align to the observed level of utilization of your elements. It is also possible to use the report in reverse, i.e., to find incrementally larger instance types that will lower the expected utilization.

The default report suggests the top ten biggest cost-saving opportunities for your environment:

[![reportdetailed](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ReportDetailed.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ReportDetailed.jpg)

This setting can be adjusted to show you the top 20 recommendations, or the top 50, and so on. Currently, the report includes a variety of visualizations (adjusted in the Chart View box above.) Risk tolerance for the report is adjustable using the percentile and family settings in the top right.

The top half of the EC2 Recommendation report shows the projected impact of changing the EC2 type on relevant metrics (based on previously observed performance.) This lets you experiment with different instance types before making any changes.

[![ec2recommendations2](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2Recommendations2-1024x367.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2Recommendations2.png)

The solid blue dots above represent the maximum observed CPU utilization and cost for each element during the report period. The dotted lines connect the solid dots to their respective open dots, which represent the expected maximum utilization and cost for the element if the recommended changes are made.

The bottom half of the report contains recommendation details. For this user, recommendations include using a different instance types for the following elements:

[![ec2recommendations1](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2Recommendations1-1024x191.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2Recommendations1.png)

As well as showing the proposed instance type, the table also includes information on how the number of VCPUs and memory will be affected.

For the best results we recommend installing the [Metricly agent](https://docs.metricly.com/integrations/agents/) on your EC2 instances. However, the report can provide substantial insights even without this data. This report is currently in beta, and we plan to keep enhancing and expanding it as we get more feedback and data.

AWS provides an enormous number of EC2 configurations -- deciding on the best one for every instance in your estate can quickly become "humanly impossible!" The EC2 Recommendation report takes the guesswork out of the process, providing detailed recommendations and a concrete cost-savings amount.

* * * * *

*This report is available in our fully featured free trial.  [Sign up today](/signup) and see your environment's possible cost savings.*
