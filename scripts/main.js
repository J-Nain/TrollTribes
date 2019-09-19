var BUTTON = document.querySelector('button');
var TITLE = document.querySelector('h1');
var IMG = document.querySelector('img');

if(localStorage.getItem('name')) {
	var myName = localStorage.getItem('name');
	setTitle('Welcome ' + myName);
}



function setTitle(str) {
	TITLE.textContent = str;
}

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	setTitle('Welcome ' + myName);
	
}

BUTTON.onclick = function() { setUserName() };


IMG.onclick = function () {
	if(IMG.getAttribute('src') == 'images/g6707.png') {
		IMG.setAttribute('src', 'images/path10.png');
	} else {
		IMG.setAttribute('src', 'images/g6707.png');
	}
}
