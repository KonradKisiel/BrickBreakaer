var c = canvas.getContext('2d');
c.canvas.height = window.innerHeight;

//adjust width to divice, max width = height
if(window.innerHeight / window.innerWidth > 1){
    c.canvas.width = window.innerWidth;
}else{
    c.canvas.width = c.canvas.height;
}

var W = c.canvas.width;
var H = c.canvas.height;

//************ Audio sources ***************

var soundtrack = new Audio("audio/golucky.mp3");
var edge_s = new Audio("audio/edges.wav");
var edge_top_s = new Audio("audio/edge_top.wav");
var brick_s = new Audio("audio/brick.wav");
var paddle_s = new Audio("audio/paddle.wav");
var delbrick_s = new Audio("audio/delbrick.wav");
var liveloss_s = new Audio("audio/liveloss.wav");
//var nextLevel_s = new Audio("audio/newLevel.wav");
var win_s = new Audio("audio/win.mp3");
var gameOver_s = new Audio("audio/gameOver.wav");

//************** Counters *****************

var score = 0;
var lives = 7;
var lvlCounter = 0;

//************** Borders ******************

var topCounterArea = H / 19;
var bottomInfoArea = H / 5.5;
//borders offset from edges of the screen
var bordersOffset = H / 70;

//************ Paddle settings ************

var PaddleMove;
var PaddleW = H / 6;
var PaddleH = H / 47;
var PaddleDeltaX = 0;
var PaddleDeltaY = 0;
var PaddleX = W / 2 - PaddleW / 2;
var PaddleY = H - PaddleH - bottomInfoArea - bordersOffset;

var PaddleDeltaX;
var PaddleSpeedX = H / 60;

//***************** Ball ******************

var BallSpeed = H / 350;
var BallX = W / 2;
var BallY = H - bottomInfoArea - W / 8;
var BallR = H / 80;

//**************** Levels ******************

var bricksRow = 18;
var brickHeight = PaddleH;
var brickWidth = W / bricksRow;

