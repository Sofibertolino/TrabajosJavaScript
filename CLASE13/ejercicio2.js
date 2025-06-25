//Crea una función expresada llamada encontrarMayor que reciba dos 
//números como parámetros y devuelva el número mayor.

const prompt= require("prompt-sync")();

function encontrarMayor(numero1, numero2) {
    let numeroMayor;
    if (numero1 < numero2) {
        numeroMayor = numero2;
    } else if (numero1 > numero2) {
        numeroMayor = numero1;
    } else { 
        numeroMayor = null;
    }
    return numeroMayor;
}

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

let mayor = encontrarMayor(numero1, numero2);

if (mayor == null) {
    console.log("Los numeros son iguales");
} else {
    console.log("El numero mayor es" + mayor + "");
}

