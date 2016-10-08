function Ball(mass, color="black") {
	this.mass = mass;
    this.radius = mass;
    this.color = color;
    this.acceleration = new Vector(0,0);
    this.velocity = new Vector(0,0);
    this.location = new Vector(canvas.width/2,canvas.height/2);
    this._maxSpeed = 80;
};
Ball.prototype = {
	update: function() {
        this.velocity = this.velocity.add(this.acceleration);
        this.speed = this.velocity.mag();
        if (this.speed > this._maxSpeed) {
            this.velocity = this.velocity.norm().mult(this._maxSpeed);
            this.speed = this.velocity.mag();
        } 
        this.location = this.location.add(this.velocity);
        this.acceleration = new Vector(0,0);
        this.velocity = this.velocity.mult(0.99);
        this._checkBorders();
        this._draw();
    },
    _draw: function() {
	    canvas.sheet.beginPath();
        canvas.sheet.shadowColor = "black";
        canvas.sheet.shadowBlur = 10;
	    canvas.sheet.arc(this.location.x+0.5,this.location.y+0.5,this.radius,0,2*Math.PI);
        canvas.sheet.fillStyle = this.color;
        canvas.sheet.fill();
    },
    applyForce: function(force) {
        this.acceleration = force;
        // this.acceleration = this.acceleration.add(force);
    },
    _checkBorders: function() {
        if (this.location.x <= this.radius) {
            this.location.x += this.radius - this.location.x;
            this.velocity.x *= -1;
        }
        else if (this.location.x >= canvas.width - this.radius) {
            this.location.x -= this.location.x - (canvas.width - this.radius);
            this.velocity.x *= -1;
        }
        if (this.location.y <= this.radius) {
            this.location.y += this.radius - this.location.y;
            this.velocity.y *= -1;
        }
        else if (this.location.y >= canvas.height - this.radius) {
            this.location.y -= this.location.y - (canvas.height - this.radius);
            this.velocity.y *= -1;
        }
    }
}