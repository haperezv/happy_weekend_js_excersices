/**
 * # Métodos

En este ejercicio deberás agregar dos métodos a el objeto `persona`.

Agrega un método llamado saludar que reciba un nombre y retorna una frase saludando a esa persona como se muestra a continuación:

```javascript
persona.saludar("Pedro"); // "Hola Pedro, me llamo Maria"
persona.saludar("Juan"); // "Hola Juan, me llamo Maria"
```

Agrega otro método llamado bmi que retorne el índice de masa corporal de la persona. Recuerda que el índice de masa corporal se calcula con la siguiente fórmula: `peso / altura^2`.

Por ejemplo, asumiendo que el peso es 54 y la altura es 1.7:

```javascript
persona.bmi(); // 18.68512110726644
```
 */

var persona = {

    nombre1 : "Maria",   
    peso: 54,
    altura: 1.7,
    saludar: function  saludar(nombre2) {
        
        this.nombre2 = nombre2
        return "Hola " + this.nombre2 + ", me llamo " + this.nombre1
    },
    bmi: function bmi() {
        return  this.peso / Math.pow(this.altura, 2)
    }    
}

console.log(persona.saludar("Pedro")); // "Hola Pedro, me llamo Maria"
console.log(persona.saludar("Juan")); // "Hola Juan, me llamo Maria"
console.log(persona.bmi()); // 18.68512110726644)
