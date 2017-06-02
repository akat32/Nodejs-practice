var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');

app.get('/', (req,res)=>{
  res.send('기본 페이지다 이고야!');
});

app.get('/home', (req,res)=>{
  res.send('홈 페이지다 이고야!');
});

app.get('/about', (req,res)=>{
  res.send('어바웃 페이지다 이고야!');
});

var auth = require('./route/auth.js');

var loauth = require('./route/loauth.js');
app.use('/register', auth);
app.use('/login', loauth);
app.listen(3000, function(){
  console.log('앙 서버 스타토띠!');
});

module.exports = app;
