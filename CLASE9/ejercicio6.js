// Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
// edad. Muestra un mensaje personalizado según el caso. 

const prompt = require("prompt-sync")({ sigint: true });

const usuario = prompt ("Ingresar edad");
const edad = parseInt (usuario);

if (edad >= 18) {
    console.log ("Es mayor de edad");
} else {
    console.log ("Es menor de edad");
}