<?php
namespace Home\Model;
use Think\Model;
class InformationModel extends Model{
	public $_validate = array(
			array("title", "require", "标题不能为空",1)
		);
	public $_auto = array(
				array('tag', '2014-01-01')
			);
}