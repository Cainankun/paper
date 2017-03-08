var express = require('express');
var router = express.Router();
var easyquery=require('./../my_modules/easyquery');

/* GET users listing. */
router.post('', function(req, res, next) {
	console.log("signup request.body.sex:"+req.body.sex);
	var account=req.query.account,
		password=req.query.password,
		name=req.query.name,
		sex=req.query.sex;
	easyquery("select account from teacher_information where account=\""+account+"\";",function(error, results, fields){
		if(results.length==0){
			easyquery("insert into teacher_information (account,password,name,sex) values(\""+account+"\",\""+password+"\",\""+name+"\",\""+sex+"\");",function(error,results,fields){
				if(error){
					console.log("insert:"+error);
				}
			})
		}else{
			console.log("account already exist");
		}
	})
	res.end()
});

module.exports = router;
