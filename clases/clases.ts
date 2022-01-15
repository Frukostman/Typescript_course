class Saludar {

    devolver(mensaje:string){
        console.log(mensaje)
    }
}
let persona = new Saludar()

persona.devolver("holita")


class Video {
    //atributos
    title: string;
    //constructor
    constructor(title:string) {
        this.title = title;
    }
    //metodos
    printTitle() {
        console.log(this.title);
    }
    changeTitle(title: string) {
        this.title = title;
    }
    getTitle() : string {
        return this.title
    }
}
//creacion de objeto miVideo con atributo title
let miVideo: Video = new Video("LOTR")

//llamado de metodos
miVideo.printTitle();
miVideo.changeTitle("harry potter");
miVideo.printTitle();
console.log(miVideo.getTitle());


