//Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). 

const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ingrese su altura"));

let imc = peso / (altura * altura);

console.log("Su IMC es de " + imc + "");


