var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
  res.send('회원가입 페이지다 이거야');
})


router.post('/', (req,res)=>{
  var person = ['user_name','passwd'];
  var new_user = req.body;
  new_user = new Users(new_user);
  new_user.save(function(err, result){
    if(err) return res.status(500).send("데이터베이스 에러!!!");
    if(result) return res.status(200).json(new_user);
  });
  console.log("ID : " + req.body.user_name + "\nPW : " + req.body.passwd);
})

module.exports = router;
