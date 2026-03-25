# JavaScript y DOM

## Contenido

1. Lenguajes script relacionados con la web
2. Sintaxis de los lenguajes script
3. Selección y acceso a elementos web
4. Creación, Modificación y eliminación de elementos web
5. Modificando estilos web

## 1. Lenguajes script relacionados con la web

Los lenguajes script se usan para darle comportamiento a una página web.

Si HTML se encarga de la estructura y CSS del diseño, **JavaScript** se encarga de la parte dinámica. Gracias a JavaScript una web puede reaccionar a lo que hace el usuario.

Con JavaScript puedo, por ejemplo:

- mostrar mensajes en pantalla,
- responder al clic de un botón,
- pedir datos al usuario,
- cambiar texto o estilos,
- crear o borrar elementos,
- validar formularios.

### Idea importante

JavaScript hace que la página deje de ser estática.

## 2. Sintaxis de los lenguajes script

En JavaScript, muchas acciones ocurren cuando el usuario hace algo en la página. A eso se le llama **evento**.

### Eventos

Un evento es cualquier acción que ocurre en la web, por ejemplo:

- hacer clic en un botón,
- escribir en el teclado,
- mover el ratón,
- pasar el ratón por encima de un elemento.

Cuando sucede un evento, JavaScript puede ejecutar una función. Esa función asociada al evento se llama **manejador de eventos**.

### Eventos más comunes

- `onclick`
- `onkeydown`
- `onmouseover`
- `onmouseout`
- `onmousemove`
- `onmouseup`

### La forma que voy a usar normalmente

Aunque existen eventos como `onclick`, lo más cómodo para trabajar es usar `addEventListener()`.

```js
const boton = document.getElementById("saludar");

boton.addEventListener("click", function () {
  console.log("Se ha hecho clic");
});
```

En este ejemplo:

- selecciono el botón,
- escucho el evento `click`,
- ejecuto una función cuando ese clic ocurre.

### Pedir información al usuario

Para pedir datos se puede usar `prompt()`.

```js
const nombre = prompt("Introduce tu nombre");
```

Esto es útil en ejercicios sencillos, por ejemplo para pedir un nombre o dos números.

### Importante: `prompt()` devuelve texto

Aunque el usuario escriba un número, `prompt()` lo devuelve como texto.

```js
const numero = prompt("Introduce un numero");
```

Si después quiero sumar, tengo que convertir ese texto a número.

```js
const num1 = Number(prompt("Introduce el primer numero"));
const num2 = Number(prompt("Introduce el segundo numero"));
const resultado = num1 + num2;
```

Si no convierto los valores, JavaScript puede juntar los textos:

```js
"5" + "10"; // devuelve "510"
```

### Variables básicas

Las dos que más voy a usar son:

- `const`: para valores que no cambian
- `let`: para valores que sí pueden cambiar

Ejemplo:

```js
const mensaje = document.getElementById("mensaje");
let clicks = 0;
```

Aquí `mensaje` siempre hace referencia al mismo elemento, pero `clicks` sí va cambiando.

### Operadores y estructuras básicas que necesito

Para hacer los ejercicios tengo que entender bien:

- `+` para sumar o unir textos
- `++` para aumentar una variable en 1
- `if / else` para tomar decisiones
- `for` para repetir acciones

Ejemplo de contador:

```js
let clicks = 0;

boton.addEventListener("click", function () {
  clicks++;
});
```

### Dónde colocar el script

Lo mejor en estos ejercicios es enlazar el archivo JavaScript al final del `body`.

```html
<script src="Ej1.js"></script>
```

Así el HTML ya está cargado cuando JavaScript intenta acceder a botones, párrafos o listas.

Si el script está en el `head`, entonces necesito esperar a que cargue la página:

```js
document.addEventListener("DOMContentLoaded", function () {
  // codigo aqui
});
```

## 3. Selección y acceso a elementos web

Cuando el navegador carga un HTML, lo convierte en una estructura de objetos llamada **DOM**.

Gracias al DOM, JavaScript puede acceder a los elementos de la página y modificarlos.

### Qué puedo hacer con el DOM

Con el DOM puedo:

- seleccionar elementos,
- cambiar texto,
- cambiar atributos,
- crear elementos nuevos,
- eliminar elementos,
- modificar estilos.

### Métodos de selección más usados

- `getElementById()`
- `getElementsByClassName()`
- `getElementsByName()`
- `getElementsByTagName()`
- `querySelector()`
- `querySelectorAll()`

### Ejemplos

```js
document.getElementById("mensaje");
document.getElementsByClassName("texto");
document.querySelector(".caja");
document.querySelectorAll("p");
```

### Diferencias que tengo que tener claras

- `getElementById()` devuelve un solo elemento.
- `getElementsByClassName()` devuelve varios elementos.
- `querySelector()` devuelve el primer elemento que coincide.
- `querySelectorAll()` devuelve todos los que coinciden.

### Guardar elementos en variables

Es más cómodo guardar los elementos que voy a usar:

```js
const boton = document.getElementById("saludar");
const mensaje = document.getElementById("mensaje");
```

Esto evita repetir código y hace todo más fácil de leer.

### Recorrer varios elementos

Si selecciono varios elementos con la misma clase, tengo que recorrerlos.

```js
const parrafos = document.getElementsByClassName("texto");

for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].textContent = "Texto modificado con JavaScript";
}
```

Esto lo necesito para ejercicios donde hay que cambiar varios párrafos a la vez.

## 4. Creación, Modificación y eliminación de elementos web

Además de seleccionar elementos que ya existen, JavaScript también me permite crear nuevos, modificarlos o eliminarlos.

### Crear elementos

Métodos importantes:

- `document.createElement()`
- `document.createAttribute()`
- `document.createComment()`
- `document.createTextNode()`
- `appendChild()`

Ejemplo:

```js
const lista = document.getElementById("lista");
const li = document.createElement("li");

li.textContent = "Nuevo elemento";
lista.appendChild(li);
```

En este caso:

- selecciono la lista,
- creo un elemento `li`,
- le doy un texto,
- lo añado al HTML.

### Modificar elementos

Las formas más habituales son estas:

- `elemento.textContent = "Nuevo texto"`
- `elemento.innerHTML = "<strong>Texto</strong>"`
- `elemento.setAttribute("src", "imagen.jpg")`
- `elemento.style.color = "red"`

### Diferencia entre `textContent` e `innerHTML`

- `textContent` cambia solo el texto.
- `innerHTML` interpreta etiquetas HTML.

Ejemplo:

```js
mensaje.textContent = "Hola";
mensaje.innerHTML = "<strong>Hola</strong>";
```

### Eliminar elementos

También puedo borrar elementos o vaciar contenedores.

Métodos frecuentes:

- `elemento.remove()`
- `elemento.removeAttribute("atributo")`
- `padre.removeChild(hijo)`
- `contenedor.innerHTML = ""`

### Trabajar con listas

En los ejercicios de lista dinámica tengo que saber:

- añadir elementos,
- comprobar si la lista está vacía,
- eliminar el último elemento.

Ejemplo:

```js
if (lista.children.length > 0) {
  lista.lastElementChild.remove();
} else {
  mensaje.textContent = "No hay elementos en la lista";
}
```

Aquí:

- `children.length` me dice cuántos elementos tiene dentro la lista,
- `lastElementChild` me da el último elemento,
- `remove()` lo elimina.

## 5. Modificando estilos web

JavaScript también puede cambiar la apariencia de los elementos usando la propiedad `style`.

### Sintaxis básica

```js
elemento.style.propiedad = "valor";
```

### Ejemplos

```js
elemento.style.color = "red";
elemento.style.backgroundColor = "black";
elemento.style.fontSize = "20px";
```

### Detalle importante

En JavaScript algunas propiedades CSS cambian un poco de nombre. Por ejemplo:

- en CSS es `background-color`
- en JavaScript es `backgroundColor`

## Criterio de codigo que estoy siguiendo

Para que los ejercicios queden limpios, actuales y faciles de entender, estoy intentando mantener siempre el mismo criterio:

- usar `const` por defecto,
- usar `let` solo cuando el valor cambia,
- seleccionar los elementos del DOM al principio,
- usar `addEventListener()` para manejar eventos,
- usar `textContent` cuando solo quiero insertar texto,
- escribir nombres de variables claros,
- seguir siempre una estructura parecida en todos los ejercicios.

La estructura base que estoy repitiendo es esta:

```js
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("...");
  const mensaje = document.getElementById("...");

  boton.addEventListener("click", function () {
    // logica del ejercicio
  });
});
```

Esto me ayuda a que el codigo sea mas consistente y a trabajar de una forma mas cercana a buenas practicas actuales.

## Ejercicios basicos trabajados

En la carpeta [Ejercicios_basicos](/home/francisco/Escritorio/DAW/LenguajeMarcas/JavaScript/Ejercicios_basicos) estoy trabajando ejercicios centrados en manipulacion del DOM y eventos.

Los ejercicios que he desarrollado hasta ahora cubren:

- mostrar mensajes en pantalla,
- pedir datos con `prompt()`,
- sumar numeros,
- hacer un contador de clics,
- modificar varios elementos a la vez,
- crear elementos dinamicamente en una lista,
- eliminar elementos de una lista con comprobacion previa.

## Lo que ya practico con estos ejercicios

Con esta serie de ejercicios ya estoy practicando:

- seleccion de elementos con `getElementById()` y `getElementsByClassName()`,
- manejo de eventos con `addEventListener()`,
- uso de `prompt()`,
- conversion de datos cuando hace falta,
- recorridos con `for`,
- creacion de elementos con `createElement()`,
- insercion con `appendChild()`,
- eliminacion con `remove()`,
- comprobaciones con `if / else`,
- trabajo con colecciones y listas del DOM.

## Lo que necesito dominar para hacer los ejercicios

Después de revisar los ejercicios básicos, lo que más necesito estudiar es esto:

- seleccionar elementos con `getElementById()`,
- escuchar eventos de clic,
- usar `addEventListener()`,
- pedir datos con `prompt()`,
- convertir texto a número con `Number()`,
- cambiar texto con `textContent`,
- recorrer colecciones con `for`,
- crear elementos con `createElement()`,
- añadirlos con `appendChild()`,
- eliminar elementos con `remove()`,
- comprobar condiciones con `if / else`,
- usar `children.length` y `lastElementChild` en listas.

## Resumen final

Si empiezo de cero, la idea general es esta:

- JavaScript sirve para dar interacción a una web.
- El DOM es la forma en la que JavaScript accede al HTML.
- Primero selecciono un elemento, después hago algo con él.
- Muchas veces ese cambio ocurre cuando el usuario hace clic o escribe algo.
- También puedo crear elementos nuevos, eliminarlos o cambiar sus estilos.

## Recursos de apoyo

- w3schools
- desarrolloweb.com
- Pildoras Informaticas
- Uniwebsidad
- idesweb
