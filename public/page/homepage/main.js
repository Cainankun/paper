$("#submit").click(function(){
	var data={};
	data.account=$("#account").val();
	data.password=$("#password").val();
	data.name=$("#name").val();
	data.sex=$("input[name='sex']:checked").val();
	$.ajax({
		type:"GET",
		data:data,
		url:"/signup"
	})
})