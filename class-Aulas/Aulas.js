

//En primer lugar creamos una clase Aula
class Aula { 
    
    // A continuación declaramos un constructor que admita dos parametros de entrada
    constructor(numero, capacidad) {
        
        // Posteriormente establecemos los atributos de la clase, el cual se van a instanciar en el objeto
        this.numero = numero;
        this.capacidad = capacidad;
    }

    //definimos el método llamado presentarMateriales que nos va a devolver el siguiente mensaje por consola.
    presentarMateriales() {
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`);
    }
}

//Ahora creamos una clase Musica que va a heredar de Aula
class Musica extends Aula {

    //Esta va a admitir 3 parámetros en el constructor.
    //dos de ellos provienen de la clase Madre "Aula", por lo que utilizaremos el super() para llamarlos
    //Del mismo modo declaramos un nuevo atributo llamado instrumento, el cual se introducirá al crear el objeto
    constructor(numero, capacidad ,instrumento) {
        super(numero, capacidad);
        this.instrumento = instrumento;
    }

    //Utilizando la característica  de polimorfismo, consoleamos con este nuevo atributo llamado instrumento
    presentarMateriales() {
        console.log(`Bienvenidos al aula de música numero ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas `);
    }
}

//Ahora creamos la clase Tecnología que hereda tambien de Aula
class Tecnologia extends Aula {

    //Esta va a admitir 3 parámetros en el constructor.
    //dos de ellos provienen de la clase Madre "Aula", por lo que utilizaremos el super() para llamarlos
    //Del mismo modo declaramos un nuevo atributo llamado cantidadOrdenadores, el cual se introducirá al crear el objeto
    constructor(numero ,capacidad, cantidadOrdenadores) {
        super(numero, capacidad);
        this.cantidadOrdenadores = cantidadOrdenadores;
    }

    //Utilizando la característica del polimorfismo, consoleamos con este nuevo atributo llamado cantidadOrdenadores
    presentarMateriales() {
        console.log(`Bienvenidos al aula de tecnología numero ${this.numero} .El dia de hoy hemos comprado ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`);
    }
}

//Creamos el objeto miAula a partir de la clase Aula, e introducimos los dos atributos que requiere el constructor
let miAula = new Aula(1, 20);

//Usando este objeto, llamamos al método que se encuentra en esta clase.
miAula.presentarMateriales();

//Creamos el objeto miMusica a partir de la clase Aula, e introducimos los tres atributos que requiere el constructor de esta clase
//añadiremos el instrumento.
let miMusica = new Musica(2, 10, "saxofón");

//Usando este objeto, llamamos al método que se encuentra en esta clase.
miMusica.presentarMateriales();

//Creamos el objeto miTecnología a partir de la clase Aula, e introducimos los tres atributos que requiere el constructor
//añadimos otro atributo para la cantidad de ordenadores
let miTecnologia = new Tecnologia(3, 30, 20);

//Usando este objeto, llamamos al método que se encuentra en esta clase.
miTecnologia.presentarMateriales();

console.log('--------------');

//consoleamos la siguiente afirmación
console.log('La característica POO que sirve para sobreescribir métodos en la herencia se llama: Polimorfismo');


