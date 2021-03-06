---
published: true
layout: post
author: Toby Foord
title: "A TinyMCE revelation"
slug: "a-tinymce-revelation"
date: 2013-01-27
categories: blog javascript
---

In the last three/four years I have needed to use a rich text editor library for my web projects on multiple occasions. Roll on TinyMCE. I believe this has to be one of the maturest and widely used javascript editors, and in both their documentation and the community is quite impressive.

To good to be true?
---
The uses I have had for this tool are wide and varied, from providing an interface to construct and design an entire page to requesting 'one-liners' with minimal style control. It has driven me absolutely _NUTS_ on several occasions that the default behaviour is to wrap all content in a paragraph element. Now, of course, you are thinking "but Toby! this is great, we don't want loose text just floating around all un'semantic and what not!". But who is to say where this content is intended to be placed? I might very well (and indeed frequently do) intend to place the output between my very own `<p&>` tags and style those as I see fit! I shaln't rant (if I haven't already), but lets say this has cause minor fits of irritation.

The Revelation
---
I have already commended the excellent documentation available with this library of tools, but the problem really is just how much documentation there is. I could hunt for the solution to this problem for days before unearthing a fix. There are just so many plugins and extentions of the platform that it makes my head spin.
Yesterday I stumbled over three lines of code, well three options for a TinyMCE instance, and my heart nigh on skipped a beat.

```
	force_br_newlines : true,
	force_p_newlines : false,
	forced_root_block : ''
```

Thats it! With that, there is no enclosing element, and any line feeds requested will be interpreted as `<br/>`. To be used sparingly i suppose, I know there are folk out there that'll cringe knowing I'm plonking line breaks in where a paragraph would be more appropriate but there are situations where its still very handy!
