---
author: "Bob Farzami"
date: "2016-05-10"
title: "Implementing Server Resource Utilization and Performance Analysis before a Migration"
description: "Good monitoring has reporting & alerting (especially anomaly detection) that can help with the performance and resource utilization aspects of a migration."
category: "Cloud Monitoring"
url: "/server-resource-utilization-before-migration/"
layout: "single"
---
Systems administrators sometimes face the arduous task of transitioning their environment, whether they're consolidating servers to save on the cost of infrastructure, or migrating servers to a new data center, private cloud, or public cloud. It probably seems counter-intuitive to integrate detailed [performance monitoring](https://www.metricly.com) just before a server migration. After all, moving infrastructure is hard enough without adding extra pieces to the puzzle, right?

Wrong.

In fact, there are some really good reasons to consider adding resource utilization and performance analysis to your environment before you migrate. Good monitoring offers reporting and alerting functionality (especially [anomaly detection](https://www.metricly.com/product)) that can help with the performance and resource utilization aspects of such a project. Here are three reasons not to wait to implement a performance monitoring solution.

*If you'd like to see resource utilization and performance analysis for your own environment, [try our free demo](https://www.metricly.com/signup).*

1) Monitoring Your Current Environment Is Key to Right-Sizing Your New One
--------------------------------------------------------------------------

Your team is moving to a new environment -- but how do you know what size environment you need? You could stick with an environment that's the same size as the old one as best you can, but you risk having over- or under-provisioned resources, which could lead to performance problems or an increase in cost. Before you migrate, you need a capacity plan.

The most important aspect of capacity planning is ensuring you fully understand the "footprint" of the application workload before making any changes. In simple terms, you need to measure the server resource utilization as well as the utilization of memory, disk and network I/O. You also need to know the disk space of the existing servers based on historic application workload.

Netuitive's [utilization report](https://help.netuitive.com/Content/Reports/utilization_boxplot_report.htm) uses two techniques to help this analysis:

First, it makes it easier to visualize relevant data measured in multiple dimensions by using a box-plot. A box-plot or a whisker-plot shows the minimum, maximum, and median as well as upper and lower quartile of utilization over the course of time. The upper and lower quartiles (shown as a rectangle) indicate the range of values for 50% of the measurements over time. A wide rectangle indicates volatility in usage, for which appropriate provisioning is required during peak hours.

[![Resource Utilization: box and whisker](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/boxandwhisker.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/boxandwhisker.png)

Second, this report gives you access to multiple resource utilization measurements. The most overlooked aspect of server consolidation and migration is the analysis in dimensions beyond server CPU utilization. It is easy to underestimate the memory or I/O requirements for a server, because estimation of I/O utilization requires understanding the server attributes that indicate the amount of I/O throughput the underlying physical server can support. You can obtain this information through any agent technology that can collect system configuration information. We pulled information on this example environment using Netuitive's agent:

[![Resource Utilization: Review CPU](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/ReviewCPU-1024x465.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/ReviewCPU.png)

Once you've pulled this report, it's helpful to sort by volatility, to see which elements are the most volatile, and which are "quieter" or more stable. The more volatile a system's utilization, the more risk you face in provisioning the correct amount of required computing resource.

[![Resource Utilization: Measure Volatility](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/MeasureVolatility-1024x461.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/MeasureVolatility.png)

2) Anomaly Detection Keeps You On Top Of Migration Issues
---------------------------------------------------------

As many administrators who have been through a consolidation and migration can attest, most performance problems occur right after the migration. This is where it's useful to employ [behavior learning technology](https://www.metricly.com/behavior-learning-engine) to learn the baseline of behavior for key performance indicators.

For instance, a sudden rise in run-queue-size (or "load" in Linux terminology) would be a significant problem, one that is likely related to [errors in capacity provisioning](https://www.metricly.com/3-ways-to-get-capacity-plans-wrong) if it occurs right after the transition. Another such KPI would be I/O-wait, which indicates the percentage of time that processes spend waiting for I/O to be free.

[![Resource Utilization: CPU anomaly](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/CPUanomaly-1024x306.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/CPUanomaly.png)

This is when you can really benefit from industry best practices for server CPU utilization. This screen shows a dynamic policy that looks for a server CPU percentage utilization deviation outside of a band of normalcy, and alerts if the deviation is combined with instances where run-queue-size is higher than twice the number of CPUs.

[![Resource Utilization: Dayof Issues](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/DayofIssues-1024x464.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/DayofIssues.png)

This 2 to 1 ratio is a basic rule of thumb for resource utilization for system administrators. For example, if 64 or less processes are waiting to run on a 32 CPU server, then it is considered normal, however, if 20 processes are waiting for CPU on a 4 CPU machine then your application users are likely feeling slowness.

Once a policy is violated, you need to know immediately, so you can increase the allocated capacity for the system that is having performance problems. This may be simple if you are using a private or public virtual machine, or if you have the flexibility to move workload based in containers such as Docker. You can categorize these notifications and receive them however you'd like -- by email, HipChat, or [PagerDuty.](https://www.metricly.com/combining-netuitive-and-pagerduty-for-monitoring-alarms)

[![Resource Utilization: Notifications](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Notifications-1024x460.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Notifications.png)

3) Reviewing Past Performance Issues Can Offer Important Insights for the Future
--------------------------------------------------------------------------------

The value of monitoring doesn't evaporate after your migration is complete! After few days have passed, running a Top Violator report (shown below) can help you spot systems that violate the most alerting policies.

[![Resource Utilization: Performance Report](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/PerformanceReport-1024x463.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/PerformanceReport.png)

This report searches up to a week in the past and looks for the systems that have the most violations of performance and capacity policies. This helps identify hot spots that are not critical to address immediately but that could help performance a few days after your server consolidation or migration is completed. These are key insights that can help you optimize your environment for both performance and cost.

* * * * *

*Are you considering migrating your environment, or do you want to apply these reports and analytics to your own system? Experience these features with Netuitive's [free, no-obligation 21-day trial.](https://www.metricly.com/signup)*
