---
author: "Jason Simpson"
date: "2016-06-03"
title: "PHP Performance Monitoring Made Stress Free"
description: "PHP performance monitoring using open-source tools requires a huge time commitment and extensive configuration. Luckily, there's an alternative."
category: "Cloud Monitoring"
url: "/php-performance-monitoring-made-stress-free/"
layout: "single"
---


PHP [performance monitoring](/aws-cost-tool) using open-source tools requires a huge time commitment. These tools, while free, usually entail extensive setup and configuration. The time commitment required is extended further when your tools don't alert correctly or generate noise with frequent false alarms.

Luckily, paid tools and SaaS solutions take a lot of the wasted time (and extra cost) out of open-source tools. Here's how to make your PHP monitoring stress-free!

How to Monitor PHP Performance
------------------------------

PHP monitoring has three goals:

1) Ensure the site or application is up and functioning properly.

This is the customer-facing part of your business, so it's very important to ensure it's functioning well. Status checks validate uptime, and in the event of an outage you can be notified by an alert.

2) Measure server side response times to make sure everything is working properly behind the scenes.

Instrument timers and gauges keep you apprised of what's happening behind your application. Key metrics are available at a glance to ensure there aren't performance problems brewing.

3) Monitor real-user performance with a browser agent

[![PHP Performance: pagerender](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/pagerender.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/pagerender.png)

Browser agents pull in key performance metrics like redirect time, server lookup time, and page render time. These metrics are the best way to see what site visitors experience.

Why Use a Saas Solution?
------------------------

Using a combination of open-source tools can help with all three of these goals. So, what's the benefit to adopting a SaaS monitoring solution like Metricly?

Setup isn't a chore.\
[\
![statsdsetup](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/statsdsetup-1024x313.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/statsdsetup.png)\
Open-source tools take a lot of work to set up. Configuring monitoring for individual applications has such a high time cost that many teams simply don't implement monitoring for all their applications. Applications that are considered relatively stable get skipped because the time cost of setup outweighs the risk of an outage. In reality, an outage or a PHP performance problem that flies under the radar in an otherwise reliable environment could cause huge problems down the road.Unlike open source solutions, Metricly's setup is easy. You can use any compatible PHP library; the Metricly library supports gauges, counters, and timers, and you can always extend our library or configure your own.You will also need to install the Metricly agent, and the Metricly StatsD server (which is embedded in the agent and can be simply enabled with one configuration change.) From there, you just need to include a PHP client library in your code, and you can begin monitoring!

Metricly also scales much better than open-source monitoring. Once you've gotten the StatsD server set up and the client library configured, adding additional applications requires minimal effort.

Not to mention, you can now monitor your entire stack with a single tool, making it easier to connect application issues to potential infrastructure problems and vice versa. Our browser agent can also use a single datasource to monitor multiple URLs, allowing you to keep an eye on your entire website without having to do a lot of manual setup.

Better Dashboards visualizations make outliers much easier to find.

[![PHP Performance: dashboards](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/dashboards-1024x530.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/dashboards.png)

Better [dashboard visualizations](/devops-dashboard-best-practices) mean better monitoring. Not only do graphs make complicated data easy to visualize, but aggregate metrics make it much easier to see how certain facets of PHP performance behave over time. Being able to view high/low values without needing to manually create graphs or tables is also key to being able to locate and deal with outliers in your PHP application's performance.

Much better alerting

[\
![PHP Performance: alert](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/alert-1024x529.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/alert.png)

Open source tools operate using static thresholds, which don't allow for small, predictable changes in your application. Furthermore, you have to mentally determine appropriate latency values for each part of your application. This means open source tools can produce false alarms -- a lot of false alarms. Monitoring solutions with anomaly detection, on the other hand, utilize contextual "bands of normalcy" that correspond to the normal behavior of your application at any given moment. These bands change and adapt to normal changes in PHP performance. So if you have a certain alert that occurs every time you deploy code on Sunday at 3 am, the bands will recognize those regular shifts and factor them in. However, if there is a change on Sunday at 3am that does not normally occur, it should alert you to that so you can address it if necessary.

The long and short of it: you no longer have to struggle to set thresholds that won't send you the same false alerts every day or week. With anomaly detection, you only receive those alerts that are most likely to indicate actual performance problems.

* * * * *

*Ready to begin monitoring your PHP applications? We offer a [21-day, no-obligation free trial.](/signup)*
