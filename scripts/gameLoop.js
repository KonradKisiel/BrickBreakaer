
var animLoop;
//requestAnimationFrame fallbacks
requestAnimationFrame = requestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function (f) { return setTimeout(f, 1000 / 60) }

cancelAnimationFrame = cancelAnimationFrame
	|| window.mozCancelAnimationFrame
	|| function (animLoop) { clearTimeout(animLoop) }

soundtrack.addEventListener('ended', function () {
	this.currentTime = 0;
	this.play();
}, false);

function updateGameLoop() {
	animLoop = requestAnimationFrame(gameLoop);
}

startBall();

function gameLoop() {
	movePaddle();
	drawGameBox();
	updateGameLoop();
	if (startBool) {
		moveBall();
		drawPaddle();
		drawBall();
		setLvl();
	}
	updateCounters();
}
gameLoop();