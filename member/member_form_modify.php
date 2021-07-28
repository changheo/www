<? 
	session_start();
    
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="css/member_form.css">
	
	<script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	
	<script>
	 $(document).ready(function() {
 
 //id 중복검사
 $("#id").keyup(function() {    // id입력 상자에 id값 입력시
    var id = $('#id').val(); //a

    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
            //data => echo "문자열" 이 저장된
             $("#loadtext").html(data);
        }
    });
});
		 
//nick 중복검사		 
$("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});		 


});
	
	
	
	</script>
	<script>
   

  
   function check_input()
   {

      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
		   // modify.php 로 변수 전송
   }

   function reset_form()
   {
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.pass.focus();

      return;
   }
</script>
<?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>

</head>
<body>
   <header>
       <h1><a class="logo" href="../index.html">코레일유통</a></h1>
   </header>
	 
	<article id="content">  
	  
	  <h2>회원정보수정</h2>
	  <form  name="member_form" method="post" action="modify.php"> 
		
     <table>
      <caption class="hidden">회원가입</caption>
      
      <span class="all">* 모든 항목은 필수 입력 사항입니다.</span>
     	<tr>
     		<th class="hidden" scope="col"><label for="id">아이디</label></th>
     		<td class="firstId">
                    
             <?= $row['id'] ?>
    
            
        </td>
     	</tr>
     	<tr>
     		<th class="hidden" scope="col"><label for="pass">비밀번호</label></th>
     		<td>
     			 <input placeholder="비밀번호" type="password" name="pass" id="pass" required>
     		</td>
     	</tr>
     	<tr>
     		<th class="hidden" scope="col"><label for="pass_confirm">비밀번호확인</label></th>
     		<td>
     			<input placeholder="비밀번호확인" type="password" name="pass_confirm" id="pass_confirm"  required>
     		</td>
     	</tr>
     	<tr>
     		<th class="hidden" scope="col"><label for="name">이름</label></th>
     		<td>
     			<input placeholder="이름" type="text" name="name" id="name" value="<?= $row['name'] ?>" required> 
     		</td>
     	</tr>
     	<tr>
     		<th class="hidden" scope="col"><label for="nick">닉네임</label></th>
     		<td>
     			 <input placeholder="닉네임" type="text" name="nick" id="nick" value="<?= $row['nick'] ?>" required>
			     <span id="loadtext2"></span>
     		</td>
     	</tr>
     	<tr>
     		<th class="hidden" scope="col">휴대폰</th>
     		<td>
     			<label class="hidden" for="hp1">전화번호앞3자리</label>
     			<select class="hp" name="hp1" id="hp1" value="<?= $hp1 ?>"> 
                    <option value='010'>010</option>
                    <option value='011'>011</option>
                    <option value='016'>016</option>
                    <option value='017'>017</option>
                    <option value='018'>018</option>
                    <option value='019'>019</option>
          </select>  - 
          <label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" value="<?= $hp2 ?>" required> - <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" value="<?= $hp3 ?>" required>
     			
     		</td>
     	</tr>
     	<tr>
     		<th class="hidden" scope="col">이메일</th>
     		<td>
     		  <label class="hidden" for="email1">이메일아이디</label>
     			<input placeholder="이메일" type="text" id="email1" name="email1" value="<?= $email1 ?>" required> @ 
     			<label class="hidden" for="email2">이메일주소</label>
     			<input type="text" name="email2" id="email2" value="<?= $email2 ?>" required>
     		</td>
     	</tr>
     	<tr>
     		<td colspan="2">
     			<a href="#" onclick="check_input()">수정하기</a>&nbsp;&nbsp;
				<a href="#" onclick="reset_form()">다시쓰기</a>
     		</td>
     	</tr>
     </table>

	 </form>
	  
	</article>
	 <? include "../common/subfoot.html" ?>
</body>
</html>

