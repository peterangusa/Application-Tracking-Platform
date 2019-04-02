<<<<<<< HEAD
/*
$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});*/
=======
$("h1").click(function() {
  alert("This is a header.");
});

$("p").click(function() {
  alert("This is a paragraph.");
});

$("img").click(function() {
  alert("This is an image.");
});

$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});
>>>>>>> 00229dc39324a1670183591e753d56a3dc50bb19
