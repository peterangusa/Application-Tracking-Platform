
$(function(){



$('#test').click(function () {
  $.getJSON('db.json', function (data) {
    console.log(data);
  });
});
})
