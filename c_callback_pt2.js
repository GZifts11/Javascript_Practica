//Función de orden superior
function calculadora(num1, num2, callback){
    console.log("Ingresando a la función calculadora (higher-order function)")
    return callback(num1, num2)
}

//Función de orden superior MALOOOOO NO HACERRR CALLBACK SIEMPRE VA COMO ÚLTIMO PARÁMETRO
function calculadoraMala(callback, num1, num2, otroCallback){
    let numero1 = 55
    console.log("Ingresando a la función calculadoraMala! (higher-order function)")
    console.log(callback(numero1, num2) , otroCallback(num1, num2))
    //console.log(otroCallback(num1, num2))
    return callback(numero1, num2)
}


//Función por expresión
/* let nombre = function sumar(num1, num2){
    return num1 + num2
} */

//Función por declaración
function sumar(num1, num2){
    return num1 + num2
}


//Declaración por expresión con lambda
let suma = function (num1, num2){
    return num1 + num2
}

//Función Flecha - Arrow Function
let resta = (num1, num2) => {
    return num1 - num2
}

//Función Flecha - Arrow Function
let multiplicacion = (num1, num2) => {
    return num1 * num2
}

//Función Flecha - Arrow Function
let division = (num1, num2) => {
    return num1 / num2
}


console.log("imprimo el tipo de nombre: " + typeof suma)

console.log(suma(10,10))

//Acá estoy declarando una variable para un solo uso, es mejor pasarlo directamente
/* let resultado = calculadora(5,2,sumar)
console.log(resultado) */

//Invocamos la Función de orden superior pasandole el argumento suma
console.log(calculadora(5,2,suma))

//Invocamos la Función de orden superior pasandole el argumento resta
console.log(calculadora(5,2,resta))

//Invocamos la Función de orden superior pasandole el argumento multiplicación
console.log(calculadora(5,2,multiplicacion))

//Invocamos la Función de orden superior pasandole el argumento division
console.log(calculadora(5,2,division))


//Invocamos la Función de orden superior pasandole la función callback directamente declarada en el argumento
console.log(calculadora(5,2, function sumar(num1, num2){
    return num1 + num2
}))

//Invocamos la Función de orden superior pasandole la función callback directamente con una lamda en el argumento
console.log(calculadora(5,2, function (num1, num2){
    return num1 - num2
}))

//Invocamos la Función de orden superior pasandole la función callback directamente con una arrow en el argumento
console.log(calculadora(5,2, (num1, num2) => { 
    return num1 * num2
}))

console.log(calculadoraMala((num1, num2) => { 
    return num1 + num2
}, 50, 25, (num1, num2) => { 
    return num1 * num2
}))
