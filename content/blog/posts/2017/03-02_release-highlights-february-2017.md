---

date: "2017-03-02"
title: "Release Highlights – February 2017"
description: "Metricly’s February 2017 release highlights include improved dashboard layouts, new Java monitoring options, and integration enhancements."
category: "Product Updates"
url: "/release-highlights-february-2017/"
layout: "single"
---

Netuitive knows you don't need sweets or romantic dinners to swoon; it's the new features you're after! Fall in love with monitoring all over again because our engineering team cooked up another amazing set of features.

Netuitive's February 2017 release highlights include improved dashboard layouts, new Java monitoring options, and integration enhancements.

New Dashboard Builder Functionality
-----------------------------------

[![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Gif7.gif)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Gif7.gif)

Managing dashboard layouts is a whole lot easier! [Dashboard layouts are now completely customizable](/netuitive-dashboard-upgrades). Drag and drop widgets where you please or make your widgets whatever size you like using a familiar window-resizing dragging motion. Widgets can now be added to dashboards and placed anywhere you want using the new, easy-to-use UI.

Don't worry about the layouts of your existing dashboards: in converting all dashboards to the new custom grid interface, we preserved the layouts for the dashboards you've created already! Please play around with the updated functionality when you get a chance and share feedback with us.

Additional Java Monitoring Options
----------------------------------

[![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/feb_rnh_java_int.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/feb_rnh_java_int.png)

Your Java code can be easily monitored with the use of our Java agent that is based on the [Zorka open source project](http://zorka.io/) and provides byte-code instrumentation. This approach is most helpful for operations teams who want to monitor Java code down the method call level but don't want to change the source code. Our agent can be installed as a JAR and can monitor your application via the byte-code.

We are now introducing new libraries that allow your developers to instrument their Java code as they wish and send similar method-call level metrics (e.g., count, latency, and error rate) to our Linux agent or to our REST API. Please read more to learn about our various options:

1.  Netuitive's [Ananke library](https://github.com/Netuitive/Ananke) allows your Java applications to communicate with and send information to a StatsD listener. Use Ananke to send metrics from your Java Applications to a StatsD server, which will then relay the metrics to the Netuitive REST API. For more information, check out the [help page](https://help.netuitive.com/Content/Integrations/ananke.htm).
2.  Netuitive's [Iris library](https://github.com/Netuitive/Iris) allows Java applications to communicate with Netuitive's REST API. Use Iris to send metrics from your applications to Netuitive; create dashboards, tags, and elements; and much more. Check out the [help page](https://help.netuitive.com/Content/Integrations/iris.htm) for more examples.
3.  The Dropwizard integration uses Netuitive's custom [Dropwizard Metrics Library](https://github.com/Netuitive/dropwizard-metrics) to send metrics collected by Dropwizard to a StatsD server, which can then be forwarded to Netuitive for monitoring. The [help page](https://help.netuitive.com/Content/Integrations/dropwizard.htm) will get you started.

Existing Integration Enhancements
---------------------------------

[![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/feb_rnh_int_upd.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/feb_rnh_int_upd.png)

Netuitive's support and engineering teams improved several integrations with existing Quick Start monitoring packages. Read [this blog](/aws-monitoring-best-practices-using-pre-configured-dashboards) to better understand the value and concepts behind our Quick Start monitoring package. They've also worked on several new integrations to expand our ability to monitor more technologies in your environment.

1.  Cassandra and Kafka integrations were improved to pre-select the essential Key Performance Indicators (KPIs) that are most relevant to standard monitoring needs based on best practices. We still allow additional metrics to be collected by configuring the agent if desired. Existing dashboards and policies have also been updated, so you can focus more on the most important metrics.

2.  We now use the same library for both Kafka and Cassandra to convert JMX data to JSON format as we collect metrics. The open source community that originally developed these two collectors for the Diamond Linux agent had adopted two separate libraries for converting JMX data to JSON. We felt that using the same library for data collection from both Kafka and Cassandra would be easier for our users.

3.  MongoDB and RabbitMQ now have Quick Start monitoring packages! When you setup these data integrations, you'll now get default dashboards, alerting policies, and computed metrics set up for your environment and avoid the need for any manual configuration as you get started with monitoring RabbitMQ and MongoDB.

* * * * *

*These release highlights are just a small part of what makes Netuitive a top monitoring solution. See the rest of our outstanding features in your own environment with our [21-day free trial](/signup).*
