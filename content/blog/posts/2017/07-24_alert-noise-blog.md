---
author: "Brian Conn"
date: "2017-07-24"
title: "Alert Noise: Calming the Storm"
description: "The Metricly engineering team migrated to Docker, and the result was a tidal wave of alert noise. See how they calmed the alerting storm in this blog!"
category: "DevOps"
url: "/alert-noise-blog/"
layout: "single"
---
Alert noise goes hand-in-hand with running software, so it's no surprise Metricly Engineering has run into the same [alert fatigue](/understanding-alert-noise-monitoring) as many of our customers. We've built extra safeguards on top of many of the default Metricly policies for underlying infrastructure, but we also heavily instrumented our applications with [StatsD metrics](/statsd-metricly-advanced-monitoring/) to monitor application performance. While these application metrics are helpful for debugging, as we've started wrapping our core application metrics in alerting policies, we've found that they can be, well, *a bit noisy*.

Overall we identified a few issues with our current notifications:

-   There are too many;
-   They aren't being escalated properly; and, most importantly,
-   Many aren't *actionable*

To top it all off, our recent Docker migration (for more on that, check out [Character Encodings: An Unfortunate Experience](/character-encodings)) has drastically changed the profile of our underlying infrastructure. This means policies that previously worked well for static EC2s are now noisy and unhelpful. The overall EC2 utilization no longer reflects the utilization profile of the application running on top of it, as the instances are now a homogeneous pool of resources running containers.

The overwhelming alerts from the Docker migration put us over the edge. We had to find a way to cut the noise.

Reducing Notification Overload
------------------------------

![Alert Noise: Events](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Events-1-1024x207.png)

Our first step was to reevaluate our infrastructure-level policies. "Linux -- Heavy CPU Load" and "Docker Container -- Extensive CPU Throttling" were two of our worst policy offenders. During our Docker migration, we *wanted* our instances to be better utilized, so heavier instance load was not only expected, but also a sign that we were now running the platform more efficiently. Same goes for Docker container throttling -- we've added CPU limits to each Docker service to make sure each service is a good neighbor, so CPU throttling (within reason and not all the time) means we've set a good CPU thresholds.

Neither of these policies, however, are worth anything if they fire all the time. There is a fine line between running efficiently and being under-provisioned. Much of our heavy processing is done approximately on a 5 minute cycle, so CPU throttling Docker containers spreads that load out throughout the 5 minute cycle. Too much throttling causes one cycle to last more than 5 minutes and processing starts to lag. Like everything, it's a balance.

We took a hard look at all our policies and disabled a few, but for most we tuned them by either raising default thresholds or increasing violation durations. Now that we had reduced the alert noise we needed to make sure the policies we kept were actionable.

Making Alerts Actionable
------------------------

The default Metricly policies have very detailed descriptions, but our homegrown policies (especially the application metric policies) were a little light on description. We've done a good job of honing in on the core metrics for each service, but it was often unclear what we should do if those metrics deviated. Do we scale up? Is there backpressure from another services? Is shared infrastructure degraded? On-call engineers were often left to fend for themselves in these scenarios.

To remedy this, each service owner added actionable descriptions to each service policy. Even as little as a link to a dashboard or certain errors to look for in the log server can go a long way toward helping someone who is not an expert on a service debug and identify if there really is an issue. If there is an issue, the subject matter expert can be pulled in, but at least we already know it's not a false alarm. Once the alerts were usable, we were able to start escalating them.

Properly Escalating Alerts
--------------------------

Before our alert noise tuning, most policies shared the same notification method: Slack. [Metricly's Slack integration](https://www.evernote.com/OutboundRedirect.action?dest=https%3A%2F%2Fhelp.netuitive.com%2FContent%2FMisc%2FNotifications%2Fslack_notification.htm) color-codes messages based on alert criticality, but when notifications come in rapid-fire, it's tough to gain value from *any* of them. Reducing the number of alerts made our notification channels more useful, but we needed more significant notifications based on criticality.

As a true test of faith in our policy tuning, we connected all critical-level policies to [OpsGenie](https://www.evernote.com/OutboundRedirect.action?dest=https%3A%2F%2Fhelp.netuitive.com%2FContent%2FMisc%2FNotifications%2Fopsgenie_notification.htm). I do not remember who was on call that week, but I remember feeling bad for them.

So far, though, our tuning has worked. There has been a significant decrease in events, and the critical events which have fired have often been indications of real issues. Now that OpsGenie is our primary method of notification for critical alerts, we have an even stronger incentive to continually tune policies if they have a high false positive rate. Each critical level event also has useful notes that we continue to update to help when that OpsGenie alert goes off in the middle of the night.

We were almost to notification nirvana, but we found one piece missing: **context**.

Event Context and Alert Noise
-----------------------------

Event notifications contain useful data like current metric value and which policy conditions were violated, but often this isn't quite enough. Has the metric been close to deviating for a while? Has there been recent metric volatility? Did the metric baseline band tighten recently? All of these questions required following a link into the Metricly UI which is sometimes difficult on mobile or at 3AM when you're still half asleep. To remedy this we introduced a hotly requested feature: notification images.

![Alert Noise: Images in Notifications](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Images-in-Notifications-1.png)

These notification images provide at-a-glance context around the event. Formatted images (now available in all notification types) were just what we needed to quickly understand and respond to events regardless of time, notification medium, or who is on call.

Next Steps
----------

Our alert noise journey is far from over. Fewer and fewer alerts are false positives as we continue to tune our policies and metrics. Once we have enough confidence in these policies, we plan on connecting them into the system through [webhook notifications](https://www.evernote.com/OutboundRedirect.action?dest=https%3A%2F%2Fhelp.netuitive.com%2FContent%2FMisc%2FNotifications%2Fwebhook_notification.htm) that will automatically take the action the engineers currently take. Automatic resolution can solve common scenarios like needing to scale out services or spin up new Docker hosts due to increased traffic. We'll continue to develop new policies and move them through testing, manual intervention (OpsGenie/Slack alerts), and automated intervention (webhook triggers) phases so the system can heal itself. Meaning -- we'll all get to sleep a little more, and have fewer Slack notifications to read in the morning.
