+++
author = "Mike Mackrory"
category = "Cloud Cost Management"
date = "2019-07-30T04:00:00+00:00"
description = "We explore what the AWS Reserved Instance (RI) Marketplace is, and how to use it. We'll also cover good-to-know restrictions, limitations, and financial considerations of using it."
featured = false
layout = "single"
new-featured-image = "/metricly_marketplace-4x1.png"
thumbnail = "/metricly_marketplace-2x1.png"
thumbnail-image = false
title = "Using The AWS Reserved Instance Marketplace"
url = "/aws-reserved-instance-marketplace/"

+++
In a previous article, [I introduced the concept of Reserved Instances](/ec2-reserved-instance-basics/) and discussed the importance of strategic planning to ensure that your plans to save money don’t end up costing you more in the long run. In this article, we’re going to talk about the Amazon Web Services (AWS) Reserved Instance (RI) Marketplace.

The RI Marketplace can be a useful place to sell your excess capacity, and it can also be a handy resource if you’re looking for RI capacity with a shorter term commitment. Let’s explore the RI marketplace, and discuss everything you need to know to take full advantage of it.

### Introduction to the RI Marketplace

AWS hosts the RI Marketplace, which supports the sale of Reserved Instances by AWS and third parties. Sales are limited to Amazon EC2 Standard Reserved Instances, and while instances are listed free of charge, AWS charges a 12% service fee on the total upfront price of an instance.

Purchases within the RI Marketplace include instances from AWS and third-party sellers. You can access the Marketplace from the [EC2 Dashboard](https://console.aws.amazon.com/ec2) within your AWS Account. From the left-hand navigation panel, click on Reserved Instance under the INSTANCES section, and then click on the **Purchase Reserved Instances** button.

![](https://lh4.googleusercontent.com/_TPQt6r7-e6u9eFFwTTnyVblUISxC527Bo1C39B131msmvIhjjNt_E3HtaysSl_0gXXWMpY6djb20gQ_kXJ7TFmmKYucTzeJUNCgwfx_HXxvdY0CPA5MtnI_f86QX2zpbyjmiP5D =220x44)

You can filter by several options, including platform, instance type, and term. Once you click on the **Search** button, available instances are shown in a sortable list as shown below. Instances that have been listed by other AWS account holders are indicated by having **_3rd Party_** as the Seller name. You may also note the shorter terms and limited available quantity.

![](https://lh3.googleusercontent.com/4qjaf6N6CXDAUorGODo2V5YmllpkjZ_2EjH09a19FK5XFD_mFyOGnZB9XMVkb7hpfKfWcx0PUd3D3xrimBUIB9e45z6uHLqq-wkf7Snb4XorjflR7d1zzMyxRBrmaQKy5fuV0g9T =624x324)_Fig. 1 Purchasing Reserved Instances from the RI Marketplace_

Purchasing Reserved Instances from a third party is precisely the same as purchasing directly from AWS, except that your invoice includes the name of the person or organization who listed the instance for sale.

Now that we’ve looked at purchasing instances from Reserved Instance Marketplace, let’s look at what’s involved in listing your instance on the Marketplace.

### Limitations and Restrictions on Selling Reserved Instances

Before we get to listing your instances, there are some limitations and restrictions of which you should be aware. You can only sell Standard Reserved Instances. Convertible Reserved Instances aren’t eligible to be listed on the Marketplace. Any instance you list needs to have at least one month left in the term. You also need to be the owner of a Reserved Instance for at least a month before you can list it.

Additional requirements include:

* Sellers are required to have a US bank account.
* Sellers are limited to $50,000 in sales each year, but you can apply for an increase.
* Reserved Instances within the GovCloud region are not eligible to be sold.
* Your company name and address are shared with the buyer for tax purposes.

### Selling Your Reserved Instances in the RI Marketplace

Assuming your instance meets the criteria listed above, the first step is to [register as a seller](https://portal.aws.amazon.com/ec2/ri/seller_registration). During this process, AWS collects information about your bank account to disburse funds following a sale, and for tax information. Tax information is used to determine if there are any tax reporting requirements related to the sale of instances by you or your organization. The screenshots below show the stages of registering your account.

![](https://lh5.googleusercontent.com/7srM1pX8GiWyBo3TqNZTerISxs_Y7OaEgt_yYXHjj6jeLnKGdCw1W0n2djX7_X9XaXOaq3KyrXY-MEFlg5MZp4qTYU1KPA5lqgP1NDpwxLbOuxoRcMGPK7xWvmwG4ct6W4iHJJFZ =624x293)

_Fig. 2a Registering as a Marketplace Seller - Seller Name_

![](https://lh4.googleusercontent.com/6ErJUQBdmgNmxfhDfGd0DBajFA6xJ_kon1bS4GdJVGTT5ZaAC9YMMG8JdndQ5Mm4aMcK1YiMFI7YZRlUifxeroECzMCbwFZNGv8rJcmVdQk3hYx-OWo2hbWscHcUPxykyoBgtH5R =624x391)

_Fig. 2b Registering as a Marketplace Seller - Bank Account Information_

![](https://lh4.googleusercontent.com/YebxC6Aqa4bnUEeasYE52YcDI31MA45d1NGbDJZmwAVj901HI8yk4Jvc8QzMmkJoI4ynJwVl-rJblalR5HgZow_s0z5E3VCKUwsdXj3F53JIiRLp2mX5s3t1mfBOQuHTqATy6Dq2 =624x253)

_Fig. 2c Registering as a Marketplace Seller - Confirmation and Tax Profile Link_

![](https://lh4.googleusercontent.com/x0_0JyH0aiu0Oduv_PnBntXsmvvNZqwqAXTkimDF-ACqtNnTaMif9rx-g57LhDrM3_jKaRirR2tuX2-O47qJI1wXdQBVMijjpoS_HbuxTwU0X5_j47hQmuzM9F5Zf7gPbKWM320M =624x531)

_Fig. 2d Registering as a Marketplace Seller - Completing the Tax Profile_

The registration takes a few minutes to complete, as AWS verifies your information and updates your account. If you attempt to list an instance before this process is complete, you receive a message indicating that your registration is still pending.

You can list Reserved Instances for sale by navigating to the [Reserved Instance Dashboard](https://console.aws.amazon.com/ec2/v2/home?#ReservedInstances) and selecting the relevant instances. From the **_Actions_** drop-down, select **_Sell Reserved Instances_** and follow the prompts.

**![](https://lh4.googleusercontent.com/j1NPnki7aE3rrlUq9ZlD25Xi6dzM_z5v-lY0t74ZtfFoLgkWvmSVytpxWzhOJzEqZW8zfF82TaX2mEfea5YZcC19SEsy_lPJ-kNcO_1O_Zufe8kkCRaduqP_hls8Df3JKGw91ohR =624x317)**

_Fig. 3 Listing a Reserved Instance for Sale_

### Financial Considerations When Using The Reserved Instance Marketplace

The Reserved Instance Marketplace is an excellent option to consider if your capacity needs change, but it relies on another party purchasing the remaining term on all of your instances. As the seller, you decide on the sale price, and you should consider any upfront costs you paid as well as similarly priced instances in the market at the time.

As I mentioned above, AWS charges 12% of the upfront sale price when an instance is sold in the marketplace. The remaining amount is transferred to the bank account associated with the Marketplace account within 1-3 business days of any sales being completed. At this time you’ll receive an email from AWS with the details of the transaction.

**Learning More**

The AWS documentation on the [Reserved Instance Marketplace](https://aws.amazon.com/ec2/purchasing-options/reserved-instances/marketplace/) is an excellent resource for the current state of the marketplace and includes links to additional resources. If you would like more information about Reserved Instances in general, including pricing and different options, the[ AWS Reserved Instance](https://aws.amazon.com/ec2/pricing/reserved-instances/) page is beneficial. Finally, Metricly's [2019 Definitive Guide to AWS Reserved Instances](/aws-reserved-instances/) contains everything you need to understand Reserved Instances, and how to use them effectively.