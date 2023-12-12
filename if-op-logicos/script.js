
//creamos la variable hora donde guardamos la hora actual, basándonos en la fecha Europea que hay en este momento
//Para ello usamos los objetos Date() -- para conseguir la fecha, y getHours() -- para obtener únicamente la hora de esta fecha.
var hora = new Date().getHours();

//creamos la función saludarSegunHora
function saludarSegunHora() {
    //Declaramos las siguientes condiciones dentro de la función
    //En caso de que la hora sea mayor de las 5 de la mañana pero menor que las 12 del mediodía, devolverá Buenos dias por pantalla
    if(hora >= 5 && hora < 12){
        document.write('<p> Buenos días! </p>');
    } else if (hora >= 12 && hora <= 18){
        //En caso de que la hora sea mayor o igual de las 12 de la mañana pero menor o igual que las 6 de la tarde, devolverá Buenos dias por pantalla
        document.write('<p> Buenas tardes! </p>');
    } else {
        //En caso de que la hora sea distinta, devolverá Buenas noches
        document.write('<p> Buenas noches! </p>');
    }
}

//Llamamos a la función que hemos declarado.
saludarSegunHora();