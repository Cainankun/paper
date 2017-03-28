$(document).ready(function(){
	var list=$.ajax({
		url:'/lab_list',
		type:'POST',
		cache:false,
		success:function(data){
			console.log("data[0].id:"+data[0].id);
			for(var i=0;i<data.length;i++){
				$("#lab_table").append("<tr><td>"+data[i].address+"</td><td>"+data[i].available_time+"</td><td>"+data[i].approver+"</td><td>"+data[i].usefor+"</td></tr>");
			}
		}
	});
	// console.log(list);
})