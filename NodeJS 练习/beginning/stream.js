var fs = require("fs") ;
var data = "";

// 创建可读流
var readerStream = fs.createReadStream("index.txt");

// 设置编码为UTF-8
readerStream.setEncoding('UTF8');

// 处理流事件 --》data end and error
readerStream.on('data', function(chunk){
	data += chunk;
});


readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error' , function(err){
	console.log(err.stack);
});


console.log("执行完毕~");





//写入流
var fs = require("fs");
var data = "魏继阳你真TM帅";

//创建一个可以写入的流，写入到文件output.txt 中
var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writeStream.write(data,'UTF8');

// 标记文本末尾
writeStream.end();

//处理流事件   data end  and  error
writeStream.on('finish', function(){
	console.log("写入完成");
});

writeStream.on('error' , function(err){
	console.log(err.stack);
});

console.log("程序执行完毕~");


