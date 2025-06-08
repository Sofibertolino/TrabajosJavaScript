// Define una constante PI con el valor de pi (3.14159). Pide al usuario 
//que ingrese el radio de un círculo y calcula su área y perímetro 
//utilizando la constante PI.

const prompt = require ("prompt-sync")({sigint: true});

const PI = 3.14159
let usuario = prompt ("Ingresa el radio del circulo");
let radio = parseFloat (usuario);

let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

console.log ("El area del circulo es " + area + " y su perimetro es " + perimetro + "");


