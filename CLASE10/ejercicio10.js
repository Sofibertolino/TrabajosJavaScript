//Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
//  Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.

const prompt = require("prompt-sync")();

let precioOriginal = parseFloat(prompt("Ingresa el precio original"));
let descuento = parseFloat(prompt("Dime de cuanto es el descuento"));

let descuentoTotal = precioOriginal * (descuento / 100);

console.log("El total del descuento es de " + descuentoTotal + "");

