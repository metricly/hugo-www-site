---
author: "Zachary Flower"
date: "2016-11-15"
title: "Monitoring NGINX with Metricly"
description: "Metricly is a full-stack monitoring and analytics platform that integrates fully with NGINX. Here's how to begin monitoring NGINX with Metricly."
category: "Cloud Monitoring"
url: "/monitoring-nginx-metricly/"
layout: "single"
---


According to the most recent figures from [W3Techs](https://w3techs.com/technologies/cross/web_server/ranking), NGINX powers just over 30% of the websites on the Internet. That's a *lot* of websites, and thanks to the growing popularity of NGINX, that number is sure to continue increasing. Because of this popularity, it is highly likely that you are using (or are considering using) NGINX to run your own web applications. Regardless of whether it's a new or existing installation, [monitoring the health of your infrastructure](/nginx-monitoring-basics) is more important than ever.

This is where [Netuitive](/product) comes in.

Netuitive is a full-stack performance monitoring and analytics platform that integrates with just about any process or platform you are likely to use, NGINX included. The beauty of Netuitive is that setting up monitors for each integration is incredibly straightforward.

At its core, monitoring server processes with Netuitive are an extension of the core Linux agent. While the details of getting the server agent set up are outside the scope of this article, the command itself is so straightforward that it's worth mentioning. (For more details on how to set up the Linux integration, Netuitive has some [good documentation](https://help.netuitive.com/Content/Datasources/Netuitive/linux.htm) to get you started):

> sudo N_APIKEY=YOUR_API_KEY bash -c "$(curl -Ls http://repos.app.netuitive.com/linux.sh)"

Once you've set up the Linux agent, getting NGINX monitoring up and running is a snap. The first step to accomplishing this is to configure an internal NGINX status page. To do this, open up the default NGINX site config file (this is usually one of the files in /etc/nginx/sites-enabled/), and add the following block to the server section:

> location /nginx_status {\
> # turns on nginx stats #\
> stub_status on;\
> # turns off logging #\
> access_log off;\
> allow 127.0.0.1;\
> # sends rest of world to /dev/null #\
> deny all;\
> }

Basically, what this block does is create a page at http://localhost/nginx_status that is only accessible locally. If you're curious about the information this page contains, it is easily accessible by curling the URL from the command line on your server.

> root@netuitive-demo:~# curl http://localhost/nginx_status\
> Active connections: 1\
> server accepts handled requests\
> 110228 110228 23126\
> Reading: 0 Writing: 1 Waiting: 0

When configured, the Netuitive agent pushes the information on this page up to your Netuitive account, but before that happens, we need to tell the agent about NGINX first. Enabling NGINX monitoring in the Linux agent is as simple as updating one line in one file. To do this, open up the NGINX collector file (found at: **/opt/netuitive-agent/conf/collectors/NginxCollector.conf**) and change the enabled setting to True.

Because we set up NGINX according to the [Netuitive documentation](https://help.netuitive.com/Content/Datasources/Netuitive/nginx.htm), the other settings can be left alone; however, if you deviate from the default configuration, you need to be sure to tell the Linux agent where to find your NGINX status page.

It is important to note here that once everything is configured, it is crucial to restart both your NGINX and Netuitive daemons in order to actually send information up to your Netuitive account.

After a few minutes, you will start to see NGINX metrics trickle into your Netuitive dashboard. The current information shown in Netuitive will mirror the information on the status page we configured earlier, but the added benefit to Netuitive is that it will also retain the historical process statistics. This allows us to compare information server stats on an hour-by-hour to week-by-week basis.

[![Monitor NGINX with Netuitive: Stats Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/NGINX-Dashboard-1-1024x535.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/NGINX-Dashboard-1.png)

NGINX Stats

As you can see, my little demo site has some pretty low statistics, but as a demonstration I spun up a load test using loadimpact.com. Their free test sends 25 virtual users to a given URL in five  minutes, which we can see clearly and immediately on our Netuitive dashboard.

[![Monitor NGINX with Netuitive: Connection Spike](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/NGINX-Dashboard-2.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/NGINX-Dashboard-2.png)

NGINX Connection Spike

Sending your NGINX data up to Netuitive is a big part of the monitoring puzzle. What you do next is dependent on the needs of your organization. However, Netuitive itself offers [some great reporting tools](/product/dashboards-and-reports) that can be configured to alert you and your team of any critical issues.

Ultimately, the most important thing to remember is that monitoring your DevOps infrastructure isn't optional. Understanding the health of your architecture is critical to supporting the growing needs of your application.
