---
published: false
title: Safely binding to events using namespaces in jQuery
layout: post
author: Toby Foord
slug: "safely-binding-to-events-using-namespaces-in-jQuery"
date: "2014-01-02"
metatitle: How to safely bind to an event in jQuery using namespaces
metadesc: A quick javascript tip for making sure that your bindings to events in jQuery will not conflict by using namespaces
---

This was a bit of a eurika moment for me a couple of weeks ago. For those who just want an answer jump to the bottom. I'm feeling a little playful so please, indulge me and read on!

So here's me trying to create the next awesome photo gallery plugin in jQuery. It's all sussed, pretty little thumbnails - check. Flawless scrolling (thanks to [Perfect Scrollbar](http://www.yuiazu.net/perfect-scrollbar/)) - check. The image is dynamically generated to fill the space at the correct resolution using some awesome .net magic on azure (fed through a cdn and driven by [Image Resizer](http://http://imageresizing.net/) on a scaleable cloud service) - check.

Now to finish this little wonder off, the modal viewer is , in css parlance, 'absolutely' positioned filling 100% width and height and I just need to javascript to let me know when the user resizes the window to regenerate the image. We also have previous, next and play  buttons that I would like to be able to control using the keyboard - surely an expected function in any decent gallery! So lets bind to some events:

    $(window).on('resize',function(){
        //do some whizbang awesome stuff
    });
    

    $(window).on('keydown',function(e){
    	//using e.keyCode we can control the gallery prev next play and close
    });
    
Done.

But, being the conscientious coder that I am, when the gallery is closed I want to clear up my code so, lets unbind these listeners.

    $(window).off('resize');
    $(window).off('keydown');
    
Arghhh, but now my other epic plugin isn't responding to keypresses, I've just removed the `keydown` listener from any and **all** `window.keydown` handlers that were previously implemented.

Namespace your events
---

Maybe I missed lesson one in jQuery but after much cussing it seems those clever devs saw this coming! After a little google of something along the lines of 'well how the f&%k did you do it then?' I found the answer, namespace your damned events or pay for it later. jQuery makes this incredibly easy to do:

    $(window).on('resize.myNamespace',function(){
        //do some whizbang awesome stuff
    });
    
Followed at a later point by:

    $(window).off('resize.myNamespace');
    
This will leave all other non or otherwaise namespaced handlers intact.

FYI. You can also stack namespaces `resize.nifty.trick`, they are built much like classes in that thay lack any heirarchy and as such can be addressed and removed individually with `.off('resize.nifty')` or `off('resize.trick')`.

I hope this saves someone a few hours of head scratching, I've now a awfully raw bald patch that I fear may never recover!
    


