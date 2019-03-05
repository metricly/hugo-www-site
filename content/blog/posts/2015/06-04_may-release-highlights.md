---

date: "2015-06-04"
title: "May 2015 Release Highlights"
description: "Our May releases are focused on administration & data collection, including adding multiple users per account, inventory cleanup options and more."
category: "Product Updates"
url: "/may-release-highlights/"
layout: "single"
---


The May release has new features focused on administration and data collection. This month we are highlighting adding multiple users per account, inventory cleanup options, and additional computed metrics for Diamond and collectd.

Add multiple users per account
------------------------------

[![New User (May Release)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/NewUser.jpg)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/NewUser.jpg)

You can now add your entire team to the same Netuitive account. Account admins are able to create multiple user logins designated by email address for easier access management.

The process is easy---click the New User button located at the top of the User page, input a name and email address, and a new account is created. An email will be sent to the new user with instructions on how to login. Each user account has a separate username and password connected to the email address given.

Inventory cleanup options
-------------------------

[![Delete Element (May Release)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/deleteElement.jpg)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/deleteElement.jpg)

We recognize that monitored elements aren't static: some are needed for a limited time and others phase out as projects change. Unwanted elements can now be deleted from your inventory page in three clicks. Don't worry, we've added an Oops! Check so you don't accidentally delete anything important.

Additional computed metrics for Diamond and collectd
----------------------------------------------------

[![collectD Diamond (May Release)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/collectDDiamond.jpg)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/collectDDiamond.jpg)

**Aggregated metrics** show total values rather than individual. Previously, collectd data sources only showed CPU metric values for each individual CPU on a server. The new computed metrics show a more practical value: the total CPU percentage for all the CPUs on the server.

**Group metrics** compute values for related sets of metrics. For example, collectd provides 8 performance metrics for each disk being monitored, including read and write operations per second. Group metrics provide a general way to create a new computed metric for each disk without knowing ahead of time what the disks are; for example, summing read and write operations per second to get the total IOPS.

* * * * *\
Want to see these release highlights in action?  [We offer a fully-functional, 21-day free trial of Netuitive here.](https://www.metricly.com/signup)
