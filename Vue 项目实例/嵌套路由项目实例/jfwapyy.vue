<template id="jfwapyy">
  <div>
    <header class="center-block wrapper-outer">
      <h1><img src="../images/jfwapyy/h1.jpg" class="img-responsive" alt="优益生活"></h1>
    </header>
    <div class="center-block wrapper-outer list">
      <div class="list-group clearfix">
        <!-- 插入循环列表 -->
      </div>
    </div>
  </div>
</template>
<script>
  import "../css/bootstrap.min.css";
  import "../css/jfwapyy/index.css";
  export default {
    data:function(){
      return {
      }
    },
    mounted:function(){
      this.setAllTitle("优益生活","优益生活_中国移动积分商城");
      this.addOtherNode("jfwapyy");
    }
  }
</script>
