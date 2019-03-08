---
date: "2017-07-07"
title: "Explore S3 Costs with Metricly’s S3 Cost Report"
description: "Find out where your AWS S3 spend is going, rethink your storage needs, and consider how you use your buckets with Metricly's new S3 Cost Report."
category: "Cloud Cost Management"
url: "/s3-cost-report/"
layout: "single"
---
Last year, our team created a suite of [AWS cost reports combining capacity and cost analysis](/updated-ec2-cost-report) for your EC2 instances. Together with our [EC2 Recommendation report,](/ec2-cost-analysis-recommendations) which offers cost-saving recommendations for your EC2 configuration, it's easy to identify over and under-utilized computing resources and save on your AWS bill. Since then, we've also introduced a similar report to [analyze RDS costs.](/rds-cost-report)

Recently, our users asked us to bring the same insights to S3 cost, and since then, our team has been hard at work on a report to help users discover which S3 buckets are costing them the most, and what the spend components are. Data Transfer, Put and Get Requests, Standard storage space, Glacier Storage space, and Number of Objects are all factors that can drive high spend. How do you know if the high cost of an S3 bucket due to the size of used storage space, or because of the number of reads and writes to the bucket?

The idea is to find out where your AWS spend is going, rethink your S3 storage needs, and consider how you use your buckets. You might be surprised to find out how much it's costing you to read and write to the buckets, and conversely, if you have buckets that are never read at all, it might be time to consider moving the data to longer term storage.

This report also allows users to organize their S3 costs by AWS accounts or tag to ensure sure each client, department, project or application is aware of the S3 cost they are incurring.

Here's a look at the report:

![S3 Cost Report: Report View](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/S3-Report.png)

You only need to share read-only access to your AWS billing data with Metricly, and our analytics take it from there. The report shown above breaks down your S3 cost, and allows you to filter and sort by utilization, spend and time.

![S3 Cost Report: Filters](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/S3Filters.png)

You can also view your S3 cost and utilization aggregated by tag, attribute (all S3s in a certain region, for instance), day, week, or month. A daily view is shown below:

![S3 Cost Report: Daily View](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/DailyS3Costs-1024x412.png)

With this report, you gain key insights into your S3 spend, and can take action to lower your AWS bill.

* * * * *

*Want to see where you can save? Try our [S3 cost report free for 21 days](http://app.netuitive.com/signup).*
