/**
 * # Descifra la Frase

Escribe una función descifrar que reciba un string y un objeto.
Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:

```javascript
descifrar("h0l4", { 0: "o", 4: "a" }); // "hola"
descifrar("pyrmizo", { y: "e", z: "s" }); // "permiso"
descifrar("igual", { h: "n" }); // "igual"
```
 */

function descifrar(palabra, objeto) {
    
    for (var key in objeto){
         palabra = palabra.replace(key,objeto[key])
    }

    return palabra
}

console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" }))// "permiso"
console.log(descifrar("igual", { h: "n" }))//igual
