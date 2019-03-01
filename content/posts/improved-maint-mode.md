+++
author = "Lawrence Lane"
date = "2018-09-17T13:44:00+00:00"
title = "Improved Maintenance Mode"
tags = ["Product Updates"]
#url = "/improved-maint-mode/"
+++

In the past, users had to manually end maintenance mode for elements in their [inventory](https://www.metricly.com/support/inventory). Now, you can set a maintenance duration that expires on its own! This means you won’t have to worry about remembering to re-activate your element monitoring. It also saves you quite a few clicks in the UI.

**Check it out:**

![maint-img](https://www.metricly.com/wp-content/uploads/2018/09/blog-maint-mode--768x263.png)


**Things to Remember About Maintenance Mode:**

- Checks and metrics sent by elements in maintenance mode are not evaluated for the attached policies and alerts.
- Behavioral learning on checks and metrics in maintenance mode are suspended to protect the integrity of their expected baseline behaviors.

<br>
**Metricly’s CLI Supports Setting Maintenance Durations**

[The latest version of our CLI](https://github.com/metricly/metricly-cli/releases/latest) also supports setting maintenance durations. Don’t have the CLI? Installation is easy, just [download the binary related to your OS](https://github.com/metricly/metricly-cli/releases/latest) and follow the steps on our [github page](https://github.com/metricly/metricly-cli#installation).
