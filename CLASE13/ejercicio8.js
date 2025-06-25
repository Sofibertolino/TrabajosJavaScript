//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
//una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit

const prompt = require("prompt-sync")();

let convertirCelsiusAFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
}

let temperatura = parseInt (prompt("Ingresar temperatura en celulsius"));

console.log("La temperatura en Fahtenheit es de" + convertirCelsiusAFahrenheit(temperatura));
