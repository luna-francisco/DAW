document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que necesito para el ejercicio.
    const boton = document.getElementById("cambiar");
    const parrafos = document.getElementsByClassName("texto");

    // Cuando el usuario hace clic, recorro los parrafos y actualizo su contenido.
    boton.addEventListener("click", function () {
        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].textContent = "Texto modificado con JavaScript";
        }
    });
});
