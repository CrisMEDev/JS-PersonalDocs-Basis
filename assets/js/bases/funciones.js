
function saludar( nombre ){
    console.log( arguments ); // Arguments hace referencia a los argumentos que se envian en las funciones tradicionales
    console.log( 'Hola ' + nombre );

    return 1;
}

const saludar2 = function ( nombre ){   // La ventaja aqui es que al ser const no se podra reutilizar el nombre 'saludar2' para redefinir
    console.log( 'Hola ' + nombre + ' desde saludar 2' );
}

const saludarFlecha = () => {
    console.log( 'Hola flecha' );
}

const saludarFlecha2 = nombre => { // Cuando se manda un argumento a la funcion de flecha los parentesis son opcionales
                                   // es buena practica colocar los parentesis
    console.log( 'Hola ' + nombre);
}


saludar();
const retornoSaludar = saludar( 'Cristian', 25, 'true', 'México' ); // 1
console.log( {retornoSaludar} ); // una funcion sin un return por defecto retorna UNDEFINED

// saludar2( 'Aurora' );
// saludarFlecha();
// saludarFlecha2( 'Luz' );


function sumar( a, b ){
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }
const sumar2 = (a, b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();


console.log( sumar( 1, 2 ) );
console.log( sumar2( 3, 2 ) );
console.log( getAleatorio() );
console.log( getAleatorio2() );

