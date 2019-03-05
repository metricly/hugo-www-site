---

date: "2016-05-10"
title: "DevOps Dashboard: Four Best Practices You Need to Know For More Readable Dashboards"
description: "What makes a great DevOps dashboard? We asked Metricly’s resident UI/UX designer for pointers, and he gave us four essential elements."
category: "Product Updates"
url: "/devops-dashboard-best-practices/"
layout: "single"
---

You can have the best, most precise [monitoring solution](https://www.metricly.com) in the world, but if you aren't viewing your data correctly, important alerts and key trends are going to pass you by. As our chief data scientist is fond of saying, "Context is everything" -- and an effective DevOps [dashboard](/product) is key to providing that context.

So what makes a great DevOps dashboard? We asked Netuitive's resident UI/UX designer for pointers, and he gave us these four essential elements to viewing your data and metrics in an effective manner.

*Ready to see effective dashboards in action? [Try our free demo](/signup).*

Make Your DevOps Dashboard Tell a Story
---------------------------------------

Each dashboard should say what exactly what you need it to say -- and nothing else. Don't try and force four or five different initiatives onto one dashboard, or you'll end up with a confusing set of charts and graphs.

If you're creating dashboards for the benefit of a specific person or team, don't combine them. Pick one target audience and make it speak to them. If you have more than one audience, create more dashboards. This DevOps dashboard, for example, has metrics from several types of servers and instances, as well as several different metrics.

[![DevOps dashboard: Confusing Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/ConfusingDashboard-1024x530.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/ConfusingDashboard.png)

On the other hand, this dashboard only has metrics pertaining to [EC2 instances](https://help.netuitive.com/Content/Misc/Datasources/AWS/new_aws_datasource.htm), and is arranged so that you can quickly and easily see key metrics (for instance, ReadOps, WriteOps, and Total Ops are all in one row):

[![DevOps Dashboard: BetterDashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/BetterDashboard-1024x532.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/BetterDashboard.png)

Make Your Layout as Clear as Possible
-------------------------------------

This is where a lot of DevOps dashboards really fall short. You've got a limited amount of space, and even if you have your audience narrowed down, you may still struggle to fit all the relevant data in the space of one dashboard. In this case, consider consolidating some of your charts. If you have several of the same type of instance or server, it might make more sense to display a combined or aggregated chart, as opposed to a full dashboard of individual metric charts. This dashboard, for example, shows the individual CPU usage for a collection of Java virtual machines:

[![DevOps Dashboard: CPUall](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/CPUall-1024x531.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/CPUall.png)

With a [stacked time series widget](https://help.netuitive.com/Content/Dashboards/Widgets/widget_library.htm), you can combine all of these metrics into a single widget:

[![DevOps Dashboard: CPUaggregate](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/CPUaggregate.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/CPUaggregate.png)

Keep the Style Clean
--------------------

This is another way your dashboards can go from really clear to really confusing. Dashboards don't need to be ornate or over-styled. Choose fonts that are simple and consistent -- clear and readable is the name of the game. Use as few sizes, weights and colors as you can and still get the point across. If your charts have a lot of color, keep other colors to a minimum. You want your charts to retain top visual priority, so avoid creating a lot of "busyness" on the dashboard.

Choose the Right Data
---------------------

It's critical to make sure you're using the right charts and graphs. This will inevitably vary from element to element, and from metric to metric. It may even change depending upon how the data itself changes. Using the correct charts and graphs is crucial to providing that all-important "context." It might seem obvious, but make sure your related graphs and metrics are utilizing the same types of charts or graphs. Don't swap from pie graph to line graph and back again:

[![DevOps Dashboard: DifferentMetrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/DifferentMetrics-1024x303.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/05/DifferentMetrics.png)

As you can see, it can be difficult to compare the utilization of these three instances, because the types of charts don't align. A much better option is to pick one and stick with it, or to place all of these on a single aggregated metric.

The final thing to remember is all data is different -- and so are all DevOps teams. What works for someone else might not work for you. If you're not sure what the best way is to display your data, do some research and gain some inspiration. Chances are someone has experimented and found a visually appealing and efficient way to display a similar set of metrics, while retaining the integrity of the data.

* * * * *

*Want to put these dashboards to work for your team? Check out Netuitive's [no-obligation, 21-day free trial](/signup)!*
