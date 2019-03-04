---
author: "Mike Mackrory"
date: "2017-05-03"
title: "Monitoring Elasticache with AWS ElasticSearch Service"
description: "Check out ways to monitor the performance of AWS Elasticache using CloudWatch and ElasticSearch, making it available for later monitoring analysis."
category: "Cloud Cost Management"
url: "/monitoring-aws-elasticache-elasticsearch/"
layout: "single"
---

Time is money. Nowhere is that truer than on the Web, where faster sites win more customers and generate more sales. And by faster, we're talking about differences of fractions of milliseconds in response times and content retrieval. This need for speed has businesses implementing in-memory data caches to maintain a competitive edge.

In this article, we'll examine one such solution. Specifically, we'll take a look at in-memory cache offerings on Amazon Web Services (AWS). Then we're going to look at ways to monitor the performance of AWS Elasticache using CloudWatch and ElasticSearch. This approach will be interesting for two reasons:

-   Metric data is available in CloudWatch for two weeks, and by moving it to ElasticSearch, it will be available much longer for additional analysis.
-   Exporting AWS ElastiCache data to ElasticSearch isn't currently supported by AWS, so we'll be getting creative when it comes to that step.

AWS ElastiCache Implementations
-------------------------------

AWS ElastiCache has been available since 2011 and has included Memcached and Redis implementations. Both solutions provide distributed in-memory caching, similar performance, and are ideal solutions for requirements such as atomic counters---but there are cases where you may want to select one over another:

-   Redis is the preferred choice for:
    -   Ranking and sorting in memory
    -   Storing advanced data types such as sets, lists, and hashes
    -   Use of a publish/subscribe model

-   Memcached is the preferred solution for:
    -   Horizontal scalability
    -   Object caching from your database
    -   Simplicity
    -   Larger cache nodes

Cache Hits, Misses, and Other Metrics That Matter
-------------------------------------------------

Implementing caching into your application can provide significant performance improvements, but it is important to ensure that the caching solution continues to enhance performance and doesn't just add another step---and hence, more overhead to the process.

One of the most important pair of metrics to consider when implementing a cache is the number of hits and misses that the cache reports. The number of hits reported over a given time is a measure of how many requests were returned with data from the cache. Conversely, the number of misses is a measure of how many times the cache had to look up the data. An effective cache will have a high ratio of hits to misses.

In addition to monitoring how well the cache is performing, it is also important to make sure the infrastructure around it is healthy and performant. The following monitoring metrics are important as well:

-   **CPU Utilization**
    -   A percentage of the available processing power being used for the cache. This should be a consistent number, and care should be taken that the utilization does not approach or reach 100%.
-   **SwapUsage**
    -   Swap space is used when the system runs out of memory. Use of memory is what makes a cache performant, so this is an indicator that requires immediate attention.
-   **Evictions**
    -   Evictions are cases where old data is removed to make way for new data. Elevated eviction levels are a sign that the cache is short on memory, and may be incorrectly sized for the task it's assigned to.
-   **Current Connections**
    -   This is a count of the active connections using the cache. Ideally, this number should remain constant, and increases in the number of connections may be indicative of problems with the implementation.

Some Background on My Environment
---------------------------------

The environment I used for the examples shown here is provided by Amazon Web Services (AWS). I'm using the free account, and while most of the steps herein can be taken within the limits of that account, you should always be cognizant of the potential costs and security implications involved in all actions you take in the cloud.

The service I'm monitoring is called Retwis. It's a demo application provided by Redis to show how their product works. I installed the product on an [EC2 instance](/optimize-aws-instance-types) and configured it to use an AWS ElastiCache Redis node. I also set up a small Java application locally, which uses Webdriver to produce a load on the database.

Creating an AWS ElasticSearch Domain
------------------------------------

The [monitoring plan](/evaluate-monitoring-strategy) I'm going to present involves streaming log data from an AWS ElasticCache service via CloudWatch to an ElasticSearch (ES) domain, with some [AWS Lambda function](/monitoring-aws-lambdas-with-netuitive) magic to connect it all. Before we begin, I'd like to reiterate a warning which Amazon includes in their documentation on the topic of streaming log data to ElasticSearch (ES).

**Note: **Streaming large amounts of CloudWatch Logs data to Amazon ES might result in high usage charges. We recommend that you [monitor your AWS bill](/view-manage-individual-aws-ec2-costs) to help avoid higher-than-expected charges.

So, with the acceptance of the fact that we may incur high usage charges from AWS, let's set up an ElasticSearch (ES) domain. Navigate to the AWS ElasticSearch home page. If this is your first domain, click on the **Get Started** button; otherwise, click on the **Create a new domain** button.

Select a name for your domain. For this example, I created an AWS ElastiCache instance using Redis, and so I called my domain *redis-logs*. The version dropdown defaulted to the latest version, which I decided to keep.

![AWS Elasticache: Setting the Name and Elasticsearch Version for Your ES Domain](/wp-content/uploads/2017/07/Set-Name-and-Version.png)

The next step is to configure the cluster. Here we'll set the number and type of instances to be used, and determine the type of storage which will be attached to the nodes. If you're just experimenting, you can't go wrong with a single *t2.small.elasticsearch* instance and 10GB of EBS. If your intention is monitoring of production metrics, you'll want to investigate what the needs of your particular situation require and configure your cluster accordingly.

![AWS Elasticache Configuration 1](/wp-content/uploads/2017/07/ES-Clusster-Configuration-1.png)

 ![AWS Elasticache Configuration 2](/wp-content/uploads/2017/07/ES-Cluster-Configuration-2.png)

The third step is to set up an access policy for the domain. AWS provides some templates which range from **Deny access to the domain** to **Allow open access to the domain**. As with the domain configuration, this step requires careful consideration of the type of data you're storing and how it will be used.

![AWS Elasticache: Access Policy Template](/wp-content/uploads/2017/07/Template-to-create-Access-Cluster.png)

Finally, you'll have the option to confirm all the configurations for the domain. Click **Confirm and create** when you've validated all your entries, and your new domain should be ready to go in approximately 10 minutes.

Collecting ElasticSearch Metrics
--------------------------------

Navigate to the CloudWatch dashboard and click on the link to view **Metrics**. Depending on what you've been using in your account, you should see a collection of metric groups on the right of your screen, under the **All Metrics** tab. Click on the **ElastiCache** group, and then on **CacheClusterId**.

![AWS Elasticache: Choose Metrics Group](/wp-content/uploads/2017/07/Elasticache-Metrics-Group.png)

You'll now have a list of the available metrics for your AWS ElastiCache cluster. Clicking on them will add them to the graph above. This is a great tool if you want to quickly view metrics related to your cluster over two-week periods.

Let's see how we can get the data out of here, and stream it into ElasticSearch (ES). The easiest way to do this from within AWS is to stream data from a log group to your ES domain. AWS ElastiCache doesn't place or provide a way to place metrics in a Log group, so we'll have to get creative.

**Metrics-extracting Lambda**

AWS Lambda is the [serverless offering from AWS](/best-practices-aws-lambda-monitoring). What we're going to do is set up a Lambda function that will be executed once a minute, and produce logs which detail the average metrics for the AWS ElastiCache cluster. These logs can then be streamed into ElasticSearch. I am certain other routes exist to accomplish this, but this is the path I chose.[ I've uploaded the code to a GitHub repository](https://github.com/echovue/elasticacheMetricExporter) if you would like to view or download the complete code base.

ESMetrics is a POJO with a collection of properties for storing the values, and from there we'll build a JSON log entry.

> public class ESMetrics {
>
> @JsonProperty("StartDateTime")\
> private Date startDate;\
> @JsonProperty("EndDateTime")\
> private Date endDate;\
> @JsonProperty("CPUUtilization")\
> private Double cpuUtilization;\
> @JsonProperty("CacheHits")\
> private Double cacheHits;\
> @JsonProperty("CacheMisses")\
> private Double cacheMisses;
>
> //*** Lines ommitted\
> public Double getCpuUtilization() {\
> return cpuUtilization;\
> }
>
> public void setCpuUtilization(Double cpuUtilization) {\
> this.cpuUtilization = cpuUtilization;\
> }\
> //*** Lines ommitted\
> }

> public class ECMetricExporter implements RequestHandler<ScheduledEvent, String> {
>
> private static final String EC_NAMESPACE = "AWS/ElastiCache";
>
> private static final String CPU_UTILIZATION = "CPUUtilization";\
> private static final String CACHE_HITS = "CacheHits";\
> private static final String CACHE_MISSES = "CacheMisses";\
> //*** Lines ommitted\
> private static final String AVERAGE = "Average";
>
> private ObjectMapper mapper = new ObjectMapper();
>
> public String handleRequest(final ScheduledEvent event, final Context context) {\
> LambdaLogger logger = context.getLogger();
>
> try {\
> GregorianCalendar calendar = new GregorianCalendar(TimeZone.getTimeZone("UTC"));\
> calendar.add(GregorianCalendar.SECOND, -1 * calendar.get(GregorianCalendar.SECOND)); // 1 second ago\
> Date endTime = calendar.getTime();\
> calendar.add(GregorianCalendar.MINUTE, -1);\
> Date startTime = calendar.getTime();
>
> ESMetrics metrics = new ESMetrics();\
> metrics.setStartDate(startTime);\
> metrics.setEndDate(endTime);
>
> AmazonCloudWatch cwClient = AmazonCloudWatchClientBuilder.defaultClient();\
> GetMetricStatisticsResult cpuResult = cwClient.getMetricStatistics(getGetMetricStatisticsRequest(\
> endTime, startTime, EC_NAMESPACE, CPU_UTILIZATION, Arrays.asList(AVERAGE)));\
> GetMetricStatisticsResult hitsResult = cwClient.getMetricStatistics(getGetMetricStatisticsRequest(\
> endTime, startTime, EC_NAMESPACE, CACHE_HITS, Arrays.asList(AVERAGE)));\
> GetMetricStatisticsResult missResult = cwClient.getMetricStatistics(getGetMetricStatisticsRequest(\
> endTime, startTime, EC_NAMESPACE, CACHE_MISSES, Arrays.asList(AVERAGE)));
>
> //*** Lines ommitted\
> for (Datapoint p : cpuResult.getDatapoints()) {\
> metrics.setCpuUtilization(p.getAverage());\
> }\
> for (Datapoint p : hitsResult.getDatapoints()) {\
> metrics.setCacheHits(p.getAverage());\
> }\
> for (Datapoint p : missResult.getDatapoints()) {\
> metrics.setCacheMisses(p.getAverage());\
> }
>
> //*** Lines ommitted\
> logger.log(mapper.writeValueAsString(metrics));\
> } catch (Exception e) {\
> e.printStackTrace();\
> }\
> return "Complete";\
> }
>
> private GetMetricStatisticsRequest getGetMetricStatisticsRequest(final Date endTime, final Date startTime, final String namespace, final String metricName, final List statistics) {

With that Lambda uploaded and set with a Cloudwatch trigger to run every minute, I now have a log group which I can stream into my ElasticSearch Domain.

**Streaming It to AWS ElasticSearch**

Navigate back to the CloudWatch dashboard, and this time, click on the **Logs** option. Locate the logs for the Lambda function. Mine was called *elasticacheMetricExporter.*

![AWS Elasticache: Lambda Logs](/wp-content/uploads/2017/07/Log-Group-New-Metrics-Lambda.png)

To stream the metrics, select the radio button to the left of the log group. Click on the **Actions** button, and select **Stream to Amazon Elasticsearch Service.** By now, our ES domain has had time to start, so it should be available in the dropdown. Ensure that *This Account* is selected, and then select your ES Cluster from the dropdown.

A *Lambda Function* section will now appear. AWS creates a new Lambda function that parses the log group and exports the data to ElasticSearch for you. While the Lambda is created for you, you will need to provide an IAM Execution role for it. I selected **Create a new IAM role** and used the default configuration. As mentioned above; it is important that you understand what an IAM role is, and how it will affect your data. When you have confirmed everything, click **Allow**.

The IAM role and associated Lambda will be created in a few seconds, and you can click on the **Next** button to select the log format. If you're using the same approach I did, the log format you'll want to select is **JSON**. There is an area provided that will include recent logs from your Lambda function so that you can test the format and any patterns selected to validate correct parsing.

Finally, you'll be asked to confirm all of your selections. Click **Next,** and with one final screen detailing the configuration and options available to you from ElasticSearch, you'll be able to click on **Start Streaming**.

**Kibana and Lessons Learned**

Navigate back to the ElasticSearch home page. You should see your domain listed, and hopefully the Searchable Documents column will show some results. Click on the name of the domain from the list of domains (or from the navigation panel on the left).

Information about the domain will be shown, including a link to a Kibana dashboard for the domain. Go ahead and click on it so that you can see the data. Once it loads, click on the **Management** tab, and change the index name to *. Then click on **Create**.

You can now navigate to the **Discover** tab to see what fields are available, and to the **Visualize** tab to build graphs and other visualizations from your data. Once you have some visualizations created and saved, you'll be able to add them to your dashboard. The Kibana documentation contains some excellent information on how to make the most of the tool they provide.

This article touched on several offerings from AWS, and I learned a few lessons while putting it all together---First, even when there isn't a clearly documented method of created interactions between different AWS services, a little creativity can work around most obstacles. Second, and perhaps most importantly, you'll experience a phenomenal return on investment when you select an [AWS monitoring solution](/getting-started-netuitive-aws) that can extract your metrics from Amazon and provide you with out-of-the-box analytics and reporting tools.
