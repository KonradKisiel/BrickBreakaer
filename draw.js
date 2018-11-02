var bord = H / 533;
var borderX = W / 20;
var borderYT = H / 80;
var borderYB = 2 * borderYT;
//perspective factor
var per = 11;

function drawBackground() {
    c.fillStyle = "rgb(75, 0, 130)";
    c.fillRect(0, 0, W, H);
    c.save();
}

function drawBottomScreen() {
    c.fillStyle = "rgb(10, 10, 10)";
    c.fillRect(W / 40, H * 0.84, W * 0.95, H * 0.14);
    c.lineWidth = 4;
    c.strokeStyle = "rgb(0, 0, 0)";
    c.strokeRect(W / 40, H * 0.84, W * 0.95, H * 0.14);
    c.restore();
}

function clearGameArea() {
	c.fillStyle = "rgb(196, 196, 255)";
	c.fillRect(borderX, top_line + borderYT, W-2*borderX, H-(top_line+borderYT+bot_line));
	c.save();
}

function drawBall() {
    c.save();
    c.beginPath();
    c.arc(BallX, BallY, BallR, 0, Math.PI * 2);
    c.fillStyle = "rgb(0,68,255)";
    c.fill();
    c.strokeStyle = "rgb(0,0,0)";
    c.lineWidth = 3;
    c.stroke();
    c.restore();
}

function drawPaddle() {
    c.save();
    c.beginPath();
    c.moveTo(PaddleX, PaddleY + PaddleH);
    c.lineTo(PaddleX, PaddleY);
    c.lineTo(PaddleX + PaddleW, PaddleY);
    c.lineTo(PaddleX + PaddleW, PaddleY + PaddleH);
    c.fillStyle = "rgb(0, 64, 98)";
    c.fill();
    c.lineWidth = 3;
    c.strokeStyle = "rgb(0, 0, 0)";
    c.stroke();
    c.beginPath();
    c.moveTo(PaddleX - 1, PaddleY - 1);
    c.lineTo(PaddleX + 14, PaddleY - 7);
    c.lineTo(PaddleX + PaddleW - 14, PaddleY - 7);
    c.lineTo(PaddleX + PaddleW + 1, PaddleY - 1);
    c.fillStyle = "rgb(0, 128, 196)";
    c.fill();
    c.lineWidth = 2;
    c.strokeStyle = "rgb(0, 0, 0)";
    c.stroke();
    c.restore();
}


/* ************************** BRICKS **************************** */

var bricksRow = 18;
var brickHeight = H / 50;
var brickWidth = W / bricksRow;

// draw a single brick
function drawSingleBrick(x, y, type) {
    switch (type) { // if brick is still visible; three colours for three types of bricks
        case 0:
            c.fillStyle = "rgb(0,0,0)";
            break;
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
        default:
            c.translate(50, 0);
            c.fillRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
            break;
    }

    if (type) {
        //Draw rectangle with fillStyle color selected earlier
        c.strokeStyle = "rgb(0, 0, 0)";
        c.strokeRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
        // Also draw blackish border around the brick
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
    c.save();
    //c.fillStyle = fillStyle;
    //c.strokeStyle = strokeStyle;
    c.beginPath();
    c.moveTo(per + bord / 2, top_line - bord);
    c.lineTo(W - per - bord / 2, top_line - bord);
    c.lineTo(W - borderX, top_line + borderYT);
    c.lineTo(borderX, top_line + borderYT);
    c.lineTo(per + bord / 2, top_line - bord);
    c.closePath();
    c.fill();
    c.lineWidth = 1.3 * bord;
    c.stroke();
    c.restore();

}

function drawBottomBorder() {
    c.save();
    //c.fillStyle = fillStyle;
    //c.strokeStyle = strokeStyle;
    c.beginPath();
    c.moveTo(bord, H - bot_line);
    c.lineTo(W - bord, H - bot_line);
    c.lineTo(W - borderX, H - bot_line - borderYB);
    c.lineTo(borderX, H - bot_line - borderYB);
    c.closePath();
    c.fill();
    c.lineWidth = 2.7 * bord;
    c.stroke();
    c.restore();
}

function drawRightBorder() {
    c.save();
    //c.fillStyle = fillStyle;
    //c.strokeStyle = strokeStyle;
    c.beginPath();
    c.moveTo(W - per, top_line);
    c.lineTo(W - bord, H - bot_line);
    c.lineTo(W - borderX, H - bot_line - borderYB);
    c.lineTo(W - borderX, top_line + borderYT);
    c.lineTo(W - per, top_line);
    c.closePath();
    c.fill();
    c.lineWidth = 1.5 * bord;
    c.stroke();
    c.restore();
}

function drawLeftBorder() {
    c.save();
    //c.fillStyle = fillStyle;
    //c.strokeStyle = strokeStyle;
    c.moveTo(per, top_line);
    c.lineTo(bord, H - bot_line);
    c.lineTo(borderX, H - bot_line - borderYB);
    c.lineTo(borderX, top_line + borderYT);
    c.lineTo(per, top_line);
    c.closePath();
    c.fill();
    c.lineWidth = 1.5 * bord;
    c.stroke();
    c.restore();
}
