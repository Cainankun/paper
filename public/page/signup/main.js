$("#submit").click(function(){
	var data={},
		checkAccount=/\d{11}/,
		checkSex=/(男|女)/;

	data.account=$("#account").val();
	data.password=$("#password").val();
	data.name=$("#name").val();
	data.sex=$("input[name='sex']:checked").val();
	data.kind=$("input[name='kind']:checked").val();
	// console.log(checkSex.test(data.sex));
	// console.log("account"+checkAccount.test(data.account));
	if(checkAccount.test(data.account)&&checkSex.test(data.sex)){
		//参数检测
		$.ajax({
			type:"POST",
			data:data,
			url:"/signup",
			complete:function(XHR){
				if (XHR.status==200) {
					window.location.href="/login.html";
				}
			}
		})
	}else{
		console.log("账号格式不正确")
	}
})