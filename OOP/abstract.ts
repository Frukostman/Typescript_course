//no se pueden instanciarse
abstract class Cualidad{
    height: number;
    width: number;

    getSize(): string {
        return `${this.height} ${this.width}`
    }
    //los metodo abstractos no deben tener implementacion
    abstract movimiento(velocidad: number): boolean
}
//se puede heredar pero solo de una
class Personaje extends Cualidad{

    movimiento(velocidad: number): boolean{
        return false
    }
    
}