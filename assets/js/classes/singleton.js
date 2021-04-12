
// singleton es una instancia única de una clase que se puede usar de manera global
// no importa cuantas veces se instancie la clase, siempre se hara referencia al mismo objeto


let a;
console.log(a);     // undefined
console.log(!a);    // true
console.log(!!a);   // false

class Singleton {
    static instancia;   // undefined por defecto
    nombre = '';

    constructor(nombre = ''){

        if ( !!Singleton.instancia )        // Si ya existe una instancia
            return Singleton.instancia;

        Singleton.instancia = this; // Hace referencia a la instancia de la misma clase, pasa de ser undefined(false)
                                    // a un objeto literal {...}(con atributos de la misma clase) y esto es un true para el if
        this.nombre = nombre;

        // return this;    // Por defecto el constructor siempre realiza esta instruccion
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Hulk');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);

