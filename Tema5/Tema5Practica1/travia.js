
function comprobarnombre(nombre) {
    if (nombre.lenght < 8) {
        
    }
}


window.onload = function () {
    var nombre = document.getElementById("nombre")
    nombre.addEventListener("keyup",comprobarnombre(nombre.value),false);
    
}