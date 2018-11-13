var startBool = false;
var pauseBool = false;

document.getElementById('menus').style = "display:none";
var soundB = JSON.parse(localStorage.getItem('soundBool'));
var musicB = JSON.parse(localStorage.getItem('musicBool'));

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
	if(!pauseBool){
		animLoop = cancelAnimationFrame(animLoop);
		pauseBool = true;
		document.getElementById("menus").style = "display: block !important";
		document.getElementById("sound-options").style = "display: block !important";
		document.getElementById("gameplay_menu").style = "display: none !important";
	}else{
		document.getElementById("menus").style = "display: none !important";
		document.getElementById("sound-options").style = "display: none !important";
		document.getElementById("gameplay_menu").style = "display: block !important";
		animLoop = requestAnimationFrame(gameLoop);
		pauseBool= false;
	}
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

/*

function play_sound(sound) {
	if (document.getElementById("sound").checked) {
		sound.play();
	} else {
		sound.pause();
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

function bck_to_menu() {
	//document.location.reload();
}

function options(){
	animLoop = cancelAnimationFrame(animLoop);
	!startBool;
	document.getElementById("menus").style = "display: block !important";
}
*/