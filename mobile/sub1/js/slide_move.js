    $(document).ready(function () {

       //한페이에서 메뉴 클릭시 원하는 위치로 스무스하게 이동시키는 코드 
       $('.slide_menu a').click(function (e) {
          e.preventDefault();

          var value = 0;

          if ($(this).hasClass('link1')) { //첫번째 메뉴 버튼을 클릭하면
             value = $('.slide_con:eq(0)').offset().top - 100; // 해당 요소의 상단(top)까지의 거리 
          } else if ($(this).hasClass('link2')) { //두번째 메뉴 버튼을 클릭하면
             value = $('.slide_con:eq(1)').offset().top - 200;
          } else if ($(this).hasClass('link3')) {
             value = $('.slide_con:eq(2)').offset().top - 80;
          }

          $("html,body").stop().animate({
             "scrollTop": value
          }, 1000);
       });
    });



    $(document).ready(function () {

      $('.slide_menu li:eq(0)').find('a').addClass('spy');
      //첫번째 서브메뉴 활성화

      $('.content_area div:eq(0)').show();
      
      //첫번째 내용글 애니메이션 처리
      var smh = $('.visual').height() + 500;
      var h1 = $('.content_area div:eq(1)').offset().top - 500;
      var h2 = $('.content_area div:eq(2)').offset().top - 300;
      var h3 = $('.content_area div:eq(3)').offset().top - 300;

      //스크롤의 좌표가 변하면.. 스크롤 이벤트
      $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다

        //  $('.text').text(scroll);
         //스크롤 좌표의 값을 찍는다.

         //sticky menu 처리
         if (scroll > smh) {
            $('.slide_menu').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
         } else {
            $('.slide_menu').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
         }



         $('.slide_menu li').find('a').removeClass('spy');
         //모든 서브메뉴 비활성화~ 불꺼!!!


         //스크롤의 거리의 범위를 처리
         if (scroll >= h1 && scroll < h2) {
            $('.slide_menu li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화

         } else if (scroll >= h2 && scroll < h3) {
            $('.slide_menu li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화

         } else if (scroll >= h3) {
           $('.slide_menu li:eq(2)').find('a').addClass('spy');
           //세번째 서브메뉴 활성화

        } 


      });


   });