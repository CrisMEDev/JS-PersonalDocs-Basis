
// function crearPersona( nombre, apellido ){
//     return {
//         nombre: nombre,
//         apellido: apellido,
//     }
// }

// function crearPersona( nombre, apellido ){  // Retorna un objeto con forma: { nombre: nombre, apellido: apellido }
//     return {
//         nombre,
//         apellido,
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});  // Se ponen los parentesis para retornar el objeto y no un undefined


const persona = crearPersona( 'Cristian', 'Morales' );
console.log( persona );


function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => { // Con ... (parámetro rest) se le dice a la funcion que se cree un arreglo
                                            // con cada uno de los argumentos. Se debe considerar que despues del parametro rest
                                            // no puede ir otro argumento, si se necesita extraer una variable como el caso de 'edad'
                                            // entonces sera tratado como un argumento independiente
    console.log({ edad, args });
}

const imprimeArgumentos3 = ( ...args ) => args;

imprimeArgumentos( 10, true, false, 'Cristian', 'Saludo' );
imprimeArgumentos2( 26, true, false, 'Cristian', 'Saludo' );

const argumentos = imprimeArgumentos3( 26, true, false, 'Cristian' );
const [ edad, vivo, casado, nombre ] = imprimeArgumentos3( 26, true, false, 'Cristian' );
console.log( argumentos[1], argumentos[3] );
console.log({ vivo, nombre });


const { apellido: nuevoNombreVariableApellido } = crearPersona( 'Cristian', 'Morales' ); // Se obtiene el pellido del retorno
                                                                                         // y además se le cambia el nombre a la variable
console.log({ nuevoNombreVariableApellido });


// DESESTRUCTURACION DE OBJETOS
let tony = {   // Es un objeto literal por las llaves
    nombre: 'Tony Stark',
    condeName: 'Ironman',
    vivo: false,
    // edad: 40,  // Se comento para suponer que la edad no existe como propiedad de este objeto
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
};


// const impromePropiedades = ( personaje ) => {
//     console.log( 'nombre', personaje.nombre );
//     console.log( 'condeName', personaje.condeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'edad', personaje.edad );
//     console.log( 'trajes', personaje.trajes );
// }

const impromePropiedades = ({ nombre, condeName, vivo, edad = 15, trajes }) => { // Toma la existencia de los nombres de las propiedades
                                                                            // y los asigna a variables individuales

    //edad = edad || 0; // Valida si la edad existe se le asigna edad sino un 0;
                      // ahora ya no es necesario ya que se puede dejar un valor por defecto en el argumento

    console.log({nombre});
    console.log({condeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});}

impromePropiedades( tony );





