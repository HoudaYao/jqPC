function $ajax({type = "get", url, data, success, error}){
	var xhr = null;
	try{
		xhr = new XMLHttpRequest();
	}catch(error){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if(type == "get" && data){
		url += "?" + queryString(data);
	}

	xhr.open(type, url, true);

	if(type == "get"){
		xhr.send();
	}else{
		//一定要放在send方法之前
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded'); 
		xhr.send(queryString(data));
	}

	//等待响应
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				//当数据下载完成以后如何处理数据的操作是不一定，回调函数
				if(success){
					success(xhr.responseText);
				}
			}else{
				if(error){
					error("Error：" + xhr.status);
				}
			}
			
		}
	}

}



//封装一个将对象拼接成查询字符串格式的数据
function queryString(obj){
	var str = "";
	for(var attr in obj){
		str += attr + "=" + obj[attr] + "&";
	}
	str = str.replace(/&$/, "");
	return str;
}