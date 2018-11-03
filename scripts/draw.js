function drawBackground() {
    c.fillStyle = "rgb(75, 0, 130)";
    c.fillRect(0, 0, W, H);
}

function drawBottomScreen() {
    c.fillStyle = "rgb(10, 10, 10)";
    c.fillRect(offset, H * 0.84, W * 0.95, H * 0.14);
    c.lineWidth = 4;
    c.strokeRect(offset, H * 0.84, W * 0.95, H * 0.14);
}

function clearGameArea() {
    c.fillStyle = "rgb(196, 196, 255)";
    c.fillRect(bordersX, top_line + bordersY, W - 2 * bordersX, H - (top_line + bordersY + bot_line));
}

function drawBall() {
    c.beginPath();
    c.arc(BallX, BallY, BallR, 0, Math.PI * 2);
    c.fillStyle = "rgb(0,68,255)";
    c.fill();
    c.lineWidth = 2;
    c.stroke();
    c.closePath();
}

function drawPaddle() {
    c.fillStyle = "rgb(0,68,255)";
    c.fillRect(PaddleX, PaddleY, PaddleW, PaddleH);
    c.lineWidth = 2;
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
        c.fillRect(x * brickWidth + 2, y * brickHeight + 2, brickWidth - 4, brickHeight - 4);
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
    c.moveTo(0, top_line);
    c.lineTo(W, top_line);
    c.lineTo(W - bordersX, top_line + bordersY);
    c.lineTo(bordersX, top_line + bordersY);
    c.lineTo(0, top_line);
    c.fill();
    c.lineWidth = lineW;
    c.stroke();
    c.closePath();
}

function drawBottomBorder() {
    c.beginPath();
    c.moveTo(0, H - bot_line);
    c.lineTo(W, H - bot_line);
    c.lineTo(W - bordersX, H - bot_line - bordersY);
    c.lineTo(bordersX, H - bot_line - bordersY);
    c.fill();
    c.lineWidth = lineW;
    c.stroke();
    c.closePath();
}

function drawRightBorder() {
    c.beginPath();
    c.moveTo(W , top_line);
    c.lineTo(W, H - bot_line);
    c.lineTo(W - bordersX, H - bot_line - bordersY);
    c.lineTo(W - bordersX, top_line + bordersY);
    c.lineTo(W, top_line);
    c.fill();
    c.lineWidth = lineW;
    c.stroke();
    c.closePath();
}

function drawLeftBorder() {
    c.beginPath();
    c.moveTo(0, top_line);
    c.lineTo(0, H - bot_line);
    c.lineTo(bordersX, H - bot_line - bordersY);
    c.lineTo(bordersX, top_line + bordersY);
    c.lineTo(0, top_line);
    c.fill();
    c.lineWidth = lineW;
    c.stroke();
    c.closePath();
}
