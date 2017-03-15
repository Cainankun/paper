var express = require('express');
var router = express.Router();
var easyquery=require('./../my_modules/easyquery');
// var ccap=require('ccap');
// router.get("/ccap",function(req,res,next){
// 	var pic=ccap();
// 	res.end(pic[1]);
// 	console.log(ccap[0]);
// })

/* GET users listing. */
router.post('', function(req, res, next) {
	console.log("signup work");
	console.log("session.name:"+req.session.name);
	var account=req.body.account,
		password=req.body.password,
		name=req.body.name,
		sex=req.body.sex,
		kind=req.body.kind,
		table;//存放要查的数据库表名

		
	//判断是老师还是学生
	if(kind=="老师"){
		table=" teacher_information ";
	}else{
		table=" student_information ";
	}
	easyquery("select account from"+table+"where account=\""+account+"\";",function(error, results, fields){
		if(results.length==0){
			//检查是否数据库中是否已经有该账号
			easyquery("insert into"+table+"(account,password,name,sex) values(\""+account+"\",\""+password+"\",\""+name+"\",\""+sex+"\");",function(error,results,fields){
				if(error){
					console.log("insert:"+error);
					res.status(500);
					res.send("数据库插入数据出错");
				}else{
					//返回成功的信息
					res.sendStatus(200);
					// res.send("注册成功");
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
