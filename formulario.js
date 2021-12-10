let form = document.getElementById("form")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    limpiarErrores()

    let textNombre = document.querySelector(".textNombre").value
    let textAsunto = document.querySelector(".textAsunto").value
    let textMensaje = document.querySelector(".textMensaje").value

    let resultado = validar(textNombre, textAsunto, textMensaje)

    if (resultado == true) {
        exito()
    }
})

// limpiarErrores
function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = ""
    document.querySelector(".errorNombre").innerHTML = ""
    document.querySelector(".errorAsunto").innerHTML = ""
    document.querySelector(".errorMensaje").innerHTML = ""
}

// exito
function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviádo con éxito!!!"
    document.querySelector(".textNombre").value = ""
    document.querySelector(".textAsunto").value = ""
    document.querySelector(".textMensaje").value = ""
}

// validar
function validar(nombre, asunto, mensaje) {

    let pasamosLaValidacion = true
    //let validacionNombre = /[a-zA-Z]/gim // al menos uno sea letra
    // se recomienda usar la siguiente expresión regular: const expReg = new RegExp('^[A-Z]+$', 'i')// todos sean letras
    // /\D*([+56]\d[2-9])(\d{8})/g    // Teléfonos Chilenos (g)global
    // /^[a-zA-Z\s]+$/gim // aceptar espacio (m)multilinea
    //let er = /ab+c/i; // notación literal
    const expReg = new RegExp('[A-Z]+$', 'i') //[A-Z] solo letras, (+$)solo aceptar caracter espacio, ('i')minusculas o mayusculas
    let validacionNombre = expReg


    if (validacionNombre.test(nombre) == false) {        
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
        pasamosLaValidacion = false
    }

    let validacionAsunto = /[a-zA-Z]/ // acepta todo pero al menos una letra

    if (validacionAsunto.test(asunto) == false) {
        (document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido")
        pasamosLaValidacion = false
    }

    let validacionMensaje = /[a-zA-Z]/gim // acepta todo pero al menos una letra

    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
        pasamosLaValidacion = false
    }
    return pasamosLaValidacion
}

