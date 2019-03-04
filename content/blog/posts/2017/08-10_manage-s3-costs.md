---
author: "Mike Mackrory"
date: "2017-08-10"
title: "How to Manage the Cost of Your AWS S3 Resources"
description: "Start using S3 for more than a few files, and you'll see the complexity of the cost model increases dramatically. Take control of your S3 costs!"
category: "Cloud Cost Management"
url: "/manage-s3-costs/"
layout: "single"
---
Amazon Simple Storage Service, or S3, is the Amazon Web Services (AWS) storage solution for any type of data---whether it's web pages, media files or any other data files. S3 is very reliable, highly scalable and is easy to connect as a storage tier for your applications.

If you're reading this article though, chances are that you already know about the benefits of S3. This article talks about the next step. Here, we're going to look at the factors which influence your S3 costs. We'll look at how you can analyze your current usage of S3, and then look it actionable steps you can take to minimize costs while maximizing your usage of this resource.

S3 Cost Factors
---------------

S3 costs are based on where and what type of storage you use and the size and quantity of data objects that exist in that storage. The cost is also affected by how often that storage is accessed and how much data is transferred in or out of the storage. Additional charges may also be incurred if transfer acceleration is used and if data replication between regions is enabled.

While the beauty of S3 is that you only pay for what you use, once you start using S3 for anything more than a couple of files, the complexity of the cost model increases exponentially. Let's look at how we can leverage the [tools available from Metricly](https://metricly.com/product) to gain insights into how these different factors affect our S3 costs, and how we can use them to improve our management of the same.

Gaining Insight into S3 Costs
-----------------------------

The S3 Cost Report is currently offered for Beta testing as part of the Metricly application. If you don't already have an account, Metricly offers a [21-day free trial](http://app.netuitive.com/signup).

Once you've logged into your account, you can navigate to the report by clicking on your account name/email address in the top right corner of the application, and selecting ***Beta* **from the list of options.

![S3 Costs: S3 Cost Report Tab](/wp-content/uploads/2017/08/Pasted-image-at-2017_08_15-03_40-PM-1.png)

Please note that at time of writing, this report was tagged as a Beta report. This means that the report may change as additional features are added and feedback from initial users of the report is used to improve the usability of the report.

Before we look at the report data itself, let's look at some of the options available to focus on the specific data you're looking at for the specific time and instances you're interested in.

![Manage S3 Costs: Report FIlters](/wp-content/uploads/2017/08/S3-Filtering.png)

At the top left-hand corner of the screen, you'll have access to the filters for the report itself. The first field is a simple element name filter. The next filter option is *Type*, which may provide additional options. The *More* option allows you to add additional filters, which you can use to segregate your data based on how your organization organizes its [AWS resources](/aws-monitoring-best-practices-using-pre-configured-dashboards).

-   Element
-   Attribute
-   Tag
-   Collector

![Manage S3 Costs: Date Filters](/wp-content/uploads/2017/08/S3-Date-Selection.png)

Moving to the top right-hand corner of the report, you'll see the date selector. This allows you to select from a couple of different date ranges. Whether you are looking for data points over a specific period, or just over the last day, you can make that selection here.

Once you've selected the appropriate group of resources to analyze and the right date range, you can tune the report to display appropriate metrics based on your specific needs. You can learn more about those metrics by visiting this introduction to the [S3 Cost Report](/s3-cost-report).

### Understand Your S3 Costs and What's Driving Them

As I mentioned before, when you start using S3, the On-Demand cost model becomes increasingly complex as data objects are added to S3 and subsequently accessed by applications, sites and users. By exposing your data through the S3 Cost Report, you can [visualize each source of AWS costs individually](/demystify-your-ec2-cost-analysis) and relative to each other.

The report allows you to view the costs associated with:

-   Utilization
-   Data Requests
-   API Requests
    -   Put Requests
    -   Get Requests
-   Standard Storage
-   Glacier Storage

If you are supporting an application which allows an application to accept image files from end users, and then uploads these through the AWS S3 API into an S3 Bucket, you might be interested in knowing whether your costs are originating from the transfer of data into S3, or from storing the image files themselves.

For this example, we'll set the report view to show results grouped by day. This will allow us to see the cost for each day during the period covered by the report. On the visualization itself, let's disable each of the types, and then enable Standard Storage and Put Requests. This will allow us to see the costs associated with placing new objects into storage, and after that, storing them in a standard S3 bucket.

The output from this might look similar to the report shown below.

![Manage S3 Costs: Cost Report](/wp-content/uploads/2017/08/Example-Cost-Report-1024x412.png)

Based on the graph above, it becomes apparent that the costs associated with storing images are currently higher than the costs of uploading those objects. It also appears that some optimizations may already be in place, evidenced by the decreasing cost of Standard Storage.

Real-world Ideas to Optimize Costs
----------------------------------

Based on the analysis of your specific S3 configuration, you may already have some ideas related to saving costs. Let's consider some best practices for S3 storage, which you may also be able to leverage as you work towards optimized management of your S3 resources.

Assess the Value of Objects Being Stored
----------------------------------------

Spend some time considering the value of the data being stored, and the importance of both storing the data and being able to access it rapidly. Your data may fall into one of the following categories:

-   Valuable Data Which May Be Required Quickly
    -   This data should continue to be stored in AWS S3. S3 allows for the data to be persisted and readily accessible by applications and users who need instant, or near-instant availability.

-   Valuable Data Which May Be Needed in the Future
    -   Consider migrating the data to AWS Glacier. Glacier was designed to be a secure and durable storage solution for long-term data. The cost of storage is significantly lower than that incurred by data stored in S3. The tradeoff is that your data is not immediately available, and may take from a few minutes to a couple of hours to be retrieved, based on how it is stored.

-   Valuable Data Where the Value Is Tied to the Time Period
    -   Transactional data or data which is legally required to be maintained has value, but only for a certain period. In this case, you could either consider moving the data to Glacier, or configure an object expiration policy on the bucket. You can learn more about expiration options in this article from AWS: [Amazon S3 -- Object Expiration.](https://aws.amazon.com/blogs/aws/amazon-s3-object-expiration/)

-   Data Which Has Little or Limited Value
    -   Consider deleting the data, or at the very least, move it to AWS Glacier as previously mentioned.

Awareness is Half the Battle
----------------------------

Just as the Metricly report helps to identify areas of elevated cost, creating awareness of costs and where they originated can be a powerful tool in reducing waste. By filtering the report based on department, or division, you will be able to educate users on the sources of their costs, and motivate them to take proactive steps to reduce costs or accept advice in adopting best practices for effective management of S3 resources.

Location, Location, Location
----------------------------

S3 resources are accessible from anywhere within the AWS ecosystem, or from anywhere in the world if access permissions allow it. There is a cost difference, however, between accessing objects from an S3 bucket in the same region and one in a different region.

Wherever possible, S3 resources should be accessed by services and users within the same AWS region.

Backups and Replication
-----------------------

In keeping with the spirit of the first point shared, namely that of assessing the value of data objects being stored, you should assess the need to back up or replicate your objects between buckets. Depending on where you are replicating or backing up data to, your costs to perform these tasks may vary. Determine whether:

-   The additional security of replication procedures is needed by your application.
-   The backups might be better stored in a more cost-effective solution such as Glacier.

Compression and Data Format
---------------------------

S3 costs are based on the size of your objects. Consider whether you can perform compression on the data before storing it in S3. Also consider whether the format of the data might affect the size of the file and whether changes to format could reduce the footprint of the object, and thus reduce its storage cost.

* * * * *

*Explore your S3 costs today with Metricly's [21-day, no-obligation free trial](http://app.netuitive.com/signup).*
