---

date: "2017-06-16"
title: "May 2016 Release Highlights"
description: "Metricly’s engineers have been hard at work rolling out key features we think you’ll love. May release highlights coming at you below."
category: "Product Updates"
url: "/may-2016-release-highlights/"
layout: "single"
---

[Netuitive's](https://www.metricly.com) engineers have been hard at work rolling out key features we think you'll love. May release highlights coming at you below:

Node.js and PHP Monitoring
--------------------------

[![statsdsetup](https://www.metricly.com/wp-content/uploads/2016/06/statsdsetup-1024x313.png)](https://www.metricly.com/wp-content/uploads/2016/06/statsdsetup.png)

Node.js and PHP monitoring can take a large amount of work to configure, with no support when things don't work as intended, while users are left with the burden to install and maintain graphing and alerting tools to derive value from the instrumentation. Good news! Netuitive is now able to monitor Node.js and PHP applications with our Linux agent's embedded StatsD server. Install any client library (we recommend the [node-statsd-client](https://github.com/msiebuhr/node-statsd-client) library for Node.js, and our own library for [PHP](https://github.com/Netuitive/Netuitive_PHP_Client)) along with our agent, and you're well on your way to instrumenting your code. Setup and instrumentation documentation is available on our help site for further research.

Even More AWS Integrations
--------------------------

[![AWS Integrations](https://www.metricly.com/wp-content/uploads/2016/06/AWS-Integrations.png)](https://www.metricly.com/wp-content/uploads/2016/06/AWS-Integrations.png)

Continuing with the trend of providing more coverage for your AWS environment, Netuitive rolled out support for four new services:

-   **Elasticache**: Amazon's easily-scalable in-memory cache service. Elasticache comes in two varieties: Memcached (object caching system) and Redis (memory key-value store that supports various data structures). Elasticache can increase the performance of your web applications by allowing the application to use a fast cache that's in the application's memory rather than on the server's disk.
-   **DynamoDB:** Amazon's NoSQL database for applications that require minimal latency at any scale. It's a database that's maintained in the cloud and supports document and key-value store models. Because of its flexibility, it's useful for mobile, web, gaming, ad technology, internet-of-things, and other application types.
-   **Redshift:** Amazon's colossal-scale (think petabytes) data warehouse that's maintained in the cloud. Redshift is optimized for larger data sets and costs a tenth of most on-premise data warehousing offerings.
-   **Kinesis Streams:** Amazon's streaming data platform. Kinesis allows users to analyze their streaming data and customize their data streams for each of their applications. Kinesis streams keeps maintenance simple and costs low for streaming data for all of your applications, devices, sensors, and more, which can all stream data at rates upward of terabytes per hour.

Our new AWS integrations not only give you robust performance metrics, you also get our pre-built computed metrics, alerting policies, and configured dashboards. Most importantly, we built all of it on our signature behavioral learning platform so you can spend less time "monitoring" your monitoring. AWS combined with Netuitive just got even better.

Vertically Resizing Widgets
---------------------------

[![may-rnh-widget-height-resizeEDIT2](https://www.metricly.com/wp-content/uploads/2016/06/may-rnh-widget-height-resizeEDIT2-1024x603.png)](https://www.metricly.com/wp-content/uploads/2016/06/may-rnh-widget-height-resizeEDIT2.png)\
We've updated our dashboards to give you more flexibility in displaying widgets. You're now able to vertically resize entire rows. Once you have your first few rows, access the row menu and set your preferred height. Voila, your widgets automatically resize to fit any of the following conditions:

-   **S (Small):** The row will take up 25% of your dashboard's screen.
-   **M (Medium):** The row will take up 33% of your dashboard's screen.
-   **L (Large):** The row will take up 50% of your dashboard's screen.
-   **XL (Extra Large):** The row will take up 100% of your dashboard's screen.

New Status Checks
-----------------

[![may-rnh-http-code](https://www.metricly.com/wp-content/uploads/2016/06/may-rnh-http-code-1024x603.png)](https://www.metricly.com/wp-content/uploads/2016/06/may-rnh-http-code.png)

Netuitive added status checking support for Sensu and our HTTP Code Collector so instead of watching three or four apps at once, you can log into Netuitive for a consolidated look into the health of your environment.

Sensu: Monitor up- and down-states for elements, processes, REST API endpoints, and other concepts using external events. Check out our [Sensu documentation](https://help.netuitive.com/Content/Events/sensu.htm) for more information.

HTTP Code Collector: See HTTP response codes come in as two separate metrics, which you can use to trigger policy alerts. Check out our [HTTP Code collector documentation](https://help.netuitive.com/Content/Misc/Datasources/Netuitive/integrations/http_code.htm) for more information.

* * * * *

*Want to see these features live in  your own environment? We offer a [free, no-obligation trial for 21 days](https://www.metricly.com/signup). *
