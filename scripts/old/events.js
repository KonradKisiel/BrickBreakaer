document.addEventListener("touchmove", handleTouch, false);
window.addEventListener('deviceorientation', handleTilt, false);
document.addEventListener("mousemove", handleMouseMove, false);
document.addEventListener('keydown', handleKeyDown, false);
document.addEventListener('keyup', handleKeyUp, false);
document.addEventListener("click", handleClick, false);


function handleTouch(e) {
	PaddleX = event.targetTouches[0].clientX;
}

function handleTilt(e) {
	PaddleDeltaX = event.gamma * 4;
}

function handleMouseMove(e) {
	var mouseX = e.clientX - (window.innerWidth / 2);
	if (mouseX > offset && mouseX < rightPaddleMax) {
		PaddleX = mouseX;
	} else if (mouseX <= offset) {
		PaddleX = offset;
	}
	else if (mouseX >= rightPaddleMax) {
		PaddleX = rightPaddleMax;
	}
}

// Start Tracking Keystokes
function handleKeyDown(e) {
	if (e.keyCode == 39) {
		PaddleDeltaX = PaddleSpeedX;
	} else if (e.keyCode == 37) {
		PaddleDeltaX = -PaddleSpeedX;
	}
}

function handleKeyUp(e) {
	if (e.keyCode == 39 || e.keyCode == 37) {
		PaddleDeltaX = 0;
	}
	if (e.keyCode == 32 && ballStartPsn) {
		BallDeltaY = 4;
		BallDeltaX = 0;
		ballStartPsn = false;
	}
}

function handleClick(e) {
	if (ballStartPsn) {
		BallDeltaY = 4;
		BallDeltaX = 0;
		ballStartPsn = false;
	}
}
