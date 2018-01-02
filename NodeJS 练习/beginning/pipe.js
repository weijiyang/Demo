//管道流

var fs = require("fs");

//创建一个可读流
var readerStream = fs.createReadStream("index.txt");

//创建一个可写流
var writeStream = fs.createWriteStream("output.txt");


//管道读写操作
//读取index.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writeStream);


console.log("程序执行完毕~");





//链式流   压缩

var fs = require("fs");
var zlib = require("zlib");

//压缩  input.txt 文件为 index.text.gz
fs.createReadStream('index.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('index.txt.gz'));

console.log('文件压缩完成');




//解压操作
var fs=require("fs");
var zlib = require("zlib");

//解压 index.txt.gz 文件为other.txt
fs.createReadStream('index.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('other.txt'));


	console.log("文件解压完成~");

