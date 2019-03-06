---
author: "Zachary Flower"
date: "2017-08-07"
title: "Monitor MongoDB with Metricly"
description: "Getting command-line metrics about a running MongoDB instance is valuable, but it isn't practical in production. See how to implement better monitoring!"
category: "DevOps"
url: "/monitor-mongodb/"
layout: "single"
---
Launched in 2009, MongoDB is an open-source, document-oriented database that has become one of the most popular database engines in use today. It provides ad hoc queries, indexing, and real-time aggregation. MongoDB is a powerful solution for applications that require more flexibility than traditional relational databases can provide. Considered a NoSQL database due to its JSON-like document-based structure, MongoDB is often used to efficiently manage datasets that do not adhere to a strict structure.

Putting the "No" in NoSQL
-------------------------

Before we dig more into how MongoDB works, let's get some definitions out of the way. If you're coming from the relational database world (MySQL, SQL Server, PostgreSQL), then you might not be very familiar with the term "NoSQL." To put it simply, a NoSQL database uses a data storage schema that is modeled differently than its tabular cousins.

In other words, relational databases look like tables; NoSQL databases do not. Because MongoDB is a document-oriented database, every record within the database does not have to adhere to a strict row/column layout. This is also in contrast to key-value databases, such as Redis, which work exactly as their name describes---each record is a unique key-value pair.

The When and Why of MongoDB
---------------------------

With all that in mind, when and why should you use MongoDB over a more traditional relational database? While there's no hard rule to making this decision, there are a few best practices that can help guide it. The most obvious reason to use MongoDB over something like MySQL is the need to accommodate an unstable data schema. As we touched on above, MongoDB is a NoSQL database, which means that it excels with unstructured data.

Beyond simply being able to deal with "dirty" data better than a relational database, MongoDB is also a great solution for decidedly *large* datasets. MongoDB is very write-friendly, which means you can push a lot of data into it very quickly, and has mechanisms in place for scaling that data much more efficiently than in MySQL.

Behind the Scenes
-----------------

As with all things, understanding the ins-and-outs of MongoDB can be an invaluable step towards setting up an [effective monitoring solution](/product). So...How exactly does it work?

To steal a little bit from the [official website](https://www.mongodb.com/mongodb-architecture), MongoDB stores JSON-like documents in a binary format called BSON (literally "Binary JSON"). Similar to how MySQL uses tables to collect like datasets together, MongoDB uses collections; the big difference is that the unstructured nature of MongoDB allows for data that is typically separated into multiple tables to be grouped into one individual record. This nearly eliminates the need to JOIN tables, increases performance, and reduces reads to single operations.

After documents have been stored into collections, retrieving them can be accomplished through some traditional (and less traditional) methods. While MongoDB can be queried in the same way a relational database can be queried, through standard key-value lookups, range queries, aggregations, and JOINs, what makes it really stand out are the geospatial and MapReduce query methods. Thanks to MongoDB's support for latitude and longitude coordinates, results can be queried based on proximity, and its MapReduce functionality allows for complex data processing on the result set before it is even delivered.

MongoDB Statistics, Just-in-Time
--------------------------------

Before we get into how to establish effective MongoDB monitoring in a production environment, let's first look at how to gather MongoDB statistics from the command line. At a high level, there are two commands that can be used to gather statistics about a running MongoDB server: mongostat and mongotop.

At its core, mongostat aggregates the number of database operations by type on the current server. All insert, update, delete, and read queries are counted and returned to give an overview of the load distribution of a server. Here's an example of what mongostat looks like:

![MongoDB Monitoring: mongostat](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/Mongostat-1024x38.png)

While the data above can look confusing at first, take note of the column names, and they should start to make sense. Insert, query, update, delete... These are all operations that can be run on the database are tracked.

On the flip side, while mongostat can be used to view aggregate statistics, mongotop can be used to view *current* statistics across collections. Rather than aggregating the number of operations run on the database, mongotop instead tracks the read/write performance of the database and reports it every few seconds. Here's a quick example of what this looks like:

![MongoDB Monitoring: Mongotop](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/Mongotop.png)

Monitoring MongoDB in Production
--------------------------------

While getting command-line statistics about a running MongoDB instance can be valuable, it isn't very practical in a production environment. To better facilitate production MongoDB monitoring, it is best to use an application monitoring service like Metricly to not only keep track of current data, but also aggregate and track it historically to help identify trends.

Before we can start monitoring a MongoDB instance in Metricly, however, we must first install the Metricly Linux agent. This is a common theme across [Metricly integrations](https://docs.metricly.com/integrations/), as it allows you to very quickly and easily enable and disable metrics monitoring for a number of services within an individual server without very much overhead.

To accomplish this, head on over to the [Integrations page](https://docs.metricly.com/integrations/) in your Metricly dashboard and follow the instructions for setting up the Linux integration. Once you've done that, enabling MongoDB monitoring is a snap. To do this, open up the Metricly MongoDB Collector Configuration file in your favorite editor (found at /opt/netuitive-agent/conf/collectors/MongoDBCollector.conf), change the enabled value from False to True, and restart the Metricly agent.

After about five minutes, you should start seeing data trickle into your Metricly account.

![MongoDB Monitoring: MongoDB metrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/MongoDB-metrics-1024x964.png)

At first glance, the [data collected by Metricly's](/june-2017-release-highlights) MongoDB integration can be overwhelming. Clocking in at nearly 40 metrics, it can be tough to decide what stats to focus on, and what stats to ignore. At a high level, the metrics that are often most important to focus on are the number of connections available compared to the number of current connections, as this is an indicator of the current load on your server.

Additionally, keeping an eye on the number of page faults can be a good way to determine if there is enough physical memory on the server. Too many page faults might indicate too little memory, although it is important to note that page faults can also occur while accessing large datasets or scanning an entire collection.

Beyond page faults and number of connections, locking metrics can also be used to diagnose poor performance. If the globalLock.totalTime value is high compared to the uptime of the server, this means that the database has existed in a lock state for a significant amount of time. Additionally, the globalLock.currentqueue.total metric can help identify possible concurrency issues if it is consistently high.

Notify, Notify, Notify
----------------------

While there are a number of different MongoDB metrics that can be tracked, being notified of any of the issues mentioned above is one of the most important aspects of application monitoring. It's not enough to simply keep an eye on the graphs -- you have to also take steps to stay on top of issues as they arise (or sooner).

With Metricly, any of the metrics above can be monitored, and your team can be notified if any of them matches certain predefined conditions. As an example, let's say that we wanted to send an alert whenever there are more than 100 page faults over the course of five minutes. To accomplish this, all that would need to be done is to create a new policy within Metricly that monitors the mongo.extra_info.page_faults metric, and compares it to a [static threshold](/resources/whitepaper-static-thresholds) of more than 100.

![MongoDB Monitoring: MongoDBPolicy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/MongoDBPolicy.png)

When these conditions are met, an event will be created in the Metricly Events dashboard. Additionally, you can notify your team via a number of different methods in order to ensure transparency into the health of your application across your organization. These notifications can be configured within the Notifications tab of the New Policy panel, allowing you to [tie specific notifications to different policies](/policy-page-upgrades).

![MongoDB Monitoring: MongoDBNotification](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/MongoDBNotification.png)

Easy as Pie
-----------

There is a lot of information to sift through when it comes to MongoDB monitoring, but if you'd rather just hook it up, press "go," and tune it later then Metricly comes with some nifty MongoDB stuff right out of the gate. For starters, a high-level overview of the health of your MongoDB instance can be found under the MongoDB [Summary Dashboard](/monitoring-dashboard-widget-layouts).

![MongoDB Monitoring: MongoDBDashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/MongoDBDashboard-1024x593.png)

Additionally, a handful of useful policies can be found as well. While they aren't all-encompassing, they cover the most common use cases you will need in a typical environment. It is important to note that these policies are enabled by default, which means that you will start receiving notifications on any of your default channels almost immediately.

![MongoDB Monitoring: MongoDBListofPolicies](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/08/MongoDBListofPolicies.png)

Final Thoughts
--------------

MongoDB is a powerful NoSQL database, but as with all valuable platforms, transparency is key. No system is perfect, and as your application scales, so do your problems. By implementing a clearly defined [monitoring and alerting protocol](/alert-noise-blog), you can ensure that you and your team are always up-to-date on issues *as they happen*, rather than playing catch-up.

For more information on the inner workings of MongoDB and how to track down and diagnose specific issues, I highly recommend heading on over to their official documentation and taking it all in. There is a lot going on under the hood, and the more you understand about it, the more likely you will be able to solve problems effectively and efficiently.

* * * * *

Start monitoring your MongoDB databases today -- sign up for [Metricly's 21-day, no-obligation free trial](/signup).
