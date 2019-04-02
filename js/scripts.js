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
