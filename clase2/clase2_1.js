var lienzo = document.getElementById("lienzo");
var ancho = lienzo.width;
var alto = lienzo.height;
if (lienzo.getContext) {
    var ctx1;
    ctx1 = lienzo.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(20, 20);
    ctx1.lineTo(ancho, alto);
    ctx1.stroke();
    //triangulo
    ctx1.beginPath();
    ctx1.moveTo(ancho, 0);
    ctx1.lineTo(ancho - 90, 0);
    ctx1.lineTo(ancho, 70);
    ctx1.fill();
    ctx1.closePath();
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.arc(150, 150, 100, 0, Math.PI * 2); //pintar un circulo
    ctx1.fillStyle = "orange";
    ctx1.fill();
    ctx1.stroke();
    ctx1.fillStyle = "green";
    ctx1.fillRect(90, 90, 100, 100);
}
//  var n:any =parseInt(prompt("n°"));
// var i:any 
// for(i=0;i<n;i++){
//     ctx1.fillStyle="pink";
//     ctx1.fillRect(Math.random()*300,Math.random()*300,20,20);
// }
