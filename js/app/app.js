/*global window, setTimeout, hljs, $, ga */

$(function () {
    "use strict";

    // LINE NUMBERING FOR PRE/CODE

    hljs.tabReplace = '    ';
    hljs.initHighlightingOnLoad();

    $('pre code').each(function () {
        var lines = $(this).text().split('\n').length - 1,
            $numbering = $('<ul/>').addClass('pre-numbering'),
            i = 0;
        $(this)
            .addClass('has-numbering')
            .parent()
            .append($numbering);
        for (i = 1; i <= lines; i += 1) {
            $numbering.append($('<li/>').text(i));
        }
    });

    // SEARCH BAR

    var allPosts = null, ajaxRequest = null;

    function filterPosts(term) {
        var filteredPosts = [];
        if (allPosts !== null) {
            $.each(allPosts, function (k, post) {
                if (post.title.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
                    filteredPosts.push(post);
                }
            });
        }
        return filteredPosts;
    }

    function getPosts() {
        if (ajaxRequest === null) {
            ajaxRequest = $.ajax({
                url: '/search.json',
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    allPosts = data;
                    allPosts.pop();
                }
            });
        }
    }

    getPosts();

    $(".site-search input").bind('keyup click', function () {

        if ($(this).val().length < 2) {
            $(".site-search .results").fadeOut(300);
            return false;
        }

        var $postsList, posts = filterPosts($(this).val());
        if (posts.length > 0) {
            $postsList = $("<ul>");

            $.each(posts, function (k, post) {
                $postsList.append(
                    $('<li>').append(
                        $('<a>')
                            .attr('href', post.href)
                            .text(post.title)
                    )
                );
            });

            $('.site-search .results').empty().append($postsList);
        } else {
            $('.site-search .results').empty().append($('<span>').text('No results...'));
        }
        if (!$('.site-search .results').is(":visible")) {
            $('.site-search .results').slideToggle(300);
        }
    });

    $(".site-search input").blur(function () {
        setTimeout(function () {
            if (!$(".site-search .results").is(":focus")) {
                $(".site-search .results").fadeOut(300);
            }
        }, 800);
    });

    //track user clicking search result
    if (typeof (ga) === "function") {
        $('.site-search .results li a').on('click', function () {
            ga('send', 'event', 'Website', 'Used Site Search', $(this).attr('href'));
        });
    }



    // HOME word toggle
    if ($('.tid-type').length === 1) {
        $('.tid-type').loopText({
            strings: Array('design', 'dream', 'develop', 'discover','change'),
            fadeDuration: 800,
            pauseDuration: 4000,
        });
    }
    if ($('.tid-platform').length === 1) {
        $('.tid-platform').loopText({
            strings: Array('web', 'desktop', 'mobile', 'business', 'users'),
            fadeDuration: 800,
            pauseDuration: 5000,
        });
    }

});


(function($){

    $.fn.loopText = function(options){
        $(this).each(function () {
            var self = this;
            var strIndex = 0;

            var settings = {
                strings: Array('goodbye', 'cruel', 'world'),
                fadeDuration: 1000,
                pauseDuration: 3000,
            }
            var opts = $.extend({},settings,options);

            var recurseTextChange = function () {
                $(self).animate({opacity:0},opts.fadeDuration/2,
                    function() {
                        if( strIndex+1 == opts.strings.length){
                            strIndex = 0;
                        } else {
                            ++strIndex;
                        }
                        $(self)
                            .text(opts.strings[strIndex])
                            .animate({opacity:1},opts.fadeDuration/2, function(){
                                setTimeout(function(){
                                    recurseTextChange()
                                },opts.pauseDuration);
                            });
                    }
                );
            };

            recurseTextChange();
        });
        return this;
    }

})(jQuery);


/** http://stackoverflow.com/a/15120409/477958 **/
$(function () {
  var $form = $('#mc-embedded-subscribe-form');

  $('#mc-embedded-subscribe').on('click', function(event) {
    if(event) event.preventDefault();
    register($form);
  });
});

function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
    success     : function(data) {

      if (data.result != "success") {
        var message = data.msg.substring(4);
        $('#notification_container').html('<span class="alert">'+message+'</span>');
      }

      else {
        var message = data.msg;
        $('#notification_container').html('<span class="success">'+message+'</span>');
        //track user clicking search result
        if (typeof (ga) === "function") {
            ga('send', 'event', 'Website', 'Newsletter Sign Up');
        }
      }
    }
  });
}
