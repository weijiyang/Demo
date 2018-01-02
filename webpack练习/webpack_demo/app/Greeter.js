var config = require('./config.json');
var console = require('./console.js');
var main = require('./main.css');
var Greet = require('./Greeter.css');
var less  =require('./less.less')

module.exports = function(){
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet ;
}

