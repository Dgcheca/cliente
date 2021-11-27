var poblaciones = ['Localidad','Enero','Febrero','Marzo','Abril'];
var temperaturas = [['Cuevas del Alamanzora',12,13,15,18], ['Granada', 4.5, 8, 9, 15],
['Madrid', 4, 5.8, 8, 13], ['Soria', 0, 1,6,10]]

function calcularMedia(temp) {
    let cant = poblaciones.length-1;
    return temp/cant;
}

function calcularMasAltaMarzo() {
    var mediaMarzo = 0;
    for (let i = 0; i < temperaturas.length; i++) {
        mediaMarzo += temperaturas[i][3];
    }
    return mediaMarzo;
}

function calcularMediaAbril(params) {
    
}

function mostrarPeorMedia(params) {
    
}

function añadirPoblacion(params) {
    
}