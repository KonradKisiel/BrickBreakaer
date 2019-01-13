var c = canvas.getContext('2d');
c.canvas.height = window.innerHeight;

//adjust width to device 
if(window.innerHeight / window.innerWidth > 1){
        c.canvas.width = window.innerWidth;
        if(window.innerHeight / window.innerWidth>1.8){
            c.canvas.height = c.canvas.width*1.8;
        }else{
            c.canvas.height = window.innerHeight;
        }
}else{
    //max width = height
    c.canvas.height = window.innerHeight;
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

//************** Borders ******************

var topCounterArea = H / 19;
var bottomInfoArea = H / 5.5;
//borders offset from edges of the screen
var bordersOffset = H / 70;

//************ Global draw Settings  ************

//black color for all strokes
c.strokeStyle = "rgb(0, 0, 0)";
//line width
c.lineWidth = H / 600;

//game speed
var GameSpeed = H / 500;

function removeElementFromArray(element, array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] == element) {
            array.splice(i, 1);
            i--;
        }
    }
}


