---
title: "Mixbook Achieves “High Level of Confidence” in AWS Monitoring"
description: "Mixbook achieved a “high level of confidence” in AWS monitoring by using Metricly. Learn how they leverage machine learning to proactively alert on changes."
layout: "case-study"
background: "/img/customers/mixbook-bg.png"
customer-logo: "/img/customers/mixbook-white.png"
featured-name: "Robert Butler"
featured-title: "Senior DevOps Engineer, Uptime Lead and Product Owner"
industry: "SaaS, Ecommerce"
headquarters: "Redwood City, CA"
size: "50-100"
objective: "Automate infrastructure monitoring to meet the demand of a diverse and highly scalable environment."
success: "Monitoring that automatically learns the behavior of metrics and newly added resources."
---
### The Company

Founded in 2006, Mixbook offers a convenient, web-based platform where users can design and order personalized photo products. As such, as the company operates in a market where delivering a superlative user experience is paramount for retaining customers and growing its business, guaranteeing the availability and optimizing the performance of Mixbook's applications and infrastructure is a critical priority for the company's IT team.

Initially, Mixbook relied on extensive manual monitoring, combined with primitive alerting features from the company's cloud provider to manage the infrastructure that powers its applications. However, after considering other leading commercial monitoring solutions, the Mixbook IT team settled on Metricly to overhaul its monitoring workflow. Since adopting Metricly, the company has benefited from competitive pricing, excellent support and configuration automation driven by machine learning.

### The Challenge

#### Managing Rapidly Changing AWS Infrastructure

Mixbook's software is deployed entirely in the AWS cloud using a combination of EC2 instances, S3 storage, RDS databases and Docker containers. This mix of AWS resources is not only diverse, but also has high scalability requirements. Mixbook's typical deployment, measured in terms of number of hosts, can triple or quadruple during periods of peak demand for the company's photo products, such as in the weeks preceding holidays.

When Mixbook first migrated its infrastructure to the AWS cloud about five years ago, its IT team relied primarily on CloudWatch's monitoring features. Although CloudWatch's integration into AWS made it convenient to use in some respects, the tool was not sufficient on its own for achieving the streamlined, highly automated monitoring workflows that Mixbook sought, according to Robert Butler, Senior DevOps Engineer, Uptime Lead and Product Owner at Mixbook.

CloudWatch requires engineers "to create an alarm for every single metric," Butler explained. "So if, for example, you create a new database for a new service, and you forget to set the CloudWatch alarm for that database, you could run out of disk space without having thought about it."

Because of the risk that an engineer might fail to set up a CloudWatch alarm and leave a resource essentially unmonitored, Butler and his team performed periodic manual reviews of their CloudWatch configuration. "Inevitably, I'd discover that we didn't monitor something appropriately, and [it] was close to failing," Butler said.

### The Solution

#### Automating Monitoring with Machine Learning and Metricly

The inefficiency and risk associated with Mixbook's initial monitoring strategy led its IT team to begin exploring other options. They considered several commercial monitoring tools, but found most to lack either competitive pricing or the features necessary to streamline monitoring configurations.

After Butler and his team evaluated Metricly alongside a leading commercial tool in the market for several weeks, Metricly stood out for three main reasons. One was its low cost and transparent pricing. "Out of the box, Metricly matched what I expected pricing-wise," Butler said.

Another was Metricly's ability to use machine learning to automate monitoring configurations. Metricly "learns your metrics and how they deviate," Butler said. "It also provides a really powerful set of rules for describing the metrics you want to monitor."

<figure><img src="/img/brand/Metricly-anomaly-detection-e1536668309234.png" alt="Anomaly detection powered by machine learning bands">
<figcaption>Anomaly detection powered by machine learning bands</figcaption></figure>

He added that Metricly "has a ton of out-of-the-box rules and alerts that are basically there from the beginning." In contrast, other commercial monitoring solutions "felt much more like CloudWatch because I had to go in and set them up."

<figure><img src="/img/brand/Metricly-default-policies.png" alt="Default Policy: AWS EC2 - Elevated CPU Activity (Normal Network Activity) conditions">
<figcaption>Default Policy: AWS EC2 - Elevated CPU Activity (Normal Network Activity) conditions</figcaption></figure>

Metricly's third key feature for Butler and his colleagues was technical support. "The Metricly team was very interested in supporting monitoring in a way that aligns very well with cloud-native technologies," Butler said, adding that Metricly's senior management take an interest in working closely with their customers.

### The Result & Future Plans

#### New AWS Services and Optimizing Costs

Metricly has not only enabled Mixbook's IT team to optimize monitoring workflows for the company's existing cloud infrastructure, but is also giving Butler and his team the confidence they need to take advantage of new AWS services, such as AWS Fargate. The company has begun to deploy workloads on these services and plans to expand its use of them in the future, aided by the monitoring insights that Metricly provides.

"Now, with Metricly, we're standing up a bunch of new AWS services," Butler said, explaining that Metricly automatically monitors and learns the behavior of a new resource which has been added. Thanks to Metricly, "I have this really high level of confidence that no service is being overlooked," Butler said.

In addition, Mixbook plans in the future to begin leveraging Metricly's cost-management and optimization features to ensure that it is not overspending on cloud infrastructure. "I'm working on using Metricly to replace our cost management," Butler explained. "We want to start using Metricly for ongoing day-over-day, week-over-week, month-over-month, year-over-year cost analysis."
