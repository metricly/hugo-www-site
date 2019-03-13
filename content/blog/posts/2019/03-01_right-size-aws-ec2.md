---
author: "Lawrence Lane"
date: "2019-03-01"
title: "How to Right Size EC2s and Maximize Your AWS Budget"
description: "Learn exactly how to measure the efficiency of your infrastructure and plan an AWS EC2 right-sizing project. This step-by-step guide will clearly outline how to match your infrastructure workload, to AWS capacity."
category: "Cloud Cost Management"
url: "/right-size-aws-ec2/"
layout: "single"
featured-image: "tagging-best-practices.png"
thumbnail-image: true
featured: true
---

In this article we are going to explore how to measure the efficiency of your infrastructure and plan an EC2 right-sizing project. When trying to fit right sizing into your already busy workload, a little pre-planning and organization goes a long way.

Here's a quick checklist of things to address before right sizing an EC2:

1.  Make sure your resources [are properly tagged](/aws-tagging-best-practices/). This is a critical (and often overlooked) step to isolating specific areas within your application environment for analysis.

2.  Install an agent on your EC2s (like our open source [Linux agent](https://docs.metricly.com/integrations/agents/linux-agent/linux-standard-install/), for example).

3.  Define a new gate in your continuous delivery workflow during staging and before release of your code to production. This adds governance for checking any changes in your application's capacity requirements before shipping to production.

4.  Familiarize yourself with [the latest EC2 generations](https://aws.amazon.com/ec2/instance-types/). New generations are routinely published and often offer better prices.

These four items help eliminate potential project bottlenecks so that your current and future sizing goals are completed with ease. Now let's get started.

### Defining your EC2 sizing project goals

The first and most basic step to right sizing is creating a well defined project goal. A large environment often consists of several different applications, web servers and databases, all relying on various combinations of spot, reserved, and on-demand instances. Here's a preview of what your environment could look like before narrowing your scope down to just one application:

![](https://lh3.googleusercontent.com/VWXnY7dzABG15HfoM8cW4CiFBPuE5mrxJhfS_4g1yimjWH7hvI-mu0EtThBUVpYbAc7j4SKRrKjERtZFQNKguQ8JN09Iq-x93iWGMvLGLOBQ2I5pJLCZ2f2Lftqce-9dO6XBP1zg)

That's a lot of instances (and sizing opportunities) to take in all at once. So, where do you start? Start by asking yourself these questions:

-   Which part of my environment is less likely to change in coming months?

-   Are any of my EC2 instance reservations about to expire offering a window for change?

-   Do I have applications on old or soon-to-be-retired EC2 generation instances?

-   Can I obtain significant savings from sizing just one part of my environment?

It's worth conferring with your engineering management to avoid investing time and resources sizing a part of your environment that's about to change soon. That change could be due to the retirement or introduction of a new technology in your stack. You should pick an area where the architecture is expected to be stable for a few months.

Having enough time to[ research new reservation purchases ](/aws-reserved-instances-mistake/)is an important step in this process. With reservations, the main goal is to commit predictable workloads to the perfectly sized candidate--eliminating the risk of committing to resources that you won't need down the road.  Try to have your sizing exercise completed a couple of weeks before your reservation subscriptions are up for renewal.

Another consideration is that old instance generations get more expensive as AWS prepares to phase them out. This incentivizes users off the old generation and onto the new one. Staying up-to-date on the Amazon EC2 instance lifecycle can help you decide when it's best to wait versus upgrade aging application infrastructure.

Identify the area of the largest spend within your environment and where you can derive the biggest savings and the best ROI for your time investment. While planning your sizing project, you may find that resizing one area of your application environment could achieve 10-30% or more in AWS cost savings all by itself. This may be because that area uses the most computing resources, or because it was over-provisioned at the onset of their deployment to ensure a positive user experience and never adjusted.  

### Analyzing exact usage data for your EC2 instances

For the rest of this article, we're going to focus on sizing general purpose On-Demand instances.

AWS CloudWatch provides utilization metrics for CPU, and I/O utilization for each volume attached to your EC2, as well as network data for the network interface cards attached to your EC2. However memory utilization is not provided as a metric so you would have to either deploy an agent to measure it or make an assumption on your own (without any measurement). Either way, you must factor in all aspects of your computing resource needs before picking a type and size for your EC2.

Metricly's[ EC2 Recommendation Report](https://docs.metricly.com/reports/reports-ec2-recommendations/) ingests instance usage data from Amazon CloudWatch to analyze your historic capacity usage and formulate ideal instance candidates. These sizing recommendations are further adjusted based on your chosen target utilization levels, data aggregation method (ex. Min, max, average or 95 percentile), and a few other other constraints that can be added.

![](https://lh6.googleusercontent.com/5OoD9sMseTQkwz1DXSR5YAC9CgZvMBhqGAQXrAowkKK3tYnqewHTkfm7G3X332w7ybWt4MQ4Os7VV0B1Hs4oswi6ratO8n0pK7fJ25KLuWhHpumCEGnQv16av6d2_WuK9bnAhbdN)

The screenshot above shows a user searching for EC2 recommendations that allow target CPU and Memory utilizations to be at 95% on average, 95% of the time. In the event that an agent is not deployed to measure memory utilization then a manual assumption can be made for purposes for Metricly's recommendation. In other words, you can tell the recommendation engine that it should assume that 80% (as an example) of the memory was used on average over the past week.Whether you use an agent to measure memory utilization or make an assumption manually, both are represented visually by either triangles and circles to give you context, like so:

![](https://lh6.googleusercontent.com/TvPeigdVd2meKikyIMqcxFijZK5oUlm0TnjYK8jS_2owC-HZXS-R3oaJDvHVl4AK-E1G9hH3Z8RN0X25gRD75qLHaVHK6jDcSRyupXT0tpXIjJbSJiVe233jNqvVIY2-9eNplGXL)

Adjust the constraints used by Metricly's recommendation engine to strike a balance between savings and peace of mind.

### Selecting EC2 sizing candidates based on capacity utilization & needs

Once you have established usage expectations for your new instances, you can draw conclusions about the kind of resources they require. Perhaps the general purpose EC2 family is not an ideal fit for your application's workload: it needs more memory, but less CPU. Compare the prices of memory optimized instance types and sizes against the original general purpose selection. You can do this and price other instances with free online tools like[ Metricly's EC2 Pricing Calculator](https://tools.metricly.com/).

Metricly's EC2 Recommendation report automates this research phase and proposes new types that factor in target utilizations, instance family constraints, and size needs.

![](https://lh4.googleusercontent.com/eZxkvGRm8aZebx88d3su0DHs7lD7aOHtH9C8oQHPgvb5L_-l32PozJE-vw9_XBhZPGXpUvY7EJN7f-ry85fVNXwoYhj02BNA9nsknwW4S9geE1CwBmuz7Qr0kAo2dqUy1Sgl6e02)

In this example, we have constrained the EC2 Recommendation report to look for any candidates matching the r instance type. Notice, however, that the proposed type is an r5a.large. The a means that this instance uses an AMD chipset instead of intel; although these are indeed about 10% cheaper than a standard r instance, it is important to make sure your needs are compatible. If you aren't sure, filter out AMD instances and compare. Adding and re-factoring constraints to discover other sizing opportunities is quick and easy.

![](https://lh3.googleusercontent.com/ekfWQzof90V5i7Nac2mieFrWvsdqbPJS9lWvri6d2HqOyuuMAdrLyoW3ZE961jDIMiXFIJKa1JeFuM-KLHAbSKOcVf5P2c6taGyKuzXZoQjjYHAwpbGBDsxpZCYOE1wkmWqJRZrM)

Continue dialing in your constraints and target utilization until you are satisfied with the savings and capacity offered by the proposed recommendation. If using Metricly's EC2 Recommendation Report, these results can be emailed or exported and the report saved to share with stakeholders. You can also set up a daily email to stay on top of rightsizing opportunities.

### What comes after sizing your EC2s?

Follow up on the changes made to your environment by monitoring the resources you have resized--especially if capacity changes were made based on memory utilization assumptions instead of measured historical data. With Metricly, you can use out-of-the-box policies (or create custom ones) to [monitor your infrastructure](/monitoring/) and catch performance bottlenecks in the same platform that [optimizes your AWS bill](/aws-cost-tool/).

Consider purchasing EC2 reservations once you are confident in the capacity changes you have made. Doing so will increase your savings, creating opportunities for your business to reinvest and focus on accelerating growth.

### EC2 Resources

Want to learn more? Here's a few free EC2 resources we've made to help you:

-   [EC2 Instance Pricing Tool](https://tools.metricly.com/)

-   [Ultimate Guide to EC2 Instances](/ec2-instances/)

-   [AWS Tagging Best Practices](/aws-tagging-best-practices/)

-   [EC2 Instance Types -- 6 Things You Need To Know Before Selecting](/ec2-instance-types/)

-   [Mistakes to Avoid with AWS Reserved Instances](/aws-reserved-instances-mistake/)
