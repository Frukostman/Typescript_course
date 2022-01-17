class Requestor {
    //defino un atributo estatico
    static url: string = "https://hola.com";
    //metodos estaticos
    static getSaludo() {
        console.log(`${Requestor.url}/saludo`)
    }
    static getDespedida() {
        console.log(`${Requestor.url}/adios`)
    }
}
Requestor.getSaludo();
Requestor.getDespedida();
