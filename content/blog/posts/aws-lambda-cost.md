---
author: "Mike Mackrory"
date: "2018-11-05"
title: "AWS Lambda Cost—Your Guide to Understand, Calculate, and Optimize"
category: "Cloud Cost Management"
url: "/aws-lambda-cost/"
layout: "single"
---

In this article we’ll help you get an understanding of AWS Lambda cost, and how it is calculated. More specifically, we’ll cover the relationships between configuration and cost and help you build strategies to optimize both cost and performance.

Since its release four years ago, AWS Lambda has enabled organizations to move their applications into a serverless architecture. The ability to build a system made up of small, on-demand units of functionality is especially appealing to companies that want to increase scalability and reduce costs.

Whether your organization is already starting to use AWS Lambda for its serverless infrastructure or you’re trying it on side projects, read on for everything you need to know about the cost of AWS Lambda.

Related articles:  
[AWS Tagging Best Practices](/aws-tagging-best-practices/)  
[How To Use The AWS Pricing API](/aws-pricing-api/)


### Lambda Configuration and Its Effect on Cost Calculation
Lambda configuration appears to be very simple. The configuration for a Lambda function consists of specific memory allocation and a timeout value. The allocation of CPU capacity for the function is done proportionally to the amount of memory allocated. Thus, increased memory allocation also means increased CPU allocation, which can improve the performance of a processing-intensive Lambda function.


![alt text](/wp-content/uploads/2018/11/image4-300x288.png "post-image")


The cost of a Lambda invocation is calculated based on the allocated memory multiplied by execution time. Execution time is measured in 100ms blocks and is always rounded up to the next full block. Therefore, a function which completes its execution in 102ms and a function which completes its execution in 189ms incur the same costs.

Optimizing costs for a Lambda involves balancing memory allocation with execution time. A key ingredient for this optimization is getting insights into memory and execution time for your Lambda function. Allocating additional memory to a Lambda function may improve performance in some cases, but in other cases, the performance of the Lambda may depend on external factors — in which case, allocating additional memory increases the cost of an invocation without improving its performance. Knowing what factors affect the performance of your Lambda function is another crucial ingredient in the optimization process.

### Understanding Lambda Performance
Before we consider ways to optimize performance and cost, we need to be able to measure the performance of our Lambda, both concerning resource usage and duration of the invocation. CloudWatch logs are generated for each invocation, and contain information which we can use to determine how well the Lambda performed.

The log entry below shows the results for an elementary Lambda function.

```
REPORT RequestId: d79cce22-dadf-11e8-a807-8b11536d9dda
Duration: 20.38 ms Billed Duration: 100 ms
Memory Size: 128 MB Max Memory Used: 44 MB
```

Since 128 MB of memory is the lowest amount you can allocate to a Lambda function, we would be unable to save money by reducing the memory allocation to this particular function, even though it has only consumed 44 MB for the invocation. The execution of the Lambda took 20 ms, which is well within the minimum billing time of 100 ms.

Let’s consider some use cases where adjusting the configuration of the Lambda function affects how much each invocation costs.

### Optimizing a Processing-Intensive Lambda Function
For this first example, I wrote a Lambda function that calculates the first 10,000 numbers in the Fibonacci series, logs each number, and returns the list of all numbers in the response. Executing this function with 128 MB of allocated memory resulted in the following:

```
REPORT RequestId: 683b1acf-db15-11e8-8e4f-6d9601278fb2
Duration: 1260.33 ms Billed Duration: 1300 ms
Memory Size: 128 MB Max Memory Used: 24 MB
```

CloudWatch Logs for Process-Intensive Lambda Invocation

This function illustrates the relationship between memory allocation and CPU allocation for a Lambda function. As I increased the memory allocation for the Lambda, I could see the processing time for the Lambda decrease significantly. When increasing the memory in incremental steps I could see the duration of the function decrease, while the memory used by the function remained consistently between 24 MB and 35 MB. It wasn’t until I allocated 3008 MB of memory that the function was able to execute in less than 100 ms.

![alt text](/wp-content/uploads/2018/11/image2.png "post-image")

By maximizing memory allocation — and through it, the CPU allocation for the Lambda function — I was able to increase the speed of the function, which improves the user experience, but it has significant implications on the cost of each invocation.

There is a linear relationship between memory allocation and cost. On the AWS free tier, 128 MB of memory costs $0.000000208 for 100ms, and 3008 MB of memory costs $0.000004897. Those numbers might seem incredibly small, but they can add up for a function that could be called thousands or millions of times. Understanding how the allocated resources affect the overall cost of the function is essential when determining if we want to optimize for speed or cost.

Let’s look at the same data contrasted with the cost for 100,000,000 invocations of the function to see the relationship between price and the memory allocated. The duration on this graph is the actual duration of the function to execute — while billing is done, rounded up to the next 100ms block — which results in some unusual costs relative to time and memory allocation.

![alt text](/wp-content/uploads/2018/11/image5.png "post-image")

For this particular function, if we were to optimize for costs, we would see the function consistently taking more than a second per invocation — whereas if we were to optimize for speed, we could receive our results in less than 100ms, but it would cost almost twice as much.

If we allocated 512 MB to the function, we could expect to realize a 65% savings in the time for the function to execute, and only spend 24% more. At 3008 MB, there is an over 92% time savings with an 81% increase in cost.

What you should optimize for in a situation like this would depend on your business model and the importance of costs vs. performance.

### Optimizing a Network-Intensive Lambda Function
For this use case, we’re going to consider the following scenario. We have a Lambda function which performs an address validation function. The Lambda is invoked by a trigger that is activated whenever a new address record is added to a DynamoDB table. The Lambda validates aspects of the address updated in the original DynamoDB table, and the Lambda concludes its invocation by confirming successful processing of the update request.

![alt text](/wp-content/uploads/2018/11/image3.png "post-image")

As part of the validation process, the AddressValidator validates the Zip Code to ensure that it matches the standard 5-number or 5+4 number pattern required for US addresses. Once the Zip Code is validated, a call is made to a third-party service with the Zip Code to retrieve time zone and latitude and longitude coordinates for the Zip Code.

There are some critical differences between this Lambda and the one we used previously. The previous Lambda involved an intense processing load but was not reliant on communication with any other resources within the environment. This Lambda relies on communication with an external API, and communication with a DynamoDB table. In both cases, the steps following the external call are reliant on the response, which requires the function to wait until the response is received.

With a significant amount of the invocation duration of the Lambda being used to wait for external calls, this “wait time” limits the effect which increases the allocated memory and the related CPU power. This lack of effect is apparent when we view a sample of the duration vs. allocated memory for this Lambda function.

![alt text](/wp-content/uploads/2018/11/image7.png "post-image")

When viewing logging statements generated within the Lambda function, the primary driver behind the variability shown in the chart above was due to differences in the response time from the third-party API.

The relationship between memory allocation, duration, and cost further contrasts the differences between these two Lambda examples and the strategies that should be employed to optimize them. In this second example, a cost increase of up to 750% of the baseline invocation due to increase memory allocation results in negligible improvements to the duration of the Lambda.

![alt text](/wp-content/uploads/2018/11/image1.png "post-image")

For a Lambda function (such as the second example), maintaining the baseline memory allocation is preferable, as optimizations need to be found by reducing the latency of network calls, or pursuing an asynchronous approach to performing the calls.

In some cases, a Lambda function might belong to a chain of  Lambda functions, with each including periods of “wait-time.” This has the effect of compounding the “wait-time” problem across the infrastructure, and any improvement won’t be seen due to increased memory and CPU allocation.

### Some Parting Words
As I mentioned at the beginning of this article, understanding the different cost components for a Lambda function and being able to monitor and observe the effect that changes in the configuration have to the performance of the Lambda are critical components in optimizing your serverless functions.

Optimization can take the form of increasing allocated memory and CPU capacity, or it can require improvements to the design of your system and how components interact with each other.
