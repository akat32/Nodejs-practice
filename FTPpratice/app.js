var express = require('express');
var app = express();


var image = require('./route/index');
app.use('/image', image);

app.listen(3000, ()=>{
  console.log('Working Server port on 3000');
})
