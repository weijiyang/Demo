# webpack 个人总结
    1. webpack 的安装 ，命令行中输入npm install --save-dev webpack 可将环境搭建到项目中，而这一命令行又有很多值得推敲的地方。
          1.1  首先是npm 我们使用npm 进行环境加载耗时很长  于是找到了npm的淘宝镜像方法cnpm
                    npm install -g cnpm --registry=https://registry.npm.taobao.org
           1.2 然后是 --save-dev  和 -dev的区别，  前者是你开发时候依赖的东西，而后者是你发布之后还依赖的东西。
    2. 而我们打包方式也比较简单  webpack  目标文件相对路径   输出文件相对路径 但是这样我们如果有很多文件打包会很麻烦，所以我们又有了后续的事情。
    3. webpack默认会调用webpack.config.js 文件 这里面可以定义很多的东西  目标文件一个或多个   输出文件一个或者多个  为了防止出现缓存问题也可以 使用 [name]-[hash]方法  文件出现不同将会创建不同的文件
    4. package.json 是创建目录后 cnpm init 创建的  ，而这个文件里主要是存储一些打包信息和简洁的命令操作等。
    5. webpack 强大之处在于可以生成soucemap方便后续调试，而且还可以构建本地服务器，而且操作很简单 只需要命令行中输入
    
    6.Loader这个功能也很强大，他可以转换scss文件变为css，同时也可以转换ES6，7到现代浏览器兼容的JS文件，但是这一部分我只实现了css转化打包，后面想再看看ES6,7。
    7.webpack最吸引我的一点是他有大的插件库可以用，网友也提供了很多。自带的我认为好用的插件有 BannerPlugin（进行打包备注）、 HtmlWebpackPlugin ( html 模板生成静态页注入打包后的文件 可以进行参数设置来删除注释、压缩等)、UglifyJsPlugin（进行JS文件的压缩和删除注释等操作）。