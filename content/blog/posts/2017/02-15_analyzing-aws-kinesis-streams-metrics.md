---
author: "Steve Tidwell"
date: "2017-02-15"
title: "Analyzing AWS Kinesis Streams Metrics"
description: "AWS and Metricly provide several different collected and computed metrics to help monitor your Kinesis Streams and the application stack that utilizes it."
category: "DevOps"
url: "/analyzing-aws-kinesis-streams-metrics/"
layout: "single"
---

Amazon Kinesis Streams is [managed service hosting by AWS](https://aws.amazon.com/kinesis/streams/) that provides a pipeline for continuous streaming of various types of data between data producers and data consumers. Data producers emit message data that flows through Kinesis Streams and is then consumed by the data consumers.

![Kinesis Streams](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/02/kinesis.png)

The messages that flow through Kinesis can include logs, streaming metrics, notifications, or almost any other type of data. From there, Kinesis can expose that data for data consumers, which could ingest, store, or process that data for analysis with various data analytics tools.

This is Part 1 of a two-part post. In this post, we're going to dive into the metrics provided by Amazon when using Kinesis; give a brief description of what each means; and try to cover some of the best practices surrounding the metrics provided by Kinesis and [Metricly](/aws-cost-tool).

Kinesis Streams Monitoring Metrics

------------------------------------

Simply put, collected metrics are those provided by your infrastructure, middleware, and applications. These are the standard metrics with which most technical teams are familiar, such as CPU, disk, or network usage, as well as service-specific metrics like those that will be discussed in this post.

In November of 2016, Metricly [announced](/november-2016-release-highlights) an updated [Quick Start Package for Kinesis](https://github.com/netuitive-community-packages/netuitive-packages-aws-kinesis). AWS and Metricly provide several different metrics to help monitor your message pipeline and the application stack that utilizes it. Each of these are covered briefly below.

Kinesis Streams Collected Metrics
---------------------------------

The metrics provided by Amazon and Metricly for Kinesis are listed below. Key metrics to watch are specifically mentioned in the list.

-   **GetRecords.Bytes** is the number of bytes retrieved from a Kinesis stream over a given time period by a single GetRecords request.\
-   **GetRecords.IteratorAgeMilliseconds** is the age in milliseconds of the last record retrieved from a stream by all GetRecords requests. The lower this metric the better, as a zero value indicates that records read by consumers are current with the stream.\
-   **GetRecords.Latency** tells how long in milliseconds it takes for GetRecords requests to complete during a given time period. Higher latency may indicate problems reading records from the stream.\
-   **GetRecords.Records** is the count of records retrieved from a shard over a given time period for a single GetRecords request.\
-   **GetRecords.Success** is the count of successful GetRecords performed per stream over a given time period.\
-   **IncomingBytes** is the number of bytes that are put into a stream by all [PutRecord](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html) *and* [PutRecords](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html) requests made to the stream over a given time period. This is a key metric to watch. Expect this to correlate very closely with the sum of data (in bytes) output by all of your producers using the PutRecord and PutRecords requests to the stream.\
-   **IncomingRecords** is the count of records successfully put into a stream by all PutRecord *and* PutRecords requests made during a given time period. This is also a key metric to watch. This should correlate very closely with the sum of PutRecord *and* PutRecords requests output by all of your producers.\
-   **PutRecord.Bytes** is the number of bytes put into a stream by the PutRecord requests made to a stream by data producers during a given time period.\
-   **PutRecord.Latency** tells how long in milliseconds it takes per PutRecord request to a stream. This metric is also similar to GetRecords.Latency, but from the input side of the stream. Generally speaking, the lower this metric, the better.

-   **PutRecord.Success** is the count of successful PutRecord requests performed per stream over a given time period.\
-   **PutRecords.Bytes** is the number of bytes put into a stream by the PutRecords requests during a given time period.\
-   **PutRecords.Latency** tells how long in milliseconds it takes per PutRecords request to a stream. This is similar to PutRecord.Latency, and a lower value is generally better.

-   **PutRecords.Records** is the count of successful records put into a stream with a PutRecords request over a given time period.\
-   **PutRecords.Success** is the count of successful PutRecords requests performed per stream over a given time period.\
-   **ReadProvisionedThroughputExceeded** is the count of GetRecords calls that have been throttled during a given time period. It is indicative of your consumers exceeding the limits allowed by Kinesis when reading from a shard. A value of 0 indicates that your stream is keeping up with your data consumers. A value other than 0 indicates that the throughput for the stream is being exceeded, and you may need to provision additional shards.\
-   **WriteProvisionedThroughputExceeded** is similar in nature toReadProvisionedThroughputExceeded, but it applies to the data producer side of the stream.

In general, when working with Kinesis, watch for higher latency on both sides of your stream. Watch the amount of data going into and out of the stream for sudden changes. Failures with producers emitting data to the stream, and consumers retrieving data from the stream are likely indicators of problems with your stack.

You can also find additional information about the metrics provided by referring to Amazon [documentation](http://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html), as well as the [Metricly AWS Integration Metrics](https://docs.metricly.com/integrations/aws-integration/metrics/#kinesis-1) documentation.

Conclusion
----------

In this post, we talked about Amazon Kinesis Streams, what Amazon Kinesis Streams does, and what metrics are provided by both AWS and Metricly for Kinesis Streams. In addition, we've also covered some best practices when using these metrics.

If you're interested in using Metricly to monitor your Kinesis Streams,check out Part 2 of this series, ["Monitor AWS Kinesis Streams with Metricly"] (/monitor-aws-kinesis/).
