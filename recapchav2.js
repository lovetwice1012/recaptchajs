$(function() {
    $('#recapchajs').submit(function(){
    var flag = 0;
    var grecaptcharesponse = grecaptcha.getResponse();
    var secretAPIkey = $('#g-recapcha-key').val();
        $.post("//www.google.com/recaptcha/api/siteverify", {
            secret : secretAPIkey,
            response : grecaptcharesponse,
        }, function(data) {
            data = JSON.parse(data);
          if(data.success){
            alert("success");
          }else{
            alert("faild");
            flag = 1;
          }
        });
    if (flag) {
        return false;
    }
 });
});
