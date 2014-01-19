---
published: true
title: Tracking Disqus comments in Google Analytics
layout: post
author: Toby Foord
slug: "tracking-disqus-comments-in-google-analytics"
date: "2014-01-19"
metatitle: Tracking comments made in disqus through google analytics
---

Another quick memo/tip.

Next time your implementing Disqus comments in your site, don't miss out on tracking new comments through Google Analytics with events. 

	function disqus_config() {
		this.callbacks.onNewComment = [function() {
      		ga('send', 'event', 'Posts', 'New Comment');
 		}];
	}