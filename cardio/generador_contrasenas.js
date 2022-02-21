/**
 * # Generador de Contraseñas

Escribe una función llamada contrasena que reciba un string y retorne otro string realizando los siguientes cambios sobre el string de entrada:

* Las mayúsculas se reemplazan por minúsculas.
* Se eliminan los espacios en blanco.
* Reemplaza el caracter "a" por "4".
* Reemplaza el caracter "e" por "3".
* Reemplaza el caracter "i" por "1".
* Reemplaza el carater "o" por "0".

```javascript
contrasena("hola"); // "h0l4"
contrasena("esta es una prueba"); // "3st43sun4pru3b4"
contrasena(""); // ""
```

**Nota:** Esta no es una forma segura de generar contraseñas y no la recomendamos.
 */

function contrasena(generaContrasena) {

    generaContrasena= generaContrasena.split(" ").join("")

    for (let i = 0; i < generaContrasena.length; i++) { 
        
        if(generaContrasena[i] == "a"){
                   
            generaContrasena = generaContrasena.replace("a",4) 

        }else if(generaContrasena[i] == "e"){
            generaContrasena = generaContrasena.replace("e",3) 
        }else if (generaContrasena[i] == "i") {
            generaContrasena = generaContrasena.replace("i",1) 
        }else if (generaContrasena[i] == "o") {
            generaContrasena = generaContrasena.replace("i",0) 
        }
            
    }

    return console.log(generaContrasena.toLowerCase())
}

contrasena("hola"); // "h0l4"
contrasena("esta es una prueba"); // "3st43sun4pru3b4"
contrasena(""); // ""