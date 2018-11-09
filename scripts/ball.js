//***************** Ball Settings ******************
//speed
var BallSpeed = H / 350;
//vertical start psn
var BallX = W / 2;
//horizontal start psn
var BallY = H - bottomInfoArea - W / 8;
//ball radius
var BallR = H / 80;

function drawBall() {
    c.beginPath();
    c.arc(BallX, BallY, BallR, 0, Math.PI * 2);
    c.fillStyle = "rgb(0,68,255)";
    c.fill();
    c.stroke();
    c.closePath();
}

// set starting ball position
function startBall() {
	BallDeltaY = 0;
	BallDeltaX = 0;
	PaddleDeltaX = 0;
	BallX = W / 2 + PaddleDeltaX;
	BallY = H - bottomInfoArea - W / 8;
	PaddleX = W / 2 - PaddleW / 2;
	ballStartPsn = true;
}

//add movent to a ball
function releaseBall(){
    BallDeltaY = 4;
    BallDeltaX = 0;
    ballStartPsn = false;
}

//handle ball actions
function moveBall() {
	c.save();
	//set highlighted borders color
	c.fillStyle = "rgb(0, 192, 192)";
	c.strokeStyle = "rgb(0, 0, 0)";

	if (BallY + BallDeltaY - BallR < topCounterArea || collisionYWithBricks()) {
		BallDeltaY = -BallDeltaY;
		play_sound(brick_s);
	}

	// top bouncing effect
	if (BallY + BallDeltaY - BallR < topCounterArea + 12) {
		drawTopBorder();
	}
	// If the bottom of the Ball touches the bottom of the screen then end the game
	if (BallY + BallDeltaY + BallR > H - bottomInfoArea - 14) {
		if (lives > 0) {
			lives--;
			drawBottomBorder();
			play_sound(liveloss_s);
			startBall();
			// BallDeltaY = -BallDeltaY;		
		}
		else {
			endGame();
		}
	}
	// If side of Ball touches either side of the wall then reverse X direction
	//left of Ball moves too far left
	if ((BallX + BallDeltaX - BallR<= 0) ||
		//or right side of Ball moves too far right
		(BallX + BallDeltaX + BallR >= W) || collisionXWithBricks()) {
		BallDeltaX = -BallDeltaX;
		play_sound(edge_s);
	}
	//left side bounce effect
	if (BallX + BallDeltaX - BallR - bordersOffset <= 0) {
		drawLeftBorder();
		play_sound(edge_s);
	}

	//right	side bounce effect
	if (BallX + BallDeltaX + BallR + bordersOffset >= W) {
		drawRightBorder();
		play_sound(edge_s);
	}

	// if bottom of Ball reaches the top of paddle,
	if (BallY + BallDeltaY + BallR >= PaddleY) {
		// and it is positioned between the two ends of the paddle (is on top)
		if (BallX + BallDeltaX + BallR >= PaddleX &&
			BallX + BallDeltaX - BallR <= PaddleX + PaddleW) {
			BallDeltaX = BallDeltaX / 2.5 + ((BallX + BallDeltaX) - (PaddleX + PaddleW / 2)) / (PaddleW / 4.4)
			BallDeltaY = - BallDeltaY
			play_sound(paddle_s);
		}
	}
	c.restore();

	// Move the Ball
	BallX = BallX + BallDeltaX * BallSpeed;
	BallY = BallY + BallDeltaY * BallSpeed;
}