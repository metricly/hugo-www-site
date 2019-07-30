+++
author = "Mike Mackrory"
category = "DevOps"
date = "2019-04-15"
description = "We'll cover everything you need to know about AWS AMI management in this article, ranging from best practices, to the overall strategy for managing an AMI lifecycle."
draft = true
featured = false
featured-image = "ami.png"
layout = "single"
thumbnail-image = true
title = "AWS AMI Management—A Lifecycle Strategy With Best Practices"
url = "/aws-ami-management/"
+++
[Amazon's Elastic Compute Cloud (EC2)](/ec2-instances/) is one of the foundational services that launched Amazon Web Services (AWS) into the successful Cloud empire of today. When Amazon announced its new EC2 service in 2006, the Amazon Machine Image (AMI) was the virtual appliance which would define and create virtual machines on the platform.

If you've deployed applications on EC2, your deployment process would have included the creation of an AMI. Each new version of your application which you build and deploy to AWS has a unique AMI associated with it. As DevOps teams embrace continuous integration and deployment (CI/CD), a surfeit of AMIs ensues.

In this article, we're going to talk about best practices associated with managing your organization's AMI collection. We're going to start by looking at what goes into an AMI, and we'll talk about recommended practices surrounding the creation of new AMIs, including golden AMIs and the golden AMI pipeline. Finally, we'll discuss strategies for retention and decommissioning of old AMIs.

### Anatomy of an AMI

An AMI is made up of several core components.

-   Pointer to the default kernel

AMIs include a pointer to the kernel on which to create an EC2 instance. Since its inception, this collection of available kernels has grown from a single Linux option to multiple flavors of Linux and Windows.

-   Template for the root volume

The template defines all libraries, application servers, and applications which the root volume requires.

-   Block device mapping for attached storage

Defines the Elastic Block Storage (EBS) volumes which are to be attached to the new EC2 instance.

-   Launch control permissions

Permissions define the AWS accounts which can use the AMI to launch new instances.

AMIs are stored in AWS S3 after being compressed and encrypted. There is a small charge associated with this storage.

### A Tale of Two AMIs

There are two different types of AMIs we are concerned with in this article. The first type is known as a master image, base image or golden image. We'll be referring to this as a "golden AMI" in this article.

A golden image is created with a stable version of the operating system and includes all of the latest security patches. Organizations typically include common services in this AMI that are applicable for all applications. Examples of these types of services are:

-   Monitoring agents, such as [StatsD](https://github.com/statsd/statsd), Diamond agent, Java agent, and other services which report on the health and performance of the instance and its hosted applications.

-   Security agents which control access to the instance and monitor processes for unauthorized access and modification.

-   Log forwarding agents

Corporations may also include application servers and frameworks within their golden AMIs. The new golden AMI is added to a golden registry, which can then be accessed by the development teams to obtain the latest version of the golden AMI.

The second type of AMI is an "application AMI." When a new version of an application is ready to be deployed, the team starts a new instance based on the latest version of the golden AMI. The application and any dependencies are added to the instance, which is then used to create the latest version of the application.

Development teams typically use a deployment pipeline to automate the process of creating new application AMIs. The pipeline automatically retrieves the latest version of the golden AMI from the registry, and after the new Application AMI is created, the pipeline deploys into the cloud environment and executes automated integration and performance tests against the new image.

### Why You Need an AMI Management Strategy

As engineers improve applications and their underlying systems, each new AMI should represent an incremental improvement over previous versions. An effective AMI management strategy acknowledges this fact, but also recognizes that bugs can make it through the review process and automated testing suites and end up in the production environment. Providing development teams with access to prior versions of an application supports troubleshooting, auditing and rollback efforts as needed.

An effective strategy should define:

-   Naming and cataloging procedures for new AMIs within the organization.

-   An appropriate retention policy for AMIs which also addresses any legal and regulatory requirements.

-   A refresh policy based on new versions of the golden AMI. Even if an application isn't regularly updated, it may still benefit from being rebuilt using more recent versions of the underlying operating systems and services.

An effective strategy preserves AMIs which may still be required for the system and removes AMIs which are expired, out of date, and don't have the latest versions of security patches and monitoring and security agents.

### The Golden AMI Pipeline

Amazon and some of their customers have collaborated to define a formal process for creating golden AMIs. In May of 2018, Amazon [announced](https://aws.amazon.com/blogs/awsmarketplace/announcing-the-golden-ami-pipeline/) a formalized golden AMI pipeline. The pipeline consists of sample configurations which are available for customers to use and adapt to meet their needs. The high-level workflow below describes the process for creating, publishing and decommissioning golden AMIs.

![](https://lh6.googleusercontent.com/BkClrGJFa0DQ7E-F8t1NOt0DxI64mM_18ogHwA-Z2E8HOYRxgDmPgibBje3VJGwdkIJQkrWqMP_JhD_ZRMVDdQjxxjVw0RIUodLJJXOXV2ImB5j5-UUD0aSXwGxw8WvA7QCfBO--)

Fig. 1 Golden AMI Pipeline. Source: [aws.amazon.com](https://aws.amazon.com/blogs/awsmarketplace/announcing-the-golden-ami-pipeline/)

The pipeline is implemented using CloudFormation templates, and is available from the [Golden AMI Pipeline](https://github.com/aws-samples/aws-golden-ami-pipeline-sample) GitHub repository. A [step-by-step guide](https://github.com/aws-samples/aws-golden-ami-pipeline-sample/blob/master/Golden-AMI-Pipeline-Guide%20V1.0.pdf) walks you through all of the necessary steps to build your golden AMI pipeline. We'll review the construction and components of the pipeline below.

### Infrastructure as Code with CloudFormation

Infrastructure as Code, or IaC, is the process of defining the infrastructure requirements for an application in a standard and machine-readable format. These requirements are included in the version-control repository for the project, ensuring that users can provision the technology stack for an application, and then deploy the application on that stack.

IaC reduces the cost of manually configuring infrastructure, and removes most or all of the frustrations associated with setting up a new environment. AWS uses CloudFormation as its IaC implementation. You can create a CloudFormation template using standard JSON or YAML format. The templates are uploaded to AWS, and then used to provision and configure the stacks and resources defined in the templates.

### Components of the Golden AMI Pipeline

The golden AMI pipeline consists of the following components:

-   Identification of a suitable starting AMI. You can select this AMI from the AWS marketplace. The AMI-ID of the latest version is used to configure the pipeline.

-   A cross-account IAM role defined in  [CloudFormation template](https://raw.githubusercontent.com/aws-samples/aws-golden-ami-pipeline-sample/master/Golden-AMI-Cross-Account-Role.json). Prompts ask for account specific information.

-   The pipeline environment, also defined in a [CloudFormation template](https://raw.githubusercontent.com/aws-samples/aws-golden-ami-pipeline-sample/master/Gold-AMi-Stack-CFT-CI.json). Prompts ask you to define options, such as the appropriate instance type and Amazon Inspector inspection frequency.

-   You can also include a custom CloudFormation template to install monitoring and security agents on the new instance. A sample [CloudFormation template](https://raw.githubusercontent.com/aws-samples/aws-golden-ami-pipeline-sample/master/simpleEC2-SSMParamInput.json) demonstrates adding an SSH key pair, defining an ingress port, and limiting SSH access to a defined range of IP addresses.

Once you've provisioned the infrastructure for your pipeline, you can initiate a new golden AMI build process from the [AWS System Manager - Automation Dashboard](https://console.aws.amazon.com/systems-manager/automation). After selecting the newly created automation action, you can select Execute Automation. Many of the input parameters have default values already set, and all you'll need to provide are the source AMI-ID, preferred instance size, and the name of the AMI you'll be creating.

The infrastructure provisioned by the CloudFormation templates we executed before create a new instance using the provided AMI-ID. The pipeline updates all patches and libraries on the instance. When the update is complete, the custom CloudFormation template is executed on the instance.

The complete and hardened instance is now used to create a new golden AMI which is tagged with the name and version defined by the automation. The new AMI is now used to create an instance which has the Amazon Inspector installed on it. The [Amazon Inspector](https://aws.amazon.com/inspector/) performs a security assessment; the results are emailed to the originator of the process.

Based on the inspection frequency defined by the pipeline, the Amazon Inspector conducts periodic inspections of the golden AMI.  The originator is notified when security patches are required and when dependencies need to be updated. When this occurs, the pipeline can be used to create a new, updated version of the golden AMI.

### Benefits of the Golden AMI Pipeline

Organizations which use a formalized golden AMI pipeline improve the quality and security of their golden AMIs. Development teams can also be confident that they have access to a secure, stable and hardened image on which to deploy their applications.