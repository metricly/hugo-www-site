---

date: "2015-08-16"
title: "Detecting Performance Issues on EBS Volumes"
description: "Here's how we can use a computed metric based on Amazon best practices, to detect EBS volumes that are being over-utilized."
category: "DevOps"
url: "/detecting-performance-issues-on-ebs-volumes/"
layout: "single"
---
In a previous [blog](https://www.metricly.com/iops-calculator-for-ebs-volumes) entry, we looked at how Netuitive calculates IOPS for an EBS (Elastic Block Storage) volume, and how the IOPS utilization rate can be used to help identify under-utilized volumes.  Today, we'll look at how we can use some additional metrics, including a computed metric created based on Amazon best practices, to allow us to detect EBS volumes that are having performance issues due to *over*-utilization.

Two of the key metrics for detecting potential performance issues are *disk queue length*, which indicates the number of requests waiting to be processed by the disk, and *latency*, which indicates the average amount of time that it takes the disk to process a request.  These two metrics are well-correlated.  If latency increases, the queue length will grow as more requests build up waiting for their turn to be executed; conversely, an increase in the number of concurrent requests will eventually cause latency to increase as the disk has more work to perform.

You might think that a disk queue length of 0 would be ideal; however, this is not so.  If the queue is empty, it means that the disk has nothing pending.  In order to get the most out of an EBS volume, you want to make sure that there is *something* in the queue so that the disk always has some work to do.  This is particularly true of provisioned IOPS volumes; since you are paying based on the number of IOPS you have provisioned, you want to be sure you are not paying for more than you need.  This means that you want to maintain a "healthy" disk queue length, so that there is enough work for the disk to maintain the level of IOPS you have provisioned.  So what constitutes healthy?  Amazon recommends that for every 200 IOPS you want to maintain, there should be 1 item in the queue.  Thus, if you have an EBS volume provisioned for 1,000 IOPS, you would ideally have a disk queue length of around 5.

So how can we use this information to detect that we are hitting the limits of our disk's performance capabilities?

One thought would be to look for increases in the disk queue length.  But, while growth in the queue would certainly indicate a change in behavior, it wouldn't necessarily represent a problem.  As an example, let's say that you have an EBS volume which is provisioned for 1,000 IOPS.  Currently, the traffic to that disk is only enough to maintain a performance level of 200 IOPS and the disk queue length is right around the expected value of 1 (200 IOPS / 200).  At some point, there is a significant increase in traffic to the volume.  The volume is now performing around 500 IOPS and the queue length has increased to 2.5.  This is higher than normal, as can be seen from the following screenshot below.

[![EBS Volumes 1](https://www.metricly.com/wp-content/uploads/2016/03/EBS-Volumes.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/EBS-Volumes.jpg)

But even though the queue length has more than doubled, and is outside the bands of normalcy, it is not a problem, and is, in fact, the expected result; based on Amazon's rule of thumb, the queue length *should* be 2.5 (500 IOPS / 200).

A second thought would be to look for increases in latency as well as in the queue length.  After all, an increase in latency could indicate performance degradation.  However, as mentioned earlier, a small decrease in performance is expected as the disk gets busier, so again, this is not necessarily a problem.

[![Latency increases (EBS Volumes)](https://www.metricly.com/wp-content/uploads/2016/03/Latency-increases.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/Latency-increases.jpg)

Therefore, to help avoid the false positives that can come from looking solely at these two metrics, Netuitive has introduced a computed metric called the *queue length differential*.

Queue Length Differential
-------------------------

Put simply, the queue length differential measures the difference between the *actual* queue length and the *expected* queue length.  The expected queue length is determined using Amazon's rule of thumb; specifically, we take the number of IOPS currently being performed and divide by 200.

Returning to our example, when the disk was running around 200 IOPS, we would expect the queue length to be around (200 IOPS / 200) = 1.  The actual queue length was around 1, so the queue length differential would be around 0.  When the IOPS increased to around 500, we would expect the queue length to be around (500 IOPS / 200) = 2.5.  Since the actual queue length is around 2.5, the queue length differential would still be around 0.  So even though the queue length has increased, we have a measurable way to demonstrate that the increase was expected and does not represent a problem.

[![Queue Length Differential (EBS Volumes)](https://www.metricly.com/wp-content/uploads/2016/03/Queue-Length-DIfferential.jpg)](https://www.metricly.com/wp-content/uploads/2016/03/Queue-Length-DIfferential.jpg)

To carry the example further, let's say that there is an additional increase in traffic to the disk, one which takes the disk to its maximum capacity of 1,000 IOPS.  What will happen now is that the queue length will continue to increase as more and more inbound requests are forced to queue up.  Based on the IOPS being performed, we now expect the queue length to be around 5; in reality it might be around 7 or 8.  In that case, the queue length differential would be between 2 and 3; this increase in the differential from 0 to 3, coupled with the more significant increase in latency that will result from requests spending so much time in the queue, is cause for concern.

[![Unexpected QLD](https://www.metricly.com/wp-content/uploads/2015/08/Unexpected-QLD.jpg)](https://www.metricly.com/wp-content/uploads/2015/08/Unexpected-QLD.jpg)

Netuitive provides an out-of-the-box policy that raises an event when these conditions are detected on an EBS instance.  This policy is a simple, effective way to be alerted to problems on your EBS volumes without being inundated with false positives.

* * * * *

*Ready to monitor your EBS volumes with Netuitive? We offer a [21-day, no-obligation free trial.](https://www.metricly.com/signup)*
