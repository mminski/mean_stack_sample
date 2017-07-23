var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/test', ['bgb'])

router.get('/bgb', function(req, res, next){
   db.bgb.find(function(err, persons){
     if(err){
       res.send(err);
     }
     res.json(persons)
   })
})

module.exports = router;
