/*Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462)
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Pedir al usuario que ingrese su peso en kg
let pesoKg = parseInt(prompt("Ingrese su peso en kg: "));

//Convertir el peso a libras
let pesoLibra = pesoKg * 2.20462;

console.log("Su peso en libras es: "+ pesoLibra);

