
$.fn.pixel8 = function(options){
    $(this).each(function(){
        var self = this;

        var settings = {
            cellSize: 10,
            threads: 4,
            speed: 200,
        };
        var opts = $.extend({},settings,options);

        var cols = Math.ceil($(self).width(),opts.cellSize), rows = Math.ceil($(self).height()/opts.cellSize);

        for(r=0;r<rows;r++){
            for(c=0;c<cols;c++){
                $(self).append(
                    $('<div/>')
                    .addClass('cell_'+r+'_'+c)
                    .width(opts.cellSize)
                    .height(opts.cellSize)
                    .css('background','#000')
                    .css('opacity',Math.random()*0.9)
                    .css('position','absolute')
                    .css('left',c*opts.cellSize)
                    .css('top',r*opts.cellSize)
                );
            }
        }
        var threads = [];
        for(t=0;t<opts.threads;t++){
            threads[t] = setInterval(function(){
                var col = Math.round(Math.random()*cols);
                var row = Math.round(Math.random()*rows);
                $('.cell_'+row+'_'+col,self).animate({'opacity':Math.random()*0.9},opts.speed);
            }, opts.speed);

        }

    });

    return this;
};

$(function(){
    $('#sandbox').pixel8({cellSize:20,threads:10,speed:200});
});
