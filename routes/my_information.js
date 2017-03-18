var express=require('express'),
	router=express.Router(),
	easyquery=require('./../my_modules/easyquery');
router.get('',function(req,res,next){
	console.log("my_information running");
	var data={},
		id=req.session.userid,
		kind=req.session.kind;
	if (id==undefined||kind==undefined) {
		res.redirect('/login.html');
	}else{
		easyquery('select * from '+kind+'_information where id='+id+';',function(error,results,fields){
			if(error){
				console.log("error:"+error);
				res.sendStatus(500);
			}else{
				data=results;
				console.log("results:"+data[0].name);
				res.send(data);
			}
		})

	}

})

module.exports=router;