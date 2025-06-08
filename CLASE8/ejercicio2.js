//En este ejercicio, practicarás el uso de condicionales (if, else). 
// Escribe un programa en JavaScript que: 
//1. Pida al usuario que ingrese un número. 
//2. Verifique si el número es positivo, negativo o igual a cero. 
//3. Muestre un mensaje indicando cuál es el caso.

const prompt = require("prompt-sync")({ sigint: true });

let usuario = prompt ("Ingresa un numero");
let numero = parseFloat (usuario);
if (numero > 0) {
console.log ("El numero es positivo");
} else if (numero < 0) {
console.log ("el numero es negativo");
} else { 
console.log ("El numero es cero");
}
