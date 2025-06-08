//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
//semana correspondiente. Si el número no está dentro de ese rango, 
//muestra un mensaje de error.

const prompt = require ("prompt-sync")({sigint: true});

const usuario = prompt ("Ingrese un numero del 1 al 7");
const numero = parseInt (usuario);

if (numero === 1) {
    console.log ("El dia el Lunes");
} else if (numero === 2) {
    console.log ("El dia es Martes");
} else if (numero === 3) {
    console.log ("El dia es Miercoles")
} else if (numero === 4) {
    console.log ("El dia es Jueves");
} else if (numero === 5) {
    console.log ("El dia es Viernes");
} else if (numero === 6) {
    console.log ("El dia es Sabado");
} else if (numero === 7) {
    console.log ("El dia es Domingo");
} else {
    console.log ("Error numero incorrecto");
}