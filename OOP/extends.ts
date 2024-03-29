class Pelicula {
    //atributos
    //publicos -> se acceden de cualquier lugar. son publicos por defecto
    public _title: string;
    //privados -> no se pueden acceder desde fuera
    private length: number;
    //protegidos -> no se pueden acceder desde fuera
    protected seen: boolean;

    //constructor
    constructor(title:string, length:number, seen:boolean) {
        this._title = title;
        this.length = length;
        this.seen = seen;
    }
    //getters y setters -> encapsulan la funcionalidad del objeto
    get title() : string {
        return(this._title);
    }
    set title(title :string) {
        this._title = title;
    }
}
class Trailer extends Pelicula{
   
    spoiler() {
        //atributo publico
        console.log(this.title)
        //atributo protected
        console.log(this.seen)
    }
}

// implementacion

let miPelicula: Pelicula = new Pelicula("mi video nuevo",120 , true);

console.log(miPelicula.title)
miPelicula.title="otro video"
console.log(miPelicula.title)

let miTrailer: Trailer = new Trailer("mi video trailer",2 , false);

console.log(miTrailer.title)