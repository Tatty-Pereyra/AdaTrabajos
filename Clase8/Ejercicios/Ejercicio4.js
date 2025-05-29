/*Ejercicio 4: Determinar si un número es par o impar
Enunciado:
En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
Debes escribir un programa que:
1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.
Requisitos:
• Utiliza el operador módulo (%) para comprobar si el número es divisible
por 2.
• Usa una estructura if-else para mostrar el mensaje adecuado.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese un numero entero
let numeroentero = parseFloat(prompt('Ingresa un numero entero:'));

// 2. Determina si el numero es par o impar 
if (numeroentero % 2 === 0) {
    console.log('el numero ingresado es par');
} else {
    console.log('el numero ingresado es impar');
}