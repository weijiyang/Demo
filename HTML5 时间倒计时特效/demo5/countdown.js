var WINDOW_WIDTH = document.body.clientWidth;
var WINDOW_HEIGHT = document.body.clientHeight;
var RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;
var MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
var MARGIN_TOP = Math.round(WINDOW_WIDTH/10);
var hour = 00;
var minute = 00;
var seconds = 00;
var showtime=new Date();

// 小球
var balls = [];
const colors = ["#33b5e5","#0099cc","#aa66cc","#9933cc","#99cc00","#669900","#ffbb33","#ff4444","#cc0000"];

window.onload = function(){

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");

	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	setInterval(function(){
		render(context);
		updateTime();
		console.log(balls.length);
	},50);

	

}
function updateTime(ext){
	
		var time = new Date();
		hour = time.getHours()
		minute = time.getMinutes();
		seconds = time.getSeconds();
		var nextTime=new Date();
		var nexttimehours=parseInt(nextTime.getHours());
		var nexttimeminutes=parseInt(nextTime.getMinutes());
		var nexttimeseconds=parseInt(nextTime.getSeconds());
		var showtimehours=parseInt(showtime.getHours());
		var showtimeminutes=parseInt(showtime.getMinutes());
		var showtimeseconds=parseInt(showtime.getSeconds());
		if(nextTime!=showtime){
		if(parseInt(nexttimehours/10)!=parseInt(showtimehours/10)){
			addballs(MARGIN_LEFT,MARGIN_TOP,parseInt(nexttimehours/10));
		};
		if(parseInt(nexttimehours%10)!=parseInt(showtimehours%10)){
			addballs(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(nexttimehours%10));
		};
		if(parseInt(nexttimeminutes/10)!=parseInt(showtimeminutes/10)){
			addballs(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(nexttimeminutes/10));
		};
		if(parseInt(nexttimeminutes%10)!=parseInt(showtimeminutes%10)){
			addballs(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(nexttimeminutes%10));
		};
		if(parseInt(nexttimeseconds/10)!=parseInt(showtimeseconds/10)){
			addballs(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(nexttimeseconds/10));
		};
		if(parseInt(nexttimeseconds%10)!=parseInt(showtimeseconds%10)){
			addballs(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(nexttimeseconds%10));
		};}
		showtime=nextTime;
		updateBalls();	
	
}
function updateBalls(){

	for ( var i = 0; i <balls.length ; i++ ){
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;

		if( balls[i].y >= WINDOW_HEIGHT-RADIUS){
			balls[i].y = WINDOW_HEIGHT-RADIUS;
			balls[i].vy = -balls[i].vy*0.6;
		}
	}

	var ballscontol=0;
		for(i=0;i<balls.length;i++)
			if (balls[i].x + RADIUS>0&&balls[i].x - RADIUS<WINDOW_WIDTH) {
				balls[ballscontol++]=balls[i]
			}
		while(balls.length>Math.min(ballscontol,300)){
			balls.pop();
		}
		
}
function addballs(x , y , num){
	for (var i = 0; i < digit[num].length ; i++) {
		for(var j = 0 ; j < digit[num][i].length ; j++){
			if(digit[num][i][j]==1){
				var aBall = {
					x:x+j*2*(RADIUS+1)+(RADIUS+1),
					y:y+i*2*(RADIUS+1)+(RADIUS+1),
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
				};
				balls.push(aBall);
			}

		}
	}
}
function render(ext){
	ext.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);  
	renderDigit( MARGIN_LEFT , MARGIN_TOP ,parseInt(hour/10), ext);
	renderDigit(MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP,parseInt(hour%10) , ext);
	renderDigit(MARGIN_LEFT + 30*(RADIUS + 1) , MARGIN_TOP , 10 , ext);
	renderDigit( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minute/10) , ext);
    renderDigit( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(minute%10) , ext);
    renderDigit( MARGIN_LEFT + 69*(RADIUS+1) , MARGIN_TOP , 10 , ext);
    renderDigit( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) , ext);
    renderDigit( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(seconds%10) , ext);
   
    	for( var i=0; i<balls.length ; i++ ){
	    	ext.fillStyle = balls[i].color;
	    	ext.beginPath();
	    	ext.arc( balls[i].x , balls[i].y , RADIUS , 0 , 2*Math.PI , true);
	    	ext.closePath();
	    	ext.fill();
	    	
    }
 
   
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