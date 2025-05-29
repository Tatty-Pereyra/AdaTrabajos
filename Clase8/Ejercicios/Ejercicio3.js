/* Ejercicio 3: Suma de dos números ingresados por el usuario
Enunciado:
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
aritméticos. Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.
Requisitos:
• Utiliza prompt() para recibir los números.
• Utiliza parseFloat() para convertir las entradas a números.
• Almacena los resultados en variables adecuadas y muestra el resultado.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese el primer numero
let numero1 = parseFloat(prompt('Ingresa un numero:'));
// Pedir al usuario que ingrese el segundo numero
let numero2 = parseFloat(prompt('Ingresa un numero:'));

// 2. Sumar ambos numeros
const suma = numero1 + numero2

// 3. Resultado de la suma
console.log('el resultado de la suma es:' + suma)