function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	add: function(v) {
		if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y);
		else return new Vector(this.x + v, this.y + v);
	},
	subtr: function(v) {
		if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y);
		else return new Vector(this.x - v, this.y - v);
	},
	mult: function(v) {
		return new Vector(this.x * v, this.y * v);
	},
	mag: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	norm: function() {
		var mag = 1/Math.sqrt(this.x * this.x + this.y * this.y);
		return this.mult(mag);
	}
}

Vector.add = function(a, b) {
	if (a instanceof Vector && b instanceof Vector) {
		return new Vector(a.x + b.x, a.y + b.y);
	}
};

Vector.subtr = function(a, b) {
	if (a instanceof Vector && b instanceof Vector) {
		return new Vector(a.x - b.x, a.y - b.y);
	}
};