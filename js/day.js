function tick() {
	var years,months,days,hours, minutes, seconds;
	var intYears,intMonths,intDays;
	var today;
	today = new Date(); //系统当前时间
	intYears = today.getFullYear(); //得到年份,getFullYear()比getYear()更普适
	intMonths = today.getMonth() + 1; //得到月份，要加1
	intDays = today.getDate(); //得到日期
	years = intYears + "-"; 
 
	if(intMonths < 10 ){
	months = "0" + intMonths +"-";
	} else {
	months = intMonths +"-";
	}
	if(intDays < 10 ){
	days = "0" + intDays +" ";
	} else {
	days = intDays + " ";
	}
	timeString = years+months+days;
	Clock.innerHTML = timeString;
	window.setTimeout("tick();", 1000);
}
window.onload = tick;