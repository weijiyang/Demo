var http = require('http')
var url = 'http://www.imooc.com/learn/348'
var cheerio = require('cheerio');

function filterChapters(html){
	var $ = cheerio.load(html)
	var charpter = $('.learnchapter')
	[{
		chapterTitle:'',
		videos:[
		title:'',
		id:''
		]
	}]

	var courseData = []
	charpters.each(function(item){
		var chapter = $(this)
		var chapterTitle = chapter.find('strong').text()
		var videos = chapter.find('.video').children('li')
		var chapterData = {
			chapterTitle:chapterTitle,
			videos:[]
		}

		videos.each(function(item){
			var video = $(this).find('.studyvideo')
			var videoTitle = video.text()
			var id = video.attr('href').split('video/')[1]

			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		})

		courseData.push(chapterData)

	})
}

http.get(url,function(res){
	var html = ''

	res.on('data' , function(data){
		html += data
	})

	res.on('end',function(){
		console.log(html);
	})
}).on('error' , function(){
	console.log('获取课程数据出错')
})