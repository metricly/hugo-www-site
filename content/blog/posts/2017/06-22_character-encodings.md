---
author: "Brian Conn"
date: "2017-06-22"
title: "Character Encodings: An Unfortunate Experience"
description: "The Netuitive team was recently plagued by a very interesting character encodings problem in our data ingest platform."
category: "DevOps"
url: "/character-encodings/"
layout: "single"
---
The Netuitive team was recently plagued by a very interesting (read: "frustrating") behavior pattern in our data ingest platform. Element documents (denormalized JSON documents storing an element's metadata) were spontaneously growing to enormous sizes (up to 700MB). Peeking into these documents showed the majority of them were corrupted characters.

This is bad for multiple reasons:

-   The relational database routinely ran out of RAM trying to load up and send these documents over the wire.
-   The element management service nodes (which we recently dockerized, and have less RAM) would run out of memory when loading these documents, causing another node to pick up the document. This node would also run out of memory, and so on, essentially passing the document along like a game of Russian roulette with a fully loaded gun.
-   Finally, we don't want to store these documents (which are up to a thousand times the normal document size.)

First Encounter with the Problem
--------------------------------

Our first encounter with this issue was particularly distasteful because we didn't know what we were looking for. I'll hold off on details from that long evening, but the end results were the following:

-   We narrowed down the source of the corrupted characters to a single μ character which had replicated.
-   A support engineer and I were able to reproduce the corruption from a single μ to **two** corrupt characters, then to **six** corrupt characters. I assumed we missed seeing four characters (meaning linear document size growth), but oddly the document went back to **two** characters again.

We had reproduced the problem (albeit not reliably), so we could at least create a temporary fix and deem it root cause for the previous day.  We stripped these characters out of incoming payloads to prevent them from getting into our system, temporarily fixing the issue, but without reliably reproducing it, we couldn't truly fix it.

Invalid Element Documents
-------------------------

A few weeks went by and we still weren't able to reproduce the problem reliably. The issue hadn't sprung up again, so it became a lower priority. Unfortunately, it was only silent for a little while, and sprung up again a couple weeks ago. We had instrumented our applications and used a [Netuitive policy to fire an OpsGenie alert](/whats-new-netuitive-opsgenie-custom-data-more) if a document got too large so we were able to get in front of the issues, but they were still disruptive events. Also, our metrics showed that these documents grew in size *exponentially*, not linearly as I had thought.\
![Character Encoding: Query](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Query-1024x213.png)

These characters weren't getting into the system anymore, but how many lay dormant? A database query showed around 30 IEDs (Invalid Element Documents) which could spontaneously grow.

We trudged through a few more OpsGenie alerts with still no solution.

Serialization and Character Encodings
-------------------------------------

It finally got to the point where we needed to dig until we hit the bottom of the problem. The corruption was occurring somewhere in our element reconciler service, so we decided to start digging at the serialization/deserialization points. I wrote some small tests to exercise:

-   JSON serialization/deserialization
-   Persisting the document to the relational datastore and repulling it
-   Converting to Avro and back
-   Injecting into our local cache and getting it again

We performed 100,000 test rounds to and from for each of these, but still found nothing.

A while back, I read Nathan Reed's "[A Programmer's Introduction to Unicode,](http://reedbeta.com/blog/programmers-intro-to-unicode/)" which introduced me to all the complexity of Unicode. I figured I might as well try forcing μ into a different encoding and see what happened. I had already checked the database for UTF-8 support and it was enabled. If our element service didn't have UTF-8 support, how would μ have even gotten into the database correctly (μ was correctly persisted for the normalized element model) in the first place?

I took a look at the available Java character encodings, and the first non-UTF encoding is [ASCII](https://en.wikipedia.org/wiki/ASCII). I serialized the element document into a byte array, constructed a new string in ASCII, and lo and behold I found two corrupted characters. When I ran it through another round, I got **six corrupted characters**. One μ turns into two corrupted characters and **each corrupted character multiplies into three**. There's our exponential growth.

Fitting the Pieces Together
---------------------------

When I took these findings to the support engineer I was working with, the first comment was "but μ is an ASCII character". That's true, but Java uses [*US-ASCII*](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html) which is a 7-bit encoding and doesn't contain μ (which is in the extended ASCII set). Regardless, we still had two unanswered questions:

-   If this was all an encoding issue, why haven't all documents with non-ASCII characters blown up at a much faster rate?
-   More importantly: *Why are we using ASCII as our default encoding?*

The answer to the first question comes from some complexity in the ingest pipeline. Element metadata is merged into the existing element document on ingest, so we can store a superset of metadata. This allows data to come in from multiple sources, giving users a [better view of that element within Netuitive](/monitoring-metrics-elements). For performance reasons, we only update the element document when certain pieces of metadata are changed (tags, metrics, attributes, etc). For fairly static elements (which most of our infrastructure elements are), serializations to persist in the database are rare. Although the document size would roughly triple on each persist, persists were fairly rare, so the overall rate of growth was slower than we might have expected (but had the potential to grow very quickly).

The answer to the second question required bringing in even more tech from our stack. We've recently [moved most of our stateless services to Docker](/how-to-monitor-microservices). Most of our services are written in some flavor of Java, so we have a base Docker image upon which we build our other services. The default character set with my local JDK is UTF-8, but, as all devs know, what is on your local machine doesn't matter.

I pulled down the base image, wrote a small Java class to output the default charset, and ran it.

![Character Encoding: Charset-Test](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/07/Charset-Test.png)

There you have it.

Conclusions
-----------

We've since set the default encoding on our element service to UTF-8 and are working to ensure UTF-8 support on all our other services. We also continue to add more monitoring to our own stack using Netuitive, both to provide a better platform for our customers and to offer a better user experience by using our own product for monitoring. This experience has given us a better appreciation for the complexity of our system and how we can better monitor it.

For me, though, the more important lesson is: make sure you support UTF-8 *in all parts* of your system.
