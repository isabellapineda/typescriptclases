"use strict";
exports.__esModule = true;
var figura_1 = require("./modulos/figura");
var circulo_1 = require("./modulos/circulo");
var triangulo_1 = require("./modulos/triangulo");
var colores_1 = require("./modulos/colores");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
for (var i = 0; i < 10; i++) {
    figura_1.figura._color = colores_1.getColor(i);
    new triangulo_1.triangulo(ctx).dibujar();
    new circulo_1.circulo(ctx).dibujar();
}
