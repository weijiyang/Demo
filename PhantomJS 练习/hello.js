// var page = require('webpage').create();
// phantom.outputEncoding = "gtk";
// page.open("http://cnblogs.com/front-Thinking" , function(status){
// 	if(status ==="success"){
// 		console.log(page.title);
// 	}else{
// 		console.log("Page failed to load");
// 	}
// 	phantom.exit(0);
// });
// function add(a , b){
// 	return a + b ;
// }

// console.log(add(1,2));
// phantom.exit();



// //open方法默认使用GET请求
// var page = require("webpage").create();
// page.open("https://www.baidu.com/",function(s){
// 	console.log(s);
// 	phantom.exit();
// });



// //open方法使用其他方法请求
// var page = require("webpage").create();
// var postBody = "user=username&password=password";

// page.open("https://www.baidu.com/",'POST',postBody,function(status){
// 	console.log("Status:" + status );
// 	phantom.exit();
// })


//open 方法还允许提供配置对象，对HTTP进行更加详细的介绍
// var page = require('webpage').create();
// var setting = {
// 	operation: 'POST',
// 	ecncoding:'utf8',
// 	header:{
// 		"Content-Type":"application/json"
// 	},
// 	data:JSON.stringify({
// 		some:"data",
// 		another:["custom","data"]
// 	})
// };
// page.open("http://www.baidu.com/",setting,function(status){
// 	console.log("Status:"+ status);
// 	phantom.exit();
// })

// //evaluate
// var page = require('webpage').create();
// page.open("http://www.baidu.com/",function(status){
// 	var title = page.evaluate(function(){
// 		// return document.title;
// 		console.log(123);//evaluate console.log默认不会显示再命令行
// 	})
// 	console.log('Page title is ' + title );
// 	phantom.exit();
// })

// //evaluate  改写
// var url = "index.html";
// var page = require('webpage').create();

// page.onConsoleMessage = function(msg){
// 	console.log("Page title is : " + msg);
// };

// page.open(url,function(status){
// 	page.evaluate(function(){
// 		console.log(document.title);	
// 	})
// 	phantom.exit();
// })



// //includeJs
// var page = require('webpage').create();
// page.onConsoleMessage = function(msg){
// 			console.log("内容为：" + msg);
// 		}
// page.open('index.html', function(){
// 	page.includeJs("alert.js",function(){
// 		page.evaluate(function(){						
// 				console.log(document.getElementById('button').innerHTML);		
// 		});
// 		phantom.exit();
// 	});
// });


//render    截图汉字 背景默认均为黑色  如果页面没有规定颜色则为纯黑
// var page = require('webpage').create();
// page.viewportSize = {width:120,height:180};
// page.open("index.html",function start(status){
// page.render('temp_home.jpeg',{format:'jpeg',quality:'100'});
// phantom.exit();
// });


// var webPage = require('webpage');
// var page = webPage.create();

// page.viewportSize = { width: 1920, height: 1080 };
// page.open("index.html", function start(status) {
//   page.render('google_home.jpeg', {format: 'jpeg', quality: '100'});
//   phantom.exit();
// });




// //viewportSize属性 制定浏览器视口的大小，网页加载出事浏览器窗口大小
// var page = require('webpage').create();
// page.viewportSize = { width:480, height:800};//height 为必要字段



// // zoomFactor
// page.zoomFactor = 0.25 ;
// page.render('zoomFactor.png');




// // onResourceRequested   获取页面请求资源

// var page = require('webpage').create();
// page.onResourceRequested = function(requestData , networkRequest){
// 	console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
// }
// page.open("index.html",function(status){
// 	console.log(status);
// })


// //onResourceReceived

// var page = require('webpage').create();
// page.open("index.html",function(status){
// 	console.log("INDEX 请求：" + status );
// 	phantom.exit();
// })
// page.onResourceReceived = function(response){
// 	console.log('Response(#' + response.id + ',stage"' + response.stage + '"):' + JSON.stringify(response));
// }





// //system模块 可以加载操作系统变量， system.args 就是参数数组
// //命令行：$ phantomjs page.js http://www.google.com
// var page = require('webpage').create();
// var system = require('system');
// var t , address ;

// //如果命令行没有给出网址
// if(system.args.length ===1 ){
// 	console.log("usage : alert.js <some  url>");
// 	phantom.exit();
// }


//  t = Date.now();
//  address = system.args[1];
//  page.open(address,function(status){
//  	if(status !== 'success'){
//  		console.log('FAIL TO LOAD THE ADDRESS');
//  	}else{
//  		t = Date.now() - t ;
//  		console.log('Loading time :' + t + 'ms');
//  	}
//  	phantom.exit();
//  });


//过滤资源
var page = require('webpage').create();

page.onResourceRequested = function(requestData , request){
	if((/http:\/\/.+?\.css$/gi).test(requestData["url"])){
		console.log('Skipping', requestData['url']);
		request.abort();//中断连接
	}
}









//模仿用户点击事件 1.sendEvent  phantomJS 2.DOM触发器

