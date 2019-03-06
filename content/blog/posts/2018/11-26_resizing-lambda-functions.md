---
author: "Lawrence Lane"
date: "2018-11-26"
title: "Resizing Lambda Functions Just Got Easier"
category: "Product Updates"
url: "/resizing-lambda-functions-got-easier/"
layout: "single"
---

Metricly now ingests a combination of CloudWatch logs to compute the memory utilization for a given Lambda function, calculated off the max used and billable memory values. Check out the [Lambda Sizing Tool Admin Guide](https://docs.metricly.com/integrations/lambda-sizing/) for a detailed breakdown of this tool.

### How it Works

Lambda function pricing is based on memory allocation, not actual usage. Your function's actual memory usage is logged in CloudWatch. We use the log information to calculate your usage against the function's allocated memory and aggregate it over time for you to filter and sort.

1.  Lambda function executes every five minutes.
2.  Lambda usage reporting logs are collected.
3.  CloudWatch Logs are then parsed to produce Metricly samples.
4.  Samples are collapsed into a single ingest payload and sent to Metricly.

### What Can I do With it?

Use this computed memory utilization metric (a*ws.lambda.memory.utilization*) to target oversized Lambda functions. Functions require at least 128mb of memory to run, so keep that in mind when looking for candidates to resize. Not every function is a good candidate for downsizing.

Here's a high-level workflow for discovering and resizing Lambda functions:

1.  Check the amount of RAM used.
2.  Determine volatility.
3.  Gauge CPU usage .
4.  Consider invocation durations; less RAM may elongate duration if CPU bound.
5.  Factor in primary functions; network heavy functions respond to memory reductions better than CPU heavy functions.
6.  Resize.
7.  Monitor performance.
8.  Refactor if/when necessary.

[Click here to review the Lambda Sizing Tool and get started!](https://docs.metricly.com/integrations/lambda-sizing/)
