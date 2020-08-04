  window.onload = function(){
            var oLoginname = document.getElementById("loginname");
            var oError = document.getElementById("error");
            oLoginname.onblur = function(){
                    if(!isPhone(oLoginname.value)){
                        oError.innerHTML = "☹请输入正确的手机号";
                    }else{
                        oError.innerHTML = "";
                    }
                }
                function isPhone(phone) {
                    var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                    if (!myreg.test(phone)) {
                        return false;
                    } else {
                        return true;
                    }
                }
}