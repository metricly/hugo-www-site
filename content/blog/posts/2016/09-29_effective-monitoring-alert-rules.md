---

date: "2016-09-29"
title: "Authoring Effective Cloud Monitoring Alert Rules"
description: "Follow these best practices to create solid, effective monitoring alert rules that catch meaningful issues while avoiding alarm and notification noise."
category: "Cloud Monitoring"
url: "/effective-monitoring-alert-rules/"
layout: "single"
---

To provide the optimal experience in alert notifications, Netuitive starts from the concept of a *policy*. A policy contains a set of *conditions* (or alert rules), which, if violated for a specified duration, will generate an *event* (or alert). These alerts are always available to be viewed in the Netuitive UI. Optionally, a policy may define one or more *notifications* for a policy, which allow the alerts to be sent via email, [PagerDuty](https://www.metricly.com/combining-netuitive-and-pagerduty-for-monitoring-alarms), [Slack](https://www.metricly.com/slack-channel-integration), etc. This process is illustrated below:

![monitoring-alert-rules-policy-process](https://www.metricly.com/wp-content/uploads/2017/06/Monitoring-Alert-Rules-Policy-Process-1.jpg)

Netuitive provides a wide array of [out-of-the-box policies and dashboards](https://www.metricly.com/aws-monitoring-best-practices-using-pre-configured-dashboards) for a many of our integrations (AWS, Linux OS, Windows, Cassandra, MySQL, etc.) to help users get started as soon as a data source is activated. For example, the *AWS ELB -- Elevated Latency* policy will fire an event if, for a period of 30 minutes or longer, the following two conditions are met:

1.  The *elb.latency* metric is deviating from the norm; and
2.  The *elb.requestcount* metric is greater than 1000.

![Monitoring Alerts: policy conditions](https://www.metricly.com/wp-content/uploads/2017/06/Policy-Conditions-1-1024x539.jpg)

Netuitive's packaged policies are based on industry best practices and years of experience. In any organization, though, there is always a need for custom policies or alert rules that meet your specific needs. In this blog, we'll take a look at what you need to know to build an effective cloud monitoring policy in Netuitive.

When Should You Create a Policy?
--------------------------------

The first thing you need to do when authoring cloud monitoring policies is to identify the situations in which it would be meaningful to generate an event. The key word here is *meaningful*.  We could create policies for every metric collected, but many of them would be noisy and/or unimportant.  Look at the metrics that are being collected and ask yourself which ones would you most likely want to know about if they went askew? Some examples are:

-   Error rates
-   Usage metrics (CPU, memory, number of database connections, etc.)
-   Metrics which impact user experience (browser page load times; latencies in network, database, or application calls; etc.)

What Types of Alert Rules Should You Create?
--------------------------------------------

### Static Thresholds

Static thresholds are the simplest type of condition to create; however, because they assume a "one size fits all" approach, they often result in a lot of alarm noise and/or missed events.  Therefore, static thresholds should generally be avoided in favor of alert rules that look for baseline and/or contextual deviations.

However, there are some scenarios in which alert rules based on static thresholds make sense:

1.  When a metric is expected to be static, or known to be within a certain narrow range. For example, an error count that is always 0 and you want to know if it gets above zero.
2.  When the static threshold is used in combination with other non-static conditions. Typically this is when you want to ensure a certain lower threshold is met before alerting, since otherwise you'll get a lot of noise.  **Example 1**: Alert when CPU is deviating, but only if it's also above 50%.\
    **Example 2:** Alert when the error rate is deviating, but only if request count is greater than 1000 and error rate is greater than 2%.
3.  When a metric's behavior is expected to be very erratic, and thus baselining is not reliable. For example, on some systems, disk and/or network usage metrics don't always lend themselves well to baselining, so you may opt to set a static threshold instead.  This is illustrated nicely in the screenshot below:

![Monitoring Alert: Static Threshold](https://www.metricly.com/wp-content/uploads/2017/06/Static-Threshold-1-1024x364.jpg)

### Baseline and Contextual Deviations

The baseline and contextual bands show the expected range of values for a metric at any given point in time. The baseline band is built by observing the metric's normal week-over-week behavior, while the contextual band is built by observing how this metric behaves with respect to other metrics that are well-correlated with it.

Conditions that check for baseline or contextual deviations (or both) are the types of conditions that you will most often be setting, sometimes in conjunction with a static threshold. The following table summarizes when your policy should check a metric for each type of deviation:

| **If the metric is....** | **Recommendation** |
| Baselined, but not correlated | Check for baseline deviations |
| Correlated, but not baselined | Check for contextual deviations |
| Baselined AND correlated | Check for both baseline and contextual deviations |
| NOT baselined and NOT correlated | Can't check for deviations! |

### Multiple Conditions

An effective policy will typically have multiple conditions against multiple metrics.  This helps to refine the definition of the problem being detected, and also helps with the reduction of alert noise.  My colleague Christina DiSomma recently wrote about [how to reduce alert noise with multi-criteria policies](https://www.metricly.com/reduce-alert-multi-criteria-policies), which covers this aspect of policy authoring in detail.

What Duration Should You Choose?
--------------------------------

For a policy to fire, all of the conditions in the policy must have been violating continuously for the duration selected. It is possible to select any duration from 5 minutes to 6 hours, in 5-minute increments.  Most alert rules, however, will not need durations greater than 30 minutes. Here are some general rules of thumb for setting the duration:

### 5-minute durations

A 5-minute duration is rarely a good choice. In most cases, a 5-minute duration will generate a lot of noise, since a short, temporary spike could easily trigger the policy.  Such short spikes are rarely a problem, and will already have receded by the time DevOps gets the event and starts to respond to it.

### 15-minute durations

A 15-minute duration is typically a good default.  By requiring all conditions to violate continuously for 15 minutes, we avoid the noise of the short spikes, and increase our confidence that this is, in fact, something that an event should be generated for.

### 30-minute durations

A 30-minute duration is good to use in cases where the metrics being evaluated are more erratic and fluctuate away from the baseline from time to time without it necessarily being indicative of a problem.  In these cases, a 15-minute duration might be too noisy.  In fact, many times you may initially start out with a 15-minute duration for your policy, and then, after monitoring the events for a period of time, decide to increase it to 30 minutes as part of a tuning exercise to reduce noise.

Which Event Categories Should You Use?
--------------------------------------

The event categories essentially describe the severity of the event:

-   **INFO** -- Use this when you simply want to be aware that something has happened in the environment, but there isn't necessarily anything to take action on. In many cases, this can be used to help flag other things that were happening in the environment at the time of a more serious event.  For example, network metrics tend to fluctuate a lot, and attempts to create alerts based solely on deviations in network activity can lead to a lot of false positives.  However, by flagging network deviations as Info, they can safely be ignored most of the time, but still be taken into consideration if there are other, more critical alerts at the same time.
-   **WARNING** -- Useful when an immediate response is not necessarily required, but you may wish to keep an eye on the situation.
-   **CRITICAL** -- Used for serious problems, requiring immediate attention.

Sometimes, you may wish to create variations on the same policy with different event categories.  For example, when a queue reaches 50% capacity, generate a Warning; when it reaches 75% capacity, generate a Critical.

How Should You Configure Notifications for Your Alert Rules?
------------------------------------------------------------

Selecting the *Notifications* tab in the *Policy Editor* allows you to easily add notifications to your policies. Netuitive supports sending notifications to Email, HipChat, OpsGenie, PagerDuty, SNS, Slack, and Webhook.

The following screenshot shows an email notification, configured to send to the <research@netuitive.com> email address:

![Alert Rules: Notifications](https://www.metricly.com/wp-content/uploads/2017/06/Notifications-1.jpg)

Notice that by default, the notification is set to re-notify every 5 minutes; in other words, for as long as the policy is firing, you will get an email every 5 minutes. During a typical production outage, this is likely to result in a flood of emails. Just as we want to reduce alert noise, we similarly want to reduce notification noise.  For example:\
![Monitoring Alerts: Notifications 2](https://www.metricly.com/wp-content/uploads/2017/06/Notifications-2-1.jpg)

In the above screenshot, the notification has been tuned to:

-   Only send an email every 30 minutes while the policy continues to fire; and
-   Send an email when the policy stops firing (i.e., clears).

Netuitive provides a number of options for the re-notification interval, even allowing you to select "Never"; this is useful in the case where all you want, for example, is to get an email when a problem starts, and another when it stops.

In Summary
----------

Policy authorship is easy in Netuitive, allowing you to quickly build your own custom policies for detecting specific conditions in your cloud environment. By following the guidelines and best practices discussed above, you can create solid, effective alert rules that catch meaningful issues while avoiding alarm and notification noise.
