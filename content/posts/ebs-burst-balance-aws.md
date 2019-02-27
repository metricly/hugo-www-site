+++
author = "Mike Mackrory"
date = "2018-05-17T13:44:00+00:00"
title = "EBS Burst Balance on AWS: Understanding and Optimizing"
tags = ["Alarms & Notifications", "Analytics", "Cloud Monitoring"]
#url = "/ebs-burst-balance-aws/"
+++

When you create a new AWS instance, you’ll notice that you’re given the option (in step 4 of the instance creation process) of adding an EBS storage volume. If you choose to take advantage of EBS volumes, you’ll want to make sure you are optimizing their performance and monitoring them effectively. This article explains how to do both, with a focus on EBS burst balance and Metricly’s monitoring solution.

What are EBS Volumes?
EBS or Elastic Block Storage is an AWS persistent block storage solution for EC2 instances. EBS employs replication routines to shield the user from component failure, offering customers a highly available, fault-tolerant data solution for their compute needs.

GP2 is a form of EBS which is hosted on solid state drives (SSDs). Volumes can range in size from 1 GiB to 16 TiB and can be placed in a RAID configuration to provide additional performance and fault tolerance as needed.

IOPS is an acronym for input/output operations per second. You may have noticed in the Add Storage option in the AWS Console that IOPS for a GP2 volume is specified at 100/3000. A GP2 volume can support sustained operations at a rate of 100 per second. In the real world, data operations are rarely if ever consistent. A period of exceptionally high activity may follow a period of low activity. Want to learn more? Check out our article on calculating IOPS utilization for EBS volumes.

What is EBS Burst?
For this reason, AWS introduced the concept of EBS Burst. GP2 volumes can support a sustained load of up to 3,000 operations per second for up to 30 minutes at a time.

The availability of burst capacity is determined by credits which have been accumulated in the volume’s burst bucket. Credits are accrued at a rate of 3 credits per second for each GiB of capacity, and a volume may collect as many as 5.4 million credits. This is what we’ll refer to as the EBS Burst Balance.

Best Practices for EBS Volume Optimization
Optimization of your EBS volumes is essential for ensuring that your applications can serve your customers reliably and in a performant manner. At the same time, you don’t want to spend money on capacity that you aren’t likely to use.

Since the usage patterns for each volume are going to be unique and vary over time, it’s to your advantage to employ a tool which can perform this analysis for you, and help you identify ways to optimize your use of EBS—or better yet, implement optimizations automatically for you as needed.

The designers of Metricly have invested significant time in developing complex algorithms which you can access through their tool to monitor and optimize your EBS usage within your AWS account.

Configuring Metricly to Monitor Your EBS Volumes
Configuring Metricly to monitor your EBS volumes and assist you in optimizing them is as simple as setting up a connection to your AWS account. If you don’t already have an account, you can sign up for a 21-day free trial here.

Log into your Metricly account and navigate to the Integrations page. We’re going to be adding the Amazon Web Services integration. Locate the AWS button and click it.

AWS Metricly Integration Card
AWS Metricly Integration

Select the Data Collection tab and ensure that the Data Collection option is selected. Select a name for this integration. The name should describe the account you are integrating with.

In the authentication section, you’ll find an Account ID and an External ID. You will need to set up an IAM role in your account, which will grant Metricly read-only rights to view metrics. You can create this role manually, or use the provided CloudFormation template. I elected to use the CloudFormation template, and AWS took care of everything for me within a few minutes.

 

Once the role has been created, you’ll need to locate the ARN for the IAM role and copy it back into your AWS Integration. If you made use of CloudFormation, the ARN would be in the Outputs section of the page.


Configuring the AWS Integration

From the Data Filters tab, you can select which AWS elements you would like Metricly to retrieve and analyze. For this exercise, ensure that EBS is selected. Selection of the other elements is entirely at your discretion and not necessary to complete the EBS Optimization.

When you have named the integration and added the ARN for the IAM role you created, the Save button will become enabled, and you’ll be able to click the Save button.

Viewing Your Volumes Within the Metricly Application
Creating the AWS Integration will begin a process of importing your metrics into your Metricly account. You can view the metrics if you navigate to the Inventory page. You may have to wait up to 5 minutes for your metrics to be imported, but you should be able to search for the name of the EBS volume you’d like to examine.


Locating Your EBS Volume on the Inventory Page

Once all recent data has been loaded for your EBS volume, the hourglass icon under Data Collected will change to a checkmark. Click on the name of your EBS volume to view some of the metrics associated. While this collection of metrics is informative, unfortunately, the Burst Balance is not shown here. Above all the graphs, you’ll find a link to View all Metrics for this Element.


Useful Metrics Showing Performance of Your EBS Volume

Viewing Your EBS Burst Balance
The View all Metrics for this Element link will take you to the Metrics page, with your specific element already selected. There are 26 metrics which you can view on this page. They consist of raw metrics directly from your AWS account, and aggregated metrics generated by Metricly as their processors ingested your data.

The metric we’re looking for comes directly from your AWS account and is labeled as aws.ebs.burstbalance. In the graphic below, you can observe that my burst balance is at 100%. These metrics show a volume which has been attached to a stopped instance for an extended period. The burst credit balance on this volume has reached its maximum capacity.

Now that we can see that balance, we don’t want to spend our time watching a graphic just in case it experiences extended periods of high IOPS and is in danger of using all its burst credits.

Increased Activity Resulting in a Rapid Decrease in the EBS Burst Balance
Increased Activity Resulting in a Rapid Decrease in the EBS Burst Balance

Consider the situation shown above where increased activity has resulted in the burst balance for the volume approaching 0%. In this case, we’d like to be notified so that we can take appropriate action to ensure that the services supported by the volume continue to operate. Let’s look at how to activate a policy to alert us to this condition.

Working with Policies and Alerts
Return to the Inventory page and select the EBS volume you’d like to monitor. Above the graphics, you’ll find two additional views: Policies and Relationship. Relationships are useful if you would like to learn more about how different elements are related; however, the tab we’re interested in is the Policies tab.

Policies Associated with EBS Volumes
Policies Associated with EBS Volumes

Metricly excels in pre-populating accounts with policies and other reporting tools which make understanding your data much more manageable. The two policies associated with EBS volumes are:

AWS EBS – Depleted Burst Balance and High IOPS Utilization
AWS EBS – Elevated Queue Length Differential with Elevated Latency
Both policies are critical for you to monitor if you want to ensure your volume remains responsive and able to process data for your consumers. Let’s examine how we can modify the Depleted Burst Balance policy to notify us if this circumstance is encountered.

Click on the name of the policy to be taken to the Alerts page. When a policy is selected on this page, you can view a summary of what the policy considers and a history of when the policy has been triggered. Click on Edit Policy to modify this policy and add an alert.


Edit Policy

The Edit Policy page displays details about the policy and additional information. Four tabs display:

Scope – Allows you to filter and include only the elements you want to monitor
Conditions – Specific parameters and thresholds relating to the metrics from the elements
Notifications – Automates alerting actions
Description – Additional information about the alert.

Policy Configuration Window

Let’s look at the Notifications tab in more detail. This tab lets you automate the actions which are taken when the policy conditions are matched. Policy conditions must be reached for a duration of time which is specified on the Conditions tab.

To add a notification, click the Add Notification button. Notification types which are available are Email, HipChat, OpsGenie, PagerDuty, SNS, Slack, and Webhook. Select the option which you would like Metricly to execute, and then complete the configuration options. The system provides the opportunity to test the notification when it is created so that you can ensure it works as expected.