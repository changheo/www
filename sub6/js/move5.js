
$(document).ready(function () {

  var h1 = $('#content .con_top li:eq(0)').offset().top + 500;
  var h2 = $('#content .con_bottom dl:eq(0)').offset().top - 500;
  var h3 = $('#content .con_bottom dl:eq(1)').offset().top - 500;
  var h4 = $('#content .con_bottom dl:eq(2)').offset().top - 500;
  var h5 = $('#content .con_bottom dl:eq(3)').offset().top - 500;
  

  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    //스크롤top의 좌표를 담는다
    //스크롤의 거리의 범위를 처리
    if (scroll >= 500 && scroll < h1) {
      $('#content .con_top li:eq(0)').addClass('boxMove2');
      $('#content .con_top li:eq(1)').addClass('boxMove2');
      $('#content .con_top li:eq(2)').addClass('boxMove2');
      $('#content .con_top li:eq(3)').addClass('boxMove2');
      //첫번째 내용 콘텐츠 애니메이
    } else if (scroll >= h1 && scroll < h2) {
      $('#content .con_bottom li:eq(0)').addClass('boxMove');
    } else if (scroll >= h2 && scroll < h3) {
      $('#content .con_bottom li:eq(1)').addClass('boxMove');
    } else if (scroll >= h3 && scroll < h4) {
      $('#content .con_bottom li:eq(2)').addClass('boxMove');
    } else if (scroll >= h4) {
      $('#content .con_bottom li:eq(3)').addClass('boxMove');
    }
  });
});