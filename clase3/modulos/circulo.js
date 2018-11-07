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
var circulo = /** @class */ (function (_super) {
    __extends(circulo, _super);
    function circulo(context, radio, x, y) {
        var _this = _super.call(this, context, x, y) || this;
        if (radio == undefined)
            _this._radio = Math.random() * 100;
        else
            _this._radio = radio;
        return _this;
    }
    Object.defineProperty(circulo.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        set: function (radio) {
            this._radio = radio;
        },
        enumerable: true,
        configurable: true
    });
    circulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.arc(this.x, this.y, this._radio, 0, Math.PI * 2);
        //color es un atributo estatico
        this.cxt.fillStyle = figura_1.figura._color;
        this.cxt.fill();
        this.cxt.closePath();
        this.cxt.stroke();
    };
    return circulo;
}(figura_1.figura));
exports.circulo = circulo;
