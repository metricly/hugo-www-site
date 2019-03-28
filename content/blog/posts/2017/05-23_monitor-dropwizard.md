---
author: "Mike Mackrory"
date: "2017-05-23"
title: "Monitor Dropwizard Applications with Metricly"
description: "One Java integration and a few simple steps is all you need to monitor Dropwizard applications with Metricly. Read on to see how!"
category: "DevOps"
url: "/monitor-dropwizard/"
layout: "single"
---

Looking for an all-inclusive framework on which to base your new RESTful web service? Then look no further than Dropwizard, which is an open source Java Framework. The Dropwizard package is full of tried-and-tested libraries designed to help you develop high-performing RESTful web services quickly and efficiently.

Dropwizard's key features include:

-   An embedded Jetty Server.
-   Jersey to handle REST and Jackson to handle any JSON
-   Google Guava, Logback, Hibernate Validator, Liquibase, Joda Time and many other useful libraries.
-   Performance metrics and monitoring

Out of all of those, the last one, **Performance Metrics and Monitoring**,is the one we're going to focus on in this article. We'll explore what is included in the metrics and monitoring package, and then look at how we can use [Metricly Java integration](https://docs.metricly.com/integrations/agents/java-agent/) to push those metrics into the Metricly ecosystem, perform more advanced analysis, and create a more substantial and useful way to monitor Dropwizard web services.

A Very Basic Shipping Cost Service
----------------------------------

Some time ago, I created a project to demonstrate how to build a very simple web service using Dropwizard. The project has a single endpoint, which accepts an HTTP GET request, including a URL parameter for weight, and returns a JSON object with weight and shipping cost calculation. The project is called simply **Dropwizard Shipping Service**, and you're free to download it and work along with this example if you would like. We're going to start by looking at what metric we have to monitor Dropwizard out of the box, and then enhance it to [send our metrics to Metricly](/computed-monitoring-metrics) and do some basic analysis.

If you're following along, the first step is to clone the repository and build it. The following assumes you are using either MacOS or Linux and that you have git installed. The steps for Windows are similar, but they will have a slightly different syntax.

    $ git clone https://github.com/echovue/dropwizard_shipping_service.git
    $ cd dropwizard_shipping_service

Now we'll build the project using the embedded Gradle wrapper, and package it all up into a jar file.
    $ ./gradlew clean build packageJar

Finally, we can run the service by specifying the jar, and the dropwizard configuration file.

    $ java -jar ./build/libs/dropwizard_shipping_service-1.0-SNAPSHOT-standalone.jar server shippingservice.yaml

Your service should now be running on port 8080, and you should be able to navigate to http://localhost:8080/calculate?weight=10 and receive a response.

Dropwizard has also started an admin service for us, running on port 8081. You can view this by navigating to http://localhost:8081/ If you click on the Metrics link, you should observe a page similar to the one below.

![Monitor Dropwizard Application: Metrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Dropwizard-Metrics.png)

If you scroll down the page, you'll find hundreds of different metrics being generated from the JVM, jetty, and logback. It's a great deal of data, and if you knew what you were looking for, you might be able to find it, but it's not very useful in this format.

Configuration of the Dropwizard Metrics
---------------------------------------

Before you can push your metrics into Metricly, you'll need to have an account. If you don't have one yet, Metricly offers a 21-day free trial. Log in to your Metricly account, and navigate to the profile integrations page. The API key we're going to use for this integration is the one listed under CUSTOM. Hang on to it; we'll need it in a minute.

OK, head back to the project, and open it up in your favorite IDE, or editor. The file we'll want to edit first is build.gradle located at the root level of the project. Look for the dependencies section. We're going to add a runtime dependency.

    dependencies {
       compile ("io.dropwizard:dropwizard-core:1.1.0")
       runtime (
               "com.netuitive:dropwizard-metrics-netuitive:+",
               "com.netuitive:ananke:0.1.25"
       )
    }

Now we just need to configure sending the metrics to the Metricly REST API. You also have the option of configuring the metrics to submit to the StatsD daemon or a StatsD server. Details on how to configure that integration can be found here.

The second and final file we need to edit is the Dropwizard configuration project. In this case, it's the file named shippingservice.yaml.\
Open it up in your editor and add the following between the server and logging sections. The exact location doesn't matter, as long as it's in an independent section.

    metrics:
     frequency: 1 minute
     reporters:
       - type: netuitive-rest
         apiKey: ac75231d588a0f2e6cf52c9e579e3effd
         elementName: ShippingService
         apiHost: api.app.netuitive.com
    elementType: Dropwizard

Remember that API Key we found at the beginning of this section? You'll want to replace the apiKey value in the code above with yours. Also, make a note of the elementName. This name is the element under which Metricly will save your metrics.

And that's all there is to it! Restart the application -- Ctrl-C and then

    $ java -jar ./build/libs/dropwizard_shipping_service-1.0-SNAPSHOT-standalone.jar server shippingservice.yaml

Monitor Dropwizard Applications In Metricly
--------------------------------------------

Once your application has been running for a couple of minutes, and you've tried to calculate the endpoint a few more times, head back to your Metricly account, and navigate to the **Metrics** page.

![Dropwizard Metrics: metric-explorer](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/06/Metric-Explorer-1-1024x535.png)

Let's start by finding our metrics. At the top left-hand side of the page, click on the **Element** dropdown. Search or scroll down the list for the Element Name you set in the configuration\
file. If you're following this example exactly, it'll be ShippingService. Check the box next to it.

![Monitor Dropwizard: Select Element](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Select-Element-1.png)

Next, click on the **Types** dropdown and select *Dropwizard.*

 ![Monitor Dropwizard: Select Type](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Select-Type-1.png)

Finally, click on the **Metrics** dropdown. There are hundreds of [metrics being pushed from the application](https://docs.metricly.com/data-visualization/metrics/) every minute, and you can view them all at once if you want. Let's just monitor Dropwizard metrics related to the *calculate* endpoint. Select *Tree* as the view, and then open the com Item by clicking on the plus sign next to it. The tree follows the naming convention in the application so that you can drill all the way down to the *calculateShipping* endpoint.

![Monitor Dropwizard: Select Metrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Select-Metrics-1.png)

Let's choose the 1MinuteRate, 99percentile and count. If the charts don't automatically appear, click on the **Render Charts** button.

![Monitor Dropwizard: Metric Charts](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Metric-Charts-1.png)

This metric view is significantly better than the JSON object we saw outputted to the screen earlier, but we still have to do a lot of clicking to get to this point. Let's get a little more organized.

Getting Organized

Navigate back to the **Dashboards** page, and click the **New Dashboard** button. Pick a name for your [metrics dashboard](/devops-dashboard-best-practices)--I chose *Shipping Service* for mine--and then click on Save. You now have a nice shiny dashboard to monitor Dropwizard web services. Let's head back to the Metrics page, and we'll pick some metrics to add.

Let's pull up the metrics we found before.

-   Element: ShippingService
-   Type: Dropwizard
-   Metrics: com → echovue → shippingservice → resource → ShippingServiceResource → calculateShipping → [1MinuteRate, 99percentile, count]

Find the chart which shows the 99th percentile. You can do this by mousing over the title of the chart. Click on the three little dots on the top right corner.

![Monitor Dropwizard: Metric Chart Settings](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Metric-Chart-Settings-1.png)

The 99th percentile is a measure of response time, and in our case is being measured in milliseconds. For the metric unit, click on the dropdown, and find **milliseconds**. Then, click on **Add To Dashboard**. Select the dashboard which we created in the last step, and choose a descriptive name for this chart. Finally, click on **Save.**

![Monitor Dropwizard: Metrics Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Metrics-Dashboard-1.png)

This chart has now been added to your [monitoring dashboard](https://docs.metricly.com/data-visualization/dashboards/). While we're in the metrics section, though, let's add a couple more metrics to monitor Dropwizard. First, add the count metrics for the calculateShipping endpoint while we have it on the screen.

Next, change the Metric type to *jvm.* We'll look at:

-   Uptime
    -   attribute → uptime
-   Garbage collector
    -   *gc* → *PS-Scavenge* → *count* and *time*
-   Heap Memory'
    -   *memory* → *heap* → *max* and *used*
-   Threads
    -   *threads* → *count*

It would also be good to see the number of HTTP 200 responses and 400 level responses. Change the Metric type to *io* → dropwizard → jetty →MutableServletContextHandler

-   *2xx-responses* → *count*
-   *4xx-responses* → *count*

Add each of those to your dashboard, and then let's take a look at the finished dashboard by navigating back to the **Dashboards** page.

Analyzing Your Metrics with Metricly
-------------------------------------

Once you've returned to your dashboard, you can move each widget around until you find a layout that works for you. From now on, all you need to do is navigate to this page, and you'll have an instant snapshot of how the application is performing.

![Monitor Dropwizard: Dropwizard Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Dropwizard-Dashboard-1.png)

The final thing we're going to do with our data is set up a policy to monitor Dropwizard which will alert us when the count of 400 level responses is higher than 200 level responses. Navigate to the [monitoring Policies](/policy-page-upgrades)page, and click on the **New Policy** button.

We'll name this policy the **Shipping Service Error Alert**. Set the category to **Warning** and then enter the following values under each of the tabs.

-   Scope
    -   Name Contains
        -   Click on Select Elements
        -   Choose *ShippingService* from the dropdown
    -   Name Excludes
        -   Leave blank
    -   Types
        -   Dropwizard
-   Conditions
    -   Duration
        -   5 min
    -   Metric
        -   Click on Single Metric
        -   Find *io.dropwizard.jetty.MutableServletContextHandler.4xx-responses.1MinuteRate*
    -   Deviation
        -   Select More Than
        -   Find io.dropwizard.jetty.MutableServletContextHandler.2xx-responses.*1MinuteRate*
-   Notifications
    -   Notification Type
        -   Email
    -   Re-notify every
        -   30 minutes
    -   Email
        -   Your email address

Add a description under the *Description* tab if you would like, and then click on **Save.** You now have a [Metricly policy](https://docs.metricly.com/alerts-notifications/policies/) which will monitor Dropwizard error rates and email you whenever the errors returned by the service exceed the good responses for more than a five-minute period.

We went through a couple of topics pretty quickly here. If you would like to learn more, the [Metricly Help](https://docs.metricly.com/) documentation is excellent.
