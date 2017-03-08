var express = require('express');
var router = express.Router();
var fs=require('fs');
/* GET home page. */
router.get('', function(req, res, next) {
	// console.log("index running");
	// var homepage=fs.createReadStream("public/page/homepage/homepage.html",{flags:'r',encoding:null});
	// homepage.pipe(res);
	// res.render("page/homepage/homepage.html");
	// res.end();
	res.send(public/page/homepage/homepage.html);
});

module.exports = router;
