Hobby = require('../model/hobby')

module.exports = {
    edit,show
};

function edit(req, res) {
    Hobby.findByIdAndUpdate(req.params.id, req.body)
      .then(res.redirect('/'))
  }

  function show (req,res){
      Hobby.findById(req.params.id,function(err,hobby){
          res.render('show',{
              hobby
          })
      })
  }