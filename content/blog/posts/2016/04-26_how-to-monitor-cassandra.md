---

date: "2016-04-26"
title: "How to Monitor Cassandra Performance"
description: "Cassandra is Java-based and can be monitored using JMX-compliant tools, or via compatible plugin agents. Metricly can be implemented in just four steps."
category: "Cloud Monitoring"
url: "/how-to-monitor-cassandra/"
layout: "single"
---

Cassandra is a database management system that improves upon traditional master-slave databases, distributing the data across a ring or a cluster. Every node in a Cassandra cluster plays the same role and can respond to any request, meaning there is no single point of failure. Additionally, Cassandra databases are extremely scalable, since new nodes can be added without needing to build in downtime.

*If you already know how to monitor Cassandra, and you'd like to see firsthand how Metricly can be used to monitor your Cassandra cluster, [contact us](https://www.metricly.com/contact) for a custom demo, or [sign up for a free trial](https://www.metricly.com/signup).*

How do you collect Cassandra metrics?
-------------------------------------

Cassandra is Java-based and can be monitored using JMX-compliant tools, or via compatible plugin agents. Metricly can be implemented in just four steps:

Create a new Datasource in Metricly to obtain an API Key

1.  Install the Metricly Linux Agent with a single command
2.  Install Jolokia on your JVM (for remote JMX with JSON over HTTP)
3.  Set the Metricly agent configuration file to conform to your Cassandra cluster

For more detailed instruction, visit the [Metricly product documentation.](https://help.netuitive.com/Content/FrontMatter/frameless_home_page.htm)

What are the most important Cassandra metrics for monitoring?
-------------------------------------------------------------

Even with a good [performance monitoring tool](https://www.metricly.com/), it can be difficult to tell which metrics are absolutely crucial and which can be relegated to a secondary dashboard. Ignoring a key metric or focusing on the wrong data can have a serious impact on the health of your environment. Ideally, when monitoring Cassandra, you'll want to understand the following 3 aspects:

1.  How much the cluster is being used
2.  How fast and effectively nodes are able to respond to requests
3.  How often old data is being removed

How much is your cluster being used?
------------------------------------

In order to track the health of your Cassandra database, you need to know how much data you have available.

#### Key Cassandra Metric: SSTable Count

**cassandra.cfstats.keyspaces...sstable_count**

SSTable count measures, on an individual column family level, the total number of data files (SSTables.) Having too many data files can lead to read performance issues such as an increase in latency as well as excessive space usage.

Data for this metric that registers above the normal range could mean compaction tasks can't keep up with the number of SSTables being created, or it could indicate an underlying performance issue. These issues could be anything from database design errors to an excess of "tombstones" that indicate where and how deletes were replicated.

How well is your cluster responding to queries?
-----------------------------------------------

Knowing how many tables you have is great, but it doesn't tell the full story. You should also have an understanding of your cluster's latency, or time required to complete a task. Monitoring latency is crucial, as it's the best overall indicator of Cassandra performance. Knowing how many microseconds Cassandra requires to respond to requests is key to understanding usage patterns -- and to being able to adjust your nodes and clusters before performance problems take a major toll.

#### Key Cassandra Metric: Read/Write Latency and HintedHandoffs

**cassandra.cfstats.keyspaces...local_read_latency**

Read latency measures fulfillment time for read requests, beginning when the node receives a client request and ending when it responds. Read requests usually take longer than write requests -- visualize how much longer it might take you to find the answer to a question as opposed to writing an answer down, for example. Depending upon the SSTable count, certain databases may also require increased latency, but on the whole an increase in this metric can point to performance issues. The below diagram illustrates the read request process most Cassandra databases use:

[![Read Requests Diagram](https://www.metricly.com/wp-content/uploads/2016/05/ReadRequests-Diagram.png)](https://www.metricly.com/wp-content/uploads/2016/05/ReadRequests-Diagram.png)

**cassandra.cfstats.keyspaces...local_write_latency**\
Write latency, as you might have guessed, measures fulfillment time for write requests. Like read latency, write latency starts when a node receives a client write request, and ends when the node responds. Writes tend to be much faster than reads, although sufficient latency depends heavily on the individual system. Sudden changes, however, are often a sign of serious performance problems.

[![Write Requests Diagram](https://www.metricly.com/wp-content/uploads/2016/05/WriteRequestsDiagram.png)](https://www.metricly.com/wp-content/uploads/2016/05/WriteRequestsDiagram.png)

**\
cassandra.tpstas.hintedhandoff.active**\
When a node goes offline or if it can't keep up with the number of requests it's expected to handle, the other nodes in its cluster keep track of the rows that were updated while it was gone. These nodes store "hints" about the changes. After the offline node returns, the other nodes "handoff" the hints to help the node catch up. This metric measures the number of active "hinted hand off" tasks. Data for this metric that registers above the normal range indicate a performance issue (if the node just can't keep up) or outage of a remote node.

How often is data being consolidated?
-------------------------------------

Consolidating and merging data is a key piece of maintaining a healthy database. Combining SSTables limits the number of tables your system needs to consult when fulfilling read requests, decreasing latency and improving performance. Obsolete data is also marked and deleted, effectively cleaning up the tables.

#### Key Cassandra metric: Pending Compaction Tasks

**cassandra.compaction.stats.pendingtasks**\
Compaction should be run regularly, as this is the task that allows Cassandra to consolidate SSTables and remove old or outdated data. This metric measures the total number of pending compaction operations, or how many new SSTables Cassandra still needs to create, complete, and how many old ones it needs to delete. An upper deviation in this metric could indicate a performance or application issue, including iops limitations. The below diagram illustrates a usual compaction cycle. When too many tables need consolidation for the system to keep up, you may need to add more nodes to prevent a more serious issue.

[![Cassandra Compaction Diagram](https://www.metricly.com/wp-content/uploads/2016/05/Cassandra-Compaction-Diagram.png)](https://www.metricly.com/wp-content/uploads/2016/05/Cassandra-Compaction-Diagram.png)

How to monitor Cassandra performance metrics
--------------------------------------------

Monitoring Cassandra can be tricky if you have a large cluster or one that responds to a large number of queries. Graphs are helpful, but no DevOps team can keep an eye on their dashboards 24/7. Thresholds can be difficult to set and often create false alarms that waste time and resources.

Metricly makes monitoring a Cassandra cluster simple. Once setup is complete, you've got full access to Metricly's advanced analytics platform, including [anomaly detection using machine learning.](https://www.metricly.com/how-to-leverage-machine-learning-for-proactive-monitoring-alerts) Using these best practices as guidelines, Metricly makes it easy to customize Cassandra monitoring dashboards with an intuitive UI and extensive widget library.

Ready to start monitoring Cassandra? Metricly offers a [no-obligation, free trial.](https://www.metricly.com/signup)
