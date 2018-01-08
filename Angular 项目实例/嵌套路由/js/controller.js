function mgmbController($scope,$CommonTitleSrv){
	$CommonTitleSrv.setTitle("咪咕");
	setRem();
    window.addEventListener("orientationchange", setRem);
    window.addEventListener("resize", setRem);
    function setRem() {
      var body = document.querySelector("body");
      var width = body.getBoundingClientRect().width;
      body.style.fontSize = width /15+ "px";
    }
};