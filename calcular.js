/// 3º desafío

let calc = document.getElementById("calcu")

calc.addEventListener("submit", function(evento) {
    evento.preventDefault()

    limpiarError()
    
    

    let Num1 = document.querySelector(".Num1").value
    let Num2 = document.querySelector(".Num2").value
    let Operacion = document.querySelector(".Operacion").value

    let resultadoCalc = valida(Num1, Num2, Operacion)

    if (resultadoCalc == true) {

        var patron1 = /suma/i
        var patron2 = /resta/i
        if (Operacion.match(patron1) || Operacion.match(patron2)) {
            if (Operacion.match(patron1)) {
                var salida =  parseInt(Num1) + parseInt(Num2)
            }
            else if (Operacion.match(patron2)) {
                var salida =  parseInt(Num1) - parseInt(Num2)
            }
            if (salida < 0) {
                salida = 0
            }
            document.querySelector(".resultadoCalc").innerHTML = `El resultado de la ${Operacion} es ${salida}`

        } else {
            document.querySelector(".errorOperacion").innerHTML = "Suma o Resta."
            pasamosValidacion = false
        }
        

    }
})

// limpiarErrores
function limpiarError() { 
    document.querySelector(".resultadoCalc").innerHTML = ""
    document.querySelector(".errorNum1").innerHTML = ""
    document.querySelector(".errorNum2").innerHTML = ""
    document.querySelector(".errorOperacion").innerHTML = ""
}


// validar
function valida(Num1, Num2, operacion) {

    let pasamosValidacion = true
    
    let validacionNum1 = /\d/gim

    if (validacionNum1.test(Num1) == false) {        
        document.querySelector(".errorNum1").innerHTML = "El número es requerido."
        pasamosValidacion = false
    }

    let validacionNum2 = /\d/gim

    if (validacionNum2.test(Num2) == false) {
        (document.querySelector(".errorNum2").innerHTML = "El número es requerido.")
        pasamosValidacion = false
    }

    let validacionOperacion = /[a-zA-Z]/gim

    if (validacionOperacion.test(operacion) == false) {
        document.querySelector(".errorOperacion").innerHTML = "Suma o Resta."
        pasamosValidacion = false
    }       

    return pasamosValidacion
}