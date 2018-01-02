window.onload=function(){

}
//通用函数
function g(selector){
	var method = selector.substr(0,1)=='.'?'getElementsByClassName':'getElementById';
	return document[method](selector.substr(1));
}
// 随机生成一个值 范围0~7  random([min,max])
function random(range){
	// 选择其中较小的数
	var max=Math.max(range[0],range[1]);
	var min=Math.min(range[0],range[1])-1;
	var diff = max-min//插值,【-1，6】=》7
	var number = Math.ceil(Math.random()*diff+min);//取整
	return number;
}
// 输出所有的海报
var data=data;
function addTemplate(){
	var template = g("#wrap").innerHTML;
	var html = [];
	for( s in data){
		// console.log(parseInt(s)+1);
		var _html = template.replace("{{index}}",parseInt(s)+1)
							.replace("{{img}}",data[s].img)
							.replace("{{name}}",data[s].name);
		html.push(_html);
	}
	g("#wrap").innerHTML = html.join(''); 
	rsort(random([1,8]));
	console.log(random([1,8]));
}
addTemplate();

// 计算左右分区的范围 {left:{ x:[min,max],y:[]},right:{}}
function range(){
	var  range = {left:{x:[],y:[]},right:{x:[],y:[]}};

	var wrap = {
		w:g("#wrap").clientWidth,
		h:g("#wrap").clientHeight
	}

	var photo = {
		w:g(".photo")[0].clientWidth,
		h:g(".photo")[0].clientHeight
	}
	range.wrap =wrap;
	range.photo=photo;

	range.left.x=[0-photo.w,wrap.w/2-photo.w/2];
	range.left.y=[0-photo.h/2,wrap.h-photo.h/2];

	range.right.x=[wrap.w/2+photo.w/2,wrap.w+photo.w/2]
	range.right.y=range.left.y;
	return range;
}
//排序海报
function rsort(n){
	var _photo = g(".photo");
	var photos = [];
	for(s=0;s<_photo.length;s++){
		_photo[s].className = _photo[s].className.replace(/\s*photo_center\s*/,' ');//避免字符串中空格越来越多
		photos.push( _photo[s] );
	}
	var photo_center = g("#photo_" +n);
	photo_center.className += ' photo_center';

	photo_center=photos.splice(n-1,1)[0];


	// 把海报分为左右两区域
	var photos_left = photos.splice(0,Math.ceil(photos.length/2));
	var photos_right = photos;

	var ranges = range();
	for(s in photos_left){
		var photo = photos_left[s];

		photo.style.left = random(ranges.left.x)+"px";
		photo.style.top = random(ranges.left.y)+"px";

		photo.style['-webkit-transform']= "rotate("+random([-150,150])+"deg)";
	}
	for(s in photos_right){
		var photo = photos_right[s];
		photo.style.left = random(ranges.right.x)+"px";
		photo.style.top = random(ranges.right.y)+"px";
		photo.style['-webkit-transform']= "rotate("+random([-150,150])+"deg)";
	}
}

// 反面控制
function turn (elem){
	var  cls = elem.className;
		// console.log(/photo-front/.test(cls));
	// 正则表达式判断是否含有该字符串
	if(/photo-front/.test(cls)){
		cls = cls.replace(/photo-front/,'photo-back');
	}
	else{
		cls = cls.replace(/photo-back/,'photo-front');
	}
	return elem.className=cls;
}