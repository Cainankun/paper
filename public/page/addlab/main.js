$(document).ready(function(){
	$("#timepicker1").timepicker();
	$("#timepicker2").timepicker();
	$("#timepicker1").on('changeTime',function(){
		var timevalue1=$(this).val();
		$("#timepicker2").value="";
		$("#timepicker2").timepicker({
			"minTime":timevalue1
		});
		console.log("1 running");
		console.log(timevalue1);
	})
	$("#timepicker2").on('changeTime',function(){
		var timevalue2=$(this).val();
		$("#timepicker1").value="";
		$("#timepicker1").timepicker({
			'maxTime':timevalue2
		});
		console.log("2 running");
		console.log(timevalue2);
	})
})
$("#submit").click(function(){
	var data={};
	data.address=$("#address").val();
	// data.available_time=$("#available_time").val();
	data.approver=$("#approver").val();
	data.usefor=$("#usefor").val();
	data.available_time="";
	$("input[name='week']:checked").each(function(){
		data.available_time +=$(this).val();
	})
	console.log(data.available_time);
	$.ajax({
		type:"POST",
		data:data,
		url:"/addlab"
	})
})