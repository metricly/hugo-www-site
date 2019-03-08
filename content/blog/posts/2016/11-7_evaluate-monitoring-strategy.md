---
author: "Bob Farzami"
date: "2016-11-07"
title: "Evaluate Your Monitoring Strategy"
description: "We’ve devised a framework that can help teams compare their implementations against the complete set of available monitoring tools for DevOps."
category: "Cloud Monitoring"
url: "/evaluate-monitoring-strategy/"
layout: "single"
---
An increasing number of open source and SaaS, devops monitoring tools have been introduced in the market over the last couple of years. To help you with your evaluation process in a rapidly changing environment, we've devised a generic reference architecture and strategy framework that helps compare a tool's implementations against the complete set of available functionality.

This framework provides a good starting point to evaluating your monitoring needs, and taking inventory of what your tools already provide, where you should augment functionality, and where you can consolidate.

Determine Your Monitoring Goals
-------------------------------

The end goal for your monitoring is to consolidate tools, reduce the total cost of ownership, and automate the configuration via [machine learning](/monitoring/).

| Monitoring Goals | Benefits |
| --- | --- |
| Consolidate monitoring tools when possible | Streamline and speed up troubleshooting |
| Choose tools with preset configuration | Shorten migration and setup time |
| Use open source and open license agents | Remain vendor-independent and extend technology |
| Adopt machine learning technology | Automate manual configuration tasks |
| Use hosted services when cost effective | Eliminate administration cost and distraction |
| Integrate public cloud monitoring | Manage cloud performance and cost |
| Integrate with instant messaging and paging services like [PagerDuty](/metricly-pagerduty-monitoring-alarms/) or [Slack](https://docs.metricly.com/alerts-notifications/notifications/notifications-slack/) | Specialized reporting for measuring capacity and analyzing cloud costs |

Once you've set your goals, take a look at your monitoring tools.

Identify Monitoring Functionalities
-----------------------------------

The expectations from monitoring tools for DevOps have evolved in recent years and now include the collection of performance time-series data from open source agents, the persistence of the data in scalable time series databases, and the application of machine learning for alerting and reporting.

Here's a generic set of functionalities that one or more of your tools might provide:

[![Monitoring Tools for DevOps: Functionalities](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Monitoring-Tools-and-Functionalities-1024x500.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Monitoring-Tools-and-Functionalities.png)

**Dashboards**: Preset [dashboards](/) that are easy to customize and share with peers.

**Reports**: Out of the box reports to help capacity planning and identify performance hotspots.

**Diagnostics**: Troubleshoot across your full application stack in the same user interface.

**Notifications**: Alerts that can be integrated with instant messaging and escalation services.

**REST API**: Ingest custom data, access any data, and update configuration via documented API.

**Data Retention**: Scalable Big Data storage for log data and for time series performance data.

**Data Collectors**:  Open source/license agents for every middleware and programming language.

**Machine Learning**: Real-time anomaly detection and non-real time analysis of capacity cost.

These features are what *might* be offered -- but where in your stack should each feature fall? Let's explore that in the next section.

Monitor Your Full Application Stack
-----------------------------------

Specific functionality is available for each tier of your application stack. This list is not meant to be comprehensive but rather intended to capture the largest feature sets.

[![Monitoring Tools for DevOps: Monitoring Domains](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/DevOps-Monitoring-Domains.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/DevOps-Monitoring-Domains.png)

### End-User

**Synthetic Monitoring**: Exercise a web page or API at regular intervals with a test script.

**Page Load Performance**: Measure the time that it takes for a standard web page to load.

**Browser Performance**: Measure execution latency inside of the browser.

**Ajax Monitoring**: Measure latency of each Ajax call for a single-page-load application.

### Application

**Performance Metrics**: Measurement of count, errors and latency down to method calls.

**SQL Query Analysis**: Identify the slowest running queries.

**Transaction Tracing**: Associate inter-dependent application calls from ingress to egress.

**Custom Metrics**: Ingest, store, display and analyze any custom data.

### Infrastructure

**Availability Checks**: Standard and custom checks for HTTP, TCP port, process, etc.

**Metrics Collection**: Open source/license agents to collect performance data from each tier.

**Time Series Database**: Scalable storage and retrieval of performance data.

**Log Indexing**: Aggregation, indexing and searching of text-based log data.

### Public Cloud

**Cloud Service Monitoring**: Monitor services such as load balancer, messaging, storage, etc.

**Capacity Utilization**: Measure different dimensions such as memory, I/O, storage space.

**Cost Analysis**: Analysis, aggregation and recommendations of historic and projected costs.

**Auto-Scaling Analytics**: Simulation and real-time optimization of nodes in a cluster.

This list is by no means exhaustive, but should give you an idea of what your existing monitoring tools offer -- and where there are holes in your monitoring strategy.

Evaluating Monitoring Tools for DevOps Workflows
------------------------------------------------

While each environment is unique, the outlined framework here can be used as a starting point for any devops team's evaluation process. By outlining goals that would generally apply to your monitoring strategy as a whole, you are able to start narrowing your focus during evaluation to, "Does it meet my needs and goals?" Understanding generic sets of monitoring functionalities that your tools should provide in aggregate allows you to deep dive in to feature functionality during the trial process. Finally, knowing the monitoring functionality associated with each monitoring domain (such as infrastructure or application monitoring) helps inform the best choice for a comprehensive or specific monitoring solution.

* * * * *

*To learn more about how Metricly can help you take your monitoring to the next level with machine learning technology and integrations to open source agents, check out our [product page](/product) or sign up for a [free trial](/signup).*
