/**
 * # Obtener el Valor del Objeto

Escribe una función llamada obtenerValor que reciba un objeto y un string (que representa una llave en el objeto).
La función deberá retornar el valor que tenga la llave que llega como segundo parámetro. Si la llave no existe retorna false:

```javascript
obtenerValor({ a: 1, b: 2, c: 3 }, "a"); // 1
obtenerValor({ a: 1, b: 2, c: 3 }, "b"); // 2
obtenerValor({ b: 2, c: 3 }, "a"); // false
```
 */

function obtenerValor(objeto, text) {
            
    for(var key in objeto){ 
        
        if (key == text) {   
          return  text = (objeto[key])

        } 
    }
    return false
}

console.log(obtenerValor({ a: 1, b: 2, c: 3 }, "a")); // 1
console.log(obtenerValor({ a: 1, b: 2, c: 3 }, "b")); // 2
console.log(obtenerValor({ b: 2, c: 3 }, "a")); // false