//Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
//parámetros: la base y la altura de un triángulo. La función debe devolver el 
//área del triángulo.

const prompt = require("prompt-sync")();

function calcularAreaTriangulo (base, altura) {
    let area = (base * altura) / 2;
    return area;

}

let resultado = calcularAreaTriangulo (10, 15);

console.log("El area del triangulo es de" + resultado + "");

