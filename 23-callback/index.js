'use strict';
//Declaracion de funcion
function validateField(isVisible, show, hide){
 if (isVisible) {
     show();
 }else{
    
    hide();
 }
}

//Expresion de funcion
let showField = function(){
    alert("Campo Visible");
}


//Funcion Flecha
let hideField = () => alert ("Campo Oculto");

validateField (false, showField, hideField); // --> Callbacks function