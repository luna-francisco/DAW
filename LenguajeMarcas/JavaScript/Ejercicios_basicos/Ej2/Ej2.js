document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que necesito para el ejercicio.
    const boton = document.getElementById("pedirNombre");
    const mensaje = document.getElementById("resultado");

    // Cuando el usuario hace clic, pido su nombre y muestro el resultado.
    boton.addEventListener("click", function () {
        const nombre = prompt("¿Cual es su nombre?");
        mensaje.textContent = "Bienvenido " + nombre;
    });
});
