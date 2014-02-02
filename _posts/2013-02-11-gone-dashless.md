---
layout: post
published: true
author: Toby Foord
title: "Gone Dashless"
slug: "gone-dashless"
date: 2013-02-11
categories: blog apple
---

OSX has been plagued by the ridiculous dashboard widgety nonsense since long before I joined the team, but until recently It left me alone and so too I it. 

Having finally upgraded to OSX Lion the dashboard really wants to play again. It's become more front and centre with the arrival of mission control and with that, more of a drain on system resources.

As with all the best finds, a mere one line in Terminal will rid you of these woes by removing the dashboard entirely. Not a god awful widget in sight! 

    defaults write com.apple.dashboard mcx-disabled -boolean YES


For this to take effect immediately you may also want to run this

    killall Dock

Bon-apetit.
