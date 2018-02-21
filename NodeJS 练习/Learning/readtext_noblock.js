var fs = require("fs")

fs.readFile('input.txt',function( err , data ){
	if(err) return console.error(err)
		console.log( data.toString(undefined,0,5) );
})

console.log("程序执行结束")