
$(window).load(function () {
  var screenSize = $(window).width();
  var screenHeight = $(window).height();

  function screenW() {
    if (screenSize > 768) {
      // var boxHeight = $(screenHeight).height(); //왼쪽에 있는 박스의 높이(이미지 높이)
      //$(".box2 div:eq(1)").css('height',boxHeight);
      $(".imgbox div").height(screenHeight-195);
    
      $(window).resize(function () {
        $(".imgbox div").height(screenHeight-195);
      });
    } else{
      $(".imgbox div").height(screenHeight-400);
    
      $(window).resize(function () {
        $(".imgbox div").height(screenHeight-400);
      });
    }
  }
  screenW(); //함수호출    

  $(window).resize(function () {
    screenSize = $(window).width();
    screenW(); //함수호출
  });
});