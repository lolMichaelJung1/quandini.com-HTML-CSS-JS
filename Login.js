CheckLogin = function (){
  var login = $('#txtUname').val();
  var pwd = $('#txtPWD').val();
  
  $.ajax(
        {
            //whatever the link that backend team developed
            url: rootUrl + '*************************',
            type: 'POST',
            data: {
                login = login,
                password = pwd
            },
            dataType: 'json',
            success:
                function (response) {
                    $('#overlay').fadeOut();
                    if (response != null && response) {
                        $('#PopupDetail').modal('hide');
                       //log in success and disply a log page
                    }
                },
            error:
                //show log in and password is wrong.
          
                }
        });
}
