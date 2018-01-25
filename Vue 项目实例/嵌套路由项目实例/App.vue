<template>
  <div>
    <div id="firstView">
      <com-head :menuType="headType"></com-head>
      <router-view></router-view>
      <com-foot isShowFooter='0' isShowHomeBtn='0'></com-foot>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import comHead from '../../components/commonHead/comHead';//公共头部
  import comFoot from '../../components/commonFoot/comFoot';//公共底部
  import "./css/public.css";//引入公共css
  Vue.prototype.setAllTitle = function(commonTitle , htmlTitle){
    this.$parent.headType.cTitle = commonTitle ;
    document.title = htmlTitle ;
  };
  Vue.prototype.setRem = function() {
    var body = document.querySelector("body");
    var width = body.getBoundingClientRect().width;
    body.style.fontSize = width / 15 + "px";
  };
  export default {
    data:function(){
      return {
        commonTitle : "***",
        headType:{
          cTitle:'',//标题
          type:'0', //头部类型
          mType:{//右侧按钮类型
            type:'0'
          }
        }
      }
    },
    components:{
      comHead,
      comFoot
    },
    methods:{
    },
    mounted:function(){
      //带头页尾部居底
      document.getElementById("firstView").style.minHeight = window.screen.height + 'px';
    }
  }
</script>
