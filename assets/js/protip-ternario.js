
// const elMayor = (a, b) => {
//     return (a > b) ? a : b;
// }

const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = ( miembro ) => miembro ? '2 Dollars' : '10 Dollars';

console.log( elMayor(10, 15) );
console.log( tieneMembresia( true ) );

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    ( () => 'Nick Fury' )() // Función anónima autoinvocada
];

console.log( amigosArr );

const nota = 95;   // A+, B, B+, B

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B+' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log( grado );
              



