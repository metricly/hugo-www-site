---
author: "Lawrence Lane"
date: "2018-10-30T13:44:00+00:00"
title: "Policies With Metric Conditions Now More Flexible"
tags: ["Product Updates"]
---

When building a policy that contains multiple metric conditions, users can now use the **Match Conditions** feature to toggle between validating all of the conditions listed or just any one condition provided. Previously, policies with multiple metric conditions only fired when all listed conditions were met.

**How Policies Fire Using All vs Any:**

- **All**: Policy only fires an alert when all metric conditions are met
- **Any**: Policy fires an alert when at least one metric condition is met

Note that this Match Conditions feature is only available with metric conditions, and is found in the conditions tab in the [Policy Editor](/support/events/policies/policy-editor-2/).


![alt text](/wp-content/uploads/2018/10/Match-Conditions-on-Policies-2-768x304.png "post-image")


**Bundle Policies With Similar Goals**

By leveraging the *Any* setting on the Match Conditions feature, users can reduce their number of policies needed. For example, let’s say you had two separate policies to help you monitor the state of your application: one for unusually low traffic and one for 5xx errors. Today, you can set up both as individual metric conditions on just one policy.

Another common use case involves metric tags.  Each condition on a policy can only support one metric tag, meaning that in the past users had to create multiple policies to monitor each individual tag. Now you can simply create multiple metric conditions, each with their own tag, and validate the policy using the *Any* Match Conditions setting.

Creating complex metric-driven policies in Metricly has never been easier—or faster!