$(function () {

    var $zoom = $('.zoom li');
    var width = $zoom.width();
    var zoom = 1.4;
    var duration = 400;

    $zoom.on({
        mouseenter: function () {

            var height = $(this).height();

            $(this).find('.img').stop().animate({
                width:  width * 1.4,
                marginLeft:-( width * 1.4 -  width) / 2,
                marginTop:-(height * 1.4 - height) / 2
            }, 400);
        },
        mouseleave: function () {

          $(this).find('.img').stop().animate({
              width:  width,
              marginLeft: 0,
              marginTop:0
          },400);
        }
    });

});