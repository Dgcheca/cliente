//FUNCION PARA GENERAR NUMEROS RANDOMS DE FORMA DINAMICA
function generarRandom(max) {
    return Math.floor(Math.random() * max);
}
//CREAMOS EL TABLERO PASANDOLE EL NUMERO DE FILAS Y COLUMNAS
function crearTablero (col,fil){
    var pool = Array(); //CREAMOS UN ARRAY VACIO DONDE VAMOS A METER LOS NUMEROS RANDOMS
    for (let i = 0; pool.length < col*fil; i++) { 
        var numero = generarRandom(col*fil); //CREAMOS UN NUMERO AL AZAR DEL 0 AL (COL*FIL)
        var contiene = false;
        for (let j = 0; j < pool.length; j++) { //COMPROBAMOS QUE EL NUMERO ESTE YA EN EL ARRAY
            if (pool[j] == numero) {
                contiene = true;
            }
        }
        if (contiene == false) { //SI NO, LO METEMOS
            pool.push(numero);
        }
    }
    //CAPTURAMOS EL DIV "TABLERO"
    var tablero = document.getElementById("tablero");
    tablero.style.width = 202*col+"px"; //LE DEFINIMOS EL ANCHO SEGUN EL NUMERO DE COLUMNAS
    for (let i = 0; i < fil; i++) {
        var fila = document.createElement("div"); //CREAMOS LAS FILAS (UTIL PARA EL AJEDREZ)
        fila.setAttribute("id", i)
        for (let j = 0; j < col; j++) {
            let numeroid = pool.shift(); //ASIGNAMOS LOS NUMEROS DEL ARRAY
            var numerocelda = document.createElement("p"); //CREAMOS UN "P"
            numerocelda.innerHTML = numeroid; //METEMOS EN EL "P" EL NUMERO DEL ARRAY
            numerocelda.className = "numeroid";
            var celda = document.createElement("div"); //CREAMOS UN DIV PARA CADA CELDA
            celda.appendChild(numerocelda); //METEMOS EL "P" DENTRO DE CADA CELDA
            celda.setAttribute("id", numeroid); //Y DEFINIMOS LA ID COMO EL NUMERO DEL "P" (PARA EVITAR QUE REPITA)
            celda.className = "celda-tablero"; 
            celda.style.backgroundColor = "white"; //DEFINIMOS EL COLOR INICIAL COMO BLANCO
            celda.onclick = function () {//Y LA FUNCION PARA PINTAR LA CELDA
                pintarCelda(this);
            }
            fila.appendChild(celda); //Y METEMOS LA CELDA EN LA FILA CORRESPONDIENTE
        }
        tablero.appendChild(fila); //Y POR ULTIMO LA FILA EN EL TABLERO
    }
}
//FUNCIONES PARA LOS COLORES------------------------------------------------------------------------------------------------

//COLOR SELECCIONADO DE FORMA PREDETERMINADA
var colorActual = "red";

//CUANDO PULSAMOS EN LOS BOTONES "ROJO" Y "BLANCO" CAMBIAMOS EL COLOR PREDETERMINADO
function cambiarColor(color){
    colorActual = color;
}

//PASAMOS LA CELDA AL CLICKAR EN ELLA Y LA PINTAMOS DEL COLOR SELECCIONADO
function pintarCelda(celda){
    celda.style.backgroundColor = colorActual;
}

//PINTA TODO EL TABLERO EN FORMA DE AJEDREZ DE FORMA DINAMICA
function pintarAjedrez() {
    //COGEMOS TODAS LAS FILAS DEL TABLERO Y LO DESGLOSAMOS PARA COGER LAS CELDAS
    var tableroarray = document.getElementById("tablero").childNodes;
    for (let i = 0; i < tableroarray.length; i++) {
        let filas = tableroarray[i].childNodes;
        for (let j = 0; j < filas.length; j++) {
            if (i%2 == 0) { //EN LAS FILAS PARES PINTAREMOS LAS CELDAS IMPARES
                if (j%2 == 0) {
                    filas[j].style.backgroundColor = "white";
                } else {
                    filas[j].style.backgroundColor = "red";
                }
            } else { //EN LAS FILAS IMPARES PINTAREMOS LAS CELDAS PARES
                if (j%2 == 0) {
                    filas[j].style.backgroundColor = "red";
                } else {
                    filas[j].style.backgroundColor = "white";
                }
            }
        }
    }
}

//LIMPIA EL COLOR DE LAS CELDAS
function limpiarceldas() {
    //COGEMOS LAS CELDAS DESGLOSANDO EL TABLERO DOS VECES
    var tableroarray = document.getElementById("tablero").childNodes;
    for (let i = 0; i < tableroarray.length; i++) {
        let filas = tableroarray[i].childNodes;
        //Y PARA CADA UNA DE ELLAS ASIGNAMOS EL FONDO EN BLANCO
        for (let j = 0; j < filas.length; j++) {
            filas[j].style.backgroundColor = "white";
        }
    }
   
}

//BUSCA EN LAS CELDAS EL COLOR ELEGIDO Y VA SUMANDO LOS NUMEROS DE LOS ID
function sumarColor(color){
    var suma = 0;
    //DESGLOSAMOS EL TABLERO DOS VECES PARA COGER LAS CELDAS
    var tableroarray = document.getElementById("tablero").childNodes;
    for (let i = 0; i < tableroarray.length; i++) {
        let filas = tableroarray[i].childNodes;
        for (let j = 0; j < filas.length; j++) {
            //SI EL BACKGROUND ES DEL COLOR ELEGIDO, SUMA EL VALOR DE SU ID
            if (filas[j].style.backgroundColor == color) {
                suma += parseInt(filas[j].id);
            }
        }
    }
    //DEVUELVE EL MENSAJE DEL RESULTADO FINAL CON EL MENSAJE
    document.getElementById("result").innerHTML = "La suma de las casillas del color elegido es: "+suma;
}


window.onload = function () {
    document.getElementById("limpiar").addEventListener("click",limpiarceldas,false);
    document.getElementById("rojo").addEventListener("click", function (){cambiarColor("red")},false);
    document.getElementById("blanco").addEventListener("click", function (){cambiarColor("white")},false);
    document.getElementById("ajedrez").addEventListener("click",pintarAjedrez,false);
    document.getElementById("sumarrojas").addEventListener("click", function (){sumarColor("red")},false);
    document.getElementById("sumarblancas").addEventListener("click", function (){sumarColor("white")},false);
    crearTablero(4,4);
}