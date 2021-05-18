alert("called");
$(function() {
    $('#recapchajs').submit(function(){
    var flag = 0;
    var grecaptcharesponse = grecaptcha.getResponse();
    var secretAPIkey = $('#g-recapcha-key').val();
        $.post("https://script.google.com/macros/s/AKfycbyC-ANdo97T-1V3c4rZ1EAGkxOF0VukbLXa7Og4-mcUW6mmhvM/exec", {
            secret : secretAPIkey,
            response : grecaptcharesponse
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
