---
published: true
title: Tracking Disqus comments in Google Analytics
layout: post
author: Toby Foord
slug: "tracking-disqus-comments-in-google-analytics"
date: "2014-01-19"
metatitle: Tracking comments made in disqus through google analytics
img: "/blog/images/tracking-disqus-comments-in-google-analytics/headline.jpg"
thumb: "/blog/images/tracking-disqus-comments-in-google-analytics/thumb.jpg"
imgalt: Graph showing the incredible climb of not provided in Google Analytics
categories: blog analytics javascript
---

Another quick memo/tip. Next time your implementing Disqus comments in your site, don't miss out on tracking new comments through Google Analytics with events.

```
function disqus_config() {
	this.callbacks.onNewComment = [function() {
		ga('send', 'event', 'Posts', 'New Comment');
	}];
}
```

Add the above into your Disqus config and adapt the Google event descriptions as you wish. Note the above is using Google Universal Analytics. If you wanted to do this using previous tracking code using `_gaq` the following would be appropriate.

```
function disqus_config() {
	this.callbacks.onNewComment = [function() {
		_gaq.push(['_trackEvent', 'Posts', 'Comment']);
	}];
}
```

Source: [Disqus Help Docs](http://help.disqus.com/customer/portal/articles/466258-capturing-disqus-commenting-activity-via-callbacks)
