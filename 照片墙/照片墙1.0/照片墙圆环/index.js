
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
	var nav = [];
	for( s in data){
		var _html = template.replace("{{index}}",parseInt(s)+1)
							.replace("{{img}}",data[s].img)
							.replace("{{name}}",data[s].name);
		html.push(_html);
		nav.push('<span id="nav_'+(parseInt(s)+1)+'" onclick="turn(g(\'#photo_'+(parseInt(s)+1)+'\'))" class="i">&nbsp;</span>' );
	}

	html.push('<div class="nav">'+nav.join('')+'<div>');
	g("#wrap").innerHTML = html.join(''); 
	rsort(random([1,data.length]));
	
}
addTemplate();

// 计算左右分区的范围 {left:{ x:[min,max],y:[]},right:{}}

//排序海报
function rsort(n){
	var _photo = g(".photo");
	var photos = [];
	
	for(s=0;s<_photo.length;s++){
		_photo[s].className = _photo[s].className.replace(/\s*photo_center\s*/,' ');//避免字符串中空格越来越多
		_photo[s].className = _photo[s].className.replace(/\s*photo-front\s*/,' ');//避免字符串中空格越来越多
		_photo[s].className = _photo[s].className.replace(/\s*photo-back\s*/,' ');//避免字符串中空格越来越多

		_photo[s].className +="photo-front";
		
		_photo[s].style['-webkit-transform']='rotate(360deg) scale(1.3)';
		
		photos.push( _photo[s] );
	}
	var photo_center = g("#photo_" +n);
	photo_center.className += ' photo_center ';

	photo_center=photos.splice(n-1,1)[0];


	// 把海报分为分为中心和非中心    随机角度  并赋给变量beg  用斜边定长使用三角函数
	var length = 350;
	for(s in photos){
		var  deg=random([-180,180]);
		var  x=length*Math.cos(deg)+"px";
		var  y=length*Math.sin(deg)+"px";
		console.log(x+","+y+","+deg);
		photos[s].style['-webkit-transform']='translate('+x+','+y+') rotate('+deg+'deg) scale(0.8)';

	}
	


	var navs = g(".i");
	for(var s=0;s<navs.length;s++){
		navs[s].className = navs[s].className.replace(/\s*i_current\s*/,' ');
		navs[s].className = navs[s].className.replace(/\s*i_back\s*/,' ');
	}
	g("#nav_"+n).className +=' 	i_current ' ;
}

// 翻面控制
function turn (elem){
	var  cls = elem.className;
	var n = elem.id.split("_")[1];

	if(!/photo_center/.test(cls)){
		return rsort(n);
	}

	// 正则表达式判断是否含有该字符串
	if(/photo-front/.test(cls)){
		cls = cls.replace(/photo-front/,'photo-back');
		g('#nav_'+n).className += ' i_back ';
	}
	else{
		cls = cls.replace(/photo-back/,'photo-front');
		g('#nav_'+n).className=g('#nav_'+n).className.replace(/\s*i_back\s*/,' ');
	}


	var num = elem.attributes['id'];

	return elem.className=cls;
}

