//Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive). 

const prompt = require("prompt-sync")();

let x = parseInt(prompt("Ingresa un numero para iniciar"));
let impares = 0;

for (let i = 0; i <= x; i++) {
    if (i % 2 !== 0) {
        impares++;
    }
}

console.log("La cantidad de impares es de" + impares + "");





