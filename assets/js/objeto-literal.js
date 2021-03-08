
let personaje = {   // Es un objeto literal por las llaves
    nombre: 'Tony Stark',
    condeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },

    'ultima pelicula': 'inifinity way', // Se cambio la clave por un string para poder usar espacios
};

console.log( personaje );

console.log('Nombre', personaje.nombre);
console.log( personaje['nombre'] );

console.log( 'Edad:', personaje.edad );

console.log( 'Coordenadas:', personaje.coords.lat );
console.log( 'latitud:', personaje.coords.lat );
console.log( 'longitud:', personaje.coords.lng );

console.log( 'Num. de trajes:', personaje.trajes.length )
console.log( 'Ultimo traje:', personaje.trajes[ personaje.trajes.length - 1 ] )

const x = 'vivo';
console.log( 'Vivo:', personaje[x] );

console.log( 'Ultima pelicula:', personaje['ultima pelicula'] ); // Aqui no se puede usar la notacion de punto


// MAS DETALLES

delete personaje.edad; // Elimina la propiedad edad
personaje.casado = true; // Agrega la propiedad casado y le asigna el valor de true

console.log( personaje );

const entriesPares = Object.entries( personaje ); // Pasa las propiedades y sus valores como arreglos
console.log( entriesPares );



// declarar un bojeto literal como const hace que el objeto no se pueda mutar a otro tipo de objeto como string, number
// array, etc; sin embargo, se puede agregar y eliminar propiedades del objeto literal creado

Object.freeze( personaje ); // Evita agregar o borrar propiedades del objeto así como evitar modificar las existentes
// NO bloquea los objetos internos
personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'México';
console.log( personaje );


const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({ propiedades, valores });




