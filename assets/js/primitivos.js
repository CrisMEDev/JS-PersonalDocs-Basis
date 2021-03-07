

let nombre = 'Peter Parker'; // String con comilla simple, es la más comun
console.log({nombre})

nombre = 'Ben Parker';
console.log({nombre})

nombre = "Tía May"; // String con doble commilla
nombre = `Tía May`; // String con back ticks, tienen otras aplicaciones

console.log( typeof nombre );

let esMarvel = true;
console.log( typeof esMarvel );

let edad = 33.001;  // En JS no existen float ni int solo el tipo number
console.log( typeof edad );

let superPoder;
console.log( typeof superPoder );  // undefined ya que aun no se le asigna un valor

let soyNull = null;
console.log( typeof soyNull );

let symbol1 = Symbol('a');          // Simbol se usa para generar identificadores unicos
console.log( typeof symbol1 );
let symbol2 = Symbol('a');
console.log( typeof symbol2 );

console.log( symbol1 === symbol2 );




