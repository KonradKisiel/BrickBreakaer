//***************** Ball Settings ******************
//speed
var BallSpeed = H / 500;
//vertical start psn
var BallX = W / 2;
//horizontal start psn
var BallY = H - bottomInfoArea - W / 8;
//ball radius
var BallR = H / 80;
//initial vertical ball speed
var BallDeltaY = 0;
//initial orizontal ball speed
var BallDeltaX = 0;
//ball on start psn
var ballStartPsn = true;
//create first ball
var ball = new Ball(BallSpeed, BallX, BallY, BallR, BallDeltaY, BallDeltaX, ballStartPsn);
//array to store all active balls
var balls = [ball];
var lastBall;
//balls.push(new Ball(BallSpeed, BallX+3*BallR, BallY, BallR, 4, BallDeltaX, false));

function Ball(BallSpeed, BallX, BallY, BallR, BallDeltaY, BallDeltaX, ballStartPsn) {
	this.BallSpeed = BallSpeed;
	this.BallX = BallX;
	this.BallY = BallY;
	this.BallR = BallR;
	this.BallDeltaY = BallDeltaY;
	this.BallDeltaX = BallDeltaX;
	this.ballStartPsn = ballStartPsn;
}

Ball.prototype.drawBall = function () {
	c.beginPath();
	c.arc(this.BallX, this.BallY, this.BallR, 0, Math.PI * 2);
	c.fillStyle = "rgb(0,68,255)";
	c.fill();
	c.stroke();
	c.closePath();
}

// set starts ball position
Ball.prototype.startBall = function () {
	this.BallDeltaY = 0;
	this.BallDeltaX = 0;
	this.PaddleDeltaX = 0;
	this.BallX = BallX; // W / 2 + PaddleDeltaX;
	this.BallY = BallY; // H - bottomInfoArea - W / 8;
	this.ballStartPsn = true;
	this.PaddleX = W / 2 - PaddleW / 2;
}

//add movent to a ball
Ball.prototype.releaseBall = function () {
	this.BallDeltaY = 4;
	this.BallDeltaX = 0;
	this.ballStartPsn = false;
}

//handle ball actions
Ball.prototype.moveBall = function () {
	c.save();
	//set highlighted borders color
	c.fillStyle = "rgb(0, 192, 192)";

	if (this.BallY + this.BallDeltaY - this.BallR < topCounterArea + bordersOffset) {
		this.BallDeltaY = -this.BallDeltaY;
		// top bouncing effect
		drawTopBorder();
		play_sound(brick_s);
	}
	// If the bottom of the Ball touches the bottom of the screen then end the game
	if (this.BallY + this.BallDeltaY + this.BallR > H - bottomInfoArea - bordersOffset) {
		if (lives > 0) {
			drawBottomBorder();
			play_sound(liveloss_s);
			if (balls.length > 1) {

				for (var i = 0; i < balls.length; i++) {
					if (balls[i] == this) {
						balls.splice(i, 1);
						i--;
					}
				}
			} else {
				lives--;
				//if there is only one ball set it on start psn
				balls[0].startBall();
			}
		}
		else {
			endGame();
		}
	}

	//left side bounce effect
	if (this.BallX + this.BallDeltaX - this.BallR - bordersOffset < 0) {
		this.BallDeltaX = -this.BallDeltaX;
		drawLeftBorder();
		play_sound(edge_s);
	}

	//right	side bounce effect
	if (this.BallX + this.BallDeltaX + this.BallR + bordersOffset > W) {
		this.BallDeltaX = -this.BallDeltaX;
		drawRightBorder();
		play_sound(edge_s);
	}

	// if bottom of Ball reaches the top of paddle,
	if (this.BallY + this.BallDeltaY + this.BallR > PaddleY) {
		// and it is positioned between the two ends of the paddle (is on top)
		if (this.BallX + this.BallDeltaX + this.BallR >= PaddleX &&
			this.BallX + this.BallDeltaX - this.BallR <= PaddleX + PaddleW) {
			this.BallDeltaX = this.BallDeltaX / 2.5 + ((this.BallX + this.BallDeltaX) - (PaddleX + PaddleW / 2)) / (PaddleW / 4.4)
			this.BallDeltaY = - this.BallDeltaY
			play_sound(paddle_s);
		}
	}
	c.restore();

	//************* Handle Collisions with bricks **************/
	for (var i = 0; i < bricksArray.length; i++) {
		for (var j = 0; j < bricksArray[i].length; j++) {
			if (bricksArray[i][j]) { // if brick is still visible
				brickX = j * brickWidth;
				brickY = i * brickHeight;
				if (
					// touch from left
					((this.BallX + this.BallDeltaX * BallSpeed + this.BallR >= brickX) &&
						(this.BallX + this.BallR <= brickX))
					||
					// touch from right
					((this.BallX + this.BallDeltaX * BallSpeed - this.BallR <= brickX + brickWidth) &&
						(this.BallX - this.BallR >= brickX + brickWidth))
				) {
					if ((this.BallY + this.BallDeltaY * BallSpeed - this.BallR <= brickY + brickHeight) &&
						(this.BallY + this.BallDeltaY * BallSpeed + this.BallR >= brickY)) {
						//change ball direction
						this.BallDeltaY = - this.BallDeltaY;
						// weaken brick and increase score
						weakenBrick(i, j);
					}
				}
			}
		}
	}

	for (var i = 0; i < bricksArray.length; i++) {
		for (var j = 0; j < bricksArray[i].length; j++) {
			if (bricksArray[i][j]) { // if brick is still visible
				var brickX = j * brickWidth;
				var brickY = i * brickHeight;
				if (
					// barely touching from below
					((this.BallY + this.BallDeltaY * BallSpeed - this.BallR <= brickY + brickHeight) &&
						(this.BallY - this.BallR >= brickY + brickHeight))
					||
					// barely touching from above
					((this.BallY + this.BallDeltaY * BallSpeed + this.BallR >= brickY) &&
						(this.BallY + this.BallR <= brickY))) {
					if (this.BallX + this.BallDeltaX * BallSpeed + this.BallR >= brickX &&
						this.BallX + this.BallDeltaX * BallSpeed - this.BallR <= brickX + brickWidth) {
						//change ball direction
						this.BallDeltaY = - this.BallDeltaY;
						// weaken brick and increase score
						weakenBrick(i, j);
					}
				}
			}
		}
	}

	// Move the Ball
	this.BallX = this.BallX + this.BallDeltaX * BallSpeed;
	this.BallY = this.BallY + this.BallDeltaY * BallSpeed;
}

