// //输出全局变量  ——filename 的值

// console.log("模块文件的路径"+ __filename );//返回的值是模块文件的路径。

// console.log("当前执行脚本所在目录"+ __dirname);

// //setTimeout(cb , ms)
// function printHello() {
// 	console.log("Hello World");
// }
// //两秒后执行以上函数
// var t = setTimeout(printHello , 2000);
// //清除定时器
// clearTimeout( t );


// //setInterval(cb , ms)
// setInterval(printHello,2000);



// console.log("weijiyang%dzhale");
// console.log("weijiyang%szhale","shuai")


// console.info("程序开始执行:");

// var counter = 10 ;
// console.log("计数：%d" , counter);

// console.time("获取数据"); //输出时间，表示开始计时

// //执行代码

// console.timeEnd("获取数据"); //结束时间，表示计时结束

// console.info("程序执行完毕");




//输出到终端
process.stdout.write("Hello World!" + "\n");

//通过参数读取
process.argv.forEach(function(val , index , array){
	console.log(index  + ': ' + val);
});


//获取执行路径
console.log(process.execPath);

//平台信息
console.log(process.platform);


//输出当前目录
console.log('当前目录: ' + process.cwd() );


//输出当前版本
console.log('当前版本:' + process.version);

//输出内存使用情况
console.log(process.memoryUsage());
