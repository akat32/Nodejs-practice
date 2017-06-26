var express = require('express')
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
mongoose.connect('localhost/test');
mongoose.Promise = global.Promise;
var session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
var db = mongoose.connection;

//데이터베이스 접속 확인
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("mongo DB connected...")
});
require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session()); //로그인 세션 유지

//플래시메세지를 사용한다면
var flash = require('connect-flash');
app.use(flash());

app.listen(3000, function(){
  console.log('Server Start!');

})
