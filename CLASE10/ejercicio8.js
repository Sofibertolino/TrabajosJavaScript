//Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit.

const prompt = require("prompt-sync")();

let celsius = 20;
let fahrenheit = celsius * (9 / 5) + 32;

console.log("" + celsius + "°C son " + fahrenheit + " °F");

