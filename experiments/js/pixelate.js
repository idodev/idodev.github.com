
$.fn.pixelate = function (options) {
    var randOpacity = function (min, max) {
        return (min + (Math.random() * (max - min))).toFixed(2);
    };

    $(this).each(function () {
        var self = this,
            settings = {
                cellSize: 10,
                threads: 4,
                speed: 200,
                minOpacity: 0,
                maxOpacity: 1
            },
            threads = [],
            opts = $.extend({}, settings, options),
            cols = Math.ceil($(self).width() / opts.cellSize),
            rows = Math.ceil($(self).height() / opts.cellSize),
            r = 0,
            c = 0,
            t = 0,
            s = 0;

        for (r = 0; r < rows; r += 1) {
            for (c = 0; c < cols; c += 1) {
                $(self).append(
                    $('<div/>')
                        .addClass('cell_' + r + '_' + c)
                        .width(opts.cellSize)
                        .height(opts.cellSize)
                        .css('background', '#000')
                        .css('opacity', randOpacity(opts.minOpacity, opts.maxOpacity))
                        .css('position', 'absolute')
                        .css('left', c * opts.cellSize)
                        .css('top', r * opts.cellSize)
                );
            }
        }

        var changeRandomCell = function () {
            setTimeout(function () {
                var col = Math.round(Math.random() * cols),
                    row = Math.round(Math.random() * rows);
                $('.cell_' + row + '_' + col, self).css({'opacity': randOpacity(opts.minOpacity, opts.maxOpacity)});
                changeRandomCell();
            }, opts.speed);
        };
        for (t = 0; t < opts.threads; t += 1) {
            changeRandomCell();
        }

    });

    return this;
};

$(function () {
    $('#sandbox').pixelate({cellSize: 40, threads: 4, speed: 50, minOpacity: 0, maxOpacity: 0.7});
});
