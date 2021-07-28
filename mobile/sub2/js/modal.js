$(document).ready(function(){ 
    $('.operate a').each(function (index) {  // index=> 0 1 2
    $(this).addClass('btn');
         $('.modal_inner a').addClass('close'); 
         $('.btn, .close').click(function (e) { e.preventDefault() }); //링크로 강제이동 차단      
         $(this).click(function () {   //각각의 a를 클릭하면 
             $('.content_area #modal_box').show(); //백그라운드 깔아주는거
             $('.modal_inner div:eq(' + index + ')').fadeIn('fast');
             $('#headerArea').hide();
         });
             $('.content_area #modal_box, .close').click(function () { // 상세창 바깥영역을 클릭하면 
             $('.content_area #modal_box').hide();  // 바깥영역 안보이게
             $('.modal_inner div:eq(' + index + ')').hide(); // 상세창 안보이게
             $('#headerArea').fadeIn('fast');
         });              
     });
});