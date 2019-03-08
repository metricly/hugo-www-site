---
author: "Steve Tidwell"
date: "2017-02-21"
title: "Configuring Route53 & ELB to Optimize AWS"
description: "Here’s how to configure Route 53 and Elastic Block Storage (ELB), two popular AWS products, to help you automate and optimize AWS."
category: "DevOps"
url: "/optimize-aws-route53-elb/"
layout: "single"
---


In this post, we're going to talk about using Amazon Web Services (AWS), specifically Route 53 and ELB (Elastic Load Balancing) to optimize AWS performance and availability. In addition, we'll touch upon how using [Metricly](/) can help you achieve your performance goals.

Optimizing AWS performance and availability can be time-consuming and difficult---especially with the rapid growth and adoption many DevOps teams experience.

It can take all of an engineering team's resources just to roll out new features and keep a web service running, meaning user experience often takes a backseat. Businesses suffer due to users leaving the service in favor of a better-performing competitor.

Very frequently, one of the things most lacking in an engineering team is the human resources to maintain high application service levels while still deploying on a weekly, daily, or even hourly basis. One of the most critical issues tech teams deal with when building and managing an application is automation. Automation can help lighten the load on the team, and allow them to focus efforts on the product itself, not the infrastructure surrounding it.

One of the easiest ways to address this is by leveraging AWS services to handle the automation for you. AWS provides a number of services that obviate the need for configuring your own internal or external services, and handling failover gracefully when things break. Here's how Route 53 and Elastic Block Storage (ELB), two popular AWS services, help you automate and optimize your environment.

Amazon Route 53
---------------

[![Optimize AWS Apps: Route 53](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Route53.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Route53.png)

Using [Amazon Route 53](https://aws.amazon.com/route53/) for DNS can be a powerful tool for application optimization and availability. In the past, admins would set up a DNS server or two, add some records to the zone file to point to application endpoints, and that would be that.

Problems would occur when those DNS servers became unavailable due to a server outage, and web clients couldn't resolve endpoint names to IP addresses. On top of that, regional network or datacenter outages where the DNS servers were located could make the servers unavailable, even if they were working perfectly well.

Even without outages, locating DNS servers in a single geographic region could introduce application latency while clients resolved DNS requests with servers not located in their region.

Round-trip times in North America can be some 10s of milliseconds, while times between continents can be in the low 100s of milliseconds. Positioning DNS servers near your web clients can help decrease that latency. If the DNS servers are deployed to multiple disparate geographic regions, then higher availability can also be maintained by avoiding regional outages.

Amazon Route 53 does this for you by maintaining DNS servers in multiple globally located Points Of Presence (POPs). Route 53 also provides a single web interface (or API for those so inclined) via which that DNS can be managed. Updates to the DNS can be deployed globally in just minutes.

In addition to better round-trip times and higher availability, using Route 53, it's possible to direct and failover traffic on a global scale using the same service. This is done by means of different types of DNS [routing policies](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html).

As an example, let's assume you set up your application stack in multiple separate global regions on Amazon EC2. With a [latency based](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-latency) routing policy, traffic can be directed to a datacenter point of presence for your application with the lowest latency for a web client. Using a [geolocation-based](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo) routing policy, traffic from clients in specific geographic regions, such as a country, can be directed to desired points of presence closest to that country.

Another type of routing policy is a [failover routing](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html#dns-failover-failover-rrsets) policy. With a failover policy, you set up a health check using Route 53 to monitor your application endpoints. If one of your endpoints becomes unavailable, Route 53 will automatically failover traffic to an alternate endpoint.

Managing a global DNS infrastructure with multiple levels of indirection via routing policies to different application endpoints can be complex. To help with this, Amazon has provided tools such as [Traffic Flow](https://aws.amazon.com/blogs/aws/new-route-53-traffic-flow/) to make that job easier. Traffic Flow allows you to set up different routing policies in an easier-to-manage format than manually creating and updating DNS records via the Route 53 dashboard.

Elastic Load Balancing
----------------------

[![Optimize AWS Apps: Elastic Load Balancer](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ElasticLoadBalancer.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/ElasticLoadBalancer.png)

At a more local level, another tool to leverage is the use of Amazon's [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/). ELB automatically scales based on demand, so you don't need to worry about sizing your load balancers to handle large amounts of traffic when it's unnecessary.

By placing your EC2 instances in multiple availability zones in a given region, you can [cross- zone load balance](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html) and increase application resiliency in case of availability zone failure in a given AWS region. ELB also performs [health checks](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html) on instances where it routes traffic, so if an instance becomes unhealthy, it will stop routing traffic to it and instead route traffic to other instances registered with the ELB.

Furthermore, you can reduce compute overhead on your EC2 instances by [terminating SSL](https://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/) on the ELB instead of your instances. This frees up resources within your EC2 footprint to work on other things. As an added bonus, Amazon does not charge extra for terminating SSL on the ELB, so this provides a cost savings that you can't realize if the SSL is instead terminated at the EC2 level.

It's also easier to deploy your SSL certs to your Elastic Load Balancers using [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/). This lowers SSL administration overhead by allowing you to centrally manage your SSL certs, and deploy them to integrated services such as ELB.

Metricly provides metrics on ELBs, and these can all be seen [alongside](/getting-started-metricly-aws/) other AWS metrics such as EC2 and EBS.

*Editor's note: In addition to ELB, EC2, and EBS, Metricly offers support for a number of other AWS products. For more information, see* [*our documentation*](https://help.netuitive.com/Content/Integrations/aws.htm)*.*

Optimize AWS Availability and Performance
-----------------------------------------

For many teams, optimizing AWS application availability and performance can present a daunting challenge. By automating some commonly required infrastructure management tasks through the use of Route 53 and EBS, you can achieve better uptime and happier users.
