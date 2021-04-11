
const cristian = {
    nombre: 'Cristian',
    edad:   26,
    imprimir(){
        console.log(`Nombre: ${this.nombre}, - Edad: ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad:   27,
    imprimir(){
        console.log(`Nombre: ${this.nombre}, - Edad: ${ this.edad }`);
    }
}

const aurora = {
    nombre: 'Aurora',
    edad:   24,
    imprimir(){
        console.log(`Nombre: ${this.nombre}, - Edad: ${ this.edad }`);
    }
}

// cristian.imprimir();
// pedro.imprimir();
// aurora.imprimir();


// Hace tiempo está era la manera de crear por medio de funciones algo que se asemejaba a una clase en POO
// La problématica de esto era que al no estar bien documentado y no especificar que se debe usar la palabra new
// otros desarrolladores no tenian ni idea de como se usaba esa 'clase'
function Persona ( nombre, edad ){          // Toda función en JS si no se específica hará un " return undefined; "
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre}, - Edad: ${ this.edad }`);
    }
}

const maria = Persona('María', 18);     // María almacena el valor undefined
console.log( maria );



const juan = new Persona('Juan', 24);
console.log( juan );
juan.imprimir();

const Luz = new Persona('Luz', 24);
console.log( Luz );
Luz.imprimir();

