//Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require("prompt-sync")({ sigint: true });

const miNombre = "Sofia"
let nombre = prompt ("Dime tu nombre");

if (miNombre === nombre) {
console.log ("Tenemos el mismo nombre")
} else {
    console.log ("Nuestro nombre es diferente");
}
