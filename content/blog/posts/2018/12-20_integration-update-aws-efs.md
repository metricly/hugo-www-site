---
author: "Lawrence Lane"
date: "2018-12-20"
title: "Integration Update: AWS EFS Metrics & Policies"
category: "Product Updates"
url: "/integration-update-aws-efs-metrics-policies/"
layout: "single"
---

### About

The [Amazon Elastic File System (EFS)](https://aws.amazon.com/efs/) is a scalable storage solution for Linux-based workloads on AWS Cloud services and on-premise resources.  Metricly now supports some out-of-the-box default policies and metrics for EFS.

What you'll need to get started:

-   [AWS Integration](https://docs.metricly.com/integrations/aws/)

Packaged Policies
=================

-   **Depleted Burst Credit Balance**: There are no burst credits left. The number of burst credits that a file system has is zero.
-   **IO Percentage Critical**: File system has almost reached its limit of the General Purpose performance mode. If this metric is at 100%, consider moving your application to a file system using the Max I/O performance mode.

### Metrics Included

|

Search

 |
| --- |
| FULLY QUALIFIED NAME (FQN) | DESCRIPTION | STATISTIC | UNITS | BASE | CORR | UTIL |
| --- | --- | --- | --- | --- | --- | --- |
| aws.efs.burstcreditbalance | The number of burst credits that a file system has. | avg | bytes | no | yes | no |
| aws.efs.clientconnections | The number of client connections to a file system. | sum | bytes | no | yes | no |
| aws.efs.datawriteiobytes | The number of bytes for each file write operation. | sum | bytes | no | yes | no |
| aws.efs.metadataiobytes | The number of bytes for each metadata operation. | sum | bytes | no | yes | no |
| aws.efs.percentiolimit | Shows how close a file system is to reaching the I/O limit of the General Purpose performance mode. | percent | percent | no | no | yes |
| aws.efs.permittedthroughput | The maximum amount of throughput a file system is allowed. | avg | bytes per second | no | yes | no |
| aws.efs.totaliobytes | The number of bytes for each file system operation, including data read, data write, and metadata operations. | sum | bytes | no | yes | no |
