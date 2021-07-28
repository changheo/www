
$(document).ready(function () {

  var h1 = $('#content .content_area div:eq(0)').offset().top + 200;
  var h2 = $('#content .tripin_bottom li:eq(0)').offset().top + 200;
  var h3 = $('#content .tripin_bottom li:eq(1)').offset().top;
  var h4 = $('#content .tripin_bottom li:eq(2)').offset().top;

  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    //스크롤top의 좌표를 담는다
    //스크롤의 거리의 범위를 처리
    if (scroll >= 400 && scroll < h1) {
      $('#content .content_area div:eq(0)').addClass('boxMove');
      //첫번째 내용 콘텐츠 애니메이
    } else if (scroll >= h1 && scroll < h2) {
      $('#content .tripin_bottom li:eq(0)').addClass('boxMove');
    } else if (scroll >= h2 && scroll < h3) {
      $('#content .tripin_bottom li:eq(1)').addClass('boxMove');
    }else if (scroll >= h3) {
      $('#content .tripin_bottom li:eq(2)').addClass('boxMove');
    } 


  });
});