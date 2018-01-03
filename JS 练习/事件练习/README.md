# JS 事件练习
     js事件冒泡终于知道是什么意思了，一个a标签点击相当于div和其嵌套的全部父级元素均click 而这样的效果不是我们想要的，我们要阻止冒泡，以前的方法是return false; event.preventDefault();但是这两种方法是局限的，这样是能试用于高版本浏览器，像ie和其他低版本浏览器是不支持的，所以又有了stopPropagation 和 cancelBubble等方法。
        ie和dom事件流处理元素的顺序是不同的，ie是冒泡型 小到大，而dom是先捕获后冒泡 大到小再小到大。
        数组合并以前一直是通过数组的遍历方法很笨，今天想起来查了一下。有concat函数可以将两个数组合并为一个数组，提出元素也可使用splice（num,length）。
        Ajax中解析Json eval和parse虽然都能达到解析的效果，但是eval并不会屏蔽js代码，如果字符串中有alert等并不会停止解析，这样对客户对服务器都是危害极大的，所以我们如果使用要用parse ，parse会判断字符串是否合法，合法才会执行。