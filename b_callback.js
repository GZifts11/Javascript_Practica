//Funciones Callback

const funcionB = function () {
    console.log("Se ejecuta la función B")
}

//console.log("El tipo de funcionB es: " + typeof funcionB)

//Invocación de la funcionB
//funcionB() 

//Declaro por expresión una lambda y la guardo en funcionA, esta lamba recibe un parámetro de entrada
//el parámetro que recibe es una callback.
const funcionA = function (callback) {
    console.log("Entrando en la función A")
    callback()
    callback()
    callback()
    console.log("Saliendo de la función A")
    callback()
}

//Esta función no la vimos en clase, pero se crea para invocar el callback una sola vez
const funcionQueRecibeUnCallback = function (callback) {
    console.log("Entrando en la funcionQueRecibeUnCallback()")
    callback()
    console.log("Saliendo de la funcionQueRecibeUnCallback()")
}

const funcionC = function () {
    console.log("Se ejecuta la funcion C")
    console.log("Se ejecuta la funcion C")
    console.log("Se ejecuta la funcion C")
    console.log("Se ejecuta la funcion C")
}

const funcionD =  () => {
    console.log("Se ejecuta la funcion D")
}

let nada = "estoy en la nada"
//Esta ejecución de la funcionA, da error, ya que espera como parámetro una callback 
//funcionA(nada)

console.log("----------------------------------------------------")
funcionQueRecibeUnCallback(funcionB)
console.log("----------------------------------------------------")
funcionQueRecibeUnCallback(funcionC)
console.log("----------------------------------------------------")
funcionQueRecibeUnCallback(funcionD)
console.log("----------------------------------------------------")

function restar(num1, num2){
    return num1 - num2
}

let numero1 = 5
let numero2 = 24
console.log(restar(numero1, numero2)) 

console.log("----------------------------------------------------")

//Guardo una función Arrow en la variable miArrow
let miArrow = () => {
    let num1 = 10
    let num2 = 20
    console.log(`el resultado es: ${num1+num2}`)
    console.log("Se ejecuta la arrow function que declaro")
}

console.log("----------------------------------------------------")
//Invoco la función funcionA() pasandole miArrow por parámetro.
funcionA(miArrow)
console.log("----------------------------------------------------")

console.log("----------------------------------------------------")
//No es lo más performante guardar una arrow en una variable para un solo uso
//ya que de esa manera estoy reservando espacio en memoria que voy a utilizar una sola vez.
//Por tal momento ese códido es equivalente a realizar:
funcionA(() => {
    let num1 = 10
    let num2 = 20
    console.log(`el resultado es: ${num1+num2}`)
    console.log("Se ejecuta la arrow function que declaro")
})
//Le paso la función arrow, directamente por parámetro, que termina ejecutando el callback.
console.log("----------------------------------------------------")


//Ejecución de la funcionA, pasandole las otras funciones como parámetro.
//Ir descomentando de a una para realizar pruebas.
//funcionA(funcionB)

//funcionA(funcionC)

//funcionA(funcionD)

/* 
//GUARDO el retorno de la función funcionA() en la variable retornoFuncionA
let retornoFuncionA =  funcionA( () => {
    let num1 = 10
    let num2 = 20
    console.log(`el resultado es: ${num1+num2}`)
    console.log("Se ejecuta la arrow function que declaro")
})

//Ejecuto retornoFuncionA - OJO!!! no funciona
//NO CONFUNDIR GUARDAR LO QUE RETORNA UNA FUNCIÓN EN UNA VARIABLE
//CON LA DECLARACIÓN DE UNA FUNCIÓN POR EXPRESIÓN
retornoFuncionA() */



