<?php
namespace Home\Controller;
use Think\Controller;
class InformationController extends Controller {
    public function index(){
	$this->display();
    }
    public function lists(){
    	$information=M("Information")->select();
    	$this->assign("inf",$information);
    	$this->display();
    }
    public function edit(){
    	if(isset($_POST['submit'])){
    		$id=$_GET['id'];
    		$result=M('Information');
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
    		$result=M('Information');
    		$t=$result->where("id=$id")->select();
    		$this->assign("t",$t);
			$this->display();
    	}


    }
    public function add(){
    	if(IS_POST){
            echo __URL__;exit();
    		// var_dump($_POST);exit();
    		$addinformation=D('Information');
            $tagin=M('Tagin');
    		$addinformation->create();
            $tagin->create();exit;
    		$data=array(
    			'title'  =>I('post.title'),
    			'summary'=>I('post.summary'),
    			'content'=>I('post.content'),
    			'tag'    =>I('post.tag')
    			);
           
	  	
	  	$num=$addinformation->add($data);
        
         $d=array(
                'i_id'=>$num,
                't_id'=>I('post.tag')
                );
         $tagin->add($d);
         // var_dump($_GET);exit();
	  	$t=I('get.title');
	  	$result=$addinformation->where($t)->count();
	  	if($result>0){
	  		$this->success("添加成功！",U('lists'));
	  	}
	  	else{
	  		$this->error($addinformation->getError());
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
    	$result=M('Information');
    	$result->where("id=$id")->delete();
    	$this->success("删除成功！",U('lists'));
    	}
    	else{
    		$this->error("删除失败！",U('lists'));
    	}

    }
 
}