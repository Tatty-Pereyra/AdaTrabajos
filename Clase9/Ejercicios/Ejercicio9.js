/*Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Define una constante PI
const PI = 3.14159

//Ingrese el radio del circulo
let radio = prompt("Ingrese el radio de un circulo: ")

//Calculamos las dos formulas 
let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

console.log("El area es: ",area);
console.log("El perimetro es: ",perimetro);
