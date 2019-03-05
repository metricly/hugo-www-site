---

date: "2015-04-22"
title: "Calculating IOPS Utilization for EBS Volumes"
description: "If you're not monitoring your IOPS utilization, you should be. Here's how this computed metric can help you optimize both cost and performance."
category: "DevOps"
url: "/iops-calculator-for-ebs-volumes/"
layout: "single"
---
When looking at an EBS volume in Metricly, you'll notice that in addition to the metrics we collect from AWS, we also create a number of computed metrics, one of which is *netuitive.aws.ebs.iopsutilization*.  Simply put, IOPS Utilization compares the current number of IOPS that the disk is performing against the total IOPS capacity, and expresses this as a percentage. Thus, if you are currently running 1050 IOPS against a volume whose capacity is 3000 IOPS, the IOPS Utilization would be 35%. Here's an example of a graph of IOPS Utilization Percent in Metricly.

[![IOPS Utilization Blog 1](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/IOPSblog1.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/IOPSblog1.jpg)

IOPS Utilization is an important metric, as it allows you to identify under- and over-utilized EBS volumes, which in turn can help you pinpoint cost-saving opportunities. We'll see how in a moment, but first let's look at how the percentage for IOPS Utilization is arrived at. This involves two components: 1) the current IOPS being processed by the volume, and 2) the IOPS capacity of the volume.

See also:\
[Introduction to EBS Burst Balance](/ebs-burst-balance-aws)\
[Using Lambda To Automate EBS Burst Balance](/lambda-automate-ebs-burst-balance)

Calculating Current IOPS from AWS
---------------------------------

The current number of IOPS being performed by the disk is fairly straightforward. While AWS doesn't supply this metric, it does provide the total number of read operations performed (via the *aws.ebs.volumereadops* metric) and the total number of write operations performed (via the *aws.ebs.volumewriteops* metric). Since Metricly collects data from AWS every 5 minutes (300 seconds), we can thus compute the total operations per second (IOPS) being performed as:

*(aws.ebs.volumereadops + aws.ebs.volumewriteops) / 300*

The result of this computation can be seen in the *netuitive.aws.ebs.iops* metric. The screenshot below shows Volume Read Ops, Volume Write Ops, and the resultant IOPS computation for a sample EBS volume.

[![IOPS Utilization Blog 2](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/IOPSblog2.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/IOPSblog2.jpg)

Determining IOPS Capacity of EBS Volume
---------------------------------------

Determining the IOPS capacity of an EBS volume is a little more involved, as it depends on the type of volume.

Provisioned IOPS Volumes

Provisioned IOPS volumes are the simplest, as you are paying Amazon for a specific IOPS capacity, and AWS provides an attribute (called, fittingly enough, *iops*) which contains this value. Thus, if you are paying Amazon for a 3000 IOPS volume, the *iops* attribute will be set to 3000.

General Purpose Volumes

General purpose volumes are also very straightforward.  In this case, you are paying Amazon for a specific size of disk rather than for the number of IOPS you desire, but Amazon determines the IOPS capacity based on that size, and sets the *iops* attribute accordingly. Amazon provides IOPS capacity at 3 times the size of the disk in gigabytes; thus, if you are paying Amazon for a 500 gig disk, Amazon will set the IOPS capacity at 1500 IOPS and the *iops* attribute will be set to 1500.

Standard (Magnetic) Volumes

Unlike provisioned or general purpose volumes, standard (also called magnetic) volumes will never have the *iops* attribute set to anything. According to the AWS documentation, standard volumes typically average about 100 IOPS with the capability of bursting to "several hundred" IOPS. After analyzing data from our early access customers, we found that most customers with standard volumes maxed out at around 300 IOPS on those volumes. For purposes of computing IOPS Utilization on standard volumes, therefore, we assume an IOPS capacity of 300. Thus, if you are running at 225 IOPS on a standard volume, your IOPS Utilization will be 75%. It is also worth noting that IOPS Utilization will max out at 100%; thus, if you burst to 400 IOPS on a standard volume, IOPS Utilization will show 100% and not 125%.

Identifying Cost Saving Opportunities
-------------------------------------

As mentioned earlier, understanding the utilization of your EBS volumes can lead to cost savings through identification of under-utilized volumes, specifically provisioned volumes. With provisioned volumes, you are paying for the number of provisioned IOPS, so not running at or close to 100% means that you are wasting money. Using Metricly's Utilization Report, you can filter to show EBS provisioned volumes and then sort by average utilization to quickly and easily identify cost-saving opportunities. Here's a sample Utilization Report sorted by average utilization:

[![IOPS Utilization Blog 3](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/IOPSblog3.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/03/IOPSblog3.jpg)

Once you've identified these under-utilized volumes, you may decide to re-configure them to reduce the number of provisioned IOPS, or to consolidate and decommission some of the under-utilized volumes, or even switch some of them to different volume types (general purpose or standard) that may be more appropriate and cost-efficient for your usage. All of these strategies will help you save money.

Identifying Performance Improvement Opportunities
-------------------------------------------------

IOPS Utilization can also help you identify over-utilized volumes, which could be impacting application performance. In these cases, you could improve performance by upgrading to a different volume type or provisioning more IOPS. To identify these scenarios, however, we need to look at more than just the IOPS Utilization since, as noted earlier, in many cases high utilization is a good thing. Identifying over-utilized volumes involves looking not just at IOPS utilization percent, but also at latency and the *queue length differential.  *

The queue length differential is a computed metric which compares the EBS volume's disk queue length to the expected length based on Amazon best practices. Our next blog entry will discuss this metric in more detail, and describe how one of Metricly's global policies uses this metric to alert you to potential performance improvement opportunities.

* * * * *

*Start using Metricly to monitor your EBS volumes today -- we offer a [21-day, no-obligation free trial.](/signup)*
