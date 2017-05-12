var express = require('express');
var app = express();

var p1 = require('./routes/p1.js')(app); //객체 app을 전달함
app.use('/p1', p1);


var p2 = require('./routes/p2.js');
app.use('/p2' ,p2);



app.listen(3000, function(){
  console.log('연결됐다 이고야!');
});
