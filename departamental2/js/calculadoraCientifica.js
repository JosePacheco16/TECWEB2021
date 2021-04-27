//Variables que usemos en todas las funciones

function presionaDigito(digito) {
    var display     = document.getElementById("display");
    display.value   = display.value + digito;
}

function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value="0";
}

function presionaOperador(operador){
    var display = document.getElementById("display");
    display.value = display.value + operador;
}

function presionaIgual(){
    var display = document.getElementById("display");
    var resultado = eval(display.value);
    display.value = resultado;
}

function calcularRaiz(){
    var display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

function calcularPorcentaje(){
    var display = document.getElementById("display");
    display.value = Math.floor(eval(display.value*50))/100;
}

function calcularLogaritmo(){
    var display = document.getElementById("display");
    display.value = Math.log(eval(display.value));
}

function calcularFactorial () {
    var display = document.getElementById("display");
	var total = 1; 
	for (i=1; i<=eval(display.value); i++) {
		total = total * i; 
	}
	display.value = total; 
}

function calcularCuadrado(){
    var display = document.getElementById("display");
    display.value = Math.pow(eval(display.value),2);
}