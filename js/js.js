call("//cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js", function(){
    $(window).on('load', function(){
        var $slide2 = $('.bxslider3');
        var $slide2_ul = $('.bxslider ul');
        var n = $slide2_ul.children('li').size();
        var activeClass = 'active-slide';
        var huga =$slide2_ul.bxSlider({
            auto:true,
            infiniteLoop: true,
            touchEnabled:false,
            pager: false,
            maxSlides: 2,
            easing: 'easeOutExpo',
            speed: 500,
            onSliderLoad: function(){
                $slide2.find('.bx-viewport > ul').css({
                    width: n * 100 + 415 + '%'
                });
                $slide2_ul.animate({
                    opacity: 1
                },500);
                $slide2_ul.children('li').eq(0).addClass(activeClass);
            },
            onSlideBefore: function($slideElement, oldIndex, newIndex) {
                $slide2_ul.children('li').removeClass(activeClass).eq(newIndex + 2).addClass(activeClass);
            },
            onSlideAfter: function($slideElement, oldIndex, newIndex) {

            }
        });
    });
});
            