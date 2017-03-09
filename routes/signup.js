var express = require('express');
var router = express.Router();
var easyquery=require('./../my_modules/easyquery');

/* GET users listing. */
router.post('', function(req, res, next) {
	console.log("signup work");
	var account=req.body.account,
		password=req.body.password,
		name=req.body.name,
		sex=req.body.sex;
	if(account)
	easyquery("select account from teacher_information where account=\""+account+"\";",function(error, results, fields){
		if(results.length==0){
			//检查是否数据库中是否已经有该账号
			easyquery("insert into teacher_information (account,password,name,sex) values(\""+account+"\",\""+password+"\",\""+name+"\",\""+sex+"\");",function(error,results,fields){
				if(error){
					console.log("insert:"+error);
					res.status(500);
					res.send("数据库插入数据出错");
				}else{
					//返回成功的信息
					res.status(200);
					res.send("注册成功");
				}
			})
		}else{
			//返回数据库已有该账号
			console.log("account already exist");
			// res.setHeader(400,{"content-type":"text/plain"});
			res.status(400)
			res.send("该账号已被注册");
			// res.end();
		}
	})
});

module.exports = router;
