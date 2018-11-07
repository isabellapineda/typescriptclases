import{Colores} from "./colores"
export abstract class figura{
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