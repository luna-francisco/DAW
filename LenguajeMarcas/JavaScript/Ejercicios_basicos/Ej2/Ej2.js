document.addEventListener("DOMContentLoaded", function() {
    
    //Definimos las variables donde vamos a almacenar los datos y las relacionamos con el HTML

    var boton = document.getElementById("pedirNombre");
    var mensaje = document.getElementById("resultado");


    //Comportamiento del boton al ser seleccionado
    boton.addEventListener("click", function() { 

        //Pedimos al usuario un dato a traves de un manesaje
        var nombre = prompt("¿Cual es su nombre?");

        //Devolvemos al usuario un mensaje en forma de cadena de texto 
        mensaje.textContent = "Bienvenido " + nombre;


    });


});