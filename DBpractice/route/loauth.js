var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
  res.send('로그인 페이지다 이고야');
})


router.post('/', (req,res)=>{
  Users.findOne({user_name: req.body.user_name, passwd: req.body.passwd}, (err, user)=>{
  if(err) res.status(500).send("DB ERR");
  if(user) res.status(200).send(user);
  else res.status(404).send("user not fond");
})n
  console.log('ID : ' + req.body.user_name + '\nPW : ' + req.body.passwd + '\nlogined!');
});

module.exports = router;
