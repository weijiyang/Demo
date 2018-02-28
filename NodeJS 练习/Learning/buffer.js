
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10)

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('test');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');



//写入缓冲区
var buf = Buffer.alloc(256)
len = buf.write("weijiyang is so handsome")
console.log("写入字节数：" + len)

//从缓冲区读取数据
console.log( buf.toString('ascii'))
console.log( buf.toString('ascii',0,5 ))
console.log( buf.toString('utf-8',0,5 ))
console.log( buf.toString(undefined,0,5 ))

//将Buffer转换为JSON对象

//缓冲区和并
var buffer1 = Buffer.from('weijiyang ')
var buffer2 = Buffer.from('zhendishuai')
var buffer3 = Buffer.concat([buffer1,buffer2])
console.log("buffer3 内容：" + buffer3.toString())