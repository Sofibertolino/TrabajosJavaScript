//Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresa un numero de 1 al 9"));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
    