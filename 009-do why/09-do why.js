'use strict';

let premio = 7;
let num;
let contador = 0;

do {
    num = prompt("Ingrese el numero");
    if (!num) break; // Sale del bucle si el usuario cancela el prompt
    num = Number(num);
    contador++;
    if (num === premio) {
        alert('¡Has ganado! Intentos: ' + contador);
        break; // Salir del bucle 
    }
} while (contador < 3);

if (contador === 3) {
    alert('Intentos Agotados. ¡Suerte para la próxima!');
}
