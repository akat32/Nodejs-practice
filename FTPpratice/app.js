var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');

app.get('/', (req,res)=>{
  res.send('아마도 메인페이지');
});

app.get('/about', (req,res)=>{
  res.send('아마도 어바웃페이지');
});

var auth = require('./route/index.js');
app.use('/image', auth);

app.listen(3000, function(){
  console.log('서버 스타트!');
});

module.exports = app;
