var startBool = false;
var pauseBool = false;

document.getElementById('menus').style = "display:none";
setAudioCheckboxes();

function setAudioCheckboxes(){
	document.getElementById('music').checked = JSON.parse(localStorage.getItem('musicBool'));
	document.getElementById('sound').checked = JSON.parse(localStorage.getItem('soundBool'));
}

function saveAudio(){
	localStorage.setItem('musicBool', document.getElementById('music').checked); 
	localStorage.setItem('soundBool', document.getElementById('sound').checked); 
}

function play_sound(sound) {
	if (document.getElementById("sound").checked) {
		sound.play();
	} else {
		sound.pause();
	}

	if (document.getElementById("music").checked) {
		soundtrack.play();
	} else {
		soundtrack.pause();
	}
}

function options(){
	animLoop = cancelAnimationFrame(animLoop);
	setAudioCheckboxes();
	document.getElementById("menus").style = "display: block !important";
	document.getElementById("sound-options").style = "display: block !important";
	document.getElementById("gameplay_menu").style = "display: none !important";
}

function resume(){
	saveAudio();
	document.getElementById("menus").style = "display: none !important";
	document.getElementById("sound-options").style = "display: none !important";
	document.getElementById("gameplay_menu").style = "display: block !important";
	animLoop = requestAnimationFrame(gameLoop);
	//pauseBool= false;
}

var pauseDIV = document.getElementById("pause");

function pause(){
	if(!pauseBool){
		pauseDIV.innerHTML = 'RESUME';
		animLoop = cancelAnimationFrame(animLoop);
		pauseBool = true;
	}else{
		pauseDIV.innerHTML = 'PAUSE';
		animLoop = requestAnimationFrame(gameLoop);
		pauseBool= false
	}
}