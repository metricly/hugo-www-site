---

date: "2015-05-07"
title: "Using StatsD with Metricly for Advanced Monitoring"
description: "Your favorite monitoring tools easily function as front end services pushing data to StatsD, which forwards aggregated data directly to Metricly."
category: "DevOps"
url: "/statsd-metricly-advanced-monitoring/"
layout: "single"
---


When we launched Netuitive as a SaaS offering, one of the first integrations early beta testers requested was StatsD. It's easy to see why this has become one of the most popular tools for DevOps teams. The Etsy team decided to [create a simple NodeJS daemon](https://codeascraft.com/2011/02/15/measure-anything-measure-everything/) and "make it ridiculously simple for any engineer to get anything they can count or time into a graph with almost no effort." They succeeded and the StatsD user community has grown quickly with thousands of users and a wide variety of plug-ins and services that support it.

Getting Started with StatsD
---------------------------

Get started aggregating your data by identifying any important metric in your application that can be counted or timed. Adding a single line of code allows you to create a new counter and increment whenever it's executed. It doesn't require major configuration changes and there are StatsD client libraries available for many popular programming languages and apps including: C, Clojure, Cocoa, Java, .NET, Node, Perl, PHP, Python, Ruby, and even WordPress.

Once you've configured your application, the network daemon receives metrics over UDP, then generates and sends aggregate metrics to almost any monitoring or graphing backend, like Netuitive. Leveraging the UDP protocol and frequent aggregate metric flushing, gives you near real-time data that's not dependent on the live performance of your application.

Using StatsD to Connect Monitoring Tools
----------------------------------------

One of the lesser known benefits of StatsD is its ability to operate as a "middle man" between monitoring tools. For example, if you're a Java shop (like us) and use third party monitoring tools like Nagios, you can use it as a connector to bring the data into Netuitive for advanced analytics.  It becomes particularly powerful when you want to cross correlate data from multiple data sources for a holistic view of your application and network performance.

You can do this with any monitoring tool that integrates with StatsD. Your favorite monitoring tools easily function as front end services pushing data to StatsD, which forwards aggregated data directly to Netuitive. It's a smart solution for managing complex, heterogeneous environments and normalizing data across various standard and custom data sources.

How to Integrate StatsD and Netuitive in 10 Minutes
---------------------------------------------------

[![StatsD and Netuitive](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/StatsD.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/StatsD.png)

Ready to get started? Enabling advanced analytics and proactive anomaly detection takes as little as 10 minutes.

First, go to our [GitHub page](https://github.com/Netuitive/statsd-netuitive-backend), and clone netuitive.js and the Netuitive directory.

Then, save both to your StatsD backends directory. If you don't have it installed yet, see [Etsy's GitHub page](https://github.com/etsy/statsd) to learn more about getting started.

After downloading the file, all you'll need to do is make a few changes to your configuration file. For complete integration instructions, see **[our documentation](https://help.netuitive.com/Content/Misc/Datasources/new_statsd_datasource.htm?Highlight=statsd)** on setting up a new StatsD datasource. After saving your configuration file and restarting StatsD, you are ready to begin monitoring your data with Netuitive.

* * * * *

*Want to see the integration in action?  Sign up for our [free 21-day trial](https://www.metricly.com/signup) and activate some data sources through StatsD to see the true power of our Self-Learning Correlation Engine.*
