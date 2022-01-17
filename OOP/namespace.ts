namespace SH{
    //pongo export para lo que quiero que se exponga , el resto queda dentro de este namespace
    //pueden ser clases 
    export class Futbol { }
    //pueden ser variables
    export const URL_privada: string = "hola.com" 
}

//accedo a ellas con mi prefijo o namespace

let nuevaCosa: SH.Futbol = new SH.Futbol

