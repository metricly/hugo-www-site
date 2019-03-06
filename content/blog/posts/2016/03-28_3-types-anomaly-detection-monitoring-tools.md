---
author: "Elizabeth Nichols"
date: "2016-03-28"
title: "Anomaly Detection for DevOps: 3 Types of Monitoring Tools"
description: "Smart DevOps teams typically evolve through three levels of monitoring tools, starting with simple dashboards then adding sophisticated analytics."
category: "DevOps"
url: "/3-types-anomaly-detection-monitoring-tools/"
layout: "single"
---


*Ed. Note: This is Part 2 of a three-part series on anomaly detection and its role in a DevOps environment. [Part 1](https://www.metricly.com/what-is-anomaly-detection) covered the basics of anomaly detection, and [Part 3](https://www.metricly.com/adding-analytics-to-devops-model) discusses how anomaly detection fits within the larger DevOps model. Want to see these tools in action? [Try our free demo.](https://www.metricly.com/signup)*

Smart DevOps teams typically evolve through three levels of [anomaly detection](https://www.metricly.com/product) or monitoring tools.  They start with simple dashboards to track basic metrics then add increasingly sophisticated analytics.

A common progression for analytics adoption is to start with static thresholds, then add simple data transformations, and finally introduce machine learning and other models and algorithms designed to increase alarm quality.  For example, static thresholds are the most common "starter" analytics.  Static thresholds automatically flag simple anomalies in a collection of point observations.

Some analytics tools use data transformation functions to make it easier to detect outliers. Advanced analytics tools screen out unwanted noise and enhance anomaly detection thereby reducing the frequency of bad alarms---namely, false positives and false negatives.

In the Beginning
----------------

Dashboards

[![Monitoring Tools: Dashboard](https://www.metricly.com/wp-content/uploads/2016/05/Dashboard-EC2EBSWorkload-Sanitized-1024x585.png)](https://www.metricly.com/wp-content/uploads/2016/05/Dashboard-EC2EBSWorkload-Sanitized.png)

Humans are experts at pattern-matching and anomaly detection.  Most monitoring tools use dashboards to display graphs of ever-changing system and application performance metrics. The innate human ability to quickly detect patterns, combined with a developer or system administrator's learned domain experience, makes reviewing dashboards a very easy way to quickly gauge the overall health of an application or cloud infrastructure in a simple environment.  However, as the team adds more applications, and metrics to track their status, the complexity quickly exceeds human capacity for easy visual detection anomaly detection. Increased automation is needed.

Thresholds and Baselines

Adding static upper and lower thresholds for observed values easily automates anomaly detection for data points that fall significantly above or below values and are fixed constants. Whenever an observation crosses a threshold, static threshold analytics tools generate an alarm.

Setting thresholds works very well for metrics that typically hover in a narrow band of predictable values. Unfortunately, when levels vary significantly at different times of day or due to fluctuations in other usage patterns, finding the right threshold levels is tough. Set them too narrow and you'll be overloaded with too many false alarms ("crying wolf syndrome.") Set thresholds too wide, and you can completely miss critical service degradations that could damage your business ("asleep at the switch syndrome").

The Next Step
-------------

Transformations

Transformations are an additional data analysis option for anomaly detection.  Formerly hidden anomalies can sometimes be uncovered by applying transformation functions to change the value of an observed metric prior to applying criteria such as static thresholds.  One very common transformation for monotonically increasing counter metrics is to compute successive observations and then compare that difference to a threshold.   Another useful transformation is to transform a set of historical observations in to a frequency histogram.  The more commonly observed values will be represented in "tall" bars because that have been seen relatively often. The more rarely observed values are represented in very short bars, thereby identifying the potential values for thresholds.  So, histogram transformations can be used to automate the discovery of reasonable threshold settings.  While this technique works well in many settings, it fails miserably when the observations follow a seasonal pattern.

Advanced Analytics

[![Monitoring Tools: Contextual Bands](https://www.metricly.com/wp-content/uploads/2016/05/context.png)](https://www.metricly.com/wp-content/uploads/2016/05/context.png)

Advanced analytics leverage many models and algorithms, both qualitative and quantitative.  Some quantitative techniques include statistical analysis and machine learning. Qualitative analytics include techniques such as incorporating a priori knowledge (human input) and semantic contextual models.

State-of-the-Art Analytics
--------------------------

Multivariate Correlation

A common application of statistical analysis in DevOps monitoring tools, measures how variables behave in relation to each other. This is relatively straightforward to track in real-time. If two metrics are highly correlated (have a high correlation coefficient) and one goes crazy, the real time correlation coefficient will significantly change and can be used in deciding whether or not to trigger an anomaly alert. However, if both metrics go crazy because they are both similarly affected by the same root cause issue, the correlation coefficients may not change much and the system will fail to properly alarm. An additional layer of analytics is needed.

Statistical Machine Learning

This technique typically has at least two phases:  learning and operational.  Both phases leverage heavy-duty mathematics and proprietary algorithms.  During the learning phase the algorithm establishes norms and other parameters that describe expected behavior.  In the operational phase, as new observations are made, the algorithm applies what it has "learned" to distinguish between normal and abnormal values.

Some operational phases include an adaptive learning capability that continues to make adjustments to the parameters that are used to identify normal behavior.  Adjusting parameters allows the machine learning model to adapt to changing circumstances.  This is particularly valuable in elastic compute environments that change frequently.  Adaptive learning, while much more difficult to implement in on-line contexts, can achieve much greater accuracy, thereby reducing false positives and false negatives.

DevOps teams have access to all of these effective monitoring tools, but how do they fit best in each environment? Find out with [Part 3](https://www.metricly.com/adding-analytics-to-devops-model)!

* * * * *

*See how machine learning and anomaly detection impact your alarm quality and inform mission-critical decisions in dynamic environments. Metricly is also available as a [21-day, no-obligation free trial.](https://www.metricly.com/signup)*
