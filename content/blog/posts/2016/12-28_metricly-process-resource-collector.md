---
author: "Casey Rogers"
date: "2017-12-28"
title: "Getting Started with Metricly Process Resource Collector"
description: "Metricly’s Process Resource Collector monitors resource statistics on individual processes (determining which processes are using the most resources)."
category: "DevOps"
url: "/metricly-process-resource-collector/"
layout: "single"
---
Although most Linux distributions ship with some basic monitoring tools, they rarely offer in-depth solutions that can tell you exactly which processes are using which amounts of resources. [Netuitive's](https://www.metricly.com/product) Process Resource Collector comes in handy for acquiring this information. It lets you monitor resource statistics on individual processes.

This article demonstrates how to get started with the Process Resource Collector.

Installation and configuration of Netuitive Process Resource Collector
----------------------------------------------------------------------

For the purpose of this article, I will assume that you have a base-build CentOS 7 x64 server which is fully up-to-date. You should run all commands as root.

I also assume you are already [signed up](https://www.metricly.com/signup) with Netuitive.

With those prerequisites out of the way, the first thing we need to do is log in to the Netuitive control panel, go to the "[Integrations](https://www.metricly.com/integrations)" tab, and select Linux. Netuitive will then display a command for you to run on your Linux box, similar to the one below:

> # sudo N_APIKEY=***REDACTED*** bash -c "$(curl -Ls http://repos.app.netuitive.com/linux.sh)"

Run this command on your server in the CLI. Once it has finished, your server will have the Netuitive agent installed and configured, and you should soon see it appear under the "Inventory" tab in your control panel.

When you see the server appear here, you can go ahead and configure the monitoring of individual processes.

**Configure monitoring of an individual process**

For this part, the first thing to do is to go to the directory where the configuration files are stored. By default, this is located in "/opt/netuitive-agent/conf/collectors".

> # cd /opt/netuitive-agent/conf/collectors

Next, edit the "ProcessResourcesCollector.conf" file by changing the enabled setting to True. You will also see in this file that there is an example provided that shows how to configure processes to monitor here. "Example_process_name" identifies the process you wish to monitor. In our case this is httpd. ".*sample_regex.*" is the regex that will be used to capture the process. In our case, this will be "^httpd" in order to catch anything starting with httpd.

Here is an example of what the completed configuration file should look like:

> enabled = True
>
> [process]
>
> [[httpd]]
>
> name = "^httpd"
>
> [[diamond]]
>
> selfmon=True

With this in place, you can go ahead and restart the Netuitive Linux agent so that the changes take effect, using the following command:

> # systemctl restart netuitive-agent

Once the agent restarts, you can view the stats it is collecting by going to the "[Metrics](https://help.netuitive.com/Content/Metrics/metrics_page.htm)" tab in the Netuitive control panel and filtering for process stats. This can be done by clicking the "Metrics" dropdown next to search, and configuring a filter similar to the screenshot below.

[![Netuitive Process Resource Collector - Configure Filter](https://www.metricly.com/wp-content/uploads/2017/07/Process-Resource-Collector-Configure-Filter-1024x512.png)](https://www.metricly.com/wp-content/uploads/2017/07/Process-Resource-Collector-Configure-Filter.png)

It's as simple as that! You have now configured a simple process to be monitored. Keep in mind that it may take a few minutes to start seeing statistics appear in the dashboard from the newly monitored process.

You can configure a few more advanced options for process monitoring if desired. For details, visit the [Netuitive documentation](https://help.netuitive.com/Content/Datasources/Netuitive/process_resources_collector.htm).

Final Thoughts
--------------

Adequate monitoring is essential for both performance monitoring and capacity planning. In my operational role, I often find that although a server has been configured for basic monitoring, more advanced features are not possible using the tools installed on the server (such as monitoring open files or collecting detailed information on individual processes).

As you learned from this post, however, Netuitive makes it incredibly easy to configure this type of monitoring in order to monitor any application on your server on a per-process basis.
