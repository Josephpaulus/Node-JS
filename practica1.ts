// Instalar TypeScript
// npm i -g typescript

//// Compilar un archivo de typeScript

function saludar(nombre) {
    return "Hola, " + nombre;
}

//console.log(saludar("Pelle"));

////// =========== VARIABLES ===========

//// Boolean 
let esVerdadero = true;
console.log(esVerdadero);



//// Number
let entero: number = 6;
let decimal: number = 6.5;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("Entero: " + entero + "\nDecimal: " + decimal + "\nHex: " + hex + "\nBinario: " + binary + "\nOctal: " + octal)



//// String
let marca: string = "toyota";
let modelo: string = "tacoma";
console.log("Modelo: " + modelo + "\nMarca: " + marca);

// Template Strings
let nombre: string = "Raul";
let apellido: string = "Jimenez";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;
console.log("Impresion: " + impresion);



//// Arrays
let listaDeNumeros: number[] = [1, 2, 3];
console.log(listaDeNumeros["En la posicion 3 esta: " + 2]);



//// Tuplas
let futbolista: [string, number];
futbolista = ['Ronaldhino', 20]
console.log(`El nombre es ${futbolista[0]} y su edad es ${futbolista[1]}`);



//// Enums
enum marcasDeAutos {
    Toyota = 100,
    Chevrolet = 0,
    Ford = 0
}
let tacoma: marcasDeAutos = marcasDeAutos.Toyota;
console.log(tacoma);
console.log(marcasDeAutos[0]);



//// Any
let variablesSinTipo: any = `Hola pepe`;
console.log(variablesSinTipo);
variablesSinTipo = 96;
console.log(variablesSinTipo);



//// Unknown 
let valorDesconocido: unknown = 4;
valorDesconocido = true;
console.log(valorDesconocido)



//// Void
function saludar2(): void {
    console.log("Hola Mundo... Buenon't");
}
saludar2();



//// Null y Undefined
let variablesSinDefinir: undefined = undefined;
let variableNula: null = null;
console.log(variableNula);



//// Never
// Esta función no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// Esta funcion no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}

// Esta función no finaliza ya que posee un loop infinito
function LoopInfinito(): never {
    while (true) { }
}



//// Objects
declare function crear(o: object): void;
//crear({ prop: 0 })
//crear(null);
//crear(undefined);
//crear([]);
// false es un tipo primitov por lo cual se genera un error
//crear(false); 



//// Union
function imprimirId(id: number | string) {
    console.log(`El id es ${id}`);
    if (typeof id === "string") {
        console.log(`El ID es: ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El ID es: ${(id as number).toFixed(2)}`);
    }
}
imprimirId("Este_es_mi_ID");
imprimirId(100.99999);
imprimirId(1);
imprimirId("abc");



//// Assertion
let algunValor: unknown = "Esto es un string";
let longitudDelString: number = (algunValor as string).length;
//Se puede llevar a cabo con <tipo> antes de la var 
let algunValor2: unknown = "Este es un string";
let longitudDelString2: number = (<string>algunValor).length;



//// Functions
function saludar3(nombre: string) {
    console.log(`Hola ${nombre}`);
}
saludar3("Nubia");



//// Retorno de la función
function elevarAlCuadrado(base: number): number {
    return base * base;
}
let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);



//// Funciones Anónimas
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach((s) => {
    console.log(s.toUpperCase());
})



//// Aliases
type Punto = {
    x: number;
    y: number;
}
function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada X es : ${punto.x}`);
    console.log(`La coordenada Y es : ${punto.y}`);
}
imprimirCoordenada({ x: 10, y: 25 });



////// Interfaces
function imprimirEtiqueta(etiqueta: { label: string }) {
    console.log(etiqueta.label);
}
let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
/* Podemos reescribir el ejemplo anterior definiendo 
una interface que describe los requerimientos anteriores*/
interface Etiqueta {
    label: string;
}
function imprimirEtiqueta1(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
};
let miEtiqueta1 = { numero: 10, label: "Esta es mi etiqueta 1" };
imprimirEtiqueta1(miEtiqueta1);



//// Propiedades de las interfaces
interface Cuadrado {
    color?: string;
    ancho: number;
}
function crearCuadrado(cuadrado: Cuadrado): { area: number } {
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
//// Propiedades de sólo lectura interfaces
/* 
   interface Punto2 {
    readonly x: number;
    readonly y: number;
}
let punto1: Punto = { x: 10, y: 20};
punto1.x = 20; 
*/



//// Interfaces vs types
interface Transporte {
    nombre: string;
}
type Figura = {
    nombre: string;
}
// Extender
interface Auto extends Transporte {
    ruedas: number;
}
type Cuadrado2 = Figura & {
    lados: 4;
}



//// Literales
function imprimir(estadoCivil: `soltero` | `casado`) {
    console.log(estadoCivil);
}
imprimir(`soltero`);

// Funciones como expresiones
function saludar4(fn: (a: string) => void) {
    fn("Hola Mundo")
}
function imprimirEnConsola(s: string) {
    console.log(s);
}
saludar(imprimirEnConsola);