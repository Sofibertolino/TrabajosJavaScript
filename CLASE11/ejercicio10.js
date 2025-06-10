//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
// Luego, pide al usuario que adivine el número hasta 3 intentos.
//  Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes.
//  Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

 const prompt = require("prompt-sync")();

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinaste = false;

for (let intento = 1; intento <= 3; intento++) {
    let respuesta = parseInt(prompt("Intento " + intento + ": Adivina el número entre 1 y 10"));
    
    if (respuesta === numeroSecreto) {
    console.log("¡Felicidades! Adivinaste el número en el intento " + intento + ".");
    adivinaste = true;
    break; 
  } else {
    console.log("Intento incorrecto.");
  }
}

if (!adivinaste) {
  console.log("Lo siento. El número secreto era " + numeroSecreto + ".");
}