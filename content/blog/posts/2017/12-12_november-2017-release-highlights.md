---
date: "2017-12-12"
title: "November 2017 Release Highlights"
description: "In our quest to be the best monitoring platform, we've added system checks, policy page improvements, and a new billing page to the product this month."
category: "Product Updates"
url: "/november-2017-release-highlights/"
layout: "single"
---

It's been an exciting November here at Metricly! In our quest to be [the best monitoring platform](/product), we've added system checks, policy page improvements, and a new billing page to the product this month. Check out the highlights below.

 Not yet setup with Metricly? [Start a free 21-day trial](/signup) to see all the latest features in action!

Linux and Windows System Checks
-------------------------------

Metricly now supports system checks for both the Linux and Windows platforms. Both agents have easy to use, out-of-the-box system checks for availability, processes, services, and ports. Our goal in adding system checks was to go beyond basic support for custom scripts. While Metricly does support these use cases, we wanted to also provide a turn-key solution that only requires a one-line update to your configuration files.

We also wanted to address the false positive or "flapping" issues that commonly plague system checks. The false positive issue is typically due to the frequency at which checks are sent into a system and their expected acknowledgement. Minor latency issues or other delays can cause the checks to fire when the system is operating normally. We introduced a buffer to resolve these issues. For example, if you are expecting a check every 60 seconds, Metricly could be configured to give the system an extra 10 seconds before firing. The buffer is completely customizable, and we have seen this technique work very well for our beta testers.

[![Getting started with Checks](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/12/checksScreenShot-1024x442.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/12/checksScreenShot.png)

Getting started with Checks

Another key feature is its simplicity. You can create a custom check on your own by simply posting a URL to a Metricly REST API endpoint with requiring a JSON payload. All you need is an API ID, a new name for your check, and a hostname to associate with the check. To read more about our systems checks, stop by our [checks documentation](/support/events/checks).

Policy Page Improvements: Open and Closed Policies
--------------------------------------------------

One of the keys to any good monitoring tool is its ability to help you [quickly locate issues within your system](/product/dashboards-and-reports). We're making it easier than ever for you to see what's happening by adding new "open" and "closed" conditions to the Policies page. If a policy is "open" that means it is firing right now. "Closed" polices are linked to the time control and will show any policy that fired during a selected time range. We added this distinction to help users troubleshoot when issues are happening, and to assist with retrospectives on past problems. You can also view more details on your policies by clicking on its name to see a slide out with information on which elements, metrics, and/or checks are causing issues in your systems. Our new graphs show the history of each element that violated a policy along with color-coded designation of when the policy violation opened (red) and closed (green). For more information on the [policy page improvement](/support/events/policies).

[![View the policy slide out](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/PolicyPageSlideOut-1024x534.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/PolicyPageSlideOut.png)

View the policy slide out

See Metricly Usage in Real-time
-------------------------------

This month Metricly introduced usage data tracking in your tenant account. To see a running monthly average of your Metricly usage, simply click on your name and then select "Billing". We added this feature to give you even more transparency and clarity in your billing information, so you can manage your usage and avoid any unnecessary overages.

Metricly calculates your usage with hourly snap shots that roll up to daily averages, and finally to a monthly view. Remember that Metricly's billing is only based on the number of hosts (instance hours) being monitored regardless of whether agents are installed on the hosts, other AWS services are being monitored, or whether custom metrics are being collected. Also, Metricly does not double bill for data being collected from EC2s and hosts such as Server (Linux agent) or WinServ (Windows agent), so we've created a separate count called "related". The billing page will show the total usage and then subtract the related elements to give the final billing count.

[![Metering page](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/12/billingScreenShot-1024x572.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/12/billingScreenShot.png)

Metering Page in Metricly
