
//creamos la funcion prototipo llamado CuentaBancaria donde introducimos unos parámetros de entrada
//declaramos que saldo esté a 0 como predeterminado, pero con opción de cambiarlo por cada objeto creado

function CuentaBancaria(nombre, dni, saldo = 0) {

    //Declaramos los atributos que debe introducir el usuario además de un número de cuenta aleatorio
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');

    //declaramos un método que nos muestre los datos del objeto
    this.mostrarDatos = function() {
        console.log(`Nombre: ${this.nombre} \nDNI: ${this.dni} \nNúmero de cuenta: ${this.numeroCuenta} \nSaldo: ${this.saldo}`);
    }

    //Declaramos otro método para que nos muestre el saldo que queda tras un ingreso de dinero (en positivo el numero)
    this.realizarIngreso = function(monto) {
        if(monto > 0) {
            this.saldo += monto;
            console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log('Ingresa un número valido...');
        }
    }

    //Declaramos otro método para que nos muestre el saldo que queda tras un retiro de dinero (en positivo el numero
    // y menor que el saldo que queda). Queremos evitar que saque dinero cuando no hay

    this.realizarRetiro = function(monto) {
        if (this.saldo > monto && monto > 0) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log('Ingresa un número valido...');
        }
    }

    //Declaramos un método para hacer una transferencia que tenga como parametros  un objeto con la cuenta de destino
    // y un dinero a transferir de una cuenta a otra


    this.realizarTransferencia = function(cuentaDestino, monto) {

        // si el dinero introducido es positivo y menor que el saldo que hay en la cuenta del que realiza la transferencia
        
        if(monto > 0 && monto < this.saldo) {
            // se ingresa el dinero en la cuenta de destino llamando a la función anterior para ingresar dinero
            cuentaDestino.realizarIngreso(monto);
            //a la cuenta que envia el dinero se le resta el dinero transferido y se muestra el mensaje por consola
            this.saldo -= monto;
            console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log('Ingresa un número valido...');
        }
    }
}

//creamos el objeto miCuenta con los siguientes parámetros de entrada
miCuenta = new CuentaBancaria('Juan Pérez', '12345678A', 1000);



//creamos el objeto miCuentaDos con los siguientes parámetros de entrada
miCuentaDos = new CuentaBancaria('Ana Gómez', '87654321B', 500);

//mostramos los datos de este objeto
miCuenta.mostrarDatos();

console.log('-----------------------');


//mostramos los datos de este objeto
miCuentaDos.mostrarDatos();

//ingresamos dinero en esta cuenta
miCuenta.realizarIngreso(500);

//retiramos dinero de dicha cuenta
miCuenta.realizarRetiro(400);


//realizamos una transferencia de la cuenta uno a la cuenta dos 
miCuenta.realizarTransferencia(miCuentaDos, 200);

//realizamos ingreso a la cuenta 2
miCuentaDos.realizarIngreso(2000);

//realizamos el retiro de dinero en la cuenta 2
miCuentaDos.realizarRetiro(400);





