var startBool = false;
var pauseBool = false;
//to stop soundtrack on game events
var soundtrackBool = true;
var pauseDIV = document.getElementById("pause");

document.getElementById('menus').style = "display:none";
setAudioCheckboxes();

function setAudioCheckboxes(){
	document.getElementById('music').checked = JSON.parse(localStorage.getItem('musicBool'));
	document.getElementById('sound').checked = JSON.parse(localStorage.getItem('soundBool'));
}

function saveAudioSettings(){
	localStorage.setItem('musicBool', document.getElementById('music').checked); 
	localStorage.setItem('soundBool', document.getElementById('sound').checked); 
}

function play_sound(sound) {
	if (document.getElementById("sound").checked) {
		sound.play();
	} else {
		sound.pause();
	}
	if (document.getElementById("music").checked&&soundtrackBool) {
		soundtrack.play();
	} else {
		soundtrack.pause();
	}
}

//open audio options
function options(){
	animLoop = cancelAnimationFrame(animLoop);
	setAudioCheckboxes();
	document.getElementById("menus").style = "display: block !important";
	document.getElementById("sound-options").style = "display: block !important";
	document.getElementById("gameplay-menu").style = "display: none !important";
}

//resume from audio options
function resume(){
	saveAudioSettings();
	document.getElementById("menus").style = "display: none !important";
	document.getElementById("sound-options").style = "display: none !important";
	document.getElementById("gameplay-menu").style = "display: block !important";
	animLoop = requestAnimationFrame(gameLoop);
}

function pause(){
	if(!pauseBool){
		pauseDIV.innerText = 'RESUME';
		animLoop = cancelAnimationFrame(animLoop);
		pauseBool = true;
	}else{
		pauseDIV.innerText = 'PAUSE';
		animLoop = requestAnimationFrame(gameLoop);
		pauseBool= false
	}
}