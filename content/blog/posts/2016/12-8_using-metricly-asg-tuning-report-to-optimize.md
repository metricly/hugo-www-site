---
author: "Mike Mackrory"
date: "2016-12-08"
title: "Using the Metricly ASG Tuning Report to Optimize for Cost and Performance"
description: "In this post, we’ll walk through the practical application of recommendations offered in the Auto Scale Group Tuning Report to achieve optimal ASG usage."
category: "Cloud Monitoring"
url: "/using-metricly-asg-tuning-report-to-optimize/"
layout: "single"
---

In a post entitled [Optimize Your Auto Scale Groups With ASG Tuning Report](/optimize-auto-scale-groups-asg-tuning-report), Andrew Paine discusses the advantages of using the ASG Tuning Report to optimize your Auto Scaling Groups (ASGs). Among the reasons he presents are trends observed by Metricly with respect to the size and actual utilization of ASGs and the instances they contain.

The bottom line is that there is a really good chance that your ASG configuration could be better tuned to achieve better efficiency and performance. In this post, we'll walk through the practical application of the recommendations offered to achieve optimal ASG usage.

The Auto Scale Group Tuning Report and How to View It
-----------------------------------------------------

Once you have logged into Metricly, the [Auto Scale Group Tuning Report](https://app.netuitive.com/#/reports/asgtuning/latest) can be accessed through the Reports Menu on the main navigation bar.

[![ASG Tuning Report Dropdown](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ReportsDropdown.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ReportsDropdown.png)

Fig 1. Location of ASG Tuning Report

Before you can view the report, you'll need to have at least one calendar week of data which has been reported to Metricly. This data is required to analyze and identify trends within the ASG. While one week is the minimum, Metricly can analyze up to four weeks of data to better understand the traffic and operations of your ASG. Once Metricly has gathered sufficient data, you'll be able to view the Auto Scale Tuning Report, and move on with the rest of the steps.

Understanding the Historical Report
-----------------------------------

When first observed, the Auto Scale Group tuning report is divided into two distinct sections. The first section, located on the left, contains both the history of the ASG size or instance count, and utilization of those instances.

[![Historical Auto Scale Group Performance](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Historical-ASG-Performance.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Historical-ASG-Performance.png)

Fig. 2 Historical Performance of the ASG.

You can observe in the Historical Instance Count graph above that there were four occasions during the week when the ASG policies were invoked and the size of the group was increased to greater than 15 instances. At all other times, the group retained a constant size of 15 instances. The four periods of instance increase correlate to the Historical Utilization graph, where utilization surpassed what appears to be approximately 75% utilization. So we can confirm that our ASG is increasing when needed to handle additional traffic.

In addition to the peaks of high utilization, the Historical Utilization graph shows regular decreases in usage below 50%, and dropping as low as 20%. During these periods of low usage, the ASG set at 15 instances is overkill, and it would make sense from an optimization perspective to reduce the number of instances during these periods. These trends of high and low traffic are exactly what the Tuning Report was designed to identify, in order to better manage the size of the ASG.

Understanding the Tune and Optimize Suggestions
-----------------------------------------------

The tuning suggestions for the ASG are displayed in the series of graphs located on the right- hand side of the report. While these suggestions are calculated automatically, they can be configured based on the level of risk and efficiency you are comfortable with. At the top of the screen, you can select a model depending on whether you would prefer to be more conservative or aggressive with the suggestions.

[![Auto Scale Group Tuning Model Preset Selection](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Auto-Scale-Group-Tuning-Model-Preset-Selection.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Auto-Scale-Group-Tuning-Model-Preset-Selection.png)

Fig 3. Tuning Model Preset Selection

You also have the option to further refine current options, depending on what you know about traffic patterns and how you would like the ASG to respond to increases and decreases in traffic. Each of these settings is explained in greater detail on the help page for the [Auto Scale Group Tuning Report](https://hlp.app.netuitive.com/Content/Reports/asg_tuning_report.htm).

[![Auto Scale Group Tuning Settings](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Auto-Scale-Group-Tuning-Settings-1024x59.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Auto-Scale-Group-Tuning-Settings.png)

Fig 4. Tuning Settings

As you use different models, and refine the settings for the ASG, you can automatically see the projected savings and estimated cost of the ASG, relative to its historical state. This is useful if you want to weigh availability against cost, and determine how much risk you are prepared to embrace. In addition to observing cost savings, you can also view the effect that the proposed tuning will have on the instance count, and corresponding utilization.

[![Tuned or Projected Auto Scale Group Performance](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Tuned-or-Projected-Auto-Scale-Group-Performance.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Tuned-or-Projected-Auto-Scale-Group-Performance.png)

Fig. 5 Tuned/Projected Performance of the ASG.

Enabling the Use of Tuning Suggestions
--------------------------------------

Information is powerful, but only so far as it can be applied to achieve results. By implementing the recommendations developed through the Auto Scale Group Tuning Report, you can ensure that the ASG is appropriately sized during times of increased traffic, and reap cost savings by reducing the size during times of decreased traffic.

The first step in implementing the recommended tuning solution is to save the Recommended Instance Count Metric. This can be done by clicking "Activate" in the bottom right corner of the report below the Tuned/Projected Performance graphs. If the metric has already been activated, but you have changed it, click "Update." And if you no longer want to implement the tuned solution, you can click "Deactivate." Note that it may take some time to register and populate for the following step.

Configuring the Instance Resize Policy
--------------------------------------

[![Metric Deviations for Auto Scale Group Resize Policy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Metric-Deviations-for-Auto-Scale-Group-Resize-Policy.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Metric-Deviations-for-Auto-Scale-Group-Resize-Policy.png)

Fig. 6 Metric Deviations for ASG Resize Policy

Finally, click on the "Notifications" tab, and click "Add Notification." Metricly supports multiple options for notifications, including:

-   Email
-   HipChat
-   OpsGenie
-   PagerDuty
-   SNS
-   Slack
-   Webhook

Select the type or combination of types and enter the appropriate information required. One option you may want to consider is sending a message to an SNS queue, and enabling a scale out and scale in policy inside AWS that can be called to resize your ASG when needed.
