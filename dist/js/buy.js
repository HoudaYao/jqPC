define(['jquery'],function(){
    function show(){
    //   var aBtns = $("#info-list").find("ul").find("li");
    //   var aDivs = $("#info-img").find("img");
      
    //   //  
    //   aBtns.click(function(){
    //     aBtns.attr("class", "");
    //     aDivs.css("display", "none").eq($(this).index()).css("display", 'block');
    //     $(this).attr("class", "active");
    //   })
    // }
    // $("#info-list").on("mouseenter","ul li",function(){
    //     this.attr("class","");
    //     $("#info-img").find("img").css("display", "none").eq($(this).index()).css("display", 'block');
    //     $(this).attr("class", "active");
    
    //   })
    
    return{
      show:show
    }
})



function TabSwitch(id){
    var oDiv1 = document.getElementById(id);
   
    this.aBtns = oDiv1.getElementsByTagName("button");
    this.aDivs = oDiv1.getElementsByTagName("div");


    var _this = this;
    //给按钮添加点击
    for(var i = 0; i < this.aBtns.length; i++){
        this.aBtns[i].index = i;

        this.aBtns[i].onclick = function(){
           
            _this.tab(this);
        };
    }
}

TabSwitch.prototype.tab = function(_this){
     //当前点击按钮的下标
     //其他所有按钮的样式取消，只让当前点击的按钮显示
    for(var j = 0; j < this.aBtns.length; j++){
        this.aBtns[j].className = '';
        this.aDivs[j].style.display = 'none';
    }
    _this.className = 'active';

    this.aDivs[_this.index].style.display = 'block';
}