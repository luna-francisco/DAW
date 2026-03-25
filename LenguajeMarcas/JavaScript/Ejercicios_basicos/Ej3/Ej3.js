document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que necesito para el ejercicio.
    const boton = document.getElementById("sumar");
    const mensaje = document.getElementById("resultado");

    // Cuando el usuario hace clic, pido dos numeros y muestro la suma.
    boton.addEventListener("click", function () {
        const num1 = parseInt(prompt("Introduzca el primer numero a sumar: "));
        const num2 = parseInt(prompt("Introduzca el segundo numero a sumar: "));
        const resultado = num1 + num2;

        mensaje.textContent = num1 + " + " + num2 + " = " + resultado;
    });
});
