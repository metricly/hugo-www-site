---
author: "Jason Simpson"
date: "2016-04-02"
title: "How to Leverage Machine Learning for Proactive Monitoring Alerts"
description: "In this blog, we’ll review real user data where Metricly's proactive monitoring detected a performance issue on the disk a full hour before errors began."
category: "Cloud Monitoring"
url: "/machine-learning-monitoring-alerts/"
layout: "single"
---
Three basic ingredients are required for [monitoring](https://www.metricly.com) success:

1.  Collection of key performance indicators (KPIs) used in alarming rules
2.  Machine learning technology and proactive anomaly detection
3.  A consolidated monitoring view that includes performance and exception data

In this blog, we'll review real user data where Metricly detected a performance issue on the disk a full hour before the disk started having volume errors.

Early Detection
---------------

Metricly recently detected a disk issue before the Windows system reported the problem in the form of exception events indicating "disk volume errors." The one-hour advanced notification let the team proactively address these issues before an outage occurred.

[![Proactive Monitoring: Pic1](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic1-1024x410.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic1.png)

Understanding KPIs for Proactive Monitoring Success
---------------------------------------------------

One of the keys to success is also understanding the metrics. Here we know the disk queue length is a good leading indicator of an issue which is the reason behind including it in a default alerting policy. At Metricly, we research best practices for monitoring and have created a number of [out-of-the-box policies](https://help.netuitive.com/Content/Policies/policies.htm) that leverage these KPIs. It helps get our users up and running as soon as they set up a data source.

[![Proactive Monitoring: Pic2](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic2-1024x413.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic2.png)

Proactively Detecting Performance Issues with Machine Learning
--------------------------------------------------------------

In this example, Metricly detected a performance issue on the disk a full hour before the operating system reported seeing disk volume errors.

[![Proactive Monitoring: Pic3](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic3-1024x419.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic3.png)

In the screenshot, you can Metricly's machine learning in action. Metricly automatically learns the behaviors of this environment over time and creates [bands of normalcy](/product) (purple and green highlights.) These bands act like dynamic thresholds -- they indicate where expected values for this metric should be at the given point in time. In Metricly, you can create policies that alert off of these ranges instead of just setting static threshold alerts.

In our example, when the metric values went out of the expected range, alerts in Metricly fired immediately. However, you can see the event generated in Windows Event Viewer on the right side came an hour later than Metricly's alert.

A few minutes later, we saw multiple issues on the disk from the Windows subsystem. Metricly can surface all the errors coming from the operating system as events. This is very helpful because now you can see on a single view the OS error messages along with the performance alerts.

[![Proactive Monitoring: Pic4](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic4-1024x450.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Pic4.png)

Note that the above screen shot also illustrates the adaptive and self-learning capability of the Metricly machine learning engine. It is designed to alarm upon detection of a deviation that is operationally-relevant --- but only for for a period of time, after which the algorithms proceed to learn the new behavior. This is designed to avoid excessive alarming, and also to avoid alarming every day or every week in a case the behavior is caused by a daily or weekly backup for example.
