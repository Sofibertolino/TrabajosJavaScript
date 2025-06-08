//Ejercicio 1:  Declara dos variables numéricas numero1 y numero2.
//  Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({ sigint: true });

let variable1 = prompt ("Ingresa primer numero");
let variable2 = prompt ("Ingresa segundo numero");

let numero1 = parseFloat (variable1);
let numero2 = parseFloat (variable2);

if (numero1 > numero2) {
console.log ("" + numero1 + " es mayor que " + numero2 + "");
} else if (numero1 < numero2) {
console.log ("" + numero1 + "es menor que " + numero2 + "");
} else {
    console.log ("Los numero son iguales")
}
