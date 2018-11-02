// set starting ball position
function startBall() {
	ballStartPsn = true;
	BallDeltaY = 0;
	BallDeltaX = 0;
	PaddleDeltaX = 0;
	BallX = W / 2 + PaddleDeltaX;
	BallY = H - bot_line - W / 8;
	PaddleX = W / 2 - PaddleW / 2;
}

function moveBall() {
	c.save();
	//set highlighted borders color
	c.fillStyle = "rgb(0, 192, 192)";
	c.strokeStyle = "rgb(0, 0, 0)";

	if (BallY + BallDeltaY - BallR < top_line || collisionYWithBricks()) {
		BallDeltaY = -BallDeltaY;
		play_sound(brick_s);
	}

	// top bouncing effect
	if (BallY + BallDeltaY - BallR < top_line + 12) {
		drawTopBorder();
	}
	// If the bottom of the Ball touches the bottom of the screen then end the game
	if (BallY + BallDeltaY + BallR > H - bot_line - 14) {
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
	if ((BallX + BallDeltaX - BallR - 18 <= 0) ||
		//or right side of Ball moves too far right
		(BallX + BallDeltaX + BallR + 18 >= W) || collisionXWithBricks()) {
		BallDeltaX = -BallDeltaX;
		play_sound(edge_s);
	}
	//left side bounce effect
	if (BallX + BallDeltaX - BallR - per <= 10) {
		drawLeftBorder();
	}

	//right	side bounce effect
	if (BallX + BallDeltaX + BallR + per >= W - 10) {
		drawRightBorder();
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