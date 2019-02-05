+++
author = "Mike Mackrory"
date = "2018-09-26T13:44:00+00:00"
title = "AWS Pricing API — How to Use It to Predict and Control AWS Costs"
tags = ["Cloud Cost Management", "DevOps"]
#url = "/aws-pricing-api/"
+++

#### About The AWS Pricing API

Determining the exact price of an AWS service is a particularly important (and notoriously challenging) step in predicting and controling AWS costs. To help with this task, the AWS pricing API was introduced at the end of 2015.

Amazon released the API in response to requests from partners and customers for a programmatic way to access AWS pricing information. Consumers can access the pricing index and locate pricing information for specific services. Currently, the index lists over 100 Amazon offerings, each of which contains data that directs the consumer to detailed pricing information for that service.

Before we get started, if your use-case happens to be EC2 rightsizing, I recommend checking out Metricly’s [AWS Sizing Tool](https://www.metricly.com/aws-sizing-tool/) or [skipping](https://www.metricly.com/aws-pricing-api/#recommendation) to the last section of this article. For all others, read on!

#### What We’ll Cover

Skip to section:

- [Finding the EC2 SKU Report](https://www.metricly.com/aws-pricing-api/#finding)
- [Analyzing the Information in the Report](https://www.metricly.com/aws-pricing-api/#analyzing)
- [Using the Report to Optimize Costs and Performance](https://www.metricly.com/aws-pricing-api/#using)
- [The Metricly EC2 Recommendation Report](https://www.metricly.com/aws-pricing-api/#recommendation)

<br/>
In this article, we’ll first explain how to use the service index, which you can download in JSON format from the following link: https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json (approx. 7 KB).

Second, we’ll trace down to the EC2 SKU report, which lists each possible configuration of EC2 instance available. If you’re a data geek, you’re in for an exciting ride. And if you’re just an AWS enthusiast, I think you’ll find yourself amazed and overwhelmed at the abundance of options and data available within the report.

To conclude, we’ll spend some time dissecting the report, identifying critical information fields, and then we’ll wrap it up by considering how the engineers at Metricly have used this information to help their customers reduce costs and take an informed and intelligent approach to provisioning their environments.

#### Finding the EC2 SKU Report

I’ll share the specific steps I used to locate the EC2 SKU report so you can find it yourself, and so you can replicate those steps if you’d like to dive into pricing information for other AWS offerings. The files are all presented in JSON format, which makes them easy to understand for humans and machines alike. After downloading the index file listed above, I was able to locate the AmazonEC2 object.

**AmazonEC2 Object Inside the Primary AWS Price List**

```json
"AmazonEC2" : {
  "offerCode" : "AmazonEC2",
  "versionIndexUrl" : "/offers/v1.0/aws/AmazonEC2/index.json",
  "currentVersionUrl" : "/offers/v1.0/aws/AmazonEC2/current/index.json",
  "currentRegionIndexUrl" : "/offers/v1.0/aws/AmazonEC2/current/region_index.json"
},
```

<br/>
The two properties we’re specifically interested in are the *versionIndexUrl* and the *currentVersionUrl*.

*VersionIndexUrl* provides us with the URL which returns all of the pricing versions for this offering. Because pricing can change over time, this file can direct us to the specific pricing data which was in place during a particular time range. If we needed to know the pricing policy in place for a specific EC2 configuration on January 15, 2018, we could use the date to identify the policy within the file downloaded from the link below.


https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/index.json (approx. 34 KB)

**Identifying EC2 Pricing Information for a Specific Date**

```json
"20180206032924" : {
  "versionEffectiveBeginDate" : "2017-12-01T00:00:00Z",
  "versionEffectiveEndDate" : "2018-02-01T00:00:00Z",
  "offerVersionUrl" : "/offers/v1.0/aws/AmazonEC2/20180206032924/index.json"
},
```

<br/>
Once we know the active version of the pricing policy for the date in question, we can download it, and find the information we need. We’ll talk about that information next.Figure 2. Identifying EC2 Pricing Information for a Specific Date

*CurrentVersionUrl* will give us the current pricing policy being used. Pricing information is provided at a SKU level. The stock keeping unit (SKU) represents a specific service with a unique configuration that is available in a particular region. The pricing policy lists all of the available SKUs with their configurations. Each SKU is also mapped to various pricing policies, which determine the price of the service based on how the service is purchased, when payment is made, and the terms of any associated contract.

A simple use case could be to determine the most economical strategy for using a specific instance type in a certain region. For example, I might want to know my pricing options for an instance type t2.medium running Suse Linux in the US-West-2 (Oregon) Region. This is a simple question I could get answered through the AWS website, but it’ll illustrate the breadth of information available which can later be used for more complex analysis, reporting, and strategic planning.

We’ll start by downloading the current pricing policy.

<https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/current/index.json> (376,136 KB at the time of writing)

#### Analyzing the Information in the Report

The file I downloaded had over 10 million lines of data. Some text editors can handle files of this size; others may truncate the file, or experience runtime errors. Other options could include:

- Exporting the data into a searchable data source.
- Changing the extension of the download URL from *.json* to *.csv* and opening the file with a product like Microsoft Excel.

<br/>
Using the search feature of my editor, I was able to find the t2.medium I was interested in. This was in the first section of the file in the **_Products_** object.

**Object Describing a t2.medium EC2 Instance running Suse Linux in the US West 2 Region**

```json
"KPFD5NH6DG25VSCB" : {
  "sku" : "KPFD5NH6DG25VSCB",
  "productFamily" : "Compute Instance",
  "attributes" : {
    "servicecode" : "AmazonEC2",
    "location" : "US West (Oregon)",
    "locationType" : "AWS Region",
    "instanceType" : "t2.medium",
    "currentGeneration" : "Yes",
    "instanceFamily" : "General purpose",
    "vcpu" : "2",
    "physicalProcessor" : "Intel Xeon Family",
    "clockSpeed" : "Up to 3.3 GHz",
    "memory" : "4 GiB",
    "storage" : "EBS only",
    "networkPerformance" : "Low to Moderate",
    "processorArchitecture" : "32-bit or 64-bit",
    "tenancy" : "Shared",
    "operatingSystem" : "SUSE",
    "licenseModel" : "No License required",
    "usagetype" : "USW2-BoxUsage:t2.medium",
    "operation" : "RunInstances:000g",
    "capacitystatus" : "Used",
    "ecu" : "Variable",
    "normalizationSizeFactor" : "2",
    "preInstalledSw" : "NA",
    "processorFeatures" : "Intel AVX; Intel Turbo",
    "servicename" : "Amazon Elastic Compute Cloud"
  }
},
```
<br/>
Before we move on, let’s look at the information available and consider a more complex use case where this could be useful. We’re able to see the number of virtual CPUs available and the type of processor being used. Perhaps if processing power is the primary driver for us in selecting this instance type, we could run analysis to determine if there are more cost effective instance types with this same processor configuration. We might also filter those results based on whether the instances are considered **_Current generation_** or if they have at least **_Low to Moderate_** network performance. At this point, custom computer logic might well be more efficient than research on the AWS website, especially if you plan to conduct the analysis regularly.Figure 3. Object Describing a t2.medium EC2 Instance running Suse Linux in the US West 2 Region.

Returning to our example, the most valuable piece of information for us to determine price is the SKU. **KPFD5NH6DG25VSCB** is used to uniquely identify this configuration. We can now search within the **_Terms_** object in the file to identify pricing plans associated with this SKU. I found 11 distinct offers in the terms object which included On Demand, Reserved Instances, Prepaid, Partial Prepaid, 3-Year Contracts, and various combinations of those options.

**Pricing Offer Available for our SKU**

```json
"KPFD5NH6DG25VSCB" : {
  "KPFD5NH6DG25VSCB.JRTCKXETXF" : {
    "offerTermCode" : "JRTCKXETXF",
    "sku" : "KPFD5NH6DG25VSCB",
    "effectiveDate" : "2018-08-01T00:00:00Z",
    "priceDimensions" : {
      "KPFD5NH6DG25VSCB.JRTCKXETXF.6YS6EN2CT7" : {
        "rateCode" : "KPFD5NH6DG25VSCB.JRTCKXETXF.6YS6EN2CT7",
        "description" : "$0.1464 per On Demand SUSE t2.medium Instance Hour",
        "beginRange" : "0",
        "endRange" : "Inf",
        "unit" : "Hrs",
        "pricePerUnit" : {
        "USD" : "0.1464000000"
        },
        "appliesTo" : [ ]
      }
    },
    "termAttributes" : { }
  }
},
```

We can use this information in term objects to compare the unit price with other terms for the same SKU. It is important to ensure that comparisons of the unit price should also ensure that the unit is consistent across all the terms being compared.Figure 4. Pricing Offer Available for our SKU

If your organization is large enough and has negotiated for a discounted rate for AWS services, you should also consider this in any calculations.

Finally, it is important to consider that terms change regularly and that your analysis will need to be routinely conducted if you wish to remain current. Considering the date ranges within the versions index, it appears that modifications are made at the beginning of each month, although some versions did cover multiple months. Consumers can also subscribe to an SNS topic which will publish notifications when prices are modified.

#### Using the Report to Optimize Costs and Performance

The real power in having a report which you can query programmatically is that you can use it to drive processes for the optimization of usage of resources and to manage costs. Combining this information with usage metrics of your AWS resources will allow you to manage your AWS infrastructure better.

Combining all of this data into a consolidated system and writing the logic and functions to support reporting and optimization algorithms will require the commitment of engineering resources. If this is an endeavor your organization is interested in, but you lack the available resources to complete and maintain this system, I’d like to offer an alternative—the EC2 Recommendation report from Metricly.

#### The Metricly EC2 Recommendation Report

I’ve written about the EC2 Recommendation report before, and you can learn more about it from their [AWS sizing guide](https://www.metricly.com/aws-sizing-tool/). The EC2 Recommendation report combines performance information gathered from your AWS account and the resources you’re using. A control panel allows you to specify which metrics you’d like to optimize for, as well as the level of risk your organization is willing to assume to optimize usage and costs.

Metricly combines this information with the pricing information we’ve been discussing in this article. The result is a report that provides recommendations for the types of instances you should be using for maximum performance and minimized costs. The report can also be run on a regular basis, and will be updated as usage patterns change and your organization’s customer base expands.