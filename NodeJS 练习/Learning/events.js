/*
	绑定事件， 触发事件
*/


//引入events 模块
var events = require("events");
//创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log("成功调用connected 函数")

	//除服 data_received 事件
	eventEmitter.emit('data_received')
}

//绑定 connection 事件处理程序
eventEmitter.on("connection",connectHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received",function(){
	console.log("成功调用data_received 函数");
})

//触发 connection 事件
eventEmitter.emit("connection");
console.log("执行完毕")
