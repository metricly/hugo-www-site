---
author: "Lawrence Lane"
date: "2019-02-28"
title: "Matching Conditions Added to AWS Services Cost Report"
category: "Product Updates"
url: "/matching-conditions-added-to-aws-services-cost-report/"
layout: "single"
---

Dollar change and percentage change conditions have been added under the **Matching Conditions** section of the [AWS Services Cost Report](https://docs.metricly.com/reports/reports-aws-services-cost/) configuration modal.

### Try these four new matching conditions to simplify bill monitoring

-   **Any Group Comparison Cost:** set min/max dollar amount value of previous billing period's total cost
-   **Any Group Current Cost**: set min/max current dollar amount values
-   **Any Group Delta**: filter for dollar amount changes in cost compared to previous billing period
-   **Any Group Delta %**: set min/max percentage change in cost compared to previous billing period

![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2019/02/dollar-percent-filters-optimized.gif)

### Set a budget for one or all services

Use conditions to monitor spending amounts across groups that match any given cost criteria. You can then save these reports to create a budgeted view into targeted areas of your AWS bill.

**Monthly Budget --- Any Costs Exceeding $200 Example:**

1.  Set a matching condition of **Any Group Current Cost > 200**.
2.  Select the **Current month** time interval.
3.  Save the report as "$200 monthly budget per service."

This would allow your team to track any AWS service group that surpassed the $200 threshold in your current month. If you needed to set different limits for different services, simply filter by service (like CloudWatch) and save each report individually.

**Daily Budget --- CloudWatch Costs Increasing 20% Example:**

1.  Filter by Service and select **CloudWatch**.
2.  Set a matching condition of **Any Group Delta % > 20**.
3.  Select the **Latest day** time interval.
4.  Save the report as "Daily CloudWatch Costs."

You can also combined multiple conditions for full control over your AWS Services Cost report.

### Get emailed when cost exceeds threshold

These conditions also apply to saved reports with **Send Daily Email** enabled; a saved report with matching conditions only sends a daily email if the conditions applied are true. This essentially operates as an email alert for your cost reports, allowing you to automate routine billing check-ins.

Simplify monitoring cost changes today with these new matching conditions and manage your [cost deltas](/aws-cost-analysis/) like a pro.
