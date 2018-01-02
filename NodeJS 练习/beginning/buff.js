//创建长度为10的Buffer实例
var buf = new Buffer(10);
var bufa = new Buffer([10,20,30,40]);
var bufb = new Buffer("www.runoob.com",'utf-8');

//写入缓冲区   *write方法返回字符串长度
buf = new Buffer(256);
len = buf.write("wei ji yang zhen de shuai ");
console.log(len);

//从缓冲区读取
buf = new Buffer(26);
for (var i = 0; i <26 ; i++){
	buf[i]= i +97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//将Buffer 转换为JSON对象
var json = buf.toJSON();
console.log(json);


//将Node缓冲区合并

var buffer1 = new Buffer("weijiyang") ;
var buffer2 = new Buffer("zhen") ;
var buffer3 = new Buffer("shuai") ;
var buffer = Buffer.concat([ buffer1 , buffer2 , buffer3]);
console.log("Buffer 内容： " + buffer);




缓冲区比较
var buffer1 = new Buffer('ABCd');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0){
	console.log(buffer1 + '在' + buffer2 + '之前');
}
else if(result ==0){
	console.log(buffer1 + "与" + buffer2 + "相同");
}
else{
	console.log(buffer1 + "在" + buffer2 + "之后");
}


拷贝缓冲区
var buffer1 = new 	Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content:" + buffer2.toString());


裁剪缓冲区
var buffer = new Buffer("dashuaibi");

var buffer1 = buffer.slice(0,2);
console.log("buffer2 content: " + buffer1.toString());



//缓冲区长度
var buffer = new Buffer("zhentmdeshuai");
console.log("buffer.length: " + buffer.length);

