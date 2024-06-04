`use strict`;
let totalkms = prompt("ingrese el km");

let preciokm = 0.25; 

let arranque= 0.55;

let valor = (preciokm * totalkms)+ arranque;

if(valor< 1.50) 
{
    valor=1.50;
}
alert("El costo de la carrera es: " + valor); 

//deber agregar tarifa nocturna 



