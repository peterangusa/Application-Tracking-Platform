$(function(){
$("#bttn").on("click", function(){

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  //var old_username = "antonio"
  //var old_password = "123"

  if (username== "" && password== ""){
    document.getElementById("alert").innerHTML= "input the details"
  }


  else  if (username== 'antonio' && password== '123'){
      document.getElementById("alert").innerHTML= "You successfully login";
    }
    else{
      document.getElementById("alert").innerHTML= "Your password and username are wrong";

    }

  console.log(username);


})
});
