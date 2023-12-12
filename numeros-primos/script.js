
//declaramos una función llamada calcularSumaPrimos, la cual se enlaza con una función de click en el html

function calcularSumaPrimos() {

    //dentro de esta función declaramos las variables contador y suma, que se inicializan en 0
    let cont = 0;
    let sum = 0;

    //establecemos un bucle para que se introduzcan 15 numeros
    while (cont < 15) {
        //se realiza la pregunta al usuario (ponemos que con cada vuelta el numero al lado del texto aumente en 1)

        let num = parseInt(prompt(`${cont + 1}. Dime un numero: `));

        //en caso de introducir un numero positivo sumamos uno en el contador y sigue el bucle abajo

        if(!isNaN(num) && num > 0) {
            cont++;
        } else {

            //en caso de no introducirlo, salta el siguiente mensaje en pantalla y sigue el bucle sin aumentar las iteraciones
            alert('Por favor ingresa un numero valido')
            continue;
        }

        //declaramos una variable booleana en false llamada primo
        let primo = false;

        //ahora creamos un bucle para comprobar que el numero es primo
        //este comienza en 2, ya que el 1 no es un numero primo, hasta que alcanze el valor del numero introducido
        for(let i = 2; i <= num; i++) {

            //declaramos el primer condicional que establece que si el resto entre el numero y el numero de la iteracion
            //es 0, y si ambos son distintos, el bucle se rompe y se declara la variable en false
            if(num % i === 0 && num !== i) {
                primo = false;
                break;
            } else {
                //en caso de no cumplirse dicha condición se pasa esta variable a true
                primo = true;
            }
        }

        //si el la variable primo está en true, se suma el numero a la variable suma
        if(primo) {
            sum += num;
        }
    }

    //Mandamos al html mediante la siguiente línea de código el texto con el valor de suma (para que lo introduzca en el html)

    document.getElementById('resultados').innerText = `La suma de los números primos ingresados es: ${sum}`;
}


