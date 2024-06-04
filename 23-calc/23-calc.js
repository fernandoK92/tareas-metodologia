'use strict';

//Crear la funcion sumar;
let suma=function(a,b){
    suma= a+b;
    alert("El resultado es"+suma)
}
//funcion resta
let resta = (a,b) => a - b;

//funcion Calc

function calc(op,fnsum ,fnRest)  {
let number1 = parseFloat(prompt("ingrese el primer numero:"));
let number2 = parseFloat(prompt("ingrese el primer numero:"));
if(op === 1){
    fnsum(number1,number2);

}
else{
    alert(fnRest(number1,number2));
}
   
}
//Llamado funcion
calc ('suma',suma,resta)
