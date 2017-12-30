$(function(){
	
	UpdateTime();
});

function UpdateTime(){
		var date = new Date();
		var year = date.getYear()+1900;
		var month = date.getMonth()+1;
		var day = date.getDate();
		if(month<10){
			month = "0"+month;
		}
		if(day<10){
			day = "0"+day;
		}
		$("#time").val(year+"-"+month+"-"+day);
	}