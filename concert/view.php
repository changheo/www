<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	
	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	for ($i=0; $i<3; $i++)  //첨부된 이미지의 정보를 빼내는 반복문(너비/높이/타입)
	{
		if ($image_copied[$i]) //첨부된 이미지가 있냐?? 0 1 2   $image_copied[0]='2021_07_22_11_00_35_0.jpg'
		{ 
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			        //해당 이미지의 정보(너비/높이/타입)
					//$imageinfo[0]=이미지의 너비
					//$imageinfo[1]=이미지의 높이
					//$imageinfo[2]=이미지의 타입(종류)
			$image_width[$i] = $imageinfo[0];
			$image_height[$i] = $imageinfo[1];
			$image_type[$i]  = $imageinfo[2];

			if ($image_width[$i] > 785)  // 게시판의 총 너비
				$image_width[$i] = 785;
		}
		else    //첨부된 이미지가 없냐??
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>코레일유통:보도자료</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub4common.css">
    <link rel="stylesheet" href="./css/view.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../common/js/prefixfree.min.js"></script>

    <script>
    function del(href) 
    {if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")){document.location.href = href; //'delete.php?num=1'
    }}
    function check_input(){if(!document.ripple_form.ripple_content.value){
         alert("내용을 입력하세요!");    
         document.ripple_form.ripple_content.focus();
         return;}
      document.ripple_form.submit();}
</script>

    <!--[if IE 9]>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->



</head>

<body>


    <div class="wrap">
        <!-- 헤더영역 -->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="../sub4/common/images/visual.jpg" alt="">
        </div>

        <div class="sub_menu">
            <h3>홍보센터</h3>
            <ul>
                <li><a href="../greet/list.php">공지사항</a></li>
                <li><a href="sub4_2.html">코레일유통 포토</a></li>
                <li><a href="sub4_3.html">동반성장</a></li>
                <li class="current"><a href="list.php">보도자료</a></li>

            </ul>
        </div>

        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    홈 &gt; 회사소개 &gt; <strong>보도자료</strong>
                </div>
                <h2>보도자료</h2>
            </div>
            <div class="content_area">
                
            <div id="view_title">
			<div id="view_title1"><?= $item_subject ?></div><div id="view_title2"><i class="far fa-user"></i>&nbsp;&nbsp;<span class="nick2"><?= $item_nick ?></span> <?= $item_date ?>&nbsp;&nbsp;<i class="far fa-eye"></i>&nbsp;&nbsp;<?= $item_hit ?></div>	
		</div>

		<div id="view_content">

<?
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i])  //첨부된 이미지가 있으면
		{
			$img_name = $image_copied[$i];  //'2021_07_22_11_00_35_0.jpg'
			$img_name = "./data/".$img_name;  // './data/2021_07_22_11_00_35_0.jpg'
			$img_width = $image_width[$i];
			
			echo "<img src='$img_name' width='$img_width' alt=''>"."<br><br>";
		}
	}
?>
			<?= $item_content ?>
		</div>

		<div id="ripple">
<?
        $sql = "select * from free_ripple where parent=$item_num";
        $result2 = mysql_query($sql, $connect); 
        $num_ripple = mysql_num_rows($result2);
?>
<p><i class="far fa-comment-dots"></i>&nbsp;&nbsp;댓글
<?            
if ($num_ripple) 
 echo " <span>[$num_ripple]</span>";        
?>          
 </p>            
<?
       $sql = "select * from free_ripple where parent='$item_num'";
       $ripple_result = mysql_query($sql);
      while ($row_ripple = mysql_fetch_array($ripple_result)){
         $ripple_num     = $row_ripple[num];
         $ripple_id      = $row_ripple[id];
         $ripple_nick    = $row_ripple[nick];
         $ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
         $ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
         $ripple_date    = $row_ripple[regist_day];
?>
         <div class="ripple_writer_title">
         <ul>
         <li class="writer_title1"><?=$ripple_nick?></li>
         <li class="writer_title3"><?=$ripple_date?>
         <span>
<? 
if($userid==$ripple_id || $userid=="master" || $userlevel==1){
echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num'> &nbsp;삭제하기</a>";
}
 ?>
</span>
         </li>
         <li class="ripple_content"><?=$ripple_content?></li>

         </ul>
         </div>
         <div class="hor_line_ripple"></div>
<?
}
?>         
<!-- 리플작성하는 부분 시작 -->
         <form  name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>">  
         <div id="ripple_box">
                       <label for="ripple_content" class="hidden">댓글내용</label>
                       <textarea rows="5" cols="65" id="ripple_content" name="ripple_content" placeholder="댓글을 입력해주세요."></textarea>
                       <a href="#q" onclick="check_input()">댓글등록</a>
                    </div>
         </form>
      </div> <!-- end of ripple -->

		<div id="view_button">
				<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
<? 
	if($userid==$item_id || $userid=="master" || $userlevel==1 )
	{
?>
				<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
				<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a>&nbsp;
<?
	}
?>
<? 
	if($userid)
	{
?>
				<a href="write_form.php?table=<?=$table?>">글쓰기</a>
<?
	}
?>
		</div>



            </div>
        </article>


        <!-- 푸터영역 -->
        <? include "../common/sub_foot.html" ?>

    </div>
        <!-- JQuery -->
        <script src="../common/js/jquery-1.12.4.min.js"></script>
        <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
        <script src="../common/js/fullnav.js"></script>
</body>

</html>