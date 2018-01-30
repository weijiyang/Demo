Vue.component('todo-item', {
  props: ['todo'],//从父级传过来的属性
  template: '<li>{{ todo.text }}</li>'
})

