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

## node.js 模块系统
* exports 对象是当前模块的导出对象，用于导出模块共有方法和属性
* require使用当前模块时得到当前模块的exports对象
* module 通过module对象可以访问到当前模块的一些信息，但最大的用途时替换当前模块的导出对象
* require 加载过程  首先会判断是否在文件模块缓存中，如果不在判断是否是原生模块，不是原生模块，查找文件模块，再根据扩展名加载文件模块并缓存，如果是原生模块，判断是不是再原生模块缓存中，如果不在加载原生模块 然后再进行缓存   如果在文件模块或原生模块任意一种的缓存中，直接加载即可。
* 原生模块 ： 在Node.js源代码编译的时候编译进了二进制执行文件，加载速度最快
* 文件模块 ： 时动态加载的，加载速度比原生模块慢
* require 接受的参数 1.http、fs、path等原生模块 2../mod 等相对路径的文件模块
*3. /pathtomodule/mod 绝对路径的文件魔魁啊 4. mod 非原生模块的文件模块

### exports 和 module.exports 的区别
* exports 相当于快捷方式  而 module.exports相当于源文件  exports 相当于moudle.exports 的引用   而require 只能看到module.exports这个对象，他是看不到exports对象的，我们在编写模块是用到的exports对象实际上只是对module.exports的引用。 

## url 模块
* var url = require("url")
* url.parse()可以将一个完整的URL地址，分为很多部分，常用的有：host、port、pathname、path、query。
*                    url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring.parse(queryString)["foo"]    |
                                            |
                         querystring.parse(queryString)["hello"]

## node.js 路由
* url.parse()可以将一个完整的URL地址，分为很多部分，常用的有：host、port、pathname、path、query。
* var fs = require('fs');fs.readFileSync('123.txt','utf-8');读取文件内容

## Global Object
* __filename   执行文件的绝对路径
* __dirname 执行文件所在文件夹

## console
* console.log("%d" , num)  console.log() console.info console.error
* console.time("message")   执行代码 console.timeEnd("message")   测试执行代码所消耗的时间

## process 控制进程 获取信息 & 调用方法等

## node.js 文件系统
* Node。js文件系统(fs 模块) 模块中的方法均有同步异步两个版本，异步方法最后一个参数为回调函数，回调第一个参数包含错误信息
* 异步比起同步，异步性能更高， 速度更快，没有阻塞
* 异步 fs.readFile()     同步 fs.readFileSync()



