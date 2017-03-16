$(document).ready(function(){
	$("#submit").click(function(){
		var data={};
		data.account=$("#account").val(),
		data.password=$("#password").val(),
		data.kind=$("input[name=kind]:checked").val();
		console.log(data);
		$.ajax({
			url:"/login",
			type:"POST",
			data:data,
			complete:function(XHR){
				console.log(XHR.status+XHR.responseText);

			}
		})
	})
})