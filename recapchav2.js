function recapchajs() {	
    alert("call");
    $(function() {
    var grecaptcharesponse = grecaptcha.getResponse();
    var secretAPIkey = $('#g-recapcha-key').val();
      $.ajax({
        type: 'POST',
        url: "https://www.google.com/recaptcha/api/siteverify", 
        data: {
          secret:secretAPIkey,
          response:grecaptcharesponse,
        },
        success: function( data ) {
          data = JSON.parse(data);
          if(data.success){
            alert("success");
          }else{
            alert("faild");
            flag = 1;
          }
        },
        error: function() {
          alert("error");
          flag = 1;
        }
      });
    });
    if (flag) {
        return false;
    }
}
