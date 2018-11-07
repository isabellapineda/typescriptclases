import {figura} from "./figura"
export class triangulo extends figura{
    private h:number
    public dibujar(){
       this.cxt.beginPath();
       this.cxt.moveTo(this.x,this.y);
       this.cxt.lineTo(this.x-this.h/2,this.y+this.h)
       this.cxt.lineTo(this.x+this.h/2,this.y+this.h)
       this.cxt.closePath();
       //color es un atributo estatico
       this.cxt.fillStyle=figura._color;
       this.cxt.fill();
       this.cxt.stroke();

    }
    constructor(contexto:CanvasRenderingContext2D,h?:number){
        super(contexto)
        this.h=(h==undefined)?Math.random()*300:h;
    }
}