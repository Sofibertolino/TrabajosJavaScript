//•	Ejercicio 2 – Usando las variables: 
// Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso.
// Luego muestre un mensaje personalizado que incluya toda esta información.

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt ("Dime tu nombre");
let edad = parseInt(prompt("Dime tu edad"));
let peso = parseFloat(prompt("Dime tu peso en Kilogramos"));

console.log ("Hola " + nombre +  "tu edad es de " + edad + "y tu peso es de " +  peso + "");


