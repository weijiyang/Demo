# ScrollTop 获取差异
     ie 6-10： 对于没有doctype声明的页面 可以使用docment.body.scrollTop
                    对于有doctype 声明的页面可以使用 document.documentElement.scrollTop
    saferi ： 使用window.pageYOffset
    firefox：使用document.documentElement.scrollTop

    所以完美的解决方案：
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

# 单例模式
    今天完成Google 和 Firefox 浏览器js调试 总结之后，在网上看到了单例模式这个词，单例模式也叫做单子模式是一种常用的软件设计模式。在这个设计模式中只允许出现一个实例，而在我们的开发过程中也有相应的应用场景，例如定义全局变量等，而我们一些配置信息不可能都用全局变量来实现，所以就用到了单例模式。单利模式大致有四种实现方法，饿汉式  懒汉式 双重检测 静态内部类  每种方法都有各自的优点和缺点，我们一般采用饿汉式 如果对资源利用十分在意就采用双重检测 而另外两种不建议采用。这四种方法 实现的步骤大致相同 
    1.创建私有构造函数来确保只有一个实例初始化  
    2. 私有静态引用指向自己实例 这是为了以防没有实例而不至于出错返回null 3.返回自己实力的公有静态方法。