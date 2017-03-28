$(document).ready(function(){
	$.ajax({
		url:'/my_information',
		success:function(data){
			$("#name").text(data[0].name);
			$("#phone").text(data[0].account);
			$("#sex").text(data[0].sex);
			$("#kind").text(data[0].kind);
		}
	})
	$("#changePhone").click(function(){
		$(".container>form").append("<input id='newPhone' type='text' /><input id='send' type='button' value='确定'>");
		$("#send").click(function(){
			var data={};
			data.newPhone=$("#newPhone").val();
			$.ajax({
				url:"/change_phone",
				type:"POST"	,
				data:data
			})
		})
	})
})