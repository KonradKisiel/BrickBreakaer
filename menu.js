var startBool = false;
function play_sound(sound) {
	if (document.getElementById("sound").checked) {
		sound.play();
	} else {
		sound.pause();
	}
}
    
function start_game(e) {
	document.getElementById("menus").style = "display: none";
	document.getElementById("bck_to_menu").style = "display: block";
	if (document.getElementById("music").checked) {
		soundtrack.play();
	} else {
		soundtrack.pause();
	}
	startBool = true;
	//e.stopPropagation(); // not working
}

function controls() {
	document.getElementById("main-menu").style = "display: none";
	document.getElementById("controlls").style = "display: block";
}

function sound() {
	document.getElementById("main-menu").style = "display: none";
	document.getElementById("sound-options").style = "display: block";
}

function bck_main() {
	document.getElementById("sound-options").style = "display: none";
	document.getElementById("controlls").style = "display: none";
	document.getElementById("main-menu").style = "display: block";
}

function bck_to_menu() {
	startBool = false;
	document.getElementById("menus").style = "display: block";
	document.getElementById("sound-options").style = "display: none";
	document.getElementById("controlls").style = "display: none";
	document.getElementById("bck_to_menu").style = "display: none";
}