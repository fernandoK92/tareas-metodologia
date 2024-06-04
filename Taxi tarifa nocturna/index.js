`use strict`;

let distanciaKm = prompt("Ingrese la distancia en kilómetros:");
let esDeNoche = confirm("¿Es de noche?");

let costoPorKilometro = 0.29;
let costoDeArranque = 0.55;
let tarifaDia = 1.50;
let tarifaNoche = 1.75;

let costoTotal = (costoPorKilometro * distanciaKm) + costoDeArranque;

if (esDeNoche) {
    if (costoTotal < tarifaNoche) {
        costoTotal = tarifaNoche;
    }
} else {
    if (costoTotal < tarifaDia) {
        costoTotal = tarifaDia;
    }
}

alert("El costo del viaje es: $" + costoTotal);


