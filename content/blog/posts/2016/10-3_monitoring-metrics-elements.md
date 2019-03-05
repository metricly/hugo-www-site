---
author: "Jason Simpson"
date: "2016-10-03"
title: "Understanding Metricly Monitoring Metrics and Elements"
description: "At Metricly, we collect and group monitoring metrics into elements. What is an element and why do we group metrics into these units? Here’s a quick primer."
category: "DevOps"
url: "/monitoring-metrics-elements/"
layout: "single"
---


At Netuitive, we collect and group monitoring metrics into elements. In this blog, we'll explore the nature of elements and their relationship to metrics and monitoring. What is an element and why do we group metrics into these units? Here's a quick primer on why we do what we do (and the benefit to our users!)

What is an element?
-------------------

Netuitive refers to any physical or logical component that can be monitored as an element. In Netuitive, elements are the base unit upon which all policies and events are built. An element could be a single server, a virtual machine, an application, or a variety of other componentss.

All elements have one or more of the following characteristics:

**1) Metrics:** An element has one or more metrics reporting on the behavior of the element. For example, if the element is a server, associated monitoring metrics would include memory, disk metrics, and I/O.

**2) Attributes:** Certain elements have attributes to describe them, often determined by source. A Linux server's attributes, for instance, might be CentOS, the version of Linux, and/or location of the server.

**3) Events:** Events are triggered when policy conditions are met. For instance, the Netuitive out-of-the-box policies include one to alert on elevated EC2 network activity, which fires when an EC2's read and write operations have metric values outside the normal range for the instance in question.

**4) Tags:** Tags are used to group similar elements. At Netuitive we can group and tag by element or at the metric level, giving you two levels of grouping (a high level, as in "all servers" or low level, as in "all CPU metrics.")

**5) Relationships:** Elements are connected via relationships. If you have a server, an EC2, and an application, for instance, all are connected via parent-child relationships. With Netuitive, you can see which elements are related and the attributes of that relationship, giving you valuable insight into the entirety of your stack.

For example, an EC2 instance is one type of element, and a Linux server is another. Each has its own name like (AWS1 and LNX1) as well as various attributes. For example, the EC2 instance you can see which EBS instances are attached; while the Linux server might have an attribute for the number of CPU running on it. Additionally, each element has detailed events based on policies.

All these characteristics can be represented by various widgets, as shown in the [dashboard](https://www.metricly.com/product/dashboards-and-reports) below:

[![Monitoring Metrics and Elements Dashboard](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Dashboard-1024x507.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Dashboard.png)

Among other out-of-the-box policies, Netuitive offers a policy for elevated network activity on EC2 servers that's based on CPU utilization as well as I/O:

[\
](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Network-policy.png)[![Monitoring Metrics Into Elements: EC2 Network Policy](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Network-policy-1024x543.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Network-policy.png)\
Linux servers have a policy for heavy disk load, based on the average disk queue length.

Finally, the EC2 instance and the Linux server each have a tag, used to label elements. For example, a mix of both EC2 and Linux servers could have the "webserver" tag attached, so they could be monitored as part of a larger group of web servers.

Why Group Monitoring Metrics into Elements?
-------------------------------------------

Tagging and labeling servers is one thing, but why does Netuitive group monitoring metrics together under elements? The answer is correlation. Monitoring groups of metrics together allows you to see correlations you wouldn't be likely to spot in a single-metric monitoring format.

Collecting raw data at the metric level for performance indicators like CPU and memory utilization provides some insight as to the behavior of your environment, but the real value is in context. Knowing how a given metric behaves in context of the others is essential for gaining a holistic picture of your environment. (For instance, in a recent blog, my colleague Dale V. Georg covered a use case in which CPU metrics were not what they appeared -- [read it here](https://www.metricly.com/subtleties-ec2-cpu-utilization) to see what we found!)

Advanced Analytics Make All the Difference
------------------------------------------

Netuitive uses multivariate regression analysis as well as other mathematical techniques to [predict the normal value of a given monitoring metric](https://www.metricly.com/product/anomaly-detection) based on the behavior of other related metrics. This behavior learning process creates a "band of normalcy" that accounts for statistical norms as well as a margin of error which is then calculated for each metric.

The raw data for each metric is still collected and compared to the normal range; the ranges don't replace raw data, they simply add context to the metric values. These bands represent a huge improvement over static thresholds, pulling the human guesswork out of monitoring and replacing it with proven statistical analysis.

Correlating metrics into elements also allows you to proactively monitor your environment. This can help you pick up on anomalies that could have a broader impact on your environment earlier. For example, we recently had a use case in which an anomaly was detected in the disk space metrics a full hour before the Windows system began reporting issues. By monitoring these metrics together, the team was able to recognize the source of the problem and solve it with minimal downtime. ([For more details, check out this blog](https://www.metricly.com/how-to-leverage-machine-learning-for-proactive-monitoring-alerts).)

Event Policies
--------------

Contextual knowledge is also the basis for Netuitive alert policies. In Netuitive, alerting policies contain multiple criteria to filter out unnecessary alerts. We recognize that some abnormal behavior isn't indicative of an issue unless it happens in conjunction with abnormal behavior in other monitoring metrics. For instance, a spike in latency might not represent a real issue unless it is also accompanied by an increased request count.

Grouping monitoring metrics into elements offers a level of correlation that isn't otherwise possible in monitoring. A single person (or even a team) wouldn't be capable of the sort of analysis necessary to detect anomalies and weed out false alarms. At Netuitive, we rely heavily on advanced analytics to make our monitoring possible -- and elements are the building blocks on which it all stands.
