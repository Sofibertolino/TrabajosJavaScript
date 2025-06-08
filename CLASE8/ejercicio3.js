//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
// aritméticos. Escribe un programa que: 
//1. Pida al usuario que ingrese dos números. 
//2. Sume ambos números. 
//3. Muestre el resultado de la suma. 
//Requisitos: 
//• Utiliza prompt() para recibir los números. 
//• Utiliza parseFloat() para convertir las entradas a números. 
//• Almacena los resultados en variables adecuadas y muestra el resultado. 

const prompt = require("prompt-sync")({ sigint: true });

let usuario1 = prompt ("Ingresar numero 1");
let usuario2 = prompt ("Ingresar numero 2");

let numero1 = parseFloat (usuario1);
let numero2 = parseFloat (usuario2);

let suma = numero1 + numero2;

console.log ("La suma de " + numero1 + " y " + numero2 + " es " + suma + "");
