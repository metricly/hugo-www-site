---
author: "Jason Simpson"
date: "2018-01-31"
title: "EC2 Recommendations Report Product Update"
category: "Product Updates"
url: "/ec2-recommendations-report-product-update/"
layout: "single"
---

Welcome to 2018, in our journey to be [the best monitoring platform](/monitoring), we've added a couple features to the EC2 recommendation cost report.

 Not yet setup with Metricly? [Start a free 21-day trial](/signup) to see all the latest features in action!

### Saved Emailed Reports

We have many reports that help you cross-analyze capacity resource utilization and AWS cost to help you optimize the performance and cost of your environment. We have just released an exciting new feature that lets you save these report settings so that you can easily switch between reports or share with colleagues. This data can be shared via the UI directly or by enabling our email notifications. Just toggle on email in the user interface to receive the custom report. A popular use case is to send it to an email alias so that the operations and development teams quickly discover the idle or over-sized EC2s before the bill gets large by the end of the month. Also the saved reports can include custom filters used to exclude EC2s by tag or name for example.

[![Example Saved Cost Report](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/02/SavedCostReport.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/02/SavedCostReport.png)

### Modify Table Columns in Your EC2 Recommendations Report

Our users asked to customize our EC2 Recommendations report by removing or adding columns to it. The available options would be various attributes, tags or customized report functionality. The main use case is that when users receive a particular sizing recommendation they can see at a glance which region the EC2 belongs to or see the value of a given tag (ex. environment:staging). This new feature is particularly helpful since our support for emailed report was released, since users can decorate their reports with the added tags and attributes that are meaningful to them without having to log into our UI. We intend to add the same functionality to our other reports so keep an eye out.

[![Add Remove Columns from Reports](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/02/AddRemoveColumns-1024x410.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/02/AddRemoveColumns.png)

[![Policy Scope Controls](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/02/NewScope-Controls-1024x538.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/02/NewScope-Controls.png)
