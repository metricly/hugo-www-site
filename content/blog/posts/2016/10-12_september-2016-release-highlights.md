---

date: "2016-10-12"
title: "September 2016 Release Highlights"
description: "In September, we focused on making Metricly easier to use and more customizable. This allows users to spend less time on configuration and maintenance."
category: "Product Updates"
url: "/september-2016-release-highlights/"
layout: "single"
---


In September, we focused on making Netuitive easier to use and more customizable, allowing users to spend less time on monitoring configuration and maintenance. Netuitive's September 2016 release highlights include package auto-provisioning, element name templating, and ASG Tuning Report improvements.

ASG Tuning Report Improvements
------------------------------

Even though it's still in beta, we cooked up improvements to help you fine tune your [Auto Scale Groups (ASGs.)](/optimize-auto-scale-groups-asg-tuning-report)  First, we improved the tuning parameters that allow you to customize your unique ASG optimization strategy. Second and most importantly, is the addition of an estimated cost associated with your current model as well as your simulated model.

As you adjust the tuning settings, you'll now see your projected savings change on the report in real time. Whether you customize the settings or use preset strategies, the cost savings will vary depending on how aggressive or conservative you set your strategy.

This report does more than help you with deriving your cost savings; it also allows you to ensure sufficient capacity for peak workload. Remember, you can [generate hourly notifications](https://help.netuitive.com/Content/Reports/asg_tuning_report.htm#creating-a-recommended-instance-related-policy) in the form of instant messages or Webhooks to help change your ASG node count on an hourly or daily basis.

Package Auto-Provisioning
-------------------------

When you activate a data integration that has an accompanying monitoring [monitoring package](/aws-monitoring-best-practices-using-pre-configured-dashboards) (preset dashboards, policies, and analytics), the package is automatically enabled and provisioned to your account as soon as Netuitive receives data. The provisioning will save you time by auto-configuring the best practices inside your account for each integration type, such as AWS ELB, Linux, or MySQL. This can save you precious time in getting started with monitoring.

Once a package is provisioned, it can be enabled and disabled as necessary, so that you can add or remove the package materials at the click of a button! A full list of Netuitive monitoring packages, defined as a set of JSON configuration files, is available in our [GitHub project](https://github.com/netuitive-community-packages).

Custom Filters for EC2 Cost Savings Report
------------------------------------------

For your convenience, we added custom filters to our EC2 cost savings report. You can now select any attribute, including aggregated weekly utilization or cost measurements, and filter the EC2s based on those parameters. Our previous filters are still available, such as filtering by AWS tag.

Here's a common use case: apply the new filters to quickly identify the EC2s that had more than $100 in total weekly cost and less than a maximum (or 95-percentile, or average) utilization of 10% during the same period of a week. You can then export the list in CSV format.

[![EC2 Report Custom Filters](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2ReportCustomFilters-1024x485.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2ReportCustomFilters.png)

Control Frequency of Subsequent Notifications
---------------------------------------------

[![notifications](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Notifications.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Notifications.png)
----------------------------------------------------------------------------------------------------------------------------------------------------------------

We added new controls that allow you to choose the frequency at which you would like to be renotified when an alerting policy is being violated. Choose from a variety of time frequencies (1 hour, 24 hours, etc.) and channels through which you wish to be notified (ex. email, PagerDuty, Slack, webhook, etc.).  In all, this feature allows you to avoid being flooded with notifications without forgetting about attending to a less critical performance issues.
