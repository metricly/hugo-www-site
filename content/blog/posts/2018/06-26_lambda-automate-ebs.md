---
author: "Mike Mackrory"
date: "2018-06-26"
title: "Using Lambda To Automate EBS Burst Balance"
category: "DevOps"
url: "/lambda-automate-ebs-burst-balance/"
layout: "single"
featured-image: "ebs-alerts.png"
thumbnail-image: true
---

In a [previous article](/ebs-burst-balance-aws/), I introduced you to EBS Burst Balance and the tools available from Metricly to monitor your EBS Burst Balance, and how to set up alerts when the balance falls below a specified threshold.

In this article, I'd like to explore the different ways in which you could respond to a decrease in the burst capacity balance of your EBS volumes. We'll discuss a few possible solutions to this issue, then dive into my preferred approach, which involves using Lambda functions to increase EBS volume capacity automatically.

See also:\
[Calculating IOPS Utilization For EBS Volumes](/iops-calculator-for-ebs-volumes)

### The Problem With Using EBS Volumes

As I mentioned in my previous article, the standard provisioning for a GP2 volume is 100 write operations and 3,000 read operations per second. These thresholds indicate the operating capacity which the volume can support with a sustained load.

If the operations are less than these thresholds, the volume will accrue a balance of burst credits based on the size of the volume. Credits increment at a rate of 3 credits per second for each GiB of capacity. When the load exceeds the standard thresholds, the burst balance is used to provide the additional operational capacity, up to a rate of 3,000 operations per second as long as burst credits are available.

Ideally, your volumes will be sized to support a generous accumulation of credits to support peak load times. You also don't want to oversize the volume, and always have excess credits but pay for an unnecessarily large volume.

Our goal here is to size the volume appropriately to support operational needs. When standard traffic increases to a point where our credit balance becomes too low, we want to increase the size of our volume to offset those needs. We'll base this on a Metricly policy which will monitor the available burst credits.

We could add another policy to alert us if the rate of consumption is astronomically high, thus supporting incremental volume capacity adjustments for organic growth in our application---but it will still notify us of events which exceed a defined rate of credit depletion.

### Before You Get Started

The approach I'll describe below is one possible solution and depends on your use case and projected growth. A different solution which might warrant an investigation is to use an IO1volume type instead. The IO1 type is a provisioned IOPS SSD solution which supports higher rates of reading and writing.

You could implement a similar solution to the one I'll present below to actively manage your provisioned IOPS system and ensure you are always provisioned at an appropriate level to support your business needs, without being over-provisioned. Similar policies would need to be created in your Metricly account, and the Lambda function could be invoked as necessary to increase or decrease IOPS provisioning.

Important Considerations

The following solution will modify the size of your EBS volume. It is provided as a proof of concept and should be carefully analyzed before any part of it is implemented in a production environment. Please pay particular attention to the following aspects of this solution.

-   The Lambda requires the use of an IAM Role which gives it full access to the EC2 instances and associated EBS volumes in your account.
-   EBS volumes can be increased in size. They cannot have their size decreased.
-   Volume increases are done in full GiB increments.

### Solution to Automatically Increase EBS Volume Capacity

Let's craft our solution. We're going to work backward from an AWS Lambda function---to the policy in your Metricly account. If you don't already have a Metricly account, you can sign up for a [21-day free trial here](/signup/). I'd also recommend you read my [previous article](/ebs-burst-balance-aws) to begin tracking your EBS Burst Credit balance before you attempt an automated response.

We'll complete the following steps in order:

1.  Create an IAM role which will allow for resizing the EBS volume.
2.  Create and upload an AWS Lambda function to perform the resize operation.
3.  Connect the Lambda function to the API Gateway.
4.  Modify a policy in your Metricly account.
5.  Create a webhook to invoke the Lambda automatically when the policy is triggered.

1\. Creating the IAM Role

The first step is to create an IAM role which will allow the Lambda function to be invoked, to gather information about a specific volume, and modify the size of that volume under certain conditions.

I called my IAM role ***EBSLambda*** and attached the following policies to the role:

-   AmazonEC2FullAccess
-   AmazonLambdaBasicExecutionRole

2\. Creating a Lambda to Provision Additional EBS Capacity

The complete code base for the Lambda function is located in this [GitHub Repository](https://github.com/echovue/ebs_capacity_adjuster). The function accepts a JSON-formatted object which specifies the volumeID, the size of the increment and the maximum size of the volume.

    {
        "volumeId": "vol-00c1c7dfb43f5858",
        "increment": 1,
        "maxSize": 10
    }

Sample JSON Object to Invoke the Lambda

The project will need to be compiled into a fat JAR file and then uploaded into a new Lambda project which has the IAM role from the previous section attached. The handler which will be called by the Lambda is *com.echovue.ebsVolumeAdjust.EBSVolumeAdjuster::handleRequest*.

The following excerpt shows the Java code for the handler. We begin by querying AWS for the current volume information. We then check the size relative to the maxSize, and the state. A volume that has been recently resized will progress through a series of states as it is modified and optimized. Resizing is not possible in these states.

If all checks pass, then the volume is modified by incrementing the size by the value passed in with the request.


    public String handleRequest(EBSCapacityConfigEvent event, Context context) {
        LambdaLogger logger = context.getLogger();
        DescribeVolumesRequest request = new DescribeVolumesRequest();
        Collection < String > volumes = new ArrayList < > ();
        volumes.add(event.getVolumeId());
        request.setVolumeIds(volumes);
        ModifyVolumeResult result = null;
        DescribeVolumesResult volumeResults = amazonEC2.describeVolumes(request);
        for (Volume volume: volumeResults.getVolumes()) {
            Integer size = volume.getSize();
            logger.log("Size: " + size + "\n");
            logger.log("Max Size: " + event.getMaxSize() + "\n");
            logger.log("Volume State: " + volume.getState() + "\n");
            if (size < event.getMaxSize() && volume.getState().equals("in-use")) {
                ModifyVolumeRequest modification = new ModifyVolumeRequest();
                modification.setSize(size + event.getIncrement());
                modification.setVolumeId(volume.getVolumeId());
                result = amazonEC2.modifyVolume(modification);
            } else {
                if (size == event.getMaxSize()) {
                    logger.log("Max volume size reached.\n");
                }
                if (!volume.getState().equals("in-use")) {
                    logger.log("Cannot increase size of volume in " + volume.getState() + " state.\n");
                }
            }
        }
        if (result != null) {
            return result.toString();
        } else {
            return "No modification";
        }
    }

3\. Creating an Endpoint with API Gateway

We now need to enable access to our Lambda, and we can do this by creating an API in the Amazon API Gateway. Log in to the AWS Console, and navigate to the [API Gateway homepage](https://console.aws.amazon.com/apigateway/).

Click the Create API button.

Choose the New API option, and enter a name and description. I selected the "Edge optimized" Endpoint Type.

![Creating the API](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-28.png)

Once you have created the API, click on Actions in the Resources column, and choose Create Method. Then, from the resultant drop-down, Select POST and click on the checkmark.

![Adding a POST Endpoint to the API](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-35.png)

The Integration type for this endpoint is a Lambda Function. You'll need to select the Lambda Region, and then type in the name of your Lambda Function. The region into which your Lambda is deployed isn't readily identifiable when you're deploying your Lambda, so you might have to do a little hunting. Fortunately, you'll get a notification when you select a region that has no Lambda functions deployed in it.

![POST Endpoint Configuration](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-40.png)

When you click on the Save button, you'll receive a notification asking you to confirm that this API will have permission to invoke your Lambda function. Click OK to grant the permission.

![Graphical Display Showing the POST Endpoint Configuration](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-43.png)

Your Lambda is now configured and can be tested, secured and deployed. To check your API, click on the Test box, and then enter a test payload for the API. I used the JSON object I included as an example above. You may also want to secure your API at this point to reduce the chances of malicious use.

With your API secure, you can now deploy it. Click on the name of your API, and then selectDeploy API from the list of options. Select [New Stage] from Deployment stage, and then enter the details for the deployment.

![Complete the Deployment Details for the API](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-46.png)

Clicking the Deploy button will deploy your API and provide you with a URL to use to invoke your API, as well as a host of other options for additional configuration and publishing of your API. For this example, all you will need is the URL.

![Deployed and Ready](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-49.png)


4\. Modify the Policy in Your Metricly Account

We're now going to connect the Lambda function to respond to the policy which is invoked when the burst credit buffer falls below 20%. Navigate to the [Policies](https://app.metricly.com/#/alerts) page. We're going to create our Webhook on the *AWS EBS -- Depleted Burst Balance and High IOPS Utilization*policy. Locate this policy and click on it.*

![Edit the AWS EBS - Depleted Burst Balance](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-52.png)


5\. Creating the Webhook to Invoke the Lambda From the Policy

Click on the Notifications option, and then click the Add Notification button. For Notification Type, select Webhook.

The configuration of the Webhook is relatively straightforward. I set Re-notify to 30 minutes since I want to give the volume time to recover and recoup credits before increasing it again. Now click on New Webhook. Provide a name and enter the URL from the API Gateway we set up previously.

You'll need a name and the URL created for the API. Select the "custom payload" option. I entered the following payload which will allow my volume to be scaled to 16 GiB in 1 GiB increments. *${elementId} *allows the volumeId to be populated by Metricly, which is especially useful if you are applying a policy like this to multiple volumes.*


    {
        "volumeId": "{elementId}",
        "increment": 1,
        "maxSize": 16
    }

![Webhook Configuration](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/06/word-image-53.png)
