$("#submit").click(function(){
	var data={},
		checkAccount=/11{\d}/,
		checkSex=/(男|女)/;

	data.account=$("#account").val();
	data.password=$("#password").val();
	data.name=$("#name").val();
	data.sex=$("input[name='sex']:checked").val();
	if(checkAccount.test(data.account)&&checkSex.test(data.sex)){
		//参数检测
		$.ajax({
			type:"POST",
			data:data,
			url:"/signup"
		})
	}else{
		console.log("账号格式不正确")
	}
})