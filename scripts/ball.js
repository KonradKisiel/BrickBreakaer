//***************** Ball Settings ******************
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
var BallStartPsn = true;
//create first ball
var ball = new Ball(GameSpeed, BallX, BallY, BallR, BallDeltaY, BallDeltaX, BallStartPsn);
//array to store all active balls
var Balls = [ball];
//balls.push(new Ball(GameSpeed, BallX+3*BallR, BallY, BallR, 4, BallDeltaX, false));

function Ball() {
	this.BallX = BallX;
	this.BallY = BallY;
	this.BallR = BallR;
	this.BallDeltaY = BallDeltaY;
	this.BallDeltaX = BallDeltaX;
	this.BallStartPsn = BallStartPsn;
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
	this.BallStartPsn = true;
	this.PaddleX = W / 2 - PaddleW / 2;
}

//add movent to a ball
Ball.prototype.releaseBall = function () {
	this.BallDeltaY = 4;
	this.BallDeltaX = 0;
	this.BallStartPsn = false;
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

	if (this.BallY + this.BallDeltaY + this.BallR > H - bottomInfoArea - bordersOffset) {
		if (lives > 0) {
			if (Balls.length > 1) {
				//remove this ball
				//removeElementFromArray(this, Balls);
				for (var i = 0; i < Balls.length; i++) {
					if (Balls[i] == this) {
						Balls.splice(i, 1);
						i--;
					}
				}
			} else {
				lives--;
				//if there is only one ball set it on start psn
				Balls[0].startBall();
			}
			drawBottomBorder();
			play_sound(liveloss_s);
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
					((this.BallX + this.BallDeltaX * GameSpeed + BallR >= brickX) &&
						(this.BallX + this.BallR <= brickX))
					||
					// touch from right
					((this.BallX + this.BallDeltaX * GameSpeed - BallR <= brickX + brickWidth) &&
						(this.BallX - this.BallR >= brickX + brickWidth))
				) {
					if ((this.BallY + this.BallDeltaY * GameSpeed - BallR <= brickY + brickHeight) &&
						(this.BallY + this.BallDeltaY * GameSpeed + BallR >= brickY)) {
						//change ball direction
						this.BallDeltaY = - this.BallDeltaY;
						// weaken brick and increase score
						weakenBrick(i, j, brickX, brickY);
					}
				}
			}
		}
	}

	for (var i = 0; i < bricksArray.length; i++) {
		for (var j = 0; j < bricksArray[i].length; j++) {
			if (bricksArray[i][j]) { // if brick is still visible
				brickX = j * brickWidth;
				brickY = i * brickHeight;
				if (
					// barely touching from below
					((this.BallY + this.BallDeltaY * GameSpeed - this.BallR <= brickY + brickHeight) &&
						(this.BallY - this.BallR >= brickY + brickHeight))
					||
					// barely touching from above
					((this.BallY + this.BallDeltaY * GameSpeed + this.BallR >= brickY) &&
						(this.BallY + this.BallR <= brickY))) {
					if (this.BallX + this.BallDeltaX * GameSpeed + this.BallR >= brickX &&
						this.BallX + this.BallDeltaX * GameSpeed - this.BallR <= brickX + brickWidth) {
						//change ball direction
						this.BallDeltaY = - this.BallDeltaY;
						// weaken brick and increase score
						weakenBrick(i, j, brickX, brickY);
					}
				}
			}
		}
	}

	// Move the Ball
	this.BallX = this.BallX + this.BallDeltaX * GameSpeed;
	this.BallY = this.BallY + this.BallDeltaY * GameSpeed;
}

