$(function(){
	//初始化瀑布流形式排列内容区域   
	showList();
	//初始化页面调用加载动画
	beginLoading();
	var loadingId = '';//loading动画定时器
	var current = 0;//动画旋转角度
	//Loading 加载动画
	function beginLoading(){
		loadingId  = setInterval(function(){
			current += 10;
			$(".zq_load img").css("transform",'rotate(' + current + 'deg)');
		},50);
	};
	//Loading 加载动画停止
	function endLoading(){
		clearInterval(loadingId);
		$(window).scrollTop($(window).scrollTop()-50);
		$(".zq_load").hide();
	};

	//滚动监听 判断是否调用滚动加载机制
	$(window).scroll(function(){
		var bottomHeight=getScrollHeight()-getScrollTop()-getClientHeight(); 
		if(bottomHeight < 50 ){
			//在这里进行是否还有待展示数据判断
			$(".zq_load").show();
			addNewList();
			showList();
		}
		// else{
		// 	//数据加载完成调用进行加载动画隐藏
		// 	$(".zq_load").hide();
		// }
	});

	function addNewList(){
		//这里进行数据的请求添加
			var str = "<li><div class='content_div content_div_begin'><img src='images/good_1.jpg' /><div class='content_title'><span class='fl clearfix'>智能后视镜</span><div class='fl clearfix unlike' ></div></div><p>专用宿主机 （Cvm Dedicated Host ）可以让您以独享宿主机资源方式购买、创建云主机，以满足您的资源独享、安全、</p><div class='content_button unorder'><a href='javacript:;'>购买</a><a href='javacript:;'>加入购物车</a></div></div></li>";
		for(var i = 0 ;i<8 ;i++){
			var t = $(".zq_content ul").append(str);
		};
		// 为新添加的节点进行延迟移除class样式操作来达到放大的效果
		setTimeout(function(){
			$(".zq_content li div").each(function(){
				$(this).removeClass("content_div_begin");
			});
		},100);
		
	};
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
	//窗口可视范围高度
	function getClientHeight(){  
	    var clientHeight=0;  
	    if(document.body.clientHeight&&document.documentElement.clientHeight){  
	        clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;          
	    }else{  
	        clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;      
	    }  
	    return clientHeight;  
	};
	//文档内容实际高度
	function getScrollHeight(){  		
		    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);  		
	};		




	//获取全部的列表元素
	function showList(){
		var allArr = $(".zq_content li");
		getMinHeightOfCols(allArr,4);

	};
	// 方法:将数组前四个按照顺序排放 同时遍历后面节点依次插入前面最小高度节点下并合并
	function getMinHeightOfCols(childArr , num){
		var onlyOneColsArr = [];
		var maxHeight;//获取最大高度给父元素赋值
		for(var i =0 ; i<childArr.length ; i++){
			if(i < num){
				//num为传进来的参数, 即为每行放图片的张数, 此步骤的目的是为了将第一行每张图片的高度遍历出来存放如新数组
				onlyOneColsArr[i] = childArr[i].offsetHeight;
			}else{
				//当大于每行存放的图片个数时进入该方法, Math.min.apply这个方法是为了得到数组中的最小值
				var minHeightOfCols = Math.min.apply(null , onlyOneColsArr);
				//此方法的目的是为了得到最小高度图片的下表, 也就是在每行的第几张, 具体方法见下面
				var minHeightOfIndex = getMinIndex(onlyOneColsArr,minHeightOfCols);
				childArr[i].style.position = "absolute";
				childArr[i].style.top = minHeightOfCols + "px";
				childArr[i].style.left = childArr[minHeightOfIndex].offsetLeft + "px";
				onlyOneColsArr[minHeightOfIndex] += childArr[i].offsetHeight ;
				maxHeight = onlyOneColsArr[minHeightOfIndex] ;
			}
		}
		// $(".zq_content").css("height",maxHeight+"px");
		$("zq_load").hide();
	}
	// 用来获取最小高度的下标
	function getMinIndex(onlyOneColsArr , min){
		//遍历传进来的高度数组
		for(var i in onlyOneColsArr){
			//如果高度等于最小高度, 返回i即为该图片下标
			if(onlyOneColsArr[i] == min ){
				return i;

			}
		}
	}

	






	//爱心点击切换效果
	$(document).on("click",".content_title div",function(){
		if($(this).css("backgroundImage").indexOf("unlike")>=0){
			$(this).removeClass("unlike");
			$(this).addClass("like");
		}
		else{
			$(this).removeClass("like");
			$(this).addClass("unlike");
		}
	});


	//搜索框起始内容点击清空
	$(".search input").focus(function(){
		if($(this).val()=="搜索解决方案"){
			$(this).val("");
		}
	});

	//产品 、 解决方案点击面板切换
	$(".zq_nav li").click(function(){
		$(".zq_cp li").removeClass("chosecp");
		$(".zq_cp li:nth-child(1)").addClass("chosecp");
		$(".zq_nav li").removeClass('choseNav');
		$(this).addClass("choseNav");
		showList();
		if($(this).text()=="产品"){
			$(".cp").show();
			$(".jjfa").hide();
		}else{
			$(".cp").hide();
			$(".jjfa").show();
		}
	});

	//二级栏目效果切换
	$(".zq_cp li").click(function(){
		$(".zq_cp li").removeClass("chosecp");
		$(this).addClass("chosecp");
		if($(this).is(".showTip")){
			$(".zq_tip").show();
		}
		else{
			$(".zq_tip").hide();
		}	
	});

	//三级栏目效果切换
	$(".zq_tip li").click(function(){
		$(".zq_tip li").removeClass("chosetip");
		$(this).addClass("chosetip");
	});

	

});