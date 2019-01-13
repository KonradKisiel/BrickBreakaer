/* ************************** BRICKS **************************** */

var bricksRow = 18;
var brickHeight = PaddleH;
var brickWidth = W / bricksRow;
var brickX;
var brickY;
var PowerupX;
var PowerupY;
var randNbr;

// draw a single brick
function drawSingleBrick(x, y, brickType) {
    if (brickType) {
        brickX = x * brickWidth;
        brickY = y * brickHeight;
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
        c.strokeRect(brickX, brickY, brickWidth, brickHeight);
        c.fillRect(brickX, brickY, brickWidth, brickHeight);
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

function weakenBrick(x, y, brickX, brickY) {
	// First weaken the brick (0 means brick has gone)
	bricksArray[x][y]--;

	if (bricksArray[x][y] > 0) {
		// The brick is weakened but still around. Give a single point.
		score++;
	} else {
        randNbr = Math.round(Math.random()*4);
        if(randNbr>2){
            PowerupX = brickX+brickWidth/2;
            PowerupY = brickY-brickHeight/2;    
            CreatePowerup(PowerupX, PowerupY, randNbr);
        }
		// give player an extra point when the brick disappears
		score += 2;
		play_sound(delbrick_s);
	}
}