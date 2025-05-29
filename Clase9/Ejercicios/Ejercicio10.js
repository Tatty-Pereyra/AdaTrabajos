/*Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Pedimos al usuario que ingrese un numero
let numero = parseInt(prompt("Ingrese un numero del 1 al 7: "))


if (numero == 1) {
    console.log("Hoy es lunes")
} else if (numero == 2) {
    console.log("Hoy es martes")
} else if (numero == 3) {
    console.log("Hoy es miercoles")
} else if (numero == 4) {
    console.log("Hoy es jueves")
} else if (numero == 5) {
    console.log("Hoy es viernes")
} else if (numero == 6) {
    console.log("Hoy es sabado")
} else if(numero == 7) {
    console.log("Hoy es domingo")
}else {
    console.log("El número ingresado no es válido")
}

