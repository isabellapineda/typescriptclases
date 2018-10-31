var circulo = /** @class */ (function () {
    function circulo(x, y) {
        this.radio = 100;
        this._x = (x == undefined) ? Math.random() * 500 : x; // ? es como if :como else
        this._y = (y == undefined) ? Math.random() * 500 : y;
        this._color = "yellow";
    }
    Object.defineProperty(circulo.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color !== "")
                this._color = color;
            else
                this._color = "black";
        },
        enumerable: true,
        configurable: true
    });
    circulo.prototype.getRadio = function () {
        return this.radio;
    };
    circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    circulo.prototype.dibujar = function (contexto) {
        contexto.fillStyle = this._color;
        contexto.beginPath();
        contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        contexto.stroke();
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    };
    return circulo;
}());
var c = new circulo();
c.color = "orange";
c.setRadio(50);
console.log("el color del circulo es ", c.color);
console.log("el radio del circulo es ", c.getRadio());
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
new circulo().dibujar(ctx);
c.dibujar(ctx);
