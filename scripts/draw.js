//black color for all strokes
c.strokeStyle = "rgb(0, 0, 0)";
//line width
c.lineWidth = H / 600;

function drawBackground() {
    c.fillStyle = "rgb(75, 0, 130)";
    c.fillRect(0, 0, W, H);
}

function drawBottomScreen() {
    c.fillStyle = "rgb(10, 10, 10)";
    c.fillRect(bordersOffset, H * 0.84, W-2*bordersOffset, H * 0.14);
    c.strokeRect(bordersOffset, H * 0.84, W-2*bordersOffset, H * 0.14);
}

function clearGameArea() {
    c.fillStyle = "rgb(196, 196, 255)";
    c.fillRect(bordersOffset, topCounterArea + bordersOffset, W - 2 * bordersOffset, H - (topCounterArea + bordersOffset + bottomInfoArea));
}

function drawBall() {
    c.beginPath();
    c.arc(BallX, BallY, BallR, 0, Math.PI * 2);
    c.fillStyle = "rgb(0,68,255)";
    c.fill();
    c.stroke();
    c.closePath();
}

function drawPaddle() {
    c.fillStyle = "rgb(0,68,255)";
    c.fillRect(PaddleX, PaddleY, PaddleW, PaddleH);
    c.strokeRect(PaddleX, PaddleY, PaddleW, PaddleH);
}

/* ************************** BRICKS **************************** */

var bricksRow = 18;
var brickHeight = H / 50;
var brickWidth = W / bricksRow;

// draw a single brick
function drawSingleBrick(x, y, brickType) {
    if (brickType) {
        switch (brickType) { // if brick is still visible; three colours for three types of bricks
            case 1:
                c.fillStyle = "rgba(64,172,0,0.8)";
                break;
            case 2:
                c.fillStyle = "rgba(0,176,148,0.8)";
                break;
            case 3:
                c.fillStyle = "rgba(255,128,0,0.8)";
                break;
            case 4:
                c.fillStyle = "rgba(196,32,0,0.8)";
                break;
        }
        c.strokeRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
        c.fillRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
    }
}
// iterate through the bricksArray array and draw each brick using drawSingleBrick()
function drawBricks(bricksArray) {
    for (var i = 0; i < bricksArray.length; i++) {
        for (var j = 0; j < bricksArray[i].length; j++) {
            drawSingleBrick(j, i, bricksArray[i][j]);
        }
    }
}

/* ************************** BORDERS **************************** */

function drawTopBorder() {
    c.beginPath();
    c.moveTo(0, topCounterArea);
    c.lineTo(W, topCounterArea);
    c.lineTo(W - bordersOffset, topCounterArea + bordersOffset);
    c.lineTo(bordersOffset, topCounterArea + bordersOffset);
    c.lineTo(0, topCounterArea);
    c.fill();
    c.stroke();
    c.closePath();
}

function drawBottomBorder() {
    c.beginPath();
    c.moveTo(0, H - bottomInfoArea);
    c.lineTo(W, H - bottomInfoArea);
    c.lineTo(W - bordersOffset, H - bottomInfoArea - bordersOffset);
    c.lineTo(bordersOffset, H - bottomInfoArea - bordersOffset);
    c.fill();
    c.stroke();
    c.closePath();
}

function drawRightBorder() {
    c.beginPath();
    c.moveTo(W , topCounterArea);
    c.lineTo(W, H - bottomInfoArea);
    c.lineTo(W - bordersOffset, H - bottomInfoArea - bordersOffset);
    c.lineTo(W - bordersOffset, topCounterArea + bordersOffset);
    c.lineTo(W, topCounterArea);
    c.fill();
    c.stroke();
    c.closePath();
}

function drawLeftBorder() {
    c.beginPath();
    c.moveTo(0, topCounterArea);
    c.lineTo(0, H - bottomInfoArea);
    c.lineTo(bordersOffset, H - bottomInfoArea - bordersOffset);
    c.lineTo(bordersOffset, topCounterArea + bordersOffset);
    c.lineTo(0, topCounterArea);
    c.fill();
    c.stroke();
    c.closePath();
}

function drawGameBox(){
	drawBackground();
	drawBottomScreen();
	clearGameArea();
	c.fillStyle = "rgb(75, 0, 130)";
	drawTopBorder();
	c.fillStyle = "rgb(148, 0, 255)";
	drawBottomBorder();
	drawRightBorder();
	drawLeftBorder();
}