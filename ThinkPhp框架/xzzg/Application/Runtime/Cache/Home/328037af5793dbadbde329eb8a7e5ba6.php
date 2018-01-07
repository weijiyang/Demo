<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title>tag edit</title>
</head>
<body>
	<h1>标签修改</h1><hr></br>
	<form action="edit" method="post">
	<?php if(is_array($t)): $i = 0; $__LIST__ = $t;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$t): $mod = ($i % 2 );++$i;?><input type="hidden" name="id" value="<?php echo ($t["id"]); ?>"/></br></br>
			标签名称:<input type="text" name="tag"value="<?php echo ($t["tag"]); ?>"/></br></br>
			<input type="submit" name="submit" value="提交修改"/><?php endforeach; endif; else: echo "" ;endif; ?>
	</form>
</body>
</html>