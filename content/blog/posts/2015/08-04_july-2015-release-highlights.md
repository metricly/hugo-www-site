---

date: "2015-08-04"
title: "July 2015 Release Highlights"
description: "In July, we are highlighting Metricly’s new Java agent, a revamped policy editor, support for AWS Auto Scaling groups, & Docker support for our host agent."
category: "Product Updates"
url: "/july-2015-release-highlights/"
layout: "single"
---


In July, we are highlighting Metricly's new Java agent, the revamped policy editor, support for AWS Auto Scaling groups, and Docker support for the Metricly host agent.

JVM Monitoring
--------------

[![Java Monitoring (July Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/JavaMonitoring.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/JavaMonitoring.jpg)

Metricly's Java agent is a programmable bytecode instrumentation utility designed to collect data from Java applications. The agent enables the collection of Java Virtual Machine (JVM) runtime system metrics such as CPU, heap, Garbage Collection, threads & classes count, and application component method performance statistics such as number of method calls and corresponding execution time. These metrics provide vital insight into performance levels, allowing monitoring of applications and system resources. The agent is designed for quick installation and configuration.

Policy Editor
-------------

[![Policy Editor (July Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/policyEditor-1024x586.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/policyEditor-1024x586.jpg)

The new and improved policy editor features a fresh look and feel to allow intuitive policy creation. This editor can also update the Metricly out-of-the-box policies that are based on best practices compiled over the years for various domains. The editor now has separate tabs for the four components of policies: scope, conditions, actions, and description. In addition to the usability improvements, three new features have been added:

-   A policy summary appears in a sidebar. You no longer need to toggle between the three tabs to look back at information previously entered.
-   An error message provides details on what information is missing or filled out incorrectly.
-   Notification sources can be directly added to the policy editor page.

AWS Auto Scaling Group Support
------------------------------

[![AutoScaling Group Support (July Release)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/AutoScaling-Group-Support-1024x518.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/AutoScaling-Group-Support-1024x518.jpg)

Auto Scaling groups (ASG) for AWS allow automatic scaling of computing needs according to specified conditions (policies, schedules, and health checks.) The user also sets a maximum and minimum number of EC2s that a group supports.

Metricly collects measurements from EC2s that are members of an Auto Scale group and automatically combines the metrics to reflect the aggregate behavior of the group as a whole in the form of a new and separate element. Without Metricly's calculations, a user would have to upgrade to a premium level of AWS CloudWatch to get the same aggregate ASG metrics every minute.

An ASG element will automatically show up in the inventory page if the user has an ASG in their AWS account. This new element can be added to a policy or as a group status widget, which provides a visual update on the size and condition of EC2s.

* * * * *\
Want to see these release highlights in action? We offer a 21-day, [free trial of Metricly.](/signup)
