drawGameBox();
topCountersAreas();

if(localStorage.getItem("gyroStorage")===null){
	initSettings();
	saveControls();
	saveAudio();

}else{
	loadCheckboxes();
}

function initSettings(){
	document.getElementById('touch').checked = true;
	document.getElementById('mouse').checked = true;
	document.getElementById('music').checked = true;
	document.getElementById('sound').checked = true;
}

function loadCheckboxes(){
	document.getElementById('touch').checked = JSON.parse(localStorage.getItem('touchBool'));
	document.getElementById('gyro').checked = JSON.parse(localStorage.getItem('gyroBool'));
	document.getElementById('mouse').checked = JSON.parse(localStorage.getItem('mouseBool'));
	document.getElementById('keyboard').checked = JSON.parse(localStorage.getItem('keyboardBool'));
	document.getElementById('music').checked = JSON.parse(localStorage.getItem('musicBool'));
	document.getElementById('sound').checked = JSON.parse(localStorage.getItem('soundBool'));
}

function saveControls(){
	if(document.getElementById("gyro").checked){
		localStorage.setItem("gyroBool", true);
	}else{
		localStorage.setItem("gyroBool", false);
	}
	if(document.getElementById("touch").checked){
		localStorage.setItem("touchBool", true);
	}else{
		localStorage.setItem("touchBool", false);
	}
	if(document.getElementById("keyboard").checked){
		localStorage.setItem("keyboardBool", true);
	}else{
		localStorage.setItem("keyboardBool", false);
	}
	if(document.getElementById("mouse").checked){
		localStorage.setItem("mouseBool", true);
	}else{
		localStorage.setItem("mouseBool", false);
	}
	if(document.getElementById("mouse").checked){
		localStorage.setItem("mouseBool", true);
	}else{
		localStorage.setItem("mouseBool", false);
	}
}

function saveAudio(){
	if(document.getElementById("music").checked){
		localStorage.setItem("musicBool", true);
	}else{
		localStorage.setItem("musicBool", false);
	}
	if(document.getElementById("sound").checked){
		localStorage.setItem("soundBool", true);
	}else{
		localStorage.setItem("soundBool", false);
	}
}
/*
function setMobileInput(){
	if(document.getElementById("touch").checked){
		localStorage.setItem("touchStorage", true);
		localStorage.setItem("gyroStorage", false);
	}else{
		localStorage.setItem("touchStorage", false);
		localStorage.setItem("gyroStorage", true);
	}
}

function setDesktopInput(){
	if(document.getElementById("mouse").checked){
		localStorage.setItem("mouseStorage", true);
		localStorage.setItem("keyboardStorage", false);
	}else{
		localStorage.setItem("mouseStorage", false);
		localStorage.setItem("keyboardStorage", true);
	}
}
*/
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
	saveOptions();
}
/*
function bck_to_menu() {
	document.location.reload();
}
*/
function pause(){
	startBool = false;
	document.getElementById("menu-heading").innerText = "PAUSE";
	document.getElementById("play-continue").innerText = "CONTINUE";
	document.getElementById("menus").style = "display: block";
	document.getElementById("sound-options").style = "display: none !important";
	document.getElementById("controlls").style = "display: none !important";
	document.getElementById("gameplay_menu").style = "display: none !important";
}