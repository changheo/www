
$(document).ready(function () {

  var h1 = $('#content .promotion dt:eq(0)').offset().top + 200;
  var h2 = $('#content .promotion dt:eq(1)').offset().top + 200;
  var h3 = $('#content .promotion dt:eq(2)').offset().top + 100;
  

  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    //스크롤top의 좌표를 담는다
    //스크롤의 거리의 범위를 처리
    if (scroll >= 1200 && scroll < h1) {
      $('#content .promotion dd:eq(0)').addClass('boxMove');
      $('#content .promotion dd:eq(1)').addClass('boxMove');
      $('#content .promotion dd:eq(2)').addClass('boxMove');
      $('#content .promotion dd:eq(3)').addClass('boxMove');
      //첫번째 내용 콘텐츠 애니메이
    } else if (scroll >= h1 && scroll < h2) {
      $('#content .promotion dd:eq(4)').addClass('boxMove');
      $('#content .promotion dd:eq(5)').addClass('boxMove');
      $('#content .promotion dd:eq(6)').addClass('boxMove');
      $('#content .promotion dd:eq(7)').addClass('boxMove');
    } else if (scroll >= h2 && scroll < h3) {
      $('#content .promotion dd:eq(8)').addClass('boxMove');
      $('#content .promotion dd:eq(9)').addClass('boxMove');
      $('#content .promotion dd:eq(10)').addClass('boxMove');
      $('#content .promotion dd:eq(11)').addClass('boxMove');
    } else if (scroll >= h3) {
      $('#content .promotion dd:eq(12)').addClass('boxMove');
      $('#content .promotion dd:eq(13)').addClass('boxMove');
      $('#content .promotion dd:eq(14)').addClass('boxMove');
      $('#content .promotion dd:eq(15)').addClass('boxMove');
    }
  });
});