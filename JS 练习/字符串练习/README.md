# JS 字符串练习
    字符串的属性方法：
            属性 : length prototype constructor
            方法：charAt 获取指定位置字符
                        charCodeAt 返回指定位置ASCII码
                        concat 合并字符串
                        fromCharCode 返回指定ASCII码的字符
                        indexOf 是否含有指定字符返回正序第一个位置
                        lastIndexOf 是否含有指定字符返回反序第一个位置
                        match  返回匹配数组
                        
                                search 和indexOf的区别主要是search 搜索的是正则表达式
                               search 和test 的区别，search  是字符串的方法，test 是正则RegExp 对象的方法。
                               search 和 match 的区别 search只在乎有无匹配项并返回位置   match以数组的形式返回所有的对象