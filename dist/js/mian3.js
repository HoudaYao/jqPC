console.log("加载成功");
//配置当前index.html引入的所有.js文件
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
        "buy": "buy",
        
	}
	
})


require(["buy"], function(buy){
	// buy.show();

})

