//Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. 
//Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
//•	Rojo: "Alto, no puedes avanzar."
//•	Amarillo: "Precaución, prepárate para avanzar."
//•	Verde: "Avanza con seguridad."
//Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
//Utiliza un switch para resolver este ejercicio.

const prompt = require("prompt-sync")();

let color = prompt("Ingrese un color entre el rojo, amarillo y verde").trim().toLowerCase();

switch (color) {
    case "verde":
    console.log("Avanza con seguridad");
    break;
    case "rojo":
    console.log("Alto, no puedes avanzar");
    break;
    case "amarillo":
     console.log("Precaucion, preparate para avanzar");
    break;
    default:
        console.log("Color no reconocido, ingrese rojo amarillo o verde");
}
        

    
    


