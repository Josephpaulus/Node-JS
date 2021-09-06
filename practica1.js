// Instalar TypeScript
// npm i -g typescript
//// Compilar un archivo de typeScript
function saludar(nombre) {
    return "Hola, " + nombre;
}
//console.log(saludar("Pelle"));
////// =========== VARIABLES ===========
//// Boolean 
var esVerdadero = true;
console.log(esVerdadero);
//// Number
var entero = 6;
var decimal = 6.5;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("Entero: " + entero + "\nDecimal: " + decimal + "\nHex: " + hex + "\nBinario: " + binary + "\nOctal: " + octal);
//// String
var marca = "toyota";
var modelo = "tacoma";
console.log("Modelo: " + modelo + "\nMarca: " + marca);
// Template Strings
var nombre = "Raul";
var apellido = "Jimenez";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
console.log("Impresion: " + impresion);
//// Arrays
var listaDeNumeros = [1, 2, 3];
console.log(listaDeNumeros["En la posicion 3 esta: " + 2]);
//// Tuplas
var futbolista;
futbolista = ['Ronaldhino', 20];
console.log("El nombre es " + futbolista[0] + " y su edad es " + futbolista[1]);
//// Enums
var marcasDeAutos;
(function (marcasDeAutos) {
    marcasDeAutos[marcasDeAutos["Toyota"] = 100] = "Toyota";
    marcasDeAutos[marcasDeAutos["Chevrolet"] = 0] = "Chevrolet";
    marcasDeAutos[marcasDeAutos["Ford"] = 0] = "Ford";
})(marcasDeAutos || (marcasDeAutos = {}));
var tacoma = marcasDeAutos.Toyota;
console.log(tacoma);
console.log(marcasDeAutos[0]);
//// Any
var variablesSinTipo = "Hola pepe";
console.log(variablesSinTipo);
variablesSinTipo = 96;
console.log(variablesSinTipo);
//// Unknown 
var valorDesconocido = 4;
valorDesconocido = true;
console.log(valorDesconocido);
//// Void
function saludar2() {
    console.log("Hola Mundo... Buenon't");
}
saludar2();
//// Null y Undefined
var variablesSinDefinir = undefined;
var variableNula = null;
console.log(variableNula);
//// Never
// Esta función no tiene un punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
// Esta funcion no tiene un punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
// Esta función no finaliza ya que posee un loop infinito
function LoopInfinito() {
    while (true) { }
}
//crear({ prop: 0 })
//crear(null);
//crear(undefined);
//crear([]);
// false es un tipo primitov por lo cual se genera un error
//crear(false); 
//// Union
function imprimirId(id) {
    console.log("El id es " + id);
    if (typeof id === "string") {
        console.log("El ID es: " + id.toUpperCase());
    }
    else {
        console.log("El ID es: " + id.toFixed(2));
    }
}
imprimirId("Este_es_mi_ID");
imprimirId(100.99999);
imprimirId(1);
imprimirId("abc");
//// Assertion
var algunValor = "Esto es un string";
var longitudDelString = algunValor.length;
//Se puede llevar a cabo con <tipo> antes de la var 
var algunValor2 = "Este es un string";
var longitudDelString2 = algunValor.length;
//// Functions
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Nubia");
//// Retorno de la función
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//// Funciones Anónimas
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada X es : " + punto.x);
    console.log("La coordenada Y es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
////// Interfaces
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta1(etiqueta) {
    console.log(etiqueta.label);
}
;
var miEtiqueta1 = { numero: 10, label: "Esta es mi etiqueta 1" };
imprimirEtiqueta1(miEtiqueta1);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
//// Literales
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir("soltero");
// Funciones como expresiones
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar(imprimirEnConsola);
