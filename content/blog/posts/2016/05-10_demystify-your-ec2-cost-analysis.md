---
author: "Andrew Paine"
date: "2016-05-10"
title: "EC2 Cost Analysis: Demystify Your AWS Bill"
description: "Understanding EC2 costs can be tricky, even with AWS monitoring. Let's look at why EC2 cost analysis is so tough - and how you can demystify your AWS bills."
category: "Cloud Cost Management"
url: "/demystify-your-ec2-cost-analysis/"
layout: "single"
---
Making sense of EC2 costs can be tricky, even with [AWS Cloud monitoring tools](https://www.metricly.com). Questions like "which EC2 instances are costing me the most?", "are there any instances I can switch off" and "am I using the right instance types?" are difficult to answer using Amazon's built-in cost management tools. Let's take a look at why EC2 cost analysis is so difficult -- and what you can do to demystify your AWS bills:

*To see how Netuitive's [behavior learning engine](https://www.metricly.com/behavior-learning-engine) can show you exactly which elements are driving costs and provide meaningful EC2 cost analysis, [try a demo today](https://www.metricly.com/signup).*

Amazon's built-in Billing & Cost Management provide an overview of your total spend. You can track totals by time and break them down by different dimensions (such as account, region, or instance type.) These tools are great for financial control and budgeting but do not help if you want to delve deeper and see how much each individual EC2 instance is costing you.

Death by CSV

Billing data that can be attributed to specific EC2 instances is available, but it is provided at such a level of granularity that even a modest AWS estate can easily generate millions of billing line items per month. Not exactly easy to digest -- and next to impossible to parse for meaningful insights. Amazon's latest price list contains nearly 10,000 distinct price codes for the EC2 service alone. To make matters worse, any of these can appear in your bill, and that doesn't take into account previous price lists that may still be applicable if you have long-standing reservations. There's no way a single person could make sense of this level of complicated data -- especially not on a regular basis! EC2 cost analysis can seem impossible.

What you need is a solid set of [full-stack analytics](https://www.metricly.com/) to help you cut through the noise. Netuitive's [EC2 Cost Report](https://help.netuitive.com/Content/Reports/ec2_cost_report.htm), for instance, digests this data, then aggregates and reduces the complex line items to a simple set of basic cost types per EC2 instance. Voilà -- your millions of rows have been reduced to a format you can actually understand.

Instance Hours vs Utilization

Once you've got the data sorted out, you're ready to start analyzing for insights. A key challenge is identifying which instances are being under-utilized. The "utilization" figures in Amazon's tools are in units of instance-hours, i.e., the number of hours an EC2 is switched on. Unfortunately, this doesn't tell us anything about EC2s that are switched on but inactive. For this we need to compare cost with CPU utilization, to see which instances are expensive but perhaps under-utilized. Netuitive's cost report has this functionality, with the added bonus of being able to see the number of instance hours per individual instance. Memory, disk and other utilization metrics will be available soon as well!

Decoding your EC2 Costs
-----------------------

With an EC2 cost report, you can quickly and easily see which of your instances are costing you money -- and which are on the lower-cost end of the spectrum. Take a look at this sample report:

[![EC2 Cost Analysis: DecodingEC2](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/DecodingEC2.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/DecodingEC2.png)

As you can see, one instance to the far left has a high cost -- but its CPU utilization is relatively low. The subsequent two, though, maintain a much higher utilization for the price. This is the tricky thing about EC2 costs -- high prices don't always indicate inefficiency. The EC2 instance you're spending all that money on may actually be extremely efficient, while a less-used instance could be a good place to look for cost savings. That's one reason detailed cost reports are so important to right-sizing your environment.

Use Cases
---------

Here are some common use cases for detailed [AWS cost monitoring](https://www.metricly.com/):

-   Cost monitoring can help you find instances that are always on, but not reserved. It's possible someone left the instance on -- but it's also possible you need to switch this instance over to a reservation because your environment needs the capacity. Comparing performance data to cost can help you make a well-informed decision.
-   A Cost vs. Utilization scatter plot is a really easy way to find outliers. These outliers might be a sign that you've created an instance of the wrong type somewhere along the line. Regardless, it's an easy way to see at a glance which instances require immediate attention. See the two outliers below:

[![EC2 Cost Analysis: Use cases](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Use-cases.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Use-cases.png)

-   You can find costs for a subset of EC2 instances by name, tags or attributes using the Total Cost Pareto Chart.This is really helpful for comparing on-demand and reserve instances:

[![EC2 Cost Analysis: Use Cases 2](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Use-Cases-2.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Use-Cases-2.png)

-   Need more unique data? Just add custom tags to your instances, and summarize your EC2 cost analysis by tag. For example, is one group spending too much?

[![EC2 Cost Analysis: Use Cases 3](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Use-Cases-3.png)](https://www.metricly.comhttps://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/Use-Cases-3.png)

No billing data? No Problem!
----------------------------

If you can't share your AWS billing data with us, don't worry: we can use your element attributes and performance metrics as well as current list prices to provide an estimated EC2 cost analysis (including on-demand, spot and reserved instance types.) Of course, this won't show your spend on data transfer and other fees, but for many AWS customers these are small in comparison with the instance costs.

* * * * *

*Ready to decode your EC2 costs? Netuitive offers a [no-obligation free trial](https://www.metricly.com/signup) for 21 days.*
