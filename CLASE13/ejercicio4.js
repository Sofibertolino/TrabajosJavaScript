//Crea una función declarada llamada esPar que reciba un número y devuelva 
//"Es par" si el número es par o "Es impar" si el número es impar. Usa una 
//variable local para guardar el resultado. 

const prompt = require("prompt-sync")();


function esPar(numero) {
    let resultado;

    if (numero % 2 == 0) {
        resultado  = "es par"
    } else { 
        resultado = "es impar"
    }
    return resultado;
}

let numeroUsuario = parseInt(prompt("Ingresa un numero"));
console.log(esPar(numeroUsuario));
