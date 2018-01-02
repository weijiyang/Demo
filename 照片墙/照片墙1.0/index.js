window.onload=function(){

}
// 反面控制
function turn (elem){

	var  cls = elem.className;
		console.log(/photo-front/.test(cls));
	// 正则表达式判断是否含有该字符串
	if(/photo-front/.test(cls)){
		cls = cls.replace(/photo-front/,'photo-back');
	}
	else{
		cls = cls.replace(/photo-back/,'photo-front');
	}
	return elem.className=cls;
}