$(function(){
	var contentArr = [];
	$(".content").each(function(){
		var li_content = {
			"id" : $(this).attr("id").slice($(this).attr("id").indexOf("_")-$(this).attr("id").length+1),
			"offsetTop" : $(this).offset().top,
			"clientHeight": $(this).height()			
		};
		contentArr.push(li_content);
	});
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
		DONTSCROLL = true;//内容滚动不影响导航条
		$('body,html').animate({scrollTop: $("#content_" + temp).offset().top-20},"swing",function(){DONTSCROLL=false;});
		$(".list").css("background-color","#ffffff");
		$("#content_" + temp + " .list").css("background-color","#f4f3f3");
		
	});



	var pinpai_top = $(".pinpai").offset().top;
	var pinpai_height = $(".pinpai").height();
	var window_availHeight = window.screen.availHeight;
	var height_tip = pinpai_top+pinpai_height-window_availHeight;


	//防抖动函数
	function debounce(func , wait , immediate){
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(func,wait);
		}
	}
	//绑定在滚动事件上的函数
	function scrollFuc(){
		console.log(123);
		var diff_top = getScrollTop();
		//解决公共头部高度大小 导航栏移动变化
		if(diff_top < 1507){
			// 公共头 导航栏移动
			// $(".fix_m").css("top",1607-diff_top+"px");
			document.getElementById("fix_m").style.top = 1607-diff_top+"px";
		}else{
			// $(".fix_m").css("top","100px");
			document.getElementById("fix_m").style.top = "100px";
			// 公共尾部 导航栏移动
			if(diff_top>height_tip){
				var diff_down = diff_top-height_tip;
				// $(".fix_m").css("top",100-diff_down*0.8+"px");
				document.getElementById("fix_m").style.top = 100-diff_down*0.8+"px";
			}
		}
		if(DONTSCROLL) return false;
		for(var x = 0; x < contentArr.length ; x++){
			if(contentArr[x].offsetTop<diff_top && contentArr[x].offsetTop + contentArr[x].clientHeight >= diff_top){
				var str = contentArr[x].id;
				if(str == "0") str="0";
				if($("#" + str).hasClass("fix_soldout"))  continue;

				$(".fix_ul li").removeClass("fix_active");
				// var classVal = document.getElementById(str).getAttribute("class");
				// classVal += " fix_active";
				// document.getElementById(str).setAttribute("class" , classVal);
				$("#"+str).addClass("fix_active");
				if(str == "0"){
					// var classVal = document.getElementById("0").getAttribute("class");
					// classVal += " fix_active";
					// document.getElementById("0").setAttribute("class" , classVal);
					// document.getElementById("1").setAttribute("class" , classVal);
					$("#0,#1").addClass("fix_active");
				}
				break;
			}
		}
	}

	//采用防抖动处理scroll函数
	$(window).scroll(function(){
		$("body").addClass("disable-hover")
		debounce(scrollFuc,50)();
		$("body").removeClass("disable-hover")
	});

	// $(window).scroll(function(){ //对页面进行滚动监听
	// 	var diff_top = getScrollTop();
	// 	//解决公共头部高度大小 导航栏移动变化
	// 	if(diff_top < 1507){
	// 		// 公共头 导航栏移动
	// 		$(".fix_m").css("top",1607-diff_top+"px");
	// 	}else{
	// 		$(".fix_m").css("top","100px");
	// 		// 公共尾部 导航栏移动
	// 		if(diff_top>pinpai_top+pinpai_height-window_availHeight){
	// 			var diff_down = diff_top-pinpai_top-pinpai_height+window_availHeight;
	// 			$(".fix_m").css("top",100-diff_down*0.8+"px");
	// 		}
	// 	}
	// 	if(DONTSCROLL) return false;
	// 	for(var x = 0; x < contentArr.length ; x++){
	// 		if(contentArr[x].offsetTop<diff_top && contentArr[x].offsetTop + contentArr[x].clientHeight >= diff_top){
	// 			var str = contentArr[x].id;
	// 			if(str == "0") str="0";
	// 			if($("#" + str).hasClass("fix_soldout"))continue;

	// 			$(".fix_ul li").removeClass("fix_active");
	// 			$("#"+str).addClass("fix_active");
	// 			if(str == "0"){
	// 				$("#0,#1").addClass("fix_active");
	// 			}
	// 		}
	// 	}
		
	// });

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

	// if ($.browser.msie && ($.browser.version == "7.0") && !$.support.style) { 
	// //代码 
	// 	alert("请更换ie8及以上高版本浏览器");
	// 	$(".list li").mouseover(function(){
	// 		$(".list li").css("background","");
	// 	  $(this).css("background","url('../images/bg.jpg') left center no-repeat");
	// 	});
	// } 
});
