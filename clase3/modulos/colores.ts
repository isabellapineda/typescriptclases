export enum Colores{
    blue = "blue",
    yellow = "yellow",
    red = "red",
    green = "green",
    orenge = "orange"
}
export function getColor(i:number):Colores{
    switch(i){
        case 0: return Colores.blue;
        case 1: return Colores.green;
        case 2: return Colores.orenge;
        case 3: return Colores.red;
        case 4: return Colores.yellow;
        default:
            return Colores.blue;
    }
}