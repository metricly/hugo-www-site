---

date: "2016-09-08"
title: "August 2016 Release Highlights"
description: "Metricly’s August 2016 release highlights include ASG Tuning Report, AWS Lambda support, Alerting Policy Improvements, and more!"
category: "Product Updates"
url: "/august-2016-release-highlights/"
layout: "single"
---

As summer begins to wane and the leaves begin to fall, we're really fine-tuning our favorite and most useful parts of Netuitive to make your monitoring lives easier.\
Netuitive's August 2016 release highlights include ASG Tuning Report, AWS Lambda support, Alerting Policy Improvements, and EC2 Cost Savings Report improvements.

ASG Tuning Report
-----------------

[![ASG_TU~1](https://www.metricly.com/wp-content/uploads/2016/09/ASG_TU1-1024x602.png)](https://www.metricly.com/wp-content/uploads/2016/09/ASG_TU1.png)

The [Auto Scaling Group (ASG) Tuning Report](https://www.metricly.com/optimize-auto-scale-groups-asg-tuning-report) provides a summary of the EC2 instance hours managed by all of your ASGs over the past few weeks. The data is summarized by hour and day for the preceding one-to-four weeks depending on how long Netuitive has been monitoring the ASG. By analyzing the historic workload patterns and instance counts of your ASG over time, the ASG Tuning Report can provide an hourly notification for the optimal node count to lower cost and improve performance. Preset optimization strategies are available for reducing the ASG costs based on your risk tolerance levels. In addition, manual control settings are available for visual what-if analysis and graphical simulation.

AWS Lambda Support
------------------

[![Lambda logo](https://www.metricly.com/wp-content/uploads/2016/09/Lambda-logo.png)](https://www.metricly.com/wp-content/uploads/2016/09/Lambda-logo.png)

Netuitive now includes AWS Lambda on the list of supported services using our [AWS integration](https://help.netuitive.com/Content/Misc/Datasources/AWS/new_aws_datasource.htm). Netuitive can provide visualization of the performance of your Lambda function(s), including duration, errors, invocations, and throttles metrics. As with any AWS services that you monitor with Netuitive, pre-built monitoring dashboards, computed metrics, and alerting policies will automatically populate in your account as soon as a Lambda instance is enabled for monitoring. Now you can apply anomaly detection to your Lambda function by simply checking a configuration box in the user interface and letting Netuitive do the rest.

Alerting Policy Improvements
----------------------------

[![POLICY~1](https://www.metricly.com/wp-content/uploads/2016/09/POLICY1-1024x342.png)](https://www.metricly.com/wp-content/uploads/2016/09/POLICY1.png)

Based on user feedback, we've improved the value and utility of alerting policies and the [policy setup page](https://help.netuitive.com/Content/Policies/PolicyEditor/policy_editor.htm). New and additional features include:

-   Filtering and searching for your favorite policies on the main Policies page based on policy name, who created the policy, whether the policy is enabled, and the element type used in the policy.
-   Policy duration range increased to span 5 minutes to 6 hours. This will help capture any anomalies that may happen over a longer period of time greater than 30 minutes.
-   Additional notification controls to help reduce alarm noise. These will allow you to set if a notification should be resent multiple times or not.

EC2 Cost Savings Report Improvements
------------------------------------

[![ec2_cost](https://www.metricly.com/wp-content/uploads/2016/09/ec2_cost-1024x602.png)](https://www.metricly.com/wp-content/uploads/2016/09/ec2_cost.png)

The [EC2 cost savings report](https://help.netuitive.com/Content/Reports/ec2_cost_report.htm) is now easier to use and more comprehensive. You can now compare costs with additional metrics, such as memory utilization percent and disk I/O percent, to provide a multi-faceted look into resource utilization. We've also added a new summary table below the cost graph. This displays summary data for all of your EC2 instances and can also be sorted using the column headers, which will update the cost graph to match the selected sorting order.

* * * * *

*Want to see all these new features in your own envrionment? Netuitive offers a [21-day, no-obligation free trial](https://www.metricly.com/signup).*
