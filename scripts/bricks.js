/* ************************** BRICKS **************************** */

var bricksRow = 18;
var brickHeight = PaddleH;
var brickWidth = W / bricksRow;

// draw a single brick
function drawSingleBrick(x, y, brickType) {
    if (brickType) {
        switch (brickType) { // if brick is still visible; three colours for three types of bricks
            case 1:
                c.fillStyle = "rgba(64,172,0,0.8)";
                break;
            case 2:
                c.fillStyle = "rgba(0,176,148,0.8)";
                break;
            case 3:
                c.fillStyle = "rgba(255,128,0,0.8)";
                break;
            case 4:
                c.fillStyle = "rgba(196,32,0,0.8)";
                break;
        }
        c.strokeRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
        c.fillRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
    }
}
// iterate through the bricksArray array and draw each brick using drawSingleBrick()
function drawBricks(bricksArray) {
    for (var i = 0; i < bricksArray.length; i++) {
        for (var j = 0; j < bricksArray[i].length; j++) {
            drawSingleBrick(j, i, bricksArray[i][j]);
        }
    }
}

//************* Handle Collisions **************/

function collisionXWithBricks() {
	var bumpedX = false;
	for (var i = 0; i < bricksArray.length; i++) {
		for (var j = 0; j < bricksArray[i].length; j++) {
			if (bricksArray[i][j]) { // if brick is still visible
				var brickX = j * brickWidth;
				var brickY = i * brickHeight;
				if (
					// barely touching from left
					((BallX + BallDeltaX * BallSpeed + BallR >= brickX) &&
						(BallX + BallR <= brickX))
					||
					// barely touching from right
					((BallX + BallDeltaX * BallSpeed - BallR <= brickX + brickWidth) &&
						(BallX - BallR >= brickX + brickWidth))
				) {
					if ((BallY + BallDeltaY * BallSpeed - BallR <= brickY + brickHeight) &&
						(BallY + BallDeltaY * BallSpeed + BallR >= brickY)) {
						// weaken brick and increase score
						explodeBrick(i, j);
						bumpedX = true;
					}
				}
			}
		}
	}
	return bumpedX;
}

function collisionYWithBricks() {

	var bumpedY = false;
	for (var i = 0; i < bricksArray.length; i++) {
		for (var j = 0; j < bricksArray[i].length; j++) {
			if (bricksArray[i][j]) { // if brick is still visible
				var brickX = j * brickWidth;
				var brickY = i * brickHeight;
				if (
					// barely touching from below
					((BallY + BallDeltaY * BallSpeed - BallR <= brickY + brickHeight) &&
						(BallY - BallR >= brickY + brickHeight))
					||
					// barely touching from above
					((BallY + BallDeltaY * BallSpeed + BallR >= brickY) &&
						(BallY + BallR <= brickY))) {
					if (BallX + BallDeltaX * BallSpeed + BallR >= brickX &&
						BallX + BallDeltaX * BallSpeed - BallR <= brickX + brickWidth) {
						// weaken brick and increase score
						explodeBrick(i, j);
						bumpedY = true;
					}
				}
			}
		}
	}
	return bumpedY;
} function explodeBrick(i, j) {
	// First weaken the brick (0 means brick has gone)
	bricksArray[i][j]--;

	if (bricksArray[i][j] > 0) {
		// The brick is weakened but still around. Give a single point.
		score++;
	} else {
		// give player an extra point when the brick disappears
		score += 2;
		play_sound(delbrick_s);
	}
}