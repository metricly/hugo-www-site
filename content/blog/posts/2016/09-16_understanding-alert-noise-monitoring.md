---
author: "Christina DiSomma"
date: "2016-09-16"
title: "Understanding Alert Noise in Performance Monitoring"
description: "Alert noise isn't just annoying - false alarms pull time and resources away from issues that need to be addressed. Here's how to minimize their impact."
category: "Cloud Monitoring"
url: "/understanding-alert-noise-monitoring/"
layout: "single"
---

False monitoring alarms are costly any way you shake it. When you react to alert noise, you waste time and resources tracking down nothing of consequence. When you ignore them, Murphy's Law kicks in and systems go down or performance is impacted. By improving your signal-to-noise ratio, confidence in alarm quality goes up, resources are freed up, stress goes down, and everyone wins. This blog details alert types and how to calculate signal-to-noise ratio. Our next blog explores how to decrease alert noise.

What is signal-to-noise ratio?
------------------------------

First, it is important to understand that monitoring alerts come in [four distinct types](https://www.metricly.com/product/anomaly-detection):

-   True Positive -- You have a performance problem and your monitoring tool alerts you to the issue. This is the ideal scenario: only receiving alerts for actual problems.
-   True Negative -- Essentially, there are no issues present and your monitoring tool does not send you an alert. This is also a good thing; your monitoring is effectively reporting the current state of your environment and not creating a false alarm.
-   False Positive -- You don't have a problem, but your monitoring tool thinks you do! This is where false alarms come from. If you have too many of these, true positives can get lost in the mix.
-   False Negative -- In this scenario, a serious problem exists in your environment but your monitoring tool is not configured to recognize the issue. Unfortunately, your team is blissfully ignorant to anything amiss and the problem could escalate to system downtime.

Signal- to-noise ratio refers to the number of true positives a system receives as compared to the number of false positives.

[![Alert Noise: Image 1](https://www.metricly.com/wp-content/uploads/2016/09/SignaltoNoise.png)](https://www.metricly.com/wp-content/uploads/2016/09/SignaltoNoise.png)

Essentially, it's a measure of how many false alarms you're forced to endure for every quality alert.

A **high** signal-to-noise ratio (e.g. 5:1) is preferable. This would indicate that your false alarms are not creating a ton of noise and the alerts you are receiving are more trustworthy.

In contrast, a **low** signal to noise ratio (e.g. 1:5) usually means you're receiving many false alarms for every quality alert that comes through. In IT Ops, this is usually referred to as *alert noise*.

Why is signal-to-noise ratio so important in monitoring?
--------------------------------------------------------

Alert noise is often listed as one of the biggest issues faced by DevOps teams.  [In a recent study](https://bigpanda.io/blog/state_of_monitoring/), 79% of IT Ops professionals listed reduction in alert noise as one of their biggest 2016 priorities.

False alarms aren't just annoying -- they pull time and resources away from problems that truly need to be addressed. This is compounded if you're receiving alert noise at the same time as quality alerts -- are those false alarms *really* false in this instance, or do they have something to do with your very real performance problem?

[![Alert Noise: Alarm Clocks](https://www.metricly.com/wp-content/uploads/2016/09/alarmclocks.png)](https://www.metricly.com/wp-content/uploads/2016/09/alarmclocks.png)

One of these alerts is real -- but which one?

In short, you can't really be sure. Now, you and your team are forced to chase down all possibilities, eating up valuable time and resources as well as increasing your MTTR (mean time to resolution.)

The next blog in this series details 3 Ways to Reduce Monitoring Alert Noise. Stay tuned!

* * * * *

*If you want to see the impact alert noise is having on your environment, Metricly offers a [21-day, no-obligation free trial.](https://www.metricly.com/signup)*
