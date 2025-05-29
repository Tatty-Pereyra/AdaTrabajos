/*Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Pido al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad: "))


//Verificamos si es mayor y menor de edad
if (edad >= 18) {
    console.log("Usted es mayor de edad, puede ingresar.");
} else if (edad <= 0) {
    console.log("Su edad no es valida.");
} else {
    console.log("Usted es menor de edad, no puede ingresar.")
}

