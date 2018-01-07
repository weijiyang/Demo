<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title>baike list</title>
</head>
<style>
	td{
		width:100px;
		text-align:left;
	}
	</style>
<body>
	<h1>选址中国--攻略--百科--类别:<?php echo $_GET['fenlei'];?></h1></br>
	<a href="/xzzg/xzzg/index.php/Home/Gonglue/badd">添加</a></br></br>
	<table>
		<tr>
			<td>题目</td>
			<td>详情</td>
			<td>标签</td>
			<td>用户类别</td>
			<td>操作</td>

		</tr>
		<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$i): $mod = ($i % 2 );++$i;?><tr>
			<td><?php echo ($i["title"]); ?></td>
			<td><?php echo ($i["content"]); ?></td>
			<td><?php echo ($i["tag"]); ?></td>
			<td><?php echo ($i["user"]); ?></td>
			<td><a href="/xzzg/xzzg/index.php/Home/Gonglue/bedit?id=<?php echo ($i["id"]); ?>">修改</a>&nbsp;<a href="/xzzg/xzzg/index.php/Home/Gonglue/bdel?id=<?php echo ($i["id"]); ?>">删除</a></td>
		</tr><?php endforeach; endif; else: echo "" ;endif; ?>
		
	</table>
</body>
</html>