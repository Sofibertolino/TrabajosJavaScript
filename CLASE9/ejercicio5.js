//Escribe un programa que pida al usuario que ingrese tres números y 
// determine cuál es el mayor de los tres.

const prompt = require("prompt-sync")({ sigint: true });

let usuario1 = prompt ("Ingresa el primer numero");
let usuario2 = prompt ("Ingresa el segundo numero");
let usuario3 = prompt ("Ingresa el tercer numero");

let numero1 = parseFloat (usuario1);
let numero2 = parseFloat (usuario2);
let numero3 = parseFloat (usuario3);

let mayor;
if (numero1 > numero2 && numero1 > numero3) {
    mayor = numero1;
} else if (numero2 > numero1 && numero2 > numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}   
console.log ("El numero mayor es" + mayor + "");
