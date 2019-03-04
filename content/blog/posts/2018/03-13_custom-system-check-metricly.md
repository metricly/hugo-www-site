---
author: "Mike Mackrory"
date: "2018-03-13"
title: "Creating a Custom System Check in Metricly"
category: "Cloud Cost Management"
url: "/custom-system-check-metricly/"
layout: "single"
---

In this article, I’m going to introduce you to an important new offering from Metricly to improve monitoring of your applications and services, allow you to manage your environment better, and automate your monitoring strategies.

We’ll investigate what checks are, how to enable them, and then we’ll create a custom check and add it to a service. Finally, using that check and the data gathered from it, we’ll create an automated alert and notification for cases when the check fails.

What Are System Checks and Why Do I Need Them?
When we think of monitoring, the first case that comes to mind might be failures within a service due to an error emanating from within the service, or without. But just as errors can indicate a problem, a lack of issues reported doesn’t always mean everything is functioning as expected.

A system check is a periodic check-in from your application to your Metricly account to ensure that the service is operating as expected, that resources are still reachable, or that other conditions required for efficient operation exist.

Metricly offers three checks already configured in the agent—one which is enabled by default, and two which are included, but not active. The Heartbeat is a check which is enabled by default, and is an excellent example of a system check. Periodically, the agent will send a small request to the Metricly API.

This check, or Heartbeat, validates that the device is operational and connected, and allows Metricly to confirm that the device is active and responding. We’ll investigate what data a check contains once we’ve configured our environment to use it.

Setting Up Your Environment to Use Checks
Before you can create custom checks for your applications, you’ll need a Metricly account. (If you don’t already have an account,  sign up for a 21-day free trial.)

For this article, I’ll be setting up a Custom Check on a basic Java web-service running on an EC2 instance in the AWS Cloud. Metricly has agents which support Linux and Windows-based devices. We’ll be using the Linux agent in this example, but the process is similar to the Windows agent. You can find out more about the Windows agent here. (Note that you can also perform custom checks without an agent by posting a check to the API using the API key; this way, there is no need to have an agent installed. We won’t use that approach today, but know that it is an option.)

Installing the Linux agent is very easy. Ensure that you have root access to your target device before you begin. Log in to your Metricly account and navigate to the Integration section of your account. Select the Linux Integration button.

The Linux Integration Image
The Linux Integration

Metricly provides you with a command to execute on your target box. This command already includes a unique API key to connect your device and your Metricly account. The installation will complete in less than a minute, and both installs and initializes the agent. We’ll need the API key later when we create our custom check.

After a few minutes, metric data will begin flowing from your application to your Metricly dashboard. With the agent installed, running, and reporting data, we can now enable some checks on our device.

Anatomy of a Check
Earlier I mentioned that the Metricly agent includes default checks. Let’s look at one of those checks to gain understanding into what a check consists of, and what data we’ll need to provide when building a Custom Check.

The Heartbeat check is defined in a file called HeartbeatCollector.conf. In Linux systems, this check and others are located in /opt/netuitive-agent/conf/collectors. The contents of this file are shown below.

[et_pb_dmb_code_snippet admin_label=”Code Snippet” title=”HeartbeatCollector.conf” style=”dark” linenums=”on” usetabwidth=”off” use_border_color=”off” border_color=”#ffffff” border_style=”solid” header_font=”|on|||”]ZW5hYmxlZCA9IFRydWUKdHRsID0gMTUwCg==[/et_pb_dmb_code_snippet]
A check requires four distinct elements:

API ID or API Key
Check Name – Name of the Check
Element FQN – Name of the Device
TTL – Period Between Checks in Seconds
For the Heartbeat check, the agent already has the API Key, the Check Name and the Element FQN, and all that is required is the TTL. The TTL defines the amount of time allowed or expected between checks, and usually includes a buffer to allow for latency and reduce false alarms. The Heartbeat check has the TTL set to 150 seconds. However, this check is set to be reported every two minutes, or 120 seconds. The difference of 30 seconds serves as a buffer.

Defining a Custom Check
For us to define a Custom Check, we’ll need to provide all four elements of the check and submit these to the Metricly API on a schedule.

Very few developers engineer solutions which exist in a vacuum. Services are designed to consume and interact with other services. In this interdependent world, the ability to determine when a dependent service isn’t responding, or when required resources such as a datastore are unavailable is invaluable. And when I first heard about Custom Checks, I was excited by the ability provided to check on the state of my services continually. Having this functionality integrated into an already powerful platform with Metricly is the icing on the cake.

The code snippet below demonstrates the required elements of a Custom Check, and how to submit them to the Metricly API. If you would like to create a similar class for your application, you’ll need to update the class with your Metricly API key. (Note that, in the code below, I’ve obfuscated the API key for security purposes.) We talked about how to get this API key when we walked through how to install the Linux agent a few paragraphs ago.

[et_pb_dmb_code_snippet admin_label=”Code Snippet” title=”Class for Dependent Resource Check” style=”dark” linenums=”on” usetabwidth=”off” use_border_color=”off” border_color=”#ffffff” border_style=”solid” header_font=”|on|||”]QENvbXBvbmVudApwdWJsaWMgY2xhc3MgRGVwZW5kZW50UmVzb3VyY2VDaGVjayB7CiAgIHByaXZhdGUgc3RhdGljIGZpbmFsIFN0cmluZyBBUElfS0VZID0gIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWCI7CiAgIHByaXZhdGUgc3RhdGljIGZpbmFsIFN0cmluZyBDSEVDS19OQU1FID0gImRlcGVuZGVudF9yZXNvdXJjZV9jaGVjayI7CiAgIHByaXZhdGUgc3RhdGljIGZpbmFsIFN0cmluZyBFTEVNRU5UX0ZRTiA9ICJTZXJ2aWNlTmFtZSI7CiAgIHByaXZhdGUgc3RhdGljIGZpbmFsIGludCBUVEwgPSAzNjA7CgogICBwcml2YXRlIHN0YXRpYyBmaW5hbCBTdHJpbmcgTUVUUklDTFlfVVJMID0gImh0dHBzOi8vYXBpLmFwcC5uZXR1aXRpdmUuY29tL2NoZWNrLyI7CgogICBwcml2YXRlIHN0YXRpYyBmaW5hbCBMb2dnZXIgbG9nID0gTG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoWmlwQ29kZUFwaUNoZWNrLmNsYXNzKTsKCiAgIEBTY2hlZHVsZWQoZml4ZWRSYXRlID0gMzAwMDAwKQogICBwdWJsaWMgdm9pZCBwZXJmb3JtRGVwZW5kZW50UmVzb3VyY2VDaGVjaygpIHsKICAgICAgIGJvb2xlYW4gdmFsaWQgPSB2YWxpZGF0ZURlcGVuZGVudFJlc291cmNlc0FyZUhlYWx0aHkoKTsKCiAgICAgICBpZiAodmFsaWQpIHsKICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICBTdHJpbmcgdXJsID0gTUVUUklDTFlfVVJMICsgIi8iICsgQVBJX0tFWSAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgIi8iICsgQ0hFQ0tfTkFNRSArICIvIiArIEVMRU1FTlRfRlFOIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAiLyIgKyBUVEw7CgogICAgICAgICAgICAgICBVUkwgb2JqID0gbmV3IFVSTCh1cmwpOwogICAgICAgICAgICAgICBIdHRwc1VSTENvbm5lY3Rpb24gY29uID0gKEh0dHBzVVJMQ29ubmVjdGlvbikgb2JqLm9wZW5Db25uZWN0aW9uKCk7CiAgICAgICAgICAgICAgIGNvbi5zZXREb091dHB1dCh0cnVlKTsKICAgICAgICAgICAgICAgRGF0YU91dHB1dFN0cmVhbSB3ciA9IG5ldyBEYXRhT3V0cHV0U3RyZWFtKGNvbi5nZXRPdXRwdXRTdHJlYW0oKSk7CiAgICAgICAgICAgICAgIHdyLmZsdXNoKCk7CiAgICAgICAgICAgICAgIHdyLmNsb3NlKCk7CgogICAgICAgICAgICAgICBpbnQgcmVzcG9uc2VDb2RlID0gY29uLmdldFJlc3BvbnNlQ29kZSgpOwogICAgICAgICAgICAgICBsb2cuaW5mbygiXG5TZW5kaW5nICdQT1NUJyByZXF1ZXN0IHRvIFVSTCA6ICIgKyB1cmwpOwogICAgICAgICAgICAgICBsb2cuaW5mbygiUmVzcG9uc2UgQ29kZSA6ICIgKyByZXNwb25zZUNvZGUpOwogICAgICAgICAgIH0gY2F0Y2ggKE1hbGZvcm1lZFVSTEV4Y2VwdGlvbiBtdWUpIHsKICAgICAgICAgICAgICAgbG9nLmVycm9yKCJNYWxmb3JtZWQgVVJMIENyZWF0ZWQiKTsKICAgICAgICAgICB9IGNhdGNoIChJT0V4Y2VwdGlvbiBpb2UpIHsKICAgICAgICAgICAgICAgbG9nLmVycm9yKCJJL08gRXhjZXB0aW9uIik7CiAgICAgICAgICAgfQogICAgICAgfQogICB9Cn0K[/et_pb_dmb_code_snippet]
This class was designed to validate that dependent resources are healthy, and then report this to Metricly in the form of a Custom Check. The function is scheduled to run every five minutes; after successfully validating the health of the dependent resources, it builds and submits a POST request to the Metricly API. The log entries for a successful submission are shown below.

[et_pb_dmb_code_snippet admin_label=”Code Snippet” title=”Log Entries Generated by Custom Check” style=”dark” linenums=”on” usetabwidth=”off” use_border_color=”off” border_color=”#ffffff” border_style=”solid” header_font=”|on|||”]MjAxOC0wMi0yOCAwNjo0MzowMC41MDAgIElORk8gMzU3NiAtLS0gW3Bvb2wtMS10aHJlYWQtMV0gY29tLmVjaG92dWUuY2hlY2tzLkRlcGVuZGVudFJlc291cmNlQ2hlY2sgICAgICAgOgpTZW5kaW5nICdQT1NUJyByZXF1ZXN0IHRvIFVSTCA6IGh0dHBzOi8vYXBpLmFwcC5uZXR1aXRpdmUuY29tL2NoZWNrL1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWC9kZXBlbmRlbnRfcmVzb3VyY2VfY2hlY2svU2VydmljZU5hbWUvMzYwCjIwMTgtMDItMjggMDY6NDM6MDAuNTAwICBJTkZPIDM1NzYgLS0tIFtwb29sLTEtdGhyZWFkLTFdIGNvbS5lY2hvdnVlLmNoZWNrcy5EZXBlbmRlbnRSZXNvdXJjZUNoZWNrICAgICAgIDogUmVzcG9uc2UgQ29kZSA6IDIwMgo=[/et_pb_dmb_code_snippet]
Now that we have this check set up and running on our instance, we can log into our Metricly account, view this check, and set up an alert to notify us when our dependent resources aren’t healthy.

A final note before we wrap it all up with our alert—If you encounter problems setting up your custom alert, consider reaching out to Metricly support. I don’t often have to contact them, but when I’ve needed assistance, I’ve found them to be very insightful and responsive.

Integrating the Custom Check into Your Metricly Account
We’ve already completed all the necessary work to integrate Custom Checks into our Metricly account. To view the checks, log in to your account and navigate to the Inventory page. You may need to add the n.checks column to your inventory table. You can do this by clicking on the settings button in the top right corner of the screen.

Including the n.checks Column
Including the n.checks Column

When you have the n.checks header enabled, you’ll be able to see the checks being reported for each resource. In the image below, you’ll see that the resource shown is reporting the Custom Check we just built, together with the provided Heartbeat and Port checks. The Port check is not enabled by default, but I was able to enable it by editing the configuration file for the check, setting Enabled to True, and the port to 8080.

Resource with Custom, Heartbeat, and Port Checks Reporting
Resource with Custom, Heartbeat, and Port Checks Reporting

Automated Monitoring
Let’s add an alert to notify us when checks fail to report. We create an alert by defining a policy and assigning a notification to that policy when it fails. Navigate to the Policies page, and click on the New Policy button.

New Policy Button
New Policy Button

Enter the name for your policy, and then use the filters under 1 Scope to limit the policy to those resources which you want this policy to validate. When the list displays only those resources you want, click on 2 Conditions.

Click on Add Condition and select Add System Check Condition. Select the check you would like to validate from the list provided. In the images below, I chose the system check condition and then added my custom check as the condition for the policy.

Add System Check Condition
Add System Check Condition

Custom Check Added to Policy
Custom Check Added to Policy

Click on Notifications and choose your preferred notification type. Slack, PagerDuty and WebHook are just some of the available options. I chose email for my alert and added my email address.

Configuring an Email Notification
Configuring an Email Notification

4. Description is an optional tab, but it’s a good practice to elaborate on what this policy will be monitoring, both for the next person who comes along or for yourself when you forget.

Finally, click on Save to save your policy.  If you left the Enable Policy box checked, your policy will now be active. If you unchecked the Enable Policy box, you can enable it from the main Policies page.

After I set up the alert, I shut down my web service to see how effective the alert would be. Within a few minutes, I received the following email.

Email from a Triggered Alert
Email from a Triggered Alert

And there you have it—a simple solution to solve many of the hard-to-detect problems we face as engineers.

Why Use Metricly Checks?
When it comes to running checks, not all monitoring tools are created equal. Metricly offers several important benefits for monitoring checks.

Heartbeat, port and process checks are built into the Metricly agent, eliminating the need to maintain scripts. TTL within checks prevents flapping or latency issues that can lead to false positives. Finally, when posted to the REST API, custom checks in Metricly do not require JSON payloads.

In all of these ways, Metricly makes it simple to write and perform checks. Not yet using Metricly? Signup for a free trial and get started!
