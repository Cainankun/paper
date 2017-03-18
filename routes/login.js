var express=require('express'),
	router=express.Router(),
	easyquery=require('./../my_modules/easyquery');

router.post('',function(req,res,next){
	console.log("login running");
	var account=req.body.account,
		password=req.body.password,
		kind=req.body.kind;
	easyquery('select id,account from '+kind+'_information where account=\"'+account+'\" and password=\"'+password+'\";',function(error,results,fields){
		if (error) {
			console.log("(login:)"+error);
			res.sendStatus(400);
		}else{
			if(results.length==0){
				//数据库找不到相等的（账号密码错误）
				res.status(400).send("账号或者密码错误");
			}else{
				//处理session
				req.session.user=account;
				req.session.userid=results[0].id;
				req.session.kind=kind;


				res.sendStatus(200);
			}
		}

	})
})

module.exports=router;