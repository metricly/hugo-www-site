+++
author = "Mike Mackrory"
date = "2018-04-19T13:44:00+00:00"
title = "Monitoring Time Series Data With The Metricly API"
tags = ["Analytics", "Cloud Monitoring", "Integrations", "Performance Monitoring"]
url = "/monitoring-time-series-data-metricly-api/"
+++

Time series data is simple enough to gather, but it is not very useful in its raw form. What you need is a system which can ingest, analyze and turn the data into meaningful statistics. Better yet, what you need is a system that already understands that data, and can guide you through making intelligent choices and automate many of your monitoring tasks.

As I write this article, Metricly offers 47 integrations with different products, from Etsy’s StatsD to ElasticSearch, Docker and Amazon Web Services. Integrations make it easy to get your metric data flowing into your Metricly account seamlessly. But if there isn’t an integration available to connect with your technology, if you have security restrictions or if you’re migrating your data from another provider, you can use the Metricly API to submit your data.

In this article, I’m going to walk you through the steps you need to take to have your time series data ingested into your Metricly account and show you some of the unique insights and monitoring options available to you through this tool.

Understanding Time Series Data
What exactly is time series data? Time series data consists of a set of data points measured over time and broken down into discrete measurements, in equal and sequential time segments.

Examples of time series data might include metrics such as:

Error rates
CPU utilization
Network traffic

For this example, I extracted some data out of an APM tool which I use to monitor a few of my production services. The metric I exported was the response time in one-second increments over the space of one hour. A snippet of what that data looks like is shown below.

JSON33 lines

Your Metricly Account and What It Can Do
Metricly is different from other APM and monitoring tools available in this space. Not only does Metricly provide a comprehensive monitoring and analytics platform, but they have also invested heavily in providing tools to leverage your data and provide you with dashboards, anomaly detection and policies designed to alert you to problems before they become critical.

All of those tools are available for you to use the instant you set up an account on their system and configure an agent to import your metrics. If you don’t already have an account, you can sign up for a 21-day free trial here.

At this point, we have data, and we have a versatile tool to analyze that data and help us detect anomalies and alert us of error conditions. How do we bring these two together using the Metricly Ingest API?

Importing the Data
The first step is to get an API Key. You can find this by logging in to your Metricly account and navigating to the Integrations page. The integration we’ll be using is the Custom Integration. This integration will allow us to submit custom metrics through the Ingest API.  You’ll want to enable the API Key if it isn’t enabled and copy the provided URL into your REST client.

Custom Datasource Integration
Custom Datasource Integration

POST Request with Data
POST Request with Data

I’ll be using Postman to submit my metrics to the API, but you could use any tool capable of sending POST requests. The URL is https://api.app.metricly.com/ingest/{apiId}  with your unique API Key replacing {apiId}.

POST Request with Data
POST Request with Data

The request requires basic authorization, which will require your Metricly username and password. You will also need to set the Content-Type header to application/json.

You will also need to work with the format of your data to put it into a form which Metricly can ingest. You can find details about the composition of the request (including optional and required parameters) on the Metricly API Metrics Support page – Create a Data Sample.

I transformed the data above to the format below. I’m only including a single metric, but the process can be completed with multiple metrics simultaneously.

JSON23 lines

 

A successful submission of data to the API will result in a 202 Accepted response, with a date header indicating the processing time of the request. The data is now available for use within your Metricly account, and it’s time to start working with it.

Adding Your Metrics to a Metricly Dashboard
Our first step will be to create a new dashboard for our service and add a new metric widget to the dashboard to display the data. Log in to your Metricly account and navigate to the Dashboards page. Add a new dashboard by clicking the New Dashboard button.

New Dashboard
New Dashboard

Choose a descriptive name for your new dashboard and click Save. You’ll be prompted to add a new widget at this point. Or if you want to add your data to an existing dashboard, then click on the Add Widget button.

Add Widget
Add Widget

In the example, we’re only dealing with a single metric, and we’d like to see its data over time, so we’ll pick the Single Metric widget.

Adding the Single Metric Widget to the Dashboard
Adding the Single Metric Widget to the Dashboard

We’ll make this a Time Series widget. Select service.responseTime from the metric drop-down, choose milliseconds (ms) as the display unit, and choose a name for the widget. Click Save and your widget will appear on your dashboard.

Configure the Time Series Widget
Configure the Time Series Widget

Depending on the time frame of the data which you submitted and when you view the dashboard, you may need to adjust the duration and ending date and time for the dashboard.

Response Time Shown as Time Series on Dashboard
Response Time Shown as Time Series on Dashboard

Leveraging the Power of Metricly
The power of having your data in Metricly is in the ability to automate monitoring, and making use of their anomaly detection services. The next step is to set up a policy to automatically monitor our response time and an alert which can be triggered if response times increase beyond a defined threshold.

Navigate to the Alerts page within your Metricly account. The Alerts page automatically includes alerts based on the integrations which you have enabled on your account. Because we’re working with custom metrics in this example, we’ll need to create our own. Begin by clicking on the New Policy button.

New Policy
New Policy

Within the New Policy window, we’ll specify the name for the policy, the category of the alert, and we’ll define the scope which the alert will encompass. We’ll set this policy up to trigger a warning if the response time for this web service exceeds 50ms.

The scope allows us to apply the same policy to a collection of web services, all our web services—or in our case, we’ll specify the web service for which we imported the metrics. As you select criteria for the scope, you’ll see a list of services appear below which match your selections.

Setting up Notification Channels for When the Policy is Triggered
Setting up Notification Channels for When the Policy is Triggered

Before we click on Save, we’ll need to define the conditions and set up the notifications for this policy. Clicking on the Conditions tab, click Add Condition and enter the criteria for the condition. In our example, we’ll set the duration of the condition to five minutes. A five-minute duration means that if the metric exceeds 50ms for more than five minutes, the policy will trigger a notification.

We’ll set the metric to service.responseTime and set a Static Threshold of More Than 50. You’ll notice other deviation options available. These different options allow you to set your policy based on a deviation of a certain percentage, to compare metrics to each other, or set static thresholds like we’re doing with this one.

Setting up Notification Channels for When the Policy is Triggered
Setting up Notification Channels for When the Policy is Triggered

Finally, we’ll navigate to the Notifications tab and add the method we would like the policy to use for notification when the conditions are met. We have the option to be notified by email, Slack, SNS, PagerDuty and several other methods.

Setting up Notification Channels for When the Policy is Triggered
Setting up Notification Channels for When the Policy is Triggered

Now you can click the Save button. Your new policy will now be active and will notify you when the conditions you defined are found within your metrics.

Real-World Application
The way in which I chose to submit data for this article demonstrates use of the Metricly API and the steps involved in interacting with it. Manually pushing metrics into your account isn’t a viable option in the real world, nor will it allow you to make the most of what Metricly has to offer. Using this as an example, you’ll want to create an automated process whereby metrics can be gathered and exported to your Metricly account.

If you would like additional information about how to get started with your Metricly account or additional features available within your account, I recommend the Metricly Support Portal.