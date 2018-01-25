<template id="outlink">
    <div>
      这里是内容
      <router-view></router-view>
    </div>
</template>
<!--<template id="brandArea">-->
  <!--<div>-->
    <!--THIS IS TEMP brandArea-->
  <!--</div>-->
<!--</template>-->
<!--<template id="hfty">-->
  <!--<div>-->
    <!--THIS IS TEMP hfty-->
  <!--</div>-->
<!--</template>-->
<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import Brandarea from './html/brandArea';
//  import Hfty from './html/hfty'
  Vue.use(VueRouter);
//  var Hfty = {template : "#hfty"}
//  var BrandArea = {template : "#brandArea"}
  const  routes = [
        { path : '/brandArea',component: Brandarea}
      ];
  const  router = new VueRouter({
        routes
  });
  const app = new Vue({
    router
  })


</script>

