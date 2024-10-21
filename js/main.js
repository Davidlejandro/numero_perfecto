//Realizar un programa de java script donde se ingrese un numero por telcado y verifique si el numero es perfecto o no
//Sabiendo que el numero perfecto es la suma de sus divisores excluyendo el mismo numero
//Estamos creando una variable llamda num1 que va a ingresar el usuario con el prompt
var num1=prompt("Igrese un valor");
//Creamos una variable llamada acumulador que va a tener un valor inicial de 0
var acumulador=0;
//Abrimos el ciclo for para poder realizar la operación del acumulador
    for(i=1;i< num1;i++)
        // Con If, nosotros podemos sacar los números y verificar si son o no acumuladores
    if(num1%i==0){
        //el acumulador sirve para sumar cada dato guardado y repetirlo en el ciclo 
        acumulador=acumulador+i;
    }
    //Con este if podemos visualizar que el número acumulado es correcto y perfecto
    if(num1==acumulador){
        document.write("El numero es perfecto");
        //en cambio, si no es así, es imperfecto o no perfecto
    }else{
        document.write("No es perfecto");
        }
    
    

