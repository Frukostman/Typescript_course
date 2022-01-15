//herencia

class youTubeVideo extends Video {
    //aqui hereda los atributos y metodos. Puedo agregar mas solo para esta
}

//creacion de objeto miVideo con atributo title
let miYTVideo: youTubeVideo = new youTubeVideo("LOTR en youtube")

//llamado de metodos
miYTVideo.printTitle();
miYTVideo.changeTitle("harry potter en youtube");
miYTVideo.printTitle();