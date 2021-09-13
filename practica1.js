// Instalar TypeScript
// npm i -g typescript
//// Compilar un archivo de typeScript
function saludar(nombre) {
    return "Hola, " + nombre;
}
//console.log(saludar("Pelle"));
////// =========== VARIABLES ===========
//// Boolean ////////////////////
var esVerdadero = true;
console.log(esVerdadero);
//// Number ////////////////////
var entero = 6;
var decimal = 6.5;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("Entero: " + entero + "\nDecimal: " + decimal + "\nHex: " + hex + "\nBinario: " + binary + "\nOctal: " + octal);
//// String ////////////////////
var marca = "toyota";
var modelo = "tacoma";
console.log("Modelo: " + modelo + "\nMarca: " + marca);
// Template Strings
var nombre = "Raul";
var apellido = "Jimenez";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
console.log("Impresion: " + impresion);
//// Arrays ////////////////////
var listaDeNumeros = [1, 2, 3];
console.log(listaDeNumeros["En la posicion 3 esta: " + 2]);
//// Tuplas ////////////////////
var futbolista;
futbolista = ['Ronaldhino', 20];
console.log("El nombre es " + futbolista[0] + " y su edad es " + futbolista[1]);
//// Enums ////////////////////
var marcasDeAutos;
(function (marcasDeAutos) {
    marcasDeAutos[marcasDeAutos["Toyota"] = 100] = "Toyota";
    marcasDeAutos[marcasDeAutos["Chevrolet"] = 0] = "Chevrolet";
    marcasDeAutos[marcasDeAutos["Ford"] = 0] = "Ford";
})(marcasDeAutos || (marcasDeAutos = {}));
var tacoma = marcasDeAutos.Toyota;
console.log(tacoma);
console.log(marcasDeAutos[0]);
//// Any ////////////////////
var variablesSinTipo = "Hola pepe";
console.log(variablesSinTipo);
variablesSinTipo = 96;
console.log(variablesSinTipo);
//// Unknown ////////////////////
var valorDesconocido = 4;
valorDesconocido = true;
console.log(valorDesconocido);
//// Void ////////////////////
function saludar2() {
    console.log("Hola Mundo... Buenon't");
}
saludar2();
//// Null y Undefined ////////////////////
var variablesSinDefinir = undefined;
var variableNula = null;
console.log(variableNula);
//// Never ////////////////////
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
//// Union ////////////////////
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
//// Assertion ////////////////////
var algunValor = "Esto es un string";
var longitudDelString = algunValor.length;
//Se puede llevar a cabo con <tipo> antes de la var 
var algunValor2 = "Este es un string";
var longitudDelString2 = algunValor.length;
//// Functions ////////////////////
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Nubia");
//// Retorno de la función ////////////////////
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//// Funciones Anónimas ////////////////////
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
////// Interfaces ////////////////////
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
//// Literales ////////////////////
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
function longitud(x) {
    return x.length;
}
console.log(longitud("Hola Mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
//// THIS ////////////////////
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
//// PARAMETROS REST ////////////////////
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
//// PARAMETROS DESTRUCTING ////////////////////
function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function sumar2(a, b, c) {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3 }));
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3 }));
//// TIPOS OBJETO ////////////////////
function saludar5(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar5({ nombre: "Luis", edad: 22 }));
function saludar6(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar6({ nombre: "Elena", edad: 25 }));
function imprimir1(computador) {
    //console.log(`Sistema operativo ${Computadora2.os}`);
    //console.log(`Sistema operativo ${Computadora2.memoria}`);
    //console.log(`Sistema operativo ${Computadora2.procesador}`);
}
imprimir1({
    os: "Windows",
    memoria: 8,
    procesador: "intel"
});
var miCachorro = { raza: "Shitzu" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
//Pedro.edad++;
console.log("La edad de Luis es: " + Luis.edad);
console.log("La edad de Pedro es: " + Pedro.edad);
//const macbookPro: Portatil = {
//}
var macbookPro = {
    memoria: "166",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "2.0",
    bateria: "",
    monitor: "",
    teclado: ""
};
var x = {
    contenido: "hola mundo"
};
//Mediante typeof podemos verificar si el tipo es string
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
//mediante "as tipo" podemos decirle al compilador que esto es siempre string
console.log(x.contenido.toLocaleLowerCase);
function setContenido(caja, nuevoContenido) {
    caja.contenido = nuevoContenido;
}
var cajaDeString = { contenido: "hola mundo" };
var cajaDeNumero = { contenido: 100 };
var cajaDeFecha = { contenido: new Date() };
//// Array Type ////////////////////
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas1 = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];
imprimirTareas(misTareas1);
// Readonly array type
//const miLista2 : ReadonlyArray<string> = ("a", 'b', "c");
//miLista.push("d"); //<--- Esta linea da error
//No existe constructor readonlyarray 
//En lugar de ello podemos asignar un arreglo normal a uno de solo lectura
//const miLista2 = new ReadonlyArray('a','b','c');
var miLista3 = ['a', 'b', 'c'];
//const prius : Auto1 ['toyota', 2015]
//const civic : Auto1 ['honda', 2016]
//console.log('El Prius es marca: ', prius[0], ' y modelo: ', prius[1])
//console.log('El civic es marca: ', civic[0], ' y modelo: ', civic[1])
// // // // // // // // // // // // 
var prius1 = ["Toyota", 2015];
var marca1 = prius1[0], modelo1 = prius1[1];
console.log("La marca del prius es: ", marca1);
console.log("El modelo del prius es: ", modelo1);
var a = ["a", 1, true, false, true];
var prius = ["Toyota", 2014];
//prius[0] = 'Honda'; //Esta linea generaria un error
