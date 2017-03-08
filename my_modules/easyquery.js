var mysql=require('mysql');
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