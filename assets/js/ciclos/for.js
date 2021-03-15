
const heroes = [
    'Batman',
    'Superman',
    'Mujer maravilla',
    'Aquaman',
];

console.warn('for');

for ( let i = 0; i < heroes.length; i++ ){
    console.log( heroes[i] );
}

console.warn('for in');

for ( let i in heroes ){
    console.log( heroes[i] );
}

console.warn('for of');

for ( let heroe of heroes ){ // Utilizado para obtener referencias a valores u objetos de manera sencilla
    console.log( heroe );
}



