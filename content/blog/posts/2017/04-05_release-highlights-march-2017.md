---

date: "2017-04-05"
title: "Metricly Release Highlights – March 2017"
description: "Our March 2017 releases include beta EC2 Cost Report features, deployment of our platform in a new AWS region, & Metricly API / Dropwizard integration."
category: "Product Update"
url: "/release-highlights-march-2017/"
layout: "single"
---

As members of the DevOps community, we know that luck has no place in saving your environment from disaster. With these fresh new features, you won't need luck anymore. Metricly's March 2017 release highlights include beta [EC2 Cost Report](/ec2-cost-analysis-recommendations) features, deployment of our application platform in a new AWS region, and Metricly API / Dropwizard [integration](https://docs.metricly.com/integrations/).

Beta EC2 Cost Report Features
-----------------------------

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/mar-rnh-ec2-cost.png)

Our EC2 Cost Report is one of our most exciting and useful reports, allowing you to look at the cost of your EC2s week over week. Our research team has been hard at work improving the report even further, with support for daily, weekly, and monthly rollups being the hallmark of this update. You can now view how much your EC2s cost each day, month, previous month, latest 7 days, and latest 30 days. New report views and filters are available within each of the new rollups. You can also roll-up data by attributes (e.g, the region or Availability Zone that hosts the EC2). Our popular reports that roll up cost and capacity utilization by EC2 type and tag are still supported. Check out the [help documentation](https://help.netuitive.com/Content/Reports/multi_week_ec2_cost_report.htm) for more information.

Presence in New AWS Region
--------------------------

Metricly has deployed its SaaS application platform in a new region. This allows you to have data collection with lower latency if you are based in Europe, and mostly importantly you can now keep the data that we collect from your European applications hosted on systems physically located in the European Union, which is important for some companies with strict compliance rules. No change in setup or settings is required when you activate your AWS integration; Metricly does all the heavy lifting, so you can configure and access your Metricly service in the same way as before. Here's the full list of regions we're currently compatible with from our US and European regions:

-   us-east-1 (US East -- Northern Virginia)
-   us-east-2 (US East -- Ohio)
-   us-west-1 (US West -- Northern California)
-   ca-central-1 (Central Canada)
-   ap-south-1 (Asia Pacific -- Mumbai)
-   ap-northeast-1 (Asia Pacific -- Tokyo)
-   ap-northeast-2 (Asia Pacific -- Seoul)
-   ap-southeast-1 (Asia Pacific -- Singapore)
-   ap-southeast-2 (Asia Pacific -- Sydney)
-   eu-central-1 (EU -- Frankfurt)
-   eu-west-1 (EU -- Ireland)
-   eu-west-2 (EU -- London)
-   sa-east-1 (South America -- São Paulo)

Metricly API and Dropwizard Integration
----------------------------------------

![March 2017: Dropwizard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/mar-rnh-dwapi.png)

Last month, we discussed our new Dropwizard integration. Our developers have done some tweaking to the initial integration, so now you'll be able to send your data directly to our API (and bypass the need to use a StatsD server) or use the native StatsD server built into our Linux agent. This is particularly useful if you are already familiar with Dropwizard and want to start sending data to us right away without the need for any additional setup. The API / Dropwizard integration also offers some additional customization options, including choosing your element name, API host, and element type. Check out the updated [Dropwizard documentation](https://help.netuitive.com/Content/Integrations/dropwizard.htm) for more information.
