//this.BallY = this.BallY + this.BallDeltaY * BallSpeed;
var Powerups = [];
var PowerupR = BallR;
var PowerupX;
var PowerupY;
var randNbr;

function removeElementFromArray(element, array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] == element) {
            array.splice(i, 1);
            i--;
        }
    }
}

function CreatePowerup(PowerupX, PowerupY, randNbr) {
    switch (randNbr) {
        case 3:
            Powerups.push(new AdditionalLive(PowerupX, PowerupY, randNbr));
            break;
        case 4:
            Powerups.push(new ExtraScores(PowerupX, PowerupY, randNbr));
            break;
    }
}

function Powerup() {
    this.PowerupX = PowerupX;
    this.PowerupY = PowerupY;
    this.randNbr = randNbr;
    this.PowerupDeltaY = 3;
   // this.PowerupR = BallR;
}

Powerup.prototype.movePowerup = function () {
    // if Powerup reaches the top of paddle,
    if (this.PowerupY + this.PowerupDeltaY + PowerupR > PaddleY) {
        // and it is positioned between the two ends of the paddle (is on top)
        if (this.PowerupX + PowerupR >= PaddleX &&
            this.PowerupX - PowerupR <= PaddleX + PaddleW) {
                switch (randNbr) {
                    case 3:
                        console.log("additional live");
                        lives++;
                        removeElementFromArray(this, Powerups);
                        break;
                    case 4:
                        console.log("additional scores");
                        score+=10;
                        removeElementFromArray(this, Powerups);
                        break;
                }
            play_sound(delbrick_s);
        }
    }

    // If the Powerup touches the bottom of the game area, destroy it
    if (this.PowerupY + this.PowerupDeltaY + this.PowerupR > H - bottomInfoArea - bordersOffset) {
        for (var i = 0; i < Powerups.length; i++) {
            if (Powerups[i] == this) {
                Powerups.splice(i, 1);
                i--;
                console.log("destroy it");
            }
        }
    }
    this.PowerupY = this.PowerupY + this.PowerupDeltaY * GameSpeed;
}

Powerup.prototype.drawPowerup = function () {
    switch (randNbr) {
        case 3:
            this.drawAdditionalLive();
            break;
        case 4:
            this.drawExtraScores();
            break;
    }
}

function AdditionalLive(...args){
    Powerup.apply(this, args);
}

AdditionalLive.prototype = Object.create(Powerup.prototype);

AdditionalLive.prototype.drawAdditionalLive = function(){
    c.font = H / 21 + "px PipeDream";
	c.fillStyle = "rgb(0, 102, 204)";
	c.fillText("L+", this.PowerupX, this.PowerupY);
}

function ExtraScores(...args){
    Powerup.apply(this, args);
}

ExtraScores.prototype = Object.create(Powerup.prototype);

ExtraScores.prototype.drawExtraScores = function(){
    c.font = H / 21 + "px PipeDream";
	c.fillStyle = "rgb(0, 102, 204)";
	c.fillText("S+", this.PowerupX, this.PowerupY);
}



/*
Powerup.prototype.drawPowerUp = function () {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.PowerupR, 0, Math.PI * 2);
    c.lineWidth = H / 300;
    c.strokeStyle = "rgb(0,68,255)";
    c.stroke();
    c.closePath();
    c.restore();
}


function drawNarrowerPaddlePowerup(x, y, BallR){
    drawTriangle(x-BallR/2, y, BallR);
    drawTriangle(x+BallR/2, y, BallR);
}

function drawTriangle(centerX, centerY, radius) {
    side = 2 * Math.sqrt(3) * radius;
    ctx.beginPath();
    c.lineWidth = H / 300;
    c.fillStyle = "rgb(0,68,255)";
    ctx.moveTo(centerX, centerY - side);
    ctx.lineTo(centerX, centerY + side);
    ctx.lineTo(centerX+radius, centerY - side/2);
    ctx.lineTo(centerX, centerY - side);
    
    ctx.moveTo(centerX - side / 2, centerY + radius);
    ctx.lineTo(centerX + side / 2, centerY + radius);
    ctx.lineTo(centerX, centerY - 2 * radius);
    ctx.lineTo(centerX - side / 2, centerY + radius);
    
    ctx.stroke();
    ctx.closePath();
}

function widerPaddle(x, y) {
    c.fillStyle = "rgb(0,68,255)";
    c.strokeRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
    c.fillRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
}

function narrowerPaddle() {

}

function extraBall(x, y) {
    balls.push(new Ball(BallSpeed, x, y, BallR, 4, BallDeltaX, !ballStartPsn));
}
*/