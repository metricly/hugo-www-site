---
date: "2017-10-10"
title: "September 2017 Release Highlights"
description: "Metricly rolled out several new features in September, and we are incredibly excited to share them with you."
category: "Product Updates"
url: "/september-2017-release-highlights/"
layout: "single"
---

September was another big month for Metricly as we worked on new features and capabilities to help [take your monitoring to the next level](https://www.metricly.com/evaluate-monitoring-strategy)! Not yet setup with Metricly? [Start a free 21-day trial](https://www.metricly.com/signup) to see all the latest features in action!

Saved Filters Are Here
----------------------

You have used our filters to find exactly what's relevant to you for a given use case: The hosts in AWS Availability Zone "*us-east-1-b*" that have the tag "*application:database*" and where the name contains the letters "*prod*". A week later, you would like to avoid configuring the same filters as you want to quickly find out if any [alerts generated from those hosts](https://www.metricly.com/effective-monitoring-alert-rules), or graph the average wait time to access disks on those hosts.

With our newly introduced Saved Filters, you can do just that. Better yet, you can also share the saved filters with other users on your tenant account to save them some time too. Remember that you can click on a saved filter to edit its name and we plan to enhance this new feature over time. Meanwhile, we would love to hear some feedback from you once you have had a chance to play with them. You can share feedback directly with us by clicking on Help (top right menu) and clicking on Support, and choosing Feature Suggestion as Issue Type.

![Metricly Saved Filters](https://www.metricly.com/wp-content/uploads/2017/09/1-Metricly-Saved-Filters.png)*New Saved Filters in Metricly*

Control Color Scheme on Dashboard Widget
----------------------------------------

Our users came up with a cool new feature that we implemented in September, which allows you to control the color scheme in our "Multiple Metrics" widget. First let's remind you that we have added a few new features over the last three months, to constantly [improve your monitoring](https://www.metricly.com/alert-noise-blog).

-   Ability to select metrics using regular expressions for ultimate flexibility.
-   Added views for "line", "area", and "stacked".
-   New preview mode so that you can see what will be displayed while you are still configuring the widget.

On the heels of these changes, two use cases emerged. First, users would like to see the same metrics for different elements or hosts across two or more side-by-side widgets. In this case, they would like the colors of the metrics (ex. [CPU utilization](https://www.metricly.com/subtleties-ec2-cpu-utilization)) to be the same across all widgets. Another use case is to see the same metric (ex. Memory utilization) for multiple hosts on the same widget, in which case, it's preferable to have the same metric with different color to distinguish them from one another. To support both uses, we have added a toggle that does just that (shown in picture below).

![Metricly Graphing Metrics](https://www.metricly.com/wp-content/uploads/2017/09/2-Metricly-Graphing-Metrics.png)*New Metric Color Toggle*

Updated Layout of "Element Details" Dashboard
---------------------------------------------

When you click on the name of an element on our product's [Inventory Page](http://public.metricly.com/#/inventory), a slider opens to display a dashboard of summarized information (see screen shot below). Next time you click, you will notice that our dashboard's layout is a little different from before. The updated layout provides improvements in a few different ways:

-   There is now more room for the meta-data, alerts and events to be displayed. Even though you can always hover to see the full text related to a meta-data field, the extra space provided in this new layout makes it easier to read longer tag values or element names.
-   With the extra space, it gets easier to type in the search fields to look for a specific meta-data.
-   The widgets displaying the key performance indicators (KPI) are better grouped and organized for a quick glance. The top section of the slider still displays all alerting policies that are applied to the specific element, and also any relationship (discovered or configured) between the selected element and other elements (ex. relationships between ELB, ASG, EC2, EBS, Servers, etc.). Remember that a provided link lets you navigate to the Metrics page from the Element Details dashboard to see all metrics associated with the selected element.

![Updated Element Details Dashboard](https://www.metricly.com/wp-content/uploads/2017/09/3-Updated-Element-Details-Dashboard.png)*Updated "Element Details" Dashboard*
