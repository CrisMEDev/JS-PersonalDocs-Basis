

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



console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo';        // Asigna el ultimo valor true a mi variable si detecta un false se almacena el false
const a2 = true && 'Hola mundo' && 150;
const a3 = false && 'Hola mundo' && 150;
const a4 = 'Valor string' && false && 150;
console.table({ a1, a2, a3, a4 });

const b1 = soyFalso || 'Ya no soy falso';     // Asigna el primer valor true a mi variable si detecta un false, undefined o null
const b2 = soyFalso || soyUndefined || soyNull || 'Soy un valor';   // lo ignora
const b3 = soyFalso || soyUndefined || soyNull || 'Soy un valor de nuevo' || 777;
console.table({ b1, b2, b3 });


