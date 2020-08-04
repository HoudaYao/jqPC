define(['jquery'], function() {
    function show(){
            $.ajax({
                type: "get",
                    url: "../data/tab.json",
                    success: function(arr){
                        // alert(arr);
                        var str = ``;
                        for(var i =0;i <arr.length;i++){
                            str += `<li id="mess-li">
                            <a href="" class="mess_link">
                                <span>${arr[i].title}</span>
                                <i class="iconfont">&#xe503;</i>
                            </a>
                        </li>`
                        }
                       
                    //    $("#nav-hover").on("mouseenter","#main-menu-name",function(){
                    //        $("#mess-ul").css("display","block");
                    //    })
                    //    $("#nav-hover").on("mouseleave","#main-menu-name",function(){
                    //     $("#mess-ul").css("display","block");
                    // })
                       $('#mess-ul').html(str)
                    },
                    error:function(msg){
                        alert(msg);
                    }
                    
        })

    }
    return{
        show:show
    }
    
});