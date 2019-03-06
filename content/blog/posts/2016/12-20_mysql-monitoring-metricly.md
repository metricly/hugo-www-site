---
author: "Zachary Flower"
date: "2016-12-20"
title: "MySQL Database Monitoring with Metricly"
description: "To get started with Metricly for MySQL database monitoring, you need to install the Metricly agent on the server where your database is running."
category: "DevOps"
url: "/mysql-monitoring-metricly/"
layout: "single"
---

You can only compute as fast as your data can move. And if your data stops moving completely, you have a real problem. Data, in other words, is likely to be the biggest bottleneck in your software stack.

Think about it. Today, networks can transfer gigabytes in seconds. Multi-core CPUs can crunch information at blazing speeds. Data center servers have gobs of memory for storing information quickly. But if the data that all of these components are working with cannot be sent or received from your database quickly enough, the rest of the power in your infrastructure is for naught.

This is why wringing all of the performance you can out of your databases and minimizing errors is so important. To obtain that performance, you need to be able to monitor your databases continuously by collecting metrics about data throughput and errors.

Below, I explain how to use [Netuitive](/product) to monitor the performance of one type of database, MySQL, which you are very likely to be using. And even if you run a different type of database, the lessons below will still apply to you, since [Netuitive provides integrations](https://docs.metricly.com/integrations/) for all of the other major databases (including the NoSQL options) in addition to MySQL.

Getting Started
---------------

This is where Netuitive comes in. Netuitive is a full-stack [performance monitoring and analytics tool](/monitoring/) that integrates with over 65 services and tools to help keep you on top of the health of your application. While Netuitive has some incredibly useful integrations with SaaS tools like GitHub, PagerDuty, and Slack, its true power comes from its server-based monitoring integrations.

To get started with Netuitive for MySQL database monitoring, you need to install the Netuitive agent on the server where your database is running. Part of the beauty of Netuitive's monitoring solution is that installing the agent is a one-command deal. All you need is a server with root access and an API key:

> sudo N_APIKEY=*YOUR_API_KEY* bash -c "$(curl -Ls http://repos.app.netuitive.com/linux.sh)"

This command installs and runs the Netuitive Linux agent. This agent runs as a background process on your Linux server and monitors everything from CPU to disk and memory usage. After a few minutes, your Netuitive dashboard will populate with information about your server.

[![MySQL Database Monitoring with Netuitive: Linux Metrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/LinuxMetrics-1024x231.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/LinuxMetrics.png)

MySQL Database Monitoring
-------------------------

With the agent installed on the server, we can now set up the [Netuitive MySQL Collector](https://help.netuitive.com/Content/Datasources/Netuitive/my_sql.htm) in order to collect detailed information about our MySQL database.

To do this, we first need to give the Netuitive agent access to the process data. It is best practice to create a new MySQL user and grant only the permissions needed by the Netuitive agent to do its job. (Netuitive has some more detail about MySQL permissions [here](https://hlp.app.netuitive.com/Content/Datasources/Netuitive/my_sql.htm).) But for the sake of this demonstration, granting all privileges is more than enough to send some data up to Netuitive. You can do that by logging into the MySQL shell as root and running this command:

> GRANT ALL PRIVILEGES ON *.* TO '**--- USERNAME**'@'**127.0.0.1**' IDENTIFIED BY '**PASSWORD**';

Running this command in MySQL as root will grant all privileges to the defined **username** using the set **password**. Because this is a user-management setting, restarting the MySQL daemon isn't necessary, so all we have left to do is to enable the Netuitive MySQL collector.

To accomplish this, open up: /opt/netuitive-agent/conf/collectors/MySQLCollector.conf in your favorite editor and change the enabled setting to True. You'll also want to update the hosts setting with the **username** and **password** you defined in the MySQL shell command above, which will give the Netuitive agent direct access to your MySQL process. As with the NGINX step, you'll want to be sure to restart the Netuitive agent before you start seeing data in your Netuitive dashboard.

[![MySQL Database Monitoring with Netuitive: MySQL Metrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/MySQL-Metrics-1024x337.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/MySQL-Metrics.png)

Taking MySQL Database Monitoring Further
----------------------------------------

Thanks to the flexibility of the Netuitive Linux agent, monitoring new processes is often as simple as running a couple of commands. Everything from Apache to Zookeeper is supported by Netuitive, and if this is something you are considering integrating into your application monitoring system, I recommend (again) browsing through [Netuitive's Integrations](https://docs.metricly.com/integrations/) directory. Understanding what is happening in your infrastructure from the ground up is crucial to staying ahead of the curve on application development and support.
