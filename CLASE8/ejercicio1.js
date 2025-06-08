//Escribir un programa de JavaScript que 
// 1-Solicite al usuario ingresar un numero cualquiera 
// 2-Calcule el doble de ese numero 
// 3-Muestre el resultado en consola

const prompt = require("prompt-sync")({ sigint: true });
let numero = prompt ("Ingresa un numero");
let doble = parseFloat(numero) * 2;

console.log ("El doble de " + numero + " es " + doble + "");