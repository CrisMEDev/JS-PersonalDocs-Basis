
class Persona {

    static porObjeto({nombre, apellido, pais}){ // Utilizar el oonstructor para crear uns instancia de persona usando un argumento diferente
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1   = 'Aurora',
      apellido1 = 'Hernández',
      pais1     = 'México';

const cris = {
    nombre:     'Cristian',
    apellido:   'Morales',
    pais:       'México'
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( cris );
persona1.getInfo();
persona2.getInfo();

