// 为 require & exports 文件 提供模块接口

function Hello(){
	var name ;
	this.setName = function(tname){
		name = tname
	}
	this.sayName = function(){
		console.log('Hello ' + name)
	}	
}


module.exports = Hello;