module.exports = (app)=>{
  var express = require('express');
  var router = express.Router();
  router.get('/r1',(req,res)=>{
    res.send('Hello /p1/r1');
  });

  router.get('/r2',(req,res)=>{
    res.send('Hello /p1/r2');
  });
  return router;
};
