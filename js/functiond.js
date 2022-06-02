function saludo(){
    alert("HOLA MUNDO ESTO ES JS")
}

function suma(){
    var A;
    var B;
    var Suma;

    alert("ESTE SISTEMA REALIZA LA SUMA CON 2 VALORES INGRESADOS POR EL USUARIO")

    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("por favor ingrese el segundo valor"));

    Suma = A +B;

    alert("El resultado de la suma es: " + Suma)

}

function operaciones(){
    var A;
    var B;
    var Suma;
    var Resta;
    var Multi;
    var Divi;

    alert("ESTE SISTEMA REALIZA LAS OPERACIONES BASICAS CON 2 VALORES INGRESADOS POR EL USUARIO")

    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("por favor ingrese el segundo valor"));

    Suma = A +B;
    Resta = A - B;
    Multi = A * B;
    Divi = A / B;

    alert("El resultado de la suma es: " + Suma +
    "\nEl resultado de la resta es: " + Resta +
    "\nEl resultado de la multuplicacion es: " + Multi +
    "\nEl resultado de la divicion es: " + Divi); 

}

function comparacionDeDosNumeros() {

    var A;
    var B;

    alert ("ESTE SISTEMA PERMITE CONOCER EL NUMERO MAYOR DE DOS NUMEROS INGRESADOS POR EL USUARIO")

    A = parseInt(prompt("Por favor ingrese el primer valor"))
    B = parseInt(prompt("Por favor ingrese el segundo valor"))

    if (A === B) 
        alert("Los numeros son iguales");
    
    else if (A > B) 
        alert( A+" es mayor que "+B);
    
    else  
        alert( B+" es mayor que "+B);
    
} 

function comparacionDETresNumeros() {

    var A;
    var B;
    var C;

    alert ("ESTE SISTEMA PERMITE CONOCER EL NUMERO MENOR ESTRE TRES NUMEROS INGRESADOS POR EL USUARIO")

    A = parseInt(prompt("Por favor ingrese el primer valor"))
    B = parseInt(prompt("Por favor ingrese el segundo valor"))
    C = parseInt(prompt("Por favor ingrese el trecer valor"))

    if  (A === B && A === C)
        alert("Los tres numeros son iguales");
    else if (A < B && A < C)
        alert("El numero menor es: "+A);
    else if (B < A && B < C)
        alert("El numero menor es: "+B);
    else 
        alert("El numero menor es: "+C);

}

function numeroParOImpar() {

    var A;

    alert ("ESTE SISTEMA PERMITE CONOCER SI UN NUMERO INGRESADO POR EL USUARIO ES PAR O IMPAR")

    A = parseInt(prompt("Por favor ingrese un numero"))

    if (A % 2 == 0)
        alert ("El numero "+A+" es par");
    else 
        alert ("El numero "+A+" es impar");

}

function numeroCuadrado() {

    var A;
    var B;

    alert("ESTE SISTEMA PERMITE CONOCER EL CUADRADO DE UN NUMERO INGRESADO POR EL USUARIO")

    A = parseInt(prompt("Por favor ingrese un numero"))
    B = (A * A)

    alert("El resultado de "+A+" al cuadrado es "+B)
}

function areaDeUnTriangulo() {
    var A;
    var H;
    var B;

    alert ("ESTE SISTEMA PERMITE CONOCER EL AREA DE UN TRIANGULO")

    B = parseInt(prompt("Por favor ingrese la longitud de la base del triangulo"))
    H = parseInt(prompt("Por favor ingrese la longitud de la altura del triangulo"))

    A = ((B * H)/2)
    alert ("el area de el triangulo es: "+A)

}

function convertirMetrosACentimetros() {

    var M;
    var Cm;

    alert ("ESTE SISTEMA PERMITE CONVERTIR METROS A CENTIMETROS")

    M = parseInt(prompt("Por favor ingrese la cantidad de metros que desea convertir en centimeros"))
    
    Cm = (M * 100)
    alert (M+" metros equivale a "+Cm+" centimetros")
}

function añoDeNacimiento() {

    var A;
    var B;

    alert ("ESTE SISTEMA PERMITE SABER EL ANO DE NACIMIENTO DE UN USUARIO")

    A = parseInt(prompt("Por favor ingrese la cantidad de años"))

    B = (2022 - A)

    alert ("El año de nacimiento es "+B)
}

function interesInvercion() {

    var C;
    var A;
    var G;
    var CG;

    alert ("ESTE SISTEMA PERMITE CONOCER LAS GANANCIAS QUE OBTENDRA EN LOS AÑOS QUE EL USUARIO DESEE INVERTIR")

    C = parseInt(prompt("Por favor ingrese el capital que desea invertir"))
    A = parseInt(prompt("Ingrese la cantidad de años en la que desea hacer su proyeccion"))

    A = (A * 12)
    G = (C * 0.2)
    G = (G * A)
    CG = (C + G)

    alert ("Señor usuario el interes que ganara en "+A+" meses sera $"+G)
    alert ("La ganacia total de su inversiòn sera $"+CG)
}

function promedioIngles() {

    var A; 
    var B;
    var C;
    var D;
    var E;
    var F;

    alert ("ESTE ALGORITMO PERMITE CONOSER EL PROMEDIO DE LA MATERIA DE INGLES DE UN USUARIO")

    B = parseInt(prompt("Por favor ingrese su primer nota"))
    C = parseInt(prompt("Por favor ingrese su segunda nota"))
    D = parseInt(prompt("Por favor ingrese su tercer nota"))
    E = parseInt(prompt("Por favor ingrese su cuarta nota"))
    F = parseInt(prompt("Por favor ingrese su quinta nota"))


    A = ((B + C + D + E + F)/5)

    if (A <= 2.9)
        alert ("Usted reprobo la materia y su calificacion es "+A)
        
    else
        alert ("Usted aprobo la materia y su calificacion es "+A)    

}

function descuentoManzanas() {

    var K;
    var D;
    var T;

    alert ("ESTE SISTEMA PERMITE SABER EL TOTAL A PAGAR POR LA COMPRA DE KILOS DE MANZANAS")

    K = parseInt(prompt("Por pavor ingrese la cantidad de kilos de mazanas a comprar"))

    if (K <= 2) {
        T = (K * 4500)
        alert ("Su compra por "+K+" kilos de manzanas no tieme descuento y es de $"+T); 
    }

    else if (K <= 5) {
        D = ((4500 * K)* 0.10)
        T = ((4500 * K)- D)
        alert ("Su compra por "+K+" kilos de manzanas tiene descuento de $"+D+" y el total a pagar es de $ "+T)
    }

    else if (K <= 10) {
        D = ((4500 * K)* 0.15)
        T = ((4500 * K)- D)
        alert ("Su compra por "+K+" kilos de manzanas tiene descuento de $"+D+" y el total a pagar es de $ "+T)
    }

    else {
        D = ((4500 * K)* 0.20)
        T = ((4500 * K)- D)
        alert ("Su compra por "+K+" kilos de manzanas tiene descuento de $"+D+" y el total a pagar es de $ "+T)

    }
    

}