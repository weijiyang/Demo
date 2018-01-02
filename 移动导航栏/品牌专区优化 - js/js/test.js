window.onload=function(){
	var DONTSCROLL = false;
	var fix_m = document.getElementsByClassName("fix_m");
	var content = document.getElementsByClassName("content");
	var fix_ul = document.getElementsByClassName("fix_ul")[0].children;
	document.getElementsByClassName("fix_m")[0].style.left = document.getElementsByClassName("pinpai")[0].offsetLeft;
	fix_m[0].style.display = "block";
	//添加滚动监听 对导航栏样式进行更改
	document.addEventListener("scroll",function(){
		if(DONTSCROLL) return false;
		for(var x = 0; x < content.length ; x++){
			if(content[x].offsetTop<document.body.scrollTop && content[x].offsetTop+content[x].clientHeight >= document.body.scrollTop){
				var id = content[x].getAttribute("id");
				id = id.slice(id.indexOf("_")-id.length+1);

				for(var i = 0; i<document.getElementsByClassName("fix_ul")[0].children.length; i++){
					if(document.getElementsByClassName("fix_ul")[0].children[i].className =="fix_soldout") continue;
					document.getElementsByClassName("fix_ul")[0].children[i].className = "";
				}
				document.getElementById(id).className = "fix_active";
			}
		}
	});
	//屏幕的大小变化检测，对导航栏位置进行移动
	window.onresize=function(){
		document.getElementsByClassName("fix_m")[0].style.left = document.getElementsByClassName("pinpai")[0].offsetLeft;
	};
	//对导航栏点击效果触发   内容区域滚动、样式变化  导航栏样式变化
	for(var k = 0; k<document.getElementsByClassName("fix_ul")[0].children.length; k++){
		document.getElementsByClassName("fix_ul")[0].children[k].onclick=function(){
			DONTSCROLL = true ;
			if(!this.id||this.id==0){
				document.documentElement.scrollTop = document.getElementById("content_0").offsetTop-20; 
				document.getElementById("content_0").children[1].style.background="#f4f3f3";
			}
			if(this.className.indexOf("fix_soldout")>=0) return false;
			var id = this.id;
			if(!this.id) id = "0";
			 document.body.scrollTop = document.getElementById("content_"+id).offsetTop-20;
			 document.getElementById("content_"+id).children[1].style.background = "#f4f3f3";
			 for(var x=0;x<document.getElementsByClassName("fix_ul")[0].children.length;x++){
			 	if(document.getElementsByClassName("fix_ul")[0].children[x].className.indexOf("fix_soldout")>=0) continue;
			 	document.getElementsByClassName("fix_ul")[0].children[x].className = "";
			 }
			 this.className = "fix_active";
			 setTimeout(function(){
			 	DONTSCROLL = false;
			 },1000);	
		}
	}

//鼠标移动为内容部分添加阴影
	for(var j=0; j<document.getElementsByClassName("list").length;j++){
		document.getElementsByClassName("list")[j].onmouseover=function(){
			for(var i=0;i<document.getElementsByClassName("list").length;i++){
				document.getElementsByClassName("list")[i].style.background = "#ffffff";
			}
			this.style.background = "#f4f3f3";
		}
	}
	



}
