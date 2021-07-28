// JavaScript Document

$(document).ready(function () {

  var timeonoff; //타이머 처리  홍길동 정보
  var imageCount = 4; //이미지개수
  var cnt = 1; //이미지 순서 1 2 3 4 5 1 2 3 4 5....
  var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

  $('.btn1').css('background', '#fff'); //첫번째 불켜
  $('.btn1').css('width', '30');

  $('.main .link1').fadeIn('slow'); //첫번째 이미지 보인다..

  function moveg() {
    cnt++; //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
    for (var i = 1; i <= imageCount; i++) {
      $('.main .link' + i).hide(); //모든 이미지를 보이지 않게.
    }
    $('.main .link' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..

    for (var i = 1; i <= imageCount; i++) {
      $('.btn' + i).css('background', '#255aa6'); //버튼불다꺼!!
      $('.btn' + i).css('width', '16');
    }
    $('.btn' + cnt).css('background', '#fff'); //자신만 불켜
    $('.btn' + cnt).css('width', '30');
    if (cnt == imageCount) cnt = 0;
  }
  timeonoff = setInterval(moveg, 4000); // 타이머를 동작 1~5이미지를 순서대로 자동 처리


  $('.mbutton').click(function (event) { //각각의 버튼 클릭시
    var $target = $(event.target); //클릭한 버튼 $target
    clearInterval(timeonoff); //타이머 중지     

    for (var i = 1; i <= imageCount; i++) {
      $('.main .link' + i).hide(); //모든 이미지 안보인다.
    }

    if ($target.is('.btn1')) {
      cnt = 1;
    } else if ($target.is('.btn2')) {
      cnt = 2;
    } else if ($target.is('.btn3')) {
      cnt = 3;
    } else if ($target.is('.btn4')) {
      cnt = 4;
    }
    $('.main .link' + cnt).fadeIn('slow'); //자기 자신만 이미지가 보인다

    for (var i = 1; i <= imageCount; i++) {
      $('.btn' + i).css('background', '#255aa6'); //버튼 모두불꺼
      $('.btn' + i).css('width', '16');
    }
    $('.btn' + cnt).css('background', '#fff'); //자신 버튼만 불켜 
    $('.btn' + cnt).css('width', '30');

    if (cnt == imageCount) cnt = 0; //카운트 초기화
    timeonoff = setInterval(moveg, 4000); //타이머의 부활!!!

    
  });


});


