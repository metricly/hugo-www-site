---

date: "2016-11-07"
title: "October 2016 Release Highlights"
description: "Metricly’s October 2016 release highlights include improvements to Docker collection, our Ruby agent, the User Scripts Collector, and Cassandra collection."
category: "Cloud Monitoring"
url: "/october-2016-release-highlights/"
layout: "single"
---

While fall settles in outside, Metricly focused on improving some of our most popular integrations and monitoring packages as well as adding support for a new integration.

Metricly's October 2016 release highlights include Docker collection improvements, Ruby agent improvements, the User Scripts Collector, and Cassandra collection improvements. Read more...

Docker Monitoring Improvements
------------------------------

Docker is one of the hottest technologies on the market right now, so the ability to monitor your Docker hosts and containers is increasingly becoming a necessity. We've been fine tuning our Docker agent for several weeks now to create one of our signature Quick Start packages to help you get an even better day-one experience when you install our Docker agent.

Our Docker QuickStart monitoring package now comes pre-configured with analytics (computed and collected metrics), summary dashboards, and alerting policies to quickly identify performance issues right out of the box. In addition, Docker containers are now separated from Docker hosts, so it's easier to organize your containerized infrastructure inside of our product.\
[![October 2016: Docker Improvements](https://www.metricly.com/wp-content/uploads/2017/07/Docker-Improvments-1024x600.png)](https://www.metricly.com/wp-content/uploads/2017/07/Docker-Improvments.png)

Ruby Monitoring Improvements
----------------------------

Our Ruby agent is now more robust in terms of collection and agent customization. We added log configuration options and active support notification feature flags. The active support notification feature flags control which categories of metrics are collected (or not) by Metricly.

The Ruby agent can now silently track exceptions and record them as external events that would be ingested inside of our product in addition to numeric time-series values. Third party support for sidekiq is also enabled to record sidekiq errors as external events in Metricly. To help with busier rails applications, we added improved caching configuration to avoid excessive thread growth.

Check out all the settings in our [Ruby agent setup documentation](https://help.netuitive.com/Content/Datasources/Netuitive/ruby.htm).

[![ruby-improvements](https://www.metricly.com/wp-content/uploads/2017/07/Ruby-Improvements-1024x600.png)](https://www.metricly.com/wp-content/uploads/2017/07/Ruby-Improvements.png)

Cassandra Monitoring Improvements
---------------------------------

Cassandra can be a difficult tool to monitor; particularly due to the amount of metrics collected on each node. Metricly's research team deep dived into Cassandra to determine the most important metrics a DevOps team would want to monitor on a Cassandra node and then translating that knowledge to a Quick Start monitoring package.

With the Quick Start package, collected metrics are pared down to only the most significant to your environment, computed metrics are calculated using the collected metrics, dashboards are created to help visualize performance of your nodes, and alerting policies are pre-configured to detect a performance degradation of your nodes.

For more information on Metricly's Quick Start monitoring packages, visit [this blog](https://www.metricly.com/aws-monitoring-best-practices-using-pre-configured-dashboards).

[![October 2016 - Cassandra Improvements](https://www.metricly.com/wp-content/uploads/2017/07/Cassandra-Improvements.png)](https://www.metricly.com/wp-content/uploads/2017/07/Cassandra-Improvements.png)

User Scripts Collector
----------------------

We added the User Scripts Collector as a new collector supported by our Linux agent. The User Scripts Collector schedules and regularly runs an external script designed by you and placed in a special directory and then collects its output. This collector has a wide variety of uses as the collector's functionality and output are entirely dependent on your custom scripts. Our Help page will provide an increasing number of examples to help guide you and provide ideas. Some use cases are: Ping a URL or IP address and return the state, tail a log file to parse for a keyword and post it as external event to our API, run the Linux PS command to check if a process is running or not and post the result to our API so that you can send a notification if a service stop running. You get the idea... the possibilities are endless.

For more information on how to setup the collector, check out our [User Scripts Collector documentation](https://help.netuitive.com/Content/Integrations/user_scripts_collector.htm).

[![October 2016- User Scripts Collector](https://www.metricly.com/wp-content/uploads/2017/07/User-Scripts-Collector-1024x600.png)](https://www.metricly.com/wp-content/uploads/2017/07/User-Scripts-Collector.png)

Ready to see these features live, in your own environment? Check out our [21-day free trial.](https://www.metricly.com/signup)
