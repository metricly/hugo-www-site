+++
author = "Andrew Paine"
date = "2018-07-11T13:44:00+00:00"
title = "Mistakes To Avoid With AWS Reserved Instances"
tags = ["Cloud Cost Management"]
#url = "/aws-reserved-instances-mistake/"
+++

### Know What Is Actually Being Reserved
AWS offer lots of flexibility in the purchasing of Reserved Instances (RIs) but the application of RIs to actual instances is not always clear. Using our [AWS cost tools](https://www.metricly.com/aws-cost-tool) will help you understand your bill at the end of the month, but there is a common pitfall of reserved instances which you must know about first.

In AWS invoices purchased reservations are shown in hours. For example, consider the very simple scenario where a reservation has been purchased for 3 c4.xlarge instances. The invoice for May 2018 might look like this:

![word-img](https://www.metricly.com/wp-content/uploads/2018/07/word-image.png)
Example AWS Reservation of (3) c4.xlarge Instances

The 2,232 hours correspond to 3 instances x 24 hours x 31 days.

From the invoice it is very tempting to infer that the reservation represents a block of hours to be called off at will throughout the month, **but this is not the case**. Reservations must be thought of in terms of a purchase of concurrent instance counts, not monthly instance hours.

As long exactly 3 concurrent c4.xlarge instances are running for the entire month the reservation will be utilized in full and no on-demand costs will be incurred.

Consider the case where 6 concurrent instances are run for 12 hours per day with all 6 active during the same 12 hour period:

![word-img-1](https://www.metricly.com/wp-content/uploads/2018/07/word-image-1.png)
ASG Graph Of (6) Concurrent EC2 Instances

The total instance hours for the month is also 2,232 but the reservation will not apply to half of them and the invoice will look a little different:


![word-img-2](https://www.metricly.com/wp-content/uploads/2018/07/word-image-2.png)
Notice the 50% utilization of the reserved instances

The most obvious change is that the total cost is 80% higher!

This is because only the first 3 instances have been allocated reservations. The other 3 have been considered additional on-demand instances above the reservation. Notice that the reservation is now only 50% utilized since for 12 hours per day none of the reserved capacity is in use.

### Remember to Consider Auto-Scaling With AWS Reservations

It is very uncommon to have a completely flat capacity requirement throughout the month.

Consider the profile below where the capacity required ramps up and down across the day (for simplicity we’re assuming weekends have the same profile as weekdays):

![word-img-3](https://www.metricly.com/wp-content/uploads/2018/07/word-image-3.png)
Basic ASG profile that scales to (6) instances in the weekdays

In this example the total number of instance hours in a month is also 2,232 (take my word for it) – the same number of instance hours as 3 full time instances – but in this case there is anywhere between 1 and 6 instances running at once.

If we want to reduce the cost by purchasing reservations, how many should we choose in this case?

The answer depends on how confident we are that this capacity cycle will remain and, hence, which level of commitment to make to the reservation. The optimum number of reservations to make depends on the discount against the on-demand price: the discount against the on-demand price is much lower for a low level of commitment such as a 1 year convertible reservation with no up-front payment than it is for a 3 year reservation.

In this example, reserving 3 convertible instances for 1 year with no-upfront payment would actually cost more than making no reservations at all and paying the on-demand cost for all of the instances even though the number of instance hours used is exactly the same!

i.e., consider this (note the lower discount for convertible instances):

![word-img-4](https://www.metricly.com/wp-content/uploads/2018/07/word-image-4.png)
Cost with (3) reserved convertible instances

versus this:

![word-img-5](https://www.metricly.com/wp-content/uploads/2018/07/word-image-5.png)
Bill is lower if you simply paid on-demand costs

### Final Words

Always view reservations in terms of the concurrent instance count. Don’t think of them as a batch of instance hours or you could get a nasty shock at the end of the month.

For more AWS best practices:

[AWS Monitoring Best Practices Using Pre-Configured Dashboards](https://www.metricly.com/aws-monitoring-best-practices)

[Demystifying the Terminology of AWS Instances](https://www.metricly.com/demystifying-terminology-aws-instances)
