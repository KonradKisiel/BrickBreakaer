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
