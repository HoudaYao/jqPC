
         $(function(){
			sc_num();
			sc_msg();
		    $.ajax({
			   url: "data/cart.json",
			//    dataType: "json",
			   success: function(arr){
				  
					for(var i = 0; i < arr.length; i++){
						var node = $(`<li class = 'goods_item'>
                        <div class = 'goods_pic'>
                            <a href=""><img src="${arr[i].img}" alt=""></a>
                        </div>
                        <div class = 'goods_title clearfn'>
                            <a>Y55C漫威版</a>
                        </div>
                        <div class="goods_price">
                            <em>￥1990.00</em>
                        </div>
                        <div class="goods_icon">
                            <p>
                                <i class="iconfont" style="color: red;">&#xe504;</i>
                                <i class="iconfont" style="color: red;">&#xe504;</i>
                                <i class="iconfont" style="color: red;">&#xe504;</i>
                                <i class="iconfont">&#xe504;</i>
                                <i class="iconfont">&#xe504;</i>
                            </p>
                            <div class="evaluate">
                                <a>3600条评价</a>
                            </div>
                        </div>
                        <div class = 'sc'>
                            <div class = 'sc_btn'>
                                <a href="" id="${arr[i].id}" class="go">立即购买</a>
                            </div>
                        </div> 
                 </li>`)
						node.appendTo(".goods_box ul");
					}
					
			   },
			   error: function(msg){
				   console.log(msg);
			   }
		   })
            // 2.加入购物车，利用cookie
            // JSON.stringify()功能:将json格式的字符串转成对应的数据结构。
            $(".goods_box ul").on("click", ".sc_btn", function(){
			   //加入购物车
			   var id = this.id;

			   //1、判断是否第一次添加
			   var first = $.cookie("goods") == null ? true : false;
			   if(first){
				   var arr = [{id: id, num: 1}];
				   $.cookie("goods", JSON.stringify(arr), {
					   expires: 7
				   })
			   }else{
					//2、判断之前是否添加过
					var cookieStr = $.cookie("goods");
					
					var cookieArr = JSON.parse(cookieStr);
					var same = false; //假设不存在
					for(var i = 0; i < cookieArr.length; i++){
						//存在
						if(cookieArr[i].id == id){
							same = true;
							cookieArr[i].num++;
							break;
						}
					}
					//3、判断不存在
					if(!same){
						//新增记录
						var obj = {id: id, num: 1};
						cookieArr.push(obj);
					}

					//将处理完的数据存入cookie
					$.cookie("goods", JSON.stringify(cookieArr), {
						expires: 7
					})

			   }
			   sc_num();
			   sc_msg();

               ballMove(this);
		   })


             //3. 封装一个计算商品总数的函数
             function sc_num(){
				var cookieStr = $.cookie("goods");
				if(cookieStr){
					var cookieArr = JSON.parse(cookieStr);
					var sum = 0;
					for(var i = 0; i < cookieArr.length; i++){
						sum += cookieArr[i].num;
					}	

					$(".sc_right .sc_num").html(sum);
				}else{
					$(".sc_right .sc_num").html(0);
				}
		   }
            // 4.给右边菜单移入移出

            $(".sc_right").mouseenter(function(){
				$(this).stop().animate({
					right: 0
				}, 500);
		   })
		   $(".sc_right").mouseleave(function(){
				$(this).stop().animate({
					right: -800
				}, 500);
			})
            
            // 5.加载购物车中的商品
            /*
                cookie里，只有商品id和数量
                商品的信息，在数据源里
            */
            function sc_msg(){

// $(".sc_right ul").html("");

            $(".sc_right ul").empty(); //清空该节点下的所有子节点
            $.ajax({
                url: "data/cart.json",
                success: function(arr){
                    //arr 所有商品的数据
                    var cookieStr = $.cookie("goods");
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr);
                        var newArr = [];

                        for(var i = 0; i < arr.length; i++){
                            for(var j = 0; j < cookieArr.length; j++){
                                if(arr[i].id == cookieArr[j].id){
                                    arr[i].num = cookieArr[j].num;
                                    newArr.push(arr[i]);
                                    break;
                                }
                            }
                        }

            // console.log(newArr);

            //通过循环创建节点添加到页面上
            for(var i = 0; i < newArr.length; i++){
                var node = $(`<li id = "${newArr[i].id}">
                <div class = "sc_goodsCheck">
                    <input type="checkbox">
                </div>
                <div class = 'sc_goodsPic'>
                    <img src="${newArr[i].img}" alt="">
                </div>
                <div class = 'sc_goodsTitle'>
                    <div class="sc_goodsMain">
                        <div class ="type">Y55C漫威版</div>
                        <p>全网通 8GB+128GB 麒麟990 4000万超感光徕卡三摄（亮黑色）</p>
                        <aside>
                            <i class="iconfont" style="color: red;">&#xe504;</i>
                            <i class="iconfont" style="color: red;">&#xe504;</i>
                            <i class="iconfont" style="color: red;">&#xe504;</i>
                            <i class="iconfont">&#xe504;</i>
                            <i class="iconfont">&#xe504;</i>
                        </aside>
                        <em>￥1999.00</em>
                    </div>
                    
                    <div class = 'sc_goodsNum'>
                        <div class="sc_goodsAdd clearfn ">
                            <button>+</button>
                            <strong>1</strong>
                            <button>-</button>
                        </div>
                        <div class="sc_goodsBtn clearfn ">
                            <div class = 'delete_goodsBtn'>删除</div>
                            <div class = 'sc_goodsBtn'>购买</div>
                        </div>
                        <span>商品数量：${newArr[i].num}</span>
                    </div>
                </div>
            </li>`);
                node.appendTo(".sc_right ul");
            }


                }
            },	
            error: function(msg){
                console.log(msg);
            }
        })
        }


            // 7.特效-抛物线
            function ballMove(oBtn){
               
                $("#ball").css({
                    display: "block",
                    left: $(oBtn).offset().left,
                    top: $(oBtn).offset().top
                })

                //计算抛物线偏移的位置
                var offsetX = $(".sc_right .sc_pic").offset().left - $("#ball").offset().left;
                var offsetY = $(".sc_right .sc_pic").offset().top - $("#ball").offset().top;


                //声明抛物线对象
                var bool = new Parabola({
                    el: "#ball",
                    offset: [offsetX, offsetY],
                    duration: 500,
                    curvature: 0.001,
                    callback: function(){
                        $("#ball").hide();
                    },
                    autostart: true
                })
            }


         // 8.清空购物车
        $("#clearBtn").click(function(){
                //1、清楚本地cookie数据
                $.cookie("goods", null);
                //2、将页面上的数据清空
                sc_num();
                sc_msg();
        })

        //9.删除按钮(点击事件)
        $(".sc_right ul").on("click",".delete_goodsBtn",function(){
            //要清除cookie中的值，要清除购物车节点//closest找到符合的父节点
            var id = $(this).closest("li").remove().attr("id");//节点

            var cookieArr = JSON.parse($.cookie("goods"));//数据库
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].id==id){
                    cookieArr.splice(i,1);
                    break;
                }
            }

            // 图标显示的数字和购物车的数量相同
            if(!cookieArr.length){
                $.cookie("goods",null);
            }else{
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })

            }
            $(this).closest("li").remove();
            sc_num();
        }) 

 //给购物车内的删除按钮添加点击事件
 $(".sc_right ul").on("click", ".delete_goodsBtn", function(){
    //清空购物车的数据  1、清空cookie中的这个值  2、清空页面的节点
    var id = $(this).closest("li").remove().attr("id");
    // alert(id);
    var cookieArr = JSON.parse($.cookie("goods"));
    for(var i = 0; i < cookieArr.length; i++){
        if(cookieArr[i].id == id){
            cookieArr.splice(i, 1);
            break;
        }
    }
    //判断数组是否为空
    if(!cookieArr.length){
        $.cookie("goods", null);
    }else{
        $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
        })
    }

    //更新购物车商品数量
    sc_num();

})



        //10.+ - 加减商品，点击事件
        $(".sc_right ul").on("click",".sc_goodsAdd button",function(){
            var id = $(this).closest("li").attr("id");

            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i= 0;i<cookieArr.length;i++){
                if(cookieArr[i].id == id){
                    // 判断是+还是-
                    if(this.innerHTML== "+"){
                        cookieArr[i].num++;
                    }else{
                        cookieArr[i].num == 1? alert("不能小于1") : cookieArr[i].num--
                    }
                    break;
                }
            }
            // nextAll() 方法返回被选元素之后的所有同级元素。
            //存回cookie里面
            $(this).nextAll("span").html(`商品数量：${cookieArr[i].num}`);
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
            sc_num();
        })       
    })
