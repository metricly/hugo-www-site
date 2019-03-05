---
author: "Daniel McClain"
date: "2017-12-20"
title: "DevOps Culture @ Metricly: Building a Salesbot"
description: "This blog series highlights the DevOps Culture @ Metricly, and how it permeates through our company- this week we discuss coding a Salesbot for Slack."
category: "Product Updates"
url: "/devops-culture-metricly-salesbot/"
layout: "single"
---

Introduction
-----------

##### About The *DevOps Culture* Series

*DevOps Culture at Metricly* will be an ongoing series that gives you a closer look at the way we think and work at Metricly. Being a truly DevOps oriented company, we put a culture of transparency and collaboration at the forefront of what we do. It results in greater trust from our customers, happier employees, and ultimately a [better monitoring tool](/product) for all to enjoy.

##### What is DevOps Culture?

DevOps is a term rapidly growing in use by technology & SaaS companies to describe the way in which they work. In essence DevOps culture is used to describe the breaking of barriers between Development and Operations who traditionally have been two separate silos that did not communicate nearly enough. DevOps also combines tools, development practices, and cultural ideas that can increase the velocity of which companies deliver their product. This speed helps to better serve customers and compete more effectively in the market.

![DevOps Culture](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/12/Metricly_graphics-development-operations-1024x727.png)

What is DevOps?

##### What We'll Cover

When you think about DevOps culture and what that means, the last word that comes to mind is probably- Sales. Traditionally two other departments that usually don't collaborate enough is Sales and Marketing, and by taking principles learned through our change to a DevOps focused company, we are also trying to take those principles and translate them to all departments within our company; for the sake of laughs, we'll call it Sal-keting. We'll detail how our sales team tackled a persistent problem by coming up with the idea to build a Salesbot, how it was built, and what it proved.

Making our Salesbot
-------------------

##### The Problem at Hand

Recently, we've added more cloud monitoring consultants to our team who reach out and assist customers through their monitoring journey on our platform. These employees have the choice to work at the office, from home or completely remote. When Marketing alerted us that someone had started a trial with Metricly, this raised a fundamental problem of assigning a dedicated consultant to that signup. We would have to check a list of who was next in line to reach out, and then alert them through the appropriate Slack channel manually so that they could connect with the person trying our platform.

![DevOps Culture at Metricly using slack](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/12/Screen-Shot-2017-12-21-at-2.03.59-PM-1024x386.png)

Manually alerting through slack

We're a nimble team that has members working remote often, so keeping up with who was next in line became cumbersome. This resulted in confusion on who was next in line to reach out, wasted time going through manual processes, and delayed customer assistance. How is this significant? Well, it became easy for connecting with the signup to be delayed, or missed altogether.

##### The Idea

Almost every piece of information that we see at Metricly runs through Slack. Naturally we wanted a solution that was extremely easy to use and view through chat, much like how our own users love [sending monitoring alerts to Slack](/product#alerts-and-notifications). We decided on a whim to try building a Slackbot of our own that could help keep the trial signups organized by assigning and alerting a consultant who could quickly engage with the user. Only a single button click would be needed, avoiding the hassle of checking lists and potentially delaying user assistance.

##### Building The Bot

To do this we used Slack's Event, and Web APIs. The idea was that when a new user came in, we could add a certain reaction to the new signup notification in Slack. This would trigger the bot to respond, tagging the rep that was next in line to assist. To keep the bot simple we decided to use Node.JS (since I already knew JavaScript). To tag a member of our team in Slack when a certain reaction was added we used:

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im\
slackEvents.on('reaction_added', (event)=> {\
if (ifReactionApplicable(event.reaction, event.item.channel)) {\
let teamMember = getNextTeamMember();\
let message = `@${teamMember} YOU'RE UP!`;

But what if someone added this as a mistake? That would cycle through the list... Luckily Slack had an answer for that, so we added:

slackEvents.on('reaction_removed', (event)=> {\
if (ifReactionApplicable(event.reaction, event.item.channel)) {\
let teamMember = getCurrentTeamMember();\
index -= 1;\
let message = `@${teamMember} YOU GET A SECOND LIFE`;

With this we had the basis of when someone should be assigned to a new signup, who it should be assigned to, and how to take this assignment away if it was a mistake.

In The End
----------

The bot we created gave a more visible list of who was assigned to the user right within Slack so that everyone knew at a glance who was responsible for reaching out. This was a big win for our remote workers who communicated to the team through Slack almost 100% of the time. This also made Marketing and Sales less of individual silos with more collaboration between the two departments.

![Salesbot DevOps Culture](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2017/12/Screen-Shot-2017-12-21-at-2.09.56-PM.png)

Salesbot in action

We hope you enjoyed this look into the culture here at Metricly, if you want to learn more about our product you can always [start a free 21-day trial](/signup). We look forward to continuing this series with posts that highlight our DevOps culture. Want to join the team? Check out our [careers page](/careers), we are always looking for like-minded professionals to join our fast-paced environment.
