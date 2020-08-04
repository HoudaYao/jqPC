<?php 
	header('content-type:text/html;charset="utf-8"');

	//定义了一个统一的返回格式
	$responseData = array("code" => 0, "message" => "");

	// var_dump($_POST);
	$username = $_POST['username'];
	$password = $_POST['password'];
	$repassword = $_POST['repassword'];
	$addTime = $_POST["addTime"];

	//对接受到的数据做一个简单的验证
	if(!$username){
		$responseData["code"] = 1;
		$responseData["message"] = "用户名不能为空";
		echo json_encode($responseData);
		exit;
	}
	if(!$password){
		$responseData["code"] = 2;
		$responseData["message"] = "密码不能为空";
		echo json_encode($responseData);
		exit;
	}
	if($password != $repassword){
		$responseData["code"] = 3;
		$responseData["message"] = "两次输入密码不一致";
		echo json_encode($responseData);
		exit;
	}

	//天龙八部
	$link = mysql_connect("localhost", "root", "123456");
	if(!$link){
		$responseData["code"] = 4;
		$responseData["message"] = "服务器忙";
		echo json_encode($responseData);
		exit;
	}

	mysql_set_charset("utf8");

	mysql_select_db("leshi");

	//判断用户名是否注册过
	$sql = "SELECT * FROM users WHERE username='{$username}'";

	$res = mysql_query($sql);

	//取一条数据
	$row = mysql_fetch_assoc($res);

	if($row){
		$responseData["code"] = 5;
		$responseData["message"] = "用户名重名";
		echo json_encode($responseData);
		exit;
	}


	//注册
	//密码加密
	$str = md5(md5(md5($password)."qianfeng")."qingdao");
	$sql2 = "INSERT INTO users (username,password,addTime) VALUES('{$username}','{$str}',{$addTime})";

	$res = mysql_query($sql2);

	if(!$res){
		$responseData["code"] = 6;
		$responseData["message"] = "用户名注册失败";
		echo json_encode($responseData);
		exit;
	}else{
		$responseData["message"] = "注册成功";
		echo json_encode($responseData);
	}

	mysql_close($link);

 ?>