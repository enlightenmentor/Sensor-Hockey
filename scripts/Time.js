function Time(speed) {
	this.speed = speed;
	this.now = 0;
}
Time.prototype = {
	go: function() {
		this.now++;
		var its = this;
		setTimeout(function() {
			var that = its;
			requestAnimationFrame(function() {
				that.go();
			});

            canvas.styleIt();
	        ball.update();
	        bouncer.update();
            physics.update();

            stat.innerHTML = 
            "Ball speed = " + ball.speed + "<br>" +
            "Bouncer speed = " + bouncer.speed;
		}, 1000/its.speed);
	}
}