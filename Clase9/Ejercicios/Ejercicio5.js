/*Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Solicitamos al usuario ingresar tres numeros
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
let numero3 = parseFloat(prompt("Ingrese el tercer numero: "));

//Determinamos cual es el mayor de los tres
if(numero1 > numero2 && numero1 > numero3 )  {
    console.log("Este numero es el mayor de los tres: ", numero1);
} else if (numero2 > numero1 && numero2 > numero3){
    console.log('Este numero es el meayor de los tres: ',numero2);
} else{
        console.log('Este numero es el mayor de: ',numero3);
        }
