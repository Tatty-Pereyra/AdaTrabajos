/*Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula)
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese las longitudes de los tres lados de un trangulo
let lado1 = prompt("Ingrese la longitud de un lado: ")
let lado2 = prompt("Ingrese la longitud de un lado: ")
let lado3 = prompt("Ingrese la longitud de un lado: ")


if (lado1 == lado2 && lado1 == lado3) {
    console.log("El triangulo es equilatero.")
} else if (lado1 == lado2 && lado1 != lado3 ) {
    console.log("Este triangulo es isosceles.")
} else {
    console.log("Este triangulo es escaleno.")
} 

