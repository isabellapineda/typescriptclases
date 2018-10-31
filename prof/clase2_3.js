var Figura = /** @class */ (function () {
    function Figura() {
    }
    Figura.prototype.dibujar = function (c) {
        if (this.relleno) {
            c.fillStyle = this.color;
            c.fillRect(this.x, this.y, 50, 50);
        }
        else {
            c.rect(this.x, this.y, 50, 50);
            c.stroke();
        }
    };
    Figura.prototype.mostrarInformacion = function () {
        console.log("Posicion:");
        console.log("x:" + this.x, "y:" + this.y);
    };
    Figura.prototype.mover = function (unidDerecha, unidAbajo) {
        this.x = this.x + unidDerecha;
        this.y += unidAbajo;
    };
    return Figura;
}());
var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d");
var f = new Figura();
f.x = 10;
f.y = 10;
f.relleno = true;
f.color = "green";
f.dibujar(ctx);
f.mostrarInformacion();
var n = 50;
for (var i = 1; i <= 100; i++) {
    f.mover(i, i);
    f.dibujar(ctx);
}
