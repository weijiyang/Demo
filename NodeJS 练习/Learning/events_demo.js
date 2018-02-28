var event = require("events")
var emitter = new event.EventEmitter()
emitter.on("func",function( arg1 ,arg2){
	console.log("这里调用第一个方法");
})
emitter.on("func",function( arg1 ,arg2){
	console.log("这里调用第二个方法");
})
emitter.emit("func");