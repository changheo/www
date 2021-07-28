  $(document).ready(function () {
    var screenSize = $(window).width();
  	var screenHeight = $(window).height();

  	$("#content").css('margin-top', screenHeight);

  	$('.down').click(function () {
		screenSize = $(window).width();
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