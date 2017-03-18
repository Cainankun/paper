var express=require('express');
var router=express.Router();
var easyquery=require('./../my_modules/easyquery');
router.get('',function(req,res,next){
	console.log("lab_list running")
	easyquery('select * from lab_information;',function(error,results,fields){
		res.send(results);
	})
})

module.exports=router;