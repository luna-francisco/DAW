# Utilizacion avanzada de clases

## Resumen introductorio

Antes de llegar a la utilizacion avanzada de clases, primero tengo que tener clara la base: que es una clase, como se estructura y como se crean objetos a partir de ella.

Una **clase** es como un molde. Define:

- las caracteristicas del objeto, es decir, sus atributos,
- y su comportamiento, es decir, sus metodos.

De una sola clase pueden salir muchos objetos distintos. Todos comparten la misma estructura, pero cada uno puede tener valores diferentes en sus atributos.

Ejemplo de idea:

- clase `Coche`
- objeto 1 -> matricula, marca, kilometros y anios concretos
- objeto 2 -> mismos atributos, pero con valores distintos

### Ideas base que necesito tener claras

- una clase define un modelo
- un objeto es una instancia concreta de esa clase
- primero se declara una variable de tipo clase
- despues se instancia el objeto, normalmente con `new`

Ejemplo:

```java
Coche miCoche = new Coche();
```

### Atributos

Los atributos representan las propiedades del objeto.

Por ejemplo, en una clase `Alumno` o `Coche`, los atributos guardan la informacion propia de cada objeto.

### Constructores

Los constructores son metodos especiales que sirven para inicializar automaticamente los objetos cuando se crean.

Lo importante es recordar que:

- se llaman igual que la clase
- no devuelven nada
- puede haber varios si cambian los parametros

Ejemplo:

```java
Alumno al1 = new Alumno("Monica", 6);
```

### Palabra clave `this`

`this` hace referencia al propio objeto actual.

Se usa mucho en constructores para distinguir los atributos del objeto de las variables locales.

### Metodos

Los metodos representan lo que el objeto puede hacer.

Se ejecutan a traves de un objeto y normalmente trabajan con los atributos del propio objeto.

### Encapsulacion

La encapsulacion sirve para controlar que partes de una clase pueden verse o modificarse desde fuera.

Aqui entran en juego:

- `private`
- `public`
- y el uso de `getters` y `setters`

### Metodos y atributos estaticos

Los elementos `static` pertenecen a la clase y no a un objeto concreto.

Por eso:

- se usan a traves de la clase,
- no dependen de una instancia concreta,
- y su valor puede ser comun para todos los objetos.

### Idea general de esta introduccion

Todo este bloque previo me sirve para entender mejor lo que viene despues: herencia, polimorfismo, clases abstractas y el resto de conceptos avanzados. Si no tengo clara la diferencia entre clase, objeto, atributo, constructor y metodo, la parte avanzada se hace mucho mas dificil.

## Contenido

1. Composicion de clases
2. Herencia
3. Superclases y subclases
4. Encapsulacion y visibilidad
5. Constructores y herencia
6. Utilizacion de clases heredadas
7. Acceso a metodos de o desde la superclase
8. Sobreescritura y sobrecarga
9. Polimorfismo
10. Clases y metodos abstractos y finales
11. Control de excepciones
12. Uso de tipos genericos

## 1. Composicion de clases

La composicion consiste en que una clase tenga atributos que son objetos de otra clase.

Es decir, una clase no siempre guarda solo tipos simples como `int`, `double` o `String`, sino que tambien puede guardar objetos completos.

Ejemplo:

```java
class Persona {
    String nombre;
    Dni dni;
    Fecha fechaNacimiento;
}
```

### Idea importante

En composicion, una clase "tiene" objetos de otra clase.

## 2. Herencia

La herencia consiste en crear una clase nueva a partir de otra ya existente.

La nueva clase hereda atributos y metodos de la clase original y, ademas, puede añadir sus propios elementos.

Ejemplo de idea:

- `Persona` puede ser la clase general
- `Alumno` y `Profesor` pueden heredar de `Persona`

### En Java

Java solo permite heredar de una unica clase.

## 3. Superclases y subclases

- La **superclase** es la clase base o general.
- La **subclase** es la clase que hereda de ella.

Ejemplo:

- `Persona` -> superclase
- `Alumno` -> subclase
- `Profesor` -> subclase

Una subclase puede:

- heredar lo que ya tiene la superclase,
- añadir nuevos atributos,
- añadir nuevos metodos,
- redefinir comportamientos cuando sea necesario.

## 4. Encapsulacion y visibilidad

La encapsulacion sirve para controlar que partes de una clase pueden verse o usarse desde fuera.

Para eso se usan los modificadores de acceso.

### Modificadores principales

- `private`
- `default`
- `protected`
- `public`

### Significado general

- `private`: solo se puede usar dentro de la misma clase
- `default`: se puede usar dentro del mismo paquete
- `protected`: se puede usar en el mismo paquete y tambien en subclases
- `public`: se puede usar desde cualquier sitio

### Resumen rapido

- `private` -> maxima restriccion
- `public` -> maxima visibilidad
- `protected` -> muy util en herencia

### Importante en herencia

Se heredan los miembros `public` y `protected`.

Los `private` no se heredan de forma accesible.

## 5. Constructores y herencia

Cuando una subclase crea un objeto, primero se ejecuta el constructor de la superclase y despues el de la subclase.

La primera instruccion del constructor de la subclase debe ser una llamada al constructor de la superclase.

### Llamada implicita o explicita

- Si no se escribe nada, Java llama automaticamente a `super()`
- Si la superclase tiene un constructor con parametros, habra que llamar explicitamente a `super(a, b, ...)`

### `this` y `super`

- `this` hace referencia a la clase actual
- `super` hace referencia a la superclase

## 6. Utilizacion de clases heredadas

Cuando trabajamos con herencia, una variable de tipo superclase puede guardar objetos de una subclase.

Ejemplo:

```java
Persona p = new Alumno();
```

Esto es valido porque `Alumno` es una `Persona`.

### Casting

A veces hace falta convertir entre tipos de superclase y subclase.

Normalmente:

```java
Subclase s = (Subclase) superclase;
```

### `instanceof`

Se usa para comprobar si un objeto pertenece a un tipo antes de hacer un casting.

Esto evita errores.

## 7. Acceso a metodos de o desde la superclase

Una subclase puede usar metodos heredados directamente.

Si quiere acceder especificamente a la version de la superclase, usa `super`.

Ejemplo:

```java
super.metodo();
```

Esto es util cuando una subclase redefine un metodo pero aun asi quiere aprovechar parte del comportamiento original.

## 8. Sobreescritura y sobrecarga

Son dos conceptos distintos que suelen confundirse.

### Sobreescritura

Se produce cuando una subclase redefine un metodo heredado con:

- el mismo nombre
- los mismos parametros

Ejemplo:

```java
public void muestraDatos()
```

### Sobrecarga

Se produce cuando existen varios metodos con el mismo nombre pero con parametros diferentes.

Ejemplo:

```java
public void muestraDatos()
public void muestraDatos(String titulo)
```

### Idea clave

- Sobreescritura -> misma firma, nuevo comportamiento
- Sobrecarga -> mismo nombre, diferentes formas de usar el metodo

### Detalles de la sobreescritura

- el nivel de visibilidad no puede hacerse mas restrictivo
- el tipo de retorno debe ser compatible

## 9. Polimorfismo

El polimorfismo significa que una misma referencia puede comportarse de formas distintas segun el objeto real al que apunte.

Ejemplo:

```java
Persona p;
```

Esa variable podria guardar un `Alumno`, un `Profesor` o cualquier otra subclase de `Persona`.

### Idea importante

El tipo de la referencia puede ser general, pero el comportamiento real depende del objeto concreto.

## 10. Clases y metodos abstractos y finales

### Clases abstractas

Una clase abstracta no se puede instanciar directamente.

Se usa como base para otras clases.

Puede tener:

- atributos
- metodos normales
- metodos abstractos

### Metodos abstractos

Un metodo abstracto esta declarado pero no implementado.

Ejemplo:

```java
public abstract double area();
```

Si una subclase hereda de una clase abstracta, estara obligada a implementar esos metodos abstractos.

### `final`

Se puede usar en:

- un metodo: para impedir que se sobreescriba
- una clase: para impedir que se herede

## 11. Control de excepciones

Las excepciones sirven para manejar errores que pueden ocurrir durante la ejecucion del programa.

En el tema aparece `Exception` como ejemplo de herencia, ya que las excepciones tambien forman jerarquias de clases.

### Idea importante

El control de excepciones permite que el programa gestione errores de forma controlada en vez de fallar sin mas.

## 12. Uso de tipos genericos

Los genericos permiten parametrizar clases, interfaces y metodos con tipos.

Esto hace que el codigo sea mas flexible y seguro.

### Ventajas

- comprobacion de tipos mas fuerte en tiempo de compilacion
- menos necesidad de hacer castings
- codigo mas legible
- posibilidad de crear algoritmos genericos con tipado seguro

## Interfaces

Aunque en el indice no aparece como apartado separado, en el PDF tambien se habla de interfaces.

### Idea general

Una interfaz define el comportamiento minimo que debe tener una clase.

Sus metodos son abstractos.

Las interfaces no se heredan, se implementan.

Ejemplo:

```java
public class Ventana extends JFrame implements ActionListener, WindowListener
```

### Diferencia importante

- `extends` -> herencia de clase
- `implements` -> implementacion de interfaces

## Resumen final

En esta unidad tengo que entender sobre todo:

- como una clase puede contener objetos de otra clase,
- como funciona la herencia,
- diferencia entre superclase y subclase,
- uso de `private`, `protected` y `public`,
- como se usan `this` y `super`,
- diferencia entre sobreescritura y sobrecarga,
- que es el polimorfismo,
- para que sirven las clases abstractas y `final`,
- como funciona la jerarquia de excepciones,
- para que sirven los tipos genericos e interfaces.
