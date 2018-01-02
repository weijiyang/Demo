var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content':'前端学渣前来报道~',
	'cid':348
})

var options = {
	hostname: '10.1.1.20',
	port:8080,
	path:'/course/docomment',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Content-Length': postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=d010afb1-05c8-46f0-9f2f-4707ef32e840; imooc_isnew_ct=1500258289; bdshare_firstime=1500286652601; loginstate=1; apsid=c2MzcxNzczNzVjMjFmMTEyODQ2Y2RhNDdjMTQ3OTEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAxMDU0MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4NDU2MTIyNDZAcXEuY29tAAAAAAAAAAAAAAAAAAAAADU0YzRlMTYwOWM4ZjU3MzVhMTQxMzllYTM2NmE0OGUw4Y5sWeGObFk%3DNT; last_login_username=845612246%40qq.com; PHPSESSID=1cukg34lr0g58qkhdnijc36lo4; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1501471872,1501473453,1501741400,1501749319; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1501749336; IMCDNS=0; imooc_isnew=2; cvde=5982c1553ca2a-83',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Proxy-Connection':'keep-alive',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}



var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers))

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk)
	})


	res.on('end' , function(){
		console.log('评论完毕');
	})
})

req.on('error' , function(e){
		console.log('Error:  '+ e.message);
	})

	req.write(postData);

	req.end();