class figura{
    private _x:number
    private _y:number
    protected _color:string
    protected cxt:CanvasRenderingContext2D

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