# JS 练习
     1. try catch throw 使用场景和方法。
    2. 变量提升 x=5 var x;   与 var x x=5；效果相同js会将变量定义提升到最前面
    3. 当我们调试代码的时候可以不用打开控制台手动找位置，至于要在写代码的时候添加debugger关键字
    4. 正则表达式匹配字符串又很多的函数 search 返回子串起始位置 replace 替换 test返回有无匹配项 exec返回匹配数组
    5. 数字变换为字符串：String  toString  toExponential 对象的值变为指针计数法 toFixed 将数值转换为指定小数位的字符串 toPresion 将数字格式化为指定长度
    6. JS所有数据均使用64位浮点型数据来存储的 对所有变成语言来说 浮点型数据的精确度都很难确定  解决方法就是将浮点型转换为整数进行运算再转换位浮点型。
    7. 字符串不能够换行    不要添加 \
    8. js可以不适用分号结尾  但是出现return 不适用分号容易出现 返回值缺失的情况
    9. if(  typeof(myObj) !== "undefined" && myObj !==null )  判断顺序不可互换否则会报错
    10. isNaN 方法 是判断是否可以转换位数字的函数   NaN 为number类型  为无法转换的标识符 
    11. 阻止表单提交有三种方法   ： 1. onsubmit 函数判断阻止提交 2. submit 按钮 onclick事件阻止提交 3. required = “required”  属性阻止提交 ie9及其版本以下不支持
    12. isNaN   是否能够转换位数字  isFinite  是否为有限数字