---
author: Mike Mackrory
date: ADD DATE
description: TBD
title: The New EC2 Pricing Tool from Metricly and How It Stacks Up
category: DevOps
url: "/ec2-instance-pricing/"
layout: single
featured-image: ''
thumbnail-image: true
featured: false

---
Amazon's Elastic Cloud Computing (EC2) has revolutionized our industry. Distilled down to its most basic components, provisioning a new server is as simple as selecting an instance configuration and then waiting for a minute or two while AWS creates and deploys a new instance for you.

It is in the determination of the right configuration for your EC2 instance that the process becomes complicated. Between processing power, memory, storage, deployed region, and other options, your instance configuration is one of over 24,000 possible configurations, each with varying costs.

Last year, I wrote an article about different factors you should consider when [selecting your EC2 configuration](https://www.metricly.com/ec2-instance-types/), but often the most critical factor which affects instance type selection is the cost.

Metricly just released a free [EC2 Instance Pricing Tool](https://tools.metricly.com/), and I thought it would be interesting to see how it measures up against other free pricing tools available online. In this article, I'm going to compare and contrast the new Metricly tool against the pricing tools available from AWS and PromptCloud.

### EC2 Pricing

Let's take a quick look at the factors which contribute to determining the price of an EC2 instance. AWS provides different families of instance types based on different needs. Some families support general-purpose computing, while others are optimized for processing, memory, storage, and other purposes.

Within each family, different sizes of instances offer increasing levels of processing power, available memory, storage capacity, and networking bandwidth.

Finally, AWS pricing is generally quoted for On-Demand Instances. Users may also elect to use Spot Instances or Reserved Instances. Spot Instances allow users to take advantage of unused capacity within Amazon data centers. A user may be able to use an m4.xlarge instance for the price of an m4.small; however, Spot Instances may be terminated at any time, following a 10s warning.

Reserved Instances allow users to reserve capacity ahead of time at a discounted rate. The catch with Reserved Instances is that the user is contractually obligated to pay for the capacity whether or not it is used, and with terms ranging from one to three years, this can have disastrous financial implications if the needs of the organization change within that period.

### Manually Determining the Price of an Instance

You can determine the hourly price of an instance without using a tool if you visit the [AWS EC2 Pricing](https://aws.amazon.com/ec2/pricing/on-demand/) page. Selecting the Operating System and AWS Region will provide you with a list of matching instance types, organized by instance family and type. The hourly price is shown in the right-most column for each instance configuration.

![](https://lh6.googleusercontent.com/2UEuT0YtGB6KkQKfyngsOpTzFbKrh1rqub9vLfv7qE4RjEnGOwlk1pPpixrQDD3tscvQF8jVTKqcN6sS_U1XJs02YspxKxUvU2MIHYUkfUV-glzFXghn_iF7iFWPlgajZtf3tnQK)

Fig. 1 Using the AWS EC2 Pricing Page

This approach requires you to know what you're looking for, and be aware of the options and additional costs which might be associated with each instance.

### Pricing Calculators from AWS

Of the three pricing calculators I reviewed, the[ new calculator](https://aws.amazon.com/blogs/aws/check-it-out-new-aws-pricing-calculator-for-ec2-and-ebs/) from AWS was the most comprehensive tool of the three. As thorough as the calculator is, I found that it required familiarity with AWS services, and it took me a few tries before I was able to generate a quote. Once I received the quote, I observed the lowest-cost instance for my desired specification, and I could experiment with different pricing models, attached EBS storage, and see the total monthly cost.

From the [AWS Pricing Calculator home page](https://calculator.aws/#/), I clicked on the Create Estimate button and then selected my region. A new quote is shown, to which you can add different services. This calculator includes services in addition to EC2, such as Amazon Athena and AWS Storage Gateway. After selecting Amazon EC2, I then clicked on Configure.

A Quick estimate process and an Advanced estimate process are available. Then, the user is prompted to select an operating system, instance count and instance characteristics. What I liked about this tool was the functionality which allowed me to see different pricing options, and the ability to create a comprehensive estimate with different AWS services. I would have liked to have the ability to compare different instance types within a comparable price range and with similar capabilities.

![](https://lh4.googleusercontent.com/omm9W0DcDuHaTbOhwoCkhy4219cV80WidQ16yIalO07FBhzNyqk8ux_LIwIKztSpRnRIDuckveTBuRiwnsf9gR3bPwxPPdKrG1ORWsXamlSYhdxvVVcsRl7-Gu3r8jw7tKAPBNAt)

Fig. 2 An Estimate with the New AWS Pricing Calculator

Source: [calculator.aws](https://calculator.aws/#/)

### PromptCloud Pricing Calculator

Moving from the AWS Pricing Calculator to the[ Pricing Tool available from PromptCloud](https://www.promptcloud.com/ec2-ondemand-vs-reserved-instance-pricing.php), the most apparent contrast was how simple and easy to use the PromptCloud tool was. A toggle option allows the user to select the operating system, and drop-down selection boxes enable you to choose the region, category, instance family and instance type.

Sliders allow the user to select the number of days for the estimate, and the number of hours the instance will be in use each day. The tool is designed to compare On-Demand pricing with Reserved Instance pricing, and it accomplished this goal very well. Selecting similar criteria as the AWS calculator, I was able to build the comparison below, with significantly more ease than the AWS tool.

![](https://lh3.googleusercontent.com/TgaYharpI_oyQFlCwHuQjUaeGyp22CM-oJ9BxIwplXQLOm8fMIkIVqyJKzwtlaoPqs9a1uAd0Ls1cF5KOJ1SgktPWfqopyHsip7VFXQBcsHRntA9fYwyOeJKMh0ZdbmzcgsuGUZa)

Fig. 3 A Comparison of On-Demand vs. Reserved Pricing for a t2.large instance.

Source: [promptcloud.com](https://www.promptcloud.com/ec2-ondemand-vs-reserved-instance-pricing.php)

One glaring problem arose when I tried to create a comparison using the same criteria for the quote I built using the AWS Calculator --- the newer T3 instance family was not available. This omission indicated that as much as I liked this calculator, it didn't appear to be receiving regular updates. Unfortunately, this is a problem common with many free calculators which are available online.

### Metricly Instance Pricing Tool

The final calculator I reviewed is the new [EC2 Instance Pricing Tool](https://tools.metricly.com/) from Metricly. In contrast to the previous calculator, this tool has the current pricing for EC2 instances and updates this data on a weekly schedule.

The tool allows the user to select the Region and Platform like the other tools, and then enables the user to select allowable ranges for vCPUs, Memory, and Pricing. Advanced filters allow the user to further define the network bandwidth, storage capacity, and EBS throughput, among other options.

The search results are updated as options are selected, and the user can customize the columns to address their needs better. Columns are sortable, allowing the user to sort by the characteristics they feel are most important.

A search for a General Purpose Linux instance type in US-East-1 with 1-2 vCPUs and 4-8 GB of memory displayed 10 results which I could compare and contrast.

![](https://lh3.googleusercontent.com/aEXoh-uPyJYH49JH7JEw-sMUDxK_GFcld3O1PF1otyWo_Auw6Jl9eVMKO73Gr8WmJJG1m5J2wpEyn2TEYCw73eqsMesDyOBnUbTbnbGaC6P8W0YIM36lpzSelOqGkr_q4W5dFYJr)

Fig. 4 Viewing General Purpose Instances with Specific Criteria in US-East-1

Source: [tools.metricly.com](https://tools.metricly.com/)

What I liked about the Metricly tool was the ability to compare similar instances within clearly defined criteria ranges. The results also showed more comprehensive information about the instance results in comparison to both other tools reviewed. I also liked that I could customize the results to show only the information that was most important to me.

Characteristics of the other tools which I liked but weren't available in the Metricly tool were the ability to contrast and compare price differences for Reserved Instances, and I would like to see the cost for the instance over a more extended period, such as a month.  A few cents per hour don't seem like much until you expand them over time.

### Conclusions

Building a user-friendly pricing tool which meets the needs of all users is a tough task, and you have to find a balance between displaying all the options for a specific instance type, and displaying just enough information for the user to make the decisions they are responsible for making.

Which tool is the best depends on why you need a pricing tool. The AWS Pricing tool provides a comprehensive view of the costs for the cheapest instance type that meets the criteria you submit to the system. The Metricly tool allows you to compare similar instance types and see that, for example, if you use an m5.large instead of an m4.large, you'll save $0.004 an hour and have access to increased bandwidth and EBS throughput.