import{figura} from "./modulos/figura"
import{circulo} from "./modulos/circulo"
import{triangulo} from "./modulos/triangulo"
import{Colores,getColor} from "./modulos/colores"

var canvas:any=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

for(let i=0;i<10;i++){
    figura._color=getColor(i);
    new triangulo(ctx).dibujar();
    new circulo(ctx).dibujar();
}