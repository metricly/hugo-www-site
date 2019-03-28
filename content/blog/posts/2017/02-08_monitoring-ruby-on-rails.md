---
author: "Zachary Flower"
date: "2017-02-08"
title: "Monitoring with Metricly’s Ruby on Rails Agent"
description: "Metricly's Ruby on Rails agent is a no-code solution to monitor Ruby on Rails applications. Here's how to integrate the agent to a pre-built application."
category: "DevOps"
url: "/monitoring-ruby-on-rails/"
layout: "single"
---

Ruby on Rails is one of the most commonly used web application frameworks on the market today, powering sites like GitHub, Hulu, and Airbnb (to name a few). With such a high level of popularity, it's no big surprise that Metricly has a dedicated Ruby on Rails agent for more targeted monitoring, but how exactly does it differ from their Ruby agent?

At a high level, Metricly's Ruby on Rails agent is an extension of their Ruby agent that acts as a no-code solution to monitoring any existing Ruby on Rails application. To understand exactly how it works, though, let's take a look at integrating the agent to a pre-built Rails application.

[![Ruby on Rails logo](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/rails-logotransparent.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/rails-logotransparent.png)

Introducing Discourse
---------------------

Discourse is an open source, Rails-based discussion platform designed to work as a mailing list, a discussion forum, and a long-form chat room. Because of the scope of Discourse's development (clocking in at over 21,000 commits from 557 contributors at the time of this writing), it makes the perfect case study for integrating Metricly's Rails agent into an existing application.

Getting Started with the Ruby on Rails Agent
--------------------------------------------

To get started with monitoring Discourse in Metricly, we first need to add the Metricly Rails agent to the project. This is accomplished by first adding the following line to the project's Gemfile:

    > gem 'netuitive_rails_agent'

Next, we need to actually *install* the agent:

    > bundle update

Starting the Daemon
-------------------

Installing the Rails agent is the first of two steps required to send application metrics up to Metricly. The second step we need to take is to install and start the Metricly daemon. This process is what the Rails agent communicates with in order to asynchronously (and unobtrusively) send metrics up to your Metricly account.

To do this, we first need to install the daemon:

    > gem install netuitived

Next, we need to start and configure the daemon itself. Before we can do this, we first need to retrieve the API key for our Metricly Ruby API key. This API key can be found within the Ruby Integration Setup page within your Metricly account---which can be found by clicking on the Ruby logo on your [Integrations](https://app.netuitive.com/#/integrations) page.

Once you've copied your API key, we can start the Metricly daemon:

    > netuitived start

When the daemon is first run, it will ask for an element name and an API key. The process will look something like this:

    > please enter an element name:
    >
    > discourse
    >
    > please enter an api key:
    >
    > **API KEY**
    >
    > netuitived started

Putting It All Together
-----------------------

[![Ruby on Rails Agent: Dashboard](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Ruby1-1024x588.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Ruby1.png)

Now that we've got everything set up, let's start/restart our application and watch the metrics flood in. But what exactly are we looking at? For the most part, the metrics sent up to Metricly by the Rails agent are things that can be tracked within Rails' controllers, views, and models. While it's not an all-inclusive monitoring solution, it will give you traffic data, request timing, errors, and database interactions, which is more than enough for the majority of use cases.

**Taking It Further**

Sending metrics up to Metricly from an existing Rails application is a pretty trivial task, but what if we want to do something a little different? The Metricly Rails agent has some basic [configuration settings](https://github.com/Netuitive/netuitive_rails_agent/blob/master/config/agent.yml) that can be enabled or disabled through environment variables, allowing us to turn off unneeded functionality, such as the active record or action controller metrics trackers.

One feature that is disabled by default that I find incredibly useful, however, is the Metricly Rails agent's built-in Sidekiq integration. For the uninitiated, Sidekiq is a job system that allows you to offload heavy tasks as background processes, separating the burden of complex processes away from users. Metricly's integration with Sidekiq allows us to send up metrics and errors with only two environment variables.

To enable Sidekiq monitoring, simply add the following to your environment variables (in the case of Discourse, this is managed using the awesome [dotenv library](https://github.com/bkeepers/dotenv) for Ruby):

    > NETUITIVE_RAILS_SIDEKIQ_ENABLED=true
    >
    > NETUITIVE_RAILS_SEND_ERROR_EVENTS=true

While slightly out of the scope of this article, it's also important to mention that, because the Metricly Ruby on Rails agent is an extension of their [Ruby agent](https://github.com/Netuitive/netuitive_ruby_api), custom metrics can be logged using the following command:

    > NetuitiveRubyAPI::netuitivedServer.addSample("metric.name", [metric value])

In a nutshell, the above code allows us to track any metric name and value, which means that we can track any additional data within our application with minimal overhead.

The Metricly Ruby on Rails agent is a fantastic no-code solution to add application metrics aggregation to any existing Ruby on Rails application. With built-in support for Sidekiq, and the ability to track custom metrics using the Metricly Ruby agent, it is the perfect combination of simplicity and extendability, allowing you to integrate it in the exact way your organization needs.
