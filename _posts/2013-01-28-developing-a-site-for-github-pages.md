---
layout: post
date: 2013-01-28 19:27:00
slug: developing-a-site-for-github-pages
title: Developing a website for GitHub Pages
author: Toby Foord
---

At the end of last week the urge hit me. Finally. Maybe. Possibly? To actually build my own site. But what about maintenance. management. Will I have the time? The defacto choice of wordpress is such a great tool, theres so much to it, its so easily modifyable and tweakable to my every whim! But maybe its just too much. Maybe I want to just plonk some text down and do away with all of the advanced features.

A blog, for me, will serve a few simple purposes:

1. To share a few choice pearls with the world. I have fed from the communities enormous wealth of knowledge for so long that I hope to be able to chuck a few probably meager morsels back in.
2. To remind me. I have appauling memory paired with crap organisational skills, hopefully if something hits me, or I find a snippet of awesome code out there, I'll stick it here for me and anyone else who's looking.

Github Pages
---
So I've harped on what I won't use but lets move on to what I will, Github. It would seem to have passed me by until now, but Github offers a service called Github pages. In short, by creating an appropriately named repo github will serve this up as a static site. A pretty sweet start!
Next into the mix is Jekyll. Developed by the co-founder of github [Tom Preston-Werner][tpw], this is a server platform with a facinating difference. Instead of serving up dynamic content: taking a file, processing it, and delivering static content to the user. Jekyll takes markdown and liquid files and processes them into html, then stores these files and runs them from a static server. Genius!

So, I think it's fairly safe to say this has to be the leanest blog platform going. And I get to write up articles using markdown which was a massive desire of mine.
The site is currently at a bare minimum and I hope it will evolve over time, I’ll try to keep you posted as and when I make changes.

If you are at all curious pop over to the [repo][github-repo].


[tpw]: http://Tom.preston-werner.com
[github-repo]: http://Github.com/idodev/idodev.github.com
