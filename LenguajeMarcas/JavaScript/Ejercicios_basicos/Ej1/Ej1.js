document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que necesito para el ejercicio.
    const boton = document.getElementById("saludar");
    const mensaje = document.getElementById("mensaje");

    // Cuando el usuario hace clic, muestro el saludo en el parrafo.
    boton.addEventListener("click", function () {
        mensaje.textContent = "¡Hola! Bienvenido a JavaScript.";
    });
});
