var c = canvas.getContext('2d');
c.canvas.height = window.innerHeight;
c.canvas.width = c.canvas.height / 1.6;
var W = c.canvas.width;
var H = c.canvas.height;

var top_line = H / 19;
var bot_line = H / 5.5;

// audio sources
var soundtrack = new Audio("golucky.mp3");
var edge_s = new Audio("edges.wav");
var edge_top_s = new Audio("edge_top.wav");
var brick_s = new Audio("brick.wav");
var paddle_s = new Audio("paddle.wav");
var delbrick_s = new Audio("delbrick.wav");
var liveloss_s = new Audio("liveloss.wav");
var nextLevel_s = new Audio("newLevel.wav");
var win_s = new Audio("win.mp3");

//******** Game initial setings *********	

var gameLoop;
var ballStartPsn = true;


//************** Counters ****************	 

var score = 0;
var lives = 7;
var lvlCounter = 0;

//************** Borders ****************	

//line width
var lineW = H / 400;
//bottom screen vertical offset
var offset = W / 40;
//vertical borders width
var bordersX = offset;
//horizontal borders width
var bordersY = H / 80;

// ************ Paddle settings ************

var PaddleMove;
var PaddleW = H / 6;
var PaddleH = H / 47;
var PaddleDeltaX = 0;
var PaddleDeltaY = 0;
var PaddleX = W / 2 - PaddleW / 2;
var PaddleY = H - PaddleH - bot_line - bordersY;

var PaddleDeltaX;
var PaddleSpeedX = W / 37;

//********Ball************

var BallSpeed = W / 200;
var BallX = W / 2;
var BallY = H - bot_line - W / 8;
var BallR = W / 48;
var BallDeltaX;
var BallDeltaY;

//**********Levels******************

var bricksRow = 18;
var brickHeight = H / 50;
var brickWidth = W / bricksRow;

//************** Start Positions ***********/

BallDeltaY = 0;
BallDeltaX = 0;
PaddleDeltaX = 0;


