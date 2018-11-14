drawGameBox();
topCountersAreas();

if(localStorage.getItem("gyroBool")===null){
	console.log("init settings trigerred");
	initSettings();
	saveControls();
}else{
	setControlsCheckboxes();
}

if(localStorage.getItem("soundBool")===null){
	saveAudio();
}else{
	setAudioCheckboxes();
}

function initSettings(){
	document.getElementById('touch').checked = true;
	document.getElementById('mouse').checked = true;
	document.getElementById('music').checked = true;
	document.getElementById('sound').checked = true;
}

function setControlsCheckboxes(){
	document.getElementById('touch').checked = JSON.parse(localStorage.getItem('touchBool'));
	document.getElementById('gyro').checked = JSON.parse(localStorage.getItem('gyroBool'));
	document.getElementById('mouse').checked = JSON.parse(localStorage.getItem('mouseBool'));
	document.getElementById('keyboard').checked = JSON.parse(localStorage.getItem('keyboardBool'));
	document.getElementById('music').checked = JSON.parse(localStorage.getItem('musicBool'));
	document.getElementById('sound').checked = JSON.parse(localStorage.getItem('soundBool'));
}

function saveControls(){
	localStorage.setItem("gyroBool", document.getElementById("gyro").checked);
	localStorage.setItem("touchBool", document.getElementById("touch").checked);
	localStorage.setItem("keyboardBool", document.getElementById("keyboard").checked);
	localStorage.setItem("mouseBool", document.getElementById("mouse").checked);
	localStorage.setItem("mouseBool", document.getElementById("mouse").checked);
}

function saveAudio(){
	localStorage.setItem("musicBool", document.getElementById("music").checked);
	localStorage.setItem("soundBool", document.getElementById("sound").checked);
}

function setAudioCheckboxes(){
	document.getElementById('music').checked = JSON.parse(localStorage.getItem('musicBool'));
	document.getElementById('sound').checked = JSON.parse(localStorage.getItem('soundBool'));
}

function play_sound(sound) {
	if (document.getElementById("sound").checked) {
		sound.play();
	} else {
		sound.pause();
	}
}

function start_game(e) {
	document.getElementById("menus").style = "display: none !important";
	document.getElementById("gameplay_menu").style = "display: block";
	if (document.getElementById("music").checked) {
		soundtrack.play();
	} else {
		soundtrack.pause();
	}
}

function controls() {
	document.getElementById("main-menu").style = "display: none !important";
	document.getElementById("controlls").style = "display: block";
}

function sound() {
	document.getElementById("main-menu").style = "display: none !important";
	document.getElementById("sound-options").style = "display: block";
}

function bck_main() {
	document.getElementById("sound-options").style = "display: none !important";
	document.getElementById("controlls").style = "display: none !important";
	document.getElementById("main-menu").style = "display: block";
}

function options_bck_main(){
	bck_main();
	saveControls();
}

function audio_bck_main(){
	bck_main();
	saveAudio();
}

function pause(){
	startBool = false;
	document.getElementById("menu-heading").innerText = "PAUSE";
	document.getElementById("play-continue").innerText = "CONTINUE";
	document.getElementById("menus").style = "display: block";
	document.getElementById("sound-options").style = "display: none !important";
	document.getElementById("controlls").style = "display: none !important";
	document.getElementById("gameplay_menu").style = "display: none !important";
}