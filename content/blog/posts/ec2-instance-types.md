+++
author = "Mike Mackrory"
date = "2018-10-16T13:44:00+00:00"
title = "EC2 Instance Types—6 Things You Need To Know Before Selecting"
category = "Cloud Cost Management"
url = "/ec2-instance-types/"
+++

When an organization and its engineers begin their first forays into Amazon’s Elastic Computing (EC2) solutions, the selection of the right EC2 instance type may appear to be an easy decision based on capability and cost. Early decisions might be made based on:

- Processor type and count
- Available memory
- Cost

For a quick prototype or a single-instance solution, this may be all that you need to consider, but as your cloud footprint increases and you begin investing in additional EC2 instances, you should consider additional factors which aren’t well known. Your goal should be to support your applications and their growth with an EC2 configuration which can handle the requirements of the application now, and in the future.

In this article, we’re going to look at six of these lesser-known differences between EC2 instance types and discuss why they’re important and how they can impact the performance and cost optimization of your EC2 deployments. Understanding their impact can help you make better-informed decisions when selecting the right instance type for each of your applications or services. [Rightsizing your EC2s](/aws-sizing-tool/) ensures that you maximize the performance of your software while achieving the best value from a budgetary standpoint.


#### 1. CPU Bursting
The T2 and T3 family of instance types support a concept known as CPU bursting. Virtual machines are assigned a virtual CPU (vCPU) with an allotment of CPU cycles per second. If a machine is not operating at 100% utilization of allotted CPU cycles, the unused capacity is converted into CPU Burst Credits, which are associated with a specific instance.

If the instance requires processing power (more than the allotted CPU cycles), the machine may trade Burst Credits for additional CPU capacity, allowing the machine to use more than its allotted CPU cycles, as long as it has excess credits.

This feature is especially useful for machines that do not receive a consistent level of traffic and could expect to exceed their capacity on occasion. If you expect your service to sustain a level of processing near 100% of the CPU capacity, instance types without CPU bursting may be a better choice.

Some additional points which may be important to note:

CPU credits accrue based on the instance type. Larger instances accrue more credits per hour.
There is a limit to the number of credits which can accrue. Larger instance sizes have a higher limit.
Restarting instances in the T2 family results in a loss of all accrued credits.
Credits for instances in the T3 family persist their credits for seven days if the instance is stopped.

You can learn more about CPU bursting from the AWS Documentation, including specific information about credit accrual and limits per instance.


#### 2. Storage Transfer Limitations
When an EC2 instance is created, it is typical for an Elastic Block Storage (EBS) volume to be created at the same time and attached to the instance. If the application you are hosting on the instance requires a high number of disk reads and writes, then you should calculate the number of input and output operations (IOPS) you expect and determine whether the device and attached EBS volume can support this level.

Specific families of EC2 instances are EBS-optimized and take advantage of an optimized configuration stack which can support a higher level of IOPS between the instance and its EBS storage volume.

You must enable EBS optimization on instance types which support it before you can take advantage of it. You can learn more about which instance families support this feature and how to configure it from the AWS EC2 User Guide on the subject.


#### 3. Included Storage
EBS volumes provide instances with external storage that persists even when an instance is terminated. Different instance types may also include storage in the price of the instance itself. Let’s look at ephemeral storage and included storage options which are available and included in the price of the instance itself.

Some instance families also include an EC2 instance store. The instance store is located on disks that are physically attached to the host computer. This store is ideally suited for storage of data that needs to be accessed quickly and frequently, but that can also be considered ephemeral rather than permanent.

Temporary storage such as caches, buffers, and others can be stored in this store, without requiring storage space on the attached EBS volume. Since this storage is attached to the instance and included in the cost for the instance, it can be confusing when calculating storage requirements and costs.

The internal store should not be considered permanent; however, as such, it should not be considered as a viable solution for long-term storage of objects.

Storage optimized instances, such as the H1 and D2 instance families include HDD based local storage, which is included in the price of the instance and support higher throughput rate than would be available from EBS volumes attached to the instance. Like the instance store, this storage is included in the cost of the instance. H1 instances can have up to 16TB of local storage and D2 instances include up to 48 TB of HDD-based local storage.

Much like the instance store, this storage only exists for the lifetime of the instance. While it provides for additional, and higher throughput of data, it cannot be detached and associated with a different instance, as can be done with an EBS volume. To learn more, consider reading our article outlining how [EBS burst balance](/ebs-burst-balance-aws/) works.


#### 4. Minimum Requirements
The t2.nano instance type starts at less than $5 a month and may appear to be an attractive solution if you involve your accounting department in the decision, but with a single vCPU allotted to the instance and 0.5 GiB of memory, it would not be capable of supporting complex processing or a memory-intensive application.

Whether you are building your own Amazon Machine Image (AMI) or purchasing an AMI from the online marketplace, be sure to check the minimum size requirements and ensure that the instance type you select can meet or exceed those requirements.

Some examples of commonly used systems where minimum size requirements this is a valid concern include:

SQL Server Enterprise 2017 on Linux: Requires at least 4 GiB of memory, but is recommended to be hosted on an m4.xlarge which has 16 GiB of memory.
Windows Server 2016: Requires a minimum of 2 GiB of memory.


#### 5. Networking Limits
Many people choose to migrate their application to the AWS Cloud so that they can support and scale web-based applications for users across the world.

If you are dealing with massive transfers of data (such as media files) or a high volume of traffic, you may run into limitations on the size of the network connection between your instance and clients which need to communicate with it. There are instance families and specific instance types within those families that can support 10 Gbps or 20 Gbps of bandwidth. Other instance families and types are unable to support this level of network activity.

If you have a network-intensive application or are planning on transferring large amounts of data, then ensure that you select an instance type which can support enhanced networking. Some families which support enhanced networking with up to 10 Gbps are the C3, C4, D2, I2, and R3 families.

The P2, R4 and X1 families of instance type use an Elastic Network Adapter and can support up to the 20 Gbps.


#### 6. Use With EMR
Amazon Elastic MapReduce (EMR) is a managed cluster platform that makes it easier for you to support big data frameworks. With an EMR cluster, you can ingest large amounts of data and have it processed across all instances in your cluster, while AWS takes care of configuring and managing the cluster.

When creating your EMR cluster, you are responsible for determining which instance type to use for the master and slave nodes. Failure to select a supported instance type or an instance type which is unavailable in your chosen region may result in a failed setup process, or the cluster entering an unresponsive state.

You can learn more about AWS EMR through the official EMR documentation, or reading our article on [EMR monitoring](/aws-emr-monitoring/).


#### Conclusion
In the days before AWS was born and we began moving our service to a cloud platform, it was up to operations personnel to determine requirements and provision hardware to support our applications. The process was tedious and required a significant investment in time, research and testing.

While the cloud has dramatically simplified the process, it is still incumbent upon us to invest in identifying the right hardware configuration for our applications and services. In contrast to the “old days,” however, a new machine can be configured and provisioned in as little as a few minutes.

A little time invested up front, and attention paid to the basic configuration, in concert with the items mentioned above you can be sure that your choice is the right instance type for your application and assuring your organization receives the best value for their money as well.
