/*• Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Declaro variable nombre 
let nombre = "Tatty"

//Pido al usuario que ingrese su nombre
let nombreUsuario = prompt("Ingresa tu nombre aqui: ")

// Verifico si el nombre ingresado es igual a mi nombre 
if(nombreUsuario === nombre){
    console.log('Hola Tatty, tu nombre es correcto.');   
}else {
    console.log('El nombre ingresado no es correcto, tu nombre es Tatty');  
}