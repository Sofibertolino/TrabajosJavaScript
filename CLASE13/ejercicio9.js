//Crea una función declarada llamada contarHasta que reciba un número y 
//use un bucle para imprimir todos los números desde 1 hasta ese número. 

const prompt = require("prompt-sync")();

function contarHasta(numero) {
    for (let i = 1; i <= numero; i ++) {
    console.log(i);
    }
}

let usuario = parseInt(prompt("Ingresa un numero"));

contarHasta(usuario);
