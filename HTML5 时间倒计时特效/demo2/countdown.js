var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_LEFT = 30;
var MARGIN_TOP = 30;
var hour = 00;
var minute = 00;
var seconds = 00;
window.onload = function(){

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");

	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;
	updateTime(context);
	

}
function updateTime(ext){
	setInterval(function(){
		var time = new Date();
		hour = time.getHours()
		minute = time.getMinutes();
		seconds = time.getSeconds();
		ext.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);  
		render(ext);
		console.log(seconds);
	},1000);
}
function render(ext){
	renderDigit( MARGIN_LEFT , MARGIN_TOP ,parseInt(hour/10), ext);
	renderDigit(MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP,parseInt(hour%10) , ext);
	renderDigit(MARGIN_LEFT + 30*(RADIUS + 1) , MARGIN_TOP , 10 , ext);
	renderDigit( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minute/10) , ext);
    renderDigit( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(minute%10) , ext);
    renderDigit( MARGIN_LEFT + 69*(RADIUS+1) , MARGIN_TOP , 10 , ext);
    renderDigit( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) , ext);
    renderDigit( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(seconds%10) , ext);
}

function renderDigit(x,y,num,ext){
	ext.fillStyle = "rgb(0,102,153)";

	for( var i = 0; i<digit[num].length; i++){
		for (var j = 0; j <digit[num][i].length; j++) {
			if(digit[num][i][j]==1){
				ext.beginPath();
				ext.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
				ext.closePath();

				ext.fill();
			}
		}
	}
}