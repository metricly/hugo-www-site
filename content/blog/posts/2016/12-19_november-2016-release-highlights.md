---

date: "2016-12-19"
title: "November 2016 Release Highlights"
description: "Our November 2016 release highlights include Metric & Inventory Explorer improvements, EC2 Recommendation Report, & Amazon Kinesis Monitoring updates."
category: "Product Updates"
url: "/november-2016-release-highlights/"
layout: "single"
---


To avoid a deep post-turkey hibernation, Netuitive dug its heels in to finish November strong with some nice UI and Quick Start monitoring package improvements as well as an innovative new feature. Netuitive's November 2016 release highlights include Metric and Inventory Explorer improvements, [EC2 Recommendation Report Beta](/ec2-cost-analysis-recommendations), and Amazon Kinesis Monitoring Package updates. Read more:

Metric Explorer Improvements
----------------------------

[![November 2016 Releases: Metric Explorer](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/metric_ex.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/metric_ex.png)

We made major improvements to our Metric Explorer page in November which have proven to be very popular:

-   We have made it more flexible to select any metric(s) without requiring you to select an element first, e.g., a host or a JVM.
-   We now allow you to group metrics by any tag or attribute on the page.
-   We have improved performance of the queries, which makes your search results appear quicker, leading to a snappier page overall.

Inventory Explorer Improvements
-------------------------------

[![November 2016 Releases: Inventory Explorer](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/inv_ex.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/inv_ex.png)

Being a typical landing page in our product, we decided to improve the Inventory Explorer's use and functionality. Improvements include:

-   A slider displays the Element Details page after clicking an element in lieu of navigating away from the page.
-   Search filters moved and were updated to be consistent with other filters in the product
-   The Add/Remove Columns option was moved to be easier to use.
-   When you select one or more elements, an Actions Menu appears at the top of the page. allowing you to view metrics from, add / delete tags on, start / stop maintenance mode for, or delete the selected elements.

EC2 Recommendation Report Beta
------------------------------

[![November 2016 Releases: EC2 Recommendation Report (Beta)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ec2_reco_report.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ec2_reco_report.png)

The EC2 Recommendation Report is designed to help you reduce EC2 instance running costs by suggesting alternative instance types that may provide a similar level of service at a lower cost. Using characteristics like memory, VCPUs, and hourly instance running costs, the report estimates the memory and number of VCPUs that are actually needed. The graph on the page displays the current state of your element and connects it to the projected state of the instance, allowing you to visualize how large of an improvement you would achieve by following the recommendations.

For additional information about the EC2 Recommendation Report, check out our [documentation](https://help.netuitive.com/Content/Reports/ec2_recommendation_report.htm).

Updated Amazon Kinesis Monitoring Package
-----------------------------------------

[![November 2016 Releases: AWS Kinesis](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/kinesis1.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/kinesis1.png)

Our Amazon Kinesis monitoring package was updated to match the full scope of Netuitive's other Quick Start packages. When you configure Netuitive's AWS integration and begin monitoring AWS Kinesis Streams, you'll now receive pre-configured collected metrics and dashboards to help visualize the performance of your streams along with Netuitive's [computed metrics](/computed-monitoring-metrics) and best practice policy templates.

Netuitive's computed metrics are calculated using collected metrics and add another layer of analytics and value to your monitoring. Our alerting policies are based on industry best practices and pre-configured to detect performance issues with your Kinesis Streams. After the package is provisioned, take a look and activate notifications to alert your team on the enabled policies.

For more information on Netuitive's Quick Start monitoring packages, visit [this blog](/aws-monitoring-best-practices/).

* * * * *

*See these features in action, within your own environment. Sign up for our [21-day, no-obligation free trial](/signup).*
