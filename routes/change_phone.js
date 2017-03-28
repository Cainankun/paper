var express=require('express');
var router=express.Router();
var easyquery=require('./../my_modules/easyquery');
router.post('',function(req,res,next){
	console.log("change_phone running");
	var newPhone=req.body.newPhone;
	var userid=req.session.userid;
	var kind=req.session.kind;
	easyquery('select * from '+kind+'_information where account=\"'+newPhone+'\";',function(error,results,fields){
		if(error){
			console.log(error);
		}else if(results.length==0){
			easyquery('update '+kind+'_information set account=\"'+newPhone+'\" where id=\"'+userid+'\";',function(error,results,fields){
				if(error){
					console.log(error);
				}else{
					res.sendStatus(200);
				}
			})
		}else{
			res.send("this phone had already be used");
		}
	})
	console.log(newPhone+":"+userid+":"+kind);
	
})
module.exports=router;