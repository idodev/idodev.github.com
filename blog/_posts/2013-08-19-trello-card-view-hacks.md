---
published: true
layout: post
author: Toby Foord
title: "Trello - Card View Hacks"
slug: "trello-card-view-hacks"
date: "2013-08-19"
metadesc: Filter your card view on Trello to hide the Done List
img: "http://trello-attachments.s3.amazonaws.com/521f52a02562937702003295/525fab8dc16d5f0c40000ef6/2632a730f5a6f9d138cd5fdc1ed5f14e/upload_2013-10-17_at_10.19.09_am.png"
imgalt: Code for the javascript bookmarklet to hide and show cards depending on what list they belong to.
metatitle: "Trello - Card View Hacks"
categories: blog javascript productivity
---

I recon that I spend as much time tweaking [Trello](http:trello.com) as I do actually using it to manage my workflow. I hope this shows a desire for perfection as opposed to some symptom of attention deficit disorder!

'Card view' allows you to get an overview of everything assigned to you and you can order your cards by board or due date.

![Card view](http://blog.trello.com/wp-content/uploads/2012/07/Screen-Shot-2012-07-12-at-1.35.59-PM.png)

I want, ney - need, to see what I'm up to on a daily basis. Card view fits the bill BUT it also shows a long history of everything I've put in the done list and have yet to archive. Not that I'm bragging, but my done list is long and as such swamps the urgent items requiring my attention. This brings me to the following snippets.

I've created several chrome plugins / apps relating to Trello, but in this instance I've resorted to the browser agnostic JavaScript Bookmarklets below:

If you want to use the following bookmarks, in Chrome or Firefox you can drag and drop the links to your bookmarks bar, in Internet Explorer right click and 'Add to Favourites'.

##Hide Done List
Here's the link: "[Trello|Hide Done](javascript:function hidetrellodonelist(\){$('.list-card-container'\).show(\).each(function(\){if($('.list-card-position strong',this\).text(\).toLowerCase(\) == 'done'\) $(this\).hide(\);}\);} hidetrellodonelist(\);)"

	javascript:function hidetrellodonelist(){$('.list-card-container').show().each(function(){if($('.list-card-position strong',this).text().toLowerCase() == 'done') $(this).hide();});} hidetrellodonelist();


##Filter For List
Here's the link: "[Trello|Filter](javascript:function filtertrellolists(\){var listName=prompt("Filter for list name:"\).toLowerCase(\);$(".list-card-container"\).show(\).each(function(\){if($(".list-card-position strong",this\).text(\).toLowerCase(\).indexOf(listName\) == -1\) $(this\).hide(\);}\);} filtertrellolists(\);)"

	javascript:function filtertrellolists(){var listName=prompt("Filter for list name:").toLowerCase();$(".list-card-container").show().each(function(){if($(".list-card-position strong",this).text().toLowerCase().indexOf(listName) == -1) $(this).hide();});} filtertrellolists();

These links only work on the Card view as far as I'm aware and are likely to have quite odd behaviour elsewhere on Trello. They'll likely only every be of any use to me but at least by putting it here I can't loose them.

I take no responsibility for the code provided, it really can't do any damage as far as I can tell but I've said that before and been corrected!

If you do use any of this, let me know how you got on!
