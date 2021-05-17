function recapchajs() {	
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
            return false;
          }
        },
        error: function() {
          alert("error");
        }
      });
    });
}
