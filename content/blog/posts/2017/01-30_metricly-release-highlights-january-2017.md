---

date: "2017-01-30"
title: "Metricly Release Highlights – January 2017"
description: "Metricly’s January 2017 release highlights include a Riemann integration, support for custom AWS metrics, & the release of the EC2 Recommendations Report."
category: "Product Updates"
url: "/metricly-release-highlights-january-2017/"
layout: "single"
---

After a nice holiday break, we're ready to get back into the swing of things. And with a new year comes resolutions, and we're resolving to serve up some great new features.

Metricly's January 2017 release highlights include a Riemann integration, support for custom AWS metrics, and the official release of the EC2 Recommendations Report. Read more...

Riemann Integration
-------------------

[![](/wp-content/uploads/2017/07/rnh_riemann.png)](/wp-content/uploads/2017/07/rnh_riemann.png)

In an effort to help consolidate your environment, Metricly now offers an integration with [Riemann](http://riemann.io/). Riemann aggregates events from your environment and can now be easily configured to forward the certain event streams to Metricly's API. This allows you to see key events from your environment alongside performance, capacity, and cost data in a single tool.

Setup is simple: grab the [Metricly Riemann library](https://github.com/riemann/riemann/blob/master/src/riemann/netuitive.clj) from Github and an API key from the Riemann integration page in Metricly; from there it's plug and play.

Check out the [help documentation](https://help.netuitive.com/Content/Integrations/riemann.htm) for more information.

Custom AWS Metrics Support
--------------------------

[![January 2017 Release Highlights: AWS Custom CloudWatch Integration](/wp-content/uploads/2017/07/rnh_custom_cloudwatch.png)](/wp-content/uploads/2017/07/rnh_custom_cloudwatch.png)

If you are already sending custom metrics into AWS CloudWatch, you can now easily [ingest them in Metricly](/aws-cloudwatch-metrics-integration/) for further analysis via our AWS integration. You can simply check a box on the AWS integration configuration page to include all of the custom metrics that you are collecting inside CloudWatch, alongside other metrics that we collect from various AWS services such as EC2, ELB, RDS, etc. Additional settings allow you to filter the custom metrics coming in using regex on the Namespace name.

You can then view the metrics in dashboard and reports and also apply our unique behavior learning and anomaly detection technology to your metrics. You can also decide to send your custom metrics directly to our API or via other integration integrations such as StatsD.

EC2 Recommendations Report General Release
------------------------------------------

[![January 2017 Release Highlights: EC2 Recommendation Report](/wp-content/uploads/2017/07/rnh_ec2_reco-1024x585.png)](/wp-content/uploads/2017/07/rnh_ec2_reco.png)

After 2 months in beta, Metricly's [EC2 Recommendations Report](https://help.netuitive.com/Content/Reports/ec2_recommendation_report.htm?Highlight=ec2%20recommendation) is now available to all users. [Recent improvements](/optimize-aws-instance-types) include:

-   Better handling of matching reserved and spot instances to their recommended instance counterparts.
-   Actual costs are now used for recommendation calculations, so the report reconciles with the EC2 Cost Report and the recommendations take your current and specific discounts into account.
-   List prices are checked and updated weekly so the recommendations automatically incorporate new instance types and prices as they are published by AWS.

If you have feedback, don't hesitate to reach out to our support team. We are continuously improving our reports and would love to incorporate your ideas.
