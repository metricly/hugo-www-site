---
author: "Christina DiSomma"
date: "2017-01-12"
title: "Introducing AWS CloudWatch: Custom Metrics Integration"
description: "Cloudwatch custom metrics can be configured to include virtually anything: from user or session data that exists outside AWS, to business metrics."
category: "Product Updates"
url: "/aws-cloudwatch-metrics-integration/"
layout: "single"
---

If your environment is built on AWS, chances are likely that you have utilized AWS CloudWatch metrics. We've long offered [support for standard CloudWatch metrics](https://help.netuitive.com/Content/Integrations/aws.htm) (and improved upon them in some cases with more frequent data cycles and additional computations), but now we're taking it one step further. Today, we're proud to introduce support for Custom CloudWatch Metrics.

Cloudwatch custom metrics can be configured to include virtually anything: from user or session data that exists outside AWS, to business metrics such as purchase size or frequency. And if you previously used CloudWatch as your sole monitoring solution, your custom metrics might include disk and memory metrics for other technologies as well. Metricly offers direct integrations for Amazon services and other stack components like [Linux](https://help.netuitive.com/Content/Integrations/linux.htm) and [Docker](https://help.netuitive.com/Content/Integrations/docker.htm), but with this new option, users can choose to send data to Metricly via AWS custom metrics.

Monitoring for serverless applications like Lambda functions is a common CloudWatch custom metrics use case.

With custom metrics, it's possible to fully instrument your Lambda functions with nothing more than the AWS SDK , as opposed to bringing a separate SDK for your monitoring solution into your Lambda function.

To start collecting custom metrics, users simply need to start sending custom data into CloudWatch , and connect to Metricly via our new Custom CloudWatch integration. Once connected, the data will appear in [Metricly](/product), with the same names and groupings as within the CloudWatch platform. Each CloudWatch Namespace will become its own [element](https://help.netuitive.com/Content/Inventory/Elements/elements.htm), with all of its corresponding metrics. Any new metrics added to the Namespace will appear as a part of that element in Metricly.

[![metricly-custom-cloudwatch-elements1](/wp-content/uploads/2017/07/Netuitive-Custom-CloudWatch-Elements1-1024x297.png)](/wp-content/uploads/2017/07/Netuitive-Custom-CloudWatch-Elements1.png)

Custom CloudWatch elements appear in the [Inventory Explorer](https://help.netuitive.com/Content/Inventory/inventory_explorer.htm) just as any other element would, and the corresponding metrics appear in the Metric Explorer. As with all of our metrics, Metricly [learns the normal behavior](/product/anomaly-detection) of custom CloudWatch metrics and creates bands of normalcy to help identify true anomalies.

[![Custom CloudWatch Metrics: Anomaly Detection](/wp-content/uploads/2017/07/Pasted-image-at-2017_01_11-02_40-PM-1024x348.png)](/wp-content/uploads/2017/07/Pasted-image-at-2017_01_11-02_40-PM.png)

Alerting is also available for custom CloudWatch metrics via Metricly's custom policy feature -- and [multi-criteria policy creation](/reduce-alert-multi-criteria-policies) even offers alerting based on more than one custom CloudWatch metric. If you're using custom metrics in an e-commerce setting, for instance, a policy may compare number of payment failures for transactions with performance metrics for the payment processing server. This could help determine if a server issue is causing transaction failure, or if another factor is at fault.

* * * * *

*If you'd like to see more features like these, sign up for our weekly demo, or add your own CloudWatch metrics today with our 21-day, no-obligation free trial.*
