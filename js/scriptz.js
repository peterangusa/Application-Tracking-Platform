$(document).ready(function() {
 $("#submit-btn").click('submit',function(event) {
   event.preventDefault();

   var first_name = $("#first_name").val();
   var other_name = $("#other_name").val();
   var birthday = $("#birthday").val();
   var gender = $("input:radio[name='gender']:checked").value;
   var email = $("input#email").val();
   var phone = $("input#phone").val();
   var address = $("address").val();
   var gname = $("input#gname").val();
   var choice_one = $("input#choice_one").val();
   var choice_two = $("input#choice_two").val();
   var psubject1 = $("#psubject1").val();
   var psubject2 = $("input#psubject2").val();
   var psubject3 = $("input#psubject3").val();
   var pri_grade1 = $("#pri_grade1".value);
   var pri_grade2 = $("#pri_grade2").value;
   var pri_grade3 = $("#pri_grade3").value;
   var sub_subject1= $("#sub_subject1").val();
   var sub_subject2 = $("#sub_subject2").val();
   var subgrade1 = $("#subgrade1").value;
   var subgrade2 = $("#subgrade2").value;
   var upload = $("input#upload").values;
   var p1 =parseInt(pri_grade1);
   var p2 = parseInt(pri_grade2);



     var finalgrade = p1+p2;
     alert('grade is: '+finalgrade);

     $("ul#applicants").append("<li><span class='applicants'>" +
                                     app_form.first_name +
                                     "</span></li>");
                                    $("#first_name").val("");
                                    $("#other_name").val();
                                    $("#birthday").val("");
                                    $("input:radio[name='gender']:checked").value;
                                    $("input#email").val("");
                                    $("input#phone").val("");
                                    $("address").val("");
                                    $("input#gname").val("");
                                    $("input#choice_one").val("");
                                    $("input#choice_two").val("");
                                    $("#psubject1").val("");
                                    $("input#psubject2").val("");
                                    $("input#psubject3").val("");
                                    $("#pri_grade1".value);
                                    $("#pri_grade2").value;
                                    $("#pri_grade3").value;
                                    $("#sub_subject1").val("");
                                    $("#sub_subject2").val("");
                                    $("#subgrade1").value;
                                    $("#subgrade2").value;
                                    $("input#upload").values;






})
})
