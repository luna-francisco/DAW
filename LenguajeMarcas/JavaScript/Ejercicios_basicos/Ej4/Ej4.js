document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que necesito para el ejercicio.
    const boton = document.getElementById("boton");
    const mensaje = document.getElementById("contador");

    // Empiezo el contador en 0 para ir sumando un clic cada vez.
    let contador = 0;

    // Cada vez que el usuario hace clic, aumento el contador y actualizo el texto.
    boton.addEventListener("click", function () {
        contador++;
        mensaje.textContent = "Clicks: " + contador;
    });
});
