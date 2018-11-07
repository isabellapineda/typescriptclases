"use strict";
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
exports.__esModule = true;
var figura_1 = require("./figura");
var triangulo = /** @class */ (function (_super) {
    __extends(triangulo, _super);
    function triangulo(contexto, h) {
        var _this = _super.call(this, contexto) || this;
        _this.h = (h == undefined) ? Math.random() * 300 : h;
        return _this;
    }
    triangulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.moveTo(this.x, this.y);
        this.cxt.lineTo(this.x - this.h / 2, this.y + this.h);
        this.cxt.lineTo(this.x + this.h / 2, this.y + this.h);
        this.cxt.closePath();
        //color es un atributo estatico
        this.cxt.fillStyle = figura_1.figura._color;
        this.cxt.fill();
        this.cxt.stroke();
    };
    return triangulo;
}(figura_1.figura));
exports.triangulo = triangulo;
