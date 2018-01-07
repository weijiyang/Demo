<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title>tag list</title>
	<style>
	td{
		width:100px;
		text-align:left;
	}
	</style>
</head>
<body>
	<h1>标签展示&nbsp;&nbsp;&nbsp;<a href="add">添加</a></h1></br><hr>
	<table>
		<tr>
			<td>序号</td>
			<td>标签名称</td>
			
		</tr>
		<?php static $num=1;?>
		<?php if(is_array($inf)): $i = 0; $__LIST__ = $inf;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$i): $mod = ($i % 2 );++$i;?><tr>
			<td><?php echo $num;$num=$num+1;?></td>
			<td><?php echo ($i["tag"]); ?></td>
			
			<td><a href="edit?id=<?php echo ($i["id"]); ?>">修改</a>&nbsp;<a href="del?id=<?php echo ($i["id"]); ?>">删除</a></td>
		</tr><?php endforeach; endif; else: echo "" ;endif; ?>
		
	</table>
</body>
</html>