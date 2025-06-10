//Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. 
// Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.
//  Usa switch para resolverlo.

const prompt = require("prompt-sync")();

let numeroUno = parseInt(prompt("Ingresa el primer numero"));
let numeroDos = parseInt(prompt("Ingresa el segundo numero"));
let operacion = prompt ("Ingresa una operacion, suma, resta multiplicacion o division").trim().toLowerCase();


switch (operacion) {
    case "suma":
        resultado = numeroUno + numeroDos;
        console.log(resultado);
        break;
        case "resta":
            resultado = numeroUno - numeroDos;
            console.log(resultado);
            break;
            case "multiplicacion":
                resultado = numeroUno * numeroDos;
                console.log(resultado);
                break;
                case "division":
                    resultado = numeroUno / numeroDos;
                    console.log(resultado);
                    break;
                    default:
                        console.log("Ingresa una operacion valida");
}


