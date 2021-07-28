  $(document).ready(function () {
    var screenSize = $(window).width();
    var screenHeight = $(window).height();
    var current = false;

    $("#content").css('margin-top', screenHeight);

    if (screenSize > 768) {
      $("#videoBG").show();
      $("#imgBG").hide();
    }
    if (screenSize <= 768) {
      $("#videoBG").hide();
      $("#videoBG").attr('src', '');
      $("#imgBG").show();
    }

    $(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width();
      screenHeight = $(window).height();

      $("#content").css('margin-top', screenHeight);

      if (screenSize > 768 && current == false) {

        $("#videoBG").show();
        $("#videoBG").attr('src', 'images/aaa.mp4');
        $("#imgBG").hide();
        current = true;
      }
      if (screenSize <= 768) {
        $("#videoBG").hide();
        $("#videoBG").attr('src', '');
        $("#imgBG").show();
        current = false;
      }
    });


    $('.down').click(function () {
      screenHeight = $(window).height();

      if (screenSize > 1024) {
        $('html,body').animate({
          'scrollTop': screenHeight - 95
        }, 1000);
      } else if (screenSize > 640) {
        $('html,body').animate({
          'scrollTop': screenHeight - 80
        }, 1000);
      } else {
        $('html,body').animate({
          'scrollTop': screenHeight - 60
        }, 1000);
      }
    });
  });

  $(window).load(function(){
    var screenSize = $(window).width();

    if(screenSize > 640){
      var boxHeight = $('.character li:eq(2)').height();
      var boxHeight1 = $('.character li:eq(6)').height();

        $(".character li:eq(3)").height(boxHeight);
        $(".character li:eq(7)").height(boxHeight1);
        $(".character ul li span").css('display','block');
    }else if(screenSize <= 640){
      $(".character ul li span").css('display','none');
    }
  });




    $(window).resize(function () {
      var screenSize = $(window).width();
  
      if(screenSize > 640){
        var boxHeight = $('.character li:eq(2)').height();
        var boxHeight1 = $('.character li:eq(6)').height();
  
        $(".character li:eq(3)").height(boxHeight);
        $(".character li:eq(7)").height(boxHeight1);
        $(".character ul li span").css('display','block');
      }else if(screenSize <= 640){
        $(".character li:eq(3)").css('height','auto');
        $(".character li:eq(7)").css('height','auto');
        $(".character ul li span").css('display','none');
      }
    });

    $(document).ready(function(){
      var screenSize = $(window).width();

      $(window).on('scroll',function(){
         var scroll = $(window).scrollTop();

      if(scroll>3500){
          $('.drop_imgwrap').css('top',0);
      }
      else{
          $('.drop_imgwrap').css('top',-650);
      }
    })});
