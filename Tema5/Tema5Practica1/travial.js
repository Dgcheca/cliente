    //CARGAR LA COOKIE
    function comprobarCookie() {
        var contador = leerCookie("contador"); //COMPRUEBA LA COOKIE
        if (contador == "") { //SI NO ESTA CREADA, LA DEVOLVERA VACIA
            contador = 1; //E INICIA EL CONTADOR A UNO
        } else {
            contador = parseInt(contador) +1; //SI SI ESTA CREADA, SUMA 1 AL CONTADOR
        }
            document.cookie = "contador="+contador+"; max-age=60*60*24*365";  //Y CREAMOS LA COOKIE
            document.getElementById("contador").innerHTML = contador;
    }
    function leerCookie(contador) { //FUNCION BASICA PARA LEER LA COOKIE
        a = document.cookie.substring(document.cookie.indexOf(contador + '=') + contador.length + 1,document.cookie.length);
        if(a.indexOf(';') != -1)a = a.substring(document.cookie.indexOf(contador + '='),a.indexOf(';'))
        return a;
        }
        
    //GENERA LOS LINKS PARA MOVERNOS POR LA APLICACION EN EL NAV USANDO JS  
    function linkear(link) {
        linkfinal = link+".html";
        window.location.href = "./"+linkfinal;
    }

    //COMPRUEBA EL TEXTO DE CUALQUIER CAMPO DEL FORMULARIO QUE PASEMOS (POR ID) Y DEVUELVE UN MENSAJE DE ERROR CUANDO CORRESPONDE
    function comprobarnombre(id) {
        var name = document.getElementById(id);
        var nombre = name.value;
            if ((nombre.search(/[0-9]/) >= 0) || (nombre.search(/[!@#$%^&*]/)) >= 0){
                document.getElementById(id+"error").innerHTML = "El "+id+" no puede tener numeros ni caracteres especiales";
                name.name = "incorrecto";
            } else {
                cambio = document.getElementById(id+"error").innerHTML = ""; 
                name.name = "valido";
            }
    }
    //CAMBIA LA PRIMERA LETRA DE CUALQUIER CAMPO DEL FORMULARIO QUE PASEMOS (POR ID) A MAYUSCULAS
    function cambiarmayusculas(id) {
        var tag = document.getElementById(""+id);
        var texto = tag.value;
        var primera = texto.charAt(0).toUpperCase();
        texto = primera + texto.slice(1);
        tag.value = texto;
    }
    //COMPRUEBA QUE EL PASSWORD CONTENGA LOS CARACTERES MINIMOS PARA SER CONSIDERADO FUERTE
    function comprobarpassword() {
        var name = document.getElementById("password");
        var expresionRegular = /^(?=.*\d)(?=.*[,;.-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        var expresionesProhibidas = /[!@#$%^&*]/;
        var password = name.value;
            if (expresionRegular.test(password) == false || expresionesProhibidas.test(password) == true) {
                document.getElementById("passworderror").innerHTML = "La contraseña debe contener un numero, una letra minuscula, una letra mayuscula, un caracter entre [,;.-], 8 digitos en total y ningun otro caracter especial";
                name.name = "incorrecto";
            } else {
                cambio = document.getElementById("passworderror").innerHTML = ""; 
                name.name = "valido";
            }
    }

    //COMPROBAMOS QUE AMBOS PASSWORD INTRODUCIDOS SEAN IGUALES
    function confirmarpassword() {
        var password = document.getElementById("password");
        var confirmar = document.getElementById("repassword");

        if (password.value !== confirmar.value) {
            document.getElementById("repassworderror").innerHTML = "Las contraseñas no coinciden";
            confirmar.name = "incorrecto";
        } else {
            document.getElementById("repassworderror").innerHTML = "";
            confirmar.name = "valido";
        }
    }
    //COMPROBAMOS QUE EL VALOR DE TODOS LOS CAMPOS DEL FORMULARIO SEAN CORRECTOS
    //SI LO SON, IMPRIMIMOS LOS DATOS ORDENADOS PARA CONFIRMAR
    //SI HAY ALGUNO INCORRECTO O EN BLANCO, ENVIAMOS UN MENSAJE DE ERROR
    function comprobarFormulario() {
        var correcto = true;
        var form = document.getElementById("formulario")
        for (let i = 0; i  < form.length; i++) {
            if (form[i].name == "incorrecto" || form[i].value <= 0) {
                correcto = false;
            }
           
        }
        if (correcto == true) {
            document.getElementById("recuadrodatos").innerHTML = "Nombre: "+form[0].value+" "+form[1].value+" Nacido el dia: "+form[4].value+" del mes: "+form[5].value+" del año: "+form[6].value;
        } else {
            document.getElementById("recuadrodatos").innerHTML = "Debes corregir todos los datos incorrectos o vacios antes de enviar";
        }
    }


    //BORRA LOS DATOS DE TODO EL FORMULARIO
    function borrarDatos() {
        let form = document.getElementById("formulario").elements;
        for (let i = 0; i < form.length; i++) {
            form[i].value = "";
            
        }
    }

       //COMPRUEBA EL TEXTO DE EL CAMPO PREGUNTA
    function comprobarpregunta(id) {
        var name = document.getElementById(id);
        var pregunta = name.value;
            if ((pregunta.search(/[0-9]/) >= 0) || (pregunta.search(/[@#$%^&*]/)) >= 0 || (pregunta.search(/\.\w/g , ' ') >= 0)){
                document.getElementById("preguntaerror").innerHTML = "La pregunta no tiene el formato correcto o usa caracteres extraños";
                name.name = "incorrecto";
            } else {
                cambio = document.getElementById("preguntaerror").innerHTML = ""; 
                name.name = "valido";
           }
    }

    //COMPROBAMOS TODOS LOS CAMPOS RADIO, PASAMOS EL VALOR DEL ACTIVO A CORRECTA Y LOS INACTIVOS A INCORRECTA
    function seleccionarcorrecta(radio) {
        
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                radio[i].value = "correcta";
            } else {
                radio[i].value = "incorrecta";
            }
            
        }
      
    }
    //COMPROBAMOS QUE TODAS LAS PREGUNTAS ESTEN RELLENAS Y CORRECTAS
    function guardarpregunta() {
        let correcto = true;
        pregunta = document.getElementById("formulariopregunta");
        for (let i = 0; i < 6; i++) {
            if ((pregunta[i].value.length <= 0) || (pregunta[i].value == "on") || (pregunta[i].name == "incorrecto")){
                correcto = false;
            }
        }
        if (correcto == true) {
            document.getElementById("campofinal").innerHTML= "Pregunta de: "+pregunta[0].value+": " + pregunta[1].value + "<br> Respuestas: <br>" + pregunta[2].value + ": " + pregunta[3].value + "<br>"  + pregunta[4].value + ": " + pregunta[5].value + "<br>" + pregunta[6].value + ": " + pregunta[7].value + "<br>" + pregunta[8].value + ": " + pregunta[9].value + "<br>"
        } else {
            document.getElementById("campofinal").innerHTML= "Hay algun error en uno de los campos o has dejado la respuesta sin marcar, revisalo";
        }
    }





   