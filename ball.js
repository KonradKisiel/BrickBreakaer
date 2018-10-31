//********Ball************
var BallSpeed = W / 200;
var BallX = W / 2 + (W / 800 * Math.random());
var BallY = H - bot_line - W / 8;
var BallR = W / 48;
var BallDeltaX;
var BallDeltaY;

function drawBall() {
	c.save();
	c.beginPath();
	c.arc(BallX, BallY, BallR, 0, Math.PI * 2);
	c.fillStyle = "rgb(0,68,255)";
	c.fill();
	c.strokeStyle = "rgb(0,0,0)";
	c.lineWidth = 3;
	c.stroke();
	c.beginPath();
	c.arc(BallX - 2, BallY - 2, BallR - 5, 0, Math.PI * 2);
	c.strokeStyle = "rgb(0,128,255)";
	c.fillStyle = "rgb(0,128,255)";
	c.fill();
	c.restore();
}

function moveBall() {
	c.save();
	c.fillStyle = "rgb(0, 192, 192)";
	c.strokeStyle = "rgb(0, 0, 0)";

	if (BallY + BallDeltaY - BallR < top_line || collisionYWithBricks()) {
		BallDeltaY = -BallDeltaY;
		play_sound(brick_s);
	}

	// top bouncing effect
	if (BallY + BallDeltaY - BallR < top_line + 12) {
		c.beginPath();
		c.moveTo(per + bord / 2, top_line - bord);
		c.lineTo(W - per - bord / 2, top_line - bord);
		c.lineTo(W - borderX, top_line + borderYT);
		c.lineTo(borderX, top_line + borderYT);
		c.lineTo(per + bord / 2, top_line - bord);
		c.closePath();
		c.fill();
		c.lineWidth = 1.3 * bord;
		c.stroke();
		play_sound(edge_top_s);
	}
	// If the bottom of the Ball touches the bottom of the screen then end the game
	if (BallY + BallDeltaY + BallR > H - bot_line - 14) {
		if (lives > 0) {
			lives--;
			c.beginPath();
			c.moveTo(bord, H - bot_line);
			c.lineTo(W - bord, H - bot_line);
			c.lineTo(W - borderX, H - bot_line - borderYB);
			c.lineTo(borderX, H - bot_line - borderYB);
			c.closePath();
			c.fillStyle = "rgb(148, 0, 255)";
			c.fill();
			c.lineWidth = 2 * bord;
			c.stroke();
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
		c.beginPath();
		c.moveTo(per, top_line);
		c.lineTo(bord, H - bot_line);
		c.lineTo(borderX, H - bot_line - borderYB);
		c.lineTo(borderX, top_line + borderYT);
		c.lineTo(per, top_line);
		c.closePath();
		c.fill();
		c.lineWidth = 1.5 * bord;
		c.strokeStyle = "rgb(0, 0, 0)";
		c.stroke();
	}

	//right	side bounce effect
	if (BallX + BallDeltaX + BallR + per >= W - 10) {
		c.beginPath();
		c.moveTo(W - per, top_line);
		c.lineTo(W - bord, H - bot_line);
		c.lineTo(W - borderX, H - bot_line - borderYB);
		c.lineTo(W - borderX, top_line + borderYT);
		c.lineTo(W - per, top_line);
		c.closePath();
		c.fillStyle = "rgb(0, 192, 192)";
		c.fill();
		c.lineWidth = 1.5 * bord;
		c.strokeStyle = "rgb(0, 0, 0)";
		c.stroke();

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