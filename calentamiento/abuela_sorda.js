/**
 * # La Abuela Sorda

Escribe una función llamada abuela que reciba un string (una cadena de texto).

Si el string está todo en mayúsculas la función debe retornar la frase "Ahh si, manzanas!". 
De lo contrario, deberá retornar la frase "Habla más duro mijito".

Por último, si el string es vacío (o son sólo espacios) debe retornar la frase "Dices algo?".

```javascript
abuela("hola"); // "Habla más duro mijito"
abuela("HOLA"); // "Ahh si, manzanas!"
abuela(""); // "Dices algo?"
abuela("    "); // "Dices algo?"
```
 */


function abuela(texto) {

    if(texto.length === 0 ||  texto.match(/^ *$/) !== null ){
        return "Dices algo?"
    }
    else if(texto === texto.toUpperCase() ){
        return "Ahh si, manzanas!"
    }else if(texto === texto.toLowerCase() ){
            return  "Habla más duro mijito"
    }

}

console.log(abuela("hola")); // "Habla más duro mijito"
console.log(abuela("HOLA")); // "Ahh si, manzanas!"
console.log(abuela("")); // "Dices algo?"
console.log(abuela("    ")); // "Dices algo?"