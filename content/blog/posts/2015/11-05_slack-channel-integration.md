---
author: "Jason Simpson"
date: "2015-11-05"
title: "Integrate Chat & Events with Metricly and Slack"
description: "Fear not: even though it’s cooling off outside, our team is heating up! Shared dashboards are just the beginning of October's new releases."
category: "Product Updates"
url: "/october-2015-highlights/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

DevOps teams are moving away from basic email alerts for issues or events and are instead using chat tools like [Slack](https://slack.com/) for notifications to allow greater flexibility in response and communication. [Slack](https://slack.com/) offers several ways to send data to a Slack Channel, and Metricly has provided an easy way to integrate the services. In this blog, we will walk-through how to use webhooks to send Metricly monitoring events into Slack.

**Use Case:** For monitoring a cluster of NGINX web servers for performance and availability, the DevOps team set up a Slack Channel to have a single place to view and coordinate efforts on all events coming from Metricly monitoring.

**Our Real Life Example:** We have a multiple web server cluster running the front end for a production application. Metricly is monitoring all the KPIs for these NGINX servers. Metricly monitoring is continuously learning and baselining those metrics. A dynamic policy is set in Metricly to send a single event when *requests per second*, *server error rate*, and *request processing time* are increasing above the learned baselines. When these conditions are reached, Metricly sends out a notification to Slack, which can then be viewed on the team's Slack Channel.

[![Slack UI (Slack Integration)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/SlackUI-1024x407.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/SlackUI.jpg)

It only takes 15 minutes to enable the integration to pass data between Metricly and Slack in a production environment. The entire process is completed with two simple steps:

1) Enable the webhook functionality on your Slack administration page.

[![Step 1 (Slack Integration)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Step1.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Step1.jpg)

2) Add the sending webhook in Metricly.

Here you can add any static message or leverage Netutive's system variables to send more dynamic information about the events.

[![Step 2 (Slack Integration)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Step2.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/Step2.jpg)

While surprisingly quick to set up, the process offers much needed flexibility without creating longer implementation times.

* * * * *\
Try it for yourself -- take advantage of our 21-day [free trial](/signup) and start monitoring with [Metricly](/) today!
