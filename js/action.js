/**
 * Created by LePhan on 4/4/15.
 */
$(function () {
    $('.center').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            }
        ]
    });


    if ($(window).width() >= 992) {
        var myheight = $(window).height();
        var fixedsize = myheight - (51 + 130 + 54);
        $('.contents').height(fixedsize);
        var itemheight = fixedsize - 79;
        $('.contents .customers-reply').height(itemheight);

        var h_info = fixedsize * (2 / 3) - 8;
        var h_news = fixedsize * (1 / 3);
        $('.info').height(h_info);
        $('.news').height(h_news);
        $('div.tab-pane').height(h_info - 48);
        $('.news .parent').height(h_news - 18);
    }else{
        $('.contents').height('auto');
        $('.contents .customers-reply').height('auto');
        $('.info').height('auto');
        $('.news').height('auto');
        $('div.tab-pane').height('auto');
        $('.news .parent').height('auto');
    }


    $(window).resize(function () {
        if ($(window).width() >= 992) {
            var myheight = $(window).height();
            var fixedsize = myheight - (51 + 130 + 54);
            $('.contents').height(fixedsize);
            var itemheight = fixedsize - 79;
            $('.contents .customers-reply').height(itemheight);

            var h_info = fixedsize * (2 / 3) - 8;
            var h_news = fixedsize * (1 / 3);
            $('.info').height(h_info);
            $('.news').height(h_news);
            $('div.tab-pane').height(h_info - 48);
            $('.news .parent').height(h_news - 18);
        }else{
            $('.contents').height('auto');
            $('.contents .customers-reply').height('auto');
            $('.info').height('auto');
            $('.news').height('auto');
            $('div.tab-pane').height('auto');
            $('.news .parent').height('auto');
        }
    });
    //var heightinfo = fixedsize - $('.news').height() - 8;
//    $('.info').height(heightinfo);

    var pageflip = new RocketPageFlip('.pageflip', {
        current: 0,
        prevText: "",
        nextText: ""
//        prevText: "<img src='images/thin_left_arrow_333.png'>",
//        nextText: "<img src='images/thin_right_arrow_333.png'>"
    });
});