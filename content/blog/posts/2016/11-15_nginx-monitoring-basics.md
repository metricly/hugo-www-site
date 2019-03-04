---
author: "Zachary Flower"
date: "2017-11-15"
title: "NGINX Monitoring Basics"
description: "NGINX monitoring is as simple or as detailed as you need it to be, with built-in statistics tools as well as far more detailed logging."
category: "Cloud Monitoring"
url: "/nginx-monitoring-basics/"
layout: "single"
---

When building and maintaining a web application, being aware of the health of your architecture is critical. While application-level monitoring, like exception logging and browser analytics, is incredibly important for understanding the code-level health of your product, service-level monitoring is also critical to understanding the systemic health of your infrastructure. This is doubly true when building web applications because they often rely on a set of services to run properly.

[![NGINX Monitoring: NGINX Logo](https://www.metricly.com/wp-content/uploads/2017/07/NGINXlogo.png)](https://www.metricly.com/wp-content/uploads/2017/07/NGINXlogo.png)

Databases, data stores, and caches are all important, but the most important point of potential failure in a web application is the web server itself. [NGINX](https://www.nginx.com/) is one of the most popular web servers in the world (second to Apache across the entire Internet). One of its most useful features is the brevity of the statistical information made available about itself.

[Monitoring](https://www.metricly.com/product) the health of an NGINX daemon can be broken down into two categories: self-reported and inferred.

Self-Reported NGINX Monitoring
------------------------------

As a core feature, NGINX offers the ability to create a basic status page that provides a few key pieces of data. Thankfully, turning this page on is a pretty straightforward process. To do so, open up your default NGINX site config file (found in /etc/nginx/sites-enabled/) and add the following block of code to the server section.

> location /nginx_status {\
> stub_status on;\
> access_log off;\
> allow 127.0.0.1;\
> deny all;\
> }

What this piece of code does is create a locally accessible page at http://localhost/nginx_status containing some NGINX server stats.

> Active connections: 10\
> server accepts handled requests\
> 7000 7000 10000\
> Reading: 0 Writing: 10 Waiting: 30

At first glance, the information on this page looks a little disorganized, but it's actually a specifically organized set of statistics. Let's break it down a bit.

**Active connections** stands for the current number of open connections. While this might sometimes stand for the number of current users, it actually counts the number of concurrent connections. Depending on the design of your application, a single user could easily spawn dozens of concurrent connections to your web server.

**Server accepts handled requests** is a block of three values: total accepted connections, total handled connections, and number of handled requests. Typically, the first two numbers will be the same, but the third is often greater than both of them. The number of handled requests per connection can be inferred from this data by dividing the third number by the second.

The final three values reference the current actions being performed by NGINX. **Reading** is the total number of requests headers NGINX is currently receiving, **writing** is the total number of responses NGINX is transmitting, and **waiting** is the number of keep-alive connections. The number of keep-alive connections is entirely dependent on the keepalive_timeout config setting, so this number can be forced to zero by zeroing out that config value.

Inferred NGINX Monitoring
-------------------------

The information reported by NGINX is only half of the monitoring puzzle. The flip side of that coin is all of the log data that is being written out by the running process. From error codes to performance metrics, a lot of information can be gleaned from the NGINX log files.

Before information can be collected from the NGINX logs, though, we need to make another update to our site config. To turn on the NGINX access log, add the following line to the same server section you added the nginx_status block to:

> access_log /var/log/nginx/access.log combined;

What this setting does is log all successful and unsuccessful page requests to the designated log file (in this case /var/log/nginx/access.log). The resulting log entries will look like this:

> 50.183.254.196 -- -- [26/Oct/2016:05:36:07 +0000] "GET / HTTP/1.1" 200 552 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"\
> 50.183.254.196 -- -- [26/Oct/2016:05:36:11 +0000] "GET /aoweifj HTTP/1.1" 404 209 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"

As you can see, both 200 and 404 responses are logged, allowing us to build a detailed report on the types of requests that are coming into the system. This is incredibly valuable in the case of hacking attempts, as it allows you to identify when and where your web server is being probed by scripts and bots.\
While this is a simplistic example, there is a lot of room for adding information by creating custom log formats. Let's say we want to log the processing time of each server request. This can be accomplished by adding a custom log format to the http block of the /etc/nginx/nginx.conf file.

To start, let's take our combined log format and add the $request_time variable to it:

> log_format extime '$remote_addr -- $remote_user [$time_local] '\
> '"$request" $status $body_bytes_sent $request_time '\
> '"$http_referer" "$http_user_agent"';

Now, all we have to do is update the access_log line and replace the combined log format with the new extime log format. If we take a look at the logs again afterwards, we can see that a new chunk has been added to each line referencing the request time (in milliseconds):

> 50.183.254.196 -- -- [26/Oct/2016:06:18:57 +0000] "GET / HTTP/1.1" 200 552 0.000 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"\
> 50.183.254.196 -- -- [26/Oct/2016:06:19:04 +0000] "GET /awoefij HTTP/1.1" 404 209 0.000 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"

[NGINX monitoring](https://www.metricly.com/monitoring-nginx-netuitive) is ultimately as simple or as detailed as you need it to be. While utilizing the built-in statistics tools might be enough for most use cases, far more detailed logging can be accommodated easily using a custom log format and NGINX's own variable index. In the end, application monitoring is about managing the overall health of your infrastructure, and understanding how and where to collect the proper data is half the battle.
