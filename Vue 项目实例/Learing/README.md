# vue练习知识点汇总
* computed 设置的函数 ，可以看作是对Vue声明的一个属性 增添的getter方法。而声明该属性会与其用到的其他变量产生依赖关系，如果更改使用到的依赖变量，则会重新更新该方法。
* computed 和 methods 的不同点 ，第一点computed 是将函数绑定为定义属性的getter方法，所以只需要vm.computed 来调用，而methods 则需要vm.methods()来调用。第二点 ，computed 是依照依赖关系进行缓存的，虽然页面刷新效果相同，但是如果同时给computed 和methods 方法 return Date.now() 的话，更改变量值，methods 会一直调用，而 computed因为没有依赖其他变量，所以依然返回旧时间。
* computed 内部定义的属性 可以设置get set 方法，应该是内部封装了Object.defineProperty方法。
* computed虽然大多数情况下相对watch比较合适，但是有时候需要一些自定义侦听器，当数据变化时执行异步过开销较大的操作时，这个方式最有用 。使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。除了 watch选项之外，您还可以使用命令式的 vm.$watch API。