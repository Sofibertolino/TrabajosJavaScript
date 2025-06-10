//•	Ejercicio 3 – Constantes / Validación de Edad: 
// Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
// Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes
//  (asignándoles los valores numéricos 18 y 99 respectivamente). 
// Por último, Deberás pedirle al usuario que ingrese su edad para validarla usando parseInt.

const prompt = require("prompt-sync")({ sigint: true });

const edadMinima = 18
const edadMaxima = 99

let edad = parseInt(prompt("Dime tu edad"));

if (edad>= edadMinima && edad<=edadMaxima) {
    console.log("Estas dentro del rango permitido");
} else {
    console.log("Estas fuera del rango");
}

