//************** Counters *****************
var score = 0;
var lives = 7;
var lvlCounter = 0;

function topCountersAreas(){
	//top LCD counters area
	c.fillStyle = "rgb(10, 10, 10)";
	c.fillRect(W / 3.8, H / 160, W * 0.33, H / 27);
	c.fillRect(W * 0.83, H / 160, W * 0.13, H / 27);
	//Counters description
	c.font = H / 21 + "px PipeDream";
	c.fillStyle = "rgb(0, 102, 204)";
	c.fillText("Score: ", bordersOffset/2, H / 24);
	c.fillText("Lives: ", W * 0.6, H / 24);
	c.strokeText("Score: ", bordersOffset/2, H / 24);
	c.strokeText("Lives: ", W * 0.6, H / 24);
}

function updateCounters() {
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