---
author: "Jason Simpson"
date: "2015-12-28"
title: "Integrating Metricly Monitoring and ServiceNow Ticketing"
description: "Want to open tickets in ServiceNow when event fire in Metricly? We've got it covered. Check out our new integration with ServiceNow Ticketing!"
category: "Product Updates"
url: "/servicenow-ticketing-monitoring/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

Recently, a customer asked us how they could integrate their [ServiceNow](https://www.servicenow.com/) ticketing system with Metricly. They wanted to open tickets in ServiceNow when events fired in Metricly and also show what was going on in ServiceNow on their Metricly timeline. This was a cool request for two reasons: it was easy to implement due to the maturity of the two technologies and it demonstrates how an organization can improve the collaboration between Development and Operations (DevOps) teams with automation.

So how is this set up? Both Metricly and Service Now support a robust REST based API and have built in features to better leverage these APIs. This allowed us to create an integration without any external scripts or tools. Below is a working example to learn more on how it is setup between Metricly and ServiceNow:

Metricly and ServiceNow Integration Setup
------------------------------------------

Your operations team has Metricly dynamic policies deployed to monitor the mission critical web application. An event has fired in Metricly when the KPIs deviate above the learned baseline. You can learn more about our [anomaly detection](/product) from the website.

[![Service Now Ticketing 1](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_1.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_1.jpg)

In Metricly, events can be configured to send out notifications. In this example we send a REST message via a Webhook to the ServiceNow API. ServiceNow has the ability to receive inbound REST messages and send outbound REST messages. For this example we set it to open up an Incident ticket in ServiceNow. You could also open a ticket by sending a formatted email to ServiceNow. Here is an example of how easy it is to send these messages from Metricly.

[![ServiceNow Ticketing 2](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_2.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_2.jpg)

Now when an event fires in Metricly (e.g. a slow webpage response time) a ticket is opened in ServiceNow.

[![Service Now Ticketing 3](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_3.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_3.jpg)

ServiceNow also lets you send outbound REST calls. To publish data back into Metricly we needed to create an outbound REST API call into Metricly. ServiceNow makes this easy as well. All these calls are made from inside the product, so no need to create and maintain complex scripts or integrations.

[![ServiceNow Ticketing 4](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_4.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_4.jpg)

Now we have the outbound REST call configured so any action on the ticket can put data back into Metricly. Once the ticket is updated or changed that data will show up on the Metricly events timeline.

[![ServiceNow Ticketing 5 width=](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_5.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/ServiceNowBlog_5.jpg)

By integrating ServiceNow and Metricly, the operations team can see all the work being done in one central location.

* * * * *

If you're already using ServiceNow, try this for yourself by taking advantage of our 21-day [free trial](/signup).
