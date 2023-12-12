
//declaramos la constante burger que va a seleccionar en el html la clase que se llama .hamburger
const burger = document.querySelector('.hamburger');

//declaramos la constante navlinks que va a seleccionar en el html la clase que se llama .nav-links
const navlinks = document.querySelector('.nav-links');

//a continuación creamos una función click usando la variable llamada burger
//al hacer click en dicho elemento se activará una función, declarada mediante función flecha

burger.addEventListener('click', () => {

    //Esta función va a seleccionar la variable navlinks y mediante el toggle va a activar la clase active
    //para que se permita la visualización de este bloque del html

    navlinks.classList.toggle('active');
})


//A continuación realizamos el mismo código pero con una función con notación declarativa

/* function toggleNav() {
        navlinks.classList.toggle('active');
}
burger.addEventListener('click', toggleNav); */


//A continuación realizamos el mismo código pero con una función anónima


/* burger.addEventListener('click', function() {
    navlinks.classList.toggle('active');
})
 */