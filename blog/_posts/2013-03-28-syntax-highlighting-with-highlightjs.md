---
layout: post
published: true
author: Toby Foord
title: Syntax Highlighting with Highlight.js
slug: syntax-highlighting-with-highlightjs
date: 2013-03-28
categories: blog javascript
---

As I've said before this blog started as a **minimum viable product** and because of this I was up and running in a matter of hours. This method does slow you down after the initial push though. The latest example being the want to provide code snippets with syntax highlighting.

##The spec
The begining of my hunt immediately threw up some hurdles due to the use of a static site generator. Firstly, and I suppose it goes without saying, server-side programming is an obvious total no-go. Secondly specific markup like classes or ids would be very tricky due to the use of markdown to create my articles.

##Gripes
What really bugged me when lookng around is that its bloody hard to find a *simple* solution! The offerings are generally so comprehensive and, in personal opinion, over the top that I'd spend more time trimming the fat than if I were to code it from scratch. Saying that, if my need was for a full fledged fancy-pants doo-dah then you can't go wrong with some of these.

1. [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/)
2. [GeSHi – Generic Syntax Highlighter](http://qbnz.com/highlighter/index.php)
3. [Google Code Prettify](https://code.google.com/p/google-code-prettify/)
4. [Lighter.js](https://github.com/pradador/Lighter/) (written in MooTools)

If you know of any that really should get a mention let me know.

##Highlight.js
After what felt like an eternity (probably about 20 minutes) of hardcore Googling, I found [highlight.js][highlightjs]. This library will happily plow through the page looking for any `pre>code` page elements and without any fuss will attempt to detect the programming language (of which it can handle 54!) before applying the relevant formatting. Better yet, the colouring and highlighting is entirely css driven and they have 26 great themes bundled in to pick from, including those matching the styles of Google Code, Github and XCode. To initialise the script its just a one liner.

```
hljs.initHighlightingOnLoad();
```

##Line numbers
One ommission from this library is line numbering, though this is by no accident as found by a [contributor's efforts][hjslinenumber] to add them.
I like line numbers, maybe it is just eye candy but I can see the day where I'll want to point you guys to line 33 and be stuffed without 'em. So what am I to do but knock up a quick bit of jQuery to do my bidding. Shown below with line numbers using the very script (how very meta!) is my quick 'n dirty code to get the job done.

```
//numbering for pre>code blocks
$(function(){
    $('pre code').each(function(){
        var lines = $(this).text().split('\n').length - 1;
        var $numbering = $('<ul/>').addClass('pre-numbering');
        $(this)
            .addClass('has-numbering')
            .parent()
            .append($numbering);
        for(i=1;i<=lines;i++){
            $numbering.append($('<li/>').text(i));
        }
    });
});
```

It's simple really, it starts by hunting down the code blocks `$('pre code')`. Then, by taking the content and splitting it on new lines `\n` we can get the total line count. Lastly, we build a list with list items contianing numbers 1 through to `lines` and append it between the closing tags of `</pre>` and `</code>`. A couple of classes sprinkled in with the appropriate css intervention render the list in line with the left hand edge of the code.

```
pre {
    position: relative;
    margin-bottom: 24px;
    border-radius: 3px;
    border: 1px solid #C3CCD0;
    background: #FFF;
    overflow: hidden;
}

code {
    display: block;
    padding: 12px 24px;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    font-size: 0.8em;
}

code.has-numbering {
    margin-left: 21px;
}

.pre-numbering {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    padding: 12px 2px 12px 0;
    border-right: 1px solid #C3CCD0;
    border-radius: 3px 0 0 3px;
    background-color: #EEE;
    text-align: right;
    font-family: Menlo, monospace;
    font-size: 0.8em;
    color: #AAA;
}
```

Job's a good'un! There will no doubt be refinements needed, these things have a habit of evolving! If this has been of any use to you or you have any suggestions then let me know in the comments below.

[highlightjs]: http://softwaremaniacs.org/soft/highlight/en/
[hjslinenumber]: http://softwaremaniacs.org/forum/highlightjs/1362/
