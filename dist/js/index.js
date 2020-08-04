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
                                <i class="iconfont">&#xe675;</i>
                            </a>
                        </li>`

                        }

                        
                        $("#mess-ul").on("mouseenter","li",function(){
                            $(".mess-list").css("display","block");
                            var index = $(this).index();
                            var str = ``;
                            for(var i=0;i<arr[index].childs.length;i++){
                                str +=`<li class="mess-list-li">
                                <a href="" class="list-li-a" id ="#?id=${i}">
                                    <div class="list-li-pic">
                                        <img src="${arr[index].childs[i].image}" alt="" id="image">
                                    </div>
                                    <div class="introduce">
                                        <b id="mode">${arr[index].childs[i].mode}</b>
                                        <em class="price">${arr[index].childs[i].price}</em>
                                    </div>
                                </a>
                            </li>`;
                            }
                            $('mess-list-ul').html(str);
                        })

                        $("#mess-ul").on("mouseleave","li",function(){
                            $(".mess-list").css("display","none");   
                        })



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