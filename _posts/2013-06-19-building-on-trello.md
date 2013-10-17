---
published: false
layout: post
date: "2013-06-19"
author: Toby Foord
title: "Building on Trello - The client.js API"
slug: "building-on-trello-the-clientjs-api"
date: 2013-06-19
---

In recent months I have found myself becoming increasingly reliant on [trello](http://www.trello.com) for organising my workflow, both long and short term. As a project management tool it is very flexible, intuitive and tactile - a far cry from most of the competition!

The basic premise in its operation are its boards that contain lists that contain cards. These cards are your work items, they can be populated with notes, checklists, attachments, due dates and more. They can be assigned to people, labeled and in the end possibly archived. Most importantly, its up to you on how you use it.


As is always the way, i did eventually find a limitation...

##Big Picture
At this point in time I have twelve boards for various projects, checklists and reminders. To get an idea of how I'm doing, as it stands, I have to open each board and recap.

This got me to wondering, can I extend trello to give me a 'board of boards'? I have played with trello's UI in a chrome extension before but this was different.

##The API
Documentation of the API was a little obscure to say the least. the REST docs were pretty good but client.js was the one of interest to me.

##The plan
So what did i want in my trello summary? I decided to use the existing structure but just 'up one level'. a board becomes a list; a list becomes a board.
