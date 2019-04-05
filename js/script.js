
$(function(){
$("form").on("submit", function(event) {
  event.preventDefault();

  var inputtedName = $("input#name").val();
  var inputtedUsername = $("input#username").val();
  var inputtedEmail = $("input#email").val();
  var inputtedPassword = $("input#password").val();
  var inputtedPasword1 = $("input#password1").val();


  var newContact = { "name": inputtedName, "username": inputtedUsername, "email": inputtedEmail,
    "password": inputtedPassword, "password1": inputtedPasword1 };

if (inputtedPassword != inputtedPasword1){
  alert("Password mismatch");

}
else{
  window.location.href = "index.html";
}


});
});
