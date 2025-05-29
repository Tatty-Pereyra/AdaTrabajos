/* Ejercicio 2: Verificar si un número es positivo, negativo o cero
Enunciado:
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.
Requisitos:
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las
verificaciones.
• Usa parseFloat() para convertir la entrada del usuario a un número.
Ejercicio 3: Suma de dos números ingresados por el usuario
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//1. Pida al usuario que ingrese un número
let numero = parseFloat(prompt('Ingresa un numero:'));

//2. Verifique si el numero es positivo, negativo o igual a 0
// Numero Positivo = mayor a cero 
// Numero Negativo = menor a cero
// Numero Igual = igual a cero

if (numero === 0) {
    console.log('el numero es igual a cero');     //el numero ingresado es igual a 0
} else if (numero > 0) {
    console.log('el numero es positivo');    //el numero ingresado es mayor a 0
} else if (numero < 0) {
    console.log('el numero es negativo');    //el numero ingresado es menor a 0
} else {
    console.log('el numero ingresado no es correcto');     //lo que ingreso no es un numero
}