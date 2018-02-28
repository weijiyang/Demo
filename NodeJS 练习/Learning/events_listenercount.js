//这个demo 主要是为了验证 emitter.on 和 emitter.addListener 的区别。

var events = require('events')
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log("监听器 listener1 执行");
}

var listener2 = function listener2(){
	console.log("监听器 listener2 执行");
}

eventEmitter.addListener('connection',listener1)

eventEmitter.on('connection',listener2)

var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection')

console.log(eventListeners + " 个监听器监听链接事件")

eventEmitter.emit("connection")

eventEmitter.removeListener("connection",listener2)
console.log("listener2不再受监听")
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听链接事件")

console.log("程序执行完毕")