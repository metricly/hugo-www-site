---
author: "Christina DiSomma"
date: "2017-04-19"
title: "New at Metricly: Policy Page Upgrades"
description: "Our engineering team works hard to make Metricly as easy-to-use as possible. Recently, we took those goals to our monitoring policy page. See what's new!"
category: "Product Update"
url: "/policy-page-upgrades/"
layout: "single"
---


When we talk to DevOps teams, we hear a lot about time -- the limited time a small team has at its disposal, the increased amount of time it takes to use traditional monitoring, and the ways in which automation and useful out-of-the-box solutions help bridge the gap. Our engineering team certainly understands the value of time, and they've been working hard to not only make [Metricly](/product) easy to use, but to limit the amount of time you need to spend keeping your monitoring's configuration aligned with changes in your environment. Recently, they've brought those goals to our monitoring policy page. Here are some of the time-saving improvements!

New at Metricly: Policy Page UpgradesTurn Policies On and Off with One Click
-----------------------------------------------------------------------------

![](/wp-content/uploads/2017/07/Enable-Policy-768x461.gif)

Need to deploy code that could spike an instance's CPU utilization, and want to turn off a specific policy to avoid alert noise during the deploy? The new "Enabled" column allows you to toggle policies on and off with a single click. This column also makes it simple to see which policies are active in your environment at any given time. Once the deploy is done, toggle the policy back on with a single click, and your monitoring is back online! This doesn't affect metrics, either; it just prevents the abnormal metric levels from creating an event.

Easy Notification Identification
--------------------------------

![Policy Page Improvements: Notifications](/wp-content/uploads/2017/07/Screen-Shot-2017-04-18-at-1.15.53-PM-768x461-1.png)

In addition to the "Enabled" column, we've added a column listing the notifications attached to each policy. The icons indicate how you'll be notified when a given policy fires: email, HipChat, OpsGenie, or via a Webhook. Adding notifications is also much easier -- more on that in a moment!

Find Noisy Policies Instantly
-----------------------------

![Policy Page Improvements: Events](/wp-content/uploads/2017/07/Event-Sorting-768x460-1.gif)

All of the categories on the policy page are now sortable -- including the "Events" category. This makes [finding noisy policies](/understanding-alert-noise-monitoring) a snap -- just click and sort.

Enable Bulk Editing
-------------------

Last but certainly not least, we've introduced bulk policy editing. When you select the policies you'd like to edit, a bar appears along the top, and you can add notifications, delete or copy the policies, or delete the events associated with those policies. Want to edit your EC2 notifications to re-notify every ten minutes instead of every five? No problem. Spinning up a new autoscale group, and want to use the same policies with only minor changes? Click and copy, then make changes where necessary. Find the issue causing an unnecessary number of events, and you can easily clear them without needing to seek out each event. Once you're done with a policy or a set of policies, deleting them is simple as well.

* * * * *

*Make your monitoring easier -- try out our policy improvements with Metricly's [21-day, fully-featured free trial](/signup).*
