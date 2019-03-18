---
author: "Steve Tidwell"
date: "2017-06-07"
title: "ELB Monitoring and Alerting with Metricly"
description: "See what you need to set up ELB monitoring with Metricly and do a deep dive into which metrics Metricly provides and what those metrics mean. Read on!"
category: "DevOps"
url: "/elb-monitoring-alerting/"
layout: "single"
---


Amazon Web Services' Elastic Load Balancer (ELB) is scalable, fault tolerant, and an easy way to implement load balancing for your application stack. Load balancing allows you to distribute traffic from clients on the Web to multiple backend instances on AWS. Traffic can be distributed between EC2 instances, or [containers on Amazon's Elastic Container Service](/container-monitoring-metricly/) (ECS).

Currently, there are two types of load balancing services that Amazon provides. The first is Classic Load Balancer which functions at Layer 4 of the OSI model, and distributes traffic based on IP address and TCP port. The second is [Application Load Balancer](https://aws.amazon.com/elasticloadbalancing/applicationloadbalancer/), which distributes traffic at Layer 7 of the OSI model, and can route traffic based on both TCP port and URL.

[Metricly](/product) can help you monitor your ELB deployments by integrating with AWS and giving you insight into what's really happening with your [load balancers and application traffic](/optimize-aws-route53-elb). In this blog post, we'll briefly cover what you'll need to get started with AWS and ELB monitoring, configure the Metricly AWS integration, and take a deeper dive into what metrics Metricly provides for monitoring your load balancers, and what those metrics mean.

Prerequisites
-------------

If you don't already have an AWS account with ELB set up, you'll want to take care of that first. You can find information to sign up for an Amazon account on the AWS home page. AWS provides a free tier that you can use to try out services such as EC2 and ELB.

The next step is to set up a Metricly account. [Metricly's 21-day free trial](/signup) will get you started.

Configuring AWS ELB
-------------------

Amazon provides excellent documentation to get you started with setting up ELB, so we won't go too much into that in this post. The first thing you'll want to do, though, is familiarize yourself a bit with Elastic Load Balancing in general, then decide whether you want to configure [Classic Load Balancer](https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/getting-started/) or [Application Load Balancer](https://aws.amazon.com/elasticloadbalancing/applicationloadbalancer/).

Once you've done that, you'll need to [set up an EC2 instance](/pick-perfect-ec2-instance-type/) or ECS container (with a web server installed) on the backend of the load balancer where you can route your application traffic. Netuitive's [monitoring integrates with a variety of platforms](https://docs.metricly.com/integrations/), so you can monitor your application stack and ELB all from the same interface.

Configuring Metricly's ELB Monitoring
--------------------------------------

Configuring Metricly is simple, and Metricly provides great documentation to [get you started](https://docs.metricly.com/getting-started/).

Once you're up and running, you'll need to configure the AWS integration in order to see the metrics available for ELB monitoring. Instructions to do so can be found in the Metricly documentation. Netuitive recommends using "Installation Via IAM Role," described in the documentation linked above when configuring the AWS integration. (Also, see [Getting Started with Metricly and AWS](/getting-started-metricly-aws/) for more information.)

When configuring the integration, be sure the **ELB** box is checked on the *AWS Setup* page, as illustrated below. (Now would also be a good time to configure Metricly for any other AWS services you wish to monitor by checking those boxes as well.)

![ELB Monitoring: AWS Setup](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/AWS-Setup.png)

Once you've configured the AWS integration, it will usually take a few minutes to show up in the dashboard list.

**Metricly and AWS**

Dashboards are provided by Metricly as a way to access and [visualize](https://docs.metricly.com/data-visualization/dashboards/) ELB monitoring data (and any othe metrics) collected by Metricly. You can find a high-level overview of what monitoring dashboards can do on the *Dashboards and Reports* page. For a deeper dive into using Metricly dashboards, see [AWS Monitoring Best Practices Using Pre-Configured Dashboards](/aws-monitoring-best-practices/).

-   Installed dashboards can be accessed in the Metricly interface by clicking **Dashboards**, then **Manage Dashboards**. The screenshot below shows both the *Dashboards* menu, and the *Manage Dashboards* screen.

![ELB Monitoring: Manage Dashboards](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Manage-Dashboards-1024x233.png)

-   "Starring" a given dashboard on the *Manage Dashboards* screen will cause it to appear in the *Dashboards* menu.

-   On either the *Dashboards* menu, or the *Manage Dashboards* screen, click **AWS ELB Summary** to see a high-level overview of your ELB monitoring. The next screenshot shows an example of the *AWS ELB Summary* page.

![ELB Monitoring: AWS ELB Summary](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/AWS-ELB-1024x296.png)

-   In the example shown above, there are a number of bits of information that can be gleaned from the ELB monitoring summary page.

    -   There are two ELB instances hosted in AWS region US-EAST-1. This can be seen both in *ELB Metric Aggregation* and the *ELB Data* widgets.

    -   HTTP errors are being monitored by Metricly. This indicates a likely problem with either the ELB or the backend instances. This can be seen in the *ELB Metric Aggregation* widget.

    -   An unhealthy host exists behind one of the load balancers. This is something that will need to be investigated. This can be seen in both the *Top 5 Unhealthy ELB* and *ELB Data* widgets.

-   In the case illustrated, clicking on the load balancer called "users" will pop up a context menu with two choices. Choosing **Metrics** will take us to a screen with all of the ELB monitoring metrics available, as shown below.

![ELB Monitoring: Metrics](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Metrics-1024x428.png)

![ELB Monitoring: Metrics2](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Metrics2-1024x496.png)

-   As can be seen, there are a number of ELB HTTP 5xx errors, as well as an unhealthy host behind this load balancer. It's likely that the host is either not properly responding to application requests forwarded by the load balancer, or that the host itself is down.

Each of the ELB monitoring metrics collected and presented by Metricly will be briefly discussed in the next section.

It's worth mentioning that Metricly provides further articles and documentation to help you [write better cloud monitoring rules ](/effective-monitoring-alert-rules)with Authoring Effective Cloud Monitoring Alert Rules. You can also take a look at Metricly's [best practices for more readable dashboards](/devops-dashboard-best-practices). These are suggested reading in order to better familiarize yourself with some of the best practices when using Metricly.

Collected vs. Computed Metrics
------------------------------

Before diving into each of the individual metrics provided by Metricly, a quick note on the difference between [collected metrics vs. computed metrics](/computed-monitoring-metrics) is in order.

Collected metrics are just that---metrics collected by Metricly from your infrastructure and application stack. Computed metrics are additional metrics provided by Metricly and are calculated based on the aforementioned collected metrics. Computed metrics can give you greater monitoring insight by providing information not normally available with collected metrics alone.

**ELB Monitoring Metrics Collected by Metricly**

Several metrics are collected by Metricly from AWS for ELB monitoring. They are as follows:

-   *aws.elb.healthyhostcount* is the number of healthy hosts behind your ELB. In a perfect world, you want this to be the same as the actual number of hosts attached to the backend of your ELB.

-   *aws.elb.unhealthyhostcount* is the number of unhealthy hosts behind your ELB. Generally speaking, you want this to be zero, or as close to zero as possible.

-   *aws.elb.requestcount* is the number of requests received by the ELB during a given time interval. Watch for sudden changes which may indicate potential upstream problems. The request count can also provide insights into application scale.

-   *aws.elb.latency* is the amount of time after a request leaves the load balancer until a response is received. Lower latency is better. If you see increased latency, it may indicate issues with your backend application stack that need to be investigated.

-   *aws.elb.httpcode_elb_4xx* is the number of HTTP 4xx errors generated by the ELB due to bad or malformed requests by the client.

-   *aws.elb.httpcode_elb_5xx* is the number of HTTP 5xx errors generated by the ELB due to bad or malformed requests, capacity problems because of backend issues, or timeouts due to target hosts not answering ELB requests in a timely manner.

-   *aws.elb.httpcode_backend_2xx* is the number of HTTP 2xx codes generated by the target hosts.

-   *aws.elb.httpcode_backend_3xx* is the number of HTTP 3xx codes generated by the target hosts.

-   *aws.elb.httpcode_backend_4xx* is the number of HTTP 4xx codes generated by the target hosts.

-   *aws.elb.httpcode_backend_5xx* is the number of HTTP 5xx codes generated by the target hosts.\
    (Large numbers of HTTP 4xx or 5xx responses generated by the ELB targets may be an indication of problems on the hosts, or with the application stack they support.)

-   *aws.elb.backendconnectionerrors* is the number of connections between the ELB and the target hosts that weren't successfully established. This may be indicative of connectivity issues between the target hosts and the ELB.

-   *aws.elb.surgequeuelength* is the number of requests that the ELB queues due to the backend being unable to answer requests. This can indicate capacity issues on the backend which need addressing, or there may be other issues why the backend hosts are not answering requests. This metric should be as close to zero as possible.

-   *aws.elb.spillovercount* is the number of requests that the ELB was unable to answer due to the surge queue length exceeding the maximum of 1,024 queued requests. This metric should also be as close to zero as possible.

Additional information about the metrics Metricly collects is available in the [Metricly AWS metrics documentation](https://docs.metricly.com/integrations/aws-integration/metrics/). There is also more [detailed information](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/elb-metricscollected.html) about these metrics available directly from Amazon.

**ELB Monitoring Metrics Computed by Metricly**

-   *netuitive.aws.elb.unhealthyhostpercent* is the percentage of unhealthy hosts out of the total number of hosts available on the ELB backend. Ideally, you will want this to be at zero percent.

-   *netuitive.aws.elb.backendconnectionerrorpercent* is the percentage of backend connection errors as compared with the total connections the ELB is servicing. You will want to see this metric be as close to zero percent as possible.

-   *netuitive.aws.elb.totalelbhttperrors* is an aggregation of both the aws.elb.httpcode_elb_4xx and the aws.elb.httpcode_elb_5xx collected metrics.

-   *netuitive.aws.elb.httpcodeelberrorpercent* is the percentage of ELB HTTP 4xx and 5xx errors as compared to all of the requests being serviced by the ELB. Again, you will want this metric to be as close to zero percent as possible.

-   *netuitive.aws.elb.httpcodelb4xxerrorpercent* is the percentage of ELB HTTP 4xx errors as compared to the total number of requests being serviced by the ELB. Closer to zero percent is better.

-   *netuitive.aws.elb.httpcodelb5xxerrorpercent* is the percentage of ELB HTTP 5xx errors as compared to the total number of requests being serviced by the ELB. Closer to zero percent is better. For more insight, see aws.elb.httpcode_elb_5xx above in the collected metrics section of this post.

-   *netuitive.aws.elb.totalbackendhttperrors* is an aggregation of aws.elb.httpcode_backend_4xx and aws.elb.httpcode_backend_5xx errors being generated by the backend hosts, and can be indicative of problems with the backend hosts or application stack.

-   *netuitive.aws.elb.httpcodebackenderrorpercent* is the percentage of the sum of 4xx and 5xx errors generated by the backend hosts as compared to the total number of requests being serviced by the ELB. The closer to zero percent, the better.

-   *netuitive.aws.elb.httpcodebackend4xxerrorpercent* is the percentage of HTTP 4xx errors generated by the backend hosts as compared to the total number of requests being serviced by the ELB. Once again, the closer to zero percent this metric is, the better.

-   *netuitive.aws.elb.httpcodebackend5xxerrorpercent* is the percentage of HTTP 5xx errors generated by the backend hosts as compared to the total number of requests being serviced by the ELB. Again, zero percent, or as close to zero percent as possible is best.

-   *netuitive.aws.elb.concurrency* is the calculation of the total request count being serviced by the ELB, multiplied by the average latency of requests. To quote the Metricly documentation for this metric: "*This metric expresses the level of concurrency that an ELB and its associated EC2 is currently delivering. Concurrency is given by* [*Little's Law*](https://en.wikipedia.org/wiki/Little's_law) *which is an indicator of the degree of parallelism supported by the ELB configuration. When the capacity of the system to process requests in parallel is consistently exceeded, queues grow, latency increases, and the system will begin to reject requests. This metric may be valuable for off-line analytics to determine system capacity.*"

-   *netuitive.aws.elb.surgequeueutilization* is the number of requests queued in the surge queue as compared to its maximum capacity of 1,024 expressed as a percent---in other words, what percent of the surge queue has been consumed. You will want this metric to be as close to zero (if not zero percent) as possible.

-   *netuitive.aws.elb.requestspersecond* is, simply put, the number of requests per second the ELB is servicing.

For more information on the computed metrics provided by Metricly, see the [documentation](https://docs.metricly.com/integrations/aws-integration/metrics/). If you still need further information for troubleshooting your ELB, see the AWS documentation [Troubleshoot Your Classic Load Balancer](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-troubleshooting.html) or [Troubleshoot Your Application Load Balancers](http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html).

Default ELB Monitoring Policies
-------------------------------

When you configure your Metricly AWS integration for ELB, a set of default ELB monitoring [alerting policies](https://docs.metricly.com/alerts-notifications/policies/default-policies/) will be created. They include alerting for front and backend error rates, elevated latency, surge queue utilization, and unhealthy host counts. These default policies are based on best practices when monitoring ELB and help jump start your integration monitoring.

The best way to familiarize yourself is to read the [Metricly documentation](https://docs.metricly.com/alerts-notifications/policies/default-policies/), as the docs contain detailed explanations with illustrations as to how each policy functions.

### Conclusion

Hopefully this blog post helped you get started with Metricly and monitoring your Elastic Load Balancer, as well as understanding what some of the metrics provided by Metricly mean. For further help, see the [Metricly Help](https://docs.metricly.com/) documentation. There are a number of useful articles and blog posts on the [Metricly Blog](/blog) to help you gain more insight into using Metricly with other platforms and integrations.

You can also browse through the [Metricly Community Packages](https://github.com/netuitive-community-packages) repository to see other packages and integrations available with Metricly.

Finally, if you are really starting to dig into Metricly, and using your ELB with EC2 auto-scaling groups, you might also consider reading the [Optimize Your Auto Scale Groups With ASG Tuning Report](/optimize-auto-scale-groups-asg-tuning-report).
