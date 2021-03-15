

const regresaTrue = () => {
    console.log('Regresa true');

    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');

    return false;
}

console.warn('Not o negación'); // Invierte un booleano
console.log( !true );
console.log( !false );

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true );
console.log( true && false );

console.log('======================');  // OTRO USO DEL && ES DISPARAR ACCIONES SI LA PRIMERA CONDICIÓN SE CUMPLE
console.log( regresaFalse() && regresaTrue() ); // regresa false PERO solo se ejecuta regresaTrue() si regresaFalse() es veradera sino
                                                // solo ejecutara la regresaFalse
console.log('======================');


console.warn('Or'); // true si algun valor es verdadero
console.log( true || false );

console.log('======================');  // OTRO USO DEL && ES DISPARAR ACCIONES SI LA PRIMERA CONDICIÓN SE CUMPLE
console.log( regresaTrue() || regresaFalse() ); // regresa true PERO solo se ejecuta regresaFalse() si regresaTrue() es falsa sino
                                                // solo ejecutara la regresaFalse
console.log('======================');






