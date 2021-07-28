
$(window).load(function(){
      $('#list_content').addClass('view1');
});


$(document).ready(function(){
    $('.list1').click(function(){
       $('#list_content').addClass('view1');
       $('#list_content').removeClass('view2');
    });



      $('.list2').click(function(){
         $('#list_content').addClass('view2');
         $('#list_content').removeClass('view1');
      });

   
});