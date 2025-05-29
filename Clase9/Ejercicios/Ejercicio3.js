/*Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Declaro dos variables booleanas
let condicion1 = true;
let condicion2 = false;

//Solicito al usuario dos variables booleanas
let primeraVariable = prompt("Ingresa el primer valor booleano: (true or false) ");
let segundaVariable = prompt("Ingresa el segundo valor booleano: (true or false) ");

//Muestra si la primera variable es verdadero o falso
if(primeraVariable = true){
    console.log("El valor es verdadero");  
}
else{
    console.log("El valor es falso");  
}

//Muestra si la segunda variable es verdadera o falsa
if(segundaVariable = false){
    console.log("El valor es falso");  
}
else{
    console.log("El valor es verdadero");  
}

// Mostramos Combinaciones logicas
console.log('Combinaciones logicas:');
console.log('AND: ' + (primeraVariable && segundaVariable));
console.log('OR: ' + (primeraVariable || segundaVariable));
console.log('NOT primeraVariable: ' + !primeraVariable);
console.log('NOT segundaVariable: ' + !segundaVariable);