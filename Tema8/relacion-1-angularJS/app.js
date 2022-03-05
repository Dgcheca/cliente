'use strict';
var miApp = angular.module('miTienda', []);
miApp.controller('tiendaController', function() {
    this.articulos = articulos;
	this.stockClass = function (stock){
		if (stock > 15) {
			return "bg-success";
		} else if (stock < 15 && stock != 0) {
			return "bg-warning";
		} else if (stock == 0) {
			return "bg-danger";
		}
	}
	this.descontar = function (precio,descuento){
		if (descuento > 0) {
			return precio - (precio * descuento/100);
		} else {
			return precio;
		}
	}
});


var articulos =  [{
    nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
    precio: 149.00,
    imagen: 'img/fujifilm.jpg',
    stock: 5,
	descuento: 20
}, {
    nombre: 'PANASONIC VIERA TX-55AS650E - Televisor LED 3D Smart TV',
    precio: 1499.00,
    imagen: 'img/tv1.jpg',
    stock: 9,
	descuento: 10
}, {
    nombre: 'SAMSUNG Galaxy S4 Value Edition - blanco - 16 GB - Smartphone',
    precio: 399.00,
    imagen: 'img/fujifilm.jpg',
    stock: 22,
	descuento: 8
}, {
    nombre: 'WD WD Red WD40EFRX - 4 TB - Disco duro interno - 3.5"',
    precio: 174.90,
    imagen: 'img/disco-duro.jpg',
    stock: 0,
	descuento: 15
}, {
    nombre: 'SAMSUNG Gear Fit - negro - Reloj conectado',
    precio: 199.00,
    imagen: 'img/samsung-gear.jpg',
    stock: 34,
	descuento: 0
}];