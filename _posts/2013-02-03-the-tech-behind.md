---
layout: post
published: true
author: Toby Foord
title: "The Tech Behind"
slug: "the-tech-behind"
date: 2013-02-03
categories: blog
---

Lights, Camera…
This is take three, I've been at this point twice before. The decision to start up a blog is far too easy, the effort to maintain however is far harder. I love the idea of blogging, the public ponderings and musings entices me, and who's to say I don't have great ideas worth hearing, for me the reason to blog is quite simple, and twofold:

1. To give something back, I am a massive advocate of open source. I use countless tools daily that have been selflessly handed over to the world, tools that have either no commercial alternative or that do have but at great expense. I integrate open source code into my projects often and attribution seems massively insufficient. Hopefully here I can throw tiny morsels back in to the community to try to compensate for what I have taken.
2. My memory is bad. No, really, really bad. This here blog will be  my notepad for useful snippets of code, awesome looking apps, up and coming projects and any ole' crap that takes my interest.

I've tried Wordpress. Been there, done that. The problem I have with WP is it's scale. Lil' old me decides to start blogging and suddenly I'm handed this gargantuan platform to manage. All I want to do is plonk down some words, proof and post. I have no need nor want for countless themes, plugins and updates.

##Enter Github
Recently whilst poking around my repo's on github I noticed references to [Github Pages][github-pages]. At first glance, it appeared to be another stale prebuilt, lookalikey offering. On further reading, you can manage the design and content entirely yourself as the platform is based on just a few key technologies that provide all the flexibility you (or at least I) can need 

##Jekyll
Github's co founder [Tom Preston-Werner][tpw] created the blogging platform used on Github Pages called Jekyll. (If curious the source is openly available here). Jekyll uses markdown, textile and liquid converters combined with a layout directory and discrete post documents to generate a completely static website. It sounds extremely basic and in many ways it is, however it is still very much a complete system.

Each post is stored as a markdown file within the _posts directory, the file name must be date and slug combined. Atop each post is a yaml identifier that provides  all the detail Jekyll needs to organise the blog. These 'variables' are also accessible anywhere you reference the post. Mine is super simple and looks a little like this:

    ---
    layout: post
    date: 2013-02-03
    slug: the-tech-behind
    title: The Tech Behind
    author: Toby Foord
    ---

I’m currently working on the minimum viable product premise but will be sure to keep you in the loop as and when I extend the site. Until then, I hope I can put at least one thing up here of use to at least one person!


[jekyll-repo]: http://Github.com/mojombo/jekyll
[github-pages]: http://pages.github.com/
[tpw]: http://Tom.preston-werner.com
[github-repo]: http://Github.com/idodev/idodev.github.com
