---
author: "Andrew Paine"
date: "2018-08-08"
title: "New Sudden Change Algorithm From Metricly"
category: "Cloud Monitoring"
url: "/sudden-change-algorithm/"
layout: "single"
featured-image: "sudden-change.png"
thumbnail-image: true
---

### How the Sudden Change Algorithm Works

Sudden Change is Metricly’s newest anomaly detection feature found in our Policy Editor. This type of condition excels at monitoring huge shifts on metrics that otherwise have dependable, predictable trends.

That all sounds great, but how is sudden change monitoring done without getting noisy? False positives are a pain. No one wants to wake up in the middle of the night, power up their PC, and stare into an overly bright screen for half an hour only to determine they should’ve stayed in bed.

### Our answer?

Metricly’s sudden change algorithm. Let’s walk you through how it works.

### The Algorithm in Action
Here’s a scenario: You’ve set up a Sudden Change condition on a metric and have received an alert. It’s time to take a look and see what happened.

First, let’s see how it works. The following graph depicts 24 data points showcasing expected, normal behavior. The 25th point on this graph is our sudden change event.


### How Our Algorithm Works

Black Dotted line: Each black point represents one of the 24 previous 5-minute values (PT5M) of a metric.

Blue Line: A best-fit regression line through the black points. Represents the projected trend of the 25th data point, based off of the historical data shown.

Blue Dot: Represents the predicted value of the 25th data point.

Red Line: Demonstrates breadth of sudden change, departing from the expected projection in blue.

Red Dot: 25th data point’s actual observed value.
The 24 black highlighted points are our historical data. Metricly’s algorithm uses these points to adjust the prediction trend (blue line) and make an assumption for the next, immediate 5-minute interval.

This analysis stays accurate due to a sliding reference window, meaning that the data points used to determine a sudden change event are always the most recent 24 intervals leading up to that event.

By monitoring in this way, a gradual change can be accounted for and you get to determine what that means on case-by-case basis. Just enter an unacceptable percent difference on your condition and Metricly tells you when a data point varies from its trend line by the percentage you determined.


### Finding Sudden Change

Green: Sudden Change Deviation in the Policy Editor
Blue: Increase/Decrease setting input
Red: Percent Value input
Under the Hood
As currently implemented, a percent drop is computed as:

|(projected value) – (observed value)| / |(projected value)|

The sudden change algorithm returns this value for use by a policy condition. The condition is true if the value exceeds the configured threshold. An event is then emitted if all other conditions in the policy are also true.

A Thorough Validation Process
Before reporting the value as a potential change, the algorithm performs a series of checks:

It determines if the regression model is a good enough fit for us to have confidence in it’s projected value.
It assesses confidence that the observed value is sufficiently different from the projected value to be truly “anomalous.”
It detects the trend in values leading up to the observed value.
No drop is reported if the trend was already negative and the actual observed value is just a continuation of that trend. The algorithm also requires data points to be consistently available (and not be sparse).

Additional parameter in the condition
Remember that you can always add a second test in the condition based on the absolute value of the metric to better control the outcome.

For example, you could be monitoring for a 25% or more drop in free disk space during a 5min interval, but with an additional parameter requiring the absolute value of the remaining free disk space be less than 10 GB.

This way, the policy wouldn’t generate an alert if you still have plenty of disk space left while a sudden change in free disk space occurs.


### New Policy Using Sudden Change

#### When to use Sudden Change

Sudden Change conditions are especially useful for metrics that count transactions in an application. The following example of depicts a perfect use case:


### Counting Scenario Using Sudden Change

In this case, a sudden drop in submitted orders occurred but stayed within both contextual and baseline bands (which are other methods of anomaly detection that can be defined in a Metricly policy). As a result, this would not have been detected using either condition. Only a Sudden Change condition would be able to detect and alert on this event.

### Our Available Analytics
Check out our Analytics page to see what other deviation models you can leverage when setting up policy conditions in Metricly.
