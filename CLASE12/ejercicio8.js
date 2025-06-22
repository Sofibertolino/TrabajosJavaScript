//Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505


const prompt = require("prompt-sync")();

let matriz = [];
let valor = 1;

for (let i = 0; i < 10; i++) {
    let fila = [];
    for (let j = 0; j < 10; j++) {
    fila.push(valor);
    valor++;
}
matriz.push(fila);
}

function sumaRojo(matriz) {
    let suma = 0;
    for (let i = 0;i < matriz.length; i++) {
        suma += matriz [i][i];
    }
    return suma;
}
 function valoresVerde(matriz) {
    let verde = [];
    for (let i = 0;i < matriz.length; i++) {
        verde.push(matriz[i][matriz.length - 1 - i]);
    }
    return verde;
}

let sumaRoja = sumaRojo(matriz);
let valoresVerd = valoresVerde(matriz);

console.log("La suma de la diagonal roja es de" + sumaRoja + "");
console.log("Los valores de la diagonal verde son de" + valoresVerd + "");




