$(function(){
$("#bttn").on("click", function(){

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  //var old_username = "antonio"
  //var old_password = "123"

  if (username== "" && password== ""){
    alert("Input the details")
  }


  else  if (username== 'antonio' && password== '123'){
    window.location.href= "home.html";
    }
    else{
      document.getElementById("alert").innerHTML= "Your password and username are wrong";

    }

})
});
