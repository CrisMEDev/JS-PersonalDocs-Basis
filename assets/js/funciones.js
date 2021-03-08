
function saludar( nombre ){
    console.log( arguments ); // Arguments hace referencia a los argumentos que se envian en las funciones tradicionales
    console.log( 'Hola ' + nombre );
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
saludar( 'Cristian', 25, 'true', 'México' );
saludar2( 'Aurora' );
saludarFlecha();
saludarFlecha2( 'Luz' );

