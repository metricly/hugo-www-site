---
author: "Jason Simpson"
date: "2016-04-13"
title: "March 2016 Release Highlights"
description: "Introducing improved Element Detail pages, a new relationship tree widget, and more! Don't miss March 2016's release highlights!"
category: "Product Updates"
url: "/march2016highlights/"
layout: "single"
---
With such a torrential development of features in March 2016, we here at [Metricly](https://www.metricly.com) feel pretty lucky to call the engineering team our own. Check out the highlights from this month's releases below:

Relationship Tree Widget
------------------------

[![Relationship Tree](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/RelationshipTree.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/RelationshipTree.jpg)

The Relationship Tree widget visualizes how elements in your environment relate to each other. Add this widget to any Metricly dashboard to see how the selected element relates to the rest of your environment. From the widget, you are able to drill down into the [element detail pages](https://help.netuitive.com/Content/Performance/Elements/element_detail_page.htm) of any elements visualized in order to get more information.

The Relationship Tree is also available from the Element Detail page on the Relationships tab. Relationships are discovered automatically without the need for any manual configuration for association between Auto-Scaling Groups, Elastic Load Balancers, AWS EC2s, OS agents installed inside the EC2s, or plugin collectors that collect additional metrics from your stack.

Metricly StatsD Server
-----------------------

[![Metricly StatsD Server](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/NetuitiveStatsDServer-1024x500.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/NetuitiveStatsDServer.jpg)

Now you can integrate time-series data generated from your custom code with the Metricly Linux agent via our Metricly StatsD server that resides on the agent which can be installed on each of your servers. Both forward and listening settings are available by default with the agent configuration file.

In order to configure, first instrument a metric (such as method call latency or count) using your preferred StatsD library. StatsD libraries are available for all major programming languages such as Python, Go, NodeJS, Java, Ruby and many others. Then run your application(s) like normal and Metricly StatsD will do the rest of the work. Metric data is flushed every 60 seconds by default to the StatsD server; the same data is then picked up every 5 minutes and aggregated into a data point by the batch analytics cycle in Metricly. The data can be used for [self-learning analysis](/product), graphing, alerting, and reporting.

Dashboard TV Mode
-----------------

[![TV mode](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/TVmode-1024x514.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/TVmode.jpg)

If you're like us, you probably have a TV near the developers who are monitoring the environment for any events or drastic changes. Our engineering team created TV Mode for your DevOps crew: you can now set any dashboard to full-screen mode. This mode can also be configured to rotate across multiple dashboards after a set period of time, so you can see all of your important dashboards across your entire application stack at-a-glance and without having to lift a finger.

New Element Detail Pages
------------------------

[![New Element Details Page](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/NewElementDetailsPage-1024x565.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/NewElementDetailsPage.jpg)

[Element Detail pages](https://help.netuitive.com/Content/Performance/Elements/element_detail_page.htm) have been updated to truly represent the most important details of your elements. On each Element Detail page you'll find four tabs:

-   **Summary**: displays a pre-configured dashboard tailor-made to the selected element type. It utilizes the widgets already available to you in the widget library to convey the key performance indices for the element type.
-   **Metrics**: displays all the metrics available for the selected element. Information included is the metric's friendly name, fully qualified name (FQN), unit, type, sparse data strategy (if defined), Datasource (where the metric/element comes from), and when the element was last updated. Click any metric to expand in-depth metric metadata and a graph of recent data (tied to the current time setting).
-   **Policies**: displays all the policies that include the selected element in the Policy's scope. This tab offers the same functionality as the Policy Explorer.
-   **Relationships**: displays all the elements related to the selected element (if there are any.) You can click a related element's name to open its respective element detail page.

* * * * *

Want to see these release highlights in action? We offer a 21-day, [free trial of Metricly.](/signup)
