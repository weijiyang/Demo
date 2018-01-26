# 实时监听
## oninput
    这个是标准浏览器的事件，一般浏览器都支持。当 input 的 value 发生变化时就会发生，无论是键盘输入还是鼠标粘贴的改变都能即时监听到。
## propertychange
    由于 IE9 以下是不支持的 oninput 事件。这个时候就要用到IE专有的 propertychange 事件。顾名思义，翻译过来叫属性变更事件。 这个事件就比较强大了，不仅仅会监听到 input 的value 属性，还包括其他的标签属性。各种属性发生变化都会产生该事件，比如 span 元素的 style 属性改变。同时在事件发生时还可以用 event.propertyName 访问到改变的属性名。
    