drawGameBox();
//font preload, draw top counters area
document.fonts.load('10pt "PipeDream"').then(topCountersAreas);
//if controls settings are not set up
if(localStorage.getItem("gyroBool")===null){
	console.log("init settings trigerred");
	initSettings();
	saveControlsSettings();
}else{
	//load checkboxes data from local storage
	setControlsCheckboxes();
}

if(localStorage.getItem("soundBool")===null){
	saveAudioSettings();
}else{
	setAudioCheckboxes();
}

//initial settings (for the first run)
function initSettings(){
	document.getElementById('touch').checked = true;
	document.getElementById('mouse').checked = true;
	document.getElementById('music').checked = true;
	document.getElementById('sound').checked = true;
}

//load controls settings form local storage and set controls menu checkboxes
function setControlsCheckboxes(){
	document.getElementById('touch').checked = JSON.parse(localStorage.getItem('touchBool'));
	document.getElementById('gyro').checked = JSON.parse(localStorage.getItem('gyroBool'));
	document.getElementById('mouse').checked = JSON.parse(localStorage.getItem('mouseBool'));
	document.getElementById('keyboard').checked = JSON.parse(localStorage.getItem('keyboardBool'));
	document.getElementById('music').checked = JSON.parse(localStorage.getItem('musicBool'));
	document.getElementById('sound').checked = JSON.parse(localStorage.getItem('soundBool'));
}

//save controls settings to local storage
function saveControlsSettings(){
	localStorage.setItem("gyroBool", document.getElementById("gyro").checked);
	localStorage.setItem("touchBool", document.getElementById("touch").checked);
	localStorage.setItem("keyboardBool", document.getElementById("keyboard").checked);
	localStorage.setItem("mouseBool", document.getElementById("mouse").checked);
	localStorage.setItem("mouseBool", document.getElementById("mouse").checked);
}

//save audio settings to local storage
function saveAudioSettings(){
	localStorage.setItem("musicBool", document.getElementById("music").checked);
	localStorage.setItem("soundBool", document.getElementById("sound").checked);
}

//load audio settings form local storage and set audio menu checkboxes
function setAudioCheckboxes(){
	document.getElementById('music').checked = JSON.parse(localStorage.getItem('musicBool'));
	document.getElementById('sound').checked = JSON.parse(localStorage.getItem('soundBool'));
}

//display scoreboard
function scoreboard(){
	document.getElementById("main-menu").style = "display: none !important";
	document.getElementById("scoreboard").style = "display: block";
}

//display controls settings
function controls() {
	document.getElementById("main-menu").style = "display: none !important";
	document.getElementById("controlls").style = "display: block";
}

//display sound settings
function sound() {
	document.getElementById("main-menu").style = "display: none !important";
	document.getElementById("sound-options").style = "display: block";
}

//back from submenu to main menu
function bck_main() {
	document.getElementById("sound-options").style = "display: none !important";
	document.getElementById("controlls").style = "display: none !important";
	document.getElementById("scoreboard").style = "display: none !important";
	document.getElementById("main-menu").style = "display: block";
}

//back to main manu from controls settings and save it
function options_bck_main(){
	bck_main();
	saveControlsSettings();
}

//back to main manu from audio settings and save it
function audio_bck_main(){
	bck_main();
	saveAudioSettings();
}