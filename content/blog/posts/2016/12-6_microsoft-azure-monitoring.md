---

date: "2016-12-06"
title: "Microsoft Azure Monitoring"
description: "Get world-class monitoring & anomaly detection in Microsoft Azure by using Metricly's integration. Learn how to quickly get started today!"
category: "DevOps"
url: "/microsoft-azure-monitoring/"
layout: "single"
---

Microsoft Azure is the second-largest cloud computing platform in the world -- and now, Azure users have access to world-class monitoring too. [Metricly](/product) is proud to announce a new integration with Azure VMs and Application Gateway.

Set Up Azure Monitoring
-----------------------

[![Metricly Azure Integration](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Azure-Integration-1024x213.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Azure-Integration.png)

Metricly's Azure integration is entirely plug-and-play: installation is configured automatically. Three steps and you're done:

1.  Prepare the integration and set up an Active Directory application in Azure.
2.  Pull the Application ID, Application Key, and Tenant ID from the application, and set permissions.
3.  Collect the Subscription ID and set the Application Role

That's it! You're now monitoring Azure. Microsoft Azure instances push monitoring data every minute by default.\
Metricly currently supports two Azure types: VMs and the Application Gateway. Throughput monitoring is available for the Application Gateway. For VMs, a full suite of memory, processor, and disk metrics are available, including read/write data and packet metrics. To see the full list of available metrics, see our Azure documentation.

Quick-Start Monitoring
----------------------

Metricly's Azure integration also comes complete with a Quick-Start monitoring package, which automatically generates pre-configured dashboards, policies, and computed metrics so you can make the most out of your Azure monitoring right away.

These configurations are based a decade+ of in-house data science focused entirely on separating the monitoring signal from the noise. Of course, you're welcome to modify settings as needed for your organization, and we invite you to contribute directly to [Metricly's community projects on GitHub.](https://github.com/netuitive-community-packages)

Anomaly Detection for Azure
---------------------------

[![azure-metrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Azure-Metrics-1024x256.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Azure-Metrics.png)

Like all of Metricly's integrations, Azure metrics appear with "contextual bands of normalcy" that conform to the behavior of your environment. Where traditional static monitoring thresholds create an "on/off" trigger that generates an alert when crossed, Metricly can also learn the normal behavior of your environment to identify anomalies, providing additional context and reducing unnecessary noise.

Metricly's [anomaly detection](/monitoring/) fuels the out-of-the-box and custom policies that keep you apprised of critical events in your Azure environment. One policy included in the Quick Start package for Azure VMs measures elevated CPU activity in situations where the activity cannot be explained by an increase in network traffic alone:

[![Azure Monitoring Policy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Policy-1024x509.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Policy.png)

To see the other policies included in the Azure Quick-Start Monitoring package, [read our documentation](https://help.netuitive.com/Content/Policies/GlobalPolicies/global_policies.htm?Highlight=azure#microsoft-azure). As always, you have the freedom to add or edit policies as well to fit your system's monitoring needs.

Finally, the Azure Quick-Start Monitoring package includes access to utilization reports that highlight over- and under-provisioned resources, to help you make informed decisions about the capacity of your environment. These reports are the final piece to a full, holistic view of your Azure environment.

* * * * *

*Ready to monitor your Azure instances with Metricly? Try our [21-day, no-obligation free trial](/signup).*
