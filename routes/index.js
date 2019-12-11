var express = require('express');
var router = express.Router();
var hobbiesCtrl = require('../controllers/hobbies')
var Hobby = require('../model/hobby')


/* GET home page. */
router.get('/show/:id', hobbiesCtrl.show)

router.get('/', function(req, res, next) {
  Hobby.find({}, function (err, hobbies){
      res.render('index', { title: 'No Hobbies Here!', hobbies });
  })
});
router.post('/',function(req,res){
  Hobby.create(req.body,function(err){
    res.redirect('/');
  })
})

router.delete('/:id', function(req, res) {
  Hobby.findByIdAndDelete({_id:req.params.id},function(err){
    res.redirect('/');
  })
})

router.put("/:id",function(req,res){
  Hobby.findByIdAndUpdate(req.params.id,req.body,function(err){
    res.redirect('/');
  })
})
module.exports = router;