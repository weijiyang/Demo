# Node.js 学习知识点记录
## events模块
* 引入events模块 var events = require('events')
* 创建eventEmitter 对象 var eventEmitter = new events.EventEmitter()
* 绑定事件处理程序 eventEmitter.on("eventName",eventHandler)
* 触发事件 eventEmitter.emit("eventName")
### tips
* EventEmitter 支持若干个事件监听器，当事件出发时可根据顺序依次调用 详情见 events_demo.js
* EventEmitter 属性除上面常用的on 和 emit 外 还有 addListener(event,listener) 为指定事件添加一个监听器到监听器数组的尾部  once(event,(lisener)) 单次监听器触发一次后解除监听 removeListener(event,listener) 移除指定事件的监听器