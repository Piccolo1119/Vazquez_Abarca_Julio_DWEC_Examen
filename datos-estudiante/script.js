//declaramos las siguientes variables:

//declaramos nombre y apellidos junto al método toLocaleLowerCase() para que admita minúsculas
var nombre = prompt('Dime tu nombre: ').toLocaleLowerCase();
var apellidos = prompt('Dime tus apellidos: ').toLocaleLowerCase();

//declaramos la variable edad
var edad = prompt('Dime tu edad: ');

//declaramos la variable ciclo, a la cual aplicamos el método toUppercase() para que transforme los datos que se introducen a mayúsculas
var ciclo = prompt('Dime el ciclo formativo que cursas: ', 'DAW').toUpperCase();

//mostramos por pantalla todos los datos que se han introducido
document.write(`Tu nombre es ${nombre} <br>`);
document.write(`Tus apellidos son ${apellidos} <br>`);
document.write(`Tienes ${edad} años <br>`);
document.write(`Cursas el ciclo formativo de ${ciclo}`);
