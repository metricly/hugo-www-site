---
author: "Vince Power"
date: "2016-12-09"
title: "Best Practices: MySQL Monitoring"
description: "This article provides an overview of best practices for MySQL monitoring to get a picture of overall health, and to help plan for future growth."
category: "DevOps"
url: "/best-practices-mysql-monitoring/"
layout: "single"
---


In today's data-driven world, most applications are backed by a database. A large number of those databases are powered by MySQL. To keep those databases and the applications they power running smoothly, you need to be able to [monitor them](/aws-cost-tool) effectively.

This article provides an overview of what you can monitor in MySQL in order to get a picture of overall health, and to help plan for future growth.

MySQL Monitoring at its Most Basic Level: Am I Alive?
-----------------------------------------------------

[![MySQL Monitoring: MySQL Logo](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/MySQLlogo.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/MySQLlogo.png)

It's essential to monitor whether the MySQL process is running. This may seem like common sense, but I have seen more than one deployment that had all the fancy application performance monitoring tools running, but nothing told them the database didn't start after server patching.

You could monitor whether the process is alive by checking for mysqld on your process list, since there should be only one process per instance. However, this approach is not ideal when you are working with remote servers. My preferred option is therefore to remotely connect to the database from a separate server or service to validate that the database engine is up and running.

I recommend checking with a simple command line using the -e flag so that the client will run an SQL command, then exit. Something as simple as "SELECT 1;" proves the engine is running.

    > $ mysql -e "SELECT 1;" -h192.169.0.13 test\
    > +---+\
    > | 1 |\
    > +---+\
    > | 1 |\
    > +---+

MySQL Log Files
---------------

This should be as simple as parsing mysql.log files looking for errors and exceptions---They are infrequent, but these files are always a good place to look for troubleshooting.

MySQL Global Status
-------------------

MySQL internally tracks lots of runtime statistics and raw data about how the MySQL instance is performing inside its STATUS object. You access this information by connecting to MySQL through a client and running SQL-like queries.

Here's a sampling of some of the more valuable information for tracking basic client performance.

| **What to look for** | **Why** | **Command** |
| Uptime | Low uptimes mean things were recently restarted. | SHOW GLOBAL STATUS LIKE 'Uptime'; |
| Threads Connected | Good to trend, and bad if the number is 1 or 0--- Shouldn't your app be connected? | SHOW GLOBAL STATUS LIKE 'Threads_connected'; |
| Max Connections | Good to know what your peak was. | SHOW GLOBAL STATUS LIKE 'Max_used_connections'; |
| Max Connection Time | Gives the exact date/time it reached the max | SHOW GLOBAL STATUS LIKE 'Max_used_connections_time'; |
| Failed Connections | This indicates bad connections, like a bad password. Security teams love this kind of thing. | SHOW GLOBAL STATUS LIKE 'Aborted_connects'; |

**\
**MySQL Additional Queries**
------------------------------

You can also monitor MySQL users. To see who is connected to a MySQL instance, run:

    > mysql> show full processlist;\
    > +----+------+--------------------+------+---------+------+----------+-----------------------+\
    > | Id | User | Host               | db   | Command | Time | State    | Info                  |\
    > +----+------+--------------------+------+---------+------+----------+-----------------------+\
    > |  5 | test | 192.168.0.13:60394 | test | Query   |    0 | starting | show full processlist |\
    > +----+------+--------------------+------+---------+------+----------+-----------------------+\
    > 1 row in set (0.00 sec)

In addition, it can be useful to retrieve the size of all the tables in the database you are currently using. (In other words, add the data and index columns together in order to determine the total disk space in bytes.) The query to do this is:

    > mysql> SELECT table_name,table_rows,Data_length,Index_length FROM information_schema.tables WHERE table_schema = DATABASE();\
    > +---------------------------+------------+-------------+--------------+\
    > | table_name                | table_rows | Data_length | Index_length |\
    > +---------------------------+------------+-------------+--------------+\
    > | columns_priv              |          0 |           0 |         4096 |\
    > | db                        |          3 |        1464 |         5120 |\
    > | engine_cost               |          2 |       16384 |            0 |\
    > | event                     |          0 |           0 |         2048 |\
    > ...\
    > | time_zone_transition      |          0 |       16384 |            0 |\
    > | time_zone_transition_type |          0 |       16384 |            0 |\
    > | user                      |          4 |         492 |         4096 |\
    > +---------------------------+------------+-------------+--------------+\
    > 31 rows in set (0.01 sec)

Summary
-------

The information above is enough to get started with monitoring MySQL instances to ensure they are up and running and operating smoothly. Of course, as is the case with any popular open-source product in technology today, there are a plethora of tools available to make MySQL monitoring easier or provide more detail.
