/*$(function(){
$("#admin1").on("click", function(){

  var username1 = document.getElementById("name1").value;
  var passwordA = document.getElementById("password12").value;


  alert("clicked");


  if ((username1 !== "Admin") && (passwordA !== "123456")) {
    alert("Input the required credentials");
  }
  else{
    window.html.href = "update.html";
  }
});

});*/


$(function(){;
$("admin1").on("submit", function(event) {
  event.preventDefault();

  var inputtedAdmin = $("input#name1").val();
  var inputtedPasswordA = $("input#password12").val();

  var newAdmin = { name1: "inputtedAdmin", password12: "inputtedPaswordA" };

  console.log(newAdmin);

});
});
