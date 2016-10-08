var canvas = new Canvas(400, 600);
// var canvas = new Canvas(window.innerWidth, window.innerHeight);
var ball = new Ball(20, "crimson");
var bouncer = new Bouncer(40, "lime");
var physics = new Physics([bouncer, ball]);
var time = new Time(1000);

window.onload = function() {
	frameTime = 0;

	canvas.init();
	canvas.mouseListen();

	var stat = document.querySelector("#stat");
	time.go();
}