function movePaddle() {
	if (window.DeviceOrientationEvent && (window.innerHeight / window.innerWidth > 1)) {

		document.addEventListener("touchmove", function (e) {
			if (document.getElementById("touch").checked) {
				PaddleX = event.targetTouches[0].clientX;
			}
			else {  // ??? maybe not necessary
				e.preventDefault();
			}
		}, false);

		window.addEventListener('deviceorientation', function (e) {
			if (document.getElementById("gyro").checked) {
				PaddleDeltaX = event.gamma * 4;
			} else {  // ??? maybe not necessary
				e.preventDefault();
			}
		});
	}
	else {
		document.addEventListener("mousemove", function (e) {
			if (document.getElementById("mouse").checked) {
				var mouseX = e.clientX - (window.innerWidth / 2);
				if (mouseX > 20 && mouseX < 430) {
					PaddleX = mouseX;
				} else if (mouseX <= 20) {
					PaddleX = 20;
				}
				else if (mouseX >= 430) {
					PaddleX = 430;
				}
			}
		}, false);

		// Start Tracking Keystokes
		document.addEventListener('keydown', function (e) {
			if (document.getElementById("keybord").checked) {
				if (e.keyCode == 39) {
					PaddleDeltaX = PaddleSpeedX;
				} else if (e.keyCode == 37) {
					PaddleDeltaX = -PaddleSpeedX;
				}
			} else {  // ??? maybe not necessary
				e.preventDefault();
			}
		});

		document.addEventListener('keyup', function (e) {
			if (document.getElementById("keybord").checked) {
				if (e.keyCode == 39 || e.keyCode == 37) {
					PaddleDeltaX = 0;
				}
			} else {  // ??? maybe not necessary
				e.preventDefault();
			}
		});

		document.addEventListener('keyup', function (e) {
			if (document.getElementById("keybord").checked) {
				if (e.keyCode == 32 && ballStartPsn) {
					BallDeltaY = 4;
					BallDeltaX = 0;
					ballStartPsn = false;
				}
			} else {  // ??? maybe not necessary
				e.preventDefault();
			}
		});

	}
	document.addEventListener("click", function (e) {
		if (!document.getElementById("keybord").checked) {
			if (ballStartPsn) {
				BallDeltaY = 4;
				BallDeltaX = 0;
				ballStartPsn = false;
			}
		}
	});
	// If paddle reaches the ends of ball, then don't let it move 
	if (BallDeltaY == 0) {
		if (PaddleX + PaddleDeltaX < W / 2 - PaddleW || PaddleX + PaddleDeltaX + PaddleW > W / 2 + PaddleW) {
			PaddleDeltaX = 0;
		}
	}
	// If paddle reaches the ends, then don't let it move 
	if (PaddleX + PaddleDeltaX < 0 || PaddleX + PaddleDeltaX + PaddleW > W) {
		PaddleDeltaX = 0;
	}
	PaddleX = PaddleX + PaddleDeltaX;
}