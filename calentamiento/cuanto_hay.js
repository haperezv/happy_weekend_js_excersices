/**
 * # Cuántos Carácteres "a" hay

Escribe una función llamada contarAs que reciba un string (una cadena de texto) y retorna el número de caracteres "a" (minúscula) hay:

```javascript
contarAs("Hola Pablo"); // 2
contarAs("Hasta la próxima"); // 4
contarAs("Bien Pedro!"); // 0
```
 */

function contarAs(texto) {
    
    let count = 0

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            count ++
        }
        
    }
    console.log(count)
    return count
}

contarAs("Hola Pablo"); // 2
contarAs("Hasta la próxima"); // 4
contarAs("Bien Pedro!"); // 0
