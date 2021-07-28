$(document).ready(function () {
    var cnt = 1;
    var imageCount = 20;
    var position = 1200;
    // $('.gallery .gallery_mini ul').before( $('.gallery .gallery_mini ul').clone());
    

    // 이미지 리스트 클릭시
    $('.gallery_big').css('background', 'url(/sub4/images/content2/img3.jpg)');
    $('.gallery_big').show();
    $('.gallery li:eq(0)').addClass('select');


    $('.gallery li a').click(function (e) {
        e.preventDefault();

        

        ind = $(this).index('.gallery li a');


        $('.gallery_big').css('background', 'url(/sub4/images/content2/img' + (ind + 1) + '.jpg)');
        $('.gallery_big').show();

        

        $('.gallery li').removeClass('select');
        $('.gallery li:eq(' + ind + ')').addClass('select');
        



        cnt = ind + 1;
    });


    // 좌 우 버튼
    $('.btn').click(function () {


        if ($(this).is('.btnRight')) {
            if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
            if (cnt == imageCount + 1) cnt = 1;


            $('.gallery_big').css('background', 'url(/sub4/images/content2/img' + (cnt+1) + '.jpg)');
            $('.gallery_big').show();
            $('.gallery li').removeClass('select');
            $('.gallery li:eq(' + cnt + ')').addClass('select');
            cnt++; 

            if(cnt>10){
            $('.gallery ul').css('left', -1200);
            }else if(cnt<=10){
            $('.gallery ul').css('left', 0);
            }


            position-=250;
            if(position<=-2200){
                position=250;
            }
            //카운트 1씩증가

        } else if ($(this).is('.btnLeft')) {
            if (cnt == 1) cnt = imageCount + 1;
            if (cnt == 0) cnt = imageCount;
            
            $('.gallery_big').css('background', 'url(/sub4/images/content2/img' + (cnt - 1) + '.jpg)');
            $('.gallery_big').show();
            $('.gallery li').removeClass('select');
            $('.gallery li:eq(' + (cnt - 2) + ')').addClass('select');
            cnt--;

            if(cnt>10){
            $('.gallery ul').css('left', -1200);
            }else if(cnt<=10){
            $('.gallery ul').css('left', 0);
            }

            position+=250;
            if(position>=250){
                position=-2200;
            }


            
            


        }
    });
});
