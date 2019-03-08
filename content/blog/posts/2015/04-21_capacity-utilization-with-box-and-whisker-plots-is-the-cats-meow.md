---

date: "2015-04-21"
title: "Capacity Utilization With Box (And Whisker) Plots"
description: "Our Utilization Boxplot Report visualizes each of your AWS elements' utilization, making it easy to see if your environment is over- or under-provisioned."
category: "DevOps"
url: "/capacity-utilization-with-box-and-whisker-plots-is-the-cats-meow/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

Remember boxplots from middle school math class? The smell of teen angst, B.O., and cafeteria pizza in the air as you calculate upper and lower quartiles?

It's time to see the boxplot (or "box and whisker plot," as you might remember it) in a new light. Metricly's new **Utilization Boxplot Report** visualizes the percent utilization of each of your AWS elements, making it easy to identify where your environment is over- or under-provisioned.

Within the Utilization Boxplot Report, you can customize your view by setting the max number of elements  you want to see, sorting by any one of the values in the boxplots (minimum, lower quartile, median, upper quartile, or maximum), and placing the boxplots in ascending or descending order.  Here is what the Utilization Boxplot Report looks like in Metricly:

[![Box Plot Report (Capacity Utilization)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/utilizationboxplotreport.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/utilizationboxplotreport.png)

For those of you who have successfully blocked the awkward middle school years from your memory, here's a quick rundown of the parts to a standard boxplot.

[![Box Plot Rundown (Capacity Utilization)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/box-plot-rundown.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/box-plot-rundown.png)

Boxplots are used to graphically represent the range of data within a dataset. The *min*, or the end of the "whisker" to the left of the box, is the lowest value in the set. The *lower quartile* is the value at the 25^th^ percentile, meaning 25% of all other values are less than or equal to it. The *median* is the central-most value---half the values are higher and half the values are lower. The *upper quartile* lies at the 75^th^ percentile, and, finally, the *max* (the end of the other whisker) is the highest value in the set.

The substance of Metricly's Utilization Boxplot Report comes from our advanced analytics. By computing a percent utilization metric that best suits each AWS element type, we are able to transform your AWS metric data into an easy-to-read report that makes right-sizing your environment simpler than ever.

Here are 3 things to keep in mind when reading the Utilization Boxplot Report:

1) Size matters

Pay attention to the Inner Quartile Range (IQR), which is calculated by taking the difference between the upper and lower quartiles. The IQR determines the width of the box, and  tells you how much the element's utilization percentage has (or has not) varied over the specified time frame. So, the larger the IQR, the wider the box and the more variation in the element's utilization. Similarly, the smaller the box, the less variation in the element's utilization.

Frequently we find companies are over-provisioning because they are not confident enough to scale down.  They pay for extra capacity for that "just-in-case" protection and peace-of-mind. Understanding an element's utilization over time allows you to confidently make decisions on scaling and optimization.

2) How long are the whiskers?

In some cases, maximums and minimums are outliers and may be so different from the rest of the values in the set that they can be fairly safely disregarded. However, the max and min could also represent events you should research. For example, if an element consistently has 60% CPU utilization, but the max in its boxplot is 100%, the unusually high maximum could be the result of a spike in the element's CPU utilization that caused an event in Metricly.

An easy way to determine whether an outlier in a boxplot corresponds to an event is to check out the Events graph on the Element Detail page for the specified element. By zooming in on the Events graph to the same period of time shown in the Utilization Boxplot Report, you can quickly see all the events recorded on the selected element for that time frame.

While maximums and minimums are not always indicative of an element's overall utilization, they are exceedingly helpful for noticing how an event might impact an element's utilization over a given period of time.

3) Where is the median?

The median, and where it lies in the box, tells you a lot about the range of data in the set. If a median is closer to the lower quartile, you could interpret that utilization percentages for the element are often closer to the value at the 25^th^ percentile. Similarly, if the median is closer to the upper quartile, you could interpret that values are generally closer to the 75^th^ percentile value.  Medians that stay close to the lower quartile over time typically indicate over-provisioned elements, and subsequently cost-saving opportunities.

Visualizing your monitoring data allows for quick review of mass quantities of information.  Metricly's Utilization Boxplot Report allows you to quickly identify capacity optimization opportunities at-a-glance.  Rather than staring at a wall of numbers that need to be broken down and interpreted, why not let Metricly do the work for you?

* * * * *
*See this report for your environment -- [try Metricly free for 21 days.](/signup)*
