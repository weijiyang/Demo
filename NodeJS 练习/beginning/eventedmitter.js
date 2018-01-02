var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器#1
var listener1 = function listener1() {
	console.log("监听器 listerner1 执行");
}

//监听器#2
var listener2 = function listener2() {
	console.log("监听器 listerner2 执行");
}



//绑定  connection 事件，处理函数为listener1
eventEmitter.addListener("connection", listener1);

//绑定  connection 事件 ，处理函数为listener2
eventEmitter.on("connection" , listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器监听链接事件。");

//处理 connection 事件
eventEmitter.emit('connection');

//移除监听绑定的  listener1 函数
eventEmitter.removeListener("connection",listener1);
console.log("listener1 不在接受监听~");


//触发连接事件
eventEmitter.emit("connection");

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器监听链接事件。");


console.log("程序执行完毕");


// //定义error错误事件
// var error =  require('events');
// var erroremitter = new error.EventEmitter();
// erroremitter.emit('error');
