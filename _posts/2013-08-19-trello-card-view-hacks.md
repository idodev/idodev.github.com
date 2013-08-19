---
published: 
  - true
  - "true"
layout: post
date: "2013-08-19"
author: Toby Foord
title: "Trello - Card View Hacks"
slug: "trello-card-view-hacks"
---

I recon that I spend as much time tweaking Trello as I do actually using it to manage my workflow. I hope this shows a desire for perfection as opposed to some symptom of attention deficit disorder!

'Card view' allows you to get an overview of everything assigned to you and you can order your cards by board or due date.

![Card view](/images/screenshots/trello-card-view-hacks/card-view.png)

I want, ney - need, to see what I'm up to on a daily basis. Card view fits the bill BUT it also shows a long history of everything I've put in the done list and have yet to archive. Not that I'm bragging, but my done list is long and as such swamps the urgent items requiring my attention. This brings me to the following snippets.

I've created several chrome plugins / apps relating to Trello, but in this instance I've resorted to the browser agnostic JavaScript Bookmarklets below:

If you want to use the following bookmarks, in Chrome or Firefox you can drag and drop the links to your bookmarks bar, in Internet Explorer right click and 'Add to Favourites'.

##Hide Done List
Here's the link: "[Trello|Hide Done](javascript:function hidetrellodonelist(\){$('.list-card-container'\).show(\).each(function(\){if($('.list-card-position strong',this\).text(\).toLowerCase(\) == 'done'\) $(this\).hide(\);}\);} hidetrellodonelist(\);)"

	javascript:function hidetrellodonelist(){$('.list-card-container').show().each(function(){if($('.list-card-position strong',this).text().toLowerCase() == 'done') $(this).hide();});} hidetrellodonelist();


##Filter For List
Here's the link: "[Trello|Filter](javascript:function filtertrellolists(\){var listName=prompt("Filter for list name:"\).toLowerCase(\);$(".list-card-container"\).show(\).each(function(\){if($(".list-card-position strong",this\).text(\).toLowerCase(\).indexOf(listName\) == -1\) $(this\).hide(\);}\);} filtertrellolists(\);)"

	javascript:function filtertrellolists(){var listName=prompt("Filter for list name:").toLowerCase();$(".list-card-container").show().each(function(){if($(".list-card-position strong",this).text().toLowerCase().indexOf(listName) == -1) $(this).hide();});} filtertrellolists();

These links only work on the Card view as far as I'm aware and are likely to have quite odd behaviour elsewhere on trello. They'll likely only every be of any use to me but at least by putting it here I can't loose them! If you do use them let me know below!

I take no responsibility for the code provided, it really can't do any damage as far as I can tell but I've said that before and been corrected!