var express = require('express');
var router = express.Router();
var fs=require('fs');


/* GET home page. */
router.get('/signup.html', function(req, res, next) {
	// console.log("index running");
	var signup=fs.createReadStream("public/page/signup/signup.html",{flags:'r',encoding:null});
	signup.pipe(res);
	// res.render("page/homepage/homepage.html");
	// res.end();
	// res.send(public/page/homepage/homepage.html);
});
router.get('/addlab.html',function(req,res,next){
	var addlab=fs.createReadStream('public/page/addlab/addlab.html',{flags:'r',encoding:null});
	addlab.pipe(res);
})
router.get('/login.html',function(req,res,next){
	var login=fs.createReadStream('public/page/login/login.html',{flags:'r',encoding:null});
	login.pipe(res);
})
router.get('/my_information.html',function(req,res,next){
	var information=fs.createReadStream('public/page/my_information/my_information.html',{flags:'r',encoding:null});
	information.pipe(res);
})
router.get('/lab_list.html',function(req,res,next){
	var lab_list=fs.createReadStream('public/page/lab_list/lab_list.html',{flags:'r',encoding:null});
	lab_list.pipe(res);
})
module.exports = router;
