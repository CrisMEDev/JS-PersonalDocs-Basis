
class Persona { // Por defecto todas las clases en JS usan el 'use strict'
    
    // Propiedades y métodos estáticos
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){   // No se puede hacer referencia a las propiedades NO estaticas debido a que no estamos trabajando con una
                        // clase instanciada
        console.log(this.nombre);   // retorna undefined 
        console.log('Hola a todos, soy un método estático');

    }

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

        Persona._conteo++;  // Como el constructor se ejecuta cada vez que se instancia un nuevo objeto
                            // este se incrementara en 1 para saber cuantas veces se a instanciado la clase 
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

class Heroe extends Persona {
    
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);    // Lama al constructor de la clase padre para hacer
                                         // referencia a su propiedades ahi referenciadas
        
        this.clan = 'Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();   // Para hacer la llamada a la funcion de la clase padre
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
console.log(spiderman);
spiderman.quienSoy();


