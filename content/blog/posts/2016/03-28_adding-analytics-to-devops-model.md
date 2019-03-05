---
author: "Elizabeth Nichols"
date: "2016-03-28"
title: "Anomaly Detection for DevOps: Adding Advanced Analytics to a DevOps Model"
description: "For the most accurate results, advanced analytics should be applied within a comprehensive monitoring workflow. Here is one such DevOps model."
category: "DevOps"
url: "/adding-analytics-to-devops-model/"
layout: "single"
---


*Ed. Note: This is part 3 of a three-part series on anomaly detection and the impact it has on a DevOps model.  [Part 1](https://www.metricly.com/what-is-anomaly-detection) examined anomaly detection in performance monitoring and the four possible outcomes of its implementation. [Part 2](https://www.metricly.com/3-types-anomaly-detection-monitoring-tools) analyzed various tools DevOps teams can use to detect and respond to anomalies.*

Ideally, anomaly detection is not simply an isolated monitoring step or the only factor in deciding whether or not to issue and alarm or take some action. For the most accurate results, [advanced analytics](https://www.metricly.com/product) should be applied within a more comprehensive monitoring workflow. Here is one such DevOps model that has worked well for us.

A DevOps Model: The Ideal Monitoring Workflow
---------------------------------------------

1.  Capture infrastructure and application metrics in real time
2.  Apply multiple types of analytics to the observations
3.  Discover deviations in the observed data
4.  Apply structural knowledge such as relationships between components to refine raw analytic results
5.  Assess the results within the contexts of environmental semantics and other human knowledge (at Netuitive, we call this a "[policy](https://help.netuitive.com/Content/Policies/policies.htm).")

[![Devops Model: DevOps Workflow](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/workflowPNG-1024x659.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/workflowPNG.png)

Applying Analytics to Collected Data
------------------------------------

[![DevOps Model: MetricDataExposed](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/MetricDataExposed.jpg)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/MetricDataExposed.jpg)

In this DevOps model, raw data is collected via agents and other sources. This data is then accessible to a repertoire of analytics that can be generally applicable or have a specific focus on detecting certain types of anomalies. Analytic results along with other collected data such as attributes, relationships, and configurations can be enriched with human expertise, sometime called *priors* or *a priori* information.

Conditional and Rule-Based Alerting Policies
--------------------------------------------

[![DevOps Model: alerts](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/alerts-1024x438.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/alerts.png)

Often, the integration of all this information looks like some sort of decision logic -- perhaps a set of conditions to be tested. Conditions can be simple inequalities like *if percent.utilization > 95%* -- this is just a simple threshold test. A more interesting condition might be: if *upper.deviation* exists which test to see of the current set of conditions is abnormal based on some machine learning analytics. Conditions might also include tests regarding duration which allows a human to specify that some action should be initiated only if the conditions have lasted for some period of time -- say 15 minutes.

Creating Actionable Alarms and/or Notifications
-----------------------------------------------

[![DevOps Model: alerts3](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/alerts3-1024x182.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/alerts3.png)

The final stage of the workflow is to trigger an action. Actions can include raising an event, sending an email, or making a scale-up request that ultimately adds nodes to a cluster.\
Using analytics together within a workflow such as the one shown above, DevOps staff can achieve highly accurate results -- namely minimizing false positives and false negatives.

* * * * *

*Want to see how Netuitive can fit seamlessly in your team's workflow? [Try us free for 21 days.](https://www.metricly.com/signup)*\
www.
