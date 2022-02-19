function test_patron(patron, valor) {
    if (valor !== '' && valor !== null) {
        return patron.test(valor);
    }
    return false;
}

function ver_error(error, patron, valor) {
    // Función que recibe como parámetros la cadena con el error, 
    //  el patrón, la cadena a comprobar y muestra el mensaje de error al usuario.
    var asterisco = valor.id+"error";
    if (test_patron(patron, valor.valor)) {
        msjError.style.display = "none";
        msjError.innerHTML = '';
        document.getElementById(asterisco).style.display = "none";
    } else {
        msjError.style.display = "block";
        msjError.innerHTML = "ERROR: " + error;
        document.getElementById(asterisco).style.display = "inline-block";
    }
}

function test_input() {
    var input_id = this.id;
    //var input_valor = this.value;

    // Patrones
    var dni_test = new RegExp("^[0-9]{8}[a-zA-Z]$");
    var nombre_test = new RegExp("^[a-zA-Z]+[ ][a-zA-Z]+([ ][a-zA-Z]+){0,2}$");
    var edad_test = new RegExp(".*");
    var hijos_test = new RegExp("^([0-9]+|(10)+)+$");
    var email_test = new RegExp("^[a-zA-Z0-9_-]{2,63}@[a-zA-Z0-9]{2,63}[\.][a-z]{2,4}$");
    var sitioweb_test = new RegExp("^(http(s)?:\/\/)+([w]{3}[\.])+[a-z0-9]+[\.][a-z]{2,3}$");
    var passwd_test = new RegExp("^.{8,10}$");

    switch (input_id) {
        case 'dni':
            ver_error('Dni Incorrecto (ej: 12345678X)', dni_test, this);
            break;
        case 'nombre':
            ver_error('Nombre Incorrecto (Mínimo 1 nombre y 1 apellido, Máximo 2 nombres y 2 apellidos)', nombre_test, this);
            break;
        case 'edad':
            ver_error('La fecha de nacimiento no puede estar vacía', edad_test, this);
            break;
        case 'hijos':
            ver_error('Hijos Incorrecto (0-10)', hijos_test, this);
            break;
        case 'email':
            ver_error('Email Incorrecto (xxxxxx@yyyyy.zzz)', email_test, this);
            break;
        case 'sitioweb':
            ver_error('Web Incorrecta (http://www.xxxx.yyy)', sitioweb_test, this);
            break;
        case 'passwd':
            ver_error('Longitud de contraseña incorrecta (Entre 8 y 10 carácteres)', passwd_test, this);
            break;
    }
}

function iniciar() {
    var inputs = document.getElementsByTagName('input');
    for (x of inputs) {
        // Poner al perder el foco del input
        x.addEventListener('blur', test_input);
    }
    
}

function comprobarMayoria(){
    edad = document.getElementById("edad").value;
    //absurdo
    // if (edad < 18) {
    //     console.log("mayor de edad");
    // }
}
//window.onload = iniciar;
window.onload = function () {
    document.getElementById("mayor").addEventListener("change",comprobarMayoria,false);
    iniciar();
}