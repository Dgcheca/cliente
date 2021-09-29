/* 
let arr = ["1", "10", "100", "1000"];
    for (let i = 0; i < arr.length && arr[i]<500; i++){
        console.log(arr[i]);
    }

function ejemplo(){
      ejemplo=3;
      if (ejemplo === 3) {
         var variable1 = 1;
          let variable2 = 2;
       }
  console.log(variable1); 
  console.log(variable2);
 }


let edad=23, nueva_edad, incremento=4;
const nombre="Rosa Garcia";
console.log(typeof incremento==="number");
nueva_edad=edad+incremento; 
console.log(nombre + " tras "+incremento +" años tendra "+ nueva_edad);


let respuesta;
respuesta=confirm ("Desea cancelar la suscripcion?");
alert("Usted ha contestado que "+respuesta);


let provincia;
provincia=prompt("Introduzca la provincia ", "Valencia");
alert("Usted ha introducido la siguiente informacion "+provincia);
console.log("Operacion realizada con exito");


let a=4;b=5;c="5";
console.log("El resultado de la expresion 'a==c' es igual a "+(a==c));
console.log("El resultado de la expresion 'a===c' es igual a "+(a===c));
console.log("El resultado de la expresion 'a!=c' es igual a "+(a!=c));
console.log("El resultado de la expresion 'a!==c' es igual a "+(a!==c));
console.log("El resultado de la expresion 'a==b' es igual a "+(a==b));
console.log("El resultado de la expresion 'a!=b' es igual a "+(a!=b));
console.log("El resultado de la expresion 'a>b' es igual a "+(a>b));
console.log("El resultado de la expresion 'a<b' es igual a "+(a<b));


*/

accion=prompt("Que desea realizar?","Nada");

switch (accion) {
    case "Saltar": document.write("Acabas de Saltar");break;
    case "Gritar": document.write("Es imposible que pueas gritar mas fuerte.");break;
    case "Trotar": document.write("Pareces un caballo de carreras.");break;
    case "Picar": document.write("Le coges a tu compañero una bolsa de patatas");break;
    default: document.write("Elige algo que puedas hacer la proxima vez");s
}