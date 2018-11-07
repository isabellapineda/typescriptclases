import {figura} from "./figura"
export class circulo extends figura{
    private _radio:number
    constructor(context:CanvasRenderingContext2D,radio?:number,x?:number,y?:number){
                super(context,x,y)
           if (radio==undefined)
                this._radio=Math.random()*100;
            else
            this._radio = radio
    } 

    public get radio():number{
        return this._radio
    }
    public set radio(radio:number){
        this._radio = radio;
    }
    public dibujar(){
        this.cxt.beginPath();
        this.cxt.arc(this.x,this.y,this._radio,0,Math.PI*2);
        //color es un atributo estatico
        this.cxt.fillStyle = figura._color;
        this.cxt.fill();
        this.cxt.closePath();
        this.cxt.stroke();
    }

}