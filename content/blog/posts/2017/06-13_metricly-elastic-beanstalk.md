---
author: "Zachary Flower"
date: "2017-06-13"
title: "Metricly and the Elastic Beanstalk"
description: "Metricly provides an easy way to monitor Elastic Beanstalk along with everything else you have running in your infrastructure. See how it works!"
category: "DevOps"
url: "/metricly-elastic-beanstalk/"
layout: "single"
---
Amazon Web Services (AWS) offers dozens of services --- which is great if you like options, but also intimidating if you're trying to wrap your head around how to manage all the different AWS services. Fortunately, AWS offers a solution: Elastic Beanstalk. Elastic Beanstalk is one of the easiest ways to cut through the clutter and manage a secure and scalable application infrastructure.

Elastic Beanstalk does this by providing an orchestration service that manages the configuration and instantiation of various AWS services, such as Elastic Compute Cloud, Elastic Load Balancers, and the Relational Database Service. By automating the configuration of these services, individuals and teams can easily spin up a new application on AWS without losing their minds in complicated permissions policies and individual service configuration.

But, as with any online service, things can go wrong. And while Amazon does offer its own basic monitoring, the built-in [AWS monitoring](/aws-monitoring-best-practices/) is just that: basic. For this reason, it's helpful to have a more robust, [centralized platform for monitoring](/product) that can support every product you use, both within and beyond AWS.

That's where Netuitive comes in. Netuitive provides an easy way to monitor Elastic Beanstalk along with everything else you have running in your infrastructure.

In this article, I'll walk through using Netuitive to monitor an AWS Beanstalk app.

Getting Started with Elastic Beanstalk and Netuitive
----------------------------------------------------

Because Elastic Beanstalk is an orchestration service, rather than a distinct product, we need to install the [Netuitive Linux Agent](https://help.netuitive.com/Content/Integrations/linux.htm?Highlight=linux) on each individual Elastic Compute Cloud (EC2) instance that Elastic Beanstalk instantiates. To accomplish this, we need to set up an [advanced environment configuration](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html) file that Elastic Beanstalk will use to automatically install and configure the Netuitive Linux Agent on every EC2 instance it manages. While this sounds complicated, it kind of is---but Netuitive has thankfully already done the heavy lifting by creating the configuration file for us.

To get started, we must first create a directory called .ebextensions in the root of our application directory. Next, download [netuitive.config](https://github.com/Netuitive/netuitive-agent-elasticbeanstalk/blob/develop/.ebextensions/netuitive.config) from Netuitive's Elastic Beanstalk Configuration repository and put it in the .ebextensions directory. Finally, we need to add our API key to netuitive.config ---This can be found at the top of the Linux Integration management page:

![Elastic Beanstalk: Linux Integration](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Linux-Integration.png)

With your API key in hand, open up netuitive.config in your favorite text editor and replace <datasource api key> with your API key. This value should be found in two places, one prefixed by N_APIKEY and one prefixed by api_key.

Initial Monitoring
------------------

Shortly after deploying your application with Netuitive's Elastic Beanstalk configuration, you should see a new element show up in your Netuitive Inventory dashboard:

![Elastic Beanstalk: New Elements](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/New-Elements-1024x236.png)

The metrics that this element will show are the same as any standard Linux server: CPU utilization, memory utilization, disk utilization, etc. This information can be used to keep an eye on the [health of the individual EC2 instances](/view-manage-individual-aws-ec2-costs) within your Elastic Beanstalk environment. It should be noted that the name of the server in your inventory is pulled directly from the hostname of the EC2 instance.

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Elastic-Beanstalk-EC2-Instances-1024x319.png)

Dynamic Instance Monitoring
---------------------------

While Elastic Beanstalk *can* be used with one EC2 instance, its true power comes from the Elastic Load Balancer that can automatically scale up the number of EC2 instances based on the amount of traffic your application is receiving. To demonstrate how this affects our Netuitive inventory, let's do some massaging of the number of available instances in the load balancer.

Scaling Up
----------

By changing the minimum number of instances required to run our application to 2, the Elastic Load Balancer will automatically spin up a second instance for us. This will give us the ability to see how Netuitive handles multiple instances coming from the load balancer.

![New Elastic Beanstalk Element](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/New-Elastic-Beanstalk-Element.png)

Thanks to the initial Netuitive Linux Agent configuration we did on the source code itself, we can see that every time a new instance is loaded, it is automatically added to our Netuitive Inventory page. Because each instance is a perfect clone of one another, the same metrics are available across each element in the Inventory dashboard.

![Elastic Beanstalk: New EC2 Instance](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/New-EC2-Instance-1024x381.png)

Scaling Down
------------

So, what happens when we scale up the number of instances is pretty intuitive, but what about when we scale them *down*? To test this, let's turn off the load balancer and see what happens in Netuitive.

![Elastic Beanstalk: Rescaled Element](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Rescaled-Element.png)

Because the Netuitive Linux Agent isn't communicating directly with Elastic Beanstalk, Netuitive isn't specifically told that a running instance has been shut down. Instead, data collection stops, and the server is flagged in the Netuitive Inventory dashboard.

Additional Monitoring
---------------------

While the initial Elastic Beanstalk monitoring setup is good, it doesn't take into account the other services that Elastic Beanstalk manages, nor does it take into account top-level information about service health. In this case, our best bet is to set up a direct [integration with AWS through Netuitive.](https://help.netuitive.com/Content/Integrations/aws.htm)

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/AWS-Integration-Setup.png)

To accomplish this, head over to the Netuitive Integrations page and click on the Amazon Web Services integration. It is important to note that while the crux of this functionality is the IAM Role, setting it up is outside the scope of this article, so I recommend reading over [Netuitive's documentation](https://help.app.netuitive.com/Content/Integrations/aws.htm).

While you can select which AWS elements to include in your monitoring based on your own needs, the two that we will be looking at are EC2 and RDS monitoring, as Elastic Beanstalk works directly with these services.

![Elastic Beanstalk: AWS Integration Details](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/AWS-Integration-Details-1024x203.png)

After enabling the AWS integration, you should see two new elements in your Netuitive Inventory page: one with an RDS collector (if you have configured a database for your application), and one with an EC2 collector. Since these two services are managed by Elastic Beanstalk, their names should match the name of your Elastic Beanstalk environment (in this case Sample-env).

Elastic Compute Cloud (EC2)
---------------------------

While the EC2 agent collects some of the same metrics that the Linux agents do, there is a significant amount of *new* information that *isn't* provided by the Linux agents. At a high level, service attributes like region, IP address, and DNS name are all included. Possibly even more important, however, is the network throughput.

![Elastic Beanstalk: EC2 Monitoring](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/EC2-Monitoring-1024x510.png)

Relational Database Service (RDS)
---------------------------------

Much like the EC2 agent, the RDS agent collects similar service attributes like region, backup retention period, and database engine. Additionally, network throughput, service utilization, and read/write latency are all provided as well.\
![Elastic Beanstalk: RDS Monitoring](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/RDS-Monitoring-1024x324.png)

When combined with CPU and network throughput information from the other two metrics, a complete picture about the overall health of your application can easily be gleaned. Heavy queries, the effects of high load traffic, memory inefficiencies... All of these can be inferred and diagnosed through the information provided.

A Note on Policies
------------------

Monitoring services like Netuitive are powerful in their own right, but what takes that power to the next level is alerting and notifications. It can be practically impossible to stay on top of the overall health of an application. There are a lot of moving parts, and identifying problems as they happen is a job in and of itself.

![Elastic Beanstalk: Default Monitoring Policies](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Default-Monitoring-Policies-1024x246.png)

To help mitigate this problem, Netuitive has Policies that can be configured to warn you of issues in your application as quickly as possible. Thankfully, when enabling any of the integrations, a number of standard policies get added to help get you started.

![Elastic Beanstalk Monitoring: Custom Policy Creation](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Custom-Policy-Creation.png)

As an example, the AWS integration automatically creates [policies for elevated CPU activity](/subtleties-ec2-cpu-utilization) and elevated network activity (among other things) for both the EC2 and RDS services. If the default policies aren't enough, however, you can create your own that specifically target the services managed by Elastic Beanstalk by filtering by the elasticbeanstalk:environment-name tag.

Next Steps
----------

While this is a relatively simplistic demonstration of the power of Elastic Beanstalk monitoring with Netuitive, it highlights just how much information can be made available with the right integrations. The Linux agent pulls raw operating system data, and the AWS agents pull information specific to AWS, but there is so much more that can be integrated to provide an even more thorough picture of an Elastic Beanstalk application. Individual language libraries like PHP or Ruby can be configured to provide application-level metrics, while the Apache or NGINX integrations can provide web-server-level metrics. In the end, the data that you need is there. You simply have to go and get it.
