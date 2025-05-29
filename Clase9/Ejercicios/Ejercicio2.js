/*Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Definir constantes
const RANGO_MINIMO = 15
const RANGO_MAXIMO = 85

//Solicitar al usuario un numero
let numero = parseFloat(prompt("Ingrese un número: "));

//Verificar si el numero esta dentro del rango
if(numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO){
    console.log(numero + " Está dentro del rango definido");  
}
else{
    console.log("No está dentro del rango definido");  
}
