function crearTablero (col,fil){
    var pool = Array();
    for (let i = 0; pool.length < col*fil; i++) { 
        var numero = generarRandom(col*fil); 
        var contiene = false;
        for (let j = 0; j < pool.length; j++) { 
            if (pool[j] == numero) {
                contiene = true;
            }
        }
        if (contiene == false) {
            pool.push(numero);
        }
    }
    var tablero = document.getElementById("tablero");
    tablero.style.width = 202*col+"px";
    for (let i = 0; i < fil; i++) {
        var fila = document.createElement("div");
        fila.setAttribute("id", i)
        for (let j = 0; j < col; j++) {
            let numeroid = pool.shift();
            var numerocelda = document.createElement("p");
            numerocelda.innerHTML = numeroid;
            numerocelda.className = "numeroid";
            var celda = document.createElement("div");
            celda.appendChild(numerocelda);
            celda.setAttribute("id", numeroid);
            celda.className = "celda-tablero";
            celda.style.backgroundColor = "white";
            celda.onclick = function () {
                pintarCelda(this);
            }
            fila.appendChild(celda);
        }
        tablero.appendChild(fila);
    }
}
function pintarCelda(celda){
    celda.style.backgroundColor = colorActual;
}
function cambiararojo(){
    colorActual = "red";
}
function cambiarablanco(){
    colorActual = "white";
}
function pintarAjedrez() {
    
    var tableroarray = document.getElementById("tablero").childNodes;
    for (let i = 0; i < tableroarray.length; i++) {
        let filas = tableroarray[i].childNodes;
        for (let j = 0; j < filas.length; j++) {
            if (i%2 == 0) {
                if (j%2 == 0) {
                    filas[j].style.backgroundColor = "white";
                } else {
                    filas[j].style.backgroundColor = "red";
                }
            } else {
                if (j%2 == 0) {
                    filas[j].style.backgroundColor = "red";
                } else {
                    filas[j].style.backgroundColor = "white";
                }
            }
        }
    }
}
function limpiarceldas() {
    var tableroarray = document.getElementById("tablero").childNodes;
    for (let i = 0; i < tableroarray.length; i++) {
        let filas = tableroarray[i].childNodes;
        for (let j = 0; j < filas.length; j++) {
            filas[j].style.backgroundColor = "white";
        }
    }
   
}
function generarRandom(max) {
    return Math.floor(Math.random() * max);
}
function sumarColor(color){
    var suma = 0;
    var tableroarray = document.getElementById("tablero").childNodes;
    for (let i = 0; i < tableroarray.length; i++) {
        let filas = tableroarray[i].childNodes;
        for (let j = 0; j < filas.length; j++) {
            if (filas[j].style.backgroundColor == color) {
                suma += parseInt(filas[j].id);
            }
        }
    }
    document.getElementById("result").innerHTML = "La suma de las casillas del color elegido es: "+suma;
}



var colorActual = "red";

window.onload = function () {
    document.getElementById("limpiar").addEventListener("click",limpiarceldas,false);
    document.getElementById("rojo").addEventListener("click",cambiararojo,false);
    document.getElementById("blanco").addEventListener("click",cambiarablanco,false);
    document.getElementById("ajedrez").addEventListener("click",pintarAjedrez,false);
    document.getElementById("sumarrojas").addEventListener("click", function (){sumarColor("red")},false);
    document.getElementById("sumarblancas").addEventListener("click", function (){sumarColor("white")},false);
    crearTablero(4,4);
}