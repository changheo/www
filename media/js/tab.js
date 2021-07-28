// JavaScript Document

$(document).ready(function(){
    
    $('.tab li').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".story").hide(); //모든 탭내용을 안보이게...
          $(".story"+(index+1)).show(); //클릭한 해당 탭내용만 보여라
          $('.tab li').removeClass('current'); // 클릭한 해당 탭메뉴만 활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화
     });
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      //스크롤top의 좌표를 담는다
      var smh = $('.videoBox').height() + $('.about').height() - 300;
     //  $('.text').text(scroll);
      //스크롤 좌표의 값을 찍는다.

      //sticky menu 처리
      if (scroll > smh) {
         $('.tab').addClass('st');
         $('.tab').fadeIn();
         //스크롤의 거리가 350px 이상이면 서브메뉴 고정
         $('header').hide();
      } else {
         $('.tab').removeClass('st');
         $('.tab').hide();

         //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
         $('header').show();
      }



    //   $('.slide_menu li').find('a').removeClass('spy');
    //   //모든 서브메뉴 비활성화~ 불꺼!!!


    //   //스크롤의 거리의 범위를 처리
    //   if (scroll >= h1 && scroll < h2) {
    //      $('.slide_menu li:eq(0)').find('a').addClass('spy');
    //      //첫번째 서브메뉴 활성화
    //      $('.content_area div:eq(1)').addClass('boxMove');
    //      //첫번째 내용 콘텐츠 애니메이

    //   } else if (scroll >= h2 && scroll < h3) {
    //      $('.slide_menu li:eq(1)').find('a').addClass('spy');
    //      //두번째 서브메뉴 활성화

    //      $('.content_area div:eq(2)').addClass('boxMove');
    //   } else if (scroll >= h3) {
    //     $('.slide_menu li:eq(2)').find('a').addClass('spy');
    //     //세번째 서브메뉴 활성화

    //     $('.content_area div:eq(3)').addClass('boxMove');
    //  } 


   });



    
  });

