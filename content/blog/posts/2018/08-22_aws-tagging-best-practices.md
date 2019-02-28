---
author: "Mike Mackrory"
date: "2018-08-22"
title: "AWS Tagging Best Practices – The Ultimate Guide"
category: "Cloud Cost Management"
url: "/aws-tagging-best-practices/"
layout: "single"
---

In this article, I'll be sharing AWS tagging best practices, more information about why tagging is a process your organization needs and how to implement a strategy which meets the requirements of the organization without placing an undue burden on development teams.

If you're part of an organization with a growing cloud environment, you probably already understand the challenges associated with managing an increasing number of resources. Tagging resources is the solution to understanding what assets are in play, and how they relate to each other. With that knowledge, you can calculate and allocate costs and develop strategies to [optimize your cloud expenditures](https://www.metricly.com/category/cloud-cost-management).

That all sounds easy enough, but if you've attempted such an undertaking, you already know there's a precarious balance you have to find between adding all the data you can with resource tags and squelching the inevitable revolt from the engineers who will need to implement it.

Read Also: [The Ultimate Guide to EC2 Instances](https://www.metricly.com/ec2-instances/)

### Why You Need an AWS Tagging Strategy

Organizations move their IT infrastructure to the AWS Cloud for many reasons. The Cloud offers reduced costs for infrastructure support, increased potential to scale your infrastructure out as you grow, and enhanced connectivity to other cloud-based services.

Provisioning new infrastructure and deploying an application into service using a DevOps model is more accessible than it has ever been. Services like Elastic Load Balancers, SQS, SNS, [EBS](https://www.metricly.com/iops-calculator-for-ebs-volumes), Lambda and many others afford us the ability to include reliable functionality and redundancy into our applications.

With all this technology at our fingertips, it's easy to lose track of what we're using, who owns it, and most importantly, how much it might cost and whose budget will be used to pay the invoice when it arrives.

Effective management of cloud resources requires a tagging strategy which can be implemented uniformly across your organization. Implementing this strategy enables your organization to filter resources by type, application, owner or cost center, and any combination thereof. You will also be able to build reporting, [implement targeted alerting](https://www.metricly.com/alert-noise-blog), and expose all resources related to an application in dashboards.

### Benefits and Use Cases for AWS Tagging

We've already identified some of the primary reasons to implement a comprehensive tagging strategy. Let's consider additional use cases which would benefit.

Projects come in many types. Some are intended to be put in place permanently, while others have a limited lifecycle which may terminate after a specific season. Tagging resources with the expected lifespan of the project can help financial and forecasting staff plan for the future. (AWS offers reduced pricing for infrastructure which is reserved ahead of time.)

Depending on the size of your organization, you may have multiple teams deploying applications into a single AWS account. We'll discuss this situation in more depth in the next section, but if this is something your organization currently does, tagging can assist financial staff in identifying the owners of each resource and charging those resources back to the team responsible.

Similarly, allocation of costs to the owners of the resources will hold those owners accountable for their cloud spend. Visibility into costs and resource usage will hold owners responsible for using resources prudently and optimizing their use of cloud services.

Effective tagging will also assist your organization in ensuring that you are using resources appropriately.  Ultimately, this use case bears a striking resemblance to the two cases presented immediately before this one, and should serve to highlight the importance of appropriate resource allocation for the organization.

If your organization manages medical or payment information, you may also be subject to PCI or HIPAA audits. Tagging all the resources that are involved in the processing of confidential data will improve the ease with which audits can be conducted and help you identify all resources which may require additional security scrutiny.

### Avoiding the Overtagging Problem

I mentioned the situation where multiple teams may be deployed into the same AWS account. For administrative purposes, this can be a wise move. However, if there are too many participants involved in deploying resources in a single account, you may be setting your organization up for future difficulties in separating and managing resources from each team.

An indication that you may be headed down this road is over-tagging. If your list of required tags borders on excessive, this is an indicator that your organization might benefit from dividing resources between multiple accounts.

### AWS Tagging Best Practices

Now that we've considered the importance of a tagging strategy, and identified use cases which can benefit, let's discuss AWS tagging best practices and standards that you can follow to organize and manage your resources.

### 1\. Give Every Resource a Name Tag

The first best practice is ensuring that all your resources have a Name tag. Name is a tag which is used by AWS, and many services that provide users with additional support for their AWS account. The name tag should be unique for the resource.

### 2\. Use Camel Case For Your AWS Tags

Where possible, use camel case for your tags. Camel case allows you to include multiple words in a single string, with the start of each word identified by an uppercase character. For example, if you're deploying a new credit card processing service into AWS, you could tag the EC2 instances with a name tag which has a value of ***CreditCardProcessingService***.

### 3\. Use Namespaces To Improve Clarity

Tags can use namespaces. This practice can improve the clarity of the purpose of the tag. Assuming you have a collection of tags which relate to the ownership of a resource, you could prefix each tag with the ***owner*** namespace. So your list of ownership tags might include:

-   Owner:team
-   Owner:department
-   Owner:costCenter

### Designing a Schema that Lasts

Last year my manager tasked me with developing a draft tagging standard for our organization. Using the concepts mentioned above, and following an AWS best practice of erring on the side of too many tags, I compiled and presented to a small committee a collection of more than 30 tags which I felt we should attach to all of our resources.

Fortunately, the committee exercised better judgment and pared my list down to a fraction of what I had proposed. (I say fortunately, because I've since realized that presenting engineers with a list of that magnitude and then mandating that all existing and future resources be tagged with the same would have resulted, at best, in failure, and at worst, my forcible ejection from the room.)

The experience taught me that you'll improve the chances of full adoption of tagging standards if you present a concise list of tags, each with a clear purpose and objective. Our organization manages multiple AWS accounts, which support infrastructure and services for numerous departments and teams. Our tagging strategy consists of three tags.

-   Owner:department
-   Owner:domain
-   Owner:application

The ***department*** tag allows us to report costs and usage at a department level. At this level, the department decides to reserve capacity and thus reduce costs.

The ***domain*** tag allows us to group applications and services by domain. We use a domain-driven approach to development, so this aligns with that approach. A similar tag might be ***team***, but we found ***domain*** represented a better level for reporting (at least, it does for our organization).

The ***application*** tag allows all resources related to a particular application to be grouped. An application may include several microservices with associated data sources. It may also include SQS queues, an ELB, and an S3 bucket. Tagging each of these resources with the same application tag allows us to accurately identify all parts of the application and get an idea of the footprint and associated cost.

These three tags provide the organization with sufficient visibility into costs and usage to meet their needs---and thus, our objectives with the strategy. Engineers are required to include these tags and other tags as needed to enhance their team reporting. I'm not suggesting that this approach would work for all organizations, but I am suggesting that a simple method is better than a comprehensive strategy that seeks to solve all problems in the present and in the future at the same time.

### Pitfalls and Common Mistakes With AWS Tagging

We ran into a few problems when implementing our plan. The first was that tags are case-sensitive, and the second was that, invariably, when engineers added tags manually, spelling mistakes were introduced. Having tags with spelling mistakes and differing case issues is better than having no tags at all, but it is still problematic. We'll talk more about ways to mitigate these in the next section.

### Implementation and Maintenance

In an ideal world, an organization would determine a tagging strategy, establish a method of applying tags which mitigates user errors, and only then begin deploying resources into their AWS account. The real world is seldom ideal, however.

We approached the tagging implementation in our organization with two solutions for engineering teams to use. Presenting the strategy with tried-and-tested solutions to aid in implementing them increased speed and the process of adoption.

For new deployments, we included the tagging steps as part of our deployment pipeline. Whether you're using CloudFormation or another method to provision infrastructure, coding the steps to add tags helps eliminate both the mistakes highlighted above, and eliminate engineer overhead and the possibility that the action could be skipped or forgotten.

For existing deployments, a series of Python scripts which interacted with AWS APIs afforded engineers the luxury of defining tags in a configuration file and then executing the scripts to apply those tags to all of their resources. The commitment from a team was typically an hour or less to tag all their EC2 instances, data sources, and other infrastructure.

Automating the tagging process and taking an Infrastructure as Code approach will significantly reduce human error and increase tag compliance.

On the subject of tag compliance, [AWS Config](https://aws.amazon.com/config/) is a service offered by Amazon which can allow you to add rules for your infrastructure, including reporting on resources which are missing tags. This utility will enable you to identify resources which still require tagging, and will notify you when new, untagged resources are added, or previously tagged resources are deployed without tags.
