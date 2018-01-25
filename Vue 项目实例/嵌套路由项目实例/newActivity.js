import Vue from 'vue';
import VueRouter from 'vue-router';
import $ from 'jquery';
import App from './App';
import brandArea from './html/brandArea';
import hfty from './html/hfty';
import zywl from './html/zywl';
import khjlb from './html/khjlb';
import mgmb from './html/mgmb';
import mgmusic from './html/mgmusic';
import jfwapflyco from './html/jfwapflyco';
import jfwapjoyoung from './html/jfwapjoyoung';
import jfwapmi  from './html/jfwapmi';
import jfwapmidea from './html/jfwapmidea';
import jfwappaulfrank from './html/jfwappaulfrank';
import jfwapsamsonite from './html/jfwapsamsonite';
import jfwapsupor from './html/jfwapsupor';
import jfwapvinda from './html/jfwapvinda';
import jfwapzwilling from './html/jfwapzwilling';
import jfwappanasonic from './html/jfwappanasonic';
import jfwapphilips from './html/jfwapphilips';
import jfwapyy from './html/jfwapyy';
Vue.use(VueRouter);
// Vue.prototype.say = function(){console.log("这里是调用信息");}
Vue.prototype.addOtherNode = function( dataName ){
  $.getJSON('./newActivity/js/'+ dataName +'/data.json', function (data) {
    var goods = data.goods;
    var con = '';
    $.each(goods, function (j) {
      var i = j + 1;
      if (j < 9) {
        i = '0' + i;
      }
      if (goods[j].bigPic == 1) {
        con += '<section class="list-group-item col-xs-12">';
        con += '  <a href="" @click="clickObjLink(\'' + goods[j].url + '\')" title="' + goods[j].name + '"><img src="../images/' + dataName + '/list-' + i + '.jpg" class="img-responsive" alt="' + goods[j].name + '"></a>';
        con += '</section>';
      } else {
        con += '<div class="list-group-item col-xs-6">';
        con += '  <a href="" @click="clickObjLink(\'' + goods[j].url + '\')" title="' + goods[j].name + '"><img src="../images/' + dataName + '/list-' + i + '.jpg" class="img-responsive" alt="' + goods[j].name + '"></a>';
        con += '</div>';
      }
    });
    $('.list-group').append(con);
    if(dataName == "jfwapphilips"){
      $(".list-group-item").slice(0, 5).appendTo('#list-group-01');
      $(".list-group-item").slice(5, 8).appendTo('#list-group-02');
      $(".list-group-item").slice(8, 12).appendTo('#list-group-03');
      $(".list-group-item").slice(12).appendTo('#list-group-04');
    }
  });
}
const  routes = [
  { path : '/' , redirect : '/outlink/brandArea'},
  {
    path : '/outlink',
    redirect : '/outlink/brandArea',
    component : App,
    children : [
      { path : '/outlink/brandArea',component: brandArea },
      { path : '/outlink/hfty',component: hfty },
      { path : '/outlink/zywl',component: zywl },
      { path : '/outlink/khjlb',component: khjlb },
      { path : '/outlink/mgmb',component: mgmb },
      { path : '/outlink/mgmusic',component: mgmusic },
      { path : '/outlink/jfwapflyco',component: jfwapflyco },
      { path : '/outlink/jfwapjoyoung',component: jfwapjoyoung },
      { path : '/outlink/jfwapmi',component: jfwapmi },
      { path : '/outlink/jfwapmidea',component: jfwapmidea },
      { path : '/outlink/jfwappaulfrank',component: jfwappaulfrank },
      { path : '/outlink/jfwapsamsonite',component: jfwapsamsonite },
      { path : '/outlink/jfwapsupor',component: jfwapsupor },
      { path : '/outlink/jfwapvinda',component: jfwapvinda },
      { path : '/outlink/jfwapzwilling',component: jfwapzwilling },
      { path : '/outlink/jfwappanasonic',component: jfwappanasonic },
      { path : '/outlink/jfwapphilips',component: jfwapphilips },
      { path : '/outlink/jfwapyy',component: jfwapyy }
    ]
  },
  { path : '*' , redirect : '/outlink/brandArea'}
];
const  router = new VueRouter({
  routes
});
router.afterEach((to, from) => {

  var toName = to.path.split('/')[2];
  var fromName = from.path.split('/')[2];
  // /* beforeEach 在路由切换时配置公共头 页面title 等信息*/
  function setAllTitle(commonTitle , htmlTitle){
    // document.getElementById("title").innerText = commonTitle ;
    document.title = htmlTitle ;
  }

});
new Vue({
  router,
  el: '#newActivity'
});


