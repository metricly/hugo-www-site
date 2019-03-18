---

date: "2016-07-05"
title: "The Subtleties of EC2 CPU Utilization"
description: "How do you explain discrepancies in total CPU utilization? Is the data wrong? In a word, no. Here’s what was happening in this customer’s environment."
category: "Cloud Monitoring"
url: "/subtleties-ec2-cpu-utilization/"
layout: "single"
---
***PLEASE NOTE THIS IS AN ARCHIVED POST*** - Netuitive has since become Metricly, and the tool has matured greatly since the time this was written!

Recently, a customer came to us with an odd scenario that highlighted the importance of full-stack visibility and correlated metrics. This concept is at the core of Metricly's analytics, and is often necessary to fully understand your environment and optimize performance.  This customer was using AWS, and as many Metricly customers do, was monitoring their EC2s with the [Metricly Linux Agent](https://docs.metricly.com/integrations/agents/linux-agent/) in addition to CloudWatch.  On one particular EC2, the Linux Agent was reporting the CPU utilization pegged at 100%.  When the customer investigated, however, they found two unusual things:

1.  1.  The [*total.user* and *cpu.t**o**tal.system*](https://docs.metricly.com/integrations/agents/linux-agent/#cpu-2) metrics were both very low. Normally, these two metrics account for almost all of the CPU usage.
    2.  AWS was not reporting the overall CPU to be pegged at 100% -- in fact, it was significantly lower, and was more in line with the numbers seen for the *total.user* and *cpu.total.system* metrics.

[![ec2 CPU discrepancy](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic1.jpg)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic1.jpg)
*Figure 1 -- Apparent CPU Discrepancy*

So, how to explain these apparent discrepancies?  Was the Linux Agent's view of total CPU utilization wrong? In a word, no. Here's what was happening in this customer's environment.

### How CPU Utilization Works on Virtual Machines

The first thing to remember about EC2s is that they are virtual machines.  Countless physical machines are floating in the Amazon cloud, and each one is running a variety of different services, including EC2s. When any given EC2 needs access to system resources (such as memory or CPU), it doesn't have exclusive access to those resources; rather, it is sharing them with some number of other EC2s, all of which are vying for those same resources.  This applies even if you are running dedicated EC2s -- with dedicated EC2s, your company's EC2s won't be run on the same physical hardware as those from another AWS customer, but you're not getting a dedicated physical box for each EC2 either.

In an ideal world, all of the EC2s on a particular physical server will be running smoothly, nobody will be over-utilizing resources, and both AWS and Metricly's Linux Agent will be reporting the same values for overall CPU usage. Here's an illustration that shows the hypervisor managing and distributing resources across the multiple EC2 instances running on a particular physical server.  (Note: Amazon does not make information or metrics about the hypervisor or physical hardware available; these are strictly in the background from a customer perspective.)

[![EC2 CPU - Hypervisor Managing Multiple EC2s](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic2.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic2.png)
*Figure 2 -- Hypervisor Managing Multiple EC2s*

So if the above is an ideal scenario, what happens if one EC2 goes haywire and starts churning on the CPU?  You might expect to see overall CPU utilization go up to 100% as measured by both AWS and Metricly.  And in fact, you do -- At first.  Later, though, the AWS measurement of CPU drops to 10% while Metricly's measurement stays at 100%.  What's up with that?

### The Case of the Stolen CPU

Earlier, we said that the *cpu.total.user* and *cpu.total.system* metrics normally account for almost all of the overall CPU utilization.  However, there are other classifications of CPU usage as well, and the relevant one here is a metric called [*cpu.total.steal*](https://docs.metricly.com/integrations/agents/linux-agent/#cpu-2).  This metric tells us the percentage of requested CPU resources that were stolen by the hypervisor for use by other EC2s.  In the diagram below, we can see that the stolen CPU jumps to around 90%, which, when coupled with the 10% from user and system processes, gives us the total usage of 100%.

[![EC2 CPU Steal Around 90%](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic3.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic3.png)
*Figure 3- CPU Steal Around 90%*

We can conclude from this that our EC2 is trying to use 100% of the available CPU resources, but the hypervisor is stealing most of it, allowing this EC2 to only use 10% of the CPU. The Linux Agent is showing the EC2's perspective of CPU ("I want to use it all, but 90% is being stolen"), as opposed to the AWS view, which is showing the hypervisor's perspective ("You're only using the 10% I'm allowing you to have.")

[![EC2 CPU is Being Stolen](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic4.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic4.png)

*Figure 4 -- The "Missing" CPU is Being Stolen*

Mystery solved, with one exception -- how does AWS make the determination to steal CPU cycles?

In part, this decision is based on the behavior and resource requirements of the other EC2s running on that same physical hardware.  If several EC2 instances put high demand on the CPU, the hypervisor may not be able to meet all the requests, and one or more of the EC2s may see sporadic periods of stolen CPU as the hypervisor juggles the workload.

However, this wasn't the behavior that our customer was seeing.  Rather, AWS was throttling their CPU usage due to a lack of *CPU credits*.

### Keep an Eye on Your EC2 CPU Credits

Not all EC2 instances operate [on the concept of CPU credits](https://docs.metricly.com/integrations/aws-integration/#ec2); in fact, only T2 instances do so.  A T2 instance accumulates CPU credits continuously, at a rate per hour which is determined by the exact instance type.  Whenever the CPU is in use, CPU credits are consumed, at a rate based upon how heavily the CPU is being utilized.  Each CPU credit gives you the ability to run at 100% CPU capacity for roughly one minute.  Amazon recommends that T2 instances be used for running applications that typically consume low amounts of CPU, but occasionally need to burst; bursting effectively burns CPU credits at an accelerated rate.

This, in fact, is what was happening with our customer.  Looking at CPU utilization along with CPU credits, we see that as soon as the CPU spiked to 100%, the CPU credits began depleting rapidly.  Once the CPU credits were depleted, the CPU usage as reported by AWS fell to around 10% -- at this point, the instance was accumulating new credits at such a slow rate that AWS wouldn't allow it to use any higher amount of CPU.

[![Effect of CPU Credit Depletion on EC2 CPU Utilization](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic5.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2016/06/Pic5.png)
*Figure 5 -- Effect of CPU Credit Depletion on CPU Utilization*

### Final Thoughts

Monitoring CPU usage is more complex than looking at a single utilization number.  As we've seen from real-world customer experience. It is important to look at usage from different perspectives (hypervisor versus EC2 instance), to consider multiple breakdowns of CPU (such as the user, system, and steal metrics), and to be aware of AWS features (such as CPU credits) which may impact your performance. Context is everything!

Metricly can help you with all of this.  Our [monitoring platform](/aws-cost-tool) is built with an analytics-first approach, designed to help you do more than look at metrics. With a wide-ranging scope of [out-of-the-box dashboards](/aws-monitoring-best-practices/), anomaly detection, and alert policies, Metricly can help you quickly zero in on the issues affecting your environment -- and fix them before they have a serious impact on performance.

* * * * *

Are there stolen CPU cycles in your environment? Find out with Metricly's [21-day, no-obligation free trial](/signup).
