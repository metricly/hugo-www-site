---
author: "Mike Mackrory"
date: "2017-03-27"
title: "Monitoring Your Container Environment with Metricly"
description: "Container environments can be volatile and options for monitoring them effectively are few. Here's how to craft a monitoring plan for maximum stability."
category: "Cloud Monitoring"
url: "/container-monitoring-metricly/"
layout: "single"
---
Docker, the currently dominant software containerization solution, allows a software application or service to be packaged into a complete unit that includes the code, runtime and any tools or libraries. This container can then be deployed onto a Docker machine, and be expected to run the same regardless of the underlying environment.

In order to provide organizations with an environment in which to deploy their Docker-based applications, Amazon Web Services introduced their EC2 Container Service or ECS. ECS is a container management service that allows users to create, run, stop and manage Docker instances on EC2 instances within the Amazon Cloud. ECS provides an environment which manages the placement of containers based on resource needs, and takes care of managing the underlying infrastructure, so developers can focus on the containers themselves.

Anatomy of Amazon EC2 Container Service
---------------------------------------

[![](/wp-content/uploads/2017/07/ECSIcon.png)](/wp-content/uploads/2017/07/ECSIcon.png)Amazon ECS is essentially just a platform to support Docker instances, with added support to manage those instances and simplify implementation for the user. With that said, it is important to note that Amazon has introduced slightly different terms to describe aspects of the Docker environment, and it is worth examining these before we continue.

**Cluster:** This refers to the group of EC2 instances which will be used to host your Docker containers.

**Scheduler:** The scheduler is responsible for starting up containers and assigning them to instances within the cluster.

**Tasks:** Tasks are what AWS calls the containers which are running on the cluster.

The cluster is usually hosted in an [auto scaling group](/optimize-auto-scale-groups-asg-tuning-report), or ASG, which allows for the size of the cluster to be scaled up and down with ease, and automatically regenerate terminated instances.

A benefit of using ECS is that you can leave the decision about which instance to deploy your instances on for the scheduler to determine. The scheduler also assists in the redeployment of containers, or tasks when updates are needed.

Which Container Metrics Should You Monitor?
-------------------------------------------

[![EC2 Container Service Utilization Metrics](/wp-content/uploads/2017/07/ECSUtilizationMetrics-1024x320.png)](/wp-content/uploads/2017/07/ECSUtilizationMetrics.png)

While AWS ECS manages the environment on your behalf, it is still imperative that an effective [monitoring strategy](/evaluate-monitoring-strategy) be developed and put in place to ensure that the system continues to operate in an optimal way, and enables rapid identification of problem areas.

One of the benefits which container-based environments have over virtual machines is that resources on the host machine are shared between the containers. Shared resources typically mean more efficient use of those resources, particularly if the scheduler is distributing tasks appropriately, but the negative effect of this is that it is entirely possible for a container to consume all the resources on the host machine/instance, and thus affect a denial of service attack against other containers on the same host.

Another of the potential headaches involved in monitoring a container-based solution is the volatility of the containers themselves. This combined with the fact that [monitoring of containers](/monitor-performance-docker-containers) is still in its infancy mean that monitoring options for containers are limited at best, but due to the popularity of the platform, and rapid and enthusiastic growth around the technology, additional monitoring options will likely be available soon.

The key metrics that you should be concerned with monitoring are CPU reservation and usage, and memory reservation and usage.

Enabling Docker Integration with Metricly
------------------------------------------

[![Monitoring EC2 Container Service: Metricly Docker Integration](/wp-content/uploads/2016/04/integrations-docker.png)](/wp-content/uploads/2016/04/integrations-docker.png)

Metricly has supported ECS monitoring since June of 2016, and provides basic monitoring out of the box through CloudWatch. If you are already a Metricly customer, you should be able to view metrics related to your ECS clusters shortly after deployment.

The following steps assume you already have a Metricly account. If you don't yet have a Metricly account, then you'll want to set up an account before proceeding through this article. Metricly offers a 21-day free trial which you can sign up for [here](/signup).

Log in to your Metricly account, and click on the Integrations option at the top of the page. We're going to include two integrations in our container---First, the Linux agent itself, and then we'll enable Docker metrics collection on the agent. There are two approaches to adding these to your containers.

The first is by installing the Linux agent manually on a base image, enabling the Docker collector, and then saving the resulting image as a new Docker image for your projects. This is the process I followed, and is detailed on the [Linux Agent](https://hlp.app.netuitive.com/Content/Integrations/linux.htm) and [Docker Integration](https://hlp.app.netuitive.com/Content/Integrations/docker.htm) pages.

The second approach is the use of the docker-agent image available on [Docker Hub](https://hub.docker.com/r/netuitive/docker-agent/). While I did not attempt this approach, the documentation appeared to be very comprehensive in detailing the installation steps and presenting the various options available.

Monitoring Your Containers
--------------------------

Monitoring of container-based environments is still very much in its infancy. Your strategy for monitoring should be centered around the resources on the host machine, ensuring that adequate resources exist for efficient operation of the applications in the containers which are deployed. With this growing movement, the future of monitoring of container-based environments looks to be exceptionally bright, and definitely one to keep an eye on.
