//Pide al usuario que ingrese las longitudes de los tres lados de un 
// triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 

const prompt = require("prompt-sync")({ sigint: true });


const entrada1 = prompt ("medida lado 1");
const entrada2 = prompt ("medida lado 2");
const entrada3 = prompt ("medida lado3");

const lado1 = parseFloat (entrada1);
const lado2 = parseFloat (entrada2);
const lado3 = parseFloat (entrada3);

if (lado1 == lado2 && lado2 == lado3) {
    console.log ("Es un triangulo equilatero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log ("Es un traingulo isoceles");
} else {
    console.log ("Es un traingulo escaleno");
}