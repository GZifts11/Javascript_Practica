//COMENTARIOS DE UNA SOLA LINEA

/*
COMENTARIOS
DE 
MUCHAS 
LINEAS

Podemos utilizarlo para comentar bloques de código para realizar pruebas
*/

//Tipos de variables CONST LET VAR

const NOMBRE_MATERIA = "Backend la mejor materia de todas !!!"

//Objeto
let miAuto = {
    marca: "Delorean",
    color: "Gris",
    modelo: 1985,
    caracteristicas: "Máquina del tiempo",
    disponible: false
}

console.log("----------------------------------------------------")
let edad = 35;
console.log("El valor de edad es: " + edad)
console.log("El tipo de edad es: " + typeof edad)

edad = "La edad ahora es 36"
console.log("El valor de edad es: " + edad)
console.log("El tipo de edad es: " + typeof edad)
console.log("----------------------------------------------------")

console.log(miAuto)
console.log("El tipo de miAuto es: " + typeof miAuto)

var precio = 10500;
console.log("El tipo de precio es: " + typeof precio)
console.log("----------------------------------------------------")



///////////////////////////////////////////////////////////////

//TIPOS DE FUNCIONES
// NO RECIBE PARÁMETROS - NO RETORNA NADA
// RECIBE PARÁMETROS - NO RETORNA NADA
// RECIBE PARÁMETROS - RETORNA ALGO
// NO RECIBE PARÁMETROS - RETORNA ALGO

//FUNCIONES - Declaración - Por expresión - Lambdas o Anónimas - Arrow

let numero1 = 25
let numero2 = 35

//Función - Declaración
function sumar(num1, num2){
    //let resultado = num1 + num2;
    return num1 + num2;//console.log(`El resultado de la suma es: ${resultado}`)
}

numero2 = "55"

//Invocación de función sumar, guardando el retorno de la función en la variable resultado
let resultado = sumar(numero1,numero2)


//Función por expresión
let saludoExpresion = function saludar(){
    return "hola"
}

//Función lambda
let saludoLamda = function (){
    return "hola"
}

//Función Arrow
let saludo = () => {
    return "hola, soy una función arrow, llamada saludo()"
}

console.log("El tipo de saludo es:" + typeof saludo)

let resultadoSaludo = saludo()
console.log(resultadoSaludo)

//////////////////////////////////////////////////////////////

function saludar(nombre) {
    console.log(`Bienvenido a nuestro sistema: ${nombre}`)
}

//Guardo el retorno de la función saludar() en la variable miSaludo
//OJO!! No es lo mismo que una función por expresión
//Estoy guardando lo que retorna la función (no retorna nada)
let miSaludo = saludar("Guada")

//Va a imprimir undefined, ya que la función saludar no retorna nada.
console.log("El tipo de miSaludo es: " + typeof miSaludo)

//invocación de la función
saludar("Gustavo")

