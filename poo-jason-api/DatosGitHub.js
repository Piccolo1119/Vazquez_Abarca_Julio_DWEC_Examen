
//declaramos una variable llamada datos que va a obtener una string en formato json de las caracteristicas de mi github
let datos = new String(
    `{
        "login": "Piccolo1119",
        "id": 133371247,
        "email": null,
        "public_repos": 9
      }`
);

//creamos la clase DatosGitHub 
class DatosGitHub {

    //establecemos un constructor al que se le introduzca una cadena en formato json
    constructor(datos) {
        //para que pueda instanciarse pasamos la string a objeto json y linkeamos cada atributo con el suyo en la cadena
        this.datos = JSON.parse(datos);
        this.login = this.datos.login;
        this.id = this.datos.id;
        this.email = this.datos.email;
        this.public_repos = this.datos.public_repos;
    }

    //declaramos el método datosRecibidos que va a consolear el siguiente mensaje con los datos
    datosRecibidos() {
        console.log(`El usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene repositorios públicos ${this.public_repos}`);
    }
}

//declaramos el siguiente objeto llamando a la clase del principio con los datos json como parametro de entrada
let datosGitHubInstancia = new DatosGitHub(datos);

//como el email está en null, llamamos a la propiedad desde el objeto para cambiarle el valor
datosGitHubInstancia.email = "juliovazquezabarca@gmail.com";

//llamamos al método para que nos devuelva por la consola los datos
datosGitHubInstancia.datosRecibidos();

