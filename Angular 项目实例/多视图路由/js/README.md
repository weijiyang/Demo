# 路由说明
    app.js 实现了ui-router 路由
    controller.js 实现了 解决页面与公共头尾rem冲突问题
        解决思路：
            将内部嵌套页面 rem 单位换成em 同时 使用js动态控制body的font-size
            （rem 是依据html font-size 来改变比例的，而em则是根据body）