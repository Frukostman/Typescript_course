interface Asset{
    //atributos de la interface
    x: number
    y: number
    height: number
    width : number
    //metodo de la interface
    getCoords(): string 
}

class Hero implements Asset{
    x: number;
    y: number;
    height: number;
    width: number;
    getCoords(): string {
    return "metodo vacio";
    }
}
class Enemy implements Asset{
    x: number;
    y: number;
    height: number;
    width: number;
    getCoords(): string {
    return "metodo vacio";
    }
}

class Collisions{
    //con esto nos aseguramos que solo los obj que cumplan con Asset pueden ser utilizados como parametros
    static check(object1: Asset, object2: Asset){
        //accion que compara
        console.log(object1)
        console.log(object2)
    }
}