---
author: "Lawrence Lane"
date: "2019-01-02"
title: "Integration Update: AWS Route 53 Metrics & Policies"
category: "Product Updates"
url: "/integration-update-aws-route-53/"
layout: "single"
---

### About

[Amazon Route 53](https://aws.amazon.com/route53/) is a cloud Domain Name System (DNS) web service that translates names like `www.example.com` into numeric IP addresses like 192.0.2.1; it is also fully compliant with IPv6. Metricly now supports some out-of-the-box default policies and metrics for Route 53.

What you'll need to get started:

-   [AWS Integration](https://docs.metricly.com/integrations/aws/)

### Packaged Policies

-   **Connection Time: **The connection time is higher than usual. *ConnectionTime* is the average time, in milliseconds, that it took Route 53 health checkers to establish a TCP connection with the endpoint.
-   **Health Check Status**: The Health Check failed. *HealthCheckStatus* is the status of the health check endpoint that CloudWatch is checking. 1 indicates healthy, and 0 indicates unhealthy.
-   **Time of First Byte**: The time to first byte is higher than usual. *TimeToFirstByte* is the average time, in milliseconds, that it took Route 53 health checkers to receive the first byte of the response to an HTTP or HTTPS request.

### Metrics Included

|        FULLY QUALIFIED NAME (FQN)        |                                                          DESCRIPTION                                                          | STATISTIC |             UNITS             | BASE | CORR |
|:----------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:|:---------:|:-----------------------------:|:----:|:----:|
|       aws.route53.healthcheckstatus      |      The status of the health check endpoint that CloudWatch is checking. 1 indicates healthy, and 0 indicates unhealthy.     |    min    |              none             |  no  |  no  |
| aws.route53.healthcheckpercentagehealthy |                 The percentage of Route 53 health checkers that consider the selected endpoint to be healthy.                 |    min    |            percent            |  yes |  no  |
|        aws.route53.connectiontime        |               The average time it took Route 53 health checkers to establish a TCP connection with the endpoint.              |    avg    |          miliseconds          |  yes |  yes |
|        aws.route53.timetofirstbyte       | The average time that it took Route 53 health checkers to receive the first byte of the response to an HTTP or HTTPS request. |    avg    |          miliseconds          |  yes |  yes |
|       aws.route53..sslhandshaketime      |                        The average time it took Route 53 health checkers to complete the SSL handshake.                       |    avg    |          miliseconds          |  yes |  no  |
| aws.route53.childhealthcheckhealthycount |                                         The number of health checks that are healthy.                                         |    avg    | count (healthy health checks) |  yes |  no  |
