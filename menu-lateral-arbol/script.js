
//Declaramos la variable flechas donde vamos a almacenar todas las clases llamadas .arrow del html

const flechas = document.querySelectorAll('.arrow');


//por cada una de estas flechas establecemos un bucle foreach que va a realizar una función click por cada flecha que se "clickee"
flechas.forEach(arrow => {
    arrow.addEventListener('click', function() {

        //Al hacer click se activara la siguiente función.
        //Esta función declara un método llamado submenu que guarda al elemento hermano del padre de la flecha seleccionada

        const submenu = this.parentElement.nextElementSibling;

        //llamamos a esta variable y activamos su clase show para que se muestren los submenus al hacer click
        submenu.classList.toggle('show');

        //del mismo modo, hacemos que la flecha gire, añadiendole la clase rotate-arrow
        this.classList.toggle('rotate-arrow');
    });
});

