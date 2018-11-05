var startBool = false;
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
	startBool = true;
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

function bck_to_menu() {
	document.location.reload();
}

function pause(){
	startBool = false;
	document.getElementById("menus").style = "display: block";
	document.getElementById("sound-options").style = "display: none !important";
	document.getElementById("controlls").style = "display: none !important";
	document.getElementById("gameplay_menu").style = "display: none !important";
}