"use strict";
exports.__esModule = true;
var figura = /** @class */ (function () {
    function figura(contexto, x, y) {
        this._x = (x == undefined) ? Math.random() * 1600 : x; // ? es como if :como else
        this._y = (y == undefined) ? Math.random() * 800 : y;
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
exports.figura = figura;
