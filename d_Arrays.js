//Arrays

let miArrayVacio = []

console.log(`Mi Array vacio: ${miArrayVacio}`)

console.log("---------------------------------------------------------")

let miArray = ["uno", 2, 3, 5, 334, 55, "otro gato", true, true, false, "etc", [1,2,3,4,5] ]

console.log(`Mi Array : ${miArray}`)

console.log(typeof miArray[8])
console.log(typeof miArray[2])
console.log(typeof miArray[6])
console.log(typeof miArray[11])

let miArrayNew = new Array(2,5,6,7,8)

console.log("mi array new: " + miArrayNew)
console.log(typeof miArrayNew)

console.log("---------------------------------------------------------")

let miArrayDeDiez = [10]//new Array(10) // --> así me genera un array de 10 elementos
console.log("El array miArrayDeDiez tiene " + miArrayDeDiez.length + " posiciones")

let miArrayCon10 = new Array(10)
console.log("El array miArrayCon10 tiene " + miArrayCon10.length + " posiciones")

miArrayCon10[0] = 10

console.log(`miArrayCon10: indice 0: ${miArrayCon10[0]}`)

console.log(`miArrayCon10: indice 1: ${miArrayCon10[1]}`)

miArrayCon10.pop()
console.log("El array miArrayCon10 tiene " + miArrayCon10.length + " posiciones")

console.log(`miArrayCon10: posición 10: ${miArrayCon10[9]}`)

miArrayCon10.push(10)
console.log("El array miArrayCon10 tiene " + miArrayCon10.length + " posiciones")

console.log(`miArrayCon10: posición 10: ${miArrayCon10[9]}`)

miArrayCon10.unshift(10)
console.log("El array miArrayCon10 tiene " + miArrayCon10.length + " posiciones")

miArrayCon10.shift()
console.log("El array miArrayCon10 tiene " + miArrayCon10.length + " posiciones")

console.log("---------------------------------------------------------")

let frutas = new Array("manzana", "banana", "pera", "tomate", "ananá", "kiwi", "melón", "sandía")

frutas.forEach((element, i) => {
    console.log(`la fruta ${element} se encuentra en la posición: ${i}`)
});

/* let acumulador = 0
frutas.forEach((element, i) => {
    console.log(`la fruta ${element} se encuentra en la posición: ${i}`)
    acumulador = acumulador + i
    console.log(`acumulador = ${acumulador}`)
}
); */

const arrayNumeros = new Array(0, 45, 34, 3, 6, 55, 4, 34, 10)
console.log("numeros: " + arrayNumeros)

let arrayNumerosMas10 = arrayNumeros.map(element => element + 10)
console.log("arrayNumerosMas10: " + arrayNumerosMas10)

console.log("numeros: " + arrayNumeros)

/* let arrayQueDevuelvo = Array()
arrayNumeros.forEach((element)=> {
   
    arrayQueDevuelvo.push(element + 10)
    console.log(`${element} `)

}); 

console.log(arrayQueDevuelvo)
*/


console.log("---------------------------------------------------------")

const otroArrayNumeros = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 44, 55, 34, 56, 34, 34)
console.log("numeros: " + otroArrayNumeros)

let arrayFiltrado = otroArrayNumeros.filter(element => element > 7)
console.log("arrayFiltrado: " + arrayFiltrado)

console.log("---------------------------------------------------------")


let miArrayPrueba = [0,44,55]
console.log("El array miArrayPrueba tiene " + miArrayPrueba.length + " posiciones")

miArrayPrueba[100] = 66
console.log("El array miArrayPrueba tiene " + miArrayPrueba.length + " posiciones")

miArrayPrueba.forEach((element, i) => {
    console.log(`el elemento: ${element} se encuentra en el indice: ${i}`)
});