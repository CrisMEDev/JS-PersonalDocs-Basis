
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

while( i < carros.length ){ // undefined, null y false son considerados como no validos para ejecutar el cuerpo del while
    console.log( carros[i] );

    i++; // i = i + 1; i += 1;
}
console.log('====================')

i = 0;
while ( carros[i] ){
    console.log( carros[i] )
    i++;
}

console.log('====================')
console.log('do while')
let j = 0;
do{
    console.log( carros[j] );
    j++;
} while( carros[j] );

