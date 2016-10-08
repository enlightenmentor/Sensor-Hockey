function Bouncer(mass, color="white") {
	this.mass = mass;
    this.radius = mass;
    this.color = color;
    this.location = new Vector(canvas.width/2,canvas.height*3/4);
};
Bouncer.prototype = {
	update: function() {
        this._getSpeed();
        if (canvas.mouse) this.location = new Vector(canvas.mouse.x,canvas.mouse.y);
        this._checkBorders();
        this._draw();
    },
    _getSpeed: function() {
        this.velocity = Vector.subtr(this.location, canvas.mouse);
        this.speed = this.velocity ? this.velocity.mag() : 0;
    },
    _draw: function() {
	    canvas.sheet.beginPath();
        canvas.sheet.shadowColor = "black";
        canvas.sheet.shadowBlur = 10;
	    canvas.sheet.arc(this.location.x+0.5,this.location.y+0.5,this.radius,0,2*Math.PI);
        canvas.sheet.fillStyle = this.color;
        canvas.sheet.fill();
    },
    _checkBorders: function() {
        this.location.x = Number.constrain(this.location.x, this.radius, canvas.width - this.radius);
        this.location.y = Number.constrain(this.location.y, this.radius, canvas.height - this.radius);
    }
}