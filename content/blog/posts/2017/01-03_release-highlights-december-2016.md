---

date: "2017-01-03"
title: "December 2016 Release Highlights"
description: "Our December 2016 release highlights include Microsoft Azure monitoring, updated Chef, Salt, & Ansible integrations, & an Idle EC2 Daily Report card."
category: "Product Updates"
url: "/release-highlights-december-2016/"
layout: "single"
---

As the year comes to a close and most begin to think about New Year's resolutions, Netuitive buckled down and released several new features!

Netuitive's December 2016 release highlights include Microsoft Azure monitoring; updated Chef, Salt, and Ansible integrations; and the Idle EC2 Daily Report card. Read more...

Microsoft Azure Monitoring
--------------------------

[![December 2016 Release Highlights: Azure Integration](/wp-content/uploads/2017/07/dec_rnh_azure.png)](/wp-content/uploads/2017/07/dec_rnh_azure.png)

We intend to provide the same breadth (and depth) of our performance and capacity monitoring and analytics for the various Microsoft Azure services. We have launched our Azure integration with Quick Start [monitoring packages](/aws-monitoring-best-practices-using-pre-configured-dashboards) for Azure Virtual Machines and Azure Application Gateways which take a few minutes to activate. We're planning to roll out even more support for varying Azure services in the coming months, so stay tuned!

To read more about our Azure integration, check out our [blog](/introducing-microsoft-azure-integration) and the [help docs](https://help.netuitive.com/Content/Datasources/Netuitive/microsoft_azure.htm).

Updated Chef, Salt, and Ansible Integrations
--------------------------------------------

[![December 2016 Release Highlights: Ansible, Chef, SaltStack](/wp-content/uploads/2017/07/dec_rnh_chef-salt-ans.png)](/wp-content/uploads/2017/07/dec_rnh_chef-salt-ans.png)

Our developers and user community have created a [Chef](https://www.chef.io/chef/) cookbook, a [Salt](https://saltstack.com/) pillar, and an [Ansible](https://www.ansible.com/) playbook, which are all available on our [Github Community page](https://github.com/Netuitive/Netuitive_PHP_Client). You can now install, update and configure our Linux agent across your entire infrastructure environment as part of your standard configuration management processes. Help documentation and in-app integration cards are available for each technology so you can follow the instructions to get you started.

Be sure to check out Netuitive's [Github Community page](https://github.com/Netuitive/Netuitive_PHP_Client) to see the readmes and the source code; don't be afraid to reach out and contribute either!

Detailed Collection Status for the Inventory Explorer
-----------------------------------------------------

[![December 2016 Release Highlights: Inventory Collector](/wp-content/uploads/2017/07/dec_rnh_inv-1024x486.png)](/wp-content/uploads/2017/07/dec_rnh_inv.png)

Previously, it took several steps to see how many metrics were actually being collected for the elements in your environment. A new Data Collection column is available by default in the Inventory Explorer and it displays the percent of metrics collected for each element in your environment, so now you'll be able to know how many metrics have been collected at a quick glance. You also will find a new Collectors column, which displays the name of the collector(s) configured for your element.

Idle EC2 Daily Report Card (beta)
---------------------------------

![](/wp-content/uploads/2017/07/dailyreportedited.png)

In our continued efforts to increase cost savings in your environment, we introduced a new card in our daily report: Idle EC2. This card will show you any EC2s in your environment that were idle in the last day, allowing you to quickly pinpoint wasteful spending in your environment.

Combined with our [EC2 Recommendation Report](/ec2-cost-analysis-recommendations), you'll be able to maximize the efficiency of your environment while cutting down your monthly bill. To activate this feature, you must enable the daily report from your Account Menu. You'll start seeing the Idle EC2 card as early as the following day depending on when you activate.
