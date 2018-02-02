<my-component
 	v-for="(item,index) in items"
 	v-bind:item = "item"
 	v-bind:index = "index"
 	v-bind:key = "item.id">
</my_component>

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})
