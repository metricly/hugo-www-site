---
date: "2017-09-10"
title: "August 2017 Release Highlights"
description: "Metricly rolled out several new features in August, and we are incredibly excited to share them with you."
category: "Product Updates"
url: "/august-2017-release-highlights/"
layout: "single"
---

Metricly rolled out several new features in August, and we are incredibly excited to share them with you. Here are the highlights:

Optimize RDS Cost With Our New RDS Cost Report
----------------------------------------------

If you rely on AWS Relational Database Services (RDS) in your environment, then you will appreciate our new RDS Cost report. RDS supports many database sizes and engine types such as Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, and Microsoft SQL Server.

When you want to know at glance whether you are using all of the CPU, Disk space, or IOPS that you are paying for, you can turn to our report to see aggregated capacity (ex. max, average, 95 percentile) and cost over time (ex. 1 day, 1 week or last month).

To learn more, start with our high-level overview about [analyzing AWS RDS Costs](/rds-cost-report) or read our article about [how to optimize AWS RDS Costs](/optimize-aws-rds-costs).

![Manage RDS Costs: Report Sorted By Cost](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/Report-Sorted-By-Cost-1024x539.png)

Filter Metrics Using Regular Expression
---------------------------------------

[Regular Expression](https://en.wikipedia.org/wiki/Regular_expression) (a.k.a. Regex) is popular in the DevOps community not only because its syntax is easy to remember but because if offers amazing flexibility for selecting exactly the metrics that you want in a sea of thousands of metrics that you are collecting.

For example, [our Linux agent](https://help.netuitive.com/Content/Integrations/linux.htm) collects a metric that measures the average wait in milliseconds for accessing a disk on a given server. If you have dozens, hundreds, or thousands of disks in your environment, and you want to select them without having to click one at a time, then you can use a regular expression. In this case, the regex would be: iostat\..+?\.await.

You can then narrow down your selection further by using a tag for specific servers such as app:dbc (in this case dbc stands for database cluster). This tag may be appended in AWS, be part of the OS image, or appended by your configuration management tool such as Chef or Ansible. The screen shot below shows 24 metrics selected using the criteria above. Creating new dashboards has never been faster!

![Regular Expression filters added to Metricly Dashboard Widgets](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/09/Dashboard-Widgets-Regular-Expression-1024x788.png)

Interactive Demo Site Now Available
-----------------------------------

What is the fastest way to decide if a product can help your specific requirements? How about if you could click around the product without any delay whatsoever? We have made it easier for our prospects to independently assess the fit between [our product features](/product) and their needs, without any delay from the time that they land on our web site.

We have created a demo version of our product that is populated with generic but realistic demo data so that the dashboards, alerts and reports have content, and we have made it available on our web site so that prospects can click around. Please visit our [public demo access page](/demo) to start your assessment and share feedback with us.

This interactive demo complements two other ways you can learn more about Metricly: you can also watch a [7min demo video](/netuitive-overview) of our product, or start a [free 21-day trial evaluation](/signup) which takes only 15min to activate.

![Dashboard view of Metricly's Public Demo account](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/09/Public-Demo-Dashboard-1024x490.png)
