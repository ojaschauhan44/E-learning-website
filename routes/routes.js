var express= require('express');
var router= express.Router();
var Detail = require('../models/threads')
var Answer = require('../models/answer')


router.get('/',function(req,res){

  return res.render('main_page.html');
});

router.get('/main_page.html',function(req,res){

  return res.render('main_page.html');
});

router.get('/home_page.html',function(req,res){

  return res.render('home_page.html');
});

router.get('/3_video_main_da.html',function(req,res){

  return res.render('3_video_main_da.html');
});

router.get('/3_video_main_toc.html',function(req,res){

  return res.render('3_video_main_toc.html');
});

router.get('/4Cyber.html',function(req,res){

  return res.render('4Cyber.html');
});

router.get('/4DS.html',function(req,res){

  return res.render('4DS.html');
});

router.get('/4java.html',function(req,res){

  return res.render('4java.html');
});

router.get('/4NA.html',function(req,res){

  return res.render('4NA.html');
});

router.get('/C%20Language.html',function(req,res){

  return res.render('C Language.html');
});

router.get('/Chemistry.html',function(req,res){

  return res.render('Chemistry.html');
});

router.get('/DBMS.html',function(req,res){

  return res.render('DBMS.html');
});

router.get('/firstYear.html',function(req,res){

  return res.render('firstYear.html');
});


router.get('/fourthYear.html',function(req,res){

  return res.render('fourthYear.html');
});

router.get('/game-code.html',function(req,res){

  return res.render('game-code.html');
});

router.get('/Mathematics.html',function(req,res){

  return res.render('Mathematics.html');
});

router.get('/OS.html',function(req,res){

  return res.render('OS.html');
});

router.get('/Physics.html',function(req,res){

  return res.render('Physics.html');
});

router.get('/Res-disp.html',function(req,res){

  return res.render('Res-disp.html');
});

router.get('/resources.html',function(req,res){

  return res.render('resources.html');
});

router.get('/secondYear.html',function(req,res){

  return res.render('secondYear.html');
});

router.get('/thirdYear.html',function(req,res){

  return res.render('thirdYear.html');
});

router.get('/Y2_CPP.html',function(req,res){

  return res.render('Y2_CPP.html');
});


router.get('/Y2_DELD.html',function(req,res){

  return res.render('Y2_DELD.html');
});

router.get('/Y2_Python.html',function(req,res){

  return res.render('Y2_Python.html');
});

router.get('/Y2_web-dev.html',function(req,res){

  return res.render('Y2_web-dev.html');
});


router.get('/community.html',function(req,res){
  //res.render('add_product.html');
  Detail.find({}, function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('community.html',{data:data});
    }
  })
});

router.get('/answers.html',function(req,res){
  Answer.find({}, function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('answers.html',{data:data});
    }
  });
});

router.post('/answer',function(req,res){
  console.log("req.body"); //form fields
  console.log(req.body);

    Answer.findOne({},function(err,data){
      console.log("into detail");


      var detail = new Answer({

        answer: req.body.answer,
      });

      detail.save(function(err, Person){
        if(err)
          console.log(err);
        else
          res.redirect('/answers.html');

      });

    }).sort({_id: -1}).limit(1);


});


router.post('/community',function(req,res){
  console.log("req.body"); //form fields
  console.log(req.body);

  if(!req.body){
    res.json({success: false});
  } else {
    var c;
    Detail.findOne({},function(err,data){
      console.log("into detail");

      if (data) {
        console.log("if");
        c = data.unique_id + 1;
      }else{
        c=1;
      }

      var detail = new Detail({

        unique_id:c,
        name: req.body.threadname,
        email:req.body.email,
      });

      detail.save(function(err, Person){
        if(err)
          console.log(err);
        else
          res.redirect('/community.html');

      });

    }).sort({_id: -1}).limit(1);

  }
});

router.post('/delete',function(req,res){

   Detail.findByIdAndRemove(req.body.prodId,function(err, data) {

    console.log(data);

   })
  res.redirect('/community.html');
});

router.post('/del',function(req,res){

   Answer.findByIdAndRemove(req.body.prodId,function(err, data) {

    console.log(data);

   })
  res.redirect('/answers.html');
});

router.get('/Game2.html',function(req,res){
  res.render('Game2.html');
});

module.exports = router;
