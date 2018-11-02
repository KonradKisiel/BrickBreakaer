
/*
function startGame() {

********************************************* CHECK IT ********************************************************************************
	soundtrack.addEventListener('ended', function () {
		this.currentTime = 0;
		this.play();
	}, false);


	// call the update() function every 20ms until clearInterval(gameLoop) is called
	gameLoop = setInterval(update, 20);
}
*/

function update() {
	soundtrack.addEventListener('ended', function () {
		this.currentTime = 0;
		this.play();
	}, false);

	drawBackground();
	drawBottomScreen();

	clearGameArea();

	c.fillStyle = "rgb(75, 0, 130)";
	c.strokeStyle = "rgb(0, 0, 0)";
	drawTopBorder();

	c.fillStyle = "rgb(148, 0, 255)";
	drawBottomBorder();
	drawRightBorder();
	drawLeftBorder();

	if (startBool) {
		movePaddle();
		moveBall();
		drawPaddle();
		drawBall();
		setLvl();
	}
	updateCounters();
	window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);