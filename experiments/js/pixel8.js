
$.fn.pixel8 = function(options){
    $(this).each(function(){
        var self = this;

        var settings = {
            widthDivisions: 10,
            threads: 4,
            speed: 200,
        }
        var opts = $.extend({},settings,options);

        var cellSize = Math.ceil($(self).width()/ opts.widthDivisions);
        console.log($(self).outerHeight());
        var cols = opts.widthDivisions, rows = Math.ceil($(self).height()/cellSize);

        for(r=0;r<rows;r++){
            for(c=0;c<cols;c++){
                $(self).append(
                    $('<div/>')
                    .addClass('cell_'+r+'_'+c)
                    .width(cellSize)
                    .height(cellSize)
                    .css('background','#000')
                    .css('opacity',Math.random()*0.9)
                    .css('position','absolute')
                    .css('left',c*cellSize)
                    .css('top',r*cellSize)
                );
            }
        }
        var threads = [];
        for(t=0;t<opts.threads;t++){
            threads[t] = setInterval(function(){
                var col = Math.round(Math.random()*cols);
                var row = Math.round(Math.random()*rows);
                $('.cell_'+row+'_'+col,self).animate({'opacity':Math.random()*0.9},opts.speed);
            },opts.speed);

        }

    });

    return this;
};

$(function(){
    $('#sandbox').pixel8({widthDivisions:40,threads:20,speed:100});
});
