//阻塞代码案例
var fs = require("fs");

var data = fs.readFileSync('input.txt')

console.log(data.toString())
console.log("程序执行结束")