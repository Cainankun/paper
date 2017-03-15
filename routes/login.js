var express=require('express'),
	router=express.Router(),
	easyquery=require('./../my_modules/easyquery');

router.post('',function(req,res,next){
	console.log("login running");
	console.log("cookie:"+req.cookies.name);
	// console.log("session:"+req.session.user)
	var account=req.body.account,
		password=req.body.password,
		kind=req.body.kind;
	easyquery('select account from '+kind+'_information where account=\"'+account+'\" and password=\"'+password+'\";',function(error,results,fields){
		if (error) {
			console.log("(login:)"+error);
		}
		if(results.length==0){
			//数据库找不到相等的（账号密码错误）
			res.status(200).send("账号或者密码错误");
		}else{
			//处理session
			req.session.user=account;
			console.log("session.name:"+req.session.user);
			// res.set({
			// 	"set-cookie":"name=cainankun"
			// });


			res.sendStatus(200);
		}
	})
})

module.exports=router;