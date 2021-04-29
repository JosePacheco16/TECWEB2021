function cambiaContenido(){

    var inputLongitud_1 = document.getElementById("input_longitud_1");
    var inputLongitud_2 = document.getElementById("input_longitud_2");
    var muestra_formula = document.getElementById("muestra_formula");

    var selectLongitud_1 = document.getElementById("select_longitud_1").value;
    var selectLongitud_2 = document.getElementById("select_longitud_2").value;

    //-------------------------------------kilometro---------------------------------------------------\\
    if (selectLongitud_1=="kilometro" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *1000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *100000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 100000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *1000000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *1000000000 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000000000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *1000000000000 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000000000000 ";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *0.6214 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.6214";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *1093.61;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1093.61";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *3280.84 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 3280.84 ";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *39370.08;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 39370.08";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.54 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.54";
    }
    //-------------------------------------kilometro-------------------------------------------------------------\\

    //-------------------------------------Metro-------------------------------------------------------------\\
    if (selectLongitud_1=="metro" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *0.001;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.001";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *100;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 100";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *1000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *1000000000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000000000";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *0.000621371;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.000621371";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *1.09361;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.09361";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *3.28084;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 3.28084";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *39.3701;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 39.3701";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.000539957;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.000539957";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *1000000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000000";
    }
    //-------------------------------------Metro-------------------------------------------------------------\\

    //-------------------------------------Centimetro-------------------------------------------------------------\\

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *.000001;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por .000001";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *0.01
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.01";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *10;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 10";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *10000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 10000";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *10000000 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 10000000 ";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *0.0000062137119223733;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0000062137119223733";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *0.010936132983377;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.010936132983377";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *0.032808398950131;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.032808398950131";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *0.39370078740157;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.39370078740157";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.0000053995680345572
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0000053995680345572";

    }
    //-------------------------------------Centimetro-------------------------------------------------------------\\
    
    //-------------------------------------Milimetro-------------------------------------------------------------\\
    if (selectLongitud_1=="milimetro" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *0.0000010 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0000010 ";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *0.001;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.001";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *0.1 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.1 ";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *1000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000 ";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *1000000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000000  ";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *6.214;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 6.214";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *0.0010936132983377 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0010936132983377 ";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *0.0032808398950131 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0032808398950131 ";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *0.039370078740157;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.039370078740157";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *5.3995680345572;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 5.3995680345572";

    }
    //-------------------------------------Milimetro-------------------------------------------------------------\\

    //-------------------------------------Micrometro-------------------------------------------------------------\\
    if (selectLongitud_1=="micrometro" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *1.0;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.0";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value * 0.0000010;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por  0.0000010";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *0.0001 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0001 ";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *0.001  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.001 ";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *1000;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *6.2137119223733;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 6.2137119223733";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *0.0000010936132983377;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0000010936132983377";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *0.0000032808398950131 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0000032808398950131 ";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *0.000039370078740157 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.000039370078740157 ";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.000039370078740157 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.000039370078740157 ";

    }
    //-------------------------------------Micrometro-------------------------------------------------------------\\

    //-------------------------------------Nanometro-------------------------------------------------------------\\
    if (selectLongitud_1=="nanometro" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *1.0;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.0";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *1.0;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.0";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *1.0;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.0";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *0.0000010  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0000010 ";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *0.001  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.001  ";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *6.2137119223733;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 6.2137119223733";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *1.0936132983377;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.0936132983377";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *3.2808398950131 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 3.2808398950131";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *3.9370078740157;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 3.9370078740157";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *5.3995680345572;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 5.3995680345572";

    }
    //-------------------------------------Nanometro-------------------------------------------------------------\\

    //-------------------------------------Milla-------------------------------------------------------------\\
    if (selectLongitud_1=="milla" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *1.609344 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.609344 ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *1609.344 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1609.344 ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *160934.4 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 160934.4 ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *1609344  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1609344 ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *1609344000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1609344000  ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *1609344000000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1609344000000 ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *1760 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1760 ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *5280  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 5280  ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *63360 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 63360 ";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.86897624190065 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.86897624190065";

    }
    //-------------------------------------Milla-------------------------------------------------------------\\

    //-------------------------------------Yarda-------------------------------------------------------------\\
    if (selectLongitud_1=="yarda" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *0.0009144 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0009144 ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *0.9144 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.9144 ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *91.44 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 91.44 ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *914.4  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 914.4 ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *914400 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 914400 ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *914400000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 914400000 ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *0.00056818181818182 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.00056818181818182 ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *3  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 3  ";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *36;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 36";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.00049373650107991;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.00049373650107991";

    }
    //-------------------------------------Yarda-------------------------------------------------------------\\

    //-------------------------------------Pie-------------------------------------------------------------\\
    if (selectLongitud_1=="pie" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *0.0003048 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0003048 ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *0.3048 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.3048 ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *30.48 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 30.48 ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *304.8  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 304.8 ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *304800  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 304800  ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *304800000 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 304800000 ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *0.00018939393939394 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.00018939393939394 ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *0.33333333333333  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.33333333333333  ";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *12;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 12";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.0001645788336933 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0001645788336933 ";

    }
    //-------------------------------------Pie-------------------------------------------------------------\\

    //-------------------------------------Pulgada-------------------------------------------------------------\\
    if (selectLongitud_1=="pulgada" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *0.0000254 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0000254 ";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *0.0254;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.0254";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *2.54 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 2.54 ";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *25.4  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 25.4 ";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *25400  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 25400  ";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *25400000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 25400000 ";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *0.000015782828282828;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.000015782828282828";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *0.027777777777778  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.027777777777778  ";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *0.083333333333333 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.083333333333333 ";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="milla nautica") {
        var conversionLongitud = inputLongitud_1.value *0.000013714902807775  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 0.000013714902807775 ";

    }
    //-------------------------------------Pulgada-------------------------------------------------------------\\

    //-------------------------------------Milla-------------------------------------------------------------\\
    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="kilometro") {
        var conversionLongitud = inputLongitud_1.value *1.852 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.852 ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="metro") {
        var conversionLongitud = inputLongitud_1.value *1852 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1852 ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="centimetro") {
        var conversionLongitud = inputLongitud_1.value *185200 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 185200 ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="milimetro") {
        var conversionLongitud = inputLongitud_1.value *1852000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1852000 ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="micrometro") {
        var conversionLongitud = inputLongitud_1.value *1852000000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1852000000  ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="nanometro") {
        var conversionLongitud = inputLongitud_1.value *1852000000000  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1852000000000 ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="milla") {
        var conversionLongitud = inputLongitud_1.value *1.1507794480235 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 1.1507794480235 ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="yarda") {
        var conversionLongitud = inputLongitud_1.value *2025.3718285214  ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 2025.3718285214  ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="pie") {
        var conversionLongitud = inputLongitud_1.value *6076.1154855643 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 6076.1154855643 ";
    }

    if (selectLongitud_1=="milla nautica" && selectLongitud_2=="pulgada") {
        var conversionLongitud = inputLongitud_1.value *72913.385826772 ;
        inputLongitud_2.value = conversionLongitud;
        muestra_formula.innerHTML ="El valor de longitud multiplicado por 72913.385826772 ";

    }

    
    
    var inputTemperatura_1 = document.getElementById("input_temperatura_2");
    var inputTemperatura_2 = document.getElementById("input_temperatura_2");
    var formula = document.getElementById("formula");
    
    var selectTemperatura_1 = document.getElementById("select_temperatura_1").value;
    var selectTemperatura_2 = document.getElementById("select_temperatura_2").value;

    //-------------------------------------Celcius---------------------------------------------------\\

    if (selectTemperatura_1=="celcius" && selectTemperatura_2=="fahrenheit") {
        var conversionTemperatura = (inputTemperatura_1.value * 9/5 + (32));
        inputTemperatura_2.value = conversionTemperatura;
        formula.innerHTML ="El valor de la temperatura se calcula: (C × 9/5) + 32";
    }


    if (selectTemperatura_1=="celcius" && selectTemperatura_2=="kelvin") {
        var conversionTemperatura = (inputTemperatura_1.value + (273.15));
        inputTemperatura_2.value = conversionTemperatura;
        formula.innerHTML ="El valor de la temperatura se calcula: (C + 273.15)";
    }

    //-------------------------------------Celcius---------------------------------------------------\\

    //-------------------------------------Fahrenheit---------------------------------------------------\\
    if (selectTemperatura_1=="fahrenheit" && selectTemperatura_2=="celcius") {
        var conversionTemperatura = (inputTemperatura_1.value -32 * 5/9) ;
        inputTemperatura_2.value = conversionTemperatura;
        formula.innerHTML ="El valor de la temperatura se calcula: (F − 32) × 5/9";
    }

    if (selectTemperatura_1=="fahrenheit" && selectTemperatura_2=="kelvin") {
        var conversionTemperatura = (inputTemperatura_1.value -32 * 5/9 (+273.15));
        inputTemperatura_2.value = conversionTemperatura;
        formula.innerHTML ="El valor de la temperatura se calcula: (F − 32) × 5/9 + 273.15";
    }
    //-------------------------------------Fahrenheit---------------------------------------------------\\

    //-------------------------------------Kelvin---------------------------------------------------\\
    if (selectTemperatura_1=="kelvin" && selectTemperatura_2=="celcius") {
        var conversionTemperatura = (inputTemperatura_1.value -(273.15)) ;
        inputTemperatura_2.value = conversionTemperatura;
        formula.innerHTML ="El valor de la temperatura se calcula: (K − 273.15)";
    }

    if (selectTemperatura_1=="kelvin" && selectTemperatura_2=="fahrenheit") {
        var conversionTemperatura = (inputTemperatura_1.value - 273.15 *9/5 (+32));
        inputTemperatura_2.value = conversionTemperatura;
        formula.innerHTML ="El valor de la temperatura se calcula: (K − 273.15 × 9/5 + 32) ";
    }
    //-------------------------------------Kelvin---------------------------------------------------\\
     var inputMasa_1 = document.getElementById("input_masa_1");
     var inputMasa_2 = document.getElementById("input_masa_2");

     var selectMasa_1 = document.getElementById("select_masa_1").value;
     var selectMasa_2 = document.getElementById("select_masa_2").value;

     if (selectMasa_1=="miligramo" && selectMasa_2=="gramo") {
        var conversionMasa = inputMasa_1.value /1000.0;
        inputMasa_2.value = conversionMasa;
        muestra_formula.innerHTML ="El valor de masa multiplicado sobre 1000.0 ";
    }

    if (selectMasa_1=="miligramo" && selectMasa_2=="kilogramo") {
        var conversionMasa = inputMasa_1.value /1000000 ;
        inputMasa_2.value = conversionMasa;
        muestra_formula.innerHTML ="El valor de masa multiplicado sobre 1000000 ";
    }

    if (selectMasa_1=="gramo" && selectMasa_2=="miligramo") {
        var conversionMasa = inputMasa_1.value /0.0010000 ;
        inputMasa_2.value = conversionMasa;
        muestra_formula.innerHTML ="El valor de masa multiplicado sobre 0.0010000 ";
    }

    if (selectMasa_1=="gramo" && selectMasa_2=="kilogramo") {
        var conversionMasa = inputMasa_1.value /1000.0;
        inputMasa_2.value = conversionMasa;
        muestra_formula.innerHTML ="El valor de masa multiplicado sobre /1000.0 ";
    }

    if (selectMasa_1=="kilogramo" && selectMasa_2=="gramo") {
        var conversionMasa = inputMasa_1.value /0.0010000;
        inputMasa_2.value = conversionMasa;
        muestra_formula.innerHTML ="El valor de masa multiplicado sobre 0.0010000 ";
    }

    if (selectMasa_1=="kilogramo" && selectMasa_2=="milogramo") {
        var conversionMasa = inputMasa_1.value /0.0000010000 ;
        inputMasa_2.value = conversionMasa;
        muestra_formula.innerHTML ="El valor de masa multiplicado sobre 0.0000010000 ";
    }

}









