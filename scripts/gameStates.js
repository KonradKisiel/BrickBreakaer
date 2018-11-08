/*********************** Handle Levels ***********************/

var bricksArray = lvls[lvlCounter];

function setLvl(){
	drawBricks(bricksArray);
	//check if there is no more bricks on a screen
	if (sumArray(bricksArray) == 0){
	lvlCounter++;
		//if there is no more levels, win a game
		if(lvlCounter == lvls.length){
			winGame();
		//set up a new level
		}else{
			startBall();
			score = score + 10;
			lives = lives + 2;
			//take new lvl array
			bricksArray = lvls[lvlCounter];
			PaddleW = H / 6 - PaddleW / 9;
			BallSpeed = BallSpeed + PaddleW / 1000;
			play_sound(brick_s);
		}
	}
}

function updateCounters() {
	//top LCD counters area
	c.stroke();
	c.beginPath();
	c.fillStyle = "rgb(10, 10, 10)";
	c.fillRect(W / 3.8, H / 160, W * 0.33, H / 27);
	c.fillRect(W * 0.83, H / 160, W * 0.13, H / 27);
	//Counters description
	c.font = H / 21 + "px PipeDream";
	c.fillStyle = "rgb(0, 102, 204)";
	c.fillText("Score: ", W / 30, H / 24);
	c.fillText("Lives: ", W * 0.62, H / 24);
	c.strokeText("Score: ", W / 30, H / 24);
	c.strokeText("Lives: ", W * 0.62, H / 24);
	c.fillStyle = "rgb(255, 128, 0)";
	c.font = H / 27 + "px LCDPHONE";
	c.fillText(+score, W * 0.27, H / 25);
	c.fillText(+lives, W / 1.19, H / 25);

	// start conditions
	if (ballStartPsn && startBool) {
		c.font = H/ 14 + "px LCDPHONE";
		c.fillStyle = "rgb(255, 128, 0)";
		//center text
		c.translate(W/2-H/3.7, 0);
		c.fillText("TAP TO START", 0, H * 0.94);
		c.translate(-W/2+H/3.7, 0);

	}
}
/*
function stopGameLoop() {
	cancelAnimationFrame(animLoop);
}
*/
function endGame() {
	c.fillStyle = "rgb(255, 128, 0)";
	c.font =  H/ 14 + "px LCDPHONE";
	c.translate(W/2-H/4.9, 0)
	c.fillText("GAME OVER", 0, H * 0.94);
	c.translate(-W/2+H/4.9, 0);
	// stop playing music
	soundtrack.pause();
	play_sound(gameOver_s);
	//stop gameLoop
	animLoop = cancelAnimationFrame(animLoop);
}

function winGame() {
	c.fillStyle = "rgb(255, 128, 0)";
	c.font =  H/ 14 + "px LCDPHONE";
	c.translate(W/2-H/6.5, 0)
	c.fillText("YOU WIN", 0, H * 0.94);
	c.translate(-W/2+H/6.5, 0);
	soundtrack.pause();
	play_sound(win_s);
	//stop gameLoop
	animLoop = cancelAnimationFrame(animLoop);
}
