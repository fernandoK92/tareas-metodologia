"use strict";

let clave = "1235";

function validarPIN() {
    // Pedir al usuario que ingrese su PIN
    let pinIngresado = prompt("Por favor, ingresa tu PIN:");

    // Verificar si el PIN ingresado coincide con la clave almacenada
    if (pinIngresado === clave) {
        // Si el PIN es correcto, mostrar mensaje de bienvenida
        alert("¡Bienvenido a Cajeros Jep!");
    } else {
        // Si el PIN es incorrecto, mostrar mensaje de error
        alert("PIN incorrecto. Su tarjeta ha sido bloqueada Cajeros JEP.");
    }
}

// Validar el PIN ingresado por el usuario
validarPIN();
