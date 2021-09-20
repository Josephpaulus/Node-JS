/*
    Typescript pg. 126-174 
    Pellegrini Acosta José Pablo 4-01
*/

/////ELEMENTOS DE LAS CLASES
//CAMPOS DE UNA CLASE
class Punto {
    x: number;
    y: number;
    a; 
    b = 0; 
}
const miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;



////READONLY (SÓLO LECTURA)
class Saludo {
    readonly nombre: string = "mundo";
    constructor(nuevoNombre: string) {
        if (!nuevoNombre) {
            this.nombre = nuevoNombre;
        }
    }
    asignarNuevoNombre(nuevoNombre: string){      
    }
}
const miNombre = new Saludo("Elio");



////CONSTRUCTORES
class Punto2 {
    x: number;
    y: number;
    constructor(x = 10, y = 10) {
        this.x = x;
        this.y = y;
    }
}
let miPunto2 = new Punto2();
console.log(miPunto2.x);
console.log(miPunto2.y);



////CONSTRUCTOR SOBRECARGA 
class Punto3 {
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number) {
    }
}



////SUPER
class Figura {
    lados = 0;
}
class Circulo extends Figura {
    constructor() {
        super();
    }
}



////METHODS
class Video {
    titulo: string;
    constructor(titulo: string) {
        this.titulo = titulo;
    }
    reproducir(): void {
        console.log(`${this.titulo} se está reproducioendo`);
    }
}
const miVideo = new Video("año nuevo");
miVideo.reproducir();
let titulo = "mi graduacion"; 
class Video2 {
    titulo: string;
    asignarTitulo(nuevoTitulo: string){
        titulo = nuevoTitulo; 
        this.titulo = nuevoTitulo; 
    }
}



////SETTERS-GETTERS
class Desfile {
    private _participantes = 0;
    get participantes(): number {
        return this._participantes;
    }
    set participantes(v: number) {
        this._participantes = v;
    }
}
const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); 


////HERENCIA
interface Encendible {
    encender(): void;
}
class Television implements Encendible{ 
    encender(): void {
        console.log("El televisor se ha encendido");
    }
}



//PRECAUCIONES
interface Verificable {
    verificar(nombre: string): boolean;
}
class NombreVerificable implements Verificable {
    verificar(nombre): boolean { 
        return nombre.toLowerCase();
    }
}



////EXTENDS
class Animal {
    moverse() {
        console.log("El animal se mueve");
    }
}
class Perro extends Animal {
    ladrar() {
        console.log("El perro ladra");
    }
}
const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();



////CLASSES, SOBRECARGA
class Padre {
    saludar() {
        console.log("Hola");
    }
}
class Hijo extends Padre {
    saludar(nombre?: string) {
        if (!!nombre) {
            console.log(`Hola ${nombre}`);
        } else {
            super.saludar();
        }
    }
}
const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");
const h : Padre = new Hijo();



////ORDEN DE INICIALIZACIÓN DE LAS CLASES
class Definicion {
    nombre = "definicion";
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}
class Implementacion extends Definicion {}
const d = new Implementacion();



////VISIBILITY PUBLIC
class Saludo2 {
    public saludar() {
        console.log("Saludar!");
    }
}
const inst = new Saludo2();
inst.saludar();



////VISIBILITY PROTECTED
class Saludo3 {
    protected getDestinatario() {
        return "amigos";
    }
}
class SaludoEspecial extends Saludo3 {
    saludar() {
    }
}
const saludo: SaludoEspecial = new SaludoEspecial(); 
saludo.saludar();


////HABILITAR LOS MÉTODOS PROTEGIDOS
class Base {
    protected m = 10;
}
class Derivada extends Base {
    m = 15;
}
const d2 = new Derivada();
console.log(d2.m);



////CROSS-HIERARCHY PROTECTED ACCESS (HERENCIA CRUZADA)
class Base2 {
    protected x: number = 1;
}
class Derivada2 extends Base2 {
    protected x: number = 5;
}
class Derivada3 extends Base2{
    imprimirx(c1: Derivada3){   
        console.log(c1.x);
    }
}



////VISIBILITY PRIVATE
class Base4 {
    private x = 0;
}
class Derivada4 extends Base4 {
    imprimirX() {
    }
}
const b4 = new Base4();



////CROSS-INSTANCE PRIVATE ACCESS
class A {
    private x = 10;
    public imprimirX(otra: A){
        console.log(otra.x); 
    }
}
const b = new A();
b.imprimirX(new A());



////STATIC MEMBERS
class MiClase {
    static x = 10;
    static imprimirX() {   
        console.log(`El valor de x es: ${this.x}`);
    }
    imprimirX() {
        console.log(`El valor de x en una instancia es: ${MiClase.x}`);
    }
}
MiClase.imprimirX();
console.log(`El valor obtenido de x es: ${MiClase.x}`);
const miClase = new MiClase();
miClase.imprimirX();
class MiClase2 {
    private static x = 10;
}
//Los métodos estáticos también se heredan.
class Base5 {
    static saludar() {
        console.log("Hola mundo");
    }
}
class Derivada5 extends Base5 {}
Derivada5.saludar();



////PALABRAS RESERVADAS EN CLASES
class base6 {
}


////GENERICS
class Caja<T>{
    contenido: T;

    constructor(value: T) {
        this.contenido = value;
        console.log(this.contenido);
    }
}
type Juguete = {
    nombre: string;
};
const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);
type Maquillaje = {
    nombre: string;
};
const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });
const MiCajaDeMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);



////THIS TYPES
class Caja2 {
    contenido = "";
    contenido2 = "Test";
    set(valor: string) {
        this.contenido = valor;
        return this;
    }
}
const miCaja2: Caja2 = new Caja2();
const valorRetornado = miCaja2.set("Joyas");
console.log(miCaja2);
console.log(valorRetornado);
class Caja3 {
    contenido = "";
//this como anotación
    constructor(contenido: string) {
        this.contenido = contenido; 
    }

    igualQue(otro: this) {
        return otro.contenido === this.contenido;
    }
}
const caja1 = new Caja3("Joyas");
const caja2 = new Caja3("Joyas");
const caja3 = new Caja3("Maquillaje");
console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));
class Caja6 {
    contenido = "";

    igualQue(otro: this) {
    }
}
class CajaDerivada extends Caja6 {
    otroContenido = "";
}
const base = new Caja6();
const derivada = new CajaDerivada();



////PARAMETER  PROPERTIES (PROPIEDADES DEL PARAMETRO)
class Video3{
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web"
    ) {}
}
const miVideo2: Video3 = new Video3("vacaciones", 60, "mp4");
console.log(`Mi video de: ${miVideo2.nombre}`);
console.log(`Tiene una duración de: ${miVideo2.duracion}`);
console.log(`Y el formato es: ${miVideo2.formato}`);



////CLASS EXPRESSIONS
const miClase3 = class<T> {
    contenido: T;
    constructor(v: T) {
        this.contenido = v;
    }
};
const miInstancia = new miClase3("Un video de 12 minutos");
console.log(`El contenido del video es: ${miInstancia.contenido}`);