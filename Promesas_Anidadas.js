function validarStock(producto){
    return new Promise((resolve, reject) => {
        console.log("validando stock...")
        setTimeout(() => {
            if( producto === 'papel'){
                resolve(`hay stock disponible de ${producto}`)
            }else{
                reject(`Error - No hay stock disponible de ${producto}`)
            }
    }, 5000)
    })
}


function ejecutarVenta(respuesta){
    console.log(`la respuesta es: ${respuesta}`)
    return new Promise((resolve, reject) => {
        console.log("ejecutarVenta()")
        setTimeout(() => {
            resolve(`se ejecuta la venta : ${respuesta}`)
        }, 5000)
    })
}

function imprimirFactura(ventaRealizada){
    console.log("Imprimiendo factura")
    return new Promise((resolve, reject) => {
        if(ventaRealizada){
            resolve('.... imprimiendo .....')
        }else{
            console.log(" se produjo un error al imprimir la factura")
        }
    })
}


validarStock('papel')
    .then( response => {
        console.log("Estoy ejecutando el .then de validar stock")
        console.log(`la respuesta recibida es: ${response}`)
        return ejecutarVenta(response)
    })
    .then( response => {
        console.log("Estoy ejecutando el .then de ejecutar venta")
        console.log(`la respuesta de validar stock es: ${response}`)
        return imprimirFactura(true)
    })
    .then( response => {
        console.log("estoy ejecuntado el .then de imprimirFactura")
        console.log(`La respuesta de imprimir factura es: ${response}`)
    } ) 
    .catch( error => {
        console.log("catch() - entre al catch")
        console.log(`El error es: ${error}`)
    })