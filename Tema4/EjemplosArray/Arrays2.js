function randoms() { //Funcion para generar 
    let num = 0;//numeros aleatorios del 0 al 50
    num = Math.floor((Math.random())*51);
    return num;
}

DatosIniciales = new Array(); //definimos el array vacio
for (let i = 0; i < 10; i++) {
    DatosIniciales.push(randoms()); //lo rellenamos de randoms
}

DatosFinales = new Array(); //definimos el array vacio
DatosFinales.lenght = 10; //definimos la longitud a 10

for (let i = 0; i < DatosIniciales.length; i++) {
   if (DatosIniciales[i]>=25) { //Si el valor de DatosIniciales es
    //mayor que 25, pusheamos a DatosFinales;
       DatosFinales.push(DatosIniciales[i]);
   }
}