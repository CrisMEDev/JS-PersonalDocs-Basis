

let juegos = [ 'Zelda', 'Mario', 'Metroid', 'Pacman' ];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => { // Hace un barrido de cada elemento y ejecuta una funcion de flecha
    console.log({ elemento, indice, arr });  // que puede contener instrucciones segun se ocupen
});

let nuevaLongitud = juegos.push( 'F-Zero' ); // Inserta un nuevo elemento al final del arreglo y devuelve la nueva longitud
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift( 'Fire Emblem' ); // Inserta un nuevo elemento al inicio del arrary
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop(); // Elimina el ultimo elemento del array
console.log({ juegoBorrado, juegos });


let posicion = 1;

console.log( juegos );
let elementosBorrados = juegos.splice( posicion, 2 ); // Elimina uno o varios elementos a partir de la posicion especificada
                                                      // devuelve un array con los elementos borrados
console.log({ elementosBorrados, juegos });


let metroidIndex = juegos.indexOf('Metroid'); // Devuelve el indice de la primera ocurrencia del elemento dentro del arreglo
console.log({ metroidIndex });



