var mysql=require('mysql');

//将mysql的连接登录以及查询封装在easyquery中
//用法：easyquery(sql,callback)
function mainfun(lookup,callback){
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'paper'
	});
	connection.connect();
	connection.query(lookup,function(error, results, fields){
		callback(error,results,fields);
	});
	connection.end();
}
module.exports = mainfun;