//Crea una función expresada llamada concatenarNombres que reciba dos 
//nombres (nombre y apellido) como parámetros y devuelva el nombre 
//completo concatenado

const prompt = require("prompt-sync")();

const concatenarNombres = function(nombre,apellido) {
    return nombre + " " + apellido;
}

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt ("Ingresa tu apellido");

console.log(concatenarNombres(nombre,apellido));


