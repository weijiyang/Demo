var fs = require("fs")
var zlib = require("zlib")

//压缩 input.txt 为 input.txt.gz
// readStream =fs.createReadStream('input.txt')
// readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
// console.log("文件压缩完成");



// 解压
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream("zip.txt"))
console.log("文件解压缩完成");

