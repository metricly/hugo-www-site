---
author: "Mike Mackrory"
date: "2019-03-01"
title: "How to Right Size EC2s and Maximize Your AWS Budget"
category: "Cloud Cost Management"
url: "/new/"
layout: "single"
featured-image: "tagging-best-practices.png"
thumbnail-image: true
featured: true
---

If you've deployed an application or service to the Amazon Web Service (AWS) cloud, you've probably made use of an EC2 instance. One of the decisions that you had to make before you could start a new instance was which instance type to use. Choosing an instance type can be a complicated process. AWS organizes their instance types into instance families, and within an instance family, there are varying sizes from micro to 32xlarge.

Availability of instance types also varies from region to region, but the primary factor differentiating each instance type is a combination of:

-   Compute power or CPU

-   Memory

-   Storage capacity and type of storage

-   Network connectivity and performance

In this article, we're going to be looking at compute power. We're going to talk about the challenges of measuring and comparing compute power in a virtual environment, and we'll look at different ways in which AWS has tried to make it easier for consumers to make informed decisions about their instance types.

### The Challenge Presented by the Virtual Environment

When you deploy an EC2 instance, you're renting capacity from one of the AWS data centers. EC2 instances are virtual machines hosted on powerful servers that you share with AWS customers. One of the benefits of using the Virtual Machine model is that you as a customer don't need to be aware of the specifications of the underlying server infrastructure.

The issue presented by this is that it can be challenging to compare instance types based on their specifications. With a virtual machine, you are allocated a portion of the processing power from the host machine. An allocation of processing power isn't the same as a physical processor, and so AWS needed a way to quantify this allocated capacity and allow customers to compare different instance types with each other. When EC2 first launched, compute power was presented as an ECU value (or an EC2 Compute Unit).

### What is an EC2 Compute Unit?

Amazon came up with the concept of an ECU because they wanted a way to provide a consistent CPU capacity for their instances, regardless of the underlying hardware. One EC2 compute unit is similar in power to a 1.0 - 1.2 GHz 2007 Intel Xeon or AMD Opteron processor.

From 2006 until 2014, the ECU was the standard measurement of processing power on all EC2 instances. For the most part, this resolved the problems with comparisons between different instance types and allowed AWS to configure instances on newer infrastructure and still provide the equivalent capacity of instances on older infrastructure.

Benchmarks conducted at the time found that the ECU measurement was generally equivalent, but they did notice an improvement in performance in direct correlation to an increase in the number of ECUs. One hypothesis is that this improvement was due to a decrease in the number of instances which were hosted concurrently on a host server. You can view the results of one of these benchmark studies [here](http://blog.cloudharmony.com/2010/05/what-is-ecu-cpu-benchmarking-in-cloud.html).

### ECU or vCPU?

One of the challenges faced by AWS was that in introducing the ECU metric into their environment, they needed to educate new and existing customers, and this wasn't always an easy concept for some customers to grasp. Traditionally, virtual machines have measured their processing power in terms of Virtual CPUs (or vCPUs), and so in 2014, AWS exchanged the ECU metric for the more standard vCPU.

One of the benefits of using the ECU to measure processing power was that it established a standard way of measuring processing performance among all instance types. However, because it isn't a standardized term, it also had a tendency to be misunderstood.

### Factors Which Can Affect The Power of Your vCPUs

The most significant factor which affects the processing power of an instance is how the vCPUs are configured on the instance type. If we compare the general-purpose M4 instance types with the compute-optimized C4 instance types, you'll notice that the processor specifications are different.

|

M4 General-Purpose

 |

C4 Compute-Optimized

 |
|

-   Up to 3.1 GHz Intel Xeon Platinum Processor
-   [Intel AVX†, Intel AVX2†, Intel Turbo](https://www.google.com/url?q=https://aws.amazon.com/ec2/instance-types/%23Intel&sa=D&ust=1552479354055000)
-   [EBS-optimized](https://www.google.com/url?q=https://aws.amazon.com/ec2/instance-types/%23EBS&sa=D&ust=1552479354055000)
-   [Enhanced Networking†](https://www.google.com/url?q=https://aws.amazon.com/ec2/details/%23enhanced-networking&sa=D&ust=1552479354056000)

 |

-   2.9 GHz Intel Xeon E5-2666 v3 Processor
-   [Intel AVX†, Intel AVX2†, Intel Turbo](https://www.google.com/url?q=https://aws.amazon.com/ec2/instance-types/%23Intel&sa=D&ust=1552479354057000)
-   [EBS-optimized](https://www.google.com/url?q=https://aws.amazon.com/ec2/instance-types/%23EBS&sa=D&ust=1552479354057000)
-   [Enhanced Networking†](https://www.google.com/url?q=https://aws.amazon.com/ec2/details/%23enhanced-networking&sa=D&ust=1552479354058000)

 |

One of the other factors which can affect processing performance is the underlying hardware. If you are on a Linux instance, you can run the following command to find out the exact CPU running on the host machine.

    $ cat /proc/cpuinfo | grep "model name"

Executing this command on two different machines might give results similar to those below:


    i-5560.... model name: Intel(R) Xeon(R) CPU E5-2650 0 @ 2.00GHz

or

    i-bb23.... model name: Intel(R) Xeon(R) CPU E5506  @ 2.13GHz


If performance is critically important for you, one option might be to execute a similar command when bringing up a new machine, and discarding instances which are brought up on older hardware.

### Summary

Whether you're talking about ECUs or vCPUs, it's important to understand the meaning of the provided measurements for your instance type, and how they might compare to physical processor types. If performance is of the utmost importance, you will need to look at the detailed specifications for each instance type to ensure that you're selecting the best available processing power for your application.
