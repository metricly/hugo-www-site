---
author: "Zachary Flower"
date: "2017-08-01"
title: "An Introduction to NGINX Monitoring"
description: "Monitoring the health of your NGINX server, especially during complicated deployments, is key to having a successful, healthy application. Read on for tips!"
category: "DevOps"
url: "/intro-nginx-monitoring/"
layout: "single"
---
NGINX is an [open source web server](https://www.nginx.com/) that has steadily increased in market share over the past several years. It is now one of the most popular web server platforms out there, giving Apache HTTPd and IIS a serious run for their money.

This means there is a good chance that you'll find yourself working with an NGINX instance, if you haven't already. In this article, I explain [how to monitor NGINX](/nginx-monitoring-basics) in order to keep it running as efficiently as possible.

What is NGINX?
--------------

If you had any experience with web development in the early-to-mid-2000s, then the LAMP stack (specifically the "A" part of it) should be very familiar to you. Apache has long been the default solution for most web applications, shipping out-of-the-box with many Linux distributions---but just because it is common doesn't mean it is the best. NGINX, a popular alternative to Apache, is a lean, and incredibly powerful HTTP server that can scale easily on minimal hardware.

While NGINX can be difficult to configure, it excels at static content, and is designed to pass off requests for dynamic content to other, more appropriate services (such as PHP-FPM). What truly sets NGINX apart from Apache in terms of scalability is the way it handles concurrent connections. By separating connections from the actual processing, a single NGINX thread can handle thousands of connections so long as the processor speed remains fast, which ensures that the memory and CPU usage remains consistent.

Interestingly, while NGINX is often used as an alternative to Apache, it can also be used as a reverse proxy, and even load balancer across multiple systems in the same way that NGINX can pass PHP requests off to PHP-FPM for processing. While NGINX's reverse proxy and load balancing use cases are out of the scope of this article, I highly recommend reading into them, as they give you the ability to do some amazing things across multiple servers with minimal impact on the end user.

A Peek Behind the Curtain
-------------------------

As mentioned above, the NGINX process model is designed for concurrency and scalability. At a very high level, NGINX is composed of two parts: a master process, and multiple worker processes. As the name implies, the master process is in charge of the worker processes, and deals with all privileged operations like reading configurations and binding ports. The worker processes, as their name also implies, do all the work. All network connections, read/write operations, and communication with other servers is handled by worker processes.

Out of the box, NGINX runs one worker process per CPU core, which makes the most efficient use of hardware resources. While worker processes are single-threaded, and run independently of one another, they can handle multiple non-blocking connections and communicate cache and session data with each other using shared memory.

To best explain how NGINX workers actually work, I'll borrow an analogy from the official website. A worker process is like a chess grandmaster playing hundreds of games simultaneously; rather than waiting for each opponent to make a move before moving onto the next game, a grandmaster makes a move and moves on immediately. This allows the grandmaster to play hundreds of games at once, without being slowed down by his opponent.

Gathering NGINX Metrics
-----------------------

So, with all that in mind, let's take a look at how to [gather information from a running NGINX server](/monitoring-nginx-metricly/). One of the easiest ways to gather stats from NGINX is the built-in NGINX status page. This page gives real-time data about a running NGINX server, providing you up-to-date information about the health of your application, and is a great way to gather simple information about the current status of your application.

To set up the NGINX status page, the first thing that must be done is to define the path where it can be accessed. To do this, open up your server's config file (generally found at /etc/nginx/sites-enabled/default) in your favorite editor, and inside the server block, add the following code:

    location /nginx_status {
      stub_status on;
      access_log off;
      allow 127.0.0.1;
      deny all;
    }

Take special note of the allow and deny directives, as this makes the status page inaccessible to every IP except the one that is explicitly allowed. In this particular case, allowing from 127.0.0.1 means that only the server that NGINX is running on can access the status page. Once that code is added, and NGINX is restarted, you can visit your website (for example, `http://example.com/nginx_status`), and get a text-based output that looks something like this:

    Active connections: 16
    server accepts handled requests
     5262 5262 10552
    Reading: 0 Writing: 6 Waiting: 10


Let's break that output down a little bit. Active connections, as the descriptor implies, are the number of currently open connections. Because a single pageview can make multiple concurrent connections to a web server, this is an indication of the number of resources that are being loaded at once, not necessarily the number of users on the site.

The third row, described by the server accepts handled requests row, indicates the number of accepted connections, the number of handled connections, and the number of handled requests. Interestingly, if you divide the number of requests by the number of handled connections, you can get the number of requests per connection, which in this case is 10552/5262, or just over two requests per connection.

Finally, reading, writing, and waiting all indicate the status of the current active connections. The number of active connections (16 in this example), should be equal to the total reading, writing, and waiting values. It is important to note that the waiting value indicates any clients that are keeping the connection alive (literally called a keepalive connection), and when this number rises too high, it can have a significant impact on performance by consuming connections for longer than is necessary.

Monitoring NGINX in Production
------------------------------

While the above information is interesting, monitoring a basic NGINX status page and parsing logfiles isn't really all that valuable in a production environment. With the potential for thousands of requests a second, it is important to establish an [effective monitoring solution](/aws-cost-tool) that can keep you informed and aware of the health of your infrastructure.

To accomplish this, let's take a look at how to monitor an NGINX server using Metricly, and dig into what statistics we can actually monitor. The first thing we need to do to set up NGINX monitoring in Metricly is to set up the Metricly Linux agent. To do this, head on over to the [Integrations page in your Metricly](https://docs.metricly.com/integrations/) account, click on the Linux Integration, and follow the installation instructions.

Next, open up the Metricly NGINX collector config file at /opt/netuitive-agent/conf/collectors/NginxCollector.conf in your favorite editor and change the enabled value from False to True.

    enabled = True
    req_host = localhost
    req_port = 80
    req_path = /nginx_status

Now, all we have to do is enable the NGINX status page as described in the previous section, restart both NGINX and the Metricly Linux agent, and metrics should start showing up in your Metricly account in about five minutes. If we take a look at our [server metrics](/server-resource-utilization-before-migration), we can see NGINX data start trickling in:

Take note that, while this is the same data that can be found in the NGINX status page, the advantage of using Metricly to monitor it is that you have access to [historic trends and alerting](/effective-monitoring-alert-rules) as well. In addition to the raw data found on the NGINX status page, the Metricly agent also calculates and delivers the number of requests per connection, and number of requests per second (seen in the last two charts above). This information can be incredibly valuable when it comes to determining how much impact an individual connection has on the server itself.

Shout It Out
------------

While viewing information on a dashboard is beneficial, the true value of a monitoring platform like Metricly is reporting and alerting. Through the use of [Metricly's Policies feature](/policy-page-upgrades), you can be immediately made aware of any issues that are happening on your server at any time. Let's say, for example, that we need to know if the number of requests per second received by NGINX is greater than 10,000. This is easily accomplished using a Metricly Policy that tracks the value of a single metric against a static threshold:

![Intro to NGINX: Single Metric Policy](/intro-nginx-monitoring/)

When this condition is met, a notification can be sent to one or more channels, allowing you and your team to be up-to-date on any potential issues as they happen. While you have to be careful to [avoid notification apathy](/alert-noise-blog), when your alerting system is properly tuned, you enable your team to more effectively and efficiently solve small problems before they become big ones.

It is important to note that more than one notification channel can be enabled, allowing you to notify team members of issues via [Slack](https://docs.metricly.com/alerts-notifications/notifications/notifications-slack/), [PagerDuty](/metricly-pagerduty-monitoring-alarms/), email, and more, with minimal configuration. This gives you the ability to communicate with your team in the most effective way possible, and even programmatically react to problems as they arise through the use of Metricly's [webhook notification method](/automate-alert-response-aws-lambda).

Final Thoughts
--------------

NGINX is one of the most powerful web servers on the market today, but power doesn't necessarily mean ease-of-use. While the basics can be easy to wrap your head around, the true power of NGINX lies in understanding exactly how it works, and what statistics are important.

Diagnosing problems after they happen might sometimes be easier, but it can have a serious impact on the performance and perception of your application. Staying on top of the health of your NGINX server, especially in more complicated deployments, is crucial to running a successful and healthy application.
