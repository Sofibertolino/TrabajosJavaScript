//Crea una función declarada llamada convertirHorasAMinutos que reciba un 
//número de horas como parámetro y devuelva el total en minutos.

const prompt = require("prompt-sync")();

function convertirHorasAMinutos(horas) {
    let minutos = horas * 60;
    return minutos;
}

let ingresHora = parseInt(prompt("Ingresa la hora"));

console.log("Equivale a " + convertirHorasAMinutos(ingresHora)+ "minutos");
