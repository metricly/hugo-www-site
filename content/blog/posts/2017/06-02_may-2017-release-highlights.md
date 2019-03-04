---
date: "2017-06-02"
title: "May 2017 Release Highlights"
description: "It was a busy month for the Metricly engineering team, deploying key features across the platform from reports to notifications. Read on to see what's new!"
category: "Product Updates"
url: "/may-2017-release-highlights/"
layout: "single"
---
May was a busy month for the Netuitive engineering team, with the deployment of several key features across the platform: from reports, to notifications. Read on to see the highlights!

Metric Chart Images in Notifications
------------------------------------

Getting an event notification means something in your system is deviating or a threshold has been reached, but sometimes it's tough to tell by how much without having to read all the details in the notification message. For example, is the deviating metric just outside the band of normalcy or is it ten times higher than normal? We've made it easier than ever to discover that context by placing an image of the metric's recent values right inside the notification, giving you a quick glimpse into the metric's current behavior.

Working with custom templates? No problem. In addition to supporting the metric charts by default, we added an image variable for the custom templates. This allows you to control the presence of images in addition to plain text in the custom notification templates. Starting now, email and [Slack monitoring notifications](/slack-channel-integration) have embedded images of relevant metrics with support coming soon for the other notification types.

![May 2017 Highlights: Images in Notifications](/wp-content/uploads/2017/07/Images-in-Notifications.png)

Updated EC2 Cost Report
-----------------------

We've recently made some changes to our EC2 Cost report to improve data filtering, but also to add several new features to gain better insights into your overall cost.

Previously, the EC2 Cost Report presented [AWS cost data](/demystify-your-ec2-cost-analysis) and performance statistics for weekly periods only. Now the report is updated daily, and can show aggregated cost and utilization performance data across any range from a day to a month. You can also extrapolate the costs to the end of the month and see how they will compare with the previous month. As with all report views, you can filter the selection to any subset of your EC2s.

![May 2017 Highlights: Updated EC2 Cost Report](/wp-content/uploads/2017/07/Updated-EC2-Cost-Report.png)

We've added EBS costs that are linked to EC2s, so now you have a broader view of the costs of an individual EC2, as well as improved filtering and sorting for environments with hundreds or thousands of EC2s so that you can view only the top elements according to your criteria.

Improved Notifications from Ingested Text-based Events
------------------------------------------------------

Currently, you can use our API to send any text-based events into our application. Those external events are added to the event graph to provide more context when troubleshooting performance issues. Often, a user might want to set an alert by parsing the text in those external events.

For example, every time you deploy code an external event might get posted to our API. Now you could set up a policy to raise an alert every time the code deployment has a failure message, with a notification to relay all the details in that external event to your [notification end-point](/combining-netuitive-and-pagerduty-for-monitoring-alarms) (e.g.: email, Slack or PagerDuty). We also included additional variables so you can customize the content of the notification message based on selective information in the external event.

![May 2017 Highlights: External Events Notifications](/wp-content/uploads/2017/07/External-Events-Notifications-1024x598.png)

* * * * *

*All of our May 2017 Releases are live in Netuitive's* [*21-day, no-obligation free trial*](/signup)*. See what better monitoring can do for you!*
