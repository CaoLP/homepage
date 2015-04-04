/**
 * Created by LePhan on 4/4/15.
 */
$(function(){
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



    var myheight = $(window).height();

    var fullw = 0;

    $('.news .list-item').each(function(){
        fullw+= $(this).width() + 15;
    });
    $('.news .list').width(fullw);

    var fixedsize = myheight - (51 + 130 + 64);
    $('.contents').height(fixedsize);
    var itemheight = fixedsize - 79;
    $('.contents .customers-reply').height(itemheight);
    var heightinfo = fixedsize - $('.news').height() - 8;
    $('.info').height(heightinfo);

    var pageflip = new RocketPageFlip('.pageflip', {
        current: 0,
        prevText: "",
        nextText: ""
//        prevText: "<img src='images/thin_left_arrow_333.png'>",
//        nextText: "<img src='images/thin_right_arrow_333.png'>"
    });
});