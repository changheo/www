<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>
<body>

<article id="content">
       <div class="login_top">
           <h1><a href="../index.html" class="logo">코레일유통</a></h1>
           <h2>로그인</h2>
       </div>
       <form name="member_form" method="post" action="login.php">
           <div id="login_form">
                <div class="id_pw_input">
                    <ul>
                        <li>
                        <label for="id" class="hidden">ID</label>
                        <input type="text" name="id" id="id" class="login_input" placeholder="아이디를 입력해주세요.">
                        </li>
                        <li>
                        <label for="pass" class="hidden">PASSWORD</label>
                        <input type="password" name="pass" id="pass" class="login_input" placeholder="비밀번호를 입력해주세요.">
                        </li>
                    </ul>						
                </div>
                <div class="login_button">
                <ul>
                    <li><i class="fas fa-lock"></i>&nbsp;보안접속</li>
                    <li>
                        <span><a href="id_find.php">아이디 찾기</a></span>
                        <span><a href="pw_find.php">비밀번호 찾기</a></span>
                    </li>
                </ul>
                    <input type="submit" value="login">
                    <a href="../index.html">취소</a>
                </div>
                <div class="join_button">
                    <p>아직 코레일유통 회원이 아니신가요?<br>회원가입을 하세요!</p>
                    <a href="../member/member_check.html">회원가입</a>
                </div>
           </div>
       </form>
   </article>
    

</body>
</html>