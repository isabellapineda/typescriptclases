var figura = /** @class */ (function () {
    function figura() {
    }
    figura.prototype.dibujar = function (c) {
        if (this.relleno) {
            c.fillStyle = this.color;
            c.fillRect(this.x, this.y, 50, 50);
        }
        else {
            c.rect(this.x, this.y, 50, 50);
            c.stroke();
        }
    };
    figura.prototype.mostrarInformacion = function () {
        console.log("Posiciones:");
        console.log(this.x, ",", this.y);
    };
    figura.prototype.movertriangulo = function (unidDerecha, unidAbajo) {
        this.x += unidDerecha;
        this.y += unidAbajo;
    };
    return figura;
}());
var lienzo = document.getElementById("lienzo");
var ctx = CanvasRenderingContext2D = lienzo.getContext("2d");
var f = new figura();
f.x = 10;
f.y = 10;
f.relleno = true;
f.color = "#000";
f.dibujar(lienzo.getContext("2d"));
f.mostrarInformacion();
for (var i = 1; i <= 100; i++) {
    f.movertriangulo(20 + i * 5, 30 + i * 5);
    f.dibujar(ctx);
}
