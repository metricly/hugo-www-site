---
author: "Zachary Flower"
date: "2017-03-10"
title: "Reading and Writing Text-Based Events with the Metricly API"
description: "Need to monitor an uncommon or proprietary platform? Use Metricly's public API to read and write custom metrics data from any Internet-connected platform."
category: "Cloud Monitoring"
url: "/inside-metricly-api/"
layout: "single"
---

From Ansible to Windows (and nearly everything in between) Netuitive has an impressively large library of third-party platform integrations. As far as system monitoring tools go, this level of integration is crucial to establishing ubiquity within any application environment. But what do you do if you have to monitor uncommon or proprietary platforms that *nobody* integrates with? To accommodate this need, Netuitive has created a public API for reading and writing custom metrics data from *any* Internet-connected platform. To illustrate how flexible the Netuitive API is, let's take a look at logging data from a legacy application that doesn't utilize any modern logging conventions, and is written in a language Netuitive doesn't have an agent for.

If you've ever read any of my other articles, there's a good chance that you know how much of a fan I am of multi-user dungeons. For the uninitiated, multi-user dungeons (or MUDs for short) are the text-based, online role-playing games that predate today's modern MMORPGs like World of Warcraft. What makes MUDs so fascinating to this day is that many of the original codebases are still available to download and run, given enough patience.

My personal favorite MUD codebase, called DikuMUD, was originally released to the public in 1991. Written in ISO C and released long before things like REST, SSH, and even the World Wide Web were invented, DikuMUD is a perfect candidate to integrate a modern monitoring solution like Netuitive.

Getting Started with the Netuitive API
--------------------------------------

So, how exactly do we plug a 21st century API into a 20th century codebase?

Before we consume Netuitive's API, we first need to gather some necessary authentication information. Netuitive's API uses HTTP Basic Authentication, so the first two things we need to gather are our username and password (this should be pretty self explanatory). Next, we need to get an API key. To do this, head on over to Netuitive's [Integrations](https://app.netuitive.com/#/integrations) page and click on the "Custom Datasource" integration and take note of the "API Key" field. It is important to note that the "Data Collection" field should be enabled as well.

[![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Netuitive-API-Key-1024x168.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Netuitive-API-Key.png)

Making The Call
---------------

Now that we have the proper authentication information, let's compose a basic API call to better understand the format and process that is required to communicate with it. I should note that, for the sake of this article, we will only be consuming the event creation API endpoint, but there are several other endpoints listed in [Netuitive's API documentation](https://help.netuitive.com/Content/Misc/API/api.htm) that can be taken advantage of as well.

To test API calls, I'm a big fan of [Postman](https://www.getpostman.com/), a cross-platform application that can be used to manually compose and make calls to any RESTful API. Making a request to Netuitive's event creation API endpoint requires a few things in addition to the information gathered above: a URL, a custom request header, and a JSON representation of the event.

*[Editor's Note: Netuitive uses Swagger, an alternative to Postman, to document our API. Swagger can also be used to manually compose and make API calls.]*

First, the endpoint's URL takes the following format, replacing API_KEY with the API key copied above:

[![Netuitive API: Postman Endpoint](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Postman-Endpoint-1024x100.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Postman-Endpoint.png)

Next, we need to add our login credentials to the Authorization tab:

[![Netuitive API: Postman Authentication](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Postman-Authentication-1024x250.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Postman-Authentication.png)

Then, we need to create a JSON string representing the event we are posting to the API. While there are a few choices listed in [Netuitive's documentation](https://help.netuitive.com/Content/Misc/API/Events/ingest_events_api-creating_events.htm), the majority of them are optional. That said, some of the optional fields provide some great value, so we will be including them where appropriate.

So, what do all of these values mean?

While title and message are pretty self-explanatory, the others may not be.

First up is type. This field is required, and according to the Netuitive documentation, *must* be set to INFO. While in this request, level is also set to INFO, it is an optional field that can be set to either INFO, WARNING, or CRITICAL, to indicate the severity of the event in question.

The elementId field is a text field that should be consistent across all request to identify the element that is making the API calls. In the case of our example, since we are using Postbox, I chose to simply put Postbox here. This will allow us to look at requests made from only the Postbox element.

One important thing to be aware of is that, while Netuitive's event API endpoint does accept a timestamp parameter, it can be omitted and Netuitive will automatically assign it to the current timestamp. This automatic timestamp generation will only happen if the following custom header is added to the request:

> X-Netuitive-Api-Options: INJECT_TIMESTAMP

[![Netuitive API: Postman Headers](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Postman-Headers-1024x144.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Postman-Headers.png)

If that header is not found, then the event will not show up in your Netuitive dashboard.

Now that we've put our test request together, let's run it and take a peek at what shows up on the Netuitive dashboard:

[![Netuitive API: Posted Netuitive Event](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Posted-Netuitive-Event-1024x222.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Posted-Netuitive-Event.png)

Success! As you can see, all the information we provided in our JSON object is available in the event details, and the timestamp has been auto-generated.

**Putting It All Together**

Now that we know how to make API calls to the Netuitive API, how do we go about doing this from our legacy codebase?

While accomplishing this task in ISO C requires both the [libjansson](http://www.digip.org/jansson/) and [libcurl](https://curl.haxx.se/libcurl/) libraries, installing and configuring both of them can become complicated enough to justify their own articles. That said, the pkg-config command can be used to simplify the process of generating the appropriate compilation flags. To do this, I added the following compiler command to the project's [Makefile](https://github.com/zachflower/oasis-mud/blob/feature/netuitive/Makefile#L3):

> `pkg-config --cflags --libs jansson libcurl`

With the proper libraries installed and the Makefile updated, we can now make our API calls. While the code to handle this isn't entirely [insignificant](https://github.com/zachflower/oasis-mud/blob/feature/netuitive/src/devops.c), there are two primary functions to be aware of. The first method to take note of is called curl_json_push. This function is what will actually send our JSON payload to the Netuitive API:

| void curl_json_push(const char* url, const char* payload, const char* method, const char* username, const char* password) { |

| pid_t pid; |

|\
 |

| curl_global_init(CURL_GLOBAL_ALL); |

|\
 |

| pid = fork(); |

|\
 |

| if ( pid == 0 ) { |

| CURL *curl; |

| struct curl_slist *headers = NULL; |

|\
 |

| if ( (curl = curl_easy_init()) ) { |

| CURLcode res; |

|\
 |

| headers = curl_slist_append(headers, "Content-Type: application/json"); |

| headers = curl_slist_append(headers, "User-Agent: OASIS MUD"); |

| headers = curl_slist_append(headers, "X-Netuitive-Api-Options: INJECT_TIMESTAMP"); |

|\
 |

| curl_easy_setopt(curl, CURLOPT_URL, url); |

| curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers); |

| curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, method); |

| curl_easy_setopt(curl, CURLOPT_POSTFIELDS, payload); |

|\
 |

| if ( username != NULL ) { |

| curl_easy_setopt(curl, CURLOPT_USERNAME, username); |

| } |

|\
 |

| if ( password != NULL ) { |

| curl_easy_setopt(curl, CURLOPT_PASSWORD, password); |

| } |

|\
 |

| res = curl_easy_perform( curl ); |

|\
 |

| if(res != CURLE_OK) { |

| sprintf(log_buf, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res)); |

| bug(log_buf, 0); |

| } |

|\
 |

| curl_easy_cleanup(curl); |

| curl_slist_free_all(headers); |

| } |

|\
 |

| _exit(0); |

| } else if (pid > 0 ) { |

| curl_global_cleanup(); |

| } |

|\
 |

| return; |

| } |

[view raw](https://gist.github.com/zachflower/99408924394cf2532a18dc78df9c794b/raw/ff9b37255ec9bf036ffe900c9dc174a585033fb4/curl_json_push.c) [curl_json_push.c](https://gist.github.com/zachflower/99408924394cf2532a18dc78df9c794b#file-curl_json_push-c) hosted with ![❤](https://s.w.org/images/core/emoji/11/svg/2764.svg) by [GitHub](https://github.com)

The next method to be aware of is log_event, which is what we will call to compose our JSON payload:

| void log_event( const char* title, const char* level, const char* message ) { |

| char *payload; |

| char url[MAX_STRING_LENGTH]; |

|\
 |

| json_t *obj = json_array(); |

| json_t *event = json_object(); |

| json_t *data = json_object(); |

|\
 |

| if ( NETUITIVE_USERNAME != NULL && NETUITIVE_PASSWORD != NULL ) { |

| json_object_set_new(event, "title", json_string( title )); |

| json_object_set_new(event, "type", json_string( "INFO" )); |

|\
 |

| json_object_set_new(data, "elementId", json_string( NETUITIVE_ELEMENT_ID )); |

| json_object_set_new(data, "level", json_string( level )); |

| json_object_set_new(data, "message", json_string( message )); |

| json_object_set_new(event, "data", data); |

|\
 |

| json_array_append_new(obj, event); |

|\
 |

| `sprintf(url, "https://api.app.netuitive.com/ingest/events/%s", NETUITIVE_API_KEY);` |

| payload = json_dumps(obj, 0); |

|\
 |

| curl_json_push(url, payload, "POST", NETUITIVE_USERNAME, NETUITIVE_PASSWORD); |

|\
 |

| free(payload); |

| } |

|\
 |

| return; |

| } |

[view raw](https://gist.github.com/zachflower/ea103853cd77a6cb8532296bb1b6606a/raw/0ad8de512e5f71063deb5abaa9d10fb5d5b4f4e0/log_event.c) [log_event.c](https://gist.github.com/zachflower/ea103853cd77a6cb8532296bb1b6606a#file-log_event-c) hosted with ![❤](https://s.w.org/images/core/emoji/11/svg/2764.svg) by [GitHub](https://github.com)

These two methods make up the bulk of the code necessary to send requests to the Netuitive API in ISO C. Additionally, some configuration settings can be found in the proper [header file](https://github.com/zachflower/oasis-mud/blob/feature/netuitive/src/devops.h#L16-L24), allowing us to change the login credentials, API key, and even the element. To illustrate their use, let's add a call to the log_event method where players [log in to the game](https://github.com/zachflower/oasis-mud/blob/feature/netuitive/src/comm.c#L2133):

> sprintf(log_buf,"%s!%s@%s has connected.", ch->name, d->user, d->host);\
> log_event("Player login", NETUITIVE_LEVEL_INFO, log_buf);

This call composes a request to the Netuitive API with "Player login" as the title, "INFO" as the level, and the player's username and hostname in the description. Taking a look at the Netuitive dashboard, we can see the event that gets posted whenever a player logs into the game:

[![Netuitive API: Posted Netuitive Event](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Login-Events-1024x195.png)](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Login-Events.png)

**Next Steps**

While this article only covers a fairly simplistic use of the Netuitive API, it does a good job of illustrating its flexibility. RESTful APIs have the advantage of being able to be consumed by nearly any Internet-connected service, as HTTP is a platform-agnostic protocol. This means that, regardless of Netuitive's own proprietary integrations, everything from Internet-of-Things devices to brand new programming languages have the opportunity to send and receive data using Netuitive's API.
