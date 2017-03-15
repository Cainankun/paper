var express = require('express');
var router = express.Router();
var easyquery=require('./../my_modules/easyquery');

router.post("",function(req,res,next){
	console.log("addlab running");
	console.log("session.user:"+req.session.user);
	// console.log(req.path);
	// if(res){

	// }
	var address=req.body.address,
		available_time=req.body.available_time,
		approver=req.body.approver,//存放发布实验室老师的id
		usefor=req.body.usefor;
	console.log(address+available_time+approver+usefor);
	if(address&&available_time&&approver&&usefor){
		//判断是否有数据为空
		//将数据插入数据库
		easyquery("insert into lab_information (address,available_time,approver,usefor) values(\""+address+"\",\""+available_time+"\",\""+approver+"\",\""+usefor+"\")",function(error,results,fields){
			if(error){
				//插入数据出错
				console.log(error);
				res.status(500);
				res.send("数据库插入数据错误");
				res.end();
			}else{
				res.sendStatus(200);
				res.end();
			}
		})
	}else{
		res.status(400);
		res.send("addlab接口所有数据不能为空");
		res.end();
	}
})
module.exports=router;