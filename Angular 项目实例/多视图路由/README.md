# 多视图路由实现
    由于angular路由指支持一个ng-view ， 而在我们的项目中我们需要三个视图窗口，来盛放公共头、公共尾、和变化的页面部分，而前两个不需要变动。所以我们就需要用到angular-ui-router中的嵌套路由的概念。

    下面我们来做一个demo。



# 知识点
    <!-- href 绑定的是超链接 -->
            <!-- <li><a href="#/first">first</a></li>
            <li><a href="#/second">second</a></li> -->

            <!-- ui-sref 绑定的是模块名 -->
            <li><a ui-sref="content_first">first</a></li>   
            <li><a ui-sref="content_second">second</a></li>