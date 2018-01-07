<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>选址中国--攻略<?php if(is_array($temp)): $i = 0; $__LIST__ = $temp;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$t): $mod = ($i % 2 );++$i;?>--<?php echo ($t["name"]); endforeach; endif; else: echo "" ;endif; ?></h1></br>
	<?php if(is_array($result)): $i = 0; $__LIST__ = $result;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$r): $mod = ($i % 2 );++$i;?><a href="/xzzg/xzzg/index.php/Home/Gonglue/index?id=<?php echo ($r["id"]); ?>">查看<?php echo ($r["name"]); ?></a></br><hr><?php endforeach; endif; else: echo "" ;endif; ?>
</body>
</html>