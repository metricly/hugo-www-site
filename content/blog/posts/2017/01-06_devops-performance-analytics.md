---
author: "Chris Tozzi"
date: "2017-01-06"
title: "Where Performance Analytics Fit Within DevOps"
description: "You could build a continuous delivery pipeline without performance analytics - but it would be tough to keep the delivery chain running smoothly & rapidly."
category: "Devops"
url: "/devops-performance-analytics/"
layout: "single"
---
When you hear people talking about DevOps, terms like "continuous integration," "continuous delivery" and "agile" tend to dominate the conversation. "Performance analytics" is less likely to feature prominently.

Yet to do DevOps effectively, performance analytics are a crucial part of the picture. Sure, you could theoretically build a continuous delivery pipeline without [performance monitoring](/product). But it would be very difficult to keep your delivery chain running as smoothly and rapidly as possible.

Below, I explain why performance analytics are a key part of an effective [DevOps workflow](/adding-analytics-to-devops-model), and where to fit them into your continuous delivery chain.

DevOps Goals
------------

To understand why performance analytics helps you to do better DevOps, let's first define the goals of DevOps.

If you're doing DevOps, it's because you want to:

1.  Improve communication across your technical staff. That's why DevOps emphasizes seamless collaboration between developers (the "Dev" folks) and admins (the IT Ops, or simply "Ops," people).
2.  Deliver software continuously. Instead of having to pause between each phase in the software development and delivery process, you want changes to flow down the pipeline from design, to development, to testing, and to deployment on a continuous basis.
3.  Simplify management. Software that is delivered continuously is also easier to administer at all stages, since changes are smaller and incremental. Those are easier to manage than updates that totally revamp the way an app works all at once.

The list could go on, of course. There are lots of other benefits you could potentially derive from DevOps, depending on your particular goals and needs. But the three items above are goals of almost any organization that has adopted a DevOps workflow.

How Performance Analytics Help Meet DevOps Goals
------------------------------------------------

How can performance analytics help you to achieve those goals? In lots of ways. Consider the following points:

**Performance Analytics Help You Test Changes**

Continuously delivered software updates are only useful if the updates actually improve the performance of the software. To determine whether the changes you are making are helping, you need continuous, real-time performance analytics so you can track the impact of each change as soon as it is rolled out.

Measuring the effectiveness of code changes would be important in any type of software workflow. But it's especially essential in DevOps, since part of the value of DevOps and continuous integration is that they let you [identify and correct problems early](/monitoring/), when they are still easier to fix. Continuous integration servers and tests can help you identify development bugs. But when it comes to problems that affect application performance, the only way to detect and correct them quickly is to run performance analytics early and often on your application.

**Performance Analytics Increase Visibility**

If you want all members of your software delivery team to be able to communicate well, you need to provide them all with the same insights into the delivery pipeline and the state of an application. Performance analytics tools help you do this by collecting and summarizing performance monitoring data on [dashboards](/product/dashboards-and-reports) where any developer or admin can easily view it.  [![Increased Visibility with Performance Analytics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Visibility.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Visibility.png)

This visibility and accessibility is important in a DevOps environment, because without it, only engineers who take the time to collect performance data and analyze it for themselves will know how the application in question is performing. Unless they explicitly discuss their findings with other members of the team, this information will go unnoticed, minimizing visibility.

With a centralized performance analytics [dashboard](/devops-dashboard-best-practices) that anyone can access, however, your DevOps team gets maximum visibility into this important part of application status.

**Performance Analytics Help Developers and IT Ops Communicate Better**

DevOps has become popular because it helps to solve the disconnect between development and IT Ops teams that traditionally led to software rollout problems, misalignment between feature development and user demand, and so on. By encouraging developers and IT Ops admins to work together instead of in siloes, DevOps helps avoid many of the problems of outdated software delivery methods.

However, one challenge that DevOps cannot solve without the help of performance analytics is ensuring that the code that developers are writing delivers the performance that admins want for production. Merely having developers and admins talk to one another about performance doesn't guarantee that the people who are responsible for writing high-performance code (meaning the developers) can meet the expectations of the people who run that code in production (meaning the admins). Nor does it assure that admins, for their part, deploy applications in ways that maximize performance, regardless of underlying code.

So, without performance analytics, you get a DevOps workflow where developers and IT Ops talk to each other about the performance they'd like to see, but can't effectively measure whether they are meeting their respective goals. By making performance analytics a part of your workflow, you assure your team that the performance expectations requested by each part of the team are being met by other parts of the team.

**Performance Analytics Pinpoint the Root of Problems**

[![Performance Analytics and Root Analysis](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RootofProblem.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RootofProblem.png)

One of the pitfalls of continuous delivery is this: Changes roll down the pipeline so quickly that it can be difficult to trace a new problem to an individual change. If developers are integrating hundreds of new pieces of code per day, and updates are being pushed into production at the same rapid pace, how do you quickly determine which individual code integration caused a particular problem experienced in production?

That answer, at least when it comes to performance problems, is to use performance analytics to gain insights into exactly when a performance problem began to occur. With this information, tracing the issue back to a particular [integration](https://docs.metricly.com/integrations/) becomes much easier. Plus, performance analytics can help you to understand whether something other than code changes (for example, a change in the deployment environment) was responsible for a problem. Not every issue is Development's fault.

**Performance Analytics Help You Cope with Heterogenous Environments**

In an ideal world, all development and deployment environments would be identical. Technologies like [Docker](/monitor-performance-docker-containers) containers are helping to bring us closer to such a world, but we are not there yet.

If you develop an application that can run on a server, you can test it, stage it and deploy it using [containers](/how-to-monitor-microservices), which is great, because you have a consistent environment across your entire pipeline.

But the reality is that not all applications can run in containers, and not everyone is using Docker. For this reason, performance analytics tools that can monitor application performance in different types of environments are essential for ensuring that the software you deliver continuously will work well in all of the environments to which it is being delivered. With performance analytics, and some virtual machines that mimic a diverse set of deployment environments, it's easy to know that the software you are writing will work well not only on your own platform, but also on all of the ones users will be running.

Conclusion
----------

When you think about the tools you need to deliver continuously using a DevOps workflow, technologies like Docker and continuous integration servers are probably the first ones to come to mind. However, performance monitoring and analytics tools are an equally important part of optimal DevOps. They help assure that your team reaps the full benefits of a DevOps workflow, and that users derive maximum value from the software you deliver.
