
let a = 15;

if ( a >= 10 ){ // Se espera un valor booleano, hay excepciones como lo son: undefined, null y asignaciones
    console.log("a es mayor o igual a 10");
} else {
    console.log("a es menor a 10");
}

// console.log("Fin del programa");

const hoy = new Date();

console.log( hoy );

let dia = hoy.getDay();

console.log({ dia }); // Domingo: 0, Lunes: 1, ..., Sabado: 6

if ( dia === 0 ){   // Tripe === significa comparar el valor y el objeto mientras que == solo compara el valor
                    // 1 === '1' (Falso),   1 == '1' (Verdadero)
    console.log("Domingo");
} else if (dia === 1) {
    console.log("Lunes");
    

    // if (dia === 1){
    //     console.log("Lunes");
    // } else {
    //     console.log("No es Lunes ni Domingo");
    // }

} else if ( dia === 2 ){
    console.log("Martes");
} else{
    console.log("No es Domingo, Lunes o Martes");
}


// Tarea dias de la semana

const diasLetras = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 0',
    2: () => 'Martes - 0',
    3: () => 'Miércoles - 0',
    4: () => 'Jueves - 0',
    5: () => 'Viernes - 0',
    6: () => 'Sábado - 0',
}

console.log( diasLetras[dia]() );  // Los parentesis son para ejecutar la funcion de flecha


const diasSemana = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];

console.log( diasSemana[dia] );


