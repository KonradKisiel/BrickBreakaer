
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



function updateGameLoop() {
	animLoop = requestAnimationFrame(gameLoop);
}

function stopGameLoop() {
	cancelAnimationFrame(animLoop);
}

function endGame() {
	c.fillStyle = "rgb(255, 128, 0)";
	c.font = W / 9.6 + "px LCDPHONE";
	c.fillText("GAME OVER", W * 0.2, H * 0.94);
	// stop playing music
	soundtrack.pause();
	//stop gameLoop
	animLoop = cancelAnimationFrame(animLoop);
}

function winGame() {
	c.fillStyle = "rgb(255, 128, 0)";
	c.font = W / 9.6 + "px LCDPHONE";
	c.fillText("YOU WIN", W * 0.27, H * 0.94);
	soundtrack.pause();
	play_sound(win_s);
	//stop gameLoop
	animLoop = cancelAnimationFrame(animLoop);
}