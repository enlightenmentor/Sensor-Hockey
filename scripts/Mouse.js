function Mouse() {
	this.location = {
		x: -1000,
		y: -1000
	};
	var its = this;
    var canva = document.querySelector("#gameCanvas");
	canva.addEventListener("mousemove", function(e) {
		its.locate(e);
	})
}
Mouse.prototype = {
    locate: function(e) {
        var canvas = document.querySelector("#gameCanvas").getBoundingClientRect();
        var x = e.clientX - canvas.left;
        var y = e.clientY - canvas.top;
        this.location = new Vector(x, y);
    }
}