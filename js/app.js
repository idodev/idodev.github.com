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
            ga('send', 'event', 'Search', 'Clicked Result', $(this).attr('href'));
        });
    }
});
