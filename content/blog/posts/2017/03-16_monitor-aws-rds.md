---
author: "Steve Tidwell"
date: "2017-03-16"
title: "How to Monitor AWS RDS"
description: "Here's how to use Metricly to monitor AWS RDS using the dashboards, metrics, and policies included in the Netuitive RDS Quick Start monitoring package."
category: "Cloud Monitoring"
url: "/monitor-aws-rds/"
layout: "single"
---

Amazon Web Services Relational Database Service ([RDS](https://aws.amazon.com/rds/)) is a managed service offering from AWS. With RDS, Amazon takes care of most of the administrative and maintenance tasks that normally make managing databases difficult and time-consuming. This allows administrators and developers to focus more of their efforts on their application rather than worrying about installing servers and software, and managing updates and replication.

RDS provides a number of features such as simple setup, automated software updates, backups, easy configuration of replication within AWS Availability Zones (AZs) and across regions, and disaster recovery if needed. A number of different database engines are supported on RDS, including MySQL, MariaDB, Oracle, Microsoft SQL Server, PostgreSQL, and Amazon's own database called Aurora.

But how do you know if your RDS installation is functioning optimally? In this article, we're going to talk about using [Netuitive](/) to monitor AWS RDS using the Netuitive [RDS Quick Start](https://github.com/netuitive-community-packages/netuitive-packages-aws-rds) package. We'll cover the setup and configuration of the Quick Start package, and also some tips to help you get the most out of Netuitive to monitor RDS.

Get Ready to Monitor AWS RDS
----------------------------

It's assumed you already have an Amazon Web Services account where you have set up RDS. If you don't have an Amazon account, you should [set one up](https://aws.amazon.com/) now in order to follow along with this tutorial.

If you're unfamiliar with RDS, it's advisable that you take some time to review the [Amazon RDS documentation](https://aws.amazon.com/rds/getting-started/) and learn a little more about how it works and the features provided. Once you've done this, configuring RDS is relatively painless and shouldn't take more than a few minutes.

Finally, you should also have a Netuitive account to configure your monitoring for RDS. Netuitive provides a [21-day free trial](/signup) to get you started. You can learn more about Netuitive by watching the [What is Netuitive](/netuitive-overview) overview video, and the [Netuitive Blog](/blog) provides helpful posts about monitoring with Netuitive.

Netuitive's Integration
-----------------------

At this point, we'll assume you have all of the prerequisites out of the way. The next step is to create a Netuitive AWS integration with which you'll monitor AWS RDS. Netuitive provides [detailed instructions](https://help.app.netuitive.com/Content/Integrations/aws.htm) for creating an AWS integration. It is recommended that you create your integration using the "Installation Via IAM Role" in the previously linked documentation.

One additional step you'll need to perform is checking **RDS** box on the *AWS Setup* page when configuring your integration, as shown below.

[![Monitor AWS RDS: Integration Setup](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDSSetup.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDSSetup.png)

RDS Quick Start Monitoring Package
----------------------------------

The Netuitive [Quick Start Package](/getting-started-netuitive-aws) will be automatically configured when you create or modify your existing integration to monitor AWS RDS. This package uses Netuitive best practices to install pre-configured analytics, event and alerting policies, dashboards and reports for monitoring RDS, and helps you to get up and running quickly with your monitoring.

Metric configurations define how metrics are collected and analyzed by Netuitive. Policies are the criteria upon which Netuitive will generate an event, while Dashboards display the monitoring information in an easy-to-use format.

You can learn more about pre-configured dashboards in the Netuitive blog post [AWS Monitoring Best Practices Using Pre-Configured Dashboards](/aws-monitoring-best-practices-using-pre-configured-dashboards).

Using the Netuitive Dashboard
-----------------------------

Once configured, the dashboard will usually take a few minutes to show up in your Netuitive account.

To view the dashboard, do the following:

1.  While logged into your account, click **Dashboards** at the top left of the screen, then **Manage Dashboards**.

2.  At the *Manage Dashboards* screen, "**Star**" the dashboards you want to appear in the Dashboards dropdown menu, as illustrated in the screenshot below.\
    [![Monitor AWS RDS: RDS Dashboard Favorites](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Dashboard-Star-1024x230.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Dashboard-Star.png)
3.  Click the **AWS RDS Summary** link to be taken to an overview of your RDS monitoring.\
    [![Monitor AWS RDS: RDS Summary Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Monitoring-Summary-1024x562.png)\
    ](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Monitoring-Summary.png)
4.  As can be seen above, data is presented in the form of *Widgets*, which come pre-configured with the Quick Start package. This page displays summary information about all of your RDS installations. Included information covers the number of RDS instances you have running, as well as aggregated metrics. Metric information for the top five elements with the [highest utilization](/monitor-aws-utilization-netuitive) will be shown. In the pre-configured dashboard, this includes *Highest IOPS Utilization*, *Highest Overall Utilization*, *Highest Throughput*, and *Highest Total IOPS*. It's worth noting that if you have less than five RDS instances running, you will only see metrics for the number you actually have configured. You will not be able to edit the widgets in the pre-configured dashboard, but it is possible to copy the dashboard and then edit the copy. The Copy option is presented when you click the blue and white pencil icon to the left of the widgets.[![Monitor AWS RDS: RDS Metrics 1](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Metrics-1024x528.png)\
    ](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Metrics.png)\
    [![Monitor AWS RDS: Metrics 2](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Metrics-2-1024x395.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Metrics-2.png)
5.  Click the **Back** button of your browser, and you will be taken back to the *AWS RDS Summary* page.

6.  From there, in the *RDS Summary Data* widget, click the instance you wish to view, but this time select **View Element Details**. You will be shown a high-level view of what was displayed on the detailed metrics page. This can be useful for quickly assessing the state of your RDS instance, and gleaning important attribute information about it.[![Monitor AWS RDS: Element Details](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Element-Details-1024x584.png)\
    ](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Element-Details.png)\
    For a deeper explanation of metrics and attributes, see the Netuitive Blog post [Understanding Netuitive Monitoring Metrics and Elements](/monitoring-metrics-elements).

7.  Clicking the **Policies** link near the at the top of the *View Element Details* will take you to policies specific to the RDS instance you are monitoring.

    [![How to Monitor AWS RDS: Policies](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-policies-1024x442.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-policies.png)
8.  Click a policy link and you will be taken to the *Edit Policy* screen for the selected policy. Notifications for that policy can be configured by clicking **Add Notification**. Fill out the fields appropriately to set up your notifications.\
    [![Hpw to Monitor AWS RDS: Notifications](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Notifications-1024x294.png)\
    ](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Notifications.png)

Monitor AWS RDS with Netuitive
------------------------------

Netuitive provides two different types of metrics to monitor AWS RDS. These are *collected metrics* and *computed metrics*.

Collected metrics are provided by the RDS instances and encompass data such as CPU, network, and disk usage. Computed metrics are calculated from the collected metrics and provide additional insight into your infrastructure and additional visibility into how your RDS instances are functioning.

You can read more about [The Benefits of Computed Metrics in Monitoring](/computed-monitoring-metrics) on the Netuitive Blog.

RDS Metrics
-----------

There are a number of RDS metrics gathered by Netuitive. Covering each one in detail is outside the scope of this post, but you can see the [complete list](https://help.netuitive.com/Content/Integrations/aws_metrics.htm) in the Netuitive documentation. For now, we're going to focus on the ones you are most likely to need to watch closely for signs of problems.

In particular, you should pay attention to the following:

-   CPU usage as indicated by *aws.rds.cpuutilization*. If the usage consistency flatlines at the top of the graph, you may need to consider an increase to a larger instance size.

-   RAM usage as indicated by *aws.rds.freeablememory*. If this consistently approaches zero, you may also need to consider an increase to a larger instance size.

-   Disk usage as indicated by *netuitive.aws.rds.diskspacepercentused*. The higher the percent of disk storage used, the less you have available for database growth and other disk related operations. In the case of *aws.rds.diskqueuedepth*, the longer the queue, the greater the latency for the database to answer calls.

-   Network IO as indicated by *aws.rds.networreceivethroughput* and *aws.rds.networktransmitthroughput*. Look for trends outside of the normal baseline, or for flatlines at the top of the graph indicating that you may have maxed out your network connection.

-   Database connections as indicated by *aws.rds.databaseconnections*. Again, trends outside the baseline, or flatlines at the top of the graph may indicate connection exhaustion.

-   IOPS and read and write latency as indicated by *aws.rds.readiops*, *aws.rds.readlatency*, *aws.rds.readthroughput*, *aws.rds.writeiops*, *aws.rds.writelatency*, *aws.rds.writethroughput*. Netuitive also provides two calculated metrics with *netuitive.aws.rds.totaliops* and *netuitive.aws.rds.iopsutilization*. As with the other metrics, if you are maxing out your IOPS, you may need to look into provisioning more IOPS to handle database load.

Netuitive helpfully calculates computed metrics based on those collected from Amazon. The computed metrics displayed in the dashboard consist of:

-   *netuitive.aws.rds.totalthroughput* is the sum of the number of bytes per second of read and write throughput in RDS.

-   *netuitive.aws.rds.totaliops* is the sum of the number of read and write IOPS per second.

-   *netuitive.aws.rds.averagereadsize* is the average number of bytes per read operation.

-   *netuitive.aws.rds.averagewritesize* is the average number of bytes per write operation.

-   *netuitive.aws.rds.connectionthroughpututilizationpercent* is the percentage of connection utilization calculated based on read and write latency, multiplied by the number of read and write IOPS, and divided by database connections.

-   *netuitive.aws.rds.diskspacepercentused* is the percentage of disk usage calculated based on allocated and free disk storage.

-   *netuitive.aws.rds.iopsutilization* is the percentage of IOPS utilization calculated based on IOPS provisioned for your RDS instance divided by the number of total IOPS.

-   *netuitive.aws.rds.overallutilization* is the percentage of overall usage of your instance calculated based on connection utilization percent, CPU utilization percent, and IOPS utilization.

As with most time-based metrics, look for trends that fall outside of your normal baseline. Sudden spikes or drops could indicate an issue with the way your application is using the database, or a problem upstream with another component in your stack. In another case, you may need to consider scaling your instance if you see consistently higher percentages in the metrics outlined above.

Amazon also provides detailed documentation on [monitoring RDS](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Monitoring.html), including each of the metrics gathered from the service, as well as [best practices](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_BestPractices.html) when operating your database instances.

Conclusion
----------

In this post, we've covered setting up Netuitive to monitor AWS RDS, explored some of the features available when using the RDS Quick Start Package, and some of the metrics you should give attention to when using RDS and Netuitive.
