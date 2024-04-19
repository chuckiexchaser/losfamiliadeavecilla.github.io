let homeX = window.innerWidth * 0;
let homeY = window.innerHeight * 0;

let activityX = window.innerWidth * 0;
let activityY = window.innerHeight * 1;

let memberX = window.innerWidth * 0;
let memberY = window.innerHeight * 2;

function home() {
	scrollTo(homeX, homeY);
}

function activity() {
	scrollTo(activityX, activityY);
}

function member() {
	scrollTo(memberX, memberY);
}

function commercial() {
	window.location.href = 'pages/commercial.html';
}

function scenery() {
	window.location.href = 'pages/scenery.html';
}

function infographic() {
	window.location.href = 'pages/infographic.html';
}

function reflection() {
	window.location.href = 'pages/reflection.html';
}
