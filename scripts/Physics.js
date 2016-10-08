function Physics(objects) {
	this.objects = objects;
}
Physics.prototype = {
    update: function() {
        this._checkCollisions();
    },
    _checkCollisions: function() {
        for (var i = 0; i < this.objects.length; i++) {
            for (var j = 0; j < this.objects.length; j++) {
                if (i === j) continue;
                var dVector = Vector.subtr(this.objects[i].location, this.objects[j].location);
                var distance = dVector.mag();
                var direction = dVector.norm();

                if (distance <= this.objects[i].radius + this.objects[j].radius) {
                    console.log("collision!, " + distance);
                    if (this.objects[i] instanceof Ball) {
                        this._collide(this.objects[j], this.objects[i], direction)
                    } else {
                        this._collide(this.objects[i], this.objects[j], direction)
                    }
                }
            }
        }
    },
    _collide: function(bouncer, ball, direction) {
        var speed = bouncer.speed + ball.speed;
        var force = direction.mult(speed);
        ball.applyForce(force);
    }
}