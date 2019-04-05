
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();


      //var old_username = "antonio"
      //var old_password = "123"

      var userName = $(this).find("[name=username]").val();
      var userPassword = $(this).find("[name=password]").val();

      var logDetails = {"username": userName, "password": userPassword }

    //console.log(userName);
    //console.log(userPassword);
    //console.log(logDetails);

    if (userName == "" && userPassword == ""){
      alert("Please input the credentials");
    }

    if (userName == "antonio" && userPassword == "") {
      alert("Please input the password");

    }

    if (userName == "" && userPassword == "12345") {
      alert("Please input the username");

    }

    if (userName == "antonio" && userPassword == "12345"){
      alert("Successful Login");
      window.location.href = "home.html";
    }

});
});
