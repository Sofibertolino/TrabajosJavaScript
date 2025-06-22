//Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo.
//  Luego, imprime la suma de todos los números ingresados.

const prompt = require("prompt-sync")();

let suma = 0
let numero = parseFloat(prompt("Ingresa un numero"));

while (numero >= 0) {
    suma+= numero;
    numero = parseFloat(prompt("Ingresa otro numero, usando uno negativo para salir"));
}

console.log("La suma de los numeros ingresados es de " + suma + "");

