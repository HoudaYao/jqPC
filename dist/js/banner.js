define(["jquery"],function($){
    function show(){
        $(function(){
            var aBtns = $("#message").find("ol").find("li").find("a");
            var oUl = $("#message").find("ul");
            
            var iNow = 0; //代表当前显示的图片的下标
            var timer = null;
        
            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            })
        
            timer = setInterval(function(){
                iNow++;
                tab();
            }, 5000);
        
            //给整个轮播图添加移入和移出
            $("#message").hover(function(){
                clearInterval(timer);
            }, function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                }, 5000);
            })
            

            function tab(){
               
                //iNow切换图片和切换按钮
                aBtns.removeClass("active").eq(iNow).addClass("active");
        
                //下表为3，让下标为0的按钮显示。
                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass("active");
                }
        
        
                oUl.animate({
                    left: -iNow * 1519
                }, 500, function(){
                    //动画结束，如果是下标识3，切回第0张图片
                    if(iNow == aBtns.size()){
                        iNow = 0;
                        oUl.css("left", 0);
                    }
                })
            }
           
        })
    }
    return {
        show:show
    }
})