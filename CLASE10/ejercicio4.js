//•	Ejercicio 4 – Tipo de Datos: 
// Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. 
// Además, realizar operaciones y validaciones adicionales sobre estos valores.

const prompt = require("prompt-sync")({ sigint: true });

let verdadero = true;
let texto = "Caramelo";
let numero = 33;
let nada = null;

let resultado = numero * 2;
console.log("El resultado de nuestra multiplicacion es" + resultado + "");

let mensaje = "Hola" + texto;
console.log(mensaje);

if (verdadero) {
  console.log("La variable 'verdadero' es true.");
} else {
  console.log("La variable 'verdadero' es false.");
}

if (nada === null) {
  console.log("La variable 'nada' es null.");
} else {
  console.log("La variable 'nada' NO es null.");
}


