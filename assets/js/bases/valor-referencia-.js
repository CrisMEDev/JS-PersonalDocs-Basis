
// Paso por valor
let a = 10;
let b = a;

a = 30;

console.log({ a, b });

// Paso por referencia
let juan = { nombre: 'Juan' };
let ana = { ...juan }; // Utilizar el operador spread ( ... ), separa los elementos y rompe la referencia al objeto; en este caso juan

ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ( { ...persona } ) => { // Aqui los ... siguen indicando spread y no el parametro rest que convierte mis
                                             // argumentos en un arreglo; esto debido a que estan entre llaves {}
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });

// Arreglos; rompiendo referencia
const frutas = [ 'Manzana', 'Pera', 'Piña' ];

const otrasFrutas = [ ...frutas ]; // Se usa el operador spread para romper la referencia y separar por sus elementos
                                   // individuales, si no se usan los [] se almacena un arreglo dentro de otro
                                   // se puede usar el método slice() propio de los arreglos el cual sin argumentos devuelve
                                   // un nuevo arreglo sin la referencia al arreglo que dividió. frutas.slice() === [ ...frutas ]

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

