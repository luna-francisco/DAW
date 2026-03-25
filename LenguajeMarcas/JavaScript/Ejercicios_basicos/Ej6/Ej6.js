document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que necesito para el ejercicio.
    const boton = document.getElementById("agregar");
    const lista = document.getElementById("lista");

    // Cuando el usuario pulsa el boton, creo un nuevo elemento de lista.
    boton.addEventListener("click", function () {
        // Creo un nuevo elemento <li> en JavaScript.
        const li = document.createElement("li");

        // Pido al usuario el texto que tendra el nuevo elemento.
        const texto = prompt("Introduzca un nuevo elemento a la lista: ");
        li.textContent = texto;

        // Añado al HTML el elemento <li> que acabo de crear.
        lista.appendChild(li);
    });
});
