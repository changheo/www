$(document).ready(function () {
    // $(".menuOpen").toggle(function () {
    //     $(".mainMenu").slideDown('slow');
    // }, function () {
    //     $(".mainMenu").slideUp('fast');
    // });

    var screenSize = $(window).width();

    function screenW() {
        if (screenSize > 1024) {
            $('.iron1').attr('src', 'images/ironman1.jpg');
            $('.iron2').attr('src', 'images/ironman2.jpg');
            $('.iron3').attr('src', 'images/ironman3.jpg');
            $('.cap1').attr('src', 'images/captain1.jpg');
            $('.cap2').attr('src', 'images/captain2.jpg');
            $('.cap3').attr('src', 'images/captain3.jpg');
            $('.movie1').attr('src', 'images/movie1.jpg');
        } else if (screenSize > 640) {
            $('.iron3').attr('src', 'images/ironman4.jpg');
            $('.iron2').attr('src', 'images/ironman5.jpg');
            $('.cap3').attr('src', 'images/captain4.jpg');
            $('.cap2').attr('src', 'images/captain5.jpg');
            $('.movie1').attr('src', 'images/movie6.jpg');
            $('.movie2').attr('src', 'images/movie2.jpg');
            $('.movie3').attr('src', 'images/movie3.jpg');
            $('.movie4').attr('src', 'images/movie4.jpg');
            $('.movie5').attr('src', 'images/movie5.jpg')
        } else {
            $('.iron3').attr('src', 'images/ironman6.jpg');
            $('.cap3').attr('src', 'images/captain6.jpg');
            $('.movie2').attr('src', 'images/movie7.jpg');
            $('.movie3').attr('src', 'images/movie8.jpg');
            $('.movie4').attr('src', 'images/movie9.jpg');
            $('.movie5').attr('src', 'images/movie10.jpg');

        }
    }

    screenW(); //함수호출    

    $(window).resize(function () {
        screenSize = $(window).width();
        screenW(); //함수호출
    });

    // var current = 0;
    // $(window).resize(function () {
    //     var screenSize = $(window).width(); //브라우저의 넓이
    //     if (screenSize > 1024) { //모바일이상
    //         $(".mainMenu").show(); //모바일이상 해상도에선 무조건 보여라!
    //         current = 1; //모바일 이상의 해상도가 되면 1!
    //     }
    //     if (current == 1 && screenSize <= 1024) {
    //         $(".mainMenu").hide();
    //         current = 0; //모바일 해상도일 경우 0!
    //     }
    // });

    $('.topMove').click(function (e) {
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $('html,body').stop().animate({
            'scrollTop': 0
        }, 1000);
    }); //여기까지 공통js => commom js에 놓고 쓰면 됨

    // 네비
    const hamburger = document.querySelector(".menuOpen");
    const navLinks = document.querySelector(".mainMenu");
    const links = document.querySelectorAll(".mainMenu li");

    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
});