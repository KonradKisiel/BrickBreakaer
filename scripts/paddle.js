//************ Paddle settings ************
//paddle width
var PaddleW = H / 6;
//paddle height
var PaddleH = H / 47;
//paddle delta position X (speed)
var PaddleDeltaX = 0;
//paddle vertical psn
var PaddleX = W / 2 - PaddleW / 2;
//paddle horizontal psn
var PaddleY = H - PaddleH - bottomInfoArea - bordersOffset;
//paddle move speed for keyboard and tilt
var PaddleSpeedX = H / 60;
//maximum right psn
var rightPaddleMax;
//for handling mouse input
var mouseX;

function drawPaddle() {
    c.fillStyle = "rgb(0,68,255)";
    c.fillRect(PaddleX, PaddleY, PaddleW, PaddleH);
    c.strokeRect(PaddleX, PaddleY, PaddleW, PaddleH);
}

//geeting controls settings from localStorage
var touch = JSON.parse(localStorage.getItem('touchBool'));
var gyro = JSON.parse(localStorage.getItem('gyroBool'));
var mouse = JSON.parse(localStorage.getItem('mouseBool'));
var keyboard = JSON.parse(localStorage.getItem('keyboardBool'));

//handle events
if (window.DeviceOrientationEvent && (window.innerHeight / window.innerWidth > 1)) {

    document.addEventListener("touchmove", function (e) {
        if (touch) {
            rightPaddleMax = W - bordersOffset - PaddleW;
            touchX = event.targetTouches[0].clientX - PaddleW / 2;
            limitPaddleMove(touchX, rightPaddleMax);
        }
    }, false);

    window.addEventListener('deviceorientation', function (e) {
        if (gyro) {
            PaddleDeltaX = event.gamma * 3;
        }
    }, false);
}
else {
    document.addEventListener("mousemove", function (e) {
        if (mouse) {
            rightPaddleMax = W - bordersOffset - PaddleW;
            mouseX = e.clientX - (window.innerWidth / 2 - W / 2 + PaddleW / 2);
            limitPaddleMove(mouseX, rightPaddleMax);
        }
    }, false);

    // Start Tracking Keystokes
    document.addEventListener('keydown', function (e) {
        if (keyboard) {
            if (e.keyCode == 39) {
                PaddleDeltaX = PaddleSpeedX;
            } else if (e.keyCode == 37) {
                PaddleDeltaX = -PaddleSpeedX;
            }
        }
    }, false);

    document.addEventListener('keyup', function (e) {
        if (keyboard) {
            if (e.keyCode == 39 || e.keyCode == 37) {
                PaddleDeltaX = 0;
            }
        }
    }, false);

    document.addEventListener('keyup', function (e) {
        if (keyboard) {
            if (e.keyCode == 32 && balls[0].BallStartPsn) {
                Balls[0].releaseBall();
            }
        }
    }, false);

}
document.addEventListener("click", function (e) {
    if (!keyboard&&Balls[0].BallStartPsn) {
        Balls[0].releaseBall();
    }
}, false);

//limit paddle move for keyboard and tilt
function movePaddle() {
    // If paddle reaches the ends, then don't let it move 
    if (PaddleDeltaX + PaddleX < bordersOffset){
        PaddleX = bordersOffset;
    } 
    else if(PaddleDeltaX + PaddleX + PaddleW > W-bordersOffset) {
        PaddleX = W-bordersOffset-PaddleW;
    }else{
        PaddleX = PaddleX + PaddleDeltaX;
    }
}

//limit mouse and touch paddle position
function limitPaddleMove(inputX, rightPaddleMax) {
    if (inputX > bordersOffset && inputX < rightPaddleMax) {
        PaddleX = inputX;
    } else if (inputX <= bordersOffset) {
        PaddleX = bordersOffset;
    }
    else if (inputX >= rightPaddleMax) {
        PaddleX = rightPaddleMax;
    }
}