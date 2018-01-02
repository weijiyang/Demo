$(function(){
	//最后一条其他字体更改
	$("#content_0 .initial").css("font-size","28px");
	// 导航条定位显示
	$(".fix_m").css("left",$(".pinpai").offset().left);
	$(".fix_m").show();
	var DONTSCROLL = false;//定义一个变量 来让点击导航栏时 内容滚动不影响左侧效果
	$(".fix_ul li").click(function(){
		//判断是否有展示内容为灰色 无点击无效
		if($(this).hasClass("fix_soldout")) return false;
		$(".fix_ul li").removeClass("fix_active");
		$(this).addClass("fix_active");
		var temp = $(this).text();
		if($(this).hasClass("other")){
			temp ="0"; 
			$("#0,#1").addClass("fix_active");
		}
		var content_top = $("#content_" + temp).offset().top;
		DONTSCROLL = true;//内容滚动不影响导航条
		$('body,html').animate({scrollTop: content_top-20},"swing",function(){DONTSCROLL=false;});
		$(".list").css("background-color","#ffffff");
		$("#content_" + temp + " .list").css("background-color","#f4f3f3");
		
	});


	// var content = getClassNames("content","content");
	var content = $(".content");
	$(window).scroll(function(){ //对页面进行滚动监听
		//解决公共头部高度大小 导航栏移动变化
		if($(document).scrollTop()<200){
			// 公共头 导航栏移动
			var diff_top = $(document).scrollTop();
			$(".fix_m").css("top",300-diff_top+"px");
		}else{
			$(".fix_m").css("top","100px");
			// 公共尾部 导航栏移动
			if($(document).scrollTop()>$(".pinpai").offset().top+$(".pinpai").height()-window.screen.availHeight){
				var diff_down = $(document).scrollTop()-$(".pinpai").offset().top-$(".pinpai").height()+window.screen.availHeight;
				$(".fix_m").css("top",100-diff_down*0.8+"px");

			}
		}
		if(DONTSCROLL) return false;
		for(var x = 0; x < content.length ; x++){
			if(content[x].offsetTop<getScrollTop() && content[x].offsetTop+content[x].clientHeight >= getScrollTop()){
				var id = content[x].getAttribute("id");
				str = id.slice(id.indexOf("_")-id.length+1);
				if(str == "0") str="0";
					$(".fix_ul li").removeClass("fix_active");
					$("#"+str).addClass("fix_active");
					if(str == "0"){
						$("#0,#1").addClass("fix_active");
					}
			}
		}
		
	});

	//窗口滚动条高度
	function getScrollTop(){  
	    var scrollTop=0;  
	    if(document.documentElement&&document.documentElement.scrollTop){  
	        scrollTop=document.documentElement.scrollTop;  
	    }else if(document.body){  
	        scrollTop=document.body.scrollTop;  
	    }  
	    return scrollTop;  
	};
	
	//分辨率监听 改变导航栏位置
	$(window).resize(function(){
		$(".fix_m").css("left",$(".pinpai").offset().left);
	});

	$(".list").mouseover(function(){//鼠标移动内容块背景切换
		$(".list").css("background-color","#ffffff");
		$(this).css("background-color","#f4f3f3");
	});

	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) { 
	//代码 
		alert("请更换高版本浏览器");
		$(".list li").mouseover(function(){
			$(".list li").css("background","");
		  $(this).css("background","url('../images/bg.jpg') left center no-repeat");
		});
	} 
});
