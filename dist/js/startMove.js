define(["jquery"],function($){
    function show(){
        // 0
        $('#show2-aside-li').mouseenter(function(){
            $('#aside-btn').stop(true).animate({
                top:325
            },500)
        })
        $('#show2-aside-li').mouseleave(function(){
            $('#aside-btn').stop(true).animate({
                top:374
            },500)
        })
        // 1
        $('#show2-aside-li1').mouseenter(function(){
            $('#aside-btn1').stop(true).animate({
                top:325
            },500)
        })
        $('#show2-aside-li1').mouseleave(function(){
            $('#aside-btn1').stop(true).animate({
                top:374
            },500) 
        })
        // 2
        $('#show2-aside-li2').mouseenter(function(){
            $('#aside-btn2').stop(true).animate({
                top:325
            },500)
        })
        $('#show2-aside-li2').mouseleave(function(){
            $('#aside-btn2').stop(true).animate({
                top:374
            },500) 
        })
        // 3
        $('#show2-aside-li3').mouseenter(function(){
            $('#aside-btn3').stop(true).animate({
                top:325
            },500)
        })
        $('#show2-aside-li3').mouseleave(function(){
            $('#aside-btn3').stop(true).animate({
                top:374
            },500) 
        })
        // 4
        $('#show2-aside-li4').mouseenter(function(){
            $('#aside-btn4').stop(true).animate({
                top:325
            },500)
        })
        $('#show2-aside-li4').mouseleave(function(){
            $('#aside-btn4').stop(true).animate({
                top:374
            },500) 
        })
        // 5
        $('#show2-aside-li5').mouseenter(function(){
            $('#aside-btn5').stop(true).animate({
                top:325
            },500)
        })
        $('#show2-aside-li5').mouseleave(function(){
            $('#aside-btn5').stop(true).animate({
                top:374
            },500) 
        })

        // 精品配件
        // 1
        $('#show3-li1').mouseenter(function(){
            $('#art-btn1').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li1').mouseleave(function(){
            $('#art-btn1').stop(true).animate({
                bottom:-33
            },500) 
        })
        // 2
        $('#show3-li2').mouseenter(function(){
            $('#art-btn2').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li2').mouseleave(function(){
            $('#art-btn2').stop(true).animate({
                bottom:-33
            },500) 
        })
        // 3
        $('#show3-li3').mouseenter(function(){
            $('#art-btn3').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li3').mouseleave(function(){
            $('#art-btn3').stop(true).animate({
                bottom:-33
            },500) 
        })
        // 4
        $('#show3-li4').mouseenter(function(){
            $('#art-btn4').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li4').mouseleave(function(){
            $('#art-btn4').stop(true).animate({
                bottom:-33
            },500) 
        })
        // 5
        $('#show3-li5').mouseenter(function(){
            $('#art-btn5').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li5').mouseleave(function(){
            $('#art-btn5').stop(true).animate({
                bottom:-33
            },500) 
        })
        // 6
        $('#show3-li6').mouseenter(function(){
            $('#art-btn6').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li6').mouseleave(function(){
            $('#art-btn6').stop(true).animate({
                bottom:-33
            },500) 
        })
        // 7
        $('#show3-li7').mouseenter(function(){
            $('#art-btn7').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li7').mouseleave(function(){
            $('#art-btn7').stop(true).animate({
                bottom:-33
            },500) 
        })
        // 8
        $('#show3-li8').mouseenter(function(){
            $('#art-btn8').stop(true).animate({
                bottom:24
            },500)
        })
        $('#show3-li8').mouseleave(function(){
            $('#art-btn8').stop(true).animate({
                bottom:-33
            },500) 
        })

    }
    return{
        show:show
    }
})