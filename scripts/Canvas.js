function Canvas(width, height, color="lightgrey") {
	this.width = width;
	this.height = height;
    this.color = color;
};
Canvas.prototype = {
	init: function() {
		this.body = document.querySelector("#gameCanvas");
		this._setSize();
		this.sheet = this.body.getContext("2d");
        this.styleIt();
	},
	_setSize: function() {
		this.body.width = this.width;
		this.body.height = this.height;
	},
    mouseListen: function() {
        var its = this;
        its.body.addEventListener("mousemove", function(e) {
            if (e.which == 1) its._locateMouse(e);
        });
        its.body.addEventListener("mousedown", function(e) {
            its._locateMouse(e);
        })
    },
    _locateMouse: function(e) {
        this.mouse = new Vector(e.offsetX, e.offsetY);
    },
    styleIt: function() {
        this.sheet.fillStyle = this.color;
        this.sheet.fillRect(0,0,this.width,this.height);
        this.sheet.beginPath();
        this.sheet.moveTo(0,this.height/2-0.5);
        this.sheet.lineTo(this.width,this.height/2-0.5);
        this.sheet.strokeStyle = "gray";
        this.sheet.stroke();
    }
}