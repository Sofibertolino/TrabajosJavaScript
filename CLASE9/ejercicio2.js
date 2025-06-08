//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
// valores numéricos de tu elección. Pide al usuario que ingrese un 
// número y verifica si está dentro del rango definido por las constantes.

const prompt = require("prompt-sync")({ sigint: true });

const rango_minimo = 0
const rango_maximo = 100

const usuario = prompt ("Ingresa un numero");
const numero = parseFloat (usuario);

if (numero >= rango_minimo && numero <= rango_maximo) {
    console.log ("El numero esta dentro del rango");
} else { 
    console.log ("El numero esta fuera del rando");
}
