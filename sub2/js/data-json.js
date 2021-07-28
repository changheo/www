

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';

    newContent+='<h3>직접 운영</h3>';
    newContent+='<ul>';
    for (var i = 0; i < responseObject.img.length; i++) {
    newContent+='<li>';
    newContent+='<img src="'+ responseObject.img[i].path +'" ' + 'alt="">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.img[i].title +'</dt>';
    newContent+='<dd>'+ responseObject.img[i].content +'</dd>';
    newContent+='</li>';
    }
    newContent+='</ul>';

    newContent+='<h3>대행 운영</h3>';
    newContent+='<ul>';
    for (var i = 0; i < responseObject.img2.length; i++) {
    newContent+='<li>';
    newContent+='<img src="'+ responseObject.img2[i].path2 +'" ' + 'alt="">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.img2[i].title2 +'</dt>';
    newContent+='<dd>'+ responseObject.img2[i].content2 +'</dd>';
    newContent+='</li>';
    }
    newContent+='</ul>';


 
    document.getElementById('operate').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

