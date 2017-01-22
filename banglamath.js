function bdmath(parameter){
	try {
		var str=replacebantoeng(parameter);
		var result=eval(str);
		var resutlreturn=replaceengtoban(result.toString());
		return resutlreturn+'|'+result.toString();
	}
	catch(err) {
		return '<span style="color:red">NaN</span>';
	}
}
function calculation(p1){
	return p1;
}
function replacebantoeng(pmtr){
	pmtr =pmtr.replace(/০/g,'0').replace(/১/g,'1').replace(/২/g,'2').replace(/৩/g,'3').replace(/৪/g,'4').replace(/৫/g,'5').replace(/৬/g,'6').replace(/৭/g,'7').replace(/৮/g,'8').replace(/৯/g,'9');	
	return pmtr;
}
function replaceengtoban(pmtr){
	pmtr= pmtr.replace(/0/g,'০').replace(/1/g,'১').replace(/2/g,'২').replace(/3/g,'৩').replace(/4/g,'৪').replace(/5/g,'৫').replace(/6/g,'৬').replace(/7/g,'৭').replace(/8/g,'৮').replace(/9/g,'৯');
	return pmtr;
}
