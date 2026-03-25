document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que necesito para el ejercicio.
    const addButton = document.getElementById("agregar");
    const deleteButton = document.getElementById("eliminar");
    const lista = document.getElementById("lista");
    const mensaje = document.getElementById("mensaje");

    // Cuando el usuario pulsa el boton, creo un nuevo elemento de lista.
    addButton.addEventListener("click", function () {
        // Creo un nuevo elemento <li> en JavaScript.
        const li = document.createElement("li");

        // Pido al usuario el texto que tendra el nuevo elemento.
        const texto = prompt("Introduzca un nuevo elemento a la lista: ");
        li.textContent = texto;

        // Añado al HTML el elemento <li> que acabo de crear.
        lista.appendChild(li);
        mensaje.textContent = "";
    });

    // Cuando el usuario pulsa el boton, elimino el ultimo elemento si existe.
    deleteButton.addEventListener("click", function () {
        if (lista.children.length > 0) {
            lista.lastElementChild.remove();
            mensaje.textContent = "";
        } else {
            mensaje.textContent = "No hay elementos en la lista";
        }
    });
});
