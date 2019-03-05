---
author: "Elizabeth Nichols"
date: "2016-03-28"
title: "Anomaly Detection for DevOps: What Is Anomaly Detection?"
description: "This three-part series covers what you need to know about anomaly detection, common monitoring tools, and how anomaly detection fits in a DevOps model."
category: "DevOps"
url: "/what-is-anomaly-detection/"
layout: "single"
---


*Ed. Note: We've put together this three-part series to discuss what you need to know about anomaly detection, the typical adoption cycle of analytics to DevOps monitoring, and how anomaly detection adds value to cloud monitoring for DevOps teams. This is part 1; [Part 2](https://www.metricly.com/3-types-anomaly-detection-monitoring-tools) explores the three types of monitoring tools used by DevOps teams. [Part 3](https://www.metricly.com/adding-analytics-to-devops-model) discusses how to fit anomaly detection into a DevOps workflow.*

What is Anomaly Detection?
--------------------------

[![Anomaly Detection: Performance Explorer-Bands of Normalcy](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/PerformanceExplorer-BandsofNormalcy-Sanitized-1024x571.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/PerformanceExplorer-BandsofNormalcy-Sanitized.png)

Anomaly detection is the process of identifying observations or patterns of observations in a data set that do not conform to expected behavior. "One of these things is not like the other" -- sounds easy, right? Of course, when you're working with tens of thousands of system and application metrics that change from minute to minute, the game becomes exponentially more difficult. At [Netuitive](https://www.metricly.com/), we tend to characterize this as, "humanly impossible."

Four Possible Outcomes of Anomaly Detection
-------------------------------------------

When talking about anomaly detection, there are four specific types of results: True positives, true negatives, false positives, and false negatives.  Here's a quick reference chart with explanations below:

|  | **Positive** | **Negative** |
| --- | --- | --- |
| **True** | *You have a problem and get an alarm.* | *You don't have a problem and don't get an alarm.* |
| **False** | *You don't have a problem but you do get an alarm.* | *You do have a problem and don't get an alarm.* |

True Positives\
This is the ideal scenario and exactly how anomaly detection is supposed to work. Unfortunately, it's not always that simple.

True Negatives\
Congrats! Your anomaly detection method wasn't fooled into a false alarm -- and you weren't woken up at 3 a.m. for a problem that doesn't exist.

False Positives\
This is sometimes called "crying wolf". The alarms are false alarms. They waste time and undermine confidence in the monitoring system. This is bad, but not the worst outcome.

False Negatives\
This is the *worst*. A problem is occurring that could lead to a serious outage and your team is blissfully ignorant because your monitoring system is "asleep at the switch." Adding insult to injury, it's often the case these missed alarms are caught by impacted users (or your boss!)

Luckily, plenty of tools exist to ensure you see every true positive, and aren't bothered by false positives or false negatives.

Check out [Part 2](https://www.metricly.com/3-types-anomaly-detection-monitoring-tools), which explores the three types of monitoring tools!

* * * * *

About Netuitive Monitoring and Analytics

See how machine learning and anomaly detection impact your alarm quality and inform mission-critical decisions in dynamic environments. Netuitive is available as a [21-day free trial.](http://app.netuitive.com/signup)
