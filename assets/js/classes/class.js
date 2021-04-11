
class Persona { // Por defecto todas las clases en JS usan el 'use strict'

    // La sintaxis para inicializar propiedades de clase es la siguiente; no es como inicializar variables
    // ya que si se intenta hacer todas las variables en una linea separadas por coma daria error
    nombre = '';
    codigo = '';
    frase = '';

    // Constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        // Si las variables no están inicializadas  en el argumento de funcion; entonces tendrán un undefined
        if ( !nombre ) throw Error('Por favor coloque un nombre');

        // console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es: ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${ this.frase }`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy ironman');
console.log( spiderman );
console.log( ironman );

spiderman.quienSoy();
// ironman.quienSoy();
ironman.miFrase();
