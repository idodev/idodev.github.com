---
layout: post
published: true
date: 2013-03-28
author: Toby Foord
title: Syntax-Highlighting-with-Highlight.js
slug: syntax-highlighting-with-highlightjs
---

As I've said before this blog started as a **minimum viable product** and because of this I was up and running in a matter of hours. This method does slow you down after the initial push though. The latest example being the want to provide code snippets with syntax highlighting, and so the search began for a syntax highlighter.

##The spec
The begining of my hunt immediately threw up some hurdles due to the use of a static site generator. Firstly, and I suppose it goes without saying, server-side programming is an obvious total no-go. And secondly specific markup like classes or ids would be very tricky due to using markdown to create my articles.

##Gripes
What really bugged me when lookng around is that its bloody hard to find a *simple* solution! The offerings are generally so comprehensive and OTT that I'd spend more time trimming the fat that if I had coded it from scratch. Saying that, if my need was for a full fledged fancy-pants doo-dah then you can't go wrong with some of these.

- [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/)
- [GeSHi – Generic Syntax Highlighter](http://qbnz.com/highlighter/index.php)
- [Google Code Prettify](https://code.google.com/p/google-code-prettify/)
- [Lighter.js](https://github.com/pradador/Lighter/) (written in MooTools)

If you know of any that really should get a mention let me know.

##Highlight.js
After what felt like an eternity (probably about 20 minutes) of hardcore Googling, I found [highligh.js][highlightjs]. This library will happily plow through the page looking for any `pre>code` page elements and without any fuss will go about detecting the programming language (of which it can handle 54!) and apply formatting as required. Better yet, the colouring and formatting is entirely css driven and they have 26 great themes bundled in to pick from, including those matching the styles of Google Code, Github and XCode. To initialise the script its just a one/two liner.

    hljs.tabReplace = '    ';
    hljs.initHighlightingOnLoad();


##Line numbers
One ommission from this library is line numbering, though by no accident as shown by a [contributor's efforts][hjslinenumber] to add them. I like line numbers, maybe it is just eye candy but I can see the day where I'll want to point you guys to line 33 and be stuffed without 'em. So what am I to do but knock up a quick bit of jQuery to do my bidding. Shown below with line numbers using the very script (how very meta!) is my quick 'n dirty code to get the job done.

    $(function(){
        $("pre code").each(function(){ 
            var numbers = "";
            for(i=1;i<=Math.ceil(parseFloat($(this).height()) / parseFloat($(this).css("line-height")));i++){
                numbers=numbers + i + "<br/>";
            }
            $(this).parent("pre").append($("<div/>").addClass("pre-numbering").html(numbers));
        });
    });


It's simple really, start by hunting down the code blocks. Using the element's height and text line-height I can calculate number of lines, and then just place a div between the closing `code` and `pre` tags with a div containing the numbers. This does of course need a little bit of css intervention also:

    code{
        padding: 2px 4px;
        border-radius: 3px;
        border: 1px solid #C3CCD0;
        background: #FFF;
        font-family: Menlo, monospace;
        font-size: 0.8em;
    }
    
    pre {
        position:relative;
        margin-bottom: 24px;
        z-index:10;
        code{
            display:block;
            padding:12px 24px;
            overflow-y: auto;
            font-weight:300;
        }
    }
    
    .pre-numbering{
        position:absolute;
        top:1px;
        left:1px;
        width:20px;
        padding:12px 2px 12px 0;
        border-right:1px solid #C3CCD0;
        border-radius: 3px 0 0 3px;
        background-color:#EEE;
        text-align:right;
        font-family: Menlo, monospace;
        font-size:0.8em;
        color:#AAA;
    }

Job's a good'un! If this has been of any use to you let me know in the comments below.

[highlightjs]: http://softwaremaniacs.org/soft/highlight/en/
[hjslinenumber]: http://softwaremaniacs.org/forum/highlightjs/1362/

