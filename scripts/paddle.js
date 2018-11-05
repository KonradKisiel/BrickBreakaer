var rightPaddleMax = W - offset - PaddleW;

if (window.DeviceOrientationEvent && (window.innerHeight / window.innerWidth > 1)) {

    document.addEventListener("touchmove", function (e) {
        if (document.getElementById("touch").checked) {
            PaddleX = event.targetTouches[0].clientX;
        }
    }, false);

    window.addEventListener('deviceorientation', function (e) {
        if (document.getElementById("gyro").checked) {
            PaddleDeltaX = event.gamma * 4;
        }
    }, false);
}
else {
    document.addEventListener("mousemove", function (e) {
        if (document.getElementById("mouse").checked) {
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
    }, false);

    // Start Tracking Keystokes
    document.addEventListener('keydown', function (e) {
        if (document.getElementById("keybord").checked) {
            if (e.keyCode == 39) {
                PaddleDeltaX = PaddleSpeedX;
            } else if (e.keyCode == 37) {
                PaddleDeltaX = -PaddleSpeedX;
			}
		}
	}, false);

    document.addEventListener('keyup', function (e) {
        if (document.getElementById("keybord").checked) {
            if (e.keyCode == 39 || e.keyCode == 37) {
                PaddleDeltaX = 0;
            }
        }
    }, false);

    document.addEventListener('keyup', function (e) {
        if (document.getElementById("keybord").checked) {
            if (e.keyCode == 32 && ballStartPsn) {
				ballStartPsn = false;
                BallDeltaY = 4;
                BallDeltaX = 0;
            }
        }
    }, false);

}
document.addEventListener("click", function (e) {
    if (!document.getElementById("keybord").checked) {
        if (ballStartPsn) {
			ballStartPsn = false;
            BallDeltaY = 4;
            BallDeltaX = 0;
        }
    }
}, false);

function movePaddle() {

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