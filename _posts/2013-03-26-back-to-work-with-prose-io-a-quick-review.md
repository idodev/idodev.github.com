---
published: true
layout: post
date: "Tue Mar 26 2013 00:00:00 GMT+0000 (GMT)"
author: Toby Foord
title: "Back to work with Prose.io - a quick review"
slug: "back-to-work-with-prose-io-a-quick-review"
metadesc: null
img: "https://trello-attachments.s3.amazonaws.com/521f52a02562937702003295/525e80089c356f225e002380/b80a6332964cd5a15fd8b465b48ef8f9/upload_2013-10-16_at_1.01.13_pm.png"
imgalt: Editing a post within prose.io
metatitle: "Back to work with Prose.io - a quick review"
---

A month into fatherhood and I figure it's about time to get back into the website.

Firstly, I've shifted across the idodev.co.uk domain to github pages. A super easy process of adding a file to the repo named `CNAME` containing the domain name. After that its just a case of modifying the DNS A Record to point at Github's IP address. If you wan't to find out more just hop over to the help files [here][githubdnshelp]

Going back on what I've said previously I did feel a little at a loss with my writing workflow. Initially I have been using iA Writer to write the articles, and have held a local copy of the git repository on dropbox so as I can write from both my mac and my iPhone (amazing how many things come to mind when on the move!). The big gripe is when I come to publish. At this point I still needed a machine with access to my dropbox (not a a massive challenge) and more akwardly to have Git installed (a real *pita*).

![Editing a post with iaWriter](/images/screenshots/right-back-to-work-then/ia-writer.png)

I admit the first thing that came to mind was "Aha! A project!", some sketches and doodles later it seemed my use case was just too obscure, a service to push a git repo hosted on dropbox to github! Yesterday, by chance, I spotted reference to [prose.io][prose] on an [article][scribu] by **Silviu-Cristian Burcă** when searching for a graphical interface tailored to [Jekyll Server][jekyll].

##Prose - 'A Content Editor For Github'
That's their one liner, they go on to expand and explain that this here is a service optimised fo use with github pages, with some really handy features that already I feel as though I couldn't do without.

![Editing a post with prose.io](/images/screenshots/right-back-to-work-then/prose-edit.png)

###1) Direct Github integration
Through the use of the Github API, Prose is able to browse through all of your repositories (and those you have been given access to). So whilst it's primary purpose has been laid out for working with github pages, you can also tweak any files in the repo. This has been a lifesaver for mini edits of html & css when on the road. The integration also allows for file creation and deletion, so an article can not only be edited but born and scrapped through the Prose UI.

###2) Immediate preview
It's the first call for a markdown editor and Prose succeeds. A simple clear representation of the document. In addition Prose also adds colour coding and style hints to the editor itself.

###3) Metadata editing
In Jekyll all post documents should start with a Yaml Front matter block, here we can specify details about the post that you may wish to access elsewhere. [The Jekyll Wiki][jekyllyaml] is a great place to get to grips with this.

###4) Community contribution
Lastly the team at Prose.io have enabled you, the readers, to get stuck in too. Even if you are without access to my repository you are able to make edits to my documents. Your changes are then saved as a native pull request through Github for me to review and include! Im still working on bringing this function to the site (via a small link to appear at the bottom of the article) but really look forward to seeing what might come of it. As they have said in their docs 

>With the latest release of Prose.io we’d like to propose a workflow that assumes content will be **eventually consistent**. Much like in the spirit of Open Source development, we claim that continuously improving content in the open leads to better results than applying the best review process available.


[githubdnshelp]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages
[prose]: http://prose.io
[scribu]: http://scribu.net/blog/switched-to-jekyll.html
[jekyll]: http://jekyllrb.com/
[jekyllyaml]: https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter