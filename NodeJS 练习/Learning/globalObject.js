console.log("运行文件的绝对路径：" + __filename)

console.log("当前文件脚本所在目录：" + __dirname)

//setTimeout(cb,ms)
function printHello(){
	console.log("hello world")
}

//两秒后执行
// var t = setTimeout( printHello , 2000)
// clearTimeout( t )

var t = setInterval(printHello , 2000)
clearInterval(t)

console.log( "this" , "is" ,"console")
console.log("thisis%s" , "console")
console.info( "this" , "is" ,"info")