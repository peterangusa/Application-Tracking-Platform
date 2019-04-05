
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var inputAdmin = $(this).find("[name=name1]").val();
    var inputPassword = $(this).find("[name=pass]").val();


     //var newAdmin = { "name1": inputtedAdmin, "pass": inputAdmin };

    //console.log(inputAdmin);
    //console.log(inputAdmin);
  if (inputPassword != "12345"){
      alert("Wrong Credentils");

    }

    else{
      window.location.href = "update.html";

    }



  });
});
