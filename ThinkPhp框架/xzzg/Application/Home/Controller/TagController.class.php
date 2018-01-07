<?php
namespace Home\Controller;
use Think\Controller;
class TagController extends Controller {
    public function index(){
    $this->display();


    }
        public function lists(){
    	$information=M("Tag")->select();
    	$this->assign("inf",$information);
    	$this->display();
    }
    public function edit(){
    	if(isset($_POST['submit'])){
    		$id=$_GET['id'];
    		$result=M('Tag');
    		$result->create();
    		if($result->save()){
    			$this->success("修改成功！",U('lists'));
    		}
    		else{
    			$this->error("修改失败！",U('lists'));
    		}

    	}
    	else{
    		$id=$_GET['id'];
    		// echo $id;exit();
    		$result=M('Tag');
    		$t=$result->where("id=$id")->select();
    		$this->assign("t",$t);
			$this->display();
    	}


    }
    public function add(){
    	if(IS_POST){
    		// var_dump($_POST);exit();
    		$addinformation=M('Tag');
    		$addinformation->create();
    		$data=array(
    			'tag'    =>I('post.tag')
    			);
	  	
	  	$addinformation->add($data);
	  	$t=I('get.tag');
	  	$result=$addinformation->where($t)->count();
	  	if($result>0){
	  		$this->success("添加成功！",U('lists'));
	  	}
	  	else{
	  		$this->error($addinromation->getError());
	  	}
	  }
	  else{
    	$this->display();
   		 }
    }
    public function del(){
    	if(isset($_GET['id'])){
    		// var_dump($_GET);exit();
    	$id=$_GET['id'];
    	$result=M('Tag');
    	$result->where("id=$id")->delete();
    	$this->success("删除成功！",U('lists'));
    	}
    	else{
    		$this->error("删除失败！",U('lists'));
    	}

    }
} 