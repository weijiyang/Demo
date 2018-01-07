<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    	echo "这里是index controller ！";
        $this->show();
    }
}