---
date: "2017-08-22"
title: "July 2017 Release Highlights"
description: "This July Metricly introduced quite a few new features, including support for AWS GovCloud and AWS ALB. Read on for more details!"
category: "Product Updates"
url: "/july-2017-release-highlights/"
layout: "single"
---
This July Metricly introduced quite a few new features. Here's what we're excited to share:

AWS GovCloud Monitoring
-----------------------

[AWS GovCloud](https://aws.amazon.com/govcloud-us/) (US) is an isolated AWS region designed to host sensitive data and regulated workloads in the cloud, helping customers support their US government compliance requirements. You could always install our open source agents inside of the EC2 instances hosted in GovCloud to monitor the OS and middleware. With the introduction of our new support for AWS GovCloud, you can also monitor all of the native AWS services such as EBS, ELB, and many more that are hosted in AWS GovCloud.

For security reasons, GovCloud does not provide access to CloudWatch API for purposes of collecting performance metrics via an IAM Role, however access is supported via an IAM User.  The setup is as easy as creating an IAM User and entering it in the Metricly configuration page to start data collection and [behavior learning](/what-is-anomaly-detection), while [pre-configured dashboards and alerting policies](/aws-monitoring-best-practices/) avoid the need for any additional manual configuration on your part. Note that your performance data would leave GovCloud and be processed in the commercial AWS platform.

![AWS GovCloud](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/AWS-GovCloud-1024x565.jpg)

AWS Application Load Balancer (ALB) Support
-------------------------------------------

An [Application Load Balancer](https://aws.amazon.com/elasticloadbalancing/applicationloadbalancer/) (ALB) is a load balancing option for the Elastic Load Balancing (ELB) service that operates at the application layer and allows you to define routing rules based on content across multiple services or containers running on one or more EC2 instances. We have supported ELBs and many other native AWS services in the past, and we have just added support for ALBs.

The activation is as easy as checking an extra box on the AWS configuration page for the data to start flowing. All of the available native AWS metrics such as Request Count Per Target, and Target Response Time are collected, while we also calculate newly [computed metrics](/computed-monitoring-metrics) to provide additional insights such as Error Percent (number of errors divided by number of requests). Once the data collection begins, our [behavior learning](/what-is-anomaly-detection) starts and our [pre-configured dashboards and alerting policies](/aws-monitoring-best-practices/) avoid the need for any additional manual configuration.

![AWS ALB Monitoring Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/Metricly-ALB-Dashboard-1024x273.png)

Event Count Column Added on Inventory Page
------------------------------------------

Our inventory page groups all collected metrics by type (ex. AWS ELB, AWS DynamoDB, Linux Server, Windows Server, JVM, Application Cluster, etc.) and displays the list of all of the resources that are being monitored in your environment along with the percentage of data samples that are being currently collected from each element, as well as any other attribute or meta-data that you choose to display as additional columns on this page. Clicking on each "element" opens a slider (shown below) that displays the key performance metrics (KPI) and meta-data for the specific element.

Now, this page also displays the number of events which represent breaches of pre-configured or custom alerting policies. You can drill down to see a list of the specific events and with one more click you can see the deviating metrics that have caused a breach of the alerting policies. This is designed to help you gain an at-a-glance status of your environment's health and offer drill-down troubleshooting capabilities.

![Element Slider view on Click](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/Metricly-Element-Slider-1024x333.png)

![Event Count column allows for at-a-glance status of your environment's health](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/Event-Count-Column-1024x299.png)
