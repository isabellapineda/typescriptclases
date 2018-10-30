

class figura{
    x:number
    y:number
    color:string
    relleno:boolean

    dibujar(c:CanvasRenderingContext2D){
        if(this.relleno){
            c.fillStyle=this.color;
            c.fillRect(this.x,this.y,50,50);
        }else{
            c.rect(this.x,this.y,50,50);
            c.stroke();
        }
        
    }    

    mostrarInformacion(){
        console.log("Posiciones:")
        console.log(this.x,",",this.y)
    }
    movertriangulo(unidDerecha:number,unidAbajo:number){
        this.x+=unidDerecha;
        this.y+=unidAbajo;
    }
}
var lienzo:any=document.getElementById("lienzo");
var ctx=CanvasRenderingContext2D=lienzo.getContext("2d")
let f:figura=new figura();

f.x=10;
f.y=10;
f.relleno=true;
f.color="#000";
f.dibujar(lienzo.getContext("2d"))
f.mostrarInformacion();
for (let i=1;i<=100;i++) {
    f.movertriangulo(20+i*5,30+i*5);
    f.dibujar(ctx)
}

