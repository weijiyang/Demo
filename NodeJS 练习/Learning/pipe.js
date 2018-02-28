var fs = require("fs")
var readStream = fs.createReadStream()
var writeStream = fs.createwriteStream()

readStream.pipe(writeStream)

coonsole.log("程序执行完毕");