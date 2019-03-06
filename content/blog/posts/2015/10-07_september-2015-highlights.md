---
author: "Jason Simpson"
date: "2015-10-07"
title: "September 2015 Highlights"
description: "September was a hot month for us here at Metricly, and you’re set to reap all the benefits! Check out this month's new releases."
category: "Product Updates"
url: "/september-2015-highlights/"
layout: "single"
---

September was a hot month for us here at Metricly, and you're set to reap all the benefits! Custom Webhooks, PagerDuty integration, and External Events are the hallmarks for this past month. The focus has been on implementing new integrations for use cases other than just data ingestion, such as leveraging third party alerting systems, viewing events from other tools, and opening up custom scripting via webhooks.

### Custom Webhook Notifications

[![Custom Webhook (September Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/webhook.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/webhook.jpg)

Webhooks can now take custom content and POST information to the application using Metricly's API. It's a simple process to set up a Webhook notification to pass in a custom JSON payload using parameters and variables defined in our documentation. A default payload is available in the user guide, which you can customize to your needs and liking. Use custom Webhooks to invoke custom scripts that provision additional instances or restart a hung process. It is a powerful combination to use advanced anomaly detection technology to trigger the execution of a script that automates actions like dynamic resource allocation.

### PagerDuty Integration

[![PagerDuty Integration (September Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/pagerDuty1.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/pagerDuty1.jpg)

Netuitive partnered with PagerDuty to seamlessly integrate and trigger alerts in PagerDuty from events created in Netuitive. You can set it up with [these four easy steps](/combining-metricly-and-pagerduty-for-monitoring-alarms/), and start seeing the integration work within minutes.

Seamlessly connecting your DevOps tools is a high priority -- look for more popular stack integrations from Metricly in future releases.

### External Informational Events

[![External Events (September Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ExternalEvents.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ExternalEvents.jpg)

Metricly now accepts events generated from external sources. You can send data from any source, such as AWS SNS, Webhooks, OpsGenie, Pingdom, Logstash and many other third party tools. These external events can be viewed on the events timeline next to Metricly-generated events. Particularly useful scenarios for external event generation include pushing a notification for a system restart, sending data to Metricly when a configuration change has been executed, or sending relevant application or system log entries. The ability to see external events on a timeline alongside performance anomalies detected by Metricly's behavior learning engine helps shorten the time that it takes to troubleshoot a problem.

* * * * *\
Want to see these release highlights in action? We offer a 21-day, [free trial of Metricly.](/signup)
