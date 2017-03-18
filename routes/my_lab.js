var express=require('express');
var router=express.Router();
var easyquery=require('./../my_modules/easyquery');
router.get('',function(req,res,next){
	console.log("my_lab running");
	var kind=req.session.kind,
		id=req.session.userid;
		//测试时将id设置为1 kind设置为teacher
	// var kind="teacher",
	// 	id=1;
	if(kind!="teacher"){
		console.log("登录者不是老师没有自己发布的实验室");
		res.sendStatus(400);
	}else{
		easyquery('select * from lab_information where approver='+id+";",function(error,results,fields){
			if(error){
				console.log("query error:"+error);
				res.sendStatus(500);
			}else{
				res.send(results);
			}
		})
	}
})

module.exports=router;