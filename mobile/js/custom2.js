$(document).ready(function () {

    var startX, endX;
    var position=0;


    $('.business ul').on('touchstart mousedown', function (e) {

        e.preventDefault();

        startX = e.pageX || e.originalEvent.touches[0].pageX;
    });

    $('.business ul').on('touchend mouseup', function (e) {

        e.preventDefault();

        endX = e.pageX || e.originalEvent.changedTouches[0].pageX;

        if(startX<endX){
            position+=100;
            if(position==100){position=0}
            
            $('.business ul').css('left',position+'%');
        }else{
            position-=100;
            if(position==-400){position=-300}
            $('.business ul').css('left',position+'%');
        }

    });


});