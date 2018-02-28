# Node.js 学习知识点记录
## events模块
* 引入events模块 var events = require('events')
* 创建eventEmitter 对象 var eventEmitter = new events.EventEmitter()
* 绑定事件处理程序 eventEmitter.on("eventName",eventHandler)
* 触发事件 eventEmitter.emit("eventName")
* 为事件添加链接事件方法有两种 eventEmitter.on & eventEmitter.addListener ，这两种方法没有区别，都可以使用 eventEmitter.removeListener进行移除，和eventEmitter.listenerCount 查看绑定的链接事件个数。
### tips
* EventEmitter 支持若干个事件监听器，当事件出发时可根据顺序依次调用 详情见 events_demo.js
* EventEmitter 属性除上面常用的on 和 emit 外 还有 addListener(event,listener) 为指定事件添加一个监听器到监听器数组的尾部  once(event,(lisener)) 单次监听器触发一次后解除监听 removeListener(event,listener) 移除指定事件的监听器

## buffer缓冲区
* Buff.alloc( 缓冲区大小 )  Buff.from( 内容 ) 两种缓冲区创建方式
* Buff.write() 缓冲区写入
* Buff.toString(‘编码类型’，length) 缓冲区读取
* JSON.stringify 会隐式调用 Buff.toJSON()
* buf.compare()  缓冲区对比
* buf.copy(target,targetStart,sourceStart,sourceEnd)缓冲区拷贝
* buf.slice(start , end) 缓冲区裁剪

## stream 数据流
* var fs = require("fs")  data = "";
* 创建可读流  var readStream = fs.createReadStream("input.txt");
* 设计编码 readerStream.setEncoding('UTF8')
* 处理流事件 data 有数据可读时触发、end没有更多数据可读时触发、error在发生错误时触发、finish 在所有数据已被写入到底层系统时触发
* 创建可写流 var writeStream = fs.createWriteStream()
* 写入文件 writeStream.write(data , 'URF8')
* 写入结束 writeStream.end(内容) 标记文件末尾
* readStream.pipe(writeStream) 时结合可读流和 可写流的操作，更简洁
* 链式流 指的是通过链接输出流到另外一个或多个流操作，一半多是管道操作 fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
