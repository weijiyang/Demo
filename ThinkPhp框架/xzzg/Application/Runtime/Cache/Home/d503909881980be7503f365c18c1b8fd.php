<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title>information edit</title>
</head>
<body>
	<h1>资讯修改</h1><hr></br>
	<form action="edit" method="post">
	<?php if(is_array($t)): $i = 0; $__LIST__ = $t;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$t): $mod = ($i % 2 );++$i;?><input type="hidden" name="id" value="<?php echo ($t["id"]); ?>"/></br></br>
			标题:<input type="text" name="title" value="<?php echo ($t["title"]); ?>"/></br></br>
			简介:<input type="text" name="summary" value="<?php echo ($t["summary"]); ?>"/></br></br>
			详情:<input type="textarea" name="content" value="<?php echo ($t["content"]); ?>"/></br></br>
			标签:<input type="text" name="tag"value="<?php echo ($t["tag"]); ?>"/></br></br>
			<input type="submit" name="submit" value="提交修改"/><?php endforeach; endif; else: echo "" ;endif; ?>
	</form>
</body>
</html>