$(document).ready(function(){
       var cnt2=1;
       var left2,left3,left4;		
       $('.business li:eq(0)').addClass('acco_box');

       
       $('.business ul li span').mouseenter(function(event){  //각각의 투명버튼에 마우스를 올리면
           var $target=$(event.target);  // var $target=$(this);

            
            
  
           if($target.is('.buttonMenu01')){  //첫번째 투병버튼에 마우스를 올렸냐??
               left2=550; left3=700; left4=850; cnt2=1; 
               $('.business li').removeClass('acco_box');
               $('.business li:eq(0)').addClass('acco_box');
           }else if($target.is('.buttonMenu02')){ 
               left2=150; left3=700; left4=850; cnt2=2; 
               $('.business li').removeClass('acco_box');
               $('.business li:eq(1)').addClass('acco_box');
           }else if($target.is('.buttonMenu03')){
               left2=150; left3=300; left4=850; cnt2=3; 
               $('.business li').removeClass('acco_box');
               $('.business li:eq(2)').addClass('acco_box');
           }else if($target.is('.buttonMenu04')){
               left2=150; left3=300; left4=450; cnt2=0; 
               $('.business li').removeClass('acco_box');
               $('.business li:eq(3)').addClass('acco_box');
           }
           $('.business .acco2').animate({left:left2},450).clearQueue();
           $('.business .acco3').animate({left:left3},450).clearQueue();
           $('.business .acco4').animate({left:left4},450).clearQueue();
     
         });
      });