function drawBackground() {
    c.fillStyle = "rgb(75, 0, 130)";
    c.fillRect(0, 0, W, H);
}

function clearGameArea() {
    c.fillStyle = "rgb(196, 196, 255)";
    c.fillRect(bordersOffset, topCounterArea + bordersOffset, W - 2 * bordersOffset, H - (topCounterArea + bordersOffset + bottomInfoArea));
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

function drawBottomScreen() {
    c.fillStyle = "rgb(10, 10, 10)";
    c.fillRect(bordersOffset, H * 0.84, W-2*bordersOffset, H * 0.14);
    c.strokeRect(bordersOffset, H * 0.84, W-2*bordersOffset, H * 0.14);
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