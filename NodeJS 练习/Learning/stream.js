
/*
 Stream 模块  可读流
*/

// var fs = require("fs")
// var data = ""

// //创建可读流
// var readerStream = fs.createReadStream('input.txt')

// //设置编码为 utf8
// readerStream.setEncoding('UTF8')

// //处理流事件 data，end，and error
// readerStream.on('data',function(chunk){
// 	data += chunk ;
// })

// readerStream.on('end',function(){
// 	console.log(data)
// })

// readerStream.on('error',function(error){
// 	console.log(err.stack)
// })

// console.log("程序执行完毕")

/*
Stream 写入流
*/
var fs = require("fs")

var data = "this is a message"
//创建一个可以写入的流
var writeStream = fs.createWriteStream('outinput.txt')
//使用urf编码写入
writeStream.write(data,'UTF8')
//标记文件末尾
writeStream.end("lala")

//处理流事件 data end and error
writeStream.on("finish",function(){
	console.log("写入完成")
})

writeStream.on('error',function(err){
	console.log(err.stack)
})
console.log("程序执行完毕")