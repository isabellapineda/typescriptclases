var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var figura = /** @class */ (function () {
    function figura(color, contexto, x, y) {
        this._x = (x == undefined) ? Math.random() * 500 : x; // ? es como if :como else
        this._y = (y == undefined) ? Math.random() * 500 : y;
        this._color = "yellow";
        this.cxt = contexto;
    }
    Object.defineProperty(figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return figura;
}());
var triangulo = /** @class */ (function (_super) {
    __extends(triangulo, _super);
    function triangulo(color, contexto, h) {
        var _this = _super.call(this, color, contexto) || this;
        _this.h = (h == undefined) ? Math.random() * 300 : h;
        return _this;
    }
    triangulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.moveTo(this.x, this.y);
        this.cxt.lineTo(this.x - this.h / 2, this.y + this.h);
        this.cxt.lineTo(this.x + this.h / 2, this.y + this.h);
        this.cxt.closePath();
        this.cxt.fillStyle = this._color;
        this.cxt.fill();
        this.cxt.stroke();
    };
    return triangulo;
}(figura));
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
new triangulo("green", ctx).dibujar();
