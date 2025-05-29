/*Ejercicio 5: Saludo personalizado
Enunciado:
Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
texto y la función prompt(). Escribe un programa que:
1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos:
• Utiliza prompt() para recibir el nombre del usuario.
• Muestra un mensaje utilizando concatenación de cadenas.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

// 1. Solicitar al usuario que ingrese se nombre
const nombre = (prompt('Ingresa tu nombre:'));

// 2. Mostrar saludo
console.log('Hola buenas tardes ' + nombre + ', un gustazo que estes mirando mi proyecto!')