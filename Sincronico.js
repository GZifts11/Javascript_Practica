/* function funcion1() {
    console.log('se ejecutó la función 1')
}

function funcion2() {
    console.log('se ejecutó la función 2')
}

function funcion3() {
    console.log('se ejecutó la función 3')
}


//Invocación de las funciones
funcion1();
funcion2();
funcion3();
funcion2();
funcion1(); */


function funcion1() {
    console.log('se ejecutó la función 1')
}

function funcion2() {
    console.log('se ejecutó la función 2')
    funcion1()
}

function funcion3() {
    console.log('se ejecutó la función 3')
    funcion2()
}

funcion3()