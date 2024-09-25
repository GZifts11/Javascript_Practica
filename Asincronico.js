const {saludoBienvenida, entrar, salir} = require('./Service/Saludos.js')

setTimeout( entrar, 1000 )

setTimeout( saludoBienvenida, 2000, "Guada!" )

setTimeout( salir, 0 )


let vuelta = 0
const intervalId = setInterval( () => {
    console.log("Estoy en la vuelta:" +  vuelta)
    if(vuelta === 10)
        clearInterval(intervalId)
    vuelta++
}, 500)

/* setTimeout( () => {
    clearInterval(intervalId)
}, 10000) */


console.log("Mensaje de prueba")

