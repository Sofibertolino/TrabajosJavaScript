//Crea una función expresada llamada calcularFactorial que reciba un número 
//y devuelva su factorial. 


const prompt = require("prompt-sync")();

const calcularFactorial = function(n) {
    if (n < 0) return "No se puede calcular factorial de números negativos";
    if (n === 0) return 1;

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
};

let numero = parseInt(prompt("Ingresa un número entero no negativo: "));

console.log("El factorial de " + numero + " es: " + calcularFactorial(numero));
