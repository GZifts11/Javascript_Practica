let hayCrema = false

//Definición de la promesa
const miPromesaComprarCrema = new Promise( (resolve, reject) => {
    setTimeout(() => {
        if(hayCrema){
            resolve('Te traje la crema.');
        } else {
            reject('no había crema.');
        }
    }, 5000);

});

//Definición función para promesa cumplida
const manejarPromesaCumplida = (valor) => {
    console.log(valor);
    console.log('muchas gracias! podré terminar la torta!')
}

//Definición función para promesa rechazada
const manejarPromesaRechazada = (valor) => {
    console.log(valor);
    console.log('Tendré que hacer otra receta.')
}


console.log(miPromesaComprarCrema)
//Ejecutamos la promesa
miPromesaComprarCrema
    .then( (response) => {manejarPromesaCumplida(response)
        console.log(miPromesaComprarCrema)
    })
    .catch( error => { 
        manejarPromesaRechazada(error)
        console.log(miPromesaComprarCrema)
    })
    .finally( end => {
        clearInterval(id)
        console.log("Seguir Cocinando...")
    })

const id = setInterval( () => {
    console.log("Haciendo otras cosas mientras espero la crema!!")
}, 1000)

for (let index = 0; index < 10; index++) {
    console.log(`haciendo cosa n° ${index}`);
}