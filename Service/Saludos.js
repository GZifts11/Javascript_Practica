function entrar(){
    console.log("Inicio!!")
}

function saludoBienvenida(nombre){
    console.log(`Buenas noches alumnos, sobre todo ${nombre} que particia!`)
}

function salir(){
    console.log("FIN!!")
}

module.exports = { entrar, saludoBienvenida, salir}

//console.log(module.exports)