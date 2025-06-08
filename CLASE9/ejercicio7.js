// Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
// libras. Muestra el resultado con un mensaje. 

const prompt = require("prompt-sync")({ sigint: true });

const usuario = prompt ("Ingrese su peso");
const pesoKg = parseFloat (usuario);
const pesoLibra = pesoKg * 2.20462;
console.log ("El peso en libras es de " + pesoLibra + "");

