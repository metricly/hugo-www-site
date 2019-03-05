---

date: "2015-07-02"
title: "June 2015 Release Highlights"
description: "This month we released a browser agent, the Metricly host agent, an Estimated EBS cost report, & a daily emailed report. Check out our June 2015 releases!"
category: "Product Updates"
url: "/june-2015-release-highlights/"
layout: "single"
---


In June we focused on bringing more agents and reports into the product. This month we released a browser agent, the Netuitive host agent, an Estimated EBS cost report, and a daily emailed report.

Real User Monitoring (RUM) with Browser Datasource
--------------------------------------------------

[![Real User Monitoring with Browser Data Source (June Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Real-User-Monitoring-with-Browser-Data-Source-1024x435.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Real-User-Monitoring-with-Browser-Data-Source-1024x435.jpg)

Netuitive's browser datasource collects performance metrics that give visibility into real users' experience on your website. It gathers metrics such as server connection time, network latency, and page render time by measuring the browser's full page loading lifecycle. The collected metrics help accurately gauge end user's experience with a web page, identifying the segments contributing the most to latency. The Real User Monitor (RUM) completes the end-to-end instrumentation framework of the Netuitive monitoring service.Set up is quick---create a new browser datasource and copy Netuitive's script tag into the desired web pages for monitoring.

Netuitive Host Collection Agent
-------------------------------

[![Host Collection Agent (June Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Host-Collection-Agent-1024x670.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Host-Collection-Agent-1024x670.jpg)

The Netuitive host agent is a standalone infrastructure agent that collects metrics from the host operating system. It supports a wide variety of plug-ins to monitor middleware and database technologies. This agent collects time-series data along with meta-data from the full application stack. The Netuitive monitoring service allows the combination and cross-correlation of AWS EC2 metrics collected from CloudWatch with the metrics collected from the Netuitive host agent. The Netuitive agent is easily deployed via both RPM and DEB based systems.

Estimated EBS Cost Report
-------------------------

[![Estimated EBS Cost Report (June Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Estimated-EBS-Cost-Report-1024x538.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Estimated-EBS-Cost-Report-1024x538.jpg)

The EBS Cost Report offers the ability to view and analyze estimated cost data for EBS volumes over a selected time period. It requires an AWS Cost Datasource to collect the necessary metrics to create the report.The report can uncover opportunities to lower AWS costs while improving or maintaining performance. For example, a general purpose volume (gp2) may be cheaper and better suited than a standard magnetic volume where high read/write operations are not needed.

The report is sorted by element and can detail information on Storage, P-IOPS (Provisioned IOPS), Read and Write Operations, Total Cost, and more, with the ability to customize the columns displayed.

Daily Emailed Status Report
---------------------------

[![Daily Emailed Status Report (June Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Daily-Emailed-Status-Report.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Daily-Emailed-Status-Report.jpg)

Now users can subscribe to a daily emailed report summary. The emailed report provides an at-a-glance overview for events in the last 24 hours and compares the results to the prior day.Featured data includes the count of performance policy violations, a list of the most active performance policies, and a list of the top 10 violators. Each item highlights a percent change from the previous 24 hours. The event count also conveniently links to the Event Explorer for drill-down.

This report is automatically activated in all accounts. To disable the report, change the preference from your account profile page.

* * * * *\
Want to see these release highlights in action? We offer a 21-day, [free trial of Netuitive.](/signup)
