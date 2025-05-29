/*• Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.
*/

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese un numero aqui: "))
let numero2 = parseFloat(prompt("Ingrese otro numero aqui: "))

if (numero1 === numero2){
    console.log('Los numeros son iguales');
} else if (numero1 > numero2){
    console.log('Este numero es mayor: ' + numero1);
} else if (numero2 > numero1){
        console.log('Este numero es mayor: ' + numero2);
        }
