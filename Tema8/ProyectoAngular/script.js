'use strict';
var miApp = angular.module('miFoster', []);
miApp.controller('CartaController', function() {
    this.articulos = articulos;
    this.local = locales;
});


var locales = {
    localidad: 'Cuevas del Almanzora',
    mensaje: '!Por fin un Foster Hollywood en Cuevas del Almanzora! !Visitanos en la Avenida Barcelona y pide nuestros platos mas iconicos!'
};


var articulos = [{
    nombre: 'BLACK LABEL BURGER',
    descripcion: 'Carne con lomo de vacuno*, queso Cheddar y cebolla morada confitada al Oporto, sobre tomate, lechuga romana y mayonesa con sabor a trufa. En pan con sabor a trufa. Acompañada de patatas Dipper con queso Parmigiano Reggiano, pepinillo Pickle y mayonesa con sabor a trufa.',
	precio: 14.95,
    imagen: 'imagenes/blb_web.png'
}, {
    nombre: 'SLOW SMOKED',
    descripcion: 'Carne Smoked Burger, queso Cheddar ahumado y cebolla pochada sobre base de lechuga romana, tomate y salsa Mayo Smoked Bacon. En pan de cristal. Acompañada de patatas Dipper con especias BBQ, pepinillo Pickle y Mayo Smoked Bacon.',
	precio: 13.95,
    imagen: 'imagenes/smoked_web.png'
}, {
    nombre: 'NORTH CAROLINA PULLED PORK',
    descripcion: 'Carne de vacuno, Cheddar ahumado, aros de cebolla, carne de cerdo deshilachada con salsa BBQ, sobre lechuga romana, tomate, cebolla morada y salsa especial FH. En pan clásico. Acompañada de patatas fritas.',
	precio: 12.95,
    imagen: 'imagenes/n_c_pulled_pork_web.png'
}, {
    nombre: 'TRIBECA AVOCADO',
    descripcion: 'Carne de vacuno, queso Monterrey Jack, aguacate y cebolla caramelizada, sobre base de lechuga romana, tomate, cebolla morada y salsa de miel mostaza. En pan rústico de semillas. Acompañada de patatas fritas.',
	precio: 13.95,
    imagen: 'imagenes/tribeca_web.png'
}, {
    nombre: 'SWEET PHILADELPHIA',
    descripcion: 'Carne de vacuno, Philadelphia y cebolla caramelizada, sobre base de lechuga romana, tomate, cebolla morada y salsa especial FH. En pan clásico. Acompañada de patatas fritas.',
	precio: 14.95,
    imagen: 'imagenes/sweet_philadelphia_web.png'
}];