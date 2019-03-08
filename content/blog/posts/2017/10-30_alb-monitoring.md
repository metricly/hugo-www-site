---
author: "Mike Mackrory"
date: "2017-10-30"
title: "ALB Monitoring (AWS Application Load Balancer)"
description: "A detailed look on AWS Application Load Balancer (ALB) monitoring. Learn to configure an ALB, modify rules for monitoring, & add alerting with Metricly."
category: "DevOps"
url: "/alb-monitoring/"
layout: "single"
---

It's been a year since Jeff Barr announced the new AWS Application Load Balancer, or ALB. In this article, we're going to dig more into ALB Monitoring. Specifically, we'll cover the details of this recent addition to the AWS solution suite and walk through how to set up a basic ALB and connect it to a service like Metricly to [gather and analyze metrics](/enable-aws-custom-metrics), perform [anomaly detection](/what-is-anomaly-detection), and to use that analysis to drive [automated alerting](/aws-monitoring-best-practices) and [reporting](/ec2-cost-analysis-recommendations).

First let's begin with a high-level view of what an ALB is and why you might be interested in adding ALBs to your ecosystem.

The AWS ALB offers the capability to:

-   Perform content-based routing on requests to a service
-   Perform load balancing at an application level
-   Retrieve better metrics from your microservices
-   Support WebSocket and HTTP/2 protocols

### So is an ALB Different from an ELB?

Both the [Elastic Load Balancer (ELB)](/elb-monitoring-alerting) and the Application Load Balancer (ALB) perform load balancing, but they accomplish this task in slightly different ways. First, let's look briefly at how communication takes place between devices. Network communication uses the conceptual [OSI model](https://en.wikipedia.org/wiki/OSI_model) to standardize communication. This model is divided into seven layers, which range from layer one, which represents the physical medium used for transportation, all the way up to layer seven representing the parts of the communication closest to the application initiating communication.

ELBs operate at layer four of the OSI model. This layer handles the transportation used in the communication, and in the case of web-based services, this is where TCP/IP exists. When a request comes to the ELB, the routing logic considers the IP address associated with the request to determine whether to handle and pass the request through to one of its instances, or pass it on to a different ELB.

ALBs operate at layer seven of the OSI model. By moving the routing logic to a higher layer, the load balancer can determine not only whether it has instances which can handle the request, but also analyze the path to further specify which instances should ultimately receive the request. The image below, taken from the AWS Load Balancer Type Selection page, illustrates this very well.

![Application Load Balancer vs Elastic Load Balancer](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/1-Application-Load-Balancer-vs-Elastic-Load-Balancer.png)\
*Application Load Balancer vs Elastic Load Balancer*

Let's look at how to set up an ALB and configure it to route to different instances based on the path in addition to the URL.

### Setting the Scene

As we walk through setting up an ALB and analyzing the metrics it produces, I'll be using a simple application with a couple of endpoints to illustrate how it all works. The application has the following endpoints, all listening to specific paths on port 8080 of the target instance:

-   Health Endpoint. Returns a simple HTTP 200 response on** */health***
-   About Endpoint. Returns a JSON response with a description of the service on ***/about***
-   Distance Endpoint. Returns a JSON document describing the distance between two Zip Codes, listening on ***/distance/zipcode1/zipcode2/*** where *zipcode1* and *zipcode2* are actual zip code values passed in.

What I want to do is set up two Auto Scaling Groups (ASG) each with the same application. I want to set up the load balancer to send all requests to the ***/about*** endpoint, and all requests to the ***/distance*** endpoint to go to the other. The idea is that I can scale the ASG behind each independently, depending on traffic to each.

If you would like more information on setting up EC2 instances and defining Auto Scaling Groups, the AWS documentation is an excellent starting point.

### Basic Setup Before You Create Your ALB

Before we set up the ALB itself, we need to define targets for each of the endpoints that we want our ALB to apply logic on. Log in to the AWS Console and navigate to the [EC2 Dashboard](https://console.aws.amazon.com/ec2). Find the **LOAD BALANCING** section in the navigation menu on the left-hand side of the dashboard, and click on the [Target Groups](https://console.aws.amazon.com/ec2#TargetGroups:) link.

A target group is how we are going to identify each ASG from the ALB. Begin by clicking on **Create target group**.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/2-Create-a-target-group.png)

The configuration for a target group is fairly straightforward. Select an appropriate name, and define the protocol, point, target type, and VPC. The Health Check Settings should point to an endpoint which can assess the health of the instance, and return an HTTP 200 OK response if all is well. The Advanced Health Check Settings can also be adjusted, although a discussion of such is beyond the scope of this article.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/3-Target-Group-Configuration.png)*Target Group Configuration*

With the target group set up, you can now associate that target group with the ASGs hosting your application. (I already have mine configured and just need to add the target group.) You can do this by navigating the Auto Scaling Groups page, and selecting the ASG you would like to update. Click on the **Details** section at the bottom of the page, and then click on the **Edit** button.

The Target Groups field should auto-complete with available target groups. Select the appropriate target group for each of your ASGs, and click the **Save** button to update the ASG.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/4-Assign-Target-Group-ASG.png)\
*Assign Target Group to Each ASG*

With our target groups defined and assigned to each of our ASGs, we can now create our ALB and let it handle logical routing to each group.

### Creating and Configuring Your ALB

From the AWS EC2 Dashboard, navigate to the Load Balancers page under the **LOAD BALANCING** section of the left-hand navigation menu. Click on **Create Load Balancer**.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/5-Create-Load-Balancer.png)

When prompted to select the load balance type, select **Application Load Balancer**, and click **Continue**.

On the next page, enter a name for your load balancer, ensure the Scheme is set to *Internet-facing*, and IP address type is set to *ipv4*. My ALB is going to use the HTTP Protocol and Port 80. You can change any of these settings as needed, including adding HTTPS on Port 443.

If you would like to use SSL/HTTPS with your ALB, I would recommend following the instructions specified in the AWS Documentation rather than this article.

Specifying that the ALB should use all AZs in your VPC will also make your application more fault-tolerant, which is recommended. Add any additional **tags** required by your organization, and click **Next: Configure Security Settings**.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/6-Initial-ALB-Setup.png)\
*Initial ALB Configuration*

Step two of the configuration relates to security certificates and only needs to be configured if you're going to be accepting HTTPS requests. Additional information is available in the AWS Documentation.

Step three requires you to select or define a security group for your ALB. Security groups define which ports accept inbound and outbound traffic, and are an important tool in securing your environment.

Step four is where we start defining the routing for our ALB. Note that each of the target groups we defined in the previous section can only be associated with a single load balancer. Select the first target group and enter the information into the appropriate fields. We'll add the second group once the ALB has been created.

The Health Check information is identical to that which we entered previously within the Target Groups field. Once you have all the fields completed, click on **Next: Register Targets**. Review the information entered so far, and then click on **Create** to create the load balancer.

### Modifying ALB Rules

With our ALB set up, we can add rules to route requests based on their content. From the AWS EC2 Dashboard, navigate to the Load Balancers page under **LOAD BALANCING**. Click on the ALB you would configure. Click on **Listeners** in the details section at the bottom of the page. You should already have a Listener defined, based on values you entered when creating the ALB. Find that listener, and click on **View/edit rules >** in the Rules column.

On this page, you can add rules, edit rules, change the order in which rules are applied, and delete rules. Because of the dynamic nature of the ALB, you can change a rule, wait a short period for the rules to be integrated, and see how they are applied.

I set up two additional rules for my ALB. The first was for a request using the path ***/about/* **which I routed to *DynamicGoTarget.* The second rule was for requests to the path ***/distance/*/**** using the wildcard * to represent the zip code values being passed as part of the path. Once you've made changes, click on the **Update** button, and your changes should be applied fairly quickly. (My experience was less than a minute before they were fully active.)

The default rule is always applied last and handles any request sent to the ALB which is not handled by any of the preceding rules. These rules can be edited, but not deleted.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/7-ALB-Rule-configuration-for-Multiple-Targets.png)*ALB Rule Configuration for Multiple Targets*

### Optional Collection of Access Logs for Your ALB

By default, access logs are disabled on ALBs. If you would like to use them for troubleshooting, you can enable them by navigating to the Load Balancers page under **LOAD BALANCING**. Click on the ALB which you would enable logs for. Click on the **Description** tab, and scroll down to the **Attributes** section. Click on the **Edit Attributes** button.

Check the box next to **Enable access logs**, and then enter either an existing S3 bucket from your account or enter a new and unique bucket name in the **S3 location** box. If the bucket is new, check the box next to **Create this location for me** as well.

Completing this step is useful if you need to keep or would like to search your access logs, but is not required for the export of data to Metricly, as described in the next step.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/8-Enable-Load-Balancer-Access-Log-Collection.png)*Enable Load Balancer Access Log Collection*

### Pulling Your ALB Data into Metricly

If you already have a Metricly account, and your data is being read and analyzed by Metricly, then you're almost ready to go. If this isn't the case, then you'll want to set up an account before proceeding through this article. Metricly offers a [21-day free trial](/signup) -once you have your account, you'll need to configure AWS integration on your account. This will allow metrics data to be read from your AWS account and make it viewable in Metricly. The IAM role integration is my personal preference, but you can also integrate via an AWS Access Key. View our [AWS documentation](https://docs.metricly.com/integrations/aws) for step-by-step directions.

Once you've set up your integration to AWS, data will start to flow automatically from [AWS CloudWatch](/aws-cloudwatch-metrics-integration) to your Metricly account. Unfortunately, ALB data is not enabled by default, but it's easy to begin collection of this data. Navigate to the [Integrations](http://public.metricly.com/#/integrations) page from the top menu. Select the Amazon Web Services card, as shown below.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/9-AWS-Metricly-Integration.png)

Once you've entered the Integration Setup page, scan down until you get to the Include Types section. Application Load Balancer was the final item on the list when this article was written, so scroll all the way down the list, and check the box next to **Application Load Balancer.**

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/10-Metricly-Application-Load-Balancer-Integration.png)\
*Check Application Load Balancer as an Included Type*

### Available Metrics and Preconfigured Dashboards

Metricly gathers 22 metrics for ALBs at this time. If you would like to view them, you can log in to your account, and navigate to the [Inventory](http://public.metricly.com/#/inventory) page. Once there, you can filter by Name or Type, and find the name of your ALB.

If you click on the name, you'll be shown a collection of metrics, attributes, and tags, and also be shown a link to ***View all Metrics for this Element***. Clicking on that link will take you to the Metrics page for the ALB, and display all metrics.

One of the overwhelming benefits of using a service like Metricly is that you don't have to invest a great deal of time in developing your first set of dashboards and alerts.

Navigate to the [Dashboards](http://public.metricly.com/#/dashboards/dashboard-01) page, and look for the AWS ALB Summary. This dashboard provides you with an instant window into the performance of your ALBs, and highlights those with unhealthy hosts, slow response times and high connection counts. (My dashboard is shown below, although, with just a single ALB, it's a little sparse.)

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/11-Preconfigured-AWS-ALB-Dashboard.png)*Preconfigured AWS ALB Summary Dashboard*

### Anomaly Detection and Alerts

Finally, Metricly has some preset policies in place which can be triggered if latency or error rates increase related to your ALB. Navigate to the [Policies](http://public.metricly.com/#/policies) page, and you should see them at the top of the list.

-   AWS ALB -- Elevated Load Balancer Error Rate
-   AWS ALB -- Elevated Target Response Time

To enable notifications for either of these, select one of them, and then click on the Notifications tab on the page which appears.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/10/12-Metricly-Alert-Policies.png)*Adding Notifications to the ALB Elevated Error Rate Policy*

Click on the **Add Notification** button, and select how you would like to be notified, and how often. Options include email, HipChat, PagerDuty, and Slack, among others.
