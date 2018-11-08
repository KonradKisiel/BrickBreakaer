var rightPaddleMax;
var mouseX;

if (window.DeviceOrientationEvent && (window.innerHeight / window.innerWidth > 1)) {

    document.addEventListener("touchmove", function (e) {
        if (document.getElementById("touch").checked) {
            PaddleX = event.targetTouches[0].clientX - PaddleW / 2;
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
            rightPaddleMax = W - bordersOffset - PaddleW;
            mouseX = e.clientX - (window.innerWidth / 2 - W / 2 + PaddleW / 2);
            if (mouseX > bordersOffset && mouseX < rightPaddleMax) {
                PaddleX = mouseX;
            } else if (mouseX <= bordersOffset) {
                PaddleX = bordersOffset;
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
                //setTimeout(releaseBall, 500);
                releaseBall();
            }
        }
    }, false);

}
document.addEventListener("click", function (e) {
    if (!document.getElementById("keybord").checked) {
        if (ballStartPsn) {
            //setTimeout(releaseBall, 500);
            releaseBall();
        }
    }
}, false);

function releaseBall(){
    BallDeltaY = 4;
    BallDeltaX = 0;
    ballStartPsn = false;
}

function movePaddle() {
/*
    // If paddle reaches the ends of ball, then don't let it move 
    if (BallDeltaY == 0) {
        if (PaddleX + PaddleDeltaX < W / 2 - PaddleW || PaddleX + PaddleDeltaX + PaddleW > W / 2 + PaddleW) {
            PaddleDeltaX = 0;
        }
    }
*/
    // If paddle reaches the ends, then don't let it move 
    if (PaddleDeltaX + PaddleX < 0 || PaddleDeltaX + PaddleX + PaddleW > W-bordersOffset) {
        PaddleDeltaX = 0;
    }
    PaddleX = PaddleX + PaddleDeltaX;
}