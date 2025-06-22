//Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
//La idea es solo registrar el total de los gastos, al finalizar la jornada.
//Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
//Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 



const gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],  
  [1750, 1890, 1900, 1300, 898, 1750, 2800],  
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], 
  [800, 1250, 1430, 2100, 1980, 1270, 950]    
];


function totalSemana(matriz, semana) {
  let fila = semana - 1;
  let suma = 0;
  for (let dia = 0; dia < matriz[fila].length; dia++) {
    suma += matriz[fila][dia];
  }
  return suma;
}


function totalDia(matriz, dia) {
  let col = dia - 1;
  let suma = 0;
  for (let semana = 0; semana < matriz.length; semana++) {
    suma += matriz[semana][col];
  }
  return suma;
}


function totalMes(matriz) {
  let suma = 0;
  for (let semana = 0; semana < matriz.length; semana++) {
    for (let dia = 0; dia < matriz[semana].length; dia++) {
      suma += matriz[semana][dia];
    }
  }
  return suma;
}

function semanaConMasGastos(matriz) {
  let maxGastos = 0;
  let semanaMax = -1;
  for (let semana = 0; semana < matriz.length; semana++) {
    let sumaSemana = 0;
    for (let dia = 0; dia < matriz[semana].length; dia++) {
      sumaSemana += matriz[semana][dia];
    }
    if (sumaSemana > maxGastos) {
      maxGastos = sumaSemana;
      semanaMax = semana;
    }
  }
  return semanaMax + 1; 
}

function diaConMasGastos(matriz) {
  let maxGastos = 0;
  let diaMax = -1;
 
  for (let dia = 0; dia < matriz[0].length; dia++) {
    let sumaDia = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
      sumaDia += matriz[semana][dia];
    }
    if (sumaDia > maxGastos) {
      maxGastos = sumaDia;
      diaMax = dia;
    }
  }
  return diaMax + 1; 
}


console.log("Total semana 2: " + totalSemana(gastos, 2));
console.log("Total día 3: " + totalDia(gastos, 3));
console.log("Total mes: " + totalMes(gastos));
console.log("Semana con más gastos: " + semanaConMasGastos(gastos));
console.log("Día con más gastos: " + diaConMasGastos(gastos));
