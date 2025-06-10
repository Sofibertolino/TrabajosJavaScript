//Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores.
//  Muestra los valores antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), 
// eres libre de elegir el que desees, eso si, investiga sobre el que usaras

const prompt = require ("prompt-sync")();

let oso = 4;
let mono = 20;

console.log("Antes del intercambio, oso=" + oso + " y mono=" + mono +"");

let temp = oso;
oso = mono;
mono = temp;

console.log("Despues del intercambio oso = " + oso + " y mono = " + mono +"");




