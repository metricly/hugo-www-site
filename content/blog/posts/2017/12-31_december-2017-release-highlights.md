---
author: "Jason Simpson"
date: "2017-12-31"
title: "December 2017 Release Highlights"
description: "In our quest to be the best monitoring platform, we've added total cost report, OOTB checks, and new column controls to the product this month."
category: "Product Updates"
url: "/december-2017-release-highlights/"
layout: "single"
---

It's been an exciting December here at Metricly! In our quest to be [the best monitoring platform](/product), we've added a simplified AWS data activation along with CloudFormation scripts, more turnkey OOTB checks that require no scripting, and an AWS Total Cost report which is in Beta.

 Not yet setup with Metricly? [Start a free 21-day trial](/signup) to see all the latest features in action!

AWS Services Cost Report (beta)
-------------------------------

The best reports are designed based on user feedback. Our users described a report that would allow them to notice a sudden increase in spending for a given AWS service down to a particular cost allocation tag, before they are surprised to see it in the monthly bill. With this report, they can detect and stop any unnecessary spending as soon as it starts. This report provides both a bird's eye view across all of your services, or allows you to drill down into one service, group by a cost allocation tag, and compare period over period, whether the period is a day, a week or a month. Enjoy using it and please share feedback by opening a ticket under the top-right Help menu. While this report is in Beta, you can access it under the main menu when you click on "beta".

[![AWS Total Cost Report](/wp-content/uploads/2018/02/TotalCost-1024x257.png)](/wp-content/uploads/2018/02/TotalCost.png)

AWS Total Cost Report

Simplified AWS Data Activation along with CloudFormation Scripts
----------------------------------------------------------------

We are always working on new ways to make it easier for our users to get started with the product or activate additional datasources in their existing account. In December we updated the instructions to activate an AWS datasource in our help pages by adding screen shots as visual aid to orient new users who may be less familiar with the AWS console. As a new option for activating a new AWS datasource in your account, we have now added CloudFormation scripts which use [AWS Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) (check it out if you haven't it before) to automate the manual steps involved in the process of activating a new AWS datasource. Just click on the CloudFormation link which is now available on our AWS datasource integration page, which will take you into your own AWS console, and automate the process of creating the required cross-account IAM role with read-only permissions. Everyone enjoys getting a few minutes back in their day.

More Turnkey OOTB Checks that Require no Scripting
--------------------------------------------------

System checks have been around since the dawn of monitoring, and it was due time for a vendor to create a new and modern service platform for checks, which is exactly what Metricly's engineers unveiled in December. Most traditional monitoring tools require users to write a client-side script the checks, and also post JSON payloads along with the checks. Our newly introduced checks require no coding, scripting, or any customized work since they are built into our agents. Users just need to update a configuration file with the port numbers they want to monitor and hit save. We have added heartbeat, URL, port, services, and processes checks as a start. The best part of this feature is how we support custom checks since they bypass the need for composing and posting a JSON payload to our REST API endpoint. All you need to post is a URL that includes the name of a new check, the server that it may be associated with (or not), and a timer for the check, we do the rest automatically so no additional configuration is required to create a brand-new custom check. Have fun with the checks, and let us know if you have more ideas for enhancing this new feature by submitting a support ticket directly from the product. To find out more about check out the [help page](/support/events/checks).

Resize and Movable Columns
--------------------------

We are working on several new enhancements to our tables in the product. Now on the inventory page the columns can be resized and reordered by just clicking on the column header and dragging. Over time this feature will be propagated across all the tables in the product. Remember users can also add/remove columns on the inventory page by clicking on the gear in the upper right corner of the page.
