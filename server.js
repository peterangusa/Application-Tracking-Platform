var express = require ('express');
var app = express ();
var PORT = process.env.PORT || 3000;
app.use(express.static(_dirname));
app.listen(PORT, function(){
  console.log('server listening on '+ PORT);



});
