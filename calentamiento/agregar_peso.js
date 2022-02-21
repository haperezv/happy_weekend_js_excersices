/**
 * # Agregar Peso

Escribe una función agregarPeso que reciba un objeto (que representa una persona) y un número.
 La función deberá retornar el mismo objeto de entrada pero con una nueva llave peso cuyo valor deberá ser el número que llega por parámetro:

```javascript
agregarPeso({ nombre: "Pedro" }, 40);
// { nombre: "Pedro", peso: 40 }

agregarPeso({ nombre: "Maria" }, 23);
// { nombre: "Maria", peso: 23 }
```
 */

function agregarPeso(henry, numero) {

        henry.peso = numero
        console.log(henry)
}

agregarPeso({ nombre: "Pedro" }, 40);
// { nombre: "Pedro", peso: 40 }

agregarPeso({ nombre: "Maria" }, 23);
// { nombre: "Maria", peso: 23 }