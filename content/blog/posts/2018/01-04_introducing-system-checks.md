---
author: "Trent Waskey"
date: "2018-01-04"
title: "Introducing System Checks"
category: "Product Updates"
url: "/introducing-system-checks/"
layout: "single"
featured-image: "system-checks.png"
thumbnail-image: true
---
The new Metricly platform for system checks is finally here! This much anticipated addition adds a host of functionality around monitoring system health. In true Metricly fashion, this feature offers a wide range of practical uses, custom configuration, and powerful alerting. In this brief introduction we will explain what system checks are, how to enable them, and how to alert on them. We'll also be following up with another post that takes a closer look at configuring & customizing these checks.

Want to check out Metricly, but don't have an account? Get started with a [free 21-day trial](/signup) today!

### What are System Checks?

A Check is used to determine the binary state or availability of an infrastructure resource, service or application. Metricly monitors for the receipt of a named check message within a configurable interval; if the message is received within the time interval then the check is passed and the timer is reset. If it is not received in time it indicates that the source process is not reporting and the check has failed. You can then create a policy condition to receive a notification upon a check's failure. Checks are typically used to monitor server status, but the Metricly checks are flexible and can be customized to check anything that you can script.

- Pre-Built Checks
- Heartbeat
- Process/Service
- TCP Port

**Custom Checks**
Our platform is flexible to support any custom checks, but you will need a mechanism to schedule the scripts to run.  Linux cron jobs or Window task scheduler will typically work for most cases.

A key feature of the new Metricly system check is its simplicity. You can create a new check simply by posting a URL in the format shown below to the Metricly API REST endpoint without even requiring a JSON payload:

    https://api.app.netuitive.com/check/{apiId}/{checkName}/{hostName}/{ttl}

As long as you have a valid API ID, you can create any new check by simply naming it, associating it with a hostname, and giving it a time to live (TTL).

### Enabling The Checks

**In Linux**

1.  Make sure the Linux agent is installed
2.  Metricly checks can be enabled via the configuration files included with the agent
3.  All checks configuration files for the Linux agent can be found in /opt/netuitive-agent/conf/collectors
4.  Some of the checks are "enabled" by default, while you would need to "enable" other checks

Note: Currently, Metricly comes with three pre-built checks; Heartbeat, Processes, and Ports.  These are turnkey checks that do not require any scripting or coding, just simple configuration setting in the respective configuration files. Read our [help documentation for systems checks](/support/events/checks) for detailed configuration instructions.

**In Windows**

1.  Make sure the Windows agent is installed.
2.  Metricly checks can be enabled via the configuration files included with the agent.
3.  All checks configuration files for the Windows agent can be found in C:/Program Files (x86)/CollectdWin/conf/ or C:/Program Files/CollectdWin/conf/ (depending on the version of windows).
4.  Simply change the "enable" setting for the ReadSystemChecks from "false" to "true" in the CollectdWin.config file to enable the system checks.
5.  To configure the checks edit the ReadSystemChecks.conf file.

### Alerting on System Checks

Setting up an alert in Metricly requires the creation of a policy and the system checks are no exception.  Any check coming into the system can have a corresponding alert as well as a notification.

1.  Click on policies and select "New Policy"
2.  Name the policy and apply any scoping or filtering required (for example, narrowing the scope to WinServ in US-West region with Tag Environment:Production)
3.  Next click "Conditions", "Add Condition", and from the drop down you will see "Add System Check Condition"
4.  Now you just have to select the particular check. As long as the check has been posted at least once to the API, it would automatically show up on this menu. Then save, and you are done.
5.  To add notifications, click the tab, and select the notification type. For more detail, see [configuring notifications](/support/events/notifications).

We're very excited about this new addition to Metricly and look forward to seeing all the ways our clients will implement system checks as part of their [monitoring strategy](/evaluate-monitoring-strategy). Tweet us your comments & feedback @Metricly or email support@metricly.com Be sure to stay tuned for future posts that will take a deep dive on the configuration & customization of system checks.
