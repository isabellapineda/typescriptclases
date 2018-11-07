enum Colores {
    blue = "blue",
    yellow = "xys",
    red = "red",
    green = "green",
    orenge = "orange"
}
abstract class figura{
    private _x:number
    private _y:number
    static _color:Colores
    protected cxt:CanvasRenderingContext2D

    public abstract dibujar();//definicion de metodo abstracto para qie todas las subclases de estas, lo utilicen

    constructor(contexto:CanvasRenderingContext2D,x?:number,y?:number){
        
        this._x= (x==undefined) ? Math.random()*1600:x;// ? es como if :como else
        this._y= (y==undefined) ? Math.random()*800:y;
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
class triangulo extends figura{
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
function getColor(i:number):Colores{
    switch(i){
        case 0: return Colores.blue;
        case 1: return Colores.green;
        case 2: return Colores.orenge;
        case 3: return Colores.red;
        case 4: return Colores.yellow;

    }
}
var canvas:any=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

for(let i=0;i<10;i++){
    figura._color=getColor(i);
    new triangulo(ctx).dibujar();
    new circulo(ctx).dibujar();
}

// figura._color=Colores.red
// for(var i=1;i<50;i++){
// new circulo(ctx).dibujar();
// }
// for(var i=1; i<50;i++){
//     figura._color=Colores.blue
//     new triangulo(ctx).dibujar();
// }
