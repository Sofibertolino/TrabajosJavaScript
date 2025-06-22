//Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos.
//  Luego, escribe un algoritmo para sumar todos los números en la matriz.

let matriz = [ 
    [23,34,33,12,32],
    [7,1,2,3,4],
    [76,87,45,34,54],
    [23,1,23,4,55],
    [67,6,543,3,2],
];

let suma = 0;


for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}
     

console.log("La suma de todos lo numeros es de" + suma + "");

