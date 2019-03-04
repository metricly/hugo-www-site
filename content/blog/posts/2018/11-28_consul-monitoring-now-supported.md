---
author: "Lawrence Lane"
date: "2018-11-28"
title: "Consul Monitoring Now Supported in Metricly"
category: "Product Updates"
url: "/consul-monitoring-now-supported/"
layout: "single"
---

### About

Metricly now supports integration with Consul! [Check out our official admin guide.](/support/integrations/consul/) Consul is a service mesh solution that helps with service discovery, configuration, and segmentation functionality.

**What you'll need to get started:**

-   The most up-to-date [Linux Agent](/support/integrations/linux/)
-   An existing [Consul](https://www.consul.io/) setup

### Packaged Policies

Every integration comes with pre-packaged policies to help get you started.

-   Consul Nodes or Services Critical: `consul.catalog.nodes_critical` is greater than `0`. Value is non-zero if any check is marked critical for the node. Status must be one of passing, warning, or critical.
-   No Nodes Passing: No nodes have a status of `passing`. All nodes have a combination of either `warning`, or `critical`.

### Metrics Supported

Check out our list of metrics supported for the Consul integration.

|

Search

 |
| --- |
| Fully Qualified Name (FQN) | Statistic | Units | BASE | CORR | Type | Computed |
| --- | --- | --- | --- | --- | --- | --- |
|

-   [«](/consul-monitoring-now-supported/#)
-   [‹](/consul-monitoring-now-supported/#)
-   [1](/consul-monitoring-now-supported/#)
-   [2](/consul-monitoring-now-supported/#)
-   [3](/consul-monitoring-now-supported/#)
-   [4](/consul-monitoring-now-supported/#)
-   [5](/consul-monitoring-now-supported/#)
-   [›](/consul-monitoring-now-supported/#)
-   [»](/consul-monitoring-now-supported/#)

 |
| consul.acl.blocked.(check|node|service).registration | avg | requests | TRUE | FALSE | gauge | no |
| consul.acl.blocked.service.registration | avg | requests | TRUE | FALSE | gauge | no |
| consul.acl.cache_hit | avg | hits | TRUE | FALSE | gauge | no |
| consul.acl.cache_miss | avg | misses | TRUE | FALSE | gauge | no |
| consul.acl.replication_hit | avg | hits | TRUE | FALSE | gauge | no |
| consul.catalog.service.not-found.[service] | avg | queries | TRUE | FALSE | gauge | no |
| consul.catalog.service.query-tag.[service].[tag] | avg | queries | TRUE | FALSE | gauge | no |
| consul.catalog.service.query-tags.[service].[tags] | avg | queries | TRUE | FALSE | gauge | no |
| consul.catalog.service.query.[service] | avg | queries | TRUE | FALSE | gauge | no |
| consul.client.api.catalog_datacenters.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.catalog_deregister.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.catalog_node_services.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.catalog_nodes.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.catalog_register.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.catalog_service_nodes.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.catalog_services.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.success.catalog_datacenters.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.success.catalog_deregister.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.success.catalog_node_services.[node] | avg | requests | TRUE | FALSE | gauge | no |
| consul.client.api.success.catalog_nodes.[node] | avg | requests | TRUE | FALSE | gauge | no |
