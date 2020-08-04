console.log("加载成功");
//配置当前index.html引入的所有.js文件
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "cart": "cart",

        
    },
    shim: {
		//设置jquery-cookie依赖于jquery开发的
		"jquery-cookie": ["jquery"],
		//抛物线不支持AMD规范
		"parabola": {
			exports: "_"
		}
	}
	
})


require(["cart"], function(cart){
    // cart.show();


})

