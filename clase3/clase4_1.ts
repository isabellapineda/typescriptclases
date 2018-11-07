abstract class figura{
    private _x:number
    private _y:number
    protected _color:string
    protected cxt:CanvasRenderingContext2D

    public abstract dibujar();//definicion de metodo abstracto para qie todas las subclases de estas, lo utilicen

    constructor(color:string,contexto:CanvasRenderingContext2D,x?:number,y?:number){
        
        this._x= (x==undefined) ? Math.random()*500:x;// ? es como if :como else
        this._y= (y==undefined) ? Math.random()*500:y;
        this._color="yellow";
        this.cxt= contexto
    }
    public get x(){
        return this._x;
    }
    public set x(x:number){
        this._x=x;
    }
    public get y(){
        return this._y;
    }
    public set y(y:number){
        this._y=y;
    }
}
class circulo extends figura{
    private _radio:number
    constructor(context:CanvasRenderingContext2D,color:string,radio?:number,x?:number,y?:number){
                super(color,context,x,y)
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
        this.cxt.fillStyle = this._color;
        this.cxt.fill();
        this.cxt.closePath();
        this.cxt.stroke();
    }

}
class triangulo extends figura{
    private h:number
    public dibujar(){
       this.cxt.beginPath();
       this.cxt.moveTo(this.x,this.y);
       this.cxt.lineTo(this.x-this.h/2,this.y+this.h)
       this.cxt.lineTo(this.x+this.h/2,this.y+this.h)
       this.cxt.closePath();
       this.cxt.fillStyle=this._color;
       this.cxt.fill();
       this.cxt.stroke();

    }
    constructor(color:string,contexto:CanvasRenderingContext2D,h?:number){
        super(color,contexto)
        this.h=(h==undefined)?Math.random()*300:h;
    }
}
var canvas:any=document.getElementById("canvas");
var ctx=canvas.getContext("2d");


new triangulo("green",ctx).dibujar();

for(var i=1;i<10;i++){
new circulo(ctx,"black").dibujar();
}