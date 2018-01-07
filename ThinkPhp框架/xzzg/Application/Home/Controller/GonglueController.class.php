<?php
namespace Home\Controller;
use Think\Controller;
class GonglueController extends Controller{
	public function index(){
		if(isset($_GET['id'])){
			$id=$_GET['id'];
			$temp=M("Gonglue")->where("id=$id")->select();
			$this->assign("temp",$temp);
			// var_dump($temp);exit();
			if($id==1){
				$this->redirect('baike');
				// $result=M('baike')->field('fenlei')->group('fenlei')->select();
				// $this->assign("result",$result);

			}
			if($id==2){
				// $result=M('zhengce');
				$this->redirect('zhengce');
			}
		}
		$result=M('Gonglue')->select();
		$this->assign("result",$result);
		$this->display();
	}
	public function baike(){
		// if(isset($_GET['fenlei'])){
		// 	// 			// //可能会出现错误。。。。。。。。。
		// 	// ！！！！！！！！！！！！
		// 	// 							！！！！！！！！！！！！！！
		// 	// 			// 。。。。。如果分类换成汉字的话  url传参会出错！！！！！！！！！！！！！
		// 	// var_dump($_GET);exit();
		// 	$fenlei=$_GET['fenlei'];
		// 	// var_dump($fenlei);exit();
		// 	// $temp=M('baike')->where("fenlei=$fenlei")->select();
		// 	// var_dump($temp);exit();
		// 	// $this->assign("temp",$temp);

		// }
		$result=M('baike')->field('fenlei')->group('fenlei')->select();
		$this->assign("result",$result);
		$this->display();

	}
	public function zhengce(){
		$result=M('zhengce')->field('fenlei')->group('fenlei')->select();
		$this->assign("result",$result);
		$this->display();

	}
	//////////////////////////////////////百科
	public function blists(){
		if(isset($_GET['fenlei'])){
			$fenlei=$_GET['fenlei'];
			// var_dump($fenlei);exit();
			$result=M("baike");
			$data=$result->where(array('fenlei'=>"$fenlei"))->select();
			$this->assign("data",$data);
			
		}
        else{
            $this->error("传参失败请重试!",U('index'));
        }
		$this->display();
	}

	 public function bedit(){
    	if(isset($_POST['submit'])){
    		$id=$_GET['id'];
    		$fenlei=$_POST['fenlei'];
    		$result=M('baike');
    		$result->create();
    		if($result->save()){
    			$this->success("修改成功！即将跳转到所属分类页面！",U("blists?fenlei=$fenlei"));
    		}
    		else{
    			$this->error("修改失败！即将跳转到所属分类页面！",U("blists?fenlei=$fenlei"));
    		}

    	}
    	else{
    		$id=$_GET['id'];
    		// echo $id;exit();
    		$result=M('baike');
    		$t=$result->where("id=$id")->select();
    		$this->assign("t",$t);
			$this->display();
    	}


    }

     public function bdel(){
     	// var_dump($_GET);exit();
    	if(isset($_GET['id'])){
    		// var_dump($_GET);exit();
    	$id=$_GET['id'];
    	$result=M('baike');
    	$fenlei=$result->find($id);
    	$fenlei=$fenlei['fenlei'];
    	// var_dump($fenlei);exit();
    	$result->where("id=$id")->delete();
    	$this->success("删除成功！即将跳转到所属分类页面！",U("blists?fenlei=$fenlei"));
    	}
    	else{
    		$this->error("删除失败！即将跳转到所属分类页面！",U("blists?fenlei=$fenlei"));
    	}

    }

    public function badd(){
    	if(IS_POST){
    		// var_dump($_POST);exit();
    		$addinformation=D('baike');        
    		$addinformation->create();
    		$data=array(
    			'fenlei' =>I('post.fenlei'),
    			'title'  =>I('post.title'),
    			'content'=>I('post.content'),
    			'tag'    =>I('post.tag'),
    			'user'   =>I('post.user')
    			);
           
	  	
	  	$num=$addinformation->add($data);
	  	$t=I('get.title');
	  	$result=$addinformation->where($t)->count();
	  	if($result>0){
	  		$fenlei=I('post.fenlei');
	  		$this->success("添加成功！",U("blists?fenlei=$fenlei"));
	  	}
	  	else{
	  		$this->error($addinformation->getError());
	  	}
	  }
	  else{
    	$this->display();
   		 }
    }
    ///////////////////////////////////政策
    	public function zlists(){
		if(isset($_GET['fenlei'])){
			$fenlei=$_GET['fenlei'];
			// var_dump($fenlei);exit();
			$result=M("zhengce");
			$data=$result->where(array('fenlei'=>"$fenlei"))->select();
			$this->assign("data",$data);
			
		}
        else{
            $this->error("传参失败请重试!",U('index'));
        }
		$this->display();
	}

	 public function zedit(){
    	if(isset($_POST['submit'])){
    		$id=$_GET['id'];
    		$fenlei=$_POST['fenlei'];
    		$result=M('zhengce');
    		$result->create();
    		if($result->save()){
    			$this->success("修改成功！即将跳转到所属分类页面！",U("zlists?fenlei=$fenlei"));
    		}
    		else{
    			$this->error("修改失败！即将跳转到所属分类页面！",U("zlists?fenlei=$fenlei"));
    		}

    	}
    	else{
    		$id=$_GET['id'];
    		// echo $id;exit();
    		$result=M('zhengce');
    		$t=$result->where("id=$id")->select();
    		$this->assign("t",$t);
			$this->display();
    	}


    }

     public function zdel(){
     	// var_dump($_GET);exit();
    	if(isset($_GET['id'])){
    		// var_dump($_GET);exit();
    	$id=$_GET['id'];
    	$result=M('zhengce');
    	$fenlei=$result->find($id);
    	$fenlei=$fenlei['fenlei'];
    	// var_dump($fenlei);exit();
    	$result->where("id=$id")->delete();
    	$this->success("删除成功！即将跳转到所属分类页面！",U("zlists?fenlei=$fenlei"));
    	}
    	else{
    		$this->error("删除失败！即将跳转到所属分类页面！",U("zlists?fenlei=$fenlei"));
    	}

    }

    public function zadd(){
    	if(IS_POST){
    		// var_dump($_POST);exit();
    		$addinformation=D('zhengce');        
    		$addinformation->create();
    		$data=array(
    			'fenlei' =>I('post.fenlei'),
    			'title'  =>I('post.title'),
    			'content'=>I('post.content'),
    			'tag'    =>I('post.tag'),
    			'user'   =>I('post.user')
    			);
           
	  	
	  	$num=$addinformation->add($data);
	  	$t=I('get.title');
	  	$result=$addinformation->where($t)->count();
	  	if($result>0){
	  		$fenlei=I('post.fenlei');
	  		$this->success("添加成功！",U("zlists?fenlei=$fenlei"));
	  	}
	  	else{
	  		$this->error($addinformation->getError());
	  	}
	  }
	  else{
    	$this->display();
   		 }
    }
}