---

date: "2016-10-19"
title: "The Benefits of Computed Metrics in Monitoring"
description: "The dynamic nature of microservices speeds up deployment, but presents problems for monitoring. Here's how we added Metricly to our in-house microservices."
category: "Cloud Monitoring"
url: "/how-to-monitor-microservices/"
layout: "single"
---

Microservices have become a huge part of cloud computing and the DevOps community. By "doing one thing and doing it well," microservice architecture allows teams to focus on individual areas of improvement. The laser-focused nature of microservices speeds up testing and deployment, but presents some challenges for monitoring.

The Netuitive engineering team knows these problems all too well, as we recently embarked on a mission to add Netutive monitoring to our in-house microservices. Here are the problems we discovered, and the approach we took to solve them.

3 Requirements when Monitoring Microservices
--------------------------------------------

**1) The monitoring needs to be lightweight.**

Part of what makes microservices so unique (and useful in an agile environment) is that they're self-contained, with no external dependencies. All of that falls apart if the monitoring for microservices isn't also self-contained. Therefore, the monitoring and its databases, libraries, etc. all also need to be contained within the microservices container in a way that won't interfere with the lightweight nature of the service.

**2) The monitoring needs to be easily configurable.**

Microservices are by nature incredibly dynamic -- it's what offers them an advantage over traditional infrastructure. To add to that, many microservice creators use a continuous deployment model, making near-constant changes to each microservice to fix bugs or offer additional functionality.

Monitoring, on the other hand, does not traditionally fit into this model. A lot of monitoring is "set-it-and-forget it" and very bulky as a result, to say nothing of the manhours often needed to get it configured and working properly. To be able to effectively monitor microservices, though, the monitoring needs to be able to keep up with changes to the code without too much additional effort. Otherwise, the temptation is to pull the monitoring out of the next deployment altogether, leaving the microservice to its own devices with no oversight.

**3) The monitoring needs to be non-intrusive and highly scalable.**

Monitoring must have low overhead -- meaning it has low footprint in terms of CPU, memory and I/O consumption. Otherwise, it slows down the application that it's monitoring -- which defeats the purpose of using microservices in the first place.

A monitoring solution also needs to be embedded in each new microservice without requiring manual configuration beyond an initial generic setup that would apply to all microservices.

All in all, this is a tall order. Luckily, Netuitive's engineering team was up to the task.

Configuring Netuitive to Monitor Microservices
----------------------------------------------

Our engineering team started at the core of the microservices monitoring -- with the microservices themselves. We examined the counts, latency and errors (telemetry data) at the inputs and outputs (our points of instrumentation) for each microservice to determine the data we'd need to collect.  Let's quickly define these for reference:

### Telemetry Data

In this context, "count" represents the number times a function or a method call is invoked. Latency represents the time in milliseconds that it took for the function or method to run, while error rate represents the number of invocations that results in an error as a percentage of total invocations.

### Points of Instrumentation

We explored the inputs for each microservice and asked the following questions:

-   What inputs does this service consume?
-   Is it ingesting off of a topic in kafka or servicing requests to an end user?

The team had to be very deliberate here, because any degradation could cause upstream / downstream issues. Likewise, we researched the outputs for each service. A microservice may persist something into a database or send information downstream on a queue somewhere for further processing.  Again, we had to be very thorough, since mistakes here will cause serious problems later.

Once we had the inputs and outputs documented, we needed to work out the data collection and consolidation infrastructure. Because the Netuitive agent integrates so seamlessly with StatsD, we elected to use that to consolidate the data. (Netuitive's Linux agent is also able to act as a StatsD server, which helps if an organization wants to avoid the need for maintaining a dedicated StatsD server. In this case, we already had a dedicated StatsD server, so we used it.) Here's how the flow of data looks:

[![microservices-monitoring-monitoring-flowpng](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Microservices-Monitoring-Monitoring-FlowPNG-1024x275.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Microservices-Monitoring-Monitoring-FlowPNG.png)

Monitoring Microservices with Netuitive
---------------------------------------

Once the team had the nuts and bolts of monitoring an individual microservice sorted, they configured a [Netuitive monitoring package](https://www.metricly.com/aws-monitoring-best-practices-using-pre-configured-dashboards) to make future setup effortless. Each package contains a specialized set of dashboards, alerting policies, and analytics configuration necessary to monitor a particular microservice. All future points of instrumentation / integration then can leverage the same package to avoid the need for additional manual configuration.

Monitoring microservices is no easy feat -- but with Netuitive's lightweight nature and customizable StatsD integration, it's absolutely achievable. There is a lot of value in monitoring your micro services in the context of your overall stack which include the performance, capacity and cost of your infrastructure. If you're looking to monitor your own microservices, take Netuitive for a spin.  [We offer a free trial](https://www.metricly.com/signup) which includes this functionality [and more](https://www.metricly.com/product).
