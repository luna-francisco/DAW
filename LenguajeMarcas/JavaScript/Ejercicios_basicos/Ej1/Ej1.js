document.addEventListener("DOMContentLoaded", function() {
    
    //Defino las variables a traves de las que vamos a accceder en el DOM del HTML
    const boton = document.getElementById("saludar");
    const mensaje = document.getElementById("mensaje");

    //Defino el comportamiento del boton
    boton.addEventListener("click", function() {
        mensaje.textContent = "¡Hola! Bienvenido a JavaScript.";
    });
  

});
