var fs = require("fs")

fs.stat('input.txt',function(err , stats){

	if(err){
		return console.error(err)
	}

	console.log(stats)
	console.log("文件读取成功")


	// 检测文件类型
	console.log("是否是文件",stats.isFile())
	console.log("是否是目录",stats.isDirectory())
	console.log("是否是块设备",stats.isBlockDevice())
	console.log("是否是字符设备",stats.isCharacterDevice())
	console.log("是否是软连接",stats.isSymbolicLink())
	console.log("是否是FIFO,UNIX中一种特殊类型命令管道",stats.isFIFO())
	console.log("是否是Socket",stats.isSocket())
})