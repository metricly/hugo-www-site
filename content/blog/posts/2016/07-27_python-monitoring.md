---
author: "Christina DiSomma"
date: "2017-07-27"
title: "How to Monitor Python Applications"
description: "Here’s the Metricly quick-and-easy guide to monitoring your Python applications, and how to get the most from your metrics!"
category: "Cloud Monitoring"
url: "/python-monitoring/"
layout: "single"
---

Application [monitoring](https://www.metricly.com/product) can be a tricky, time-consuming business with the potential to cause major headaches if not configured properly. Recognizing that, we put our team to work [configuring our StatsD server to integrate with Python](https://help.netuitive.com/Content/Misc/Datasources/Netuitive/integrations/python.htm) so you can bring the power of anomaly detection to your applications. Here's our quick-and-easy guide to monitoring with Python and how to get the most from your metrics!

What is Python?
---------------

[![Python](https://www.metricly.com/wp-content/uploads/2016/07/imageedit_1_7254343722.png)](https://www.metricly.com/wp-content/uploads/2016/07/imageedit_1_7254343722.png)

Python is a programming language that has almost infinite capabilities. It's easy to learn and use and scales effortlessly, making it the go-to language for many programmers. Python is the base for software used by companies of all sizes, from big banks and giant pharmaceutical companies to small startups.

How do you collect metrics for Python applications?
---------------------------------------------------

Collecting metrics for your Python application through Netuitive requires the Netuitive agent, which utilizes [our StatsD server](https://help.netuitive.com/Content/Misc/Datasources/new_statsd_datasource.htm). Once the agent is deployed, your application uses it to send metrics via the Python client library to the StatsD daemon to collect and aggregate them. At a predetermined interval, StatsD "flushes" all the data it's collected to Netuitive.

The StatsD daemon is intended to instrument method calls associated with the classes used in your application code. Each time an object is spawned, StatsD measures the behavior of each invocation. It's also important here to note that StatsD metrics need to be configured through one of three entities -- counters, gauges, or timers. Each is self-explanatory; counters measure the number of times a given metric is triggered, gauges tell you the percentage or amount of a particular attribute, and timers are used to quantify the time it takes to perform an action.

Upon each influx of data, Netuitive will then provide visualizations for those metrics and start automatically machine learning the time-series data to provide [anomaly detection](https://www.metricly.com/product/anomaly-detection) -- we'll talk about that more at the end of the blog.

Which metrics are most important for monitoring Python Applications?
--------------------------------------------------------------------

[![Dashboard1](https://www.metricly.com/wp-content/uploads/2016/07/Dashboard1-1024x509.png)](https://www.metricly.com/wp-content/uploads/2016/07/Dashboard1.png)

It depends heavily on your application, its functionality, and to a certain extent the infrastructure and middleware upon which it resides. Part of what makes StatsD so valuable is its configurability -- it's easily customized to fit the specific needs of your application. Because changes to your monitoring setup can occur with just a few simple code alterations, you can adjust your metrics to fit the changing needs of your application and users.

There are two general areas you definitely want to keep an eye on:

1) General usability of your application

You want to make sure your application is up and functioning properly from a user perspective. If your application requires a login, you'll absolutely want to monitor the time it takes to validate credentials and render the welcome page.

It's also a good idea to track metrics for the speed and ease of any interactions or transactions that take place within your application. For example, if you have a video embedded and your application needs to perform an external call to play the video, you ought to monitor the time and frequency of those calls. Failure here may not indicate a problem on your end -- it's certainly possible the party on the other end is experiencing performance issues -- but you may want to modify your app or notify your users if the problem persists.

As we'll discuss later on, the health of this type of metric can be affected strongly by problems brewing in your infrastructure or middleware. Catching the problem there before it can affect the user experience is best, but monitoring basic functionality is still critical.

2) Databases and memory

All applications need a support structure, and the health and performance of that structure is absolutely crucial to monitoring your application. You should be tracking the number of queries your application makes to your database or clusters, as well as response time. These metrics can have a very real impact on the performance of your application, and you'll want to be on top of them.

From a memory perspective, you not only want to ensure you have enough memory to cope with the needs of your application, but also that the application in question isn't using a greater percentage of total memory than it normally would. Such an increase might indicate a larger performance problem within your application.

Why use anomaly detection for performance monitoring for Python applications?
-----------------------------------------------------------------------------

[![timeserieswidget](https://www.metricly.com/wp-content/uploads/2016/07/timeserieswidget-1024x252.png)](https://www.metricly.com/wp-content/uploads/2016/07/timeserieswidget.png)

[Anomaly detection](https://www.metricly.com/category/anomaly-detection) improves upon [static thresholds](https://help.netuitive.com/Content/Performance/Analytics/statis_thresholds.htm), a basic tenet of traditional or manual monitoring often used in conjunction with basic free open source monitoring tools. Static thresholds are a line in the sand for your metrics. With this type of monitoring, you will receive an alert whenever that line is crossed, whether that is predictable behavior or a genuinely unusual event.

Netuitive's anomaly detection, by contrast, uses calculated "bands of normalcy" that automatically learn and conform to the expected behavior of your application metrics at a given time. For example, if a code deploy causes a spike your load metrics every Thursday morning at 4 a.m., Netuitive's machine learning engine will recognize that and factor it into those bands of normalcy. On the other hand, if you're using static thresholds, you'll be forced into an impossible choice -- raise the threshold to perhaps dangerous levels to account for the expected spike or get used to receiving and ignoring an alert every Thursday at 4 a.m.

Configuring your Python application to push data to the Netuitive agent through our StatsD server takes only a few minutes, and a few simple steps:

[![application](https://www.metricly.com/wp-content/uploads/2016/07/application-1024x377.png)](https://www.metricly.com/wp-content/uploads/2016/07/application.png)

1.  Create a new datasource in Netuitive and generate an API key
2.  Install the Netuitive agent via your command line
3.  Enable the StatsD server in the Netuitive agent configuration file
4.  Instrument your Python application to collect and send custom metrics to the StatsD server

For more detailed instruction, check out [our documentation](https://help.netuitive.com/Content/Misc/Datasources/Netuitive/integrations/python.htm).

* * * * *

*Ready to start monitoring your Python applications with Netuitive? We offer a [21-day, no-obligation free trial](https://www.metricly.com/signup).*
