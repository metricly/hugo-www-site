---
author: "Christina DiSomma"
date: "2016-07-22"
title: "Widgets 101: The Time-Series Widgets"
description: "The first installment in our series on widgets explores the time-series widgets: the Metric Time-Series and Multi-Metric Time-Series Widgets."
category: "DevOps"
url: "/widgets-101-time-series-widgets/"
layout: "single"
---


Metrics are undoubtedly important in monitoring -- but the method for viewing those metrics is as just if not more important. With that in mind, we decided to author a collection of blog posts on each of the widgets in the [Netuitive platform](https://www.metricly.com/product) and its ideal use case. This is the first installment, and explores our time-series widgets -- the Metric Time-Series and Multi-Metric Time-Series Widgets.

Obviously to have a [Metric Time-Series widget](https://help.netuitive.com/Content/Dashboards/Widgets/widget_library.htm#metric-time-series), you need time-series data, so let's begin there.

What is time-series data?
-------------------------

A time-series is a collection of data points, collected subsequently across a given time interval. The data itself is measured at equal intervals -- for example, if you have a sixty minute total time span, and you measure data every 10 seconds then you would have 36 "observations" or "data samples" during that one hour period. It is important for the data to be sampled at a consistent frequency.

What is time-series aggregation?
--------------------------------

To put it simply, time-series aggregation is the combination of the data samples within a time span into a single value or set of values. Your sampling agent might be collecting data every second, for instance, but the time units on your graph might be in minutes. Therefore, each of the sixty data points contained within a given minute need to be aggregated before being represented on the graph. As part of this aggregation process, it is typical to calculate and retain values such as sum, average, min, max and standard deviation to preserve the full context of the raw data upon aggregation (Note: we're going to talk more about this in a future blog on the [Metric Aggregation widget](https://help.netuitive.com/Content/Dashboards/Widgets/widget_library.htm#metric-aggregation) if you need more information.)

[![Time-Series Widget 1](https://www.metricly.com/wp-content/uploads/2016/07/Widget1.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget1.png)

How does the time-series widget work?
-------------------------------------

This widget does just what it sounds like -- it displays the aggregate time-series data for a given time interval. Here's an example:

[![Time-Series Widget 2](https://www.metricly.com/wp-content/uploads/2016/07/Widget2.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget2.png)

As you can see, this particular widget is displaying the disk read-ops data for our as01 element across a 1-hour interval. If we hover over the graph, we can see more detailed data:

[![Time-Series Widget Hover](https://www.metricly.com/wp-content/uploads/2016/07/Widget3.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget3.png)

The line above represents the actual aggregated metric value: in this case, 9.62 K. Don't worry about the blue and green bands for now; we'll come back to them at a later point in this blog.

What You See Isn't Always What You Get
--------------------------------------

Time-series data is some of the most useful data for [full-stack monitoring](https://www.metricly.com/product) -- it's not flashy, but it's effective. That effectiveness takes a huge hit, though, if the right visualization or context isn't utilized.

Line graphs (like the one below) are the most common way to visualize time-series data. This makes sense, as line graphs are simple to construct and the linear format works well for most metrics.

[![Time-Series Widget 4 (Line Graph)](https://www.metricly.com/wp-content/uploads/2016/07/Widget-4.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget-4.png)

It may also prove helpful to display each data sample represented by a "point" or a "dot" on the line so that the distinct values are more visible, as in the example below:

[![Time-Series Widget 5 (Points on Graph)](https://www.metricly.com/wp-content/uploads/2016/07/Widget5.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget5.png)

With a lot of metrics, though, line graphs quickly become confusing. If the proper context isn't applied or if there's simply too much data on one graph, metrics can become difficult to distinguish apart. This graph is still readable, but even here some metrics are difficult to separate from others without zooming in (or, if you're using Netuitive, hovering on the graph to see data pinpoints):

[![Multi-Metric Time Series Widget](https://www.metricly.com/wp-content/uploads/2016/07/Widget6.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget6.png)

In this case, it may make more sense to break out the metrics into more than one graph, or to combine multiple metrics together into a single line. For example, the lines may represent CPU utilization values across multiple servers, and we may combine them into an average or the highest/lowest value.

Using another graph type is also a viable option for some time-series data. In a later blog, we'll explore the other types of visualizations and widgets, and the individual use cases for each, so stay tuned!

Context is Everything
---------------------

Choosing the correct graph type is important, but viewing it in the correct context is just as if not more important. For time-series data, this often involves choosing wisely the time period that you view. For example, these two graphs contain data for the same metric, collected from the same element:

[![Widget 7 - Eight Hour Time Series](https://www.metricly.com/wp-content/uploads/2016/07/Widget-7.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget-7.png)

The first graph is data collected over eight hours; the second is the same metric collected over one week. If you looked at eight hours alone, you may start to worry about CPU utilization reaching or exceeding capacity. However, if you look at the week-long data below, you can see that a similar rise occurred last week at this time, and that utilization will eventually trend back down.

[![Widget 8 - One Week](https://www.metricly.com/wp-content/uploads/2016/07/Widget-8.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget-8.png)

This context is key to making a decision about the capacity of your environment. By simply looking at 8 hours, you might decide to expand your capacity needlessly, increasing cost. Viewed as a whole, however, it's likely you would decide capacity is sufficient and leave your computing environment (and your public cloud subscription) as-is.

Context is also important with regard to alerts and alarms. Part of what makes traditional monitoring so noisy is a reliance on [static thresholds](https://help.netuitive.com/Content/Performance/Analytics/statis_thresholds.htm), which essentially draw a line in the sand for your metrics. Once that line is crossed, you're sent an alert, whether the metric values present are normal for your environment or not. These thresholds completely ignore the context of your data, which results in your being sent unnecessary alarms while still running the risk of a having a problem fly under the radar.

This is why Netuitive implemented [behavior learning](https://www.metricly.com/product/anomaly-detection) -- to minimize both alarm noise and the risk of unforeseen problems. Unlike static thresholds, Netuitive's bands of normalcy conform to the "normal" behavior of your environment as determined by our behavior learning engine. Let's go back to those green and blue bands we saw previously:

[![Widget 9 - Bands of Normalcy](https://www.metricly.com/wp-content/uploads/2016/07/Widget9.png)](https://www.metricly.com/wp-content/uploads/2016/07/Widget9.png)

As you might have guessed, the blue represent the [contextual band of normalcy](https://help.netuitive.com/Content/Performance/Analytics/contextual_bands.htm) for this metric, or the range in which a value can fall and still be considered normal behavior. The contextual band is based on statistical correlation across multiple metrics and indicates normal range of one metric as a function of other inter-dependent metrics. In the example above, there's nothing here that might indicate a problem.

The green band indicates a [baseline threshold](https://help.netuitive.com/Content/Performance/Analytics/baseline_bands.htm) for this particular metric. These baselines represent the historic context for that single metric. For example, if you always have a spike in utilization at midnight due to a backup then the green band would anticipate this behavior and consider it to be normal. Again, our real metric data is well within the normal zones for the system in this example.

This context in time-series data is absolutely crucial to understanding your environment. Without it, you're flying blind -- and probably hearing a lot of unnecessary alarm noise.

* * * * *

*Ready to see your environment's time-series data? Netuitive offers a [21-day, no-obligation free trial](https://www.metricly.com/signup).*
