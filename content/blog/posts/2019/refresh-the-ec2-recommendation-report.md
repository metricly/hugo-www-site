+++
category = "Product Updates"
date = ""
description = "Compare EC2 utilization data against ideal AWS instance configurations"
draft = true
featured = false
featured-image = ""
layout = "single"
nofollow = false
thumbnail-image = ""
title = "Refresh: The EC2 Recommendation Report "
url = "/refresh-ec2-recommendation-report/"

+++
The [EC2 Recommendation report](https://docs.metricly.com/reports/reports-ec2-recommendations/ "EC2 Recommendation report") simplifies the task of sizing your instances. In this article, we're going to take a tour through its new UI. But first, let's go over some common uses for the EC2 Recommendation report. 

**Common Uses**

* Comparing EC2 utilization data against the AWS SKU library to find the most optimal configurations for workloads
* Planning instance family migrations or upgrades
* Pricing efficient resource scaling
* Reducing cost and size of over-allocated resources 

Want to see this report in action? See [How to Right Size EC2s and Maximize Your AWS Budget](https://www.metricly.com/right-size-aws-ec2/ "How to Right Size EC2s and Maximize Your AWS Budget").  

## What's Changed

The Nav Bar has been streamlined to house all of your major actions. Let’s go through them left to right.

![](/ec2 recommendation nav.png)

* **Report Title & Saved Reports**: Access any saved reports.
* **Time Frame**: Adjust report’s examination period of your services with several intervals from _Latest Day_ to _Year to Date_.
* **Configure**: Set visualization, filters, and report sorting.
* **Download**: Get a .CSV file of the report for your records.
* **Save**: Save a new report.
* **Save As..**: Overwrite a currently loaded, existing report save.
* **Clear**: Restart your data exploration from scratch. (Does not delete saved reports).

## Configuration 

All configuration options have been centralized in the modal shown below.

![](/ec2 reco config modal.png)You can access this modal by clicking **CONFIGURE** in the navigation bar.

* **Scope of Analysis**: Find and select elements based on name, attributes, tags, or use exclusions. 
* **Utilization Preferences**: Set target utilization percentages for CPU and memory and select your preferred data aggregation method. 
* **Instance Type Preferences**: Add recommendation constraints based on instance series, generation, and size.
* **Display options**: Customize your table of results. 

## What's New

Like the refreshed [AWS Services Cost report](https://docs.metricly.com/reports/reports-aws-services-cost/ "AWS Services Cost report"), configuration now comes with a **live preview** report of your data! As you update your visualization, filtering, and other report options, the preview updates _before_ you hit apply.

Check out the [user guide](https://docs.metricly.com/reports/reports-ec2-recommendations/ "EC2 Recommendation report user guide") to learn more. 