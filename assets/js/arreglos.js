

// const array = new Array(10); // Arreglo con 10 elementos, no es comun verlo
// const arr = [];
// console.log( array );


let videojuegos = [ 'Mario 3', 'Megaman', 'Dark Souls 3' ];
// console.log({ videojuegos });

// console.log( videojuegos[0] );

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},  // Se puden almacenar inclusive funciones dentro de los arrays
    () => {},
    { a:1 },
    [ 'X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr, Willy',
        'Woodman',
    ] ],
];

// console.log({ arregloCosas });

// console.log( arregloCosas[0] );

console.log( arregloCosas[6]['a'] );  // Imprime el 1
console.log( arregloCosas[7][3] );    // Imprime Dr. Light
console.log( arregloCosas[7][4][1] );    // Imprime Woodman






