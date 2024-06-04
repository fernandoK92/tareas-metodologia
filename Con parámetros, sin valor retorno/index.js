'use strict';

// Función con parámetro pero sin valor de retorno
function deberesparaLaCasa(nombre) {
    alert("¡Hola, " + nombre + "! Comenzando los deberes");

    alert("1. " + nombre + ", infografía de JavaScript");
    alert("2. " + nombre + ", comandos de Linux");
    alert("3. " + nombre + ", instalación de Angular");
    alert("4. " + nombre + ", instalación de Ubuntu");

    alert("Todos los deberes de " + nombreEstudiante + " han sido terminados y enviados");
}
let nombre = prompt("Por favor, ingresa tu nombre:");
deberesparaLaCasa(nombre);
