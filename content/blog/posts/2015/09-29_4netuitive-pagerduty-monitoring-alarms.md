---
author: "Jason Simpson"
date: "2015-09-29"
title: "Combining Metricly with PagerDuty for Monitoring Alarms"
description: "Metricly is excited to announce a new integration with PagerDuty. Now, users can easily enable a seamless connection of the two services."
category: "Product Updates"
url: "/metricly-pagerduty-monitoring-alarms/"
layout: "single"
---
Netuitive is excited to announce a new integration with [PagerDuty](https://www.pagerduty.com/).

This blog demonstrates how easy it is to send Netuitive monitoring alarms to PagerDuty. Netuitive provides an intuitive web UI that sends event details to any external system for alerting. By using this to send information through PagerDuty's API, users can easily enable a seamless connection of the two services.

Below is an example use-case walking through setup and the alerting procedure:

Use Case

Metrics collected from Netuitive's browser agent can use a dynamic policy set to determine if the total response time on your homepage is above the expected threshold (automatically determined through behavior learning.) Once the policy observes this condition, it will generate an event and Netuitive will send event data to PagerDuty as an incident which will alert the team to take action.

Real Life Example

While Netuitive is monitoring a website, it experienced some performance issues including a 9.2 second page load time at 469% above normal. Because this data spiked well above expected behavior, an event is triggered and Netuitive simultaneously opens an incident in PagerDuty.

[![Real Example (PagerDuty)](https://www.metricly.com/wp-content/uploads/2016/03/real-example.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/real-example.jpg)

Setup

You can leverage PagerDuty's REST API to create the incident using Netuitive data. It only takes 4 steps:

1.  Access your API key in PagerDuty
2.  Create your notification type in Netuitive
3.  Add this notification to a Netuitive policy
4.  Alerts now automatically generated in PagerDuty

Here's a more detailed walk through:

1\. In PagerDuty users can create an API service which generates the key required in Netuitive. This key will be used in the body of the JSON message. So you just simply need to copy this 32 bit string.

[![ServicesKey (PagerDuty)](https://www.metricly.com/wp-content/uploads/2016/03/ServicesKey.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/ServicesKey.jpg)

2\. In Netuitive, now create the notification. The details for the custom JSON payload are in the product documentation.

[![Step 2 (Pager Duty)](https://www.metricly.com/wp-content/uploads/2016/03/Step-2.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/Step-2.jpg)

3\. Now add the notification to any policy in Netuitive.

[![Step 3 (PagerDuty)](https://www.metricly.com/wp-content/uploads/2016/03/Step-3.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/Step-3.jpg)

4\. When the policy is triggered, an incident is opened in PagerDuty and your team is alerted appropriately.

[![Step 4 (PagerDuty)](https://www.metricly.com/wp-content/uploads/2016/03/Step-4.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/Step-4.jpg)

While surprisingly quick to set up, the process offers much needed flexibility without creating longer implementation times. The entire process takes about 15 minutes to set up in a production environment.

* * * * *

Try it for yourself -- start monitoring with [Netuitive](https://www.metricly.com/) and take advantage of our [21-day free trial](https://www.metricly.com/signup).
