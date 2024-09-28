

//1) Declaración de primera función, 
//Recibe un parametro de entrada (producto) 
//esta función retorna un object Promise
function validarStock(producto){
    //1.A)Cuando se ejecuta la función validarStock, 
    //directamente retorna el objeto Promise instanciado.
    //El objeto promise recibe un "Executor" que tiene dos argumentos
    //resolve, reject. estos dos argumentos son callbacks
    return new Promise((resolve, reject) => {
        //1.B) Lo primero que se imprime en consola es este mensaje.
        //acá utiliza el parametro producto que recibe la función "validarStock"
        //Para imprimir el mensaje, si el parametro producto = papel, 
        //validando stock de producto:papel..."
        console.log(`validando stock de producto:${producto}...`)
        //1.C)Este setTimeOut se utiliza solo con fines didacticos.
        //Para simular un tiempo de espera de 5 segundos.
        setTimeout(() => {
             //1.D)Valida el producto que recibe la función validarStock() 
            if( producto === 'papel'){
                //1.E)Si producto es igual a papel, responde con un resolve(),
                //El estado de la promesa va a ser "Resuelto"
                //Por consiguiente va a entrar al then() de la línea 81
                resolve(`hay stock disponible de ${producto}`)
            }else{
                //1.F)En caso de que el producto no coincida con papel, se rechaza la promesa
                //El estado de la promesa va a ser "Rechazado"
                //Por consiguiente va a entrar al catch() de la línea 113
                reject(`Error - No hay stock disponible de ${producto}`)
            }
    }, 5000)
    })
}

//2) Declaración de segunda función, 
//Recibe un parametro de entrada (respuesta) 
//Va a recibir como parámetro de entrada la la respuesta capturada
//por el then de la primera promesa.
//esta función retorna un object Promise
function ejecutarVenta(respuesta){
    //2.A)Cuando se ejecuta la función ejecutarVenta(en este ejemplo solo se va a ejecutar si la promesa 
    //de validarStock, responde un resolve), 
    //directamente retorna el objeto Promise instanciado.
    //El objeto promise recibe un "Executor" que tiene dos argumentos
    //resolve, reject. estos dos argumentos son callbacks
    //en este ejemplo el reject no se está utilizando, esta promesa solo responderá un resolve
    console.log(`la respuesta es: ${respuesta}`)
    return new Promise((resolve, reject) => {
        //2.B) Cuando se ejecute ejecutarVenta, se imprime este mensaje en consola.
        //Lo vas a ver impreso luego del mensaje "`la respuesta es: hay stock disponible de papel"
        console.log("ejecutarVenta()")
        //2.C)Este setTimeOut se utiliza solo con fines didacticos.
        //Para simular un tiempo de espera de 3 segundos.
        setTimeout(() => {
            resolve(`se ejecuta la venta : ${respuesta}`)
        }, 3000)
    })
}

//Declaración de tercera función 
//Recibe un parametro de entrada (ventaRealizada) 
//Va a recibir como parámetro un booleano que en este caso estamos forzando a true
//esta función retorna un object Promise
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

//3)Ejecuta la función validarStock, le pasa como parámetro papel
//Inicia todo lo descripto en el punto 1)
validarStock('papel')
    //3.A)espera la respuesta del objeto Promise que devuelve la función
    //En este then solo entra si la respuesta de la primer promesa es resolve.
    .then( response => {
        console.log("Estoy ejecutando el .then de validar stock")
        console.log(`la respuesta recibida es: ${response}`)
        //3.D) Ejecuta la función ejecutarVenta realizando todo lo definido en el punto 2) 
        //y le pasa por parámetro el response capturado del resolve de la línea 25
        //Acá retorna el objet Promise que retorna la función ejecutarVenta
        return ejecutarVenta(response)
    })
    //3.E)Este then solo se va a ejecutar en caso de que el Promise de ejecutarVenta
    //responda un resolve, en response va a tener el valor que responde 
    //en el resolve ('se ejecuta la venta : hay stock disponible de papel')}
    //El orden de los mensajes es:
    //Estoy ejecutando el .then de ejecutar venta
    //la respuesta de validar stock es: se ejecuta la venta : hay stock disponible de papel
    .then( response => {
        //3.F)Impprime en consola estos dos mensajes seguidos:
        console.log("Estoy ejecutando el .then de ejecutar venta")
        console.log(`la respuesta de validar stock es: ${response}`)
        return imprimirFactura(true)
    })
    //3.G)Este then solo se va a ejecutar en caso de que el Promise de ImprimirFactura
    //responda un resolve, en response va a tener el valor que responde 
    //en el resolve (' .... imprimiendo .....')}
    //El orden de los mensajes es:
    //Estoy ejecutando el .then de imprimirFactura
    //La respuesta de imprimir factura es: .... imprimiendo .....
    .then( response => {
        //3.H)Impprime en consola estos dos mensajes seguidos:
        console.log("estoy ejecuntado el .then de imprimirFactura")
        console.log(`La respuesta de imprimir factura es: ${response}`)
    } )
    //3.I)Acá solo entrará en caso de que cualquiera de los Promises devuelvan un reject
    .catch( error => {
        console.log("catch() - entre al catch")
        console.log(`El error es: ${error}`)
    })


//La salida total de la consola debería ser:
/*     
validando stock de producto:papel...
Estoy ejecutando el .then de validar stock
la respuesta recibida es: hay stock disponible de papel
la respuesta es: hay stock disponible de papel
ejecutarVenta()
Estoy ejecutando el .then de ejecutar venta
la respuesta de validar stock es: se ejecuta la venta : hay stock disponible de papel
Imprimiendo factura
estoy ejecuntado el .then de imprimirFactura
La respuesta de imprimir factura es: .... imprimiendo ..... 
*/