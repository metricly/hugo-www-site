---

date: "2015-02-05"
title: "How To Add Collectd Metrics To Metricly in 5 Minutes Or Less"
description: "Adding your Collectd metrics to Metricly’s analytics enables a much richer set of metrics for your performance monitoring."
category: "DevOps"
url: "/add-collectd-metrics-metricly-cloud-5-minutes/"
layout: "single"
---

Adding your [Collectd](https://collectd.org/) metrics to Metricly's analytics enables a much richer set of metrics for your performance monitoring. To activate a collectd data source in Metricly Cloud, you only need to add a few lines to your existing configuration file. Our video walkthrough shows the simple process to setup and have data populate in 5 minutes.\
In our video example, you need to have collectd installed and running on a Unix machine. If you don't already have it running, this one-time setup can take an additional 5-10 minutes.  You can find instructions [here](https://collectd.org/wiki/index.php/First_steps).

To setup a collectd data source in Metricly, there are 5 simple steps:

1.  Create a new collectd data source and type a name.
2.  Click Generate to generate a new API key.
3.  In the following code, replace {customer API key} with your new API key.

    > 7 lines

1.

2.  Edit your collectd.config file to include the new code
3.  Restart collectd to being monitoring your data with Metricly

Metricly's API is ready to receive metrics directly from the collectd http_write plugin.  You should see data populate in about 5 minutes.

Currently, Metricly enables you to ingest data from AWS CloudWatch, Diamond, StatsD, and collectd via standardized integrations that take only minutes to setup.  These integrations allow you to collect metrics from your entire stack. We also allow you to push your custom data into our REST API by following our format convention.

On a weekly basis, our Metricly engineering team is adding new data sources.  [Visit our integration page to learn about our latest additions](/integrations).

* * * * *

Want to see Metricly in action with your own data?  [We offer a fully functional, free 21-day trial](/signup "Sign Up for A Free Trial") -- just sign up and add Collectd as a data source.
