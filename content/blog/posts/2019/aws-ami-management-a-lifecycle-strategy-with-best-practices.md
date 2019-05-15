+++
author = "Mike Mackrory"
category = "DevOps"
date = "2019-05-14T14:39:47+00:00"
description = ""
draft = true
featured = false
featured-image = ""
layout = "single"
thumbnail-image = true
title = "Metricly’s Guide to Cost Optimization for AWS (or any) Cloud"
url = ""

+++
Like everyone else these days, you are probably running most of your workloads in AWS or another cloud. And like everyone else these days, you are probably struggling to control your AWS cloud computing costs.

If so, keep reading. This article discusses why AWS cost optimization is hard, then offers tips on optimizing costs for AWS and other clouds.

## Why the cloud is like email...

The cloud is to money what email is to time.

In theory, email is an opportunity to save lots of time. It allows information to travel quickly, and reduces the need to meet in person or go through the ritual of a phone call in order to communicate with a colleague.

As pretty much anyone living in the twenty-first century knows, however, email can end up being a [huge time sink](https://www.forbes.com/sites/annabelacton/2017/07/13/innovators-challenge-how-to-stop-wasting-time-on-emails/#675a14149788) if you don’t approach it in a wise way. The time you spend sorting through emails, trying to remember which ones you’ve answered, and following up on messages that have not received a response can quickly outweigh the time email saves you, unless you have a disciplined plan in place for using email efficiently.

In a similar way, cloud computing theoretically saves businesses money by allowing them to avoid the costs of purchasing and maintaining physical hardware. It also enables seamless scalability.

But when it comes to the real world, realizing the cost benefits of the cloud is easier said than done. If you allocate more resources than are required for a given workload, you’ll be spending money unnecessarily (and if you under-provision, you risk performance problems, so most engineers end up erring on the side of over-provisioning). The same thing happens if you choose the wrong kind of cloud service for your needs.

To make matters worse, cloud computing vendors don’t go out of their way to help you right-size your workloads or identify opportunities to save money. (You can’t blame them; they’re in the business of making money, and helping customers pay less does not make for a strong business model.) They provide basic monitoring tools and billing reports.

## The six phases of AWS cost optimization

Fortunately, by taking advantage of the data that you can pull from your cloud computing environment and bills, and implementing the right communication strategies and processes within your organization, it’s possible to achieve cost optimization in the cloud.

To help in that endeavor, Metricly has prepared an eBook, “The 6 Phases of Cloud Cost Management,” that identifies six specific stages or practices that developers and IT teams can take to help optimize AWS or other cloud costs.

The phases include:

1. **Efficiency Benchmarking**: Measuring resource efficiency in the cloud
2. **Bill Analysis**: Catching and preventing end-of-the-month surprises
3. **Idle Resources**: Discovering wasted spend that’s safest to remove
4. **Capacity Monitoring**: Detecting performance bottlenecks before your users
5. **Right Sizing**: Addressing your over-allocated resources and planning for auto-scale
6. **Planned Purchases**: Striking a balance between deep savings and infrastructure agility

![Outlines the steps of cost optimization](/Group 8.jpg "Cloud Cost Journey")

Let’s walk through what each of these phases entails.

### Efficiency Benchmarking

This phase refers to the initial assessment (or baseline) of your organization's cloud resource utilization.  During this phase, take stock of your inventory and record measurements of metrics like CPU, Memory, and IOPs utilization. These initial findings  inform your cost optimization projects and help track success over time.

In an organization of any size, it can be easy for past conditions and current progress to become unclear or even forgotten. Setting efficiency benchmarks ensures stakeholders can point to an objective, data-driven measure of the state of their cloud spend--reducing the need for extra meetings and research. Traditionally, auditing and reporting on this topic has been difficult because such information was not managed effectively. That's because most of these measurements had to be taken manually. Metricly wants to change that with its tools.

As Metricly’s eBook explains, there are several specific steps that businesses can take to help improve Efficiency Benchmarking in ways that lead to better cloud computing cost optimization:

* **Efficiency indexing**: This is a feature offered in Metricly that provides a score for your overall cloud computing cost efficiency. By using your Efficiency Index to track your cloud’s cost performance, you can more easily determine whether your efforts to optimize AWS costs are paying off at the level of per-unit economics, even if your overall cloud footprint increases in size.
* **Benchmarking**: To get a full picture of how well your cloud cost optimization efforts are paying off, it’s helpful to be able to compare yourself to others. Metricly allows you to track how your Efficiency Index compares to that of anonymized businesses similar to yours, so that you can place your performance within a real-world context.

### Bill analysis

Most cloud providers offer their own helpful tools to analyze your overall cost, but getting proactive saved reports, detecting sudden changes, or analyzing your cost on a per-instance level is challenging using these tools.

![](/cost dashboard.png)

With Metricly, you can take a more systematic approach to bill analysis. Metricly allows you to drill down into specific cost categories and identify change over time. You can also configure email reports, which act as alerts to notify you when your spend within certain subcategories changes suddenly. This helps you to avoid an end-of-month surprise.

### Idle resources

Finding and addressing idle resources (meaning resources that are turned on but not currently being used within your cloud workload) is an easy step toward reducing costs. Metricly helps you do this by sending automatic notifications when a resource becomes idle or detached.

![](/left-nav-cost-manage-idle-1.png)

By identifying idle resources immediately, your team can take prompt action to shut them down or move them to a less costly service tier. One of the simple benefits of Metricly’s approach is proactive emailed reports to keep it top-of-mind and not let it linger for weeks.

### Capacity monitoring

Capacity monitoring allows you to pinpoint performance bottlenecks as you right-size your environment, which minimizes your risk. This phase not only helps to resolve performance problems before they impact end-users, but also to gain confidence that problems will be detected quickly should you make a configuration change to a cloud resource that leads to a performance bottleneck.

Metricly offers built-in capacity monitoring algorithms that use machine learning to identify bottlenecks and send notifications accordingly. Alerting policies are based on industry best practices, so you’ll get meaningful alerts without having to configure them manually; you can, however, customize the alerting policies if you choose.

### Right-sizing

Right-sizing, or ensuring that your cloud resources are sufficiently provisioned to ensure proper performance (while at the same time not being over-provisioned), is a complex phase. Attempting to do it by hand is not feasible — not only because it would require so much manual effort, but also because there are so many AWS configurations, and so much real-time data to interpret, that engineers cannot reasonably be expected to set the right size for every resource in various computing dimensions within a fast-changing cloud environment.

Metricly helps to automate the process by analyzing your cloud workloads in real time and making recommendations for right-sizing them while considering long term workload patterns. Metricly’s analysis is especially important to help you allocate resources appropriately prior to committing to a long-term reservation.

### Purchase planning

Taking advantage of AWS Reserved Instances is a great strategy for AWS cost optimization. However, the challenge is determining how many resources to reserve before you commit. If you choose too little, you won’t have enough reservations to cover a high enough percentage of your resources; too many, and you will be stuck paying for what you won’t even be running, undercutting the value of choosing a Reserved Instance in the first place.

Metricly can help in two ways. First, we analyze your instance usage on an hourly (instead of daily) basis to prevent you from over-buying during peak hours or being stuck with unused reservations during off-peak hours. Second, with every standard product subscription, Metricly offers Premier support services, which provide hands-on support for choosing the right reservation purchasing strategy.

## Metricly Premier Service

As noted above, Metricly offers [Premier support service](https://www.metricly.com/premier-services/) with every standard subscription. By providing personalized support for project planning and cost-analysis coaching from our team of experts, Premier service is another way that Metricly helps organizations optimize cost in complex cloud environments.

## Learn more about mastering AWS cost optimization

The cloud cost optimization tips that we’ve outlined above represent just a summary of the information you’ll find in “The 6 Phases of Cloud Cost Management.” For details and more tips on reducing your cloud-computing bill without compromising performance, check out the free eBook.