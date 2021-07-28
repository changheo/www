// gnb
$(document).ready(function () {

    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
        function () {
            $('ul.dropdownmenu li.menu ul').fadeIn('fast', function () {
                $(this).stop();
            }); //모든 서브를 다 열어라
            $('#headerArea').animate({
                height: 330
            }, 'fast').clearQueue();
        },
        function () {
            $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
            $('#headerArea').animate({
                height: 192
            }, 'fast').clearQueue();
        });

    //1depth 효과
    $('ul.dropdownmenu li.menu').hover(
        function () {
            $('.depth1', this).css('color', '#255aa6');
        },
        function () {
            $('.depth1', this).css('color', '#333');
        });

    //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({
            height: 330
        }, 'fast').clearQueue();
    });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({
            height: 192
        }, 'normal').clearQueue();
    });
});

// 상단이동 코드

$(document).ready(function () {

    $('.topMove').hide(); //top버튼 보이지마~~~

    $(window).on('scroll', function () { // 스크롤의 위치가 바뀌면 발생하는 이벤트
        var scroll = $(window).scrollTop(); //스크롤의 상단 부터의 거리

        //   $('.text').text(scroll);  // 스크롤의 거리를 출력

        if (scroll > 500) { //스트롤 top의 거리가 500px 보다 커지면
            $('.topMove').fadeIn('slow'); //top메뉴가 보인다
        } else {
            $('.topMove').fadeOut('fast'); //top메뉴가 안보인다
        }
    });

    // top메뉴를 클릭하면 상단으로 이동시킨다 
    $('.topMove').click(function (e) {
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000); // 스크롤의 위치를 이동시킨다
    });


});



$(document).ready(function () {
    $('.linksite .arrow').toggle(function () {
        $('.linksite .aList').show();
        $('.linksite .arrow').css('color', '#255aa6').css('font-weight', '700');
        $('.linksite .arrow span').html('<i class="fas fa-chevron-down"></i>');
    }, function () {
        $('.linksite .aList').hide();
        $('.linksite .arrow').css('color', '#333').css('font-weight', '400');
        $('.linksite .arrow span').html('<i class="fas fa-chevron-up"></i>');
    });


    //tab키 처리
    $('.linksite .arrow').bind('focus', function () {
        $('.linksite .aList').show();
    });
    $('.linksite .aList li:last').find('a').bind('blur', function () {
        $('.linksite .aList').hide();
    });
});