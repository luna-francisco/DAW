document.addEventListener("DOMContentLoaded", function() {
    

    //Tenemos un boton con id que al seleccionarlo se va a desplegar una accion y un parrafo donde mostraremos 
    //la informacion 

    //byId seleccionamos los elementos del DOM que necesitamos

    var boton = document.getElementById("sumar"); 
    var mensaje = document.getElementById("resultado");

    boton.addEventListener("click", function(){
        var num1 = parseInt(prompt("Introduzca el primer numero a sumar: "));
        var num2 = parseInt(prompt("Introduzca el segundo numero a sumar: "));
        var resultado = num1 + num2;
        mensaje.textContent = num1 + " + " + num2 + " = " + resultado;



    });
    

});