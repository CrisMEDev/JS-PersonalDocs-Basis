
class Persona { // Por defecto todas las clases en JS usan el 'use strict'

    // La sintaxis para inicializar propiedades de clase es la siguiente; no es como inicializar variables
    // ya que si se intenta hacer todas las variables en una linea separadas por coma daria error
    nombre = '';
    codigo = '';     // Es opcional deljar las propiedades aqui, ya que si se comentan, como siguen en el
    frase  = '';     // constructor funcionarán igual
    comida = '';

    // Constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        // Si las variables no están inicializadas  en el argumento de funcion; entonces tendrán un undefined
        if ( !nombre ) throw Error('Por favor coloque un nombre');

        // console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita( comida ){    // El nombre del metodo set no debe ser el mismo que la variable set
        this.comida = comida;           // ya que al asignarlo provocaria un bucle infinito
    }

    get getComidafavorita(){
        return this.comida.toUpperCase();
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
console.log( ironman );

spiderman.quienSoy();
// ironman.quienSoy();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.nemesis = 'Duente Verde'; // Evitar usar estas maneras de crear propiedades en clases
                                       // en este caso solo spiderman será el objeto que tenga esa propiedad

// spiderman.comida = 'Duende Verde';  // Evitar hacer esto aunque se pueda; aun no está implememntado de manera oficial
                                    // el uso de propiedades privadas de JS para evitar esto; sin embargo chrome lo admite
console.log( spiderman );
console.log( spiderman.getComidafavorita );
