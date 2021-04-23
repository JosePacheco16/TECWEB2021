//Variables que usemos en todas las funciones

function presionaDigito(digito) {
    var display     = document.getElementById("display");
    display.value   = display.value + digito;
}

function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value="0";
}