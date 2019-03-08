---
Author: "Shawn Butts"
date: "2014-08-20"
title: "What Will Happen?"
description: "If you’ve set up the right monitoring, you know what’s happening in your stack and what just happened. But how do you know what’s going to happen before things go wrong?"
category: "DevOps"
url: "/will-happen/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

If you've set up the right monitoring, you know what's happening in your stack and what just happened. But how do you know what's going to happen before things go wrong?

You've spent countless hours, days, or even weeks researching, designing and setting up your monitoring system.  You've got Collectd, Graphite, StatsD, Sensu, and a dozen other tools set up.  You're using services like CloudWatch, PaperTrail, PaperDuty, and Pingdom -- all running smoothly. You've done everything right and there is nothing that happens in your stack that you're not aware of.

Like many in the DevOps universe, you've got everything you need to figure out what happened when your stack falls over.  From just a few seconds ago to a few weeks ago, you've got all the data you could ever want.  If you're really lucky, you can even see what's causing the outage while you're in the middle of it. Now what?

There are two basic questions that everyone monitoring stacks must answer:

What happened?

The DB cluster fell over because it ran out of RAM.  After more than an hour of digging you find the root cause in the logs: a poorly formed query.

What is happening?

It's 3am and you're awakened by an alert on your phone: "The file server is running at 100% CPU usage."

It's probably just the backup running, right?

The past hour of data is crucial to every Ops person.  This is why any monitoring tool worth it's weight can tell you "What happened?" and "What is happening?"

Since everyone can see the past, we're focused on the other direction.

What will happen?

Did you know that if your DB cluster's RAM usage goes above 90%, your application response time will drop by 20%?

Behavioral learning can find how one metric is affected by others. Using that information can forecast its trend, which in turn helps you know where a metric should and will be.

What *should* be happening?

It's 3am and your file server starts running at 100% CPU usage and continues for 15 minutes. That's normal. So, there is no need to wake you up.

It's 3am and your file server is running at 5% CPU usage. That's not normal. But, it's not down. So, I'll send you an email and let you sleep. Concentrating on what *will* happen and what *should* happen means that the Ops team has fewer sleepless nights.

Looking into the past is easy. Everyone does it. Looking into the future is difficult. That's why we do it.
