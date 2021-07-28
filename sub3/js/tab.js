// JavaScript Document

$(document).ready(function(){
    $('.tab_con:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tab_con:eq(0)').addClass('current2'); // 첫번째 탭 내용만 열어라
    
    $('.tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".tab_con").hide(); //모든 탭내용을 안보이게...
          $(".tab_con:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').removeClass('current2'); // 클릭한 해당 탭메뉴만 활성화
          $(this).addClass('current2'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });

